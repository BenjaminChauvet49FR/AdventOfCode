const rawData = `...#.
#.##.
#..##
#.###
##...`.split("\n");

var gData;
var gINew, gIOld;

function init() {
	gData = [generateArrangedDoubleEntryArray(7, 7, function(x, y) {if (x == 0 || x == 6 || y == 0 || y == 6) return false; else return rawData[y-1].charAt(x-1) == '#'}), 
			 generateDoubleEntryArray(7, 7, false)];
	gIOld = 0;
	gINew = 1;
}

function performStep() {
	var count, x, y, i;
	for (y = 1 ; y <= 5 ; y++) {
		for (x = 1 ; x <= 5 ; x++) {
			count = 0;
			i = 0;
			while (i != 4 && count != 3) {
				if (gData[gIOld][y + DeltaY[i]][x + DeltaX[i]]) {
					count++;
				}
				i++;
			}
			gData[gINew][y][x] = (count == 1 || (!gData[gIOld][y][x] && count == 2))
		}
	}
	gIOld = 1-gIOld;
	gINew = 1-gINew;
	count = 0;
	var mult = 1;
	for (y = 1 ; y <= 5 ; y++) {
		for (x = 1 ; x <= 5 ; x++) {
			count += (gData[gIOld][y][x]) ? mult : 0;
			mult *= 2;
		}
	}		
	return count;
}

function conclusion_24_1() { 
	init();
	var list = [];
	var count, index;
	do {
		count = performStep();
		index = shiftIntoListUniqueNumbers(list, count);
	} while (index != -1);
	return count;
} // 17863711 :)

// -----------------

var gMin = 200;
var gMax = 200;
function initP2() {
	gData = [];
	for (var i = 0 ; i < 401 ; i++) {
		gData.push(
			[generateDoubleEntryArray(5, 5, false), generateDoubleEntryArray(5, 5, false)]
		);
	}
	gIOld = 0;
	gINew = 1;
	var x, y;
	for (y = 0 ; y <= 4 ; y++) {
		for (x = 0 ; x <= 4 ; x++) {
			gData[200][gIOld][y][x] = (rawData[y].charAt(x) == '#');
		}
	}
	gMin = 200;
	gMax = 200;
}

function performStepP2() {
	var count, x, y, i, dx, dy, val;
	var expandGMax = false;
	var expandGMin = false;
	for (var level = gMin-1 ; level <= gMax+1 ; level++) {		
		for (y = 0 ; y <= 4 ; y++) {
			for (x = 0 ; x <= 4 ; x++) {
				if (x == 2 && y == 2) {
					continue;
				}
				count = countLeft(level, x, y) + countUp(level, x, y) + countRight(level, x, y) + countDown(level, x, y);			
				val = (count == 1 || (!gData[level][gIOld][y][x] && count == 2));
				gData[level][gINew][y][x] = val;
				if (val) {
					if (level == gMin-1) {
						expandGMin = true;
					}
					if (level == gMax+1) {
						expandGMax = true;
					}
				}
			}
		}
	}
	if (expandGMax) {
		gMax++;
	}
	if (expandGMin) {
		gMin--;
	}
	gIOld = 1-gIOld;
	gINew = 1-gINew;
}

function countLeft(p_level, p_x, p_y) {
	var answer = 0;
	if (p_x == 0) {
		return (gData[p_level-1][gIOld][2][1] ? 1 : 0);
	} else if (p_x == 3 && p_y == 2) {
		var count = 0;
		for (var y = 0 ; y <= 4 ; y++) {
			if (gData[p_level+1][gIOld][y][4]) {
				count++;
			}
		}
		return count;
	} else {
		return (gData[p_level][gIOld][p_y][p_x-1] ? 1 : 0);
	}
}

function countUp(p_level, p_x, p_y) {
	var answer = 0;
	if (p_y == 0) {	
		return (gData[p_level-1][gIOld][1][2] ? 1 : 0);
	} else if (p_x == 2 && p_y == 3) {
		var count = 0;
		for (var x = 0 ; x <= 4 ; x++) {
			if (gData[p_level+1][gIOld][4][x]) {
				count++;
			}
		}
		return count;
	} else {
		return (gData[p_level][gIOld][p_y-1][p_x] ? 1 : 0);
	}
}

function countRight(p_level, p_x, p_y) {
	var answer = 0;
	if (p_x == 4) {	
		return (gData[p_level-1][gIOld][2][3] ? 1 : 0);
	} else if (p_x == 1 && p_y == 2) {
		var count = 0;
		for (var y = 0 ; y <= 4 ; y++) {
			if (gData[p_level+1][gIOld][y][0]) {
				count++;
			}
		}
		return count;
	} else {
		return (gData[p_level][gIOld][p_y][p_x+1] ? 1 : 0);
	}
}

function countDown(p_level, p_x, p_y) {
	var answer = 0;
	if (p_y == 4) {		
		return (gData[p_level-1][gIOld][3][2] ? 1 : 0);
	} else if (p_x == 2 && p_y == 1) {
		var count = 0;
		for (var x = 0 ; x <= 4 ; x++) {
			if (gData[p_level+1][gIOld][0][x]) {
				count++;
			}
		}
		return count;
	} else {
		return (gData[p_level][gIOld][p_y+1][p_x] ? 1 : 0);
	}
}

function conclusion_24_2() { 
	initP2();
	for (var i = 0 ; i < 200 ; i++) {
		performStepP2();
	}
	var x, y;
	var answer = 0;
	for (var i = gMin ; i <= gMax ; i++) {
		for (y = 0 ; y <= 4 ; y++) {
			for (x = 0 ; x <= 4 ; x++) {
				if (gData[i][gIOld][y][x]) {
					answer++;
				}
			}
		}
	}
	return answer;
} 