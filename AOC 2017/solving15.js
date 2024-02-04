function conclusion_15_1() {
	var valA = 783;
	var valB = 325;
	var answer = 0;
	var foundPeriodA = false;
	var foundPeriodB = false;
	for (var i = 0 ; i < 40000000 ; i++) {
		valA *= 16807;
		valB *= 48271;
		valA %= 2147483647;
		valB %= 2147483647;
		if (valA == 783 && !foundPeriodA) {
			console.log("Hey (A) " + i);
			foundPeriodA = true;
		}
		if (valB == 325 && !foundPeriodB) {
			console.log("Hey (B) " + i);			
			foundPeriodB = true;
		}
		if (valA % 65536 == valB % 65536) {
			answer++;
		}
	}
	return answer;
} // 650 (yawn)

function conclusion_15_2() {
	var valA = 783;
	var valB = 325;
	/*var valA = 65;
	var valB = 8921;*/
	var answer = 0;
	var listInA = [];
	var listInB = [];
	var indexToCompare = 0;
	var i;
	while (true) {
		valA *= 16807;
		valB *= 48271;
		valA %= 2147483647;
		valB %= 2147483647;
		if (valA % 4 == 0) {
			listInA.push(valA);
		}
		if (valB % 8 == 0) {
			listInB.push(valB);
		}
		if (indexToCompare < listInA.length && indexToCompare < listInB.length) {
			if (listInA[indexToCompare] % 65536 == listInB[indexToCompare] % 65536) {
				answer++;
			}
			indexToCompare++;
			if (indexToCompare == 5000000) {
				return answer;				
			}
		}
	}
}