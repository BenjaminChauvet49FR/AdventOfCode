const rawDataOfficial = [
"...................................................................................................................................",
".#.###.......#.##...........................#...#....#.#.#.#...........#.......##....#.#.........#....#....#.........##.##.....#...",
".#.......#.......#.....#...............#..#.#.#....#......#..............###.....#...........#...#......##..............#......#.#.",
"................#....................#.......#...#......................#..................#...#.........#.......###...........##..",
"..#..###...........#.##....#..........#...........##..#.#............................#........#..#.#.#..#....#..#...#...##......##.",
"..........#.....##....#........#......#........#...#..#.............................#........#.#.....#....#..#.#....#...#......#.#.",
"....#..........##.....#...........#..........#....................#...........#.........#.....#.#...#..##.........#.......#........",
".......#.#..#.####....................#.#...#.....#.................#...........#....#...........#....##......#....................",
"..##......#.#..#.#...#..............#.........#....#................#........#.#...#.........#..................#........#.#..#....",
"....#.#.#.........#..#..............#.#......#................................#......#.....#....##.............##..#....#....#...#.",
"..#.................#.#.#.......#...#........#................#.#...............................#..#.#.......#.......#.......#.....",
".#...#.#.#....................#..#......#...#.#...........#....##.......#.......#...........#............#.#.##......#..#..........",
"..#.....##............#..#...#..........#..#...#.........#...#........#............##...#....#...........#..#......#.....#.##.#....",
"...............#.#..#.#.....#......##.#.......##..............##..........................#........#.....#.#....#.....#.....#......",
"...........#...#.#....#.....#........##..................#..#......#.##....#........#.#..#.#...............#.#.........#.....#.....",
"..............##.....#..#.......#.........#..............##........................................#..#...##....#.........#.#......",
".#.........#.#.......##......#...#...#...............##....##......####...#..................#............##.......#..#.##..#......",
"......#.......#............##.#....#......................#.............#...#.#.........##................#.#.............#...#.#..",
"........#.#........##............#...#...............#.#....##..............#...............#.................#.#..#.#.....#.#...#.",
"...#......#....#....#....#..#......#....................##..#............#..#...........#.......................#......##......#...",
".............##.....#..#.##............#.............##......#......#..#..#..#...............#.............#..#.......##...........",
"............##.#...#..........................................#............#.................##.......##....#.........#..#.#.......",
"...##.#.##..#......#.......##......#.#............#.#.....#............#.##...................#.............#..###..#.#....#....##.",
"......#......#................##....##.................#..#.#.#.#....#.......#...............#...............#..........#...##.....",
"....#.................#..........##..........##....#..#........#.........##.#.....................###......#..............#..#.....",
".###.............#.#........................................#.#.#..#...#.......................#.###...........###....#.......#..#.",
"..#...#..#........#...#.........#...........#....#....#.#...#.#....#...#.#...........................###.....#....#...#.....#......",
"..#.......##.....#.#...#.......#..........#.#.......#...#..#.#.........#.............#.............#.....##..##.........#..........",
"..........#......#..#.....#..............#..#...#.#.#...#.#...#...#...#..............................##..#...####.##...##..........",
".....#..............#..........##............#.#..#.......#.#...#...##.##....#.......##...#............#.#............#.....#....#.",
".#........#..............#..............#..###....#...#......#..........#.............#..............#...#...#.#........#..........",
"...............#.#....#...................#........##..#..##..............#.#..............................###....#.....#....#.....",
"......#.#.........#.......#...............#....#.#..#..###.#.........#..#...#......#..#..#...........#.......##......#..#......#...",
".#..................##..#...........#.##.....#....#....................#.....#........###..............#.....##.....##....#..#.....",
".#...#..#..............#.#.........#............#....#....##..........##..#.......#.####....##.#.....................#.............",
"......#............#....##...........#...........##........#...#...#.....................###.#...........#.............#........#..",
"...................##.............................#.#....#...#.....#..#......#............#.................#......#.....#.#.#.....",
"...........#..#........#..........##....#.........##..#........#...#.#..#...#.............#....#.............#.#..#...........#.##.",
"...#.........##......................#.#..........##...#.#..##......#...#...................#.#.#...............###............#.#.",
".....#..#......................#.#.................#..#.........#.#.........#...#...#..##...#.....#.#..................#...........",
".#..............................#......#..............####...........#...#.#........##.............................##....#.........",
"...................#.........#.....#......#.#.................#.#...#..#............#......#........##..............#.#.#..........",
".......#.#.#...............#.#..#..##..............#..#.#...##.........#.#......##.....................#.......#.............#.....",
"..#...#.#...#......................#....#...##..#.......##...#.........#......###...##...#...........................#.............",
"................#..............##............#.......#..........#.......#..........#..................#..............#...#.........",
"...#.#.........#....................#................#..........#....#...#..#.......##..#....#..##.........................##......",
".#..#....##.................#..........#...#.....#....#.......#.#..#......#...#.................#.......###..........#.....#..#.#..",
"....#....#............#....#.#...##.###..........#.......#...##.#...#...................##......#..#......#...............#........",
".........#...................#........#....#...#....##......#.....#.#..#.#......#..#.##....#.....#.....#.....#..................##.",
".....................#.....#...............###.................#......#...###.##.........#..#....#......#.............#....###..#..",
"......................#......#..#.......#...#...###..#........##..........#...#...........#.....##.........#.#.#...................",
"..#..................#............#.#..#....#.#...............#..............##.....#..#......#.#..##.......#..............##......",
"............................#.........#.....#.#..........#.............###.....#..##...#.#...#...#....#.....#...............#......",
"......#.....................#....#...#............#.....#..............##........#......#.#.......###.......#...#.........#..#.....",
".......#.........#.#..#........##.#....#...#...#...#.......#....#........#...###.##..#.......#......#......................#.......",
"...#............##.....#..#.......#......#...#...#.......#..#..#......#....#.....#.................#...#.......#.............#.....",
"..##.................#...#.#...............###..###.....#...#........#......#.........#.#..##.#...#....#....#.......#..............",
"....#...........##.................#..........................#.....#...............#.............#.......#........#...............",
"...........#.....#......#........#.......#.......#......#..............................#..#...#.....#..........................#...",
"..#............#.#.....##......#.#...###.#.....#.##....#.......................#........##............#.......#.#.#................",
"...........#...........#.......#......#.....#.##.#.........#............#......#...#..#.#.........###..#...#.#.#.......#...........",
".........##.....#..........#..........#.........#..........#...#..........#...............#...........#.#.......#..................",
".........#.....#.............#.............#.#.#...#.##.......#.#...#....#.#............#.........#.#...........##.....#...........",
"..........#.....................##....#.....#...#.#..#.#.............#..#.#......#..............##....#...............#............",
"..........#.#...#..#..............#....##.....#....#.#.......#..#.#.............#...........#.......#..........#......#..#...#.....",
".................................................................S.................................................................",
"..........###....................................#.......###........#........#....#.................###........#...................",
"......##......#...#....#.....#...#....#..#...#.....#...#..............#.......#.#.#.#...###.#......#..#..#....#.......#..#.........",
"..........#...#...........#.#.#.##.#...................#..........####.......#.###.#.......#.....#.###....#...#..#.##......#.......",
"...........#................#....#....#.......#.................#.......#...#............#...#..............#..##..................",
"..................#.............................##...#...##..#...........#.........#.#....#...........#.....#..........#.#.........",
"................#.......#.#...##.###.....#....#...#.........#.#...........#.#.......##.#...#....#.......#..#.##....#...#...........",
"..............##..#.#....#...#..............##.......#....................#....#....#.#.##....#.......#..#..#......#..#..........#.",
"....#..............##..#.#...##.....#............##.#...#..#..........#.#...###................#.......#..##..#....................",
"...............#..#.........................#...............#......#...#.................#..#.....#....#.#.##..#................#..",
"....#................#..#.........#....#..#....#..........#.#.....##............###........##..........#.....#.................#...",
"...#......................#.......#....#..............#.........#..........#...#....#...............##..#...................#..#...",
".#...#...................#....#........#...#......##....##..#...#............#...#.#.#......#.#..#......##.................#...#...",
"...#..................#......#...#.#......#......#..###..##.#.....#...#..##.................#.#.#.##.......##....#..........#......",
".........##..............#.................##...............#..#......#.#.......#..#....................#.....#....................",
".....#....#............#......##...#.......##.....#...............#....#..#...#.............#................#................#.##.",
"........................##.....#.....#....................#.......#...............#....#.#..#....#.....#......................###..",
".....#................#...#......#...#...............#..#...#.....#..............#..#.........#....#.....#..#............#......#..",
"........#..............#...........###.......................#.#...##.#..##........#....#.#....#......#...#..........#.............",
"......#.......#.............#..........#..........#.#.#.#...#.................#.......####.........................#....###.#......",
"....#...#...#.#..........#.......#.......#...#..##.#.###....###.......#...................................#..........#..#..#...#...",
".#.......#....###...............#.............#....#..##..........#...........#...#.....##....#..#.................................",
"..#............#.#.........#....##.#.........#....#....#...#.#.#..#......#...##......#..........##.#...#............#....#.##.##.#.",
"......#........#..............##.##......#..........##.##.....##......#..#........................#..#.........##..#........#......",
"..................................##.....#.....#.......#....#.....#..........................###.#.#...........##........#.#.......",
".#.......#........#...........#...........#.........#...........#...#.......#...#.#.......##.......................................",
".##.#.......#........#.........#...#............#...........#.......#.#........#..#....#.......#...............#..........#..#.....",
"......#....#.......#...........#......#.................#...........##.......#...#.........#.#.##..#........#....#.......#..#......",
".#........##.....##...............#......#....#..#..#..#.#...#....#............#.....#.............................#.........#.....",
"..#...#..........#................#.....#..#...#....................#.#..#............#.....#..##...........###..................#.",
"..........#..#..#........................#..#..#.........##.........#.......#......#.........#...............#...#......##.....#...",
"...#.....#...##........#....................................#..........#...#.......#..#....#.#..........#.#.#...#............#..#..",
".....#........#.....#....................#........#....#...........#....#...#................#....................#........##......",
".......#.#.#.......#.......##..........#...#..#..#......#...#.......##...##.....##.#.................#.........##...##.............",
".............#..#.....#.#....##........#.....#.......#....#............##...#..#........................#......#......#......#.....",
"...#.....#......#.......#.#.............#...............#.....##.........#..#.........#.............#..#...#...#..........#...#....",
"........#.......................#........#.#.......##..#.##...###..#..#....#.#.....##........................#...................#.",
"............#..#.#.#......#...........................#.............#.#.......#..#..................#..........#..............#....",
".#.....#..#..##..##............##.#........##..#..#...................#.......#...................#.......#.......##.#.............",
".#.#..#...#.#.........#.#..#......#.........#.#..............#.#....#..#.....#....#.#.....................##........#..#....#....#.",
"..#....#.#........#..........#...#..#.....................#...#........#.....###.....................#.#..#..#..#...#.#..#.........",
".#.......#..#....#...............#..#...............#......#................#................#......###....#.................#.....",
"....#.#..#...#..#....#..#..#...........................#..#...#.#.#................#..................#........#.......#.......#.#.",
"........#.........................#...#............#......#.#...........#.....#....#.......#.#.#...#....#.......#...#.....##.......",
"......#...#....#.......#.....##.#...............#................................#.........##.##......#.#.....#................#...",
"..#..#....#.#.#.......#......#.........#............#..........#............#..............#..#...#.#...##..#...#........#.#.#.....",
"..#.......#.....##......#........#....##..........................##...#.#.#.................................#.#.......#..##.......",
"....#..#...##............#....##...#......#.........................#......#.##.........##..........#..............##...#..........",
"...#...#...#........#..#......#...#.....#......................#.........#..#..........#.........##.........##.....................",
".......#.............#.......#.......#....#.#........#.....#.#..#.#....................#..........#.#.....#.#.......#..#...........",
".#............#..###..........#..............................#......##...................##............##...#.#......#...........#.",
"...#........................#..........##..#.......................#......#.........###...................#..#...................#.",
".#......................#..##.#....#...........#..........#.......................#...#..#.....##....#.##......#...................",
".#.........#.....#...#......##..#...#....#..#......................#.................#.#.............#.....#.....##......#.........",
"....#.........#........#.#.....#....#...#....#....................#.....#.......#........#.....#.....#.#..........#.......#......#.",
"...#..#........#......##.......................#.............#......##.........#.....#...#.#...#.#...........#.......##........#...",
".......#.........##.....#.#.............#...#......#........#..#......#.........#............#.#.......#.#............#..##.#......",
"........#..#......#.#..#...#.....#..............................................##..#..#.....##..#......#..#.#...#.........#....#..",
".#.#...#.....#.#................##..#.........#.#.##..#..........................#..#..........#.....##.###.#.........#....#.......",
"........#.#..............#......#....#..........#.....##....................#....#..........#.............#..#....#..........#.....",
".......#...................##...#.#...#...#.#...###.##.##.........#............#.#.#..................#...#.#..##......#...#.......",
"....#.....#....###.....###........#......#.....#.....#..............................#..#........#....##........#...#..........#....",
"..###.#..#........#.....#...#.#.#.#....##.....#.#.........................#.##..#...#.....................##.....#........#.....##.",
"..#.#.#.##...#.#....#.##...#.......#.#......#.##.........#.............#.#.....#...........#.....##..........#........#....#.......",
"......##................#.#.......#............#..#......##.#.......................#........#.#.#...#.....#.........#...#.#.......",
"..................................................................................................................................."
];

