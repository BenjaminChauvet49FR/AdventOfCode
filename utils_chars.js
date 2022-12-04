// Char to 'distance from a' conversion and vice-versa
function charToDistFromChar_a(p_char) {
	return p_char.charCodeAt(0)-'a'.charCodeAt(0);
}

function charToDistFromChar_A(p_char) {
	return p_char.charCodeAt(0)-'A'.charCodeAt(0);
}

function distFromChar_a_ToChar(p_dist) {
	return String.fromCharCode(p_dist + 'a'.charCodeAt(0));
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