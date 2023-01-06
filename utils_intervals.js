// An interval is simply a 2-sized array data with data[0] <= data[1];

// Returns the union of a list of intervals. May sort the interval array if expected.
function union(p_intervalList, p_sortIt) {
	if (p_sortIt) {
		return sortAndUnionPRIVATE(p_intervalList);
	} else {
		var sortedList = [];
		for (var i = 0 ; i < p_intervalList.length ; i++) {
			sortedList.push(p_intervalList[i].slice());
		}
		return sortAndUnionPRIVATE(sortedList);
	}		
}

// Private method that will sort the list of intervals to their minima prior to unionize it.
function sortAndUnionPRIVATE(p_intervalListToSort) {
	sortAscending(p_intervalListToSort, 
		[function(i){return i[0]}, 
		function(i){return i[1]}]
	);
	var answer = [];
	var currentInterval = null;
	for (var i = 0 ; i < p_intervalListToSort.length ; i++) {
		if (currentInterval == null) {
			currentInterval = p_intervalListToSort[i].slice();
		} else if (currentInterval[1] >= p_intervalListToSort[i][0]) {
			if (currentInterval[1] < p_intervalListToSort[i][1]) {				
				currentInterval[1] = p_intervalListToSort[i][1];
			}
		} else {
			answer.push(currentInterval.slice());
			currentInterval = p_intervalListToSort[i].slice();
		}
	}
	if (currentInterval != null) {
		answer.push(currentInterval.slice());
	}
	return answer;
}

// Returns the number of elts in the interval (including the first and the last
function intervalDiscreteLength(p_interval) {
	return p_interval[1]-p_interval[0]+1;
}

// Could be optimized, but anyway...
function intervalsContain(p_intervalList, p_value) {
	for (var i = 0 ; i < p_intervalList.length ; i++) {
		if (p_value >= p_intervalList[i][0] && p_value <= p_intervalList[i][1]) {
			return true;
		}
		if (i == p_intervalList.length-1 || (p_value > p_intervalList[i][1] && p_value < p_intervalList[i+1][0])) {
			return false;
		}
	}
}