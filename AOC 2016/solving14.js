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
	var a3c = a3Combo(str);
	return {string : str, triplet : a3c, mayHaveQuintuplet : (a3c != ""), quintuplets : []};
}

function findThe5Combos(p_hash1000stepsLater) {
	var c;
	for (var i = 0 ; i <= p_hash1000stepsLater.string.length-5 ; i++) {
		c = p_hash1000stepsLater.string.charAt(i);
		for (var k = 1 ; k <= 4 ; k++) {
			if (p_hash1000stepsLater.string.charAt(i+k) != c) {
				break;
			}
			if (k == 4) {
				p_hash1000stepsLater.quintuplets.push(c);
			}
		}
	}
	if (p_hash1000stepsLater.quintuplets.length == 0) {
		p_hash1000stepsLater.mayHaveQuintuplet = false;
	}
}

const NO_QUINTUPLET = 'X';
const MAYBE_QUINTUPLET = 'O';

function conclusion_14_2() {
	var futureHashes = [];
	var salt = "abc";
	//var salt = "ihaygndm";
	var listOf5CMod1000 = [];
	var newlistOf5CMod1000 = [];
	for (var i = 0 ; i < 1000 ; i++) {
		futureHashes.push(generate2016HashesAndTriplet(salt+i));
		if (futureHashes[i].mayHaveQuintuplet) {
			findThe5Combos(futureHashes[i]);
			if (futureHashes[i].quintuplets.length > 0) {
				listOf5CMod1000.push(i);
			}
		}
	}
	var answer = 0;
	var currentHash;
	var count = 0;
	var strTriple;
	while (count < 64) {
		if (answer % 1000 == 0 && answer != 0) { // The "list of potential 5-combos" may be outdated. Refresh it !
			newlistOf5CMod1000 = [];
			listOf5CMod1000.forEach(index => {
				if (futureHashes[index].quintuplets.length > 0) {
					newlistOf5CMod1000.push(index);
				}
			});
			listOf5CMod1000 = newlistOf5CMod1000.slice();
		}
		strTriple = futureHashes[answer % 1000];
		// Add the hash of 1000 steps later. 
		// Error : Should have added parentheses first !
		futureHashes[answer % 1000] = generate2016HashesAndTriplet(salt+(answer+1000)); 
		// Does it have any 5 combos ? Let's find out !
		if (futureHashes[answer % 1000].mayHaveQuintuplet) {
			findThe5Combos(futureHashes[answer % 1000]);
			if (futureHashes[answer % 1000].quintuplets.length > 0) {				
				listOf5CMod1000.push(answer%1000);
			}
		}
		// Now, back to the present hash. Let's see if it has a triplet, and if any of the hashes within the next 1000 have the corresponding quintuplet.
		if (strTriple.triplet != '') {
			var index, i, j;
			var found = false;
			for (i = 0 ; i < listOf5CMod1000.length ; i++) {
				index = listOf5CMod1000[i];
				for (j = 0 ; j < futureHashes[index].quintuplets.length ; j++) {					
					if (futureHashes[index].quintuplets[j] == strTriple.triplet) {
						count++; 
						found = true;
						break;
					} 					
				}
				if (found) {break;}
			}
		}
		answer++;
	}
	return answer-1;
} // 14293 too low :(
// 19968 wins :)

