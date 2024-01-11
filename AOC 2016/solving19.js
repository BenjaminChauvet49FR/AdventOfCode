function conclusion_19_1() {
	var currentList = generateNumericArray(1, 3018458);
	//var currentList = generateNumericArray(1, 5);
	var removeOddIndexes = true; // Warning : "odd indexes" in first step have even values !
	var newList;
	var i;
	while (currentList.length > 1) {
		newList = [];
		for (i = (removeOddIndexes ? 0 : 1); i < currentList.length ; i+=2) {
			newList.push(currentList[i]);
		}
		removeOddIndexes = (i == currentList.length);
		currentList = newList;
	}
	// So : remove every other element of the list. 
	// Then, remove every other element in the remaining list ; depending on whether we removed the last one or not the previous time, remove the first one or not.
	return currentList[0];
}

var gLength = 5;
function conclusion_19_2() {
	//var gLength = 3018458;
	var remainingElves = generateArrangedArray(gLength, function(x) {return {previous : x-1, next : x+1}});
	var remainingElvesAll = generateArray(gLength, true);
	remainingElves[0].previous = gLength-1;
	remainingElves[gLength-1].next = 0;
	var remaining = gLength;
	var nbToRemove;
	var futureNbToRemove;
	var ci;
	nbToRemove = Math.floor(gLength/2);
	while (remaining > 1) {
		// Odd remaining elves before deletion ? Advance by 2. Otherwise advance by 1.
		futureNbToRemove = remainingElves[nbToRemove].next;
		if (remaining % 2 == 1) {
			futureNbToRemove = remainingElves[futureNbToRemove].next;
		}
		remainingElves[remainingElves[nbToRemove].next].previous = remainingElves[nbToRemove].previous;
		remainingElves[remainingElves[nbToRemove].previous].next = remainingElves[nbToRemove].next;
		remainingElvesAll[nbToRemove] = false;
		nbToRemove = futureNbToRemove;
		remaining--;
	}
	for (var i = 0 ; ; i++) {
		if (remainingElvesAll[i]) {			
			return i+1; // Brute force didn't work ! (length*(length-1)/2 operations...)
		}
	}
}
// Correct answer is NOT "exactly half" ! (too high)