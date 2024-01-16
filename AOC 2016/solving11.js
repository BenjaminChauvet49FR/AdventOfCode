const rawData = `The first floor contains a polonium generator, a thulium generator, a thulium-compatible microchip, a promethium generator, a ruthenium generator, a ruthenium-compatible microchip, a cobalt generator, and a cobalt-compatible microchip.
The second floor contains a polonium-compatible microchip and a promethium-compatible microchip.
The third floor contains nothing relevant.
The fourth floor contains nothing relevant.`.split("\n");

var gNbFloors = 4;

function stateToArray(p_state) {
	var v1 = 0;
	var v2 = 0;
	var total = 0;
	for (var i = 0 ; i < gNbPairs ; i++) {
		v1 *= gNbFloors;
		v1 += p_state.mc[i];
		v2 *= gNbFloors;
		v2 += p_state.gen[i];
		total += p_state.mc[i] + p_state.gen[i];
	}
	return [p_state.floor, v1, v2, total];
}

function arrayToState(p_array) {
	var mc = generateArray(0, gNbPairs); 
	var gen = generateArray(0, gNbPairs);
	var mcTotal = p_array[1];
	var genTotal = p_array[2];
	for (var i = 5-1 ; i >= 0 ; i--) {
		mc[i] = mcTotal % gNbFloors;
		mcTotal = Math.floor(mcTotal/gNbFloors);
		gen[i] = genTotal % gNbFloors;
		genTotal = Math.floor(genTotal/gNbFloors);
	}
	return {
		floor : p_array[0],
		mc : mc,
		gen : gen,
		total : p_state[3],
	}
}

var gDejaVuArrays;
var gNbPairs;

function conclusion_11_1() {
	var initialState = {floor : 0, mc : [1, 1, 0, 0, 0], gen : [0, 0, 0, 0, 0]}; //47
	//var initialState = {floor : 0, mc : [0, 0], gen : [2, 1]}; //11
	gNbPairs = initialState.mc.length;
	return conclusion_11_aux(initialState);
}

function conclusion_11_2() {
	var initialState = {floor : 0, mc : [1, 1, 0, 0, 0, 0, 0], gen : [0, 0, 0, 0, 0, 0, 0]}; //71
	gNbPairs = initialState.mc.length;
	return conclusion_11_aux(initialState);
}

function conclusion_11_aux(p_initialState) {
	gDejaVuArrays = [stateToArray(p_initialState)];
	var statesToTry = [copy(p_initialState)];
	var nextStatesToTry;
	var newStates;
	var distance = 0;
	while (statesToTry.length > 0) {
		nextStatesToTry = [];
		// Find news
		for (var i = 0 ; i < statesToTry.length ; i++) {
			if (reachedGoal(statesToTry[i])) {
				return distance;
			}
			newStates = listAllCompatibleNotSeenNeighbors(statesToTry[i]);
			newStates.forEach(state => {
				nextStatesToTry.push(copy(state));
			});
		}
		// Transfer news
		statesToTry = [];
		nextStatesToTry.forEach(state => {
			statesToTry.push(state);
		});
		distance++;
	}
	return -1;
}

function copy(p_state) {
	return {
		floor : p_state.floor,
		mc : p_state.mc.slice(),
		gen : p_state.gen.slice()
	}
}

function reachedGoal(p_state) {
	for (var i = 0 ; i < gNbPairs ; i++) {
		if (p_state.gen[i] != gNbFloors-1 || p_state.mc[i] != gNbFloors-1) {
			return false;
		}
	}
	return true;
}

