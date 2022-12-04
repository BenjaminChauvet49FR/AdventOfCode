// Converts a digit block into an array
// p_pseudo array : one single array. Each entry of the array is a string.
function digitPseudoArray_to_digitArray(p_pseudoArray) {
	var i, j;
	var answer = [];
	var str;
	for (i = 0 ; i < p_pseudoArray.length ; i++) {
		answer.push([]);
		str = p_pseudoArray[i];
		for (j = 0 ; j < str.length ; j++) {
			answer[i].push(parseInt(str.charAt(j), 10));
		}
	}
	return answer;
}

// Copies lists of "x,y" coordinates one into another
// Note : some ways to empty an array (not tested) : https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
function copiesCoorsList(p_source, p_destination) {
	p_source.forEach(coors => {
		p_destination.push({x : coors.x, y : coors.y});
	});
}


// Try to put a number N into an ascending ordered array without modyfing its size in its place
// shiftGreatestNumbers(5, [2, 4, 6]) leaves the array with [4, 5, 6]
function shiftGreatestNumbers(p_number, p_array) {
	if (p_number <= p_array[0]) {
		return;
	} else {
		p_array[0] = p_number;
	}
	for (var i = 1 ; i < p_array.length ; i++) {
		if (p_number <= p_array[i]) {
			return;
		} else {
			p_array[i-1] = p_array[i];
			p_array[i] = p_number;
		}
	}
}