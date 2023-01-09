const data = [16,11,15,0,1,7];
//const data = [0,3,6];

function conclusion_15_1() {
	var lastDateNumbers = [];
	var number;
	var i;
	for (i = 0 ; i < data.length ; i++) {
		number = data[i];
		while (number >= lastDateNumbers.length) {
			lastDateNumbers.push(-1);
		}
		lastDateNumbers[number] = i;
		//console.log(data[i]);
	}
	var futureSpokenNumber = 0; // Last number is new, so 0.
	var spokenNumber;
	for (i = data.length ; i < 30000000 ; i++) {
		spokenNumber = futureSpokenNumber;
		while (spokenNumber >= lastDateNumbers.length) {
			lastDateNumbers.push(-1);
		}
		if (lastDateNumbers[spokenNumber] == -1) {
			futureSpokenNumber = 0;
		} else {
			futureSpokenNumber = i-lastDateNumbers[spokenNumber];
		}
		lastDateNumbers[spokenNumber] = i;
		//console.log(spokenNumber);
	}
	return spokenNumber;
	
} // Correct answers : after 2020, 662. After 30000000 (30 millions) : 37312.