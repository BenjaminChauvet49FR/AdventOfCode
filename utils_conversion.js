// Hexadecimal/binary conversion !!!

function hexadecimalToBinary(p_string) {
	var answer = [];
	var val, charac;
	for (var i = 0 ; i < p_string.length ; i++) {
		charac = p_string[i];
		if (charac >= 'A' && charac <= 'F') {
			val = charToASCIIRelativePosition(charac, 'A')+10;
		} else if (charac >= 'a' && charac <= 'f') {
			val = charToASCIIRelativePosition(charac,'a')+10;
		} else {
			val = charToASCIIRelativePosition(charac,'0');			
		}
		hexadecimalToBinaryAddDigits(answer, val);
	}
	return answer;
}

function hexadecimalToBinaryAddDigits(p_binaryArray, p_value) {
	var bit = p_value >= 8;
	p_binaryArray.push(bit);
	if (bit) { p_value -= 8 };
	bit = p_value >= 4;
	p_binaryArray.push(bit);
	if (bit) { p_value -= 4 };
	bit = p_value >= 2;
	p_binaryArray.push(bit);
	if (bit) { p_value -= 2 };
	p_binaryArray.push(p_value == 1);
}

function numberToBinary(p_number) {
	var number = p_number;
	var answer = [];
	while (number > 0) {
		answer.push(number % 2 == 1);
		number = number >> 1;
	}
	return answer.reverse();
}

function bigIntToBinary(p_bigInt) {
	var number = p_bigInt;
	var answer = [];
	while (number > 0n) {
		answer.push(number % 2n == 1n);
		number = number >> 1n;
	}
	return answer.reverse();
}

// p_number must be between 0 and 2**32-1
function numberToHexadecimal(p_number) {
	const digits = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
	var answerList = [];
	var number = p_number;
	while(number > 0) {		
		answerList.push(number % 16);
		number = Math.floor(number/16);
	}
	answerList = answerList.reverse();
	var answer = "";
	answerList.forEach(a => {
		answer += digits[a];
	});
	return answer;
}