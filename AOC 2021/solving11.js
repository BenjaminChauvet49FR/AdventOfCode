var rawData =
["7313511551",
 "3724855867",
 "2374331571",
 "4438213437",
 "6511566287",
 "6727245532",
 "3736868662",
 "2348138263",
 "2417483121",
 "8812617112"]

// Obtained from here, transformed with ctrl + alt.
// https://adventofcode.com/2021/day/11/input

var dynamicData = digitPseudoArray_to_digitArray(rawData);
const yLength = dynamicData.length;
const xLength = dynamicData[0].length;
var checkerFlashed = new CheckCollectionDoubleEntry(xLength, yLength);
var newFlashes = [];

function increaseAndTryToFlash(p_x, p_y) {
	dynamicData[p_y][p_x]++;
	if (dynamicData[p_y][p_x] == 10) {
		newFlashes.push({x : p_x, y : p_y});
		checkerFlashed.add(p_x, p_y);
	}
}

function oneStep() {
	checkerFlashed.clean();
	var countFlashes = 0;
	var x, y;
	newFlashes = [];
	// First, increase all values by 1 AND notice the ones who flashed
	for (y=0 ; y < yLength ; y++) {
		for (x=0 ; x < xLength ; x++) {
			increaseAndTryToFlash(x, y);
		}
	}
	
	var oldFlashes, xOld, yOld;
	// Then, perform flashes !
	while (newFlashes.length != 0) {		
		oldFlashes = [];
		copiesCoorsList(newFlashes, oldFlashes);
		newFlashes = [];
		oldFlashes.forEach(oldCoors => {	
			xOld = oldCoors.x;
			yOld = oldCoors.y;
			existingOrthoDiagonalNeighborsCoors(xOld, yOld, xLength, yLength).forEach(coors => {
				increaseAndTryToFlash(coors.x, coors.y);
			});
		});
	}
	
	// Last, set them all to 0.
	for (y=0 ; y < yLength ; y++) {
		for (x=0 ; x < xLength ; x++) {
			if (dynamicData[y][x] >= 10) {
				dynamicData[y][x] = 0;
				countFlashes++;
			}
		}
	}	
	return checkerFlashed.list.length; 
}

function conclusion_11_1() {
	logArrayChars(dynamicData);
	console.log("-----------");
	var answer = 0;
	for (var i = 0 ; i < 100 ; i++) {
		countFlashes = oneStep();
		answer += countFlashes;
		logArrayChars(dynamicData);
		console.log(countFlashes);
		console.log("Total = " + answer);
		console.log("-----------");
	}
	console.log("Conclusion : answer is " + answer + " (relaunch page before conclusion_11_2 !)"); // Correct answer = 1655
}

function conclusion_11_2() {
	for (var i = 0 ; i < 5000 ; i++) {
		countFlashes = oneStep();
		if (countFlashes == dynamicData.length*dynamicData[0].length) {
			console.log("Found the answer ! " + (i+1)); // Correct answer = 337
			return;
		}
	}
}