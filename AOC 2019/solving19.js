var rawData19 = [109,424,203,1,21101,11,0,0,1105,1,282,21102,1,18,0,1105,1,259,2102,1,1,221,203,1,21102,1,31,0,1105,1,282,21102,38,1,0,1105,1,259,20101,0,23,2,22102,1,1,3,21101,1,0,1,21101,57,0,0,1105,1,303,2101,0,1,222,21002,221,1,3,21002,221,1,2,21102,1,259,1,21101,0,80,0,1105,1,225,21102,83,1,2,21102,1,91,0,1106,0,303,2101,0,1,223,20102,1,222,4,21101,0,259,3,21101,0,225,2,21101,225,0,1,21101,118,0,0,1106,0,225,20101,0,222,3,21101,34,0,2,21101,133,0,0,1105,1,303,21202,1,-1,1,22001,223,1,1,21102,1,148,0,1106,0,259,1201,1,0,223,20102,1,221,4,20101,0,222,3,21101,12,0,2,1001,132,-2,224,1002,224,2,224,1001,224,3,224,1002,132,-1,132,1,224,132,224,21001,224,1,1,21101,195,0,0,105,1,108,20207,1,223,2,20101,0,23,1,21102,1,-1,3,21102,214,1,0,1105,1,303,22101,1,1,1,204,1,99,0,0,0,0,109,5,1202,-4,1,249,22101,0,-3,1,22101,0,-2,2,21201,-1,0,3,21101,0,250,0,1105,1,225,21201,1,0,-4,109,-5,2106,0,0,109,3,22107,0,-2,-1,21202,-1,2,-1,21201,-1,-1,-1,22202,-1,-2,-2,109,-3,2106,0,0,109,3,21207,-2,0,-1,1206,-1,294,104,0,99,22101,0,-2,-2,109,-3,2106,0,0,109,5,22207,-3,-4,-1,1206,-1,346,22201,-4,-3,-4,21202,-3,-1,-1,22201,-4,-1,2,21202,2,-1,-1,22201,-4,-1,1,21201,-2,0,3,21101,343,0,0,1105,1,303,1105,1,415,22207,-2,-3,-1,1206,-1,387,22201,-3,-2,-3,21202,-2,-1,-1,22201,-3,-1,3,21202,3,-1,-1,22201,-3,-1,2,21201,-4,0,1,21101,384,0,0,1105,1,303,1106,0,415,21202,-4,-1,-4,22201,-4,-3,-4,22202,-3,-2,-2,22202,-2,-4,-4,22202,-3,-2,-3,21202,-4,-1,-2,22201,-3,-2,1,21202,1,1,-4,109,-5,2106,0,0];

function detectPoint(p_x, p_y) {
	var reader = new newIntCodeReader(rawData19);
	provideInput(reader, p_x);
	provideInput(reader, p_y); // Oops, only one input at a time...
	return runAndOutputIntcodeProgram(reader)[0];
}

function conclusion_19_1() {
	var answer = 0;
	for (var y = 0 ; y < 50 ; y++) {
		for (var x = 0 ; x < 50 ; x++) {
			if (detectPoint(x, y) == 1) {
				answer++;
			}
		}
	}
	return answer;
}

function conclusion_19_2() {
	/*var analysisArray = generateDoubleEntryArray(50, 50, '.');
	for (var y = 0 ; y < 50 ; y++) {
		for (var x = 0 ; x < 50 ; x++) {
			if (detectPoint(x, y) == 1) {
				analysisArray[y][x] = '#'
			}
		}
	}
	logArrayCharsWithAlign(analysisArray);
	return; // Okay, now I am sure that it is triangle-like.*/
	var minX, x1, x2;
	minX = 0;
	var x;
	var oneHundredRows = generateArrangedArray(100, function() {return {x1 : 0, x2 : 0}});
	// Initialize the first rows (the only ones that might be empty)
	const STARTROWS = 25;
	for (var y = 0 ; y < STARTROWS ; y++) {
		x1 = -1;
		x2 = -1;
		x = 0;
		while (x1 == -1 && x < 50) {
			if (detectPoint(x, y) == 1) {
				x1 = x;
			}
			x++;
		}
		if (x1 > -1) {
			while (x2 == -1) { // Cannot be endlessly #
				if (detectPoint(x, y) == 0) {
					x2 = x-1;
				}
				x++;
			}
			oneHundredRows[y].x1 = x1;
			oneHundredRows[y].x2 = x2;
		}
	}
	// Now, let's go into the infinite ! 
	var yy, longAgoRow;
	for (var y = STARTROWS ; y < 100000 ; y++) {
		yy = y % 100;
		x1 = -1;
		x2 = -1;
		x = oneHundredRows[(yy == 0) ? 99 : (yy-1)].x1; // Must be first # or a . before #
		while (x1 == -1) { // Cannot be empty
			if (detectPoint(x, y) == 1) { // Oops, y, not yy
				x1 = x;
			}
			x++;
		}
		x = oneHundredRows[(yy == 0) ? 99 : (yy-1)].x2; // Must be # just like its predecessor 
		while (x2 == -1) { // Cannot be endlessly #
			if (detectPoint(x, y) == 0) {
				x2 = x-1;
			}
			x++;
		}
		oneHundredRows[yy].x1 = x1;
		oneHundredRows[yy].x2 = x2;
		longAgoRow = oneHundredRows[(yy == 99) ? 0 : (yy+1)];
		if (longAgoRow.x2 >= oneHundredRows[yy].x1+99) {
			return oneHundredRows[yy].x1 * 10000 + y-99;
		}// 6191081 too low. My failure was that I returned longAgoRow.x1*10000 + (...) instead... so wrong value !
	}	
}