// List all compatible neighbors, and for each one that is added, add it to gDejaVuArrays;
function listAllCompatibleNotSeenNeighbors(p_state) {
	var answer = [];
	var arr, ibis, arr2, kbis;
	var allInBoundMoves = [];
	var i, j, k;
	var nextFloorExists = [p_state.floor > 0, p_state.floor < gNbFloors-1]; 
	var deltaFloors = [-1, 1];
	var dfj;
	// Find all movements that are not out of bounds
	for (i = 0 ; i < gNbPairs*2 ; i++) {
		arr = (i >= gNbPairs ? p_state.mc : p_state.gen);
		iBis = i % gNbPairs;
		if (arr[iBis] == p_state.floor) {
			for (j = 0 ; j <= 1 ; j++){				
				if (nextFloorExists[j]) {
					dfj = deltaFloors[j];
					allInBoundMoves.push([dfj, i]);
					for (k = i+1 ; k < gNbPairs*2 ; k++) {
						arr2 = (k >= gNbPairs ? p_state.mc : p_state.gen);
						kBis = k % gNbPairs;
						if (arr2[kBis] == p_state.floor) {
							allInBoundMoves.push([dfj, i, k]);
						}
					}
				}
			}
		}
	}
	// See if these movements don't lead to an impossible or already-met state, and if so, add them to both the answer liste and the list of met states
	var newState, newState2;
	var moveI;
	var possible;
	var decreasingIndexes;
	var formerLength;
	for (i = 0 ; i < allInBoundMoves.length ; i++) {
		// Fabricate the new state from the theorically possible move AND see if it's allowed
		moveI = allInBoundMoves[i];
		newState = copy(p_state);
		possible = true;
		for (j = 1 ; j < moveI.length && possible ; j++) {
			if (moveI[j] >= gNbPairs) {
				k = moveI[j]-gNbPairs;
				newState.mc[k] += moveI[0];
			} else {
				k = moveI[j];
				newState.gen[k] += moveI[0];
			}
			newState.floor = p_state.floor + moveI[0];
		}
		for (j = 1 ; j < moveI.length && possible ; j++) {
			if (moveI[j] >= gNbPairs) {
				k = moveI[j]-gNbPairs;
				possible &&= checkMovedMC(k, newState);
			} else {
				k = moveI[j];
				possible &&= checkMovedGen(k, newState);
			}
		}
		if (!possible) {
			continue;
		}
		
		// Reorder the state such that generators are in decreasing order (after all, all generator/mc pair play the same role) followed by microchips
		decreasingIndexes = generateNumericArray(0, gNbPairs-1);
		sortDescending(decreasingIndexes, [function(j) {return newState.gen[j]}, function(j) {return newState.mc[j]} ]);
		var newState2 = copy(newState);
		for (j = 0 ; j < gNbPairs ; j++) {
			newState2.gen[j] = newState.gen[decreasingIndexes[j]];
			newState2.mc[j] = newState.mc[decreasingIndexes[j]];
		}
		
		// State not already met ?
		formerLength = gDejaVuArrays.length;
		getIndexInListWithAddArranged(gDejaVuArrays, stateToArray(newState2), compareArrays) 
		if (gDejaVuArrays.length == formerLength) {
			continue;
		}
		answer.push(copy(newState2));
	}
	return answer;
}



// We moved a generator : make sure any microchip on the same floor is connected to its own generator
// False = illegal move
function checkMovedGen(p_ind, p_state) {
	for (var i = 0 ; i < gNbPairs ; i++) { // ERROR : "p_state.mc[p_ind] == p_state.mc[i]" (it led to possible states not detected)
		if (p_state.gen[p_ind] == p_state.mc[i] && p_state.mc[i] != p_state.gen[i]) {
			return false;
		}
	}
	return true;
}

// We moved a microchip (moveI[j] high) : make sure its generator OR no generator at all is on this floor
function checkMovedMC(p_ind, p_state) {
	if (p_state.mc[p_ind] == p_state.gen[p_ind]) {
		return true;
	}
	for (var i = 0 ; i < gNbPairs ; i++) {
		if (p_state.mc[p_ind] == p_state.gen[i]) {
			return false;
		}
	}
	return true;
}