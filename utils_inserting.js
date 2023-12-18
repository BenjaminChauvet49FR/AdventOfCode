// Inserts an element into an array (or list, whatever) according to p_function, immediately before the first element for which the function is false. 
// If it is never false, inserts it at the end.
// PREREQUISTED : function(element, already) must be true for all "already" elts of the array before a gap and false after that gap. (Gap that may be at very beginning or very end)

// https://stackabuse.com/javascript-how-to-insert-elements-into-a-specific-index-of-an-array/
// Example : array = [1, 3, 5, 7]; shiftIntoList(array, 4, function(element, already) { return element > already}); // array = [1, 3, 4, 5, 7]
// Another example : array = [9, 7, 5, 2]; shiftIntoList(array, 4, function(element, already) { return element < already}); // array = [9, 7, 5, 4, 2]
function shiftIntoList(p_sortedList, p_element, p_function) {
	var i = 0;
	while (i < p_sortedList.length && p_function(p_element, p_sortedList[i])) {
		i++;
	}
	p_sortedList.splice(i, 0, p_element);
} // TODO may be optimized with min/max (cf. all three problems that use it)

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