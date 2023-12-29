function conclusion_4_1() {
	var answer = 0;
	var secretKey = "yzbqklnj"; // 282749
	//var secretKey = "abcdef"; // 609043
	while (!satisfied(secretKey+answer, 5)) {
		answer++;
	}
	return answer;
}

function conclusion_4_2() {
	var answer = 0;
	var secretKey = "yzbqklnj"; // 282749
	while (!satisfied(secretKey+answer, 6)) {
		answer++;
	}
	return answer;
}

function satisfied(p_message, p_demand) {
	var hash = md5(p_message); // I am not satisfied : I got some Internet function instead of doing one myself
	for (var i = 0 ; i < p_demand ; i++) {
		if (hash.charAt(i) != '0') {
			return false;
		}
	}
	return true;
}