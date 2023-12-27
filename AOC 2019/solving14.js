const rawDataOfficial=String.raw`6 WBVJ, 16 CDVNK => 2 PJBZT
135 ORE => 8 MWDXJ
27 NBRHT, 2 NSWK, 2 CMHMQ, 29 NFCB, 11 KNGJ, 12 MGCKC, 56 NHTKL, 7 WNFSV => 1 FUEL
1 SFJFX, 3 MXNK => 4 NLSBZ
2 PFKRW, 1 VXFRX, 22 QDJCL => 6 GBDG
7 TSTF, 4 ZLJN => 7 DMWS
5 KPCF, 1 DLMDJ, 1 FNWGH => 6 TSTF
8 DTWKS, 1 GBDG => 4 CGZQ
26 CNWZM, 4 KPCF => 3 DTWKS
1 JVLHM, 7 DTWKS, 7 PJBZT => 8 MRPHV
2 MWDXJ => 3 VHFPC
1 WXNW, 6 PFKRW => 7 ZVGVP
2 ZVGVP => 1 CMHMQ
8 JVLHM, 11 XRKN, 1 HCGKZ => 8 CHZLX
20 TSTF => 4 XDZMZ
3 CMHMQ, 7 ZVGVP, 10 XRKN => 9 FNWGH
12 HCGKZ, 4 NLSBZ, 15 RWRDP, 4 MRPHV, 31 KRDV, 6 PMXK, 2 NFVZ => 7 KNGJ
1 TXZCM => 9 BMPJ
2 ZFXQ => 3 NBRHT
13 JVLHM, 1 VHFPC => 3 PBJPZ
7 HCGKZ => 7 PMXK
2 RWRDP, 3 VSTQ, 12 PMXK => 7 MXNK
1 PJBZT, 3 QRSK => 1 KRDV
1 MGCKC, 6 CMHMQ => 6 PQTVS
1 TNHCS, 24 ZLJN => 4 RWRDP
5 MWDXJ, 1 WXNW => 9 QBCLF
1 ZFXQ, 1 DLMDJ => 4 DJXRM
1 ZFXQ => 2 CNWZM
1 KPCF => 6 ZXDVF
2 MRPHV => 1 GSTG
5 BMPJ, 2 ZLJN => 8 XQJZ
1 MWDXJ, 1 ZVGVP => 3 CDVNK
3 NFCB, 3 CMHMQ, 1 MWDXJ => 4 XRKN
1 WXNW, 1 TXZCM => 5 ZLJN
4 ZXDVF => 4 WBVJ
2 GBDG => 4 KPCF
4 CHZLX, 7 ZFXQ, 14 PQTVS => 9 VSTQ
3 TXZCM, 7 ZLJN, 7 ZXDVF => 9 JVLHM
1 DMWS, 3 TSTF => 5 HCGKZ
2 CGZQ => 4 NFVZ
2 PQTVS, 9 VMNJ => 9 TXZCM
3 KPCF => 4 DLMDJ
7 VMNJ, 24 XQJZ, 7 GSTG, 8 NLSBZ, 10 MGCKC, 2 SFJFX, 18 BMPJ => 1 NSWK
41 CNWZM, 5 DJXRM, 1 QRSK, 1 KPCF, 15 XDZMZ, 3 MRPHV, 1 NLSBZ, 9 KRDV => 2 WNFSV
10 PBJPZ, 29 BMPJ, 2 PMXK => 7 SFJFX
116 ORE => 4 WXNW
2 CNWZM => 2 TNHCS
10 QBCLF => 7 NFCB
1 QBCLF => 2 ZFXQ
15 ZLJN => 7 QRSK
183 ORE => 3 QDJCL
11 GBDG => 5 VMNJ
4 DMWS, 3 QRSK => 3 NHTKL
124 ORE => 6 VXFRX
1 MWDXJ => 6 MGCKC
108 ORE => 9 PFKRW`.split("\n");

const rawDataExample = String.raw`9 ORE => 2 A
8 ORE => 3 B
7 ORE => 5 C
3 A, 4 B => 1 AB
5 B, 7 C => 1 BC
4 C, 1 A => 1 CA
2 AB, 3 BC, 4 CA => 1 FUEL`.split("\n");

