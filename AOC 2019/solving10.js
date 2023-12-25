var rawDataOfficial=String.raw
`#..#.#.###.#...##.##....
.#.#####.#.#.##.....##.#
##..#.###..###..#####..#
####.#.#..#....#..##.##.
.#######.#####...#.###..
.##...#.#.###..###.#.#.#
.######.....#.###..#....
.##..##.#..#####...###.#
#######.#..#####..#.#.#.
.###.###...##.##....##.#
##.###.##.#.#..####.....
#.#..##..#..#.#..#####.#
#####.##.#.#.#.#.#.#..##
#...##.##.###.##.#.###..
####.##.#.#.####.#####.#
.#..##...##..##..#.#.##.
###...####.###.#.###.#.#
..####.#####..#####.#.##
..###..###..#..##...#.#.
##.####...##....####.##.
####..#..##.#.#....#..#.
.#..........#..#.#.####.
###..###.###.#.#.#....##
########.#######.#.##.##`.split("\n");

var rawDataExample=String.raw
`#.#...#.#.
.###....#.
.#....#...
##.#.#.#.#
....#.#.#.
.##..###.#
..#...##..
..##....##
......#...
.####.###.`.split("\n"); // Answer 33

var rawDataExample2=String.raw
`.#..#
.....
#####
....#
...##`.split("\n");

var rawData = rawDataOfficial;

function hasAster(p_x, p_y) {
	return rawData[p_y].charAt(p_x) == '#';
}

var gCounts, gXL, gYL;

function conclusion_10_1() {
	gXL = rawData[0].length;
	gYL = rawData.length;
	var x, y;
	gCounts = generateDoubleEntryArray(gXL, gYL, 0) ;
	for (y = 0 ; y < gYL ; y++) {
		for (x = 0 ; x < gXL ; x++) {
			if (hasAster(x, y)) {
				countAstersAfter(x, y);
			}
		}
	}
	
	var best = {x : -1, y : -1, answer : 0};
	for (y = 0 ; y < gYL ; y++) {
		for (x = 0 ; x < gXL ; x++) {
			if (gCounts[y][x] > best.answer) {
				best = {x : x, y : y, answer : gCounts[y][x]}; // In P1, it used to be "answer"
			}
		}
	}
	return best;
}

// Count all asteroids seen in the same line right + in lines below + make it reciprocal
function countAstersAfter(p_x, p_y) {
	var x, y;
	y = p_y;
	for (x = p_x+1 ; x < gXL ; x++) {
		if (hasAster(x, y)) {
			gCounts[p_y][p_x]++;
			gCounts[y][x]++;
			break;
		}
	}
	var dx, dy, xx, yy, g, rdx, rdy;
	for (y = p_y+1 ; y < gYL ; y++) {
		for (x = 0 ; x < gXL ; x++) {
			if (hasAster(x, y)) {
				if (x == p_x) {
					for (yy = y-1 ; yy > p_y ; yy--) {
						if (hasAster(p_x, yy)) {
							break;
						}
					}
					if (yy == p_y) {
						gCounts[y][x]++;
						gCounts[p_y][p_x]++;
					}
				} else { // Another x
					dx = Math.abs(x-p_x);
					dy = Math.abs(y-p_y);
					g = gcd(dx, dy);
					rdx = dx/g * (x > p_x ? 1 : -1);
					rdy = dy/g;
					xx = p_x+rdx;
					yy = p_y+rdy;
					while (xx != x) {
						if (hasAster(xx, yy)) {
							break;
						}
						xx += rdx;
						yy += rdy;						
					}
					if (xx == x) {
						gCounts[y][x]++;
						gCounts[p_y][p_x]++;
					}
				}
			}
		}
	}	
}

// -------------

