const rawData=`0: 3
1: 2
2: 4
4: 8
6: 5
8: 6
10: 6
12: 4
14: 6
16: 6
18: 17
20: 8
22: 8
24: 8
26: 9
28: 8
30: 12
32: 12
34: 10
36: 12
38: 12
40: 8
42: 12
44: 12
46: 10
48: 12
50: 12
52: 14
54: 14
56: 12
58: 14
60: 14
62: 14
64: 14
66: 14
68: 12
70: 14
72: 14
74: 14
76: 14
80: 18
82: 14
90: 18`.split("\n");

function conclusion_13_1() {
	var answer = 0;
	var lay, range, tokens;
	rawData.forEach(str => {
		tokens = str.split(": ");
		lay = parseInt(tokens[0], 10);
		range = parseInt(tokens[1], 10);
		// When you come in layer lay, scanners have moved a number of lay steps.
		if (lay%((range-1)*2) == 0) {
			answer += lay*range;
		}
	});
	return answer;
}

function conclusion_13_2() {
	var dangers = [];
	var lay, realRange, tokens;
	rawData.forEach(str => {
		tokens = str.split(": ");
		lay = parseInt(tokens[0], 10);
		realRange = (parseInt(tokens[1], 10)-1)*2;
		// When you come in layer lay, scanners have moved a number of lay steps.
		// Signal a danger if you leave at a moment X modulus (range-1)*2
		if (lay%realRange == 0) {
			dangers.push([0,realRange]); // Realrange is 6 and lay is 6 : don't leave in 0
		} else {			
			dangers.push([realRange-lay%realRange,realRange]); // Real range is 6 and lay is 11 : don't leave in 1
		}
	});
	// Find all existing ranges
	var listRanges = [];
	dangers.forEach(danger => {
		getIndexInListWithAdd(listRanges, danger[1]);
	});
	// If a range divides another one (or have a lcm low enough), pack both together in a single range.
	// Then, for each new range, eliminate all "impossible times".
	// We should have only a few remaining remaining times per range (or maybe even one for some -all ?- ranges) : 
		// apply chinese remainder theorem among all the possible combinations and find the best one !
	var listPackedRanges = [];
	var i;
	var m;
	listRanges.forEach(range => {
		for (i = 0 ; i < listPackedRanges.length ; i++) {
			m = lcm(range, listPackedRanges[i]);
			if (m < 10000) {
				listPackedRanges[i] = m;
				break;
			}
		}
		if (i == listPackedRanges.length) {
			listPackedRanges.push(range);
		}
	});
	var listSafeRanges = [];
	listPackedRanges.forEach(packedRange => {
		var safeRangesForThisPacked = generateNumericArray(0, packedRange-1);
		dangers.forEach(danger => {
			if (packedRange % danger[1] == 0) { // If the danger has a real range of 34 and the packedRange isn't multiple of 17... well...				
				safeRangesForThisPacked = safeRangesForThisPacked.filter(x => x % danger[1] != danger[0]);
			}
		});
		listSafeRanges.push({range : packedRange, safeRanges : safeRangesForThisPacked.slice()});
	});
	// Now, try all combinations of CRTs for the different safe ranges : the minimal answer is winner.
	var indexesInSafeRanges = generateArray(listSafeRanges.length, 0);
	var bestCRT = -1;
	var crt;
	var crtData = generateArrangedArray(listSafeRanges.length, function(x) {return [listSafeRanges[x].range, listSafeRanges[x].safeRanges[0]]} );
	var done = false;
	var l;
	do {
		crt = chineseRemainderTheorem(crtData);
		if (bestCRT == -1 || crt < bestCRT) {
			bestCRT = crt;
		}
		// Increase counters by 1 and stop if needed
		for (l = 0 ; l < listSafeRanges.length ; l++) {
			indexesInSafeRanges[l]++;
			if (indexesInSafeRanges[l] == listSafeRanges[l].safeRanges.length) {
				indexesInSafeRanges[l] = 0;
				crtData[l][1] = listSafeRanges[l].safeRanges[0];
			} else {
				crtData[l][1] = listSafeRanges[l].safeRanges[indexesInSafeRanges[l]];
				break;
			}
		}
		if (l == listSafeRanges.length) {
			done = true;
		}
	} while (!done);
	return bestCRT;
}