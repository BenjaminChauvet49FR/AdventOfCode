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


function oneStep() {
	var countFlashes = 0;
	var x, y;
	const yLength = dynamicData.length;
	const xLength = dynamicData[0].length;
	// First, increase all values by 1 AND notice the ones who flashed
	var newFlashes = [];
	for (y=0 ; y < yLength ; y++) {
		for (x=0 ; x < xLength ; x++) {
			dynamicData[y][x]++;
			if (dynamicData[y][x] == 10) {
				newFlashes.push({x : x, y : y});
			}
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
				dynamicData[coors.y][coors.x]++;
				if (dynamicData[coors.y][coors.x] == 10) {
					newFlashes.push({x : coors.x, y : coors.y});
				}
			});
		});
	}
	
	// Last, set them all to 0.
	// 551551 A FAIRE AVEC LES CHECKERS NORMALEMENT !
	for (y=0 ; y < yLength ; y++) {
		for (x=0 ; x < xLength ; x++) {
			if (dynamicData[y][x] >= 10) {
				dynamicData[y][x] = 0;
				countFlashes++;
			}
		}
	}	
	return countFlashes;
}

function conclusion() {
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
	console.log("Conclusion : answer is " + answer);
}

function conclusion2() {
	for (var i = 0 ; i < 5000 ; i++) {
		countFlashes = oneStep();
		if (countFlashes == dynamicData.length*dynamicData[0].length) {
			console.log("Found the answer ! " + (i+1));
			return;
		}
	}
}
// NOT 2159
// 1655 (I had one too many countFlashes++ in the first step...)