function conclusion_10_2() {
	var mySpot = conclusion_10_1();
	// List of all asteroids relative to spot found in part 1;
	var listAsters = [[],[],[],[]]; // First, in N + NE, then in E + ES, then in S+SW, then in W + WN. 
	// Then in each quadrant stack the ones together.
	var xS = mySpot.x;
	var yS = mySpot.y;
	var dx, dy;
	var iQuad;
	// Sort all by quadrant
	for (var y = 0 ; y < gYL ; y++) {
		for (var x = 0 ; x < gXL ; x++) {
			if ((x != xS || y != yS) && hasAster(x, y)) {
				dx = x-xS;
				dy = y-yS;
				if (dx == 0) {iQuad = (dy > 0 ? 2 : 0);}
				else if (dy == 0) {iQuad = (dx > 0 ? 1 : 3);}
				else if (dy > 0) {iQuad = (dx > 0 ? 1 : 2);}
				else {iQuad = (dx > 0 ? 0 : 3);}
				listAsters[iQuad].push([dx, dy]);
			}
		}
	}
	listAsters[0] = reorderAsters(listAsters[0], function(coors){return [-coors[1], coors[0]]});
	listAsters[1] = reorderAsters(listAsters[1], function(coors){return coors});
	listAsters[2] = reorderAsters(listAsters[2], function(coors){return [coors[1], -coors[0]]});
	listAsters[3] = reorderAsters(listAsters[3], function(coors){return [-coors[0], -coors[1]]});
	// Aggregate the quadrants ; put together aligned asters
	var overallList = [];
	var previousAster, newAster;
	for (var i = 0 ; i <= 3 ; i++) {		
		previousAster = listAsters[i][0];
		overallList.push([previousAster.slice()]);
		for (var j = 1 ; j < listAsters[i].length ; j++) {
			newAster = listAsters[i][j];
			if (areAligned(listAsters[i][j], previousAster)) {
				overallList[overallList.length-1].push(newAster.slice());
			} else {
				overallList.push([newAster.slice()]);
			}
			previousAster = listAsters[i][j];
		}		
	}
	// Now, CHARGE !
	var target = null;
	var iLine = 0;
	var shot = 0;
	while (target == null) {
		if (iLine == overallList.length) {
			iLine = 0;
		}
		while (overallList[iLine].length == 0) {
			iLine++;
		}
		shot++;
		if (shot == 200) {
			target = overallList[iLine].shift();
		} else {
			overallList[iLine].shift();
		}
		iLine++;
	}
	return (xS+target[0])*100+(yS+target[1]);
}


function reorderAsters(p_list, p_functionRotation) {
	var rotatedList = [];
	for (var i = 0 ; i < p_list.length ; i++) {
		rotatedList.push(p_functionRotation(p_list[i]));
	}
	// in rotatedList, all asters are supposed to be east or SE.
	var numeric = generateNumericArray(0, p_list.length-1);
	numeric.sort(function(i1, i2) {
		var a1 = rotatedList[i1];
		var a2 = rotatedList[i2];
		if (a1[1] == 0) {
			if (a2[1] == 0) {
				return a1[0]-a2[0]; // East : rank coordinates x in ascending order
			} else {
				return -1; // a1 must be before a2 : yeah, negative...
			}
		} else if (a2[1] == 0) {
			return 1;
		} else {
			//var q1 = a1[1]/a1[0]; Ratios of y/x. The larger : the larger overall. So q1 < q2 => i1 is before i2
			//var q2 = a2[1]/a2[0]; Not reliable because float...
			var c = a1[1]*a2[0]-a1[0]*a2[1];
			if (c > 0) {
				return 1;
			} else if (c < 0) {
				return -1;
			} else {
				return a1[1]-a2[1];
			}
		}
	});
	var newList = [];
	var iN;
	for (var i = 0 ; i < rotatedList.length ; i++) {
		iN = numeric[i];
		newList.push([p_list[iN][0], p_list[iN][1]]);
	}
	return newList;
}

// Tests if two asters FROM THE SAME QUADRANT are aligned with the center or not.
function areAligned(p_aster1, p_aster2) {
	return (p_aster1[0] == p_aster2[0] && p_aster2[0] == 0) || (p_aster1[1] == p_aster2[1] && p_aster2[1] == 0) || (p_aster1[0]*p_aster2[1] == p_aster1[1]*p_aster2[0]);
}

