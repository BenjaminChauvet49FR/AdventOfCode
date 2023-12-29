const rawDataOfficial = [
"Al => ThF",
"Al => ThRnFAr",
"B => BCa",
"B => TiB",
"B => TiRnFAr",
"Ca => CaCa",
"Ca => PB",
"Ca => PRnFAr",
"Ca => SiRnFYFAr",
"Ca => SiRnMgAr",
"Ca => SiTh",
"F => CaF",
"F => PMg",
"F => SiAl",
"H => CRnAlAr",
"H => CRnFYFYFAr",
"H => CRnFYMgAr",
"H => CRnMgYFAr",
"H => HCa",
"H => NRnFYFAr",
"H => NRnMgAr",
"H => NTh",
"H => OB",
"H => ORnFAr",
"Mg => BF",
"Mg => TiMg",
"N => CRnFAr",
"N => HSi",
"O => CRnFYFAr",
"O => CRnMgAr",
"O => HP",
"O => NRnFAr",
"O => OTi",
"P => CaP",
"P => PTi",
"P => SiRnFAr",
"Si => CaSi",
"Th => ThCa",
"Ti => BP",
"Ti => TiTi",
"e => HF",
"e => NAl",
"e => OMg"
];


/* Conclusions : 
e-HF
H-OB
O-HP
P-PTi

CRnSiRnCaPTiMgYCaPTiRnFAr
*/ 





const rawDataExample = [
"H => HO",
"H => OH",
"O => HH"
];
const rawData = rawDataOfficial;
const rawMol ="CRnSiRnCaPTiMgYCaPTiRnFArSiThFArCaSiThSiThPBCaCaSiRnSiRnTiTiMgArPBCaPMgYPTiRnFArFArCaSiRnBPMgArPRnCaPTiRnFArCaSiThCaCaFArPBCaCaPTiTiRnFArCaSiRnSiAlYSiThRnFArArCaSiRnBFArCaCaSiRnSiThCaCaCaFYCaPTiBCaSiThCaSiThPMgArSiRnCaPBFYCaCaFArCaCaCaCaSiThCaSiRnPRnFArPBSiThPRnFArSiRnMgArCaFYFArCaSiRnSiAlArTiTiTiTiTiTiTiRnPMgArPTiTiTiBSiRnSiAlArTiTiRnPMgArCaFYBPBPTiRnSiRnMgArSiThCaFArCaSiThFArPRnFArCaSiRnTiBSiThSiRnSiAlYCaFArPRnFArSiThCaFArCaCaSiThCaCaCaSiRnPRnCaFArFYPMgArCaPBCaPBSiRnFYPBCaFArCaSiAl";

var gData = {};

// (50 ; Ti ; 50)
// Modif : (Ti -> TiTi) : (50 ; 'Ti' ; 52) OR (52 ; 'Ti' ; 50)... or (50 ; Ti ; Ti ; 50) hence the interest to cut the list in undiscutable tokens rather than an uncontrollable chain.
// Any "consecutive" tokens must be taken altogether in the ending chain

// (50 ; T ; 50)
// (T -> X) : (50 ; X ; 50)
// (T -> TX) : (51 ; X ; 50)
// (T -> XT) : (50 ; X ; 51)
// (T -> TT) : (51 ; T ; 50)

// Now, for the representation : 
// (51 ; T ; 50) : what if T was present as 51st token ? It becomes (50 ; TT ; 50). And what if T is present as 50th ? It becomes (49 ; TTT ; 50)... likewise if T is the last 50th token.
// (50 ; NGNG ; 50) : what if NGNG was present starting before 51st token (so, NG right before) ? It becomes (48 ; NGNGNG ; 50). And it can expand after likewise : (48 NGNGNGNG 48).

 // Well, no, this token idea was stupid, because not all the "replaced" can be marked as tokens. 
 // The representation idea isn't bad, all we need is treat characters as tokens.

// But wait ? How about (49 AX 50) (50 XA 49) when we have (49 AXA 49) ?
// Okay, anyway we have got the "representation", the objective is to make sure they are unique. I'm sure this can be the second part of the problem, as all we have to do is to "align" them with giving them the same numbers of characters left and right to see how equal they are.
// We need to make a unique representation of the string where ALL the chars in the left part are guaranteed to be untouched. 
// So if we can write (50 BC ...) instead of (49 ABC ...), we will !
// And in the T->TT cases we will have (50 ; T ; 50) -> (51 ; T ; 50) ; not a problem !
	// Let's assume we have (50 ; TTT ; 53) (original chain, no T after TTT) and (T -> TT) :
		// We will have (51 ; T ; 55) (52 ; T ; 54) (53 ; T ; 53) 
		//	all chains will become (53 ; T ; 53) 
	// And with HOHOHO (H HO, H OH, O HH) : 
		/*
		0(HO)5 1(O)5 2(O)4
		2(HO)3 3(O)3 4(O)2
		4(HO)1 5(O)1 6(O)0
		0(OH)5 0(O)6 
		2(OH)3 2(O)4
		4(OH)1 4(O)2
		1(HH)4 
		3(HH)2
		5(HH)0
		*/
		// But what about 3(AX)4 and 4(XB)3 ? Well, if A is in 4, it becomes 4(X)4. And if B is in (4 from end) we have overall 4(X)4.
			// Should X be shiftable, we will shift it, for instance maybe we can have 6(X)2, or even 7(X)1 
			//
			
			//Start chain : abcdefg
			//abcde(fgf)g 
			//abcd(efg)fg
			//abcdef(gfg) 
			// How to equalize them ? 
			// Slide them all to abcdefg(fg) ! (we can always slide from abcd(efg)xy to abcde(fgx)y if started chain was abcde...xy. Don't forget it's representation of expanded !)

			// Start chain : abc
			// a(abb)c
			// (aab)bc
			// align on a(ab)bc
			// start chain : abcabc
			// a(bcabX)cabc
			// ab(cabXc)abc
			// Here, we can aligh them on abcab(Xcab)c : save as many letters as you can left, push right if needed ! Well actually... if some "saved" letters are added simultaneously left and right of the "added" part", is it a big deal ?  It's all about representating the expanded chain,not comparing it to the original !
			// So if original is abcdefghi and in a replacement we have abcdefXbcdefghi, (abcdef)X(bcdefghi) should be acceptable. And so should be (abcdef)(abcdefghi).
				// In the final representation, all that matters is that the first char of the break OR of the "final characters" is not from the beginning.
				// And if we go from abcdef to abcdcdef, then we should have (abcd)(cdef) . We can also imagine having (abcd)(cd)(cdef) (abcd)(abcdef)(ef)

