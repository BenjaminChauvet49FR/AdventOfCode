const rawData1 = 
[23,37,863,19,13,17,29,571,41];

const minutes = 1000052;

const dataOffset = [
23,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,37,-1,-1,-1,-1,-1,863,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,19,13,-1,-1,-1,17,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,29,-1,571,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,41
];



function conclusion_13_1() {
	var waitTime = 0;
	var i = 0;
	var found = false;
	while (!found) {
		found = ((minutes + waitTime) % rawData1[i]) == 0;
		if (!found) {			
			i++;
			if (i == rawData1.length) {
				i = 0;
				waitTime++;
			}
		}
	}
	return waitTime * rawData1[i];
	// Correct answer = 119
}

function conclusion_13_2() {
	var offsetForced = 0;
	var modForced = 1;
	var departure;
	var departureAligned;
	for (var i = 0 ; i < dataOffset.length ; i++) {
		departure = dataOffset[i];
		if (departure != -1) {
			departureAligned = departure-i;
			while(departureAligned < 0) {
				departureAligned += departure;
			}
			while ((offsetForced % departure) != (departureAligned % departure)) {				
				offsetForced += modForced;
			}
			modForced *= departure;
			console.log(modForced + " " + offsetForced);
		}
	}
	return departure;
} // Correct answer = 1106724616194525

// ----------