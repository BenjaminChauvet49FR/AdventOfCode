const startingDataLevel1 = [[1,0],[2,3],[3,0],[2,1]]; // rightmost = outside
const startingDataLevel2 = [[1,3,3,0],[2,1,2,3],[3,0,1,0],[2,2,0,1]]; // rightmost = outside
const weights = [1, 10, 100, 1000];
const spaceOfMyRoom = [2,4,6,8]; // 0 is in front of space 2 of corridor, 1 is in front of space 4...
const placeToBe = [1,1,0,1,0,1,0,1,0,1,1];
var startingData;


const EMPTY = -1;

function initAll() {
	gAnswer.nbKinds = startingData.length;
	gAnswer.maxDepth = startingData[0].length;
	
	
	gAnswer.alreadyInPlace = [0, 0, 0, 0];
	toMoveIn = 0;
	var i, j, toStock;
	for (i = 0 ; i < gAnswer.nbKinds ; i++) {
		j = 0;
		while (startingData[i][j] == i) {
			j++;
		}
		gAnswer.alreadyInPlace[i] = j;
		toStock = gAnswer.maxDepth-j;
		toMoveIn += (toStock*(toStock+1)/2)*(weights[i]); // Coming to your house.
	}
	console.log("Energy to enter boxes = " + toMoveIn);
	var elt;
	var toMoveOut = 0;
	for (i = 0 ; i < gAnswer.nbKinds ; i++) {
		for (j = gAnswer.alreadyInPlace[i] ; j < gAnswer.maxDepth ; j++) {
			elt = startingData[i][j];
			toMoveOut += (startingData[i].length-j)*weights[elt]; 
		}
	}
	console.log("Energy to leave boxes = " + toMoveOut);	
	
	// For the final answer
	gAnswer.minimalAnyway = toMoveIn + toMoveOut;
	gAnswer.bestScore = generateArray(gAnswer.nbKinds, 999);
	gAnswer.bestChain = [];
}

function initOneGo() {
	gAnswer.dynamicData = [];
	for (var i = 0 ; i < gAnswer.nbKinds ; i++) {
		gAnswer.dynamicData.push(startingData[i].slice());
	}
	gAnswer.inPlace = gAnswer.alreadyInPlace.slice();
	gAnswer.currentScore = generateArray(gAnswer.nbKinds, 0);
	gAnswer.inChain = [];
	gAnswer.hallway = generateArray(placeToBe.length, EMPTY);
	gAnswer.positionsOccupiedInHallway = [];
}

const gAnswer = {
	nbKinds : -1,
	maxDepth : -1,
	dynamicData : [],
	currentChain : [],
	currentScore : [],
	bestScore : [],
	bestChain : [],
	minimalAnyway : -1,
	data : [],
	inPlace : [],
	alreadyInPlace : [],
	positionsOccupiedInHallway : []
}

function conclusion_23_1() {
	return conclusion_23_aux(startingDataLevel1);
}

function conclusion_23_2() {
	return conclusion_23_aux(startingDataLevel2);	
}

function conclusion_23_aux(p_startingData) {
	startingData = p_startingData
	initAll();
	initOneGo();
	go();
	var answer = gAnswer.minimalAnyway;
	for (var i = 0 ; i < gAnswer.nbKinds ; i++) {
		answer += gAnswer.bestScore[i]*weights[i];
	}
	return answer;
}