const rawDataExample2 = String.raw`171 ORE => 8 CNZTR
7 ZLQW, 3 BMBT, 9 XCVML, 26 XMNCP, 1 WPTQ, 2 MZWV, 1 RJRHP => 4 PLWSL
114 ORE => 4 BHXH
14 VRPVC => 6 BMBT
6 BHXH, 18 KTJDG, 12 WPTQ, 7 PLWSL, 31 FHTLT, 37 ZDVW => 1 FUEL
6 WPTQ, 2 BMBT, 8 ZLQW, 18 KTJDG, 1 XMNCP, 6 MZWV, 1 RJRHP => 6 FHTLT
15 XDBXC, 2 LTCX, 1 VRPVC => 6 ZLQW
13 WPTQ, 10 LTCX, 3 RJRHP, 14 XMNCP, 2 MZWV, 1 ZLQW => 1 ZDVW
5 BMBT => 4 WPTQ
189 ORE => 9 KTJDG
1 MZWV, 17 XDBXC, 3 XCVML => 2 XMNCP
12 VRPVC, 27 CNZTR => 2 XDBXC
15 KTJDG, 12 BHXH => 5 XCVML
3 BHXH, 2 VRPVC => 7 MZWV
121 ORE => 7 VRPVC
7 XCVML => 6 RJRHP
5 BHXH, 4 VRPVC => 5 LTCX`.split("\n"); // 2210736 ore per fuel

const rawDataExample3 = String.raw`157 ORE => 5 NZVS
165 ORE => 6 DCFZ
44 XJWVT, 5 KHKGT, 1 QDVJ, 29 NZVS, 9 GPVTF, 48 HKGWZ => 1 FUEL
12 HKGWZ, 1 GPVTF, 8 PSHF => 9 QDVJ
179 ORE => 7 PSHF
177 ORE => 5 HKGWZ
7 DCFZ, 7 PSHF => 2 XJWVT
165 ORE => 2 GPVTF
3 DCFZ, 7 NZVS, 5 HKGWZ, 10 PSHF => 8 KHKGT`.split("\n"); // 13312 ore per fuel

var gDataReactions;
const gIOre = 0;
const gIFuel = 1;
var gNbMaterials;

function init() {
	gDataReactions = [];
	gNbMaterials = 0;
	var label = [];
	var tokens;
	var tokensIn, tokensOut;
	var materials = ["ORE", "FUEL"]; // Not a bad trick
	for (var i = 0 ; i < rawData.length ; i++) {
		gDataReactions.push({input : [], output : []});
		tokens = rawData[i].split(" => ");
		tokensIn = tokens[0].split(", ");
		tokensOut = tokens[1].split(", ");
		for (var j = 0 ; j < tokensIn.length ; j++) {
			tokens = tokensIn[j].split(" ");
			gDataReactions[i].input.push({nb : parseInt(tokens[0], 0), id : getIndexInListWithAdd(materials, tokens[1]) });
		}
		for (var j = 0 ; j < tokensOut.length ; j++) {
			tokens = tokensOut[j].split(" ");
			gDataReactions[i].output.push({nb : parseInt(tokens[0], 0), id : getIndexInListWithAdd(materials, tokens[1]) });
		}
	}
	gNbMaterials = materials.length;
}

function conclusion_14_1() {
	init();
	initProductionsAndCosts();
	calculate();
	return gNeeded[gIOre];
} // 314406263 too high :( (I made some useless multiplication... I didn't use the for loop when submitting my first answer)

var gHowToProduce;
var gNeeded, gExtra;
function initProductionsAndCosts() {
//	gReactionsNeededForThis = generateArrangedArray(gNbMaterials, function(x) {return []});
	gReactionsNeededForThis = generateArray(gNbMaterials, -1);
	gNeeded = generateArray(gNbMaterials, 0);
	gExtra = generateArray(gNbMaterials, 0);
	for (var i = 0 ; i < gDataReactions.length ; i++) {
		if (gDataReactions[i].output.length > 1 && gNbMaterials[gDataReactions[i].output[0].id] == -1) {
			console.log("Wrong assumptions !")
		}
		// Only one output per reaction, and each material can be produced only once ?
		gReactionsNeededForThis[gDataReactions[i].output[0].id] = i ;
	}
	gNeeded[gIFuel] = 1;
}