const rawDataExample = [
"...........",
".....###.#.",
".###.##..#.",
"..#.#...#..",
"....#.#....",
".##..S####.",
".##..#...#.",
".......##..",
".##.#.####.",
".##..##.##.",
"..........."
];

var rawData = rawDataExample

var gData, gXL, gYL, gXS, gYS;
function init() {
	var x, y;
	gXL = rawData[0].length;
	gYL = rawData.length;
	gXS = -1;

	gData = ([generateDoubleEntryArray(gXL, gYL, false), generateDoubleEntryArray(gXL, gYL, false)]);
	for (y = 0 ; y < gYL ; y++) {
		for (x = 0 ; x < gXL ; x++) {
			if (rawData[y].charAt(x) == "S") {
				gXS = x;
				gYS = y;
				break;
			}
		}
		if (gXS != -1) {
			break;
		}
	}
}

function isReachable(p_x, p_y) {
	return rawData[p_y].charAt(p_x) == ".";
}

function conclusion_21_1() {
	// Given the problem, we don't need to erase the previous destinations on even/odd steps
	// As a bonus, we don't need to control boundaries (data), for part 1 at least
	// And... well, we can almost directly jump to part 2 
	init();
	/*var x, y;
	const parity = (gXL+gYL)%2;
	var answer = 0;
	for (y = 0 ; y < gYL ; y++) {
		for (x = 0 ; x < gXL ; x++) {
			if ( ((x+y)%2 == parity) && (Math.abs(x-gXS) + Math.abs(y-gYS) <= 64) && isReachable(x, y) ) {
				answer++;
			}
		}
	}
	return answer;*/
	// No just kidding !
	iOld = 0;
	iNew = 1;
	gData[iOld][gYS][gXS] = true;
	newPositions = [{x : gXS, y : gYS}];
	for (var i = 0 ; i < 64 ; i++) {
		newPositions = performSteps(newPositions, iOld, iNew);
		iOld = 1-iOld;
		iNew = 1-iNew;
	}
	var x, y;
	var answer = 0;
	for (y = 0 ; y < gYL ; y++) {
		for (x = 0 ; x < gXL ; x++) {
			if (gData[iOld][y][x]) {
				answer++;
			}
		}
	}
	return answer;
}

