var gData;
var gCurrentIndex;

function init(p_number) {
	var value = p_number;
	gData = [];
	while(value > 0) {
		gData.push(value % 10);
		value = Math.floor(value / 10);
	}
	gData.reverse();
	gCurrentIndex = 0;
}

function getAtPos(p_pos) { // Cycles mod 9.
	return gData[p_pos % 9];
}

function setAtPos(p_pos, p_value) {
	gData[p_pos % 9] = p_value;
}

function decrease(p_cup) {
	var answer = p_cup-1;
	if (answer == 0) {
		answer = 9;
	}
	return answer;
}

function makeAMove() {
	const currentCup = gData[gCurrentIndex];
	var setAside = [getAtPos(gCurrentIndex+1), getAtPos(gCurrentIndex+2), getAtPos(gCurrentIndex+3)];
	setAtPos(gCurrentIndex+1, -1);
	setAtPos(gCurrentIndex+2, -1);
	setAtPos(gCurrentIndex+3, -1);
	var destCup = decrease(currentCup);
	while (setAside.indexOf(destCup) != -1) {
		destCup = decrease(destCup);
	}
	var indexDest = gData.indexOf(destCup);
	gData.splice(indexDest+1, 0, setAside[0], setAside[1], setAside[2]);
	gData = gData.filter(cup => cup != -1);
	gCurrentIndex = (gData.indexOf(currentCup) + 1) % 9;
}

function conclusion_23_1() {
	//init(389125467); // Example
	init(368195742); // Official
	for (var i = 0 ; i < 100 ; i++) {
		makeAMove();
		if (i < 10) {
			console.log(gData);
		}
	}
	return gData;
}

// ---

function init2(p_number) {
	var value = p_number;
	gData = [];
	gIndexOf = [-1]; // Items start being counted at 1
	while(value > 0) {
		gData.push(value % 10);
		value = Math.floor(value / 10);
		gIndexOf.push(-1);
	}
	gData.reverse();
	for (var i = 0 ; i < gData.length ; i++) {
		gIndexOf[gData[i]] = i;
	}
	for (var i = gData.length+1 ; i <= CUPS ; i++) {
		gData.push(i);
		gIndexOf.push(i);
	}
	gData.push(-1); // To have extra room where to put the "artificial cups" (that are like in the beginning)
	gData.push(-1);
	gData.push(-1);
	gCurrentIndex = 0;
}

function getAtPos2(p_pos) { // Cycles mod (nb cups).
	return gData[p_pos % (CUPS)];
}

function setAtPos2(p_pos, p_value) {
	gData[p_pos % (CUPS)] = p_value;
}

function decrease2(p_cup) {
	var answer = p_cup-1;
	if (answer == 0) {
		answer = (CUPS);
	}
	return answer;
}

function makeAMove2() {
	// If gCurrentIndex too high : add 3 artificial cups
	var indexTooHigh = (gCurrentIndex >= CUPS-3);
	if (indexTooHigh) {
		affect(CUPS, gData[0]);
		affect(CUPS+1, gData[1]);
		affect(CUPS+2, gData[2]);
/*		gData[CUPS] = gData[0];
		gData[CUPS+1] = gData[1];
		gData[CUPS+2] = gData[2];
		gData[0] = -1;
		gData[1] = -1;
		gData[2] = -1; // To not jam the "indexOf"*/
	}
	const currentCup = gData[gCurrentIndex];
	// Pick the 3 cups after (may be artificial cups)
	var setAside = [gData[gCurrentIndex+1], gData[gCurrentIndex+2], gData[gCurrentIndex+3]];
	// Find the destination
	var destCup = decrease2(currentCup);
	while (setAside.indexOf(destCup) != -1) {
		destCup = decrease2(destCup);
	}
	// Shift the cups to be moved to the right place &
	// Set the cups set aside at the right place
	//var indexDest = gData.indexOf(destCup);
	var indexDest = gIndexOf[destCup];
	if (indexDest > gCurrentIndex) {		
		for (var i = gCurrentIndex+1 ; i <= indexDest-3 ; i++) {
			affect(i, gData[i+3]);
			//gData[i] = gData[i+3];
		}
		affect(indexDest-2, setAside[0]);
		affect(indexDest-1, setAside[1]);
		affect(indexDest, setAside[2]);
		/*gData[indexDest-2] = setAside[0];
		gData[indexDest-1] = setAside[1];
		gData[indexDest] = setAside[2];*/
	} else {
		for (var i = gCurrentIndex+3 ; i >= indexDest+4 ; i--) {
			affect(i, gData[i-3]);
			//gData[i] = gData[i-3];
		}
		affect(indexDest+1, setAside[0]);
		affect(indexDest+2, setAside[1]);
		affect(indexDest+3, setAside[2]);
		/*gData[indexDest+1] = setAside[0];
		gData[indexDest+2] = setAside[1];
		gData[indexDest+3] = setAside[2];*/		
	}
	// Restore the 1st cups if needed
	if (indexTooHigh) {
		/*gData[0] = gData[CUPS];
		gData[1] = gData[CUPS+1];
		gData[2] = gData[CUPS+2];*/
		affect(0, gData[CUPS]);
		affect(1, gData[CUPS+1]);
		affect(2, gData[CUPS+2]);
	}
	
	// change currentCup 
	//gCurrentIndex = (gData.indexOf(currentCup) + 1) % (CUPS)
	gCurrentIndex = (gIndexOf[currentCup] + 1)%CUPS;
	
	if (gLog) {		
		console.log(gData);
		console.log(gCurrentIndex);
		console.log(gData);
	}

	
	
	/*var setAside = [getAtPos2(gCurrentIndex+1), getAtPos2(gCurrentIndex+2), getAtPos2(gCurrentIndex+3)];
	setAtPos2(gCurrentIndex+1, -1);
	setAtPos2(gCurrentIndex+2, -1);
	setAtPos2(gCurrentIndex+3, -1);
	var destCup = decrease2(currentCup);
	while (setAside.indexOf(destCup) != -1) {
		destCup = decrease2(destCup);
	}
	var indexDest = gData.indexOf(destCup);
	//gData.splice(indexDest+1, 0, setAside[0], setAside[1], setAside[2]);
	//gData = gData.filter(cup => cup != -1);
	//gCurrentIndex = (gData.indexOf(currentCup) + 1) % (CUPS);


	if (gLog) {
		console.log(gData);	
	}*/
}

function affect(p_pos, p_value) {
	gData[p_pos] = p_value;
	gIndexOf[p_value] = p_pos;
}

const gLog = false;
const CUPS = 1000000;
const NB_TURNS = 10000000;
//const CUPS = 9;
//const NB_TURNS = 100;

function conclusion_23_2() {
	init2(389125467); // Example
	//init2(368195742); // Official
	for (var i = 0 ; i < NB_TURNS ; i++) {
		makeAMove2();
	}
	var index = gData.indexOf(1);
	console.log(gData[index+1] + " " + gData[index+2]);
	
	return gData;
}

function makeMoves(p_numberMoves) {
	for (var i = 0 ; i < p_numberMoves ; i++) {
		makeAMove2();
	}
	return gData;
}