function conclusion_4_1() {
	const start = 109165;
	const end = 576723;
	var currentAList = [1,1,1,1,1,1]; // "Ascending list"
	const lastAList = [5,6,9,9,9,9];
	var answer = 0;
	while (!matching(currentAList, lastAList)) {
		if (has2IdenticalsDigits(currentAList)) {
			answer++;
		}
		nextAList(currentAList);
	}
	if (has2IdenticalsDigits(currentAList)) { // Also process the final one !
		answer++;
	} 
	return answer;
}

function matching(p_listA, p_listB) {
	for (var i = 0 ; i < p_listA.length ; i++) {
		if (p_listA[i] != p_listB[i]) {
			return false;
		}
	}
	return true;
}

function has2IdenticalsDigits(p_list) {
	for (var i = 0 ; i < p_list.length-1 ; i++) {
		if (p_list[i] == p_list[i+1]) {
			return true;
		}
	}
	return false;
}

// Turn the list into the next ASCENDING list
function nextAList(p_aList) {
	var i = p_aList.length-1; // Index to change
	while (p_aList[i] == 9) {
		i--; // Should not go before 0
	}
	// i = first index that is not 9
	p_aList[i]++;
	i++;
	for (; i < p_aList.length ; i++) {
		p_aList[i] = p_aList[i-1];
	}
}

// --------------

function conclusion_4_2() {
	const start = 109165;
	const end = 576723;
	var currentAList = [1,1,1,1,1,1]; // "Ascending list"
	const lastAList = [5,6,9,9,9,9];
	var answer = 0;
	while (!matching(currentAList, lastAList)) {
		if (isCorrectP2(currentAList)) {
			answer++;
		}
		nextAList(currentAList);
	}
	if (isCorrectP2(currentAList)) { // Also process the final one !
		answer++;
	} 
	return answer;
}

function isCorrectP2(p_list) {
	var i = 0;
	var orig;
	while (i < p_list.length-1) {
		if (p_list[i] == p_list[i+1]) {
			if (i != p_list.length-2 && p_list[i] == p_list[i+2]) { // I wrote first the negative version of it, it had a ||, and when I submitted my 1st answer I forgot to change it into a &&...
				orig = p_list[i];
				i+=2;
				while( i < p_list.length && p_list[i] == orig) {
					i++;
				}
			} else {
				return true;				
			}
		} else {
			i++;
		}
	}
	return false;
}