function performSteps(p_oldNewPositions, p_iOld, p_iNew) {
	var newPositions = [];
	var coors2, x, y;
	p_oldNewPositions.forEach(coors => {
		coorsL = existingNeighborsCoors(coors.x, coors.y, gXL, gYL);
		coorsL.forEach(coors2 => {			
			x = coors2.x;
			y = coors2.y;
			if (isReachable(x, y) && !gData[p_iNew][y][x]) {
				gData[p_iNew][y][x] = true;
				newPositions.push({x : x, y : y});
			}
		});
	});
	return newPositions;
}

// Data analysis : if the pattern repeats, we need to find a periodic answer ! 
var gTIMES = 19; // Must be odd : number of times map is replicated in each dir.
var gNSTEPS = 26501365;
var gRemain; // Even numbers, please ! Well, it works but...
var gRepeat;
rawData = rawDataOfficial;
function conclusion_21_2() {
	initP2();
	gRemain = gNSTEPS%(gOXL*2);
	gRepeat = (gNSTEPS-gRemain)/(gOXL*2);
//	return conclusion_21_2_aux(gNSTEPS); // BIG ERROR : considered S unreachable !
/*	var s1 = (conclusion_21_2_aux(gRemain));
	var s2 = (conclusion_21_2_aux(gRemain+gOXL*2));	
	var s3 = (conclusion_21_2_aux(gRemain+gOXL*4));	
	var s4 = (conclusion_21_2_aux(gRemain+gOXL*6));	
	var s5 = (conclusion_21_2_aux(gRemain+gOXL*8));	
	console.log(gRemain + " " + (gRemain+gOXL*2) + " " + (gRemain+gOXL*4) + " " + (gRemain+gOXL*6) + " " + (gRemain+gOXL*8));
	console.log(s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5);
	var d1 = s2-s1;
	var d2 = s3-s2;
	var d3 = s4-s3;
	var d4 = s5-s4;
	console.log(d1 + " " + d2 + " " + d3 + " " + d4);*/
	// d2-d1 = d3-d2 = d4-d3 = 117568. Hence the solution :
	// s2 = s1+d1
	// s3 = s2+d2 = s1 + 2*d1 + r
	// s4 = s3+d3 = s1 + 3*d1 
	var s0 = conclusion_21_2_aux(gRemain);
	var s1 = conclusion_21_2_aux(gRemain+gOXL*2);
	var s2 = conclusion_21_2_aux(gRemain+gOXL*4);
	var d0 = s1-s0;
	var d1 = s2-s1;
	var r = d1-d0; // and r is constant !!!
	// s2 = s1+d1 = s1 + d0 + r = s0 + 2d0 + 2r
	// s3 = s2+d2 = s2 + d0 + 2r = s0 + 3d0 + 3r
	// s4 = s3+d3 = s3 + d0 + 3r = s0 + 4d0 + 6r...
	// We are looking for s101150
	// we know it's between 601441053860738 and 601441068830929 
	//return s0 + d0*101149 + (101149*101150)/2*r; //601441063078082 : incorrect !
	return s0 + d0*101150 + (101149*101150)/2*r; // 601441063166538
}

