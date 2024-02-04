const rawData = [
[-13, 14, -7],
[-18, 9, 0],
[0, -3, -3],
[-15, 3, -13]
];

var gPos;
var gVelo;

function init() {
	gPos = [];
	for (var i = 0 ; i < rawData.length ; i++) {
		gPos.push(rawData[i].slice());
	}
	gVelo = generateDoubleEntryArray(rawData[0].length, rawData.length, 0);
}

function conclusion_12_1() {
	init();
	for (var i = 0 ; i < 1000 ; i++) {
		performStep();	
	}
	// Victory lap
	var answer = 0;
	var e1, e2;
	for (var i = 0 ; i < rawData.length ; i++) {
		e1 = 0;
		e2 = 0;
		for (var j = 0 ; j <= 2 ; j++) {
			e1 += Math.abs(gPos[i][j]);
			e2 += Math.abs(gVelo[i][j]);
		}
		answer += e1*e2;
	}
	
	return answer;
}

function performStep() {
	for (var i = 1 ; i < gPos.length ; i++) {
		for (var j = 0 ; j < i ; j++) {
			applyVelocities(i, j);
		}
	}
	for (var i = 0 ; i < gPos.length ; i++) {
		for (var j = 0 ; j <= 2 ; j++) {
			gPos[i][j] += gVelo[i][j];
		}
	}
}

function applyVelocities(p_i, p_j) {
	var pi, pj;
	for (var i = 0 ; i <= 2 ; i++) {
		pi = gPos[p_i][i];
		pj = gPos[p_j][i];
		if (pi < pj) {
			gVelo[p_i][i]++;
			gVelo[p_j][i]--;
		} else if (pi > pj) {
			gVelo[p_i][i]--;
			gVelo[p_j][i]++;			
		}
		
	}
}

// ------------------------

function conclusion_12_2() {
	init();
	var tree = {branches : []}
	// First step : find repeat for the first moon. Who knows, we may find a pattern...
	var alreadyMet;
	for (var i = 0 ; i < 1000000 ; i++) {
		arraySteps = addNewConfig(tree, i);
		if (arraySteps.length > 1) {
			console.log("Hey ! Repeated position for moon 1 at steps " + arraySteps[arraySteps.length-2] + "&" + arraySteps[arraySteps.length-1]
			+ " : " + gPos[0][0] + "," + gPos[0][1] + "," + gPos[0][2]);
		}
		performStep();
	}
}

// TODO : May be generalizable
// First, only watch the first planet !
// The generations in which each config is seen are memorized
function addNewConfig(p_treeOfConfigs, p_iteration) {
	var newBranch = {subtree : p_treeOfConfigs, 
//	actuallyNew : false
	};
	var i;
	for (i = 0 ; i <= 2 ; i++) {
		newBranch = tryToInsert(newBranch.subtree, gPos[0][i]);
	}
	//for (i = 0 ; i <= 2 ; i++) {
	//	newBranch = tryToInsert(newBranch.subtree, gVelo[0][i]);
	//}
	// Insert the generation where this has been met
	insertLeaf(newBranch.subtree, p_iteration);	
	return newBranch.subtree.branches;
}

// Tries to insert an array in a subtree (imbricated arrays)
// If successful, return {true, singleton of the new tree}
// Otherwise, return the subtree containing it
function tryToInsert(p_subtree, p_eltToAdd) {
	for (var i = 0 ; i < p_subtree.branches.length ; i++) {
		if (p_subtree.branches[i].node == p_eltToAdd) {
			return {
				//actuallyNew : false, 
			subtree : p_subtree.branches[i]}
		} 
	}
	p_subtree.branches.push({ 
		node : p_eltToAdd,
		branches : []
	});
	return {
		//actuallyNew : true,
		subtree : p_subtree.branches[p_subtree.branches.length-1]
	}
}

// The element must always be added, at this point. It must be a generation/step, typically.
function insertLeaf(p_subtree, p_leafElt) {
	p_subtree.branches.push(p_leafElt);
}