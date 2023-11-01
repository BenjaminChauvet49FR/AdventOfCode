var gData;

// ---

function init2(p_number) {
	var value = p_number;
	var initArrayR = []; // Array that contains digits of p_number in reverse order
	while(value > 0) {
		initArrayR.push(value % 10);
		value = Math.floor(value / 10);
	}
	gData = new CircularDoublyLinkedList(initArrayR[initArrayR.length-1]);
	for (var i = initArrayR.length-2 ; i >= 0 ; i--) {
		gData.append(initArrayR[i]);
	}
	
	for (var i = gData.length+1 ; i <= CUPS ; i++) {
		gData.append(i);
	}
	
	gData.shiftForward(); // Note : The current cup is always the rightmost one.
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
	// Take away the three first cups in the "current" ring
	// Find the node associated to the relevant cup (when decreasing modulus number of current cup, find the first one not taken)
	// Place immediately after
	// Shift current ring one step forward
	const taken1 = gData.deleteHead();
	const taken2 = gData.deleteHead();
	const taken3 = gData.deleteHead();
	var value = gData.tail.value-1; // TODO Peut mieux faire
	var found = false;
	while (!found) {		
		if (value == 0) {
			value = CUPS;
		}
		if (value != taken1 && value != taken2 && value != taken3) {
			found = true;
		} else {
			value--;
		}
	}
	gData.insertAfterFirstValues(value, [taken1, taken2, taken3]);
	gData.shiftForward();
	
}

const gLog = false;
// Example :
//const CUPS = 9;
//const NB_TURNS = 100;
//const INPUT = 389125467;
// Official :
const CUPS = 1000000;
const NB_TURNS = 10000000;
const INPUT = 368195742;

function conclusion_23_2() {
	init2(); // Example - correct answer = 67384529
	init2(INPUT); // Official - correct answer = 95648732
	for (var i = 0 ; i < NB_TURNS ; i++) {
		makeAMove2();
	}
	while (gData.tail.value != 1) {
		gData.shiftForward();
	}
	gData.shiftForward();
	const val1 = gData.tail.value;
	gData.shiftForward();
	const val2 = gData.tail.value;
	return val1*val2;
}