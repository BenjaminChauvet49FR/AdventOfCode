const rawDataOfficial = [
"#.########################################################################################################################",
"#<.^><>^>>>^<v^^v>v^vv<v>.<v^><>^<^.^>^><^^v^>v^v>>v><v<^vv>><^.v<^vv.v<^<^<vv<<vv>..v^><>..<<^.<v^^^vv>.<<^v>^<<v<^v^v>>#",
"#>^><.^<^v<>^<<vv^<^<>>^v<^vvv>vvv<><v^v<>><<^>.v.>^v^^><^<v^v^v^.>v^<vvv^^.vv^^v^<^^v>>>>.v^^.>v>^<<v>vv<<v>.>>><^>>>>v>#",
"#>v>^^^^>.^.v<>>>v>v^^v.>v^>><..v<^vv^v^><<>v<^<vv>>^.<.>>>v<>>^^v>>^<^v^<^v^v<v^>^.vvvv.<<.>^<^^>>v>v<>><^^>v^^<v^.vv<>>#",
"#><<<>v^^v>v>v>^<<<.<^.><<<>v>>>.^<^><>^v<^^>>v.>vv^<<<>^<>>><^^.^vv^<vv<<><.vv^^v^<^><.v^^>^<^<vvv<>><<><>vv^vv^<.^<v^v>#",
"#>>^^^>.>>><^^<<v^v^v.>^.v<v<vv>vv>^<^^^<>>vv>v^<v^vv<^v^>^>v^>>v<>>>^v>vvv>v>^<<>v^>v><<^<v<<.>v>>><^<<>^<>>v<<v>.<.v<<>#",
"#>..<>v>^..v<v.<v<vv<><<v^>>v<^.>v^>vv^v<^v>v<vv^<<^.^^^.<^v.<vvv<<<^^^^<v<v.>.^.^>.<.^^><<^.^<>>^v>^vv<<>.^^^..v<<v<<v^.#",
"#>^..<v^^v^<<v<vv<^^^<>v><^><>>^<v><>vvv..^>v^v<v<.<^^<<v><<><v>vv><vvv.<><^.vv<^.v><><<^vv^v<<v^v>>^v>>>>vvv>^<<v<>^>>^>#",
"#<<>^><^v>v<v>^^>v<>>>.^^v.>v<>^^v^v>v^v^<^^<v<<.v<^^>^v<.>.^<><<^v>^..<>>><.>^<.<<>>^^v>>v^^<^>.^v<v>>>vvv>>>>vv<vvv.v<>#",
"#><<v<^v^^^>v>.<.>>>^^^>>..>v^^>>^<^<><.^>>^>.v><^^^>>^vv>^v^v.>v<.^^>><<.<..><>^<v>v<^<^v<^^v<.>vv^^^^<v>>v^<v<<<^vv<.^.#",
"#<<^><><^v.<v>.^><v<v^^>^>>vvv><<^^<><>.vv^^><v.>vv>^^v>^v>>^<^>..<<^<v<^.v^^<<>><<.<^>^>^<vv><<>^>vvv>^>^^>>>.>vv^<<^<>.#",
"#<..>^>vv<<^^v>^<vv<v^v<^^<v^^^v^v<^>.^.^^>>>.^<^v^^v><v^^v^^vv^<<<.....>v^<<vv>>.>><v<v>>v..v<^><>vvv<vv<^v<<>>.^^v<v^<<#",
"#>v>><^v.<v<v>^^>^vv>vvvv<>v><>v.^<>><>^><.<^><.>.<<^^v^^.>v>v^><><vv^><.<>><<v^v.<^^>v>.<>vv.v<^v^v^<^<>>v<><<v.^<.<<^v<#",
"#<<>^vvv.^<v<.vv<^.v><v<<^vv<<vv<v^v>v<vv^^<>><^v^>^^^^>v.>>.^vv.<v<>^^^><^^>>^<..<.>>^^^<<^^^v^^<v<^.vv<^v>><<^.<<>>><.<#",
"#..v>.>>v<^vv><vv<v>^<.>>^^>v^><<^>v<^v^..^v>^>.^vvv<v><<.<.<>v>^^<<<v^^^vvvv^.>v>^^>^>>^><<v<>^>.v.^<v<>.^^>><.v^v<.vv^<#",
"#>^<vv<>v<v^<.>>>v<><vv>^^<v<^v><<v^v^v>^^<>.vv>v.^^<v^v<v><v<v^vv>.<>v<<<>>><<v<<.v>v^<..^v^^<v^v.>vv.^^<>>v^<.<^>v^<^.<#",
"#<>>>vv.>^>.v>v<v<v><>^>v^v<>^.>>v>^^>vv>><>v.^.>^>>>^<><v^>vv<.>vvv<>^v><v>>><vvv.<v^<>>.vv^v>>>>>v<^>.v<.<<.vv>><.^<<.<#",
"#<^v^>>>><><v<<.^<<^><.^<^^^<.^.v><>^vv<^<><.><^<v<v<v<<<^<v^>>v<<<.<v>.>^.<><.^^<>v>>^vv<^^<>v<v<v<^<^>v.^<v><<<>>^>v^<<#",
"#<<><.vv^v<v>v^^<.<^<<<<<<v.v^..><v^^^^^v^<>v^<<^>v<^v^.<.<>^<v^^v<<.><>v>v.v>vv>.><v>^v>.<>>v^<.>v<vvvvvvv<><^^v>>^^<>>>#",
"#><>v>>v.^<<<<v>>v.<<^^..^<^.v.v^<>v<^^>.^^<.^>^<.vvv.^vv^.>.>^<>v^v<<><^.v>v^^v<v>^v>>.^vv<v^^>><<<^<>v<<v<<^>><v.<v<>^>#",
"#>><>vvv^>v<>v<v>^.<<>^^<^>>v^.<^>>.<<v<<^<^><^<>>^.vvv>v><<>><>vv.^<v>v><^>.^^^.v>>^^^vv^<^><^>>>.<^v^<vv>>^>>^>v>><.<v>#",
"#>><<^v<>>>>^<><.<>vvv.<^>v<>.<.<<^>v>v<v^^vv^^>>v<^>^v^<^.>v><vv^^^.^v^>^><<<v^.>^<^>v<^v<>><<vv<^v><.<>^^v.^^.^>^.v<<>>#",
"#.<<^><v>>>v^>.^v><v^>>vv>^<<v<v.>^^.<v<.<<<v<>><^<v^<v^>^vvv>^<<>>v<<.v^><<vv^<v>v<<^v>vv<<.v^<<^v^<<v<<<>><^^vvvv<v>vv<#",
"#><>>>^>^^><v^^^<>><>^<.<^^<>^^.>.<>.>v>vv>..><>>^<v>>vv>.v>.v^^<<^v<><^^^vv.^<>.^>v>v>v<<^<v><v.<^v<.^.<><<><>.v^^v^v^.>#",
"#<<.^.v^><<^vv^v^.^>.<v<v.v^<v^v><.v.^vv^.>.<>>><<>^>v^>.<^>>>v<>^<>^^>..<.^>v^>^v.<<>^v^<>>>v>>v^>^.^<.vv><>^v^v><^^<^<>#",
"#>v^><v>v<v^^>><vv^^v..>><><.<^vvv>^<>^<>v^..^v.>>v>vvv><v>>v>vv>^^v<<^<^^^>>v<^><v.v<^v^<^.>>v>^v<>^>vv^<.<.<^v<<<><^.^>#",
"########################################################################################################################.#"
];

