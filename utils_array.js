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
} // TODO revisit all these inits (see 2023-17 that uses this method)

// To modify easily string-like structures...
function stringArray_to_charDoubleEntryArray(p_pseudoArray) {
	var i, j;
	var answer = [];
	var str;
	for (i = 0 ; i < p_pseudoArray.length ; i++) {
		answer.push([]);
		str = p_pseudoArray[i];
		for (j = 0 ; j < str.length ; j++) {
			answer[i].push(str.charAt(j));
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

function generateArray(p_xLength, p_value) {
	var answer = [];
	for (var x = 0 ; x < p_xLength ; x++) {
		answer.push(p_value);
	}
	return answer;
}

// Generates array of integers with included bounds. 
// Warning : don't make the mistake of forgetting that [0, 1, ..., length] is (length+1) values.
function generateArrayFromToIncluded(p_xMin, p_xMax) {
	var answer = [];
	for (var x = p_xMin ; x <= p_xMax ; x++) {
		answer.push(x);
	}
	return answer;
}

function generateArrangedArray(p_xLength, p_function) {
	var answer = [];
	for (var x = 0 ; x < p_xLength ; x++) {
		answer.push(p_function(x));
	}
	return answer;
}

function generateDoubleEntryArray(p_xLength, p_yLength, p_value) {
	var answer = [];
	var x, y;
	for (y = 0 ; y < p_yLength ; y++) {
		answer.push([]);
		for (x = 0 ; x < p_xLength ; x++) {
			answer[y].push(p_value);
		}
	}
	return answer;
}

function generateArrangedDoubleEntryArray(p_xLength, p_yLength, p_function) {
	var answer = [];
	var x, y;
	for (y = 0 ; y < p_yLength ; y++) {
		answer.push([]);
		for (x = 0 ; x < p_xLength ; x++) {
			answer[y].push(p_function(x, y));
		}
	}
	return answer;
}

// TODO (or not ?) : reuse this very simple method everywhere...
// It generates the array [p_min, p_min+1, p_min+2, ..., p_max-1, p_max]
function generateNumericArray(p_min, p_max) {
	var answer = [];
	for (var i = p_min ; i <= p_max ; i++) {
		answer.push(i);
	}
	return answer;
}


function copyDoubleEntryArray(p_array) {
	return generateArrangedDoubleEntryArray(p_array[0].length, p_array.length, function(x,y) {return p_array[y][x]});
}

// Arrays are supposed of compatible sizes
function testEqualityDoubleEntryArray(p_array1, p_array2) {
	for (var y = 0 ; y < p_array1.length ; y++) {
		for (var x = 0 ; x < p_array1[y].length ; x++) {
			if (p_array1[y][x] != p_array2[y][x]) {
				return false;
			}
		}
	}
	return true;
}

function testEqualityArray(p_array1, p_array2) {
	for (var x = 0 ; x < p_array1.length ; x++) {
		if (p_array1[x] != p_array2[x]) {
			return false;
		}
	}
	return true;
}