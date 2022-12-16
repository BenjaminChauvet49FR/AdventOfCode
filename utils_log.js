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

// Log ranges by pairs (assume there are an even number)... [3, 2, 8, 10] => "3-2  8-10"
function rangesString(p_array) {
	var answer = "";
	for (var i = 0 ; i < p_array.length ; i+=2) {
		answer += p_array[i] + "-" + p_array[i+1] + "  "
	}
	return answer;
}