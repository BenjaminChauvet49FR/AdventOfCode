function conclusion_10_1() {
	return solution(40);
}

function conclusion_10_2() {
	return solution(50);
}

function solution(p_steps) {
	var list = [1,1,1,3,1,2,2,1,1,3];
	var newList, j, counter, value;
	for (var i = 0 ; i < p_steps ; i++) {
		newList = [];
		value = list[0];
		counter = 1;
		j = 1;
		while (j < list.length) {
			if (list[j] == value) {
				counter++;
			} else {
				newList.push(counter);
				newList.push(value);
				counter = 1;
				value = list[j];
			}
			j++;
		}
		newList.push(counter);
		newList.push(value);		
		list = newList.slice();
	}
	return list.length;
}