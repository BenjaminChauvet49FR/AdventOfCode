const rawData = [11,30,47,31,32,36,3,1,5,3,32,36,15,11,46,26,28,1,19,3];
var rawDataSorted; 
var remain;

function init() {
	rawDataSorted = rawData.sort(function(x, y) {return y-x});
	remain = generateArray(rawData.length, 0);
	var total = 0;
	for (var i = remain.length-1 ; i >= 0 ; i--) {
		total += rawDataSorted[i];
		remain[i] = total;
	}
}

function conclusion_17_1() {
// Sort rawData in descending order
// The number of sets that lead to the total (150) is equal to the number of sets that lead to (sum of array minus total but anyway...)
	init();
	return numberCombinations(150, 0);
}

function numberCombinations(p_remain, p_startIndex) {
	if (p_remain == 0) { // Must be put before the test of p_startIndex
		return 1;
	} else if (p_startIndex == rawData.length || p_remain < 0 || p_remain > remain[p_startIndex]) { 
		return 0;
	} else {
		return numberCombinations(p_remain-rawDataSorted[p_startIndex], p_startIndex+1) + numberCombinations(p_remain, p_startIndex+1);
	}
}

function conclusion_17_2() {
	init();
	// 1) Find a combination with the minimal number of steps
	// 2) Redo conclusion 1 but with limiting the number of steps to that number
	
	
}


function numberContainersMin(p_remain, p_startIndex, p_number) {
	if (p_remain == 0) { // Must be put before the test of p_startIndex
		return {possible : true, number : p_number};
	} else if (p_startIndex == rawData.length || p_remain < 0 || p_remain > remain[p_startIndex]) { 
		return {possible : false};
	} else {
		const c1 = numberCombinations(p_remain-rawDataSorted[p_startIndex], p_startIndex+1, p_number+1);
		const c2 = numberCombinations(p_remain, p_startIndex+1, p_number);
		const m = (c1.possible ? (c2.possible ? Math.min(c1.number, c2.number), c1.number) : (c2.possible ? c2.number, 0));
		return {
			possible : c1.possible || c2.possible,
			number : m;
		}
	}	
}