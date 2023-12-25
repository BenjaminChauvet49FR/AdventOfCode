// https://stackabuse.com/javascript-how-to-insert-elements-into-a-specific-index-of-an-array/

// function f(x) {return x}; var l = []; shiftIntoList(l, 3, f); shiftIntoList(l, 8, f); shiftIntoList(l, 9, f); shiftIntoList(l, 4, f); shiftIntoList(l, 3, f); shiftIntoList(l, 8, f); shiftIntoList(l, 7, f); 
// Insert into an ASCENDING list an element according to a function
function shiftIntoList(p_ascendingList, p_element, p_function) {
	var iMin = 0;
	var iMax = p_ascendingList.length;
	while (iMin < iMax) {
		var iMed = Math.floor((iMin+iMax)/2);
		if (p_function(p_element) > p_function(p_ascendingList[iMed])) {
			iMin = iMed+1;
		} else {
			iMax = iMed;
		}
	} // 1 3 5 7 9 (4) ? (0-4) (4 < 5) ; (0-2) (3 < 4) (1-2) 
	p_ascendingList.splice(iMin, 0, p_element);
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