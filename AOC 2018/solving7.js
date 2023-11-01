const rawData = [
['A','I'],
['M','Q'],
['B','S'],
['G','N'],
['Y','R'],
['E','H'],
['K','L'],
['H','Z'],
['C','P'],
['W','U'],
['V','L'],
['O','N'],
['U','I'],
['D','P'],
['Q','L'],
['F','Z'],
['L','N'],
['P','S'],
['I','S'],
['S','R'],
['T','N'],
['N','X'],
['Z','J'],
['R','J'],
['J','X'],
['E','I'],
['T','R'],
['I','N'],
['K','C'],
['B','D'],
['K','T'],
['E','P'],
['F','I'],
['O','U'],
['I','J'],
['S','Z'],
['L','J'],
['F','T'],
['F','P'],
['I','T'],
['G','S'],
['V','U'],
['F','R'],
['L','R'],
['Y','D'],
['M','E'],
['U','L'],
['C','D'],
['W','N'],
['S','N'],
['O','S'],
['B','T'],
['V','T'],
['S','X'],
['V','P'],
['F','L'],
['P','R'],
['D','N'],
['C','L'],
['O','Q'],
['N','Z'],
['Y','L'],
['B','K'],
['P','Z'],
['V','Z'],
['U','J'],
['Q','S'],
['H','F'],
['E','O'],
['D','F'],
['D','X'],
['L','S'],
['Z','R'],
['K','X'],
['M','V'],
['A','M'],
['B','W'],
['A','P'],
['W','Q'],
['R','X'],
['M','H'],
['F','S'],
['K','Q'],
['Y','Q'],
['W','S'],
['Q','T'],
['K','H'],
['K','D'],
['E','T'],
['Y','E'],
['A','O'],
['G','E'],
['C','O'],
['G','H'],
['Y','I'],
['V','S'],
['B','R'],
['B','X'],
['V','I'],
['N','J'],
['H','I']
];

// A = 0, B = 1, ...
function conclusion_7_1() {
	var makeMeFirst = generateArrangedArray(26, function(e) {return []});
	var pickedTask = generateArray(26, false);
	var answer = "";
	var index = 0;
	var i;
	// For each letter (A = 0, B = 1...) give all the previously needed tasks
	for (i = 0 ; i < rawData.length ; i++) {
		makeMeFirst[charToASCIIRelativePosition(rawData[i][1], 'A')].push(charToASCIIRelativePosition(rawData[i][0], 'A'));
	}
	// Now, until we have a 26-long string : raid the alphabet until we find a task ready. Should not be too long, and should not loop... hopefully.
	while (answer.length < 26) {
		for (var index = 0 ; index < 26 ; index++) {			
			if (!pickedTask[index]) {
				for (i = 0 ; i < makeMeFirst[index].length ; i++) {
					if (!pickedTask[makeMeFirst[index][i]]) {
						break; // One task isn't ready yet
					}
				}
				if (i == makeMeFirst[index].length) {
					// All tasks are ready for 'index'
					pickedTask[index] = true;
					answer += asciiRelativePositionToChar(index, 'A');
					break;
				}
			}
		}
	}
	return answer;
}

function conclusion_7_2() {
	var makeMeFirst = generateArrangedArray(26, function(e) {return []});
	// For each letter (A = 0, B = 1...) give all the previously needed tasks
	for (var i = 0 ; i < rawData.length ; i++) {
		makeMeFirst[charToASCIIRelativePosition(rawData[i][1], 'A')].push(charToASCIIRelativePosition(rawData[i][0], 'A'));
	}
	
	
	var timeItWillTake = generateArray(26, 0);
	function calculateTimeItWillTake(p_i) {
		if (timeItWillTake[p_i] == 0) {
			var answer = 0;
			makeMeFirst[p_i].forEach(iPrev => {
				answer = Math.max(answer, calculateTimeItWillTake(iPrev));
			});
			timeItWillTake[p_i] = answer + p_i + 61;
		}
		return timeItWillTake[p_i];
	}
	
	for (var i = 0 ; i <= 25 ; i++) {
		calculateTimeItWillTake(i);
	}
	
	return timeItWillTake;
} // By finding the heaviest chain of mandatory tasks that cannot be parallelized, I saw that the answer was 898. Had it been below 383 or slightly above, I'd have been in trouble !
// (why 383 ? because the sum of all task durations (SUM(61:86)) is 1911, and it must be split in 5, so, an average of 382.2 minutes per worker.