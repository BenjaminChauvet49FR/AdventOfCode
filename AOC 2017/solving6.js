const rawData = "2	8	8	5	4	2	3	1	5	5	1	2	15	13	5	14"

var gData;

function init() {
	gData = [];
	tokens = rawData.split("\t");
	tokens.forEach(str => {
		gData.push(parseInt(str, 10));
	});
}

function advance() {
	var max = gData[0];
	var index = 0;
	for (var i = 1 ; i < gData.length ; i++) {
		if (gData[i] > max) {
			index = i;
			max = gData[i];
		}
	}
	var redist = gData[index];
	gData[index] = 0;
	var k = index;
	for (var i = 0 ; i < redist; i++) {
		k++;
		k %= gData.length;
		gData[k]++;
	}		
}

function conclusion_6_1() {
	return conclusion_6_aux(false);
}

function conclusion_6_2() {
	return conclusion_6_aux(true);
}


function conclusion_6_aux(p_isPart2) {
	init();
	var steps = 0;
	var gens;
	var tree = {branches : []}
	addNewConfig(tree, gData, 0);
	while (true) {
		advance();
		steps++;
		gens = addNewConfig(tree, gData, steps);
		if (gens.length > 1) {
			return (steps-(p_isPart2 ? gens[0] : 0));
		}
	}
}

// TODO : May be generalizable
// Copy-pasted. This time, it is not about loop finding, however.
function addNewConfig(p_treeOfConfigs, p_data, p_iteration) {
	var newBranch = {subtree : p_treeOfConfigs, actuallyNew : false};
	var x;
	for (x = 0 ; x < p_data.length ; x++) {
		newBranch = tryToInsert(newBranch.subtree, p_data[x]);
	}
	insertLeaf(newBranch.subtree, p_iteration);	
	return newBranch.subtree.branches;
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

// The element must always be added, at this point. It must be a generation/step, typically.
function insertLeaf(p_subtree, p_leafElt) {
	p_subtree.branches.push(p_leafElt);
}