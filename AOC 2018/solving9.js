var marbles;

function init() {	
	marbles = new CircularDoublyLinkedList(0);
}

function conclusion_9_aux(p_numberPlayers, p_lastMarble) {	
	init();
	var scores = generateArray(p_numberPlayers, 0);
	for (var i = 1 ; i <= p_lastMarble ; i++) {
		if (i % 23 != 0) {
			marbles.shiftForward();
			marbles.shiftForward();
			marbles.prepend(i);
		} else {
			scores[i % p_numberPlayers] += i;
			for (var k = 0 ; k < 7 ; k++) {
				marbles.shiftBackward();
			}
			scores[i % p_numberPlayers] += marbles.head.value;
			marbles.deleteHead();
		}
	}
	
	var answer = 0;
	for (var i = 0 ; i < scores.length ; i++) {
		answer = Math.max(scores[i], answer);
	}
	return answer;
}

function conclusion_9_1() {
	return conclusion_9_aux(410, 72059);
}

function conclusion_9_2() {
	return conclusion_9_aux(410, 7205900);
}