var gOYL, gOXL;
function initP2() {
	var x, y;
	gXL = rawData[0].length*gTIMES;
	gYL = rawData.length*gTIMES;
	gOXL = rawData[0].length;
	gOYL = rawData.length;
	gXS = -1;

	gData = ([generateDoubleEntryArray(gXL, gYL, false), generateDoubleEntryArray(gXL, gYL, false)]);
	for (y = 0 ; y < gOYL ; y++) {
		for (x = 0 ; x < gOXL ; x++) {
			if (rawData[y].charAt(x) == "S") {
				gXS = x;
				gYS = y;
				break;
			}
		}
		if (gXS != -1) {
			break;
		}
	}
	gXS += (gTIMES-1)/2*gOXL;
	gYS += (gTIMES-1)/2*gOYL;
}

function isReachableP2(p_x, p_y) {
	return rawData[p_y%gOYL].charAt(p_x%gOXL) != "#";
}

function conclusion_21_2_aux(p_nbSteps) {
	initP2();
	var iOld = 0;
	var iNew = 1;
	gData[iOld][gYS][gXS] = true;
	var newPositions = [{x : gXS, y : gYS}];
	for (var i = 0 ; i < p_nbSteps ; i++) {
		newPositions = performStepsP2(newPositions, iOld, iNew);
		iOld = 1-iOld;
		iNew = 1-iNew;
	}
	var x, y;
	var answer = 0;
	for (y = 0 ; y < gYL ; y++) {
		for (x = 0 ; x < gXL ; x++) {
			if (gData[iOld][y][x]) {
				answer++;
			}
		}
	}
	return answer;
}

