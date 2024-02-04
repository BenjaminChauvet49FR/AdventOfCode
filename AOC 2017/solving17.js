function insert(p_nextInList, p_previous, p_value, p_next) {
	p_nextInList.push(p_next);
	p_nextInList[p_previous] = p_value;
}

function conclusion_17_1() {
	var nextInList = [0];
	var indexPos = 0;
	for (var i = 1 ; i <= 2017 ; i++) {
		indexPos = i-1;
		for (var k = 0 ; k < 303 ; k++) {			
			indexPos = nextInList[indexPos];
		}
		indexPos %= nextInList.length; 
		insert(nextInList, indexPos, i, nextInList[indexPos]);
	}
	return nextInList[2017];
} // Answer P1 = 1971 ; After 0 should come 1327 (for P2)

function conclusion_17_2() {
	var after0 = 0;
	var listLength = 1; // 0 is always in position 0. What matters is the position of the index. This time, the list doesn't work anymore like "who's next".
	var indexPos = 0;
	var answer = 0;
	for (var i = 1 ; i <= 50000000 ; i++) {
//	for (var i = 1 ; i <= 2017 ; i++) { 1327 :)
		indexPos += 303;
		indexPos %= listLength;
		if (indexPos == 0) {
			answer = i;
		}
		indexPos++;
		listLength++;
	}
	return answer;
} // 17202899 :)