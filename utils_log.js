function logArrayChars(p_arrayChars) {
	var string = "";
	var i, j;
	for (i = 0 ; i < p_arrayChars.length ; i++) {
		string = "";
		for (j = 0 ; j < p_arrayChars[0].length ; j++) {
			string+=p_arrayChars[i][j];
		}
		console.log(string);
	}
}

function logArrayCharsWithAlign(p_arrayChars) {
	var string = "";
	var i, j;
	for (i = 0 ; i < p_arrayChars.length ; i++) {
		string = numberStringAlign(i, p_arrayChars.length-1) + " ";
		for (j = 0 ; j < p_arrayChars[0].length ; j++) {
			string+=p_arrayChars[i][j];
		}
		console.log(string);
	}
}

// Log ranges by pairs (assume there are an even number)... [3, 2, 8, 10] => "3-2  8-10"
function rangesString(p_array) {
	var answer = "";
	for (var i = 0 ; i < p_array.length ; i+=2) {
		answer += p_array[i] + "-" + p_array[i+1] + "  "
	}
	return answer;
}

// Give numbers an unique alignment so they are visible.
function numberStringAlign(p_value, p_max) {
	var expectedDigits = p_max == 0 ? 1 : 1+Math.floor(Math.log10(p_max));
	var meaningDigits = p_value == 0 ? 1 : 1+Math.floor(Math.log10(p_value));
	var answer = "";
	for (var i = meaningDigits ; i < expectedDigits ; i++) {
		answer += "0";
	}
	return answer + p_value;
}