function calculate() {
	var neededReactions = [gReactionsNeededForThis[gIFuel]];
	var futureNeededReactions;
	var reaction;
	var outputNeeded, amountMade1Reac;
	var nbReacsNeeded;
	while (neededReactions.length > 0) {
		futureNeededReactions = [];
		neededReactions.forEach(ri => {
			if (ri != -1) {				
				reaction = gDataReactions[ri];
				//outputNeeded = gNeeded[reaction.output[0].id];
				//amountMade1Reac = reaction.output[0].nb;
				//nbReacsNeeded = Math.ceil(outputNeeded/amountMade1Reac);
				while (gNeeded[reaction.output[0].id] > 0) {
					for (var i = 0 ; i < reaction.input.length ; i++) {
						if (reaction.input[i].id != -1) {				
							shiftIntoListUniqueNumbers(futureNeededReactions, gReactionsNeededForThis[reaction.input[i].id]);
						}
						//gNeeded[reaction.input[i].id] += reaction.input[i].nb*nbReacsNeeded;
						gNeeded[reaction.input[i].id] += reaction.input[i].nb;
					}
					gNeeded[reaction.output[0].id] -= reaction.output[0].nb;
				}
			}
		});
		neededReactions = futureNeededReactions.slice();
	}
}

/*2 ORE => 3 B
2 B => FUEL
[ORE, FUEL, B] : [0, 1, 0] -> [0, 0, 2] -> [2, 0, 1]

9 ORE => 2 A
8 ORE => 3 B
7 ORE => 5 C
3 A, 4 B => 1 AB
5 B, 7 C => 1 BC
4 C, 1 A => 1 CA
2 AB, 3 BC, 4 CA => 1 FUEL
[ORE, FUEL, A B C, AB BC CA] : [0, 1, 0 0 0, 0 0 0 ] -> (Final reaction) [0, 0, 0 0 0, 2 3 4] -> 
(In waiting list : reactions for AB, BC and CA, process them in that order) [0, 0, 6 8 0, 0 3 4] (need reactions for A and B) -> [0, 0, 6 23 21, 0 0 4] (add need reactions for C) -> [0, 0, 10 23 37, 0 0 0]
(In waiting list : reactions for A, B, C, process them in that order (now, AB AC and BC entries are no longer represented here : ) [45, 0, 0 23 37] -> [109, 0, 0 1 37] -> [165, 0, 0 1 3])
*/
var rawData = rawDataExample3; 
function conclusion_14_2() {
	init();
	initProductionsAndCosts();
	gFuel = 0;
	treeOfSeenConfigs = {branches : []};
	var previousFuelAmount = -1;
	while (gNeeded[gIOre] < LIMIT_AMOUNT) {		
		produce1Fuel();
		
		// Trying to jump through time...
		if (previousFuelAmount == -1) {			
			//previousFuelAmount = addNewConfig(treeOfSeenConfigs, {fuel : gFuel, oreTaken : gNeeded[gIOre]}, gNeeded);
			var k;
			for (k = 2 ; k < gNeeded.length ; k++) {
				if (gNeeded[k] != 0) {
					break;
				}
			} 
			if (k == gNeeded.length) {
				previousFuelAmount = {fuel : 0, oreTaken : 0};				
			}
			if (previousFuelAmount != -1) {
				//const periodDuration = i-previousIter;
				const periodDuration = gNeeded[gIOre]-previousFuelAmount.oreTaken;
				const fuelPeriod = gFuel - previousFuelAmount.fuel;
				var speedUp = 160000;
				while (speedUp > 0) {	
					while (gNeeded[gIOre] < LIMIT_AMOUNT-(periodDuration*speedUp)) {
						gNeeded[gIOre] += periodDuration*speedUp; 
						gFuel += fuelPeriod*speedUp;
					}
					speedUp = Math.floor(speedUp/20);
				}
			}
		}
		
		
	}
	return gFuel;
}

const LIMIT_AMOUNT = 1000000000000;
//const LIMIT_AMOUNT = 10000000;
function produce1Fuel() {
	gNeeded[gIFuel] = 1;
	calculate();
	if (gNeeded[gIOre] < LIMIT_AMOUNT) {
		gFuel++;
	}
}

// TODO redo this problem. There is no period with the remaining stuff to help me, so I used the "good ol' " for loop !