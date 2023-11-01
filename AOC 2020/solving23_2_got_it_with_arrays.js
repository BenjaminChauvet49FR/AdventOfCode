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
	init(368195742); // Official
	for (var i = 0 ; i < 100 ; i++) {
		makeAMove();
		if (i < 10) {
			console.log(gData);
		}
	}
	return gData;
	/*
		WE DID IT !
		~14h20 : decided to use an array of indexOf
		~14h43 : decided to back pedal, because the find wasn't the slowest actually.
		~15h : launched the 10-million loop program after a few experiments.
		~17h20 : 10-million loop program ended, here are the data :
		712484 270203
		gData.indexOf(712484)
		152945
		gData.slice(152944,152953)
		(9) [1, 712484, 270203, 382821, 143362, 790299, 203242, 207115, 549184]
		712484*270203
		192515314252
		This last value is the correct answer !!!
	*/
	
}

// ---

function init2(p_number) {
	var value = p_number;
	gData = [];
	while(value > 0) {
		gData.push(value % 10);
		value = Math.floor(value / 10);
	}
	gData.reverse();
	for (var i = gData.length+1 ; i <= CUPS ; i++) {
		gData.push(i);
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
		gData[CUPS] = gData[0];
		gData[CUPS+1] = gData[1];
		gData[CUPS+2] = gData[2];
		gData[0] = -1;
		gData[1] = -1;
		gData[2] = -1; // To not jam the "indexOf"
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
	var indexDest = gData.indexOf(destCup);
	if (indexDest > gCurrentIndex) {		
		for (var i = gCurrentIndex+1 ; i <= indexDest-3 ; i++) {
			gData[i] = gData[i+3];
		}
		gData[indexDest-2] = setAside[0];
		gData[indexDest-1] = setAside[1];
		gData[indexDest] = setAside[2];
	} else {
		for (var i = gCurrentIndex+3 ; i >= indexDest+4 ; i--) {
			gData[i] = gData[i-3];
		}
		gData[indexDest+1] = setAside[0];
		gData[indexDest+2] = setAside[1];
		gData[indexDest+3] = setAside[2];		
	}
	// Restore the 1st cups if needed
	if (indexTooHigh) {
		gData[0] = gData[CUPS];
		gData[1] = gData[CUPS+1];
		gData[2] = gData[CUPS+2];
	}
	
	// currentCup++ (not too high)
	gCurrentIndex = (gData.indexOf(currentCup) + 1) % (CUPS)
	
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

const gLog = false;
const CUPS = 1000000;
const NB_TURNS = 10000000;
//const CUPS = 9;
//const NB_TURNS = 100;

function conclusion_23_2() {
	//init2(389125467); // Example - correct answer = 67384529
	init2(368195742); // Official - correct answer = 95648732
	for (var i = 0 ; i < NB_TURNS ; i++) {
		makeAMove2();
	}
	var index = gData.indexOf(1);
	console.log(gData[index+1] + " " + gData[index+2]);
	
	return gData;
}