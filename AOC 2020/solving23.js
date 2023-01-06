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

