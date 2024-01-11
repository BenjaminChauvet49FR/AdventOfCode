function conclusion_16_1() {
	return conclusion_16_aux(272);
}

function conclusion_16_2() {
	return conclusion_16_aux(35651584);
} // I can't believe it works !

function conclusion_16_aux(p_space) {
	var str = "01110110101001000";
	var newStr;
	while (str.length < p_space) {
		newStr = "";
		for (var i = str.length-1 ; i >= 0 ; i--) {
			newStr += ((str.charAt(i) == '1') ? '0' : '1');
		}
		str += '0' + newStr;
	}
	str = str.substring(0, p_space);
	while (str.length % 2 == 0) {
		newStr = "";
		for (var i = 0 ; i < str.length ; i+=2) {
			newStr += (str.charAt(i) == str.charAt(i+1) ? '1' : '0');
		}
		str = newStr;
	}
	return str;
}