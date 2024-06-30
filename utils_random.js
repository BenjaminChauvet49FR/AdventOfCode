function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
} // https://www.w3schools.com/js/js_random.asp

// ---------------
// Generate a random permutation with 0, ..., n-1

function generateRandomPermutation(p_size) {
	var answer = [];
	var remainingArray = [];
	var remainingList = [];
	for (var k = 0 ; k < p_size ; k++) {
		remainingArray.push(true);
		remainingList.push(k);
	}
	var failCount, rand;
	while (answer.length < p_size) {
		failCount = 0;
		rand = remainingList[randomNumber(0, remainingList.length-1)];	
		if (remainingArray[rand]) {
			remainingArray[rand] = false;
			answer.push(rand);
		} else {
			failCount++;
			if (failCount > remainingList.length) {
				remainingList = [];
				remainingList = remainingList.filter(k => remainingArray[k]);
				failCount = 0;
			}
		}
	}
	return answer;
}