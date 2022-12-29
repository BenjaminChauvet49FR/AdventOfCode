/*const rawDataPolymer = "NNCB";

const rawDataExpansion = [
"CH -> B",
"HH -> N",
"CB -> H",
"NH -> C",
"HB -> C",
"HC -> B",
"HN -> C",
"NN -> C",
"BH -> H",
"NC -> B",
"NB -> B",
"BN -> B",
"BB -> N",
"BC -> B",
"CC -> N",
"CN -> C"];*/

const rawDataPolymer = "OOVSKSPKPPPNNFFBCNOV"

const rawDataExpansion = [
"BC -> C",
"PP -> O",
"SK -> K",
"KH -> N",
"OK -> S",
"PC -> O",
"VP -> K",
"CF -> K",
"HC -> H",
"FV -> V",
"PB -> P",
"NK -> H",
"CK -> F",
"FH -> H",
"SV -> B",
"NH -> C",
"CP -> S",
"HP -> O",
"HS -> O",
"BK -> B",
"KC -> P",
"VV -> B",
"OF -> O",
"KP -> V",
"FO -> V",
"FK -> V",
"VH -> K",
"KB -> P",
"KF -> H",
"SH -> S",
"HF -> O",
"BB -> F",
"FC -> O",
"SO -> S",
"BS -> O",
"HH -> C",
"BO -> S",
"CO -> F",
"VC -> V",
"KS -> N",
"OC -> N",
"FP -> P",
"HN -> B",
"HV -> V",
"HO -> P",
"KO -> C",
"SF -> H",
"NO -> N",
"PS -> C",
"BP -> K",
"SC -> C",
"NP -> C",
"CH -> V",
"KV -> B",
"HK -> V",
"OP -> V",
"SP -> V",
"NC -> V",
"FF -> B",
"CC -> V",
"CS -> F",
"SB -> C",
"OS -> C",
"FN -> O",
"CV -> P",
"OH -> H",
"OO -> P",
"PO -> F",
"NS -> H",
"VB -> K",
"OV -> K",
"PH -> H",
"BH -> V",
"SS -> B",
"PK -> F",
"VK -> O",
"BN -> V",
"VF -> O",
"PF -> H",
"VS -> K",
"ON -> V",
"BF -> F",
"CN -> F",
"VO -> B",
"FS -> K",
"OB -> B",
"PN -> H",
"NF -> O",
"VN -> P",
"BV -> S",
"NV -> V",
"FB -> V",
"NB -> P",
"CB -> B",
"KK -> S",
"NN -> F",
"SN -> B",
"HB -> P",
"PV -> S",
"KN -> S"
];

var gData = {};

function initData() {
	gData.pairs = [];
	gData.elts = [];
	// First chains : polymer
	var chain, ind;
	for (var i = 1 ; i < rawDataPolymer.length ; i++) {
		chain = rawDataPolymer[i-1] + rawDataPolymer[i];
		ind = findOrPutChain(chain, gData.pairs);
		gData.pairs[ind].number++;
	}
	// Then : all possible expansions
	var tokens;
	for (var i = 0 ; i < rawDataExpansion.length ; i++) {
		tokens = rawDataExpansion[i].split(" -> ");
		ind = findOrPutChain(tokens[0], gData.pairs);
		gData.pairs[ind].expansion = tokens[1];
	}
	// The indexings, to make it simpler
	var token;
	var pair;
	for (var i = 0 ; i < gData.pairs.length ; i++) {
		pair = gData.pairs[i];
		pair.index1 = findOrPutChain(pair.value[0] + pair.expansion, gData.pairs);
		pair.index2 = findOrPutChain(pair.expansion + pair.value[1], gData.pairs);
	}
	// Finally : all elements
	for (var i = 0 ; i < gData.pairs.length ; i++) {
		findOrPutChain(gData.pairs[i].value[0], gData.elts);
		findOrPutChain(gData.pairs[i].value[1], gData.elts);
	}
}

function findOrPutChain(p_chain, p_array) {
	for (var i = 0 ; i < p_array.length ; i++) {
		if (p_chain == p_array[i].value) {
			return i;
		}
	}
	if (i == p_array.length) {
		p_array.push({value : p_chain, number : 0});
	}
	return i;
}

function conclusion_14_1() {
	return conclusion_14_aux(10); // Correct answer = 2010
}

function conclusion_14_2() {
	return conclusion_14_aux(40); // Correct answer = 2437698971143
}


function conclusion_14_aux(p_numberRounds) {
	var i, j;
	initData();
	futureArray = generateArray(gData.pairs.length, 0);
	// Count the elements first !
	for (j = 0 ; j < rawDataPolymer.length ; j++) {
		gData.elts[findOrPutChain(rawDataPolymer[j], gData.elts)].number ++;
	}
	for (i = 0 ; i < p_numberRounds ; i++) {
		for (j = 0 ; j < gData.pairs.length ; j++) {
			futureArray[gData.pairs[j].index1] += gData.pairs[j].number;
			futureArray[gData.pairs[j].index2] += gData.pairs[j].number;
			// Increase the number of elements by the number of times it was created in expansion
			gData.elts[findOrPutChain(gData.pairs[j].expansion, gData.elts)].number += gData.pairs[j].number;
		}
		for (j = 0 ; j < gData.pairs.length ; j++) {
			gData.pairs[j].number = futureArray[j];
			futureArray[j] = 0;
		}
	}
	
	
	gData.elts.sort(function(a, b) {
		return a.number - b.number;
	});
	
	return gData.elts[gData.elts.length-1].number - gData.elts[0].number;
}