const rawData7 = [3,8,1001,8,10,8,105,1,0,0,21,34,55,68,85,106,187,268,349,430,99999,3,9,1001,9,5,9,1002,9,5,9,4,9,99,3,9,1002,9,2,9,1001,9,2,9,1002,9,5,9,1001,9,2,9,4,9,99,3,9,101,3,9,9,102,3,9,9,4,9,99,3,9,1002,9,5,9,101,3,9,9,102,5,9,9,4,9,99,3,9,1002,9,4,9,1001,9,2,9,102,3,9,9,101,3,9,9,4,9,99,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,99];

function conclusion_7_1() {
	const allPerms = generateAllPermutations();
	for (var i = 0 ; i < allPerms.length ; i++) {
		val = tryCombination(allPerms[i]);
		if (i == 0) {
			best = val;
		} else {			
			best = Math.max(best, val);
		}
	}
	return best;
}

function tryCombination(p_list) {
	var data;
	var itinerant = 0;
	var reader;
	for (var i = 0 ; i <= 4 ; i++) {
		data = rawData7.slice();
		reader = newIntCodeReader([p_list[i], itinerant]);
		readIntCodeProgram(data, reader);
		itinerant = reader.output;
	}
	return itinerant;
}


// TODO : generalizable ! (but will it serve again ?)
function generateAllPermutations() {
	var taken = [false, false, false, false, false];
	var answer = [];
	generateAllPermutations_aux([], taken, answer);
	return answer;
}

function generateAllPermutations_aux(p_currentList, p_taken, p_accumulator) {
	if (p_currentList.length == 5) {
		p_accumulator.push(p_currentList.slice());
	} else {
		for (var i = 0 ; i < 5 ; i++) {
			if (!p_taken[i]) {
				p_taken[i] = true;
				p_currentList.push(i);
				generateAllPermutations_aux(p_currentList, p_taken, p_accumulator);
				p_currentList.pop(i);
				p_taken[i] = false;
			}
		}
	}
}

// -----------------

function conclusion_7_2() {
	const allPerms = generateAllPermutations();
	for (var i = 0 ; i < allPerms.length ; i++) {
		for (var j = 0 ; j < 5 ; j++) {
			allPerms[i][j] += 5;
		}
		val = tryCombinationP2(allPerms[i]);
		if (i == 0) {
			best = val;
		} else {			
			best = Math.max(best, val);
		}
	}
	return best;
}

// So, 56789 disordonated
function tryCombinationP2(p_list) {
	// Run p1 til blocked. Remember any output it produces ! Then run P2 til blocked. ... then run P5 til blocked. Unlock p1.
	var travelling = 0;
	var iAmp = 0;
	var stillRunningAmps = 5;
	var datas = [];
	var readers = [];
	var reader;
	var finalTravelling = 0;
	for (var i = 0 ; i < 5 ; i++) {
		datas.push(rawData7.slice());
		readers.push(newIntCodeReader([p_list[i]]));
	}	
	while (stillRunningAmps > 0) {
		reader = readers[iAmp];
		provideInput(reader, travelling);
		do {
			rCode = readIntCodeStep(datas[iAmp], reader);
			if (rCode < 0) {
				console.log("Something wrong happened : " + rCode);
				return rCode;
			}
			if (reader.emitsOutput) {
				travelling = reader.output;
				if (iAmp == 4) {
					finalTravelling = travelling;
				}
			}
			if (reader.end) {
				stillRunningAmps--;
			}
		} while (!reader.pending && !reader.end); 
		iAmp++;
		if (iAmp == 5) {
			iAmp = 0;
		}
	}
	return finalTravelling;
}