function performStepsP2(p_oldNewPositions, p_iOld, p_iNew) {
	var newPositions = [];
	var coors2, x, y;
	var alert_ = false;
	p_oldNewPositions.forEach(coors => {
		if (alert_) {
			return;
		}
		coorsL = existingNeighborsCoors(coors.x, coors.y, gXL, gYL);
		if (coorsL.length < 4) {
			console.log("Emergency alert !");
			alert_ = true;
			return;
		}
		coorsL.forEach(coors2 => {			
			x = coors2.x;
			y = coors2.y;
			if (isReachableP2(x, y) && !gData[p_iNew][y][x]) {
				gData[p_iNew][y][x] = true;
				newPositions.push({x : x, y : y});
			}
		});
	});
	return newPositions;
}


/*
The field :
B/A\B/A\B/A\
XAAAXAAAXAAA
B\A/B\A/B\A/
BBXBBBXBBBXB
B/A\B/A\B/A\
XAAAXASAXAAA
B\A/B\A/B\A/
BBXBBBXBBBXB
B/A\B/A\B/A\
XAAAXAAAXAAA
B\A/B\A/B\A/
BBXBBBXBBBXB

What's reached :
     /A\
    XAAAX
   /B\A/B\
  XBBBXBBBX
 /A\B/A\B/A\
XAAAXASAXAAAx
 \A/B\A/B\A/
  XBBBXBBBX
   \B/A\B/
    XAAAX
     \A/
      X

Central
  X 
 /A\ 
XASAX
 \A/ 
  X 

reached in 65 steps. Every extra A/B layer reached in 262 steps, so 101150 steps.
After 327 steps : one extra layer, like above (9 squares, 5 A 4 B)
589 steps : 25 squares, 13A/12B
65+n*262 steps : (2n+1)^2 squares

So 26501365 : N=101151^2 squares, floor(N/2) B, ceil(N/2) A and... some math !
*/

