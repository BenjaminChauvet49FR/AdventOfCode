// Char to 'distance from a' conversion and vice-versa
function charToASCIIRelativePosition(p_charPlus, p_charMinus) {
	return p_charPlus.charCodeAt(0)-p_charMinus.charCodeAt(0);
}

function asciiRelativePositionToChar(p_pos, p_charSrc) {
	return String.fromCharCode(p_pos + p_charSrc.charCodeAt(0));
}

// array of chars + sorting

function stringToCharArray(p_string) {
	var answer = [];
	for (i = 0 ; i < p_string.length ; i++) {
		answer.push(p_string.charAt(i));
	}
	return answer;
}

function sortString(p_string) {
	return stringToCharArray(p_string).sort();
}

// Test if string that contains a char.

function stringContainsChar(p_string, p_char) {
	return (p_string.indexOf(p_char) != -1);
}

// Just a transposition, despite what the name suggests
function stringToBinaryTransposition(p_string) {
	var answer = [];
	for (var i = 0 ; i < p_string.length ; i++) {
		answer.push(p_string.charAt(i) != '0');
	}
	return answer;
}

function binaryToStringTransposition(p_binary) {
	var answer = "";
	for (var i = 0 ; i < p_binary.length ; i++) {
		answer += (p_binary[i] ? '1' : '0');
	}
	return answer;
}


// Hexadecimal/binary conversion !!!

function hexadecimalToBinary(p_string) {
	var answer = [];
	var val, charac;
	for (var i = 0 ; i < p_string.length ; i++) {
		charac = p_string[i];
		if (charac >= 'A' && charac <= 'F') {
			val = charToASCIIRelativePosition(charac, 'A')+10;
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
