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

function sortAscending(p_array, p_functionArray) {
	p_array.sort(function(a, b) {return standardComparison(a, b, p_functionArray) });
}

function sortDescending(p_array, p_functionArray) {
	p_array.sort(function(a,b) {return standardComparison(b, a, p_functionArray) });
}

function sortAlphabetical(p_array, p_functionAlphabetical) {
	p_array.sort(function(p_a, p_b) {return (p_functionAlphabetical(p_a) < p_functionAlphabetical(p_b) ? -1 : p_functionAlphabetical(p_a) == p_functionAlphabetical(p_b) ? 0 : 1)});
}