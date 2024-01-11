function conclusion_14_1() {
	//var salt = "abc";
	var salt = "ihaygndm";
	var count = 0;
	var answer = 0;
	var i, combos;
	while (count < 64) {
		combos = a3Combo(md5(salt+answer));
		if (combos.length > 0) {			
			for (i = answer+1 ; i < answer+1000 ; i++) {			
				if (hasA5Combo(md5(salt+i), combos)) {
					count++;
					break;
				}
			}
		}
		answer++
	}
	return answer-1;
}

function a3Combo(p_hash) { // Error : "Only consider the first such triplet in a hash." lol...
	var answer = [];
	var i = 0;
	while (i <= p_hash.length-3) {
		if (p_hash.charAt(i) == p_hash.charAt(i+1) && p_hash.charAt(i) == p_hash.charAt(i+2)) {
			//getIndexInListWithAdd(answer, p_hash.charAt(i));
			//i+=3;
			return p_hash.charAt(i);
		} else {
			i++;
		}
	}
	//return answer;
	return '';
}

function hasA5Combo(p_hash, p_comboChar) {
//function hasA5Combo(p_hash, p_combosList) {
	for (var i = 0 ; i <= p_hash.length-5 ; i++) {
//		for (var j = 0 ; j < p_combosList.length ; j++) {
			for (var k = 0 ; k <= 4 ; k++) {
	//			if (p_hash.charAt(i+k) != p_combosList[j]) {
				if (p_hash.charAt(i+k) != p_comboChar) {
					break;
				}
				if (k == 4) {
					return true;
				}
			}
//		}
	}
	return false;
}

// -------------

function generate2016HashesAndTriplet(p_string) {
	var str = p_string;
	for (var i = 0 ; i < 2017 ; i++) {
		str = md5(str);
	}
	return {string : str, triplet : a3Combo(str)};
}

function conclusion_14_2() {
	var futureHashes = [];
	//var salt = "abc";
	var salt = "ihaygndm";
	for (var i = 0 ; i < 1000 ; i++) {
		futureHashes.push(generate2016HashesAndTriplet(salt+i));
	}
	var answer = 0;
	var currentHash;
	var count = 0;
	var strTriple;
	while (count < 64) {
		strTriple = futureHashes[answer % 1000];
		futureHashes[answer % 1000] = generate2016HashesAndTriplet(salt+(answer+1000)); // Should have added parentheses first !
		if (strTriple.triplet != '') {			
			for (i = 0 ; i < 1000 ; i++) {			
				if (futureHashes[i].triplet != "" && hasA5Combo(futureHashes[i].string, strTriple.triplet)) {
					count++;
					break;
				}
			}
		}
		answer++;
	}
	return answer-1;
} // 14293 too low :(