const rawDataExample = [
"#E######",
"#>>.<^<#",
"#.<..<<#",
"#>v.><>#",
"#<^v^^>#",
"######.#"
];

//const rawData = rawDataExample;
const rawData = rawDataOfficial;

const gData = {}
const X_LENGTH = rawData[0].length-2;
const Y_LENGTH = rawData.length-2;
const X_ENTRANCE = 0;
const Y_ENTRANCE = -1;
const X_EXIT = X_LENGTH-1;
const Y_EXIT = Y_LENGTH;

const FROM_DOWN = "v";
const FROM_LEFT = "<";
const FROM_UP = "^"; // Warning : this serves to symbolize a reversed path !
const FROM_RIGHT = ">";
const FROM_HERE = "O";
const NOT_YET = ".";
const MAXIMAL_WASTING = 25;
const NOT_FOUND = -1;

function init() {
	var x, y;
	gData.land = [];
	for (y = 0; y < Y_LENGTH ; y++) {
		gData.land.push([]);
		for (x = 0; x < X_LENGTH ; x++) {
			gData.land[y].push({bannedHorizontal : [], bannedVertical : []});
		}
	}
	
	var count;
	var xx, yy;
	for (y = 0; y < Y_LENGTH ; y++) {
		for (x = 0; x < X_LENGTH ; x++) {
			xx = x;
			yy = y;
			switch (rawData[y+1][x+1]) {
				case ">" :
					for (count = 0 ; count < X_LENGTH ; count++) {
						shiftIntoListUniqueNumbers(gData.land[yy][xx].bannedHorizontal,count);
						xx++;
						if (xx == X_LENGTH) {
							xx = 0;
						}
					}
				break;
				case "<" :
					for (count = 0 ; count < X_LENGTH ; count++) {
						shiftIntoListUniqueNumbers(gData.land[yy][xx].bannedHorizontal, count);
						xx--;
						if (xx == -1) {
							xx = X_LENGTH-1;
						}
					}
				break;
				case "v" :
					for (count = 0 ; count < Y_LENGTH ; count++) {
						shiftIntoListUniqueNumbers(gData.land[yy][xx].bannedVertical, count);
						yy++;
						if (yy == Y_LENGTH) {
							yy = 0;
						}
					}
				break;
				case "^" :
					for (count = 0 ; count < Y_LENGTH ; count++) {
						shiftIntoListUniqueNumbers(gData.land[yy][xx].bannedVertical, count);
						yy--;
						if (yy == -1) {
							yy = Y_LENGTH-1;
						}
					}
				break;
			}
		}
	}
	// Initialize "wasted time"
	gData.reachInTime = [];
	gData.reachInTimeNext = [];
	gData.reachInTimeNextNext = [];
	for (y = 0 ; y < Y_LENGTH ; y++) {
		gData.reachInTime.push([]);
		gData.reachInTimeNext.push([]);
		gData.reachInTimeNextNext.push([]);
		for (x = 0 ; x < X_LENGTH ; x++) {
			gData.reachInTime[y].push(NOT_YET);
			gData.reachInTimeNext[y].push(NOT_YET);
			gData.reachInTimeNextNext[y].push(NOT_YET);
		}
	}
	
	gData.timeFirstIn00 = 1;
}

