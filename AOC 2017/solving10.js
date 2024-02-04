const rawDataP1 = [227,169,3,166,246,201,0,47,1,255,2,254,96,3,97,144];

// Note : requires "library2017.js" in order to be solved
function conclusion_10_1() {
	var gLengths = rawDataP1;
	var answer = generateNumericArray(0, 255);
	var pos = 0;
	for (var i = 0 ; i < gLengths.length ; i++) {
		reverseFromTo(answer, pos, pos+gLengths[i]-1);
		pos += (gLengths[i] + i);
		pos %= answer.length;
	}
	return answer[0] * answer[1];
}

function conclusion_10_2() {
	return makeKnotHash("227,169,3,166,246,201,0,47,1,255,2,254,96,3,97,144");
} // 2da93395f1a6bb3472203252e3b17fe5