function init() {
	gData.changes = [];
	var tokens;
	rawData.forEach(str => {
		tokens = str.split(" ");
		gData.changes.push({
			source : tokens[0],
			dest : tokens[2]
		});
	});
}

var gSolution;

/*function conclusion_19_1() {
	init();
	gSolution = [];	
	gData.changes.forEach(change => {
		//addAllChanges("HOHOHO", change.source, change.dest);
		addAllChanges(rawMol, change.source, change.dest);
	});
	sortAscending(gSolution, [function(x) {return x.savedStart}, function(x) {return x.str}, function(x) {return x.savedEnd}]);
	var answer = 1;
	for (var i = 1 ; i < gSolution.length ; i++) {
		if (gSolution[i].savedStart != gSolution[i-1].savedStart || gSolution[i].str != gSolution[i-1].str || gSolution[i].savedEnd != gSolution[i-1].savedEnd) {
			answer++;
		}
	}
	return answer;
}*/ // Well, I should directly have tested the solution below as I inexplicably got "539" instead of "518" for that one

function conclusion_19_1() {
	init();
	gSolution = [];	
	p_molecule = rawMol;
	var c1, c2;
	gData.changes.forEach(change => {
		c1 = change.source.charAt(0);
		c2 = change.source.length == 2 ? change.source.charAt(1) : 'a';
		for (var i = 0 ; i < p_molecule.length ; i++) {
			if (c1 == p_molecule.charAt(i)) {
				if (change.source.length == 2 && i == p_molecule.length-1) {
					break;
				}	
				if (change.source.length == 1 || c2 == p_molecule.charAt(i+1)) {
					gSolution.push(p_molecule.substring(0, i) + change.dest + p_molecule.substring(i+change.source.length));
				}
			}
		}
	});
	gSolution.sort();
	
	//sortAscending(gSolution, [function(x) {return x.savedStart}, function(x) {return x.str}, function(x) {return x.savedEnd}]);
	var answer = 1;
	for (var i = 1 ; i < gSolution.length ; i++) {
		if (gSolution[i] != gSolution[i-1]) {
			answer++;
		}
	}
	return answer;
	
}


// Find all the matching changes in rawData
function addAllChanges(p_molecule, p_source, p_replace) {
	const c1 = p_source.charAt(0);
	const c2 = p_source.length == 2 ? p_source.charAt(1) : 'a';
	var newPos, newPos2;
	for (var i = 0 ; i < p_molecule.length ; i++) {
		if (c1 == p_molecule.charAt(i)) {
			if (p_source.length == 2 && i == p_molecule.length-1) {
				break;
			}	
			if (p_source.length == 1 || c2 == p_molecule.charAt(i+1)) {
				
				before = i,// # of preserved characters before the string
				after = p_molecule.length-i-p_source.length,
				str = p_replace.slice();
				// Now, we must make (before,str,after) representation unique such that :
				// First, before (= the number of characters that match without discontinuity from the start between original and altered molecule) is as big as possible
				// Second, after (= same but from the end ; some characters from the original molecule may already be in the "before" part, see example below)
				// The remaining characters are in str
				// Examples with original molecule abccde : 
				// if the altered one was abXcde, its representation would be (2,"X",3)
				// if the altered one was abcccde, its representation would be (4,"",3) : here, the 2nd 'c' from the original molecule is repeated in before and after parts
				while (str.length > 0 && before < p_molecule.length && str.charAt(0) == p_molecule.charAt(before)) {
					before++;
					str = str.substring(1);
				}
				if (str.length == 0) {
					newPos = i + p_replace.length // 1st position of the right-to-the-replacement in the new chain
					newPos2 = i + p_source.length // 1st position of the right-to-the-replacement in the old chain
					while (newPos < p_molecule.length && newPos2 < p_molecule.length && p_molecule.charAt(newPos) == rawMol.charAt(newPos2)) {
						newPos++;
						newPos2++;
						before++;
						after--;
					}
				}
				while (str.length > 0 && after < p_molecule.length && str.charAt(str.length-1) == p_molecule.charAt(p_molecule.length-1-after)) {
					after++;
					str = str.substring(0, str.length-1);
				}
				gSolution.push({
					savedStart : before,
					savedEnd : after,
					str : str
				});
				
			}
		}
	}
}



// This one is gonna be "dumb and evil" : After each generation, I'll give all the molecules, dropping them out if they are longer than the expected length
function conclusion_19_2() {
	// Okay, here is how we'll do ! List ALL molecules that you can obtain the goal one from.
	// No, theorically possible but I'm too lazy to try it !
	// Another trick : 
	// "Ar" is not in any input and is only at the end of outputs
	// "Y" is not in any input and is only in inputs that end with "Ar"s.
	// Same for "Rn".
	// So all we need is to split the molecule into "Ar" and almost treat the problems independently from each other
	
}