function conclusion_24_1() {
	init();
	return findTheWay();
}

function findTheWay() {
	gData.timeFirstIn00 = 1;
	while (!canGo(0, 0, gData.timeFirstIn00)) {
		gData.timeFirstIn00++;
	}
	// WARNING ! Actually there is a risk that you need to wait longer in the 0,-1 alcove than the 1st possibility to move out !
	// Did not hurt us actually : correct answer = 54.
	var x, y;
	gData.reachInTime[0][0] = FROM_UP;
	var wastedTime = 0;
	var foundInWastedTime = NOT_FOUND;
	while (wastedTime < 500) {		
		for (y = 0 ; y < Y_LENGTH && foundInWastedTime == NOT_FOUND ; y++) {
			for (x = 0 ; x < X_LENGTH && foundInWastedTime == NOT_FOUND; x++) {
				if (gData.reachInTime[y][x] != NOT_YET) {
					foundInWastedTime = explore(x, y, wastedTime, gData.reachInTime[y][x], true);
				}
			}
		}
		if (foundInWastedTime != NOT_FOUND) {
			break;
		}
		//console.log("Wasted time = " + wastedTime);
		//logArrayCharsWithAlign(gData.reachInTime); // WARNING ! Actually there is a risk that you need to wait longer in the 0,-1 alcove than the 1st possibility to move out !
		for (y = 0 ; y < Y_LENGTH ; y++) {
			for (x = 0 ; x < X_LENGTH ; x++) {
				gData.reachInTime[y][x] = gData.reachInTimeNext[y][x];
				gData.reachInTimeNext[y][x] = gData.reachInTimeNextNext[y][x];
				gData.reachInTimeNextNext[y][x] = NOT_YET;
			}
		}
		wastedTime++; // If found in wasted time, we should not be here !
	}
	if (foundInWastedTime != NOT_FOUND) {		
		return gData.timeFirstIn00 + (foundInWastedTime + Y_LENGTH - 1 + X_LENGTH - 1) + 1;
	}
	return NOT_FOUND;
}

function canGo(p_x, p_y, p_step) {
	return (findInSortedArray(gData.land[p_y][p_x].bannedHorizontal, p_step % X_LENGTH) == INDEX_NOT_FOUND) && 
		   (findInSortedArray(gData.land[p_y][p_x].bannedVertical, p_step % Y_LENGTH) == INDEX_NOT_FOUND);
}