function go() {
	if (currentScoreWorse()) {
		return;
	}
	var eltToMove, xDest;
	var backupList = [];
	var xElt;
	// Put elements in the hallway to their place as much as possible
	//gAnswer.positionsOccupiedInHallway.forEach(xElt => {
	var atLeastOne;
	do {
		atLeastOne = false;
		for (xElt = 0 ; xElt < gAnswer.hallway.length ; xElt++) {
			eltToMove = gAnswer.hallway[xElt];
			if (eltToMove == EMPTY) {
				continue;
			}
			xDest = spaceOfMyRoom[eltToMove];
			shouldEnter = (gAnswer.dynamicData[eltToMove].length == gAnswer.inPlace[eltToMove]);
			if (shouldEnter) {
				if (xElt > xDest) {				
					xCurrent = xElt-1;			
					while (xCurrent > xDest && gAnswer.hallway[xCurrent] == EMPTY) {
						xCurrent--;
					}
				} else {				
					xCurrent = xElt+1;
					while (xCurrent < xDest && gAnswer.hallway[xCurrent] == EMPTY) {
						xCurrent++;
					}
				}
				shouldEnter = (xCurrent == xDest);
			}
			if (shouldEnter) {
				gAnswer.hallway[xElt] = EMPTY;
				gAnswer.dynamicData[eltToMove].push(eltToMove);
				gAnswer.inPlace[eltToMove]++;
				backupList.push({elt : eltToMove, formerPosition : xElt});
				atLeastOne = true;
			}
		}
	} while (atLeastOne);
	
	if (endOfRoad()) {
		if (currentScoreBetter()) {
			gAnswer.bestScore = gAnswer.currentScore.slice();
			gAnswer.bestChain = gAnswer.currentChain.slice();			
		}
		var eltOut;
		backupList.forEach(eltOut => { // Beware ! C/P.
			gAnswer.dynamicData[eltOut.elt].pop();
			gAnswer.inPlace[eltOut.elt]--;
			gAnswer.hallway[eltOut.formerPosition] = eltOut.elt;
		});
		return;
	}
		
	//});
	
	var bye, formerScore;
	// Now, recursion starts !
	for (var i = 0 ; i < gAnswer.nbKinds ; i++) {
		if (gAnswer.inPlace[i] < gAnswer.dynamicData[i].length) {
			eltToMove = gAnswer.dynamicData[i].pop();
			[-1, +1].forEach(deltaX => {				
				xElt = spaceOfMyRoom[i]+deltaX;
				bye = false;
				while (!bye && xElt >= 0 && xElt < placeToBe.length && gAnswer.hallway[xElt] == EMPTY) {
					if (placeToBe[xElt] == 0) {
						xElt += deltaX;
						continue;
					}
					gAnswer.hallway[xElt] = eltToMove;
					gAnswer.currentChain.push(eltToMove+">"+xElt);
					//gAnswer.positionsOccupiedInHallway.push(xElt);
					formerScore = gAnswer.currentScore[eltToMove];
					gAnswer.currentScore[eltToMove] += Math.abs(xElt - spaceOfMyRoom[i]) + Math.abs(xElt - spaceOfMyRoom[eltToMove]);
					//console.log("Trying. Now : " + stateToString());
					if (currentScoreWorse()) {
						gAnswer.currentScore[eltToMove] = formerScore;
						bye = true;
					} else {
						go();
					}
					gAnswer.hallway[xElt] = EMPTY;
					gAnswer.currentChain.pop();
					//gAnswer.positionsOccupiedInHallway.pop();
					gAnswer.currentScore[eltToMove] = formerScore;
					xElt += deltaX;
					//console.log("Leaving. Now : " + stateToString() + " (" + eltToMove + " out of stack "+ i+")" );
				}
			});
			gAnswer.dynamicData[i].push(eltToMove);
		}
	}
	
	// Return elements that had been freed
	var eltOut;
	backupList.forEach(eltOut => {
		gAnswer.dynamicData[eltOut.elt].pop();
		gAnswer.inPlace[eltOut.elt]--;
		gAnswer.hallway[eltOut.formerPosition] = eltOut.elt;
	});
}

function currentScoreBetter() {
	for (var i = gAnswer.nbKinds-1 ; i >= 0 ; i--) {
		if (gAnswer.currentScore[i] > gAnswer.bestScore[i]) {
			return false;
		}
		if (gAnswer.currentScore[i] < gAnswer.bestScore[i]) {
			return true;
		}
	}
	return true;
}

function currentScoreWorse() {
	for (var i = gAnswer.nbKinds-1 ; i >= 0 ; i--) {
		if (gAnswer.currentScore[i] > gAnswer.bestScore[i]) {
			return true;
		}
		if (gAnswer.currentScore[i] < gAnswer.bestScore[i]) {
			return false;
		}
	}
	return true;
}

function endOfRoad() {
	for (var i = 0 ; i < gAnswer.nbKinds ; i++) {
		if (gAnswer.inPlace[i] < gAnswer.maxDepth) {
			return false;
		}
		
	}
	return true;
}

function stateToString() {
	var answer = "";
	for (var i = 0 ; i < gAnswer.hallway.length ; i++) {
		if (placeToBe[i] == 0) {
			answer += "_";
		} else if (gAnswer.hallway[i] == EMPTY) {
			answer += "-";
		} else {
			answer += gAnswer.hallway[i];
		}
	} 
	
	for (var i = 0 ; i < gAnswer.nbKinds ; i++) {
		answer += " | "
		gAnswer.dynamicData[i].forEach(elt => {
			answer += elt;
		});
	}
	answer += " (energy" 
	for (var i = 0 ; i < gAnswer.nbKinds ; i++) {
		answer += " " + gAnswer.currentScore[i];
	}
	answer += ")";
	return answer;
}