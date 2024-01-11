function conclusion_5_1() {
	var answer = "";
	var secretKey = "reyedfim"; 
	var c;
	var count = 0;
	while (answer.length < 8) {
		c = satisfied(secretKey+count, 5);
		if (c != 'g') {
			answer+=c;
		}	
		count++;
	}
	return answer;
}

function satisfied(p_message, p_demand) {
	var hash = md5(p_message); // I am not satisfied : I got some Internet function instead of doing one myself
	for (var i = 0 ; i < p_demand ; i++) {
		if (hash.charAt(i) != '0') {
			return 'g';		
		}
	}
	return hash.charAt(p_demand);
}

function conclusion_5_2() {
	var answer = generateArray(8, 'g');
	var secretKey = "reyedfim"; 
	var c, c0;
	var count = 0;
	var found = 0;
	while (found < 8) {
		c = satisfiedP2(secretKey+count);
		if (c != null) {
			c0 = digit(c[0]);
			if (c0 >= 0 && c0 <= 7 && answer[c0] == 'g') {
				answer[c0] = c[1];
				found++;
			}
		}
		count++;
	}
	return answer;
}

function satisfiedP2(p_message) {
	var hash = md5(p_message); // I am not satisfied : I got some Internet function instead of doing one myself
	for (var i = 0 ; i < 5 ; i++) {
		if (hash.charAt(i) != '0') {
			return null;		
		}
	}
	console.log(hash);
	return [hash.charAt(5), hash.charAt(6)];
}