// p_from : we are seeing what's next
// If we are in a new time : we assume we are here legally and time has been just increased.
function explore(p_x, p_y, p_wastedTime, p_from, p_newTime) {
	if (p_y == -1) {
		return explore(0, 0, p_wastedTime, FROM_UP, false);
	}
	if (!p_newTime) {
		if (gData.reachInTime[p_y][p_x] != NOT_YET || !canGo(p_x, p_y, actualTime(p_wastedTime, p_x, p_y))) {
			return NOT_FOUND;
		}
		gData.reachInTime[p_y][p_x] = p_from;		
		// We can only be on the final space by coming from up or from left
		if (p_y == Y_LENGTH-1 && p_x == X_LENGTH-1) {
			return p_wastedTime;
		}
	}
	var ex;
	if (p_x < X_LENGTH-1) {
		ex = explore(p_x+1, p_y, p_wastedTime, FROM_LEFT, false);		
		if (ex != NOT_FOUND) {
			return ex;
		}
	}
	if (p_y < Y_LENGTH-1) {
		ex = explore(p_x, p_y+1, p_wastedTime, FROM_UP, false);		
		if (ex != NOT_FOUND) {
			return ex;
		}
	}
	if (p_x > 0) {
		exploreNextNext(p_x-1, p_y, p_wastedTime+2, FROM_RIGHT);
	}
	if (p_y > 0) {
		exploreNextNext(p_x, p_y-1, p_wastedTime+2, FROM_DOWN);
	}
	exploreNext(p_x, p_y, p_wastedTime+1, FROM_HERE); 
	return NOT_FOUND;
}

function exploreNext(p_x, p_y, p_newVastedTime, p_from) {
	if (!canGo(p_x, p_y, actualTime(p_newVastedTime, p_x, p_y))) {
		return;
	}
	gData.reachInTimeNext[p_y][p_x] = p_from;
}

function exploreNextNext(p_x, p_y, p_newVastedTime, p_from) {
	if (!canGo(p_x, p_y, actualTime(p_newVastedTime, p_x, p_y))) {
		return;
	}
	gData.reachInTimeNextNext[p_y][p_x] = p_from;
}

function actualTime(p_wastedTime, p_x, p_y) {
	return gData.timeFirstIn00 + p_wastedTime + p_x + p_y;
}

// ----

// The 2nd part is way better than the 1st

function conclusion_24_2_1() {
	init();
	return tripDown(0);
}

function conclusion_24_2() {
	init();
	var answer = tripDown(0);
	console.log("1st trip : " + answer); 
	answer++;
	cleanMap();
	answer = tripUp(answer);
	console.log("2nd trip : " + answer);
	answer++;
	cleanMap();
	return tripDown(answer);
} /* Correct answer = 896 ??? I don't get why we need to wait an extra step (adding both answer++) but we need to.
	 Okay, I think I got it. The first number in tripUp or tripDown should actually be the first step in which we can be in position (0,0) and (xMax, yMax). 
	(0,0) already had a blizzard in step 0. So we were stuck to (0, -1) anyway.
	(xMax, yMax) had no blizzard in step 314 but whether we were in this step in step 314 or 315 (as we should have been since 314 was (xMax, yMax+1)) the faster we could reach (0, -1) was 574.
	And for the 3rd trip, there were no blizzard in 0,0 in 574 (yet we were in (0, -1). And the consequences are as such : if we are in 0,0 in 574 we can reach the goal in 844. But if we are in -1, 0 in 574 (0,0 occupied by blizzard in 575, by the way, but not in 576), we cannot reach the goal in 844 anymore, it's 896 or nothing.
	The simple example didn't have such problematic situation, and assuming we were in (0, 0) or (0,-1) right after the end led to reaching the destination at the same time.

	Next mystery : why should the 0,-1 exploration be first in both the up and down trips ?
	*/

function tripDown(p_firstStep) {
	gData.timeFirstIn00 = 0;
	var extraTime = p_firstStep;
	var x, y;
	var foundAfter;
	while (extraTime < 500 + p_firstStep) {
		foundAfter = explore(0, -1, extraTime, FROM_HERE, true);
		for (y = 0 ; y < Y_LENGTH && foundAfter == NOT_FOUND ; y++) {
			for (x = 0 ; x < X_LENGTH && foundAfter == NOT_FOUND; x++) {
				if (gData.reachInTime[y][x] != NOT_YET) {
					foundAfter = explore(x, y, extraTime, gData.reachInTime[y][x], true);
				}
			}
		}
		if (foundAfter != NOT_FOUND) {
			break;
		}
		for (y = 0 ; y < Y_LENGTH ; y++) {
			for (x = 0 ; x < X_LENGTH ; x++) {
				gData.reachInTime[y][x] = gData.reachInTimeNext[y][x];
				gData.reachInTimeNext[y][x] = gData.reachInTimeNextNext[y][x];
				gData.reachInTimeNextNext[y][x] = NOT_YET;
			}
		}
		extraTime++; // If found in wasted time, we should not be here !
	}
	if (foundAfter != NOT_FOUND) {		
		return (foundAfter + Y_LENGTH - 1 + X_LENGTH - 1) + 1; // I thought there were an extra +1 for the beginning and the parenthesed expression should be the time for ... but apparently no ! Well, anyway I've got the correct answer !
	}
}

