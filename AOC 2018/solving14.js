function conclusion_14_1() {
	var NB_RECIPES = 30121;
	var position1 = 0;
	var position2 = 1;
	var list = [3, 7];
	var number;
	for (var i = 0 ; i < NB_RECIPES+10 ; i++) { // Yeah I know I get too far
		number = list[position1] + list[position2];
		if (number > 9) {
			list.push(1);
			list.push(number-10);
		} else {
			list.push(number);
		}
		position1 += list[position1] + 1;
		position1 %= list.length;
		position2 += list[position2] + 1;
		position2 %= list.length;
	}
	var answer = 0;
	for (var i = NB_RECIPES ; i < NB_RECIPES+10 ; i++) {
		answer*=10;
		answer+=list[i];
	}
	return answer;
}

function conclusion_14_2() {
	var position1 = 0;
	var position2 = 1;
	var list = [3, 7];
	var TARGET = [0,3,0,1,2,1];
	var numbersAlreadyGone = 0;
	var number;
	while (true) {
		number = list[position1] + list[position2];
		if (number > 9) {
			list.push(1);
			// Start C/P
			if (TARGET[numbersAlreadyGone] == 1) {
				numbersAlreadyGone++;
				if (numbersAlreadyGone == TARGET.length) {
					break;
				}
			} else {
				numbersAlreadyGone = 0;
			}
			// End C/P
			list.push(number-10);
			// Start C/P
			if (TARGET[numbersAlreadyGone] == number-10) {
				numbersAlreadyGone++;
				if (numbersAlreadyGone == TARGET.length) {
					break;
				}
			} else {
				numbersAlreadyGone = 0;
			}
			// End C/P
		} else {
			list.push(number);
			// Start C/P
			if (TARGET[numbersAlreadyGone] == number) {
				numbersAlreadyGone++;
				if (numbersAlreadyGone == TARGET.length) {
					break;
				}
			} else {
				numbersAlreadyGone = 0;
			}
			// End C/P
		}
		position1 += list[position1] + 1;
		position1 %= list.length;
		position2 += list[position2] + 1;
		position2 %= list.length;
	}
	return list.length-TARGET.length;
}