const rawData1 = 
[23,37,863,19,13,17,29,571,41];

const minutes = 1000052;

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

// ----------

/*const rawData2 = "23,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,863,x,x,x,x,x,x,x,x,x,x,x,19,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,571,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41"

const data = {
	var tokens = rawData2.split(",");
	var values = [];
	var offsets = [];
	for (var i = 0 ; i < tokens.length ; i++) {
		if (i != "x") {
			
		}
	}
}*/ // TO UN-DISCARD