function cleanMap() {
	for (y = 0 ; y < Y_LENGTH ; y++) {
		for (x = 0 ; x < X_LENGTH ; x++) {
			gData.reachInTime[y][x] = NOT_YET;
			gData.reachInTimeNext[y][x] = NOT_YET;
			gData.reachInTimeNextNext[y][x] = NOT_YET;
		}
	}
}

function tripUp(p_firstStep) {
	var extraTime = p_firstStep;
	var x, y;
	var foundAfter;
	while (extraTime < 500 + p_firstStep) {
		foundAfter = explore2(X_LENGTH-1, Y_LENGTH, extraTime, FROM_HERE, true); 
		for (y = Y_LENGTH-1 ; y >= 0 && foundAfter == NOT_FOUND ; y--) {
			for (x = X_LENGTH-1 ; x >= 0 && foundAfter == NOT_FOUND; x--) {
				if (gData.reachInTime[y][x] != NOT_YET) {
					foundAfter = explore2(x, y, extraTime, gData.reachInTime[y][x], true);
				}
			}
		}
		if (foundAfter != NOT_FOUND) {
			break;
		}
		for (y = 0 ; y < Y_LENGTH ; y++) {
			for (x = 0 ; x < X_LENGTH ; x++) {
				gData.reachInTime[y][x] = gData.reachInTimeNext[y][x];
				gData.reachInTimeNext[y][x] = gData.reachInTimeNextNext[y][x];
				gData.reachInTimeNextNext[y][x] = NOT_YET;
			}
		}
		extraTime++; // If found in wasted time, we should not be here !
	}
	if (foundAfter != NOT_FOUND) {		
		return (foundAfter + Y_LENGTH - 1 + X_LENGTH - 1) + 1; // I thought there were an extra +1 for the beginning and the parenthesed expression should be the time for ... but apparently no ! Well, anyway I've got the correct answer !
	}
}

function explore2(p_x, p_y, p_wastedTime, p_from, p_newTime) {
	if (p_y == Y_LENGTH) {
		return explore2(X_LENGTH-1, Y_LENGTH-1, p_wastedTime, FROM_DOWN, false);
	}
	if (!p_newTime) {
		if (gData.reachInTime[p_y][p_x] != NOT_YET || !canGo(p_x, p_y, actualTime2(p_wastedTime, p_x, p_y))) {
			return NOT_FOUND;
		}
		gData.reachInTime[p_y][p_x] = p_from;		
		if (p_y == 0 && p_x == 0) {
			return p_wastedTime;
		}
	}
	var ex;
	if (p_x > 0) {
		ex = explore2(p_x-1, p_y, p_wastedTime, FROM_RIGHT, false);		
		if (ex != NOT_FOUND) {
			return ex;
		}
	}
	if (p_y > 0) {
		ex = explore2(p_x, p_y-1, p_wastedTime, FROM_DOWN, false);		
		if (ex != NOT_FOUND) {
			return ex;
		}
	}
	if (p_x < X_LENGTH-1) {
		exploreNextNext2(p_x+1, p_y, p_wastedTime+2, FROM_LEFT);
	}
	if (p_y < Y_LENGTH-1) {
		exploreNextNext2(p_x, p_y+1, p_wastedTime+2, FROM_UP);
	}
	exploreNext2(p_x, p_y, p_wastedTime+1, FROM_HERE); 
	return NOT_FOUND;
}

function exploreNext2(p_x, p_y, p_newVastedTime, p_from) {
	if (!canGo(p_x, p_y, actualTime2(p_newVastedTime, p_x, p_y))) {
		return;
	}
	gData.reachInTimeNext[p_y][p_x] = p_from;
}

function exploreNextNext2(p_x, p_y, p_newVastedTime, p_from) {
	if (!canGo(p_x, p_y, actualTime2(p_newVastedTime, p_x, p_y))) {
		return;
	}
	gData.reachInTimeNextNext[p_y][p_x] = p_from;
}

function actualTime2(p_wastedTime, p_x, p_y) {
	return p_wastedTime + X_LENGTH - 1 - p_x + Y_LENGTH - 1 - p_y;
}