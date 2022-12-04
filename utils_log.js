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