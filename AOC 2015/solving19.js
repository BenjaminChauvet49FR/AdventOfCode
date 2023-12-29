const rawReactsOfficial = [
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

const rawReactsExample = [
"H => HO",
"H => OH",
"O => HH"
];
const rawReacts = rawReactsOfficial;
const rawMol ="CRnSiRnCaPTiMgYCaPTiRnFArSiThFArCaSiThSiThPBCaCaSiRnSiRnTiTiMgArPBCaPMgYPTiRnFArFArCaSiRnBPMgArPRnCaPTiRnFArCaSiThCaCaFArPBCaCaPTiTiRnFArCaSiRnSiAlYSiThRnFArArCaSiRnBFArCaCaSiRnSiThCaCaCaFYCaPTiBCaSiThCaSiThPMgArSiRnCaPBFYCaCaFArCaCaCaCaSiThCaSiRnPRnFArPBSiThPRnFArSiRnMgArCaFYFArCaSiRnSiAlArTiTiTiTiTiTiTiRnPMgArPTiTiTiBSiRnSiAlArTiTiRnPMgArCaFYBPBPTiRnSiRnMgArSiThCaFArCaSiThFArPRnFArCaSiRnTiBSiThSiRnSiAlYCaFArPRnFArSiThCaFArCaCaSiThCaCaCaSiRnPRnCaFArFYPMgArCaPBCaPBSiRnFYPBCaFArCaSiAl";

var gReactions = {};

function conclusion_19_1() {
	initAllMolecules();
	return allChangesAdded();
} // 518 :)

var gNbAtomes, gIsInput;
var gE, gAr;
var gMolecule;
function initAllMolecules() {
	gReactions = [];
	var tokens;
	var listAllAtoms = [];
	var iSrc, iDests;
	var index;
	strAtom = "";
	rawReacts.forEach(str => {
		tokens = str.split(" ");
		iSrc = getIndexInListWithAdd(listAllAtoms, tokens[0]);
		if (strAtom == "e") {
			gAr = iSrc;
		} 
		iDests = [];
		for (var i = 0 ; i < tokens[2].length ; i++) {
			if (isUppercaseLetter(tokens[2].charAt(i))) {
				if (strAtom != "") {			
					index = getIndexInListWithAdd(listAllAtoms, strAtom);
					if (strAtom == "Ar") {
						gAr = index;
					} 
					iDests.push(index);
				}
				strAtom = tokens[2].charAt(i);
			} else {
				strAtom += tokens[2].charAt(i); 
			}
		}
		iDests.push(getIndexInListWithAdd(listAllAtoms, strAtom));		
		strAtom = "";
		gReactions.push({
			source : iSrc,
			dest : iDests.slice()
		});
	});
	gMolecule = [];
	strAtom = "";
	for (var i = 0 ; i < rawMol.length ; i++) {
		if (isUppercaseLetter(rawMol.charAt(i))) {
			if (strAtom != "") {				
				gMolecule.push(getIndexInListWithAdd(listAllAtoms, strAtom));
			}
			strAtom = rawMol.charAt(i);
		} else {
			strAtom += rawMol.charAt(i); 
		}
	}
	gMolecule.push(getIndexInListWithAdd(listAllAtoms, strAtom));
	gNbAtomes = listAllAtoms.length;
	gIsInput = generateArray(gNbAtomes.length, false);
	for (var i = 0 ; i < gReactions.length ; i++) {
		gIsInput[gReactions[i].source] = true;
	}
	gReactions.sort(function(reac1, reac2) {
		return reac1.dest.length - reac2.dest.length;
	});
}

var gAnswerP1;
function allChangesAdded() {
	gAnswerP1 = 0;
	var positionsInMolecule = generateArrangedArray(gNbAtomes, function() {return []});
	for (var i = 0 ; i < gMolecule.length ; i++) {
		positionsInMolecule[gMolecule[i]].push(i);
	}
	var newMolecule;
	var iS;
	var tree = {branches : []}
	for (var i = 0 ; i < gReactions.length ; i++) {
		iS = gReactions[i].source;
		for (var j = 0 ; j < positionsInMolecule[iS].length ; j++) {
			newMolecule = gMolecule.slice();
			newMolecule.splice(positionsInMolecule[iS][j], 1, gReactions[i].dest[0]);
			for (var k = 1 ; k < gReactions[i].dest.length ; k++) {
				newMolecule.splice(positionsInMolecule[iS][j]+k, 0, gReactions[i].dest[k]);
			}
			addNewConfig(tree, newMolecule);
		}
	}
	return gAnswerP1;
}

// TODO : May be generalizable
// Copy-pasted. This time, it is not about loop finding, however.
function addNewConfig(p_treeOfConfigs, p_molecule) {
	var newBranch = {subtree : p_treeOfConfigs, actuallyNew : false};
	var x;
	for (x = 0 ; x < p_molecule.length ; x++) {
		newBranch = tryToInsert(newBranch.subtree, p_molecule[x]);
	}
	if (newBranch.actuallyNew) { 
		gAnswerP1++;
	}
}

// Tries to insert an array in a subtree (imbricated arrays)
// If successful, return {true, singleton of the new tree}
// Otherwise, return the subtree containing it
function tryToInsert(p_subtree, p_eltToAdd) {
	for (var i = 0 ; i < p_subtree.branches.length ; i++) {
		if (p_subtree.branches[i].node == p_eltToAdd) {
			return {actuallyNew : false, subtree : p_subtree.branches[i]}
		} 
	}
	p_subtree.branches.push({ 
		node : p_eltToAdd,
		branches : []
	});
	return {
		actuallyNew : true,
		subtree : p_subtree.branches[p_subtree.branches.length-1]
	}
}


// ----------------------

function calculateNeededSteps() {
	// Okay, here is how we'll do ! List ALL molecules that you can obtain the goal one from.
	// No, theorically possible but I'm too lazy to try it !
	// Another trick : 
	// "Ar" is not in any input and is only at the end of outputs
	// "Y" is not in any input and is only in inputs that end with "Ar"s.
	// Same for "Rn".
	// So all we need is to split the molecule into "Ar" and almost treat the problems independently from each other	

	// Actually after sorting the list of reactions : (now, I speak with number 3, 4 and 10)
	// All outputs are of size 2 (not interesting), 4 (with atoms 3 and 4 in that order), 6 (with atoms 3 10 4 in that order, potentially 4) or 8 (with atoms 13 3 10 10 4)
	// We need to maximize the number of outputs size 8, then 6, then 4, so we can minimize those size 2.
	
	// So all we need to do is : putting one 8 for the 13s. Then fulling with 6 until we don't need "10"s anymore. Then fulling with 4 until we don't need 3 and 4s anymore.
	// Molecule size starts at 1 and must end at 285.
	// Putting the bigger output reactions will reduce the number of required steps as it will increase the size of the molecule by 7/5/3/1 in descending order.
	// I seriously hope it will work !
	
	var terminals = [];
	var countTermsInMol = [];
	for (var i = 0 ; i < gNbAtomes ; i++) {
		if (!gIsInput[i]) {
			terminals.push(i);
			countTermsInMol.push(0);
		}
	}
	for (var i = 0 ; i < gMolecule.length ; i++) {
		for (var j = 0 ; j < terminals.length ; j++) {
			if (terminals[j] == gMolecule[i]) {
				countTermsInMol[j]++;
				break;
			}
		}
	}
	// Now, generate the molecule
	var moleculeProducedLength = 1; 
	var steps = 0;
	moleculeProducedLength += countTermsInMol[3]*7; // Nb of atoms (terminals[3] needed) : each reaction extends the molecule by 7
	countTermsInMol[2] -= 2*countTermsInMol[3]; 
	countTermsInMol[1] -= countTermsInMol[3]; 
	countTermsInMol[0] -= countTermsInMol[3]; 
	steps += countTermsInMol[3];

	moleculeProducedLength += countTermsInMol[2]*5;
	steps += countTermsInMol[2];

	countTermsInMol[1] -= countTermsInMol[2];
	moleculeProducedLength += countTermsInMol[1]*3;
	steps += countTermsInMol[1];
	// terminals 0 and 1 are always needed together...
	// For the rest of the molecule, we need one step each time
	steps += gMolecule.length-moleculeProducedLength;
	return steps;
}

// This one is gonna be "dumb and evil" : After each generation, I'll give all the molecules, dropping them out if they are longer than the expected length
function conclusion_19_2() {
	initAllMolecules();
	return calculateNeededSteps();
}

