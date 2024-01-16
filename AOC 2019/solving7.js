const rawData7 = [3,8,1001,8,10,8,105,1,0,0,21,34,55,68,85,106,187,268,349,430,99999,3,9,1001,9,5,9,1002,9,5,9,4,9,99,3,9,1002,9,2,9,1001,9,2,9,1002,9,5,9,1001,9,2,9,4,9,99,3,9,101,3,9,9,102,3,9,9,4,9,99,3,9,1002,9,5,9,101,3,9,9,102,5,9,9,4,9,99,3,9,1002,9,4,9,1001,9,2,9,102,3,9,9,101,3,9,9,4,9,99,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,99];

function conclusion_7_1() {
	const allPerms = generateAllPermutations(5);
	for (var i = 0 ; i < allPerms.length ; i++) {
		val = tryCombination(allPerms[i]);
		if (i == 0) {
			best = val;
		} else {			
			best = Math.max(best, val);
		}
	}
	return best; // 255840
}

function tryCombination(p_list) {
	var data;
	var itinerant = 0;
	var reader;
	var outputs;
	for (var i = 0 ; i <= 4 ; i++) {
		reader = newIntCodeReader(rawData7, [p_list[i], itinerant]);
		outputs = runAndOutputIntcodeProgram(reader);
		itinerant = outputs[0];
	}
	return Number(itinerant);
}

// -----------------

function conclusion_7_2() {
	const allPerms = generateAllPermutations(5);
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
	return best; // 84088865
}

// So, 56789 disordonated
function tryCombinationP2(p_list) {
	// Run p1 til blocked. Remember any output it produces ! Then run P2 til blocked. ... then run P5 til blocked. Unlock p1.
	var travelling = 0;
	var iAmp = 0;
	var stillRunningAmps = 5;
	var readers = [];
	var reader;
	var finalTravelling = 0;
	for (var i = 0 ; i < 5 ; i++) {
		readers.push( newIntCodeReader(rawData7, [p_list[i]]) );
	}	
	var output;
	while (stillRunningAmps > 0) {
		reader = readers[iAmp];
		provideInput(reader, travelling);
		do {
			/*rCode = readIntCodeStep(reader);
			if (rCode < 0) {
				console.log("Something wrong happened : " + rCode);
				return rCode;
			}
			if (reader.emitsOutput) {
				travelling = reader.output;
			}*/ // So it won't bug anymore ... ?
			output = runAndOutputIntcodeProgram(reader);			
			if (output.length > 0) {
				travelling = output[0];
			}
			if (reader.end) {
				stillRunningAmps--;
			}
		} while (!reader.pending && !reader.end); 
		iAmp++;
		if (iAmp == 5) {
			finalTravelling = travelling;
			iAmp = 0;
		}
	}
	return Number(finalTravelling);
}

