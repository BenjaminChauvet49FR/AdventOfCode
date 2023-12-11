// Standard method
function standardComparison(a, b, p_functionArray) {
      var comp;
      for (var iComp = 0 ; iComp < p_functionArray.length ; iComp++) {
            comp = p_functionArray[iComp](a) - p_functionArray[iComp](b);
            if (comp != 0) {
                  return comp;
            }
      }
      return 0;
}

function sortAscendingNumeric(p_array) {
	p_array.sort(function(a, b) {return a-b});
}

function sortAscending(p_array, p_functionArray) {
	p_array.sort(function(a, b) {return standardComparison(a, b, p_functionArray) });
}

function sortDescending(p_array, p_functionArray) {
	p_array.sort(function(a,b) {return standardComparison(b, a, p_functionArray) });
}

function sortAlphabetical(p_array, p_functionAlphabetical) {
	p_array.sort(function(p_a, p_b) {return (p_functionAlphabetical(p_a) < p_functionAlphabetical(p_b) ? -1 : p_functionAlphabetical(p_a) == p_functionAlphabetical(p_b) ? 0 : 1)});
}

const INDEX_NOT_FOUND = -1;
function findInSortedArray(p_array, p_element) {
	return findInSortedArray_aux(p_array, 0, p_array.length-1, p_element);	
}

function findInSortedArray_aux(p_array, p_indexMin, p_indexMax, p_element) {
	if (p_indexMax < p_indexMin) {
		return INDEX_NOT_FOUND;
	}
	var iMid = Math.floor((p_indexMin + p_indexMax) / 2);
	const elt = p_array[iMid];
	if (elt == p_element) {
		return iMid;
	} else if (p_element < elt) {
		return findInSortedArray_aux(p_array, p_indexMin, iMid-1, p_element); 
	}
	return findInSortedArray_aux(p_array, iMid+1, p_indexMax, p_element);
}