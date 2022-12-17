// Standard method
function standardComparison(a, b, p_functionArray) {
      var comp;
      for (var iComp = 0 ; iComp < p_functionArray.length ; iComp++) {
            comp = p_functionArray[iComp](b) - p_functionArray[iComp](a);
            if (comp != 0) {
                  return comp;
            }
      }
      return 0;
}