var gHolesAEven;
var gHolesBEven;
var gHolesAOdd;
var gHolesBOdd;

function getObstaclesInRhombuses() {
	gHolesAEven = 0;
	gHolesBEven = 0;
	gHolesAOdd = 0;
	gHolesBOdd = 0;
	var canReach = generateDoubleEntryArray(gXL, gYL, false);
	paintFrom(canReach, gXS, gYS);
	var strLOG;
	
	for (var y = 0 ; y < gYL ; y++) {
		strLog = "";
		for (var x = 0 ; x < gXL ; x++) {
			if (!canReach[y][x]) {
				if ( (Math.abs(y-gYS) + Math.abs(x-gXS)) <= 65) {					
					if ((x+y+gXS+gYS)%2 == 0) {
						strLog += "A";
						gHolesAEven++;
					} else {
						strLog += "a";
						gHolesAOdd++;						
					}
				} else {
					if ((x+y)%2 == 0) {
						strLog += "B";
						gHolesBEven++;
					} else {
						strLog += "b";
						gHolesBOdd++;						
					}
				}
			} else {
				strLog += "-";
			}
		}
		//console.log(strLog);
	}	
	
	for (var y = 0 ; y < gYL ; y++) {
		for (var x = 0 ; x < gXL ; x++) {
			if (rawData[y].charAt(x) != '#' && !canReach[y][x]) {
				console.log("Can't reach " + x + "," + y);
			}
		}
	}	
	console.log("AOdd : "+gHolesAOdd);
	console.log("AEven : "+gHolesAEven);
	console.log("BOdd : "+gHolesBOdd);
	console.log("BEven : "+gHolesBEven);
}

// Copied from day 18
function paintFrom(g_array, p_x, p_y) {
	var list = [{x : p_x, y : p_y}];
	var coors, x, y;
	while (list.length > 0) {
		coors = list.pop();
		x = coors.x;
		y = coors.y;
		if (!g_array[y][x] && rawData[y].charAt(x) != '#') { // Unlike day 18, we need to check boundaries
			g_array[y][x] = true;
			if (x < gXL-1) {				
				list.push({x : x+1, y : y});
			}
			if (x > 0) {				
				list.push({x : x-1, y : y});
			}
			if (y < gYL-1) {				
				list.push({x : x, y : y+1});
			}
			if (y > 0) {				
				list.push({x : x, y : y-1});
			}
		}
	}
}

function conclusion_21_2_tried() { // Cannot be applied on non-official data !
	init(); // To initialize gXS, gYS.
	getObstaclesInRhombuses(); 
	const totalTheorical = (gNSTEPS+1)**2; // Maximum theorical number of steps
	// Then, how many do we miss ? 
	/*const numberEA = (202300**2); //4 (1st full slice) + 12 (3rd slice) + ... + 202299*4 (202299th slice) : 202300^2
	const numberOA = 1+8*(101150*101151/2); //1 + 8 (2nd slice) + 16 (4rd slice) + 24 (6rd slice) + ... + 809200 (202300th slice)
	const numberEB = numberEA; //4 + 12 + ... (same as OA in each slice)
	const numberOB = numberOA-1; // Same as EA without the central one*/

	const numberEA = 202300**2; // After 1,3,5, ... 202299 there are 4,16,36...
	const numberOA = 202301**2; 
	const numberEB = numberEA; //(same as EA in each slice)
	const numberOB = numberOA-1; // Same as OB without the central one
	console.log("Total ? "+ (404601**2));
	console.log("Total : "+ (numberEA + numberOA + numberEB + numberOB));
	return totalTheorical - numberOA*gHolesAOdd - numberEA*gHolesAEven - numberOB*gHolesBOdd - numberEB*gHolesBEven;
} 
// 601441068830929 is too high (I swapped evens and odds)
// 601441053860738 is too low
// Empirical solution : 
// 601441063078082

// After 65/327/589/851 steps, empirically seen : 3738/91657/296438/618757
// 
// My quick formula proposition :
// 328**2 - 9*618 - 4*627 - 8*633 - 4*587
/*
AOdd : 618
AEven : 627
BOdd : 633
BEven : 587*/