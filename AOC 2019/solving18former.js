s
// ----------------
// This was the first version !

var gAnswer = {}
const NUMBER_SEEDS = 100;
const NUMBER_KEYS = 5;

function conclusion_18_1_former() {
	initKeys();
	gAnswer.keysNumber = gData.keys.length; 
	initGlobalAnswerData();
	for (var i = 0 ; i < NUMBER_SEEDS ; i++) {
		seed();
		/*console.log(gAnswer.distance + " " + gAnswer.min);
		console.log(gAnswer.currentChain);
		console.log("---");*/
	}
	gAnswer.seededBestChain = gAnswer.bestChain.slice();
	console.log(new Date());
	findAnswer(NUMBER_KEYS); // Ok, first we'll try to take 5 keys, then we'll raise this number !
	console.log(new Date());
	return gData;
} // Correct answer = 3962. Correct collect order = 5,22,0,12,3,17,19,25,4,2,10,14,16,1,13,24,20

function seed() {
	initOnePathData();
	var randomIndex = -1;
	var previousIndex = -1;
	while (gAnswer.keysLeftToTake > 0) {
		do {
			randomIndex = randomNumber(gAnswer.minRandomInt, gAnswer.maxRandomInt);
		} while (!correctIndex(randomIndex));
		if (previousIndex == -1) {
			gAnswer.distance += gData.keys[randomIndex].distFSM;
		} else {
			gAnswer.distance += distancesBetweenKeys[randomIndex][previousIndex];
		}
		gAnswer.currentChain.push(randomIndex);
		gAnswer.keyTakenYet[randomIndex] = true;
		previousIndex = randomIndex;
		gAnswer.keysLeftToTake--;
	}
	updateAnswerIfBest();
}

function initGlobalAnswerData() {
	gAnswer.min = X_LENGTH*Y_LENGTH*26;		
	gAnswer.bestChain = [];
	gAnswer.seededBestChain = [];
}

function initOnePathData() {
	gAnswer.distance = 2; // No matter which key we take first, we will go to a section marker.
	gAnswer.currentChain = [];
	gAnswer.keysLeftToTake = 0;
	gAnswer.keyTakenYet = [];
	for (var i = 0 ; i < gAnswer.keysNumber ; i++) {
		gAnswer.keyTakenYet.push(!gData.keys[i].useful);
		if (gData.keys[i].useful) {
			gAnswer.keysLeftToTake++;
		}
	}
	gAnswer.minRandomInt = 0;
	gAnswer.maxRandomInt = gAnswer.keysNumber-1;
}

function correctIndex(p_randInd) {
	var answer = gData.keys[p_randInd].useful && !gAnswer.keyTakenYet[p_randInd];
	if (!answer) { // If the key will not be good anymore (useless or already taken)		
		if (p_randInd == gAnswer.minRandomInt) {
			gAnswer.minRandomInt++;
		} else if (p_randInd == gAnswer.maxRandomInt) {
			gAnswer.maxRandomInt--;
		}
	} else { // The key is still useful and to be taken, but can it be reached yet ?
		var i;
		for (i = 0 ; i < gData.keys[p_randInd].requiresDoors.length ; i++) {
			if (!gAnswer.keyTakenYet[gData.keys[p_randInd].requiresDoors[i]]) {
				return false;
			}
		}
		for (i = 0 ; i < gData.keys[p_randInd].requiresKeys.length ; i++) {
			if (!gAnswer.keyTakenYet[gData.keys[p_randInd].requiresKeys[i]]) {
				return false;
			}
		}
	}
	return answer;
}

function updateAnswerIfBest() {
	if (gAnswer.distance < gAnswer.min) {
		gAnswer.min = gAnswer.distance;
		gAnswer.bestChain = gAnswer.currentChain.slice();
	}
}

// No more seeding below !
function findAnswer(p_numberKeysToTake) {
	initOnePathData();
	if (p_numberKeysToTake > gData.usefulKeyIDs.length) {
		p_numberKeysToTake = gData.usefulKeyIDs.length;
	}
	gAnswer.keysLeftToTake = p_numberKeysToTake;
	var iKey;
	gAnswer.distance = 2; // Going on any section mark
	for (var i = 0 ; i < gAnswer.seededBestChain.length ; i++) {
		iKey = gAnswer.seededBestChain[i];
		if (correctIndex(iKey)) {
			collectKey(iKey, gData.keys[iKey].distFSM);
			findAnswerAux();
			uncollectKey(2);
		}
	}
}

function findAnswerAux() {
	if (gAnswer.distance > gAnswer.min) {
		return;
	}
	if (gAnswer.keysLeftToTake == 0) {
		updateAnswerIfBest();
		return;
	}
	var iKey;
	const distSoFar = gAnswer.distance;
	const iStart = gAnswer.currentChain[gAnswer.currentChain.length-1];
	//for (var i = 0 ; i < gAnswer.seededBestChain.length ; i++) {
	for (var i = 0 ; i < gData.keys[iStart].closestDistances.length ; i++) {
		//iKey = gAnswer.seededBestChain[i];
		iKey = gData.keys[iStart].closestDistances[i]; // Looks slightly faster...
		if (correctIndex(iKey)) {
			collectKey(iKey, distancesBetweenKeys[iStart][iKey]);
			findAnswerAux();
			uncollectKey(distSoFar);
		}
	}
}

function collectKey(p_index, p_extraDistance) {
	gAnswer.keysLeftToTake--;
	gAnswer.keyTakenYet[p_index] = true;
	gAnswer.currentChain.push(p_index);
	gAnswer.distance += p_extraDistance;
}

function uncollectKey(p_formerDistance) {
	gAnswer.distance = p_formerDistance;
	const iKey = gAnswer.currentChain.pop();
	gAnswer.keyTakenYet[iKey] = false;
	gAnswer.keysLeftToTake++;
}


