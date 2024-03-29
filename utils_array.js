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

// Inserts an element into an array (or list, whatever) according to p_function, immediately before the first element for which the function is true. 
// If it is never true, inserts it at the end.
// https://stackabuse.com/javascript-how-to-insert-elements-into-a-specific-index-of-an-array/
// Example : array = [1, 3, 5, 7]; shiftIntoList(array, 4, function(element, already) { return element > already}); // array = [1, 3, 4, 5, 7]
// Another xample : array = [9, 7, 5, 2]; shiftIntoList(array, 4, function(element, already) { return element < already}); // array = [9, 7, 5, 4, 2]
function shiftIntoList(p_sortedList, p_element, p_function) {
	var i = 0;
	while (i < p_sortedList.length && p_function(p_element, p_sortedList[i])) {
		i++;
	}
	p_sortedList.splice(i, 0, p_element);		
}

// Inserts numbers in ascending order, but without repetition. Returns the index of the new element if a new number was actually inserted, or -1 otherwise.
function shiftIntoListUniqueNumbers(p_sortedList, p_element) {
	var i = 0;
	while (i < p_sortedList.length && p_element > p_sortedList[i]) {
		i++;
	}
	if (i == p_sortedList.length || p_element != p_sortedList[i]) {		
		p_sortedList.splice(i, 0, p_element);
		return i;
	}
	return -1;
}

function shiftIntoListUniqueNumbersTimes(p_sortedListToFill, p_listElts) { // Elements of p_listElts don't have to be unique or sorted
	p_listElts.forEach(newElt => {				
		shiftIntoListUniqueNumbers(p_sortedListToFill, newElt) // Skip all future keys in the node since they are treated the same way
	})	
}

// Tries to insert an element in a list without repetition and without ordering of elements. 
// Primitive types involved as == is used !
// Returns the index if found, the index of the positioned element otherwise;
// [1, 3, 6, 5] 2 : list becomes [1,3,6,5,2], returns 4.
function getIndexInListWithAdd(p_list, p_elt) {
	for (var i = 0 ; i < p_list.length ; i++) {
		if (p_list[i] == p_elt) {
			return i;
		}
	}
	p_list.push(p_elt);
	return p_list.length-1;
}