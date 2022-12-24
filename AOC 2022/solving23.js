var rawDataSmall = [
".....",
"..##.",
"..#..",
".....",
"..##.",
"....."
];

var rawDataExample = [
"....#..",
"..###.#",
"#...#.#",
".#...##",
"#.###..",
"##.#.##",
".#..#.."
];

var rawDataOfficial = [
".###.#.#.#..###.##.#.....#.####.####..##.#.##.#....##.###.#..####.##.#.",
".###.#...######....##.#..###..#.#.##.#.######..##.#.....#...#.#.##.##..",
".##....#..#...#..##.....##......#.#..#......#..#..###..#..##..#.#.##.#.",
"#####.###.##.#.##.#.#...##.##.#.#..####...#.#..####.#.######.###.######",
"#...#.#.#####....#.#.###..#####..####.#.#....###.#.####..##..###.####..",
"#.#.#.#####.....#....##....####.#..#...##.##..##..##..#..#...####.#..##",
"....#.#..####.#...#........##...##...#.##.##########...###..#####.#...#",
".####.#...##.#..##....###.##..#.###.#.##..######.##.#.#.##....##..#....",
"..#...#...#..#####......#.....#.##..#.####.##...#####..#..###.#..##....",
"#..#.#.#....####...#..##..#...#..#.#####.#.##..###.#.#.#...#######.#...",
".#.#.####....###...#..#.#...#.#.####..#..#........#..###....########.#.",
"#.##.#.##.#...#.##.###....##...####.###...#.##.##..##....#...####.#..#.",
".#.#.#.#..###..#.####..######.##..#.#######...####.#.#.#.##...#.....###",
"#..###...##......#..#....#..#..##......#####...#.##.....#.###..#...#..#",
".####...#.#....###.#.....#.##.#.....##...##.....#..#####..###.##.#.#.##",
"..#...#.#.#...##########..###.###....#..###....##..#.########.##.#.#.##",
"####..#..#.####...####..##.##.##....#..###.###.......##.......#.##...##",
"...#####..#.####.#.#.#.###..#..#..#.##.##..#.###.###.#...#.#.##.....#..",
"##..###.##.###.##.####.#.#.....##.##.#..###..####..########.###..###.##",
"#.#.#..#....###.#...#.#...#..###.###..#.##.##.####.##.##.##..#..###..##",
"#..###.....##.#####.###..##.###.#.....##.#....###..######..##.#.###...#",
"#.##..##.#.#.#.##.#..##..#..##..#....#..###.......###.####..##...#.#.#.",
"##...#..##..#.#..##.##...#.#.#..####.#..##...#.#...######....##.#...#..",
"#.###...#####..####..##..##.###..##.#.####..##.#.###.#.#..#......#.....",
".#...#.#.###........#.#.#...#..####...#.#####.#####...#....###.##.###..",
"....###....####..##..###.##..##.##.#.###.##.#.#.....#.....###.##...##..",
"#....######.....#.#...#.#..###.....#....#..##.##.###..##....#.###...#..",
"#.#.#.#.#...#.#.#...#.#.....####.###.#####.#.##..###..#.#####.#......#.",
".##.####...######.#.###.##.###..#.##..#.#.#....##.#.#####.#...####....#",
".#.#.##..##..###.#.#....####....#......#..##..###..########...#.##.##.#",
"#.###.##...#....#..###..#......##..#....#.####..#.##..#.##.#.##.#...###",
"#..#....##.###..###..##..#...#......#..####.#.#.#######.#...#####..#..#",
"..#.###.#..###.###......#.####..###..#.#..#.#.....##...#..#.#.##.###...",
"...##.........#..###.##..#######.######....######.#####.#.#.#.#..######",
"###.##..###.#.####...###..#..#...#...##.#.#......#..#.###..#.#...#....#",
"...###....##....#.##.#...###....##.#...#..#...#.#.##..#..#..####....#.#",
".#.#..#########....#.##.##..#.##..##.###..#.###..##.#..#.####.#.##.##..",
"##..####..###.#.....#.#.#.##...#.##....##.#.#.....##.....#..##.#.##.##.",
"#..#.######.#.###...#..#.#.###.##.##.#.###.....#.......####..#...###..#",
".##..##.###.#.###.#######.#.#.#.##.#....#...#####....###.######..#..##.",
"#.####....#..#...###.....###..##...###....##.#..#..##...##..#.####..#..",
"..###.##.###.#.#....##.####.#.#...#.#####.####..#.#.#.###.##.###...####",
"##.##..#..##.....#####..####.##.#.#.##..##.#.#..##..#.##.#.#....####...",
"###.#.#....#...#...#.#...#.#..#.#.###.###.##..#..#..###.##..#.#...##...",
"...#.....#.##...##....##...##.#.#..#.##.#.#..##.####.#.##..#.......#...",
"#....####.#.....###.##.#.###.#####.##....#.##..#####.....#.##.##..###.#",
".#..#..##.#..##.#.######.##...##...#.##..##..#.#.#..##.#....##...######",
"....##.##.#...#.###....##..#..#..#..#...#...####.##.########.###..##..#",
"###...####......#.#..#..#.##.####.#.##.#.##.#..##.#..###..####..#.#.###",
"..#####...#.#.....#....####.##..##.##..###...##.###..##.####.####..###.",
"..#.##.##...##..##.#..##.#.###...#.#..##.#.##.###.#.#.#.#.#..#..##.#..#",
".#.....#..####..#...#.#..####.#####.#..###.##.###.###.#.......####.##..",
".#.#####.#....#..##..#.###.####.#.....#..#.####..#.#.#....#.##.##..###.",
".....#...#.#..#.#.#.#.##..####.##.##.###.#......#..#.##...####.#.#.#.#.",
"##...#..#..##..##..#...#.##.###....#..#..##..#.##.#.###.###.#....#.##..",
"#.##.##...#.....##...###.#####..###..#.#.#..#.#.....#####.###.#..##...#",
".###..#.#.#...###.##...##...#..#.#.#...#.###....###......#.#.###..###.#",
"###..#...###...#.#.##.#..##.#.....#..##.#..#########..##.#.###.#.#.#...",
".##.#.#.#.#...#...##.##..#.##..#########..#.##.###.##.####.#.##.####.##",
"##.#####...##.....##.....##....###...#....#...#.##.#..##.#...#.#.#...#.",
"##....#.#....##.##..###....####.#...######.#..##......#.####...#.#.##.#",
"#####.#...#.....###....#.##....#..#.##.#####.########.###.#..#.##.#..##",
"##..#.#..##.#.##...#...##.#####.###.####.#...##...###...##..#...###.###",
"#.##..#....######..#.###.....#.#.####.##..##.##.#####......#.#.###..###",
".#####..####.#.##...###.....#######..######.#.##....#..##.##.##.##.#.##",
"...##.....#.###.####.#.###.#......##.#....#..###.....#.###.......####..",
".#.########..#.#...###.#.##....#.##.####.#.##....#.###.#.####.#.#...##.",
".###.#.#.#.#..#.##..#####..#######...#...#..######.....###...##.#.##.#.",
".#.....##..#.#..##.#.#..#.#..##.#..#...##..######.#.########...###.#...",
"..###.##..#.##..#........#.#....###..#.....##.##.##..#.##..###.#...#.##",
"..#.####.######.#......#...###.#...##.#...###.###.#..###.#..##.#..####."
];

//const rawData = rawDataSmall;
//const rawData = rawDataExample;
const rawData = rawDataOfficial;

const X_LENGTH_RAWDATA = rawData[0].length;
const Y_LENGTH_RAWDATA = rawData.length;
const NUMBER_STEPS_1 = 10;
const NUMBER_STEPS_2 = 1000;
const MARGIN = NUMBER_STEPS_2+1;
const X_LENGTH = X_LENGTH_RAWDATA + 2*MARGIN; 
const Y_LENGTH = Y_LENGTH_RAWDATA + 2*MARGIN;
const NO_ELF = -1;

const gData = {
	
}

function initialize() {
	gData.elves = [];
	gData.map = [];
	var hasElf;
	var x, y;
	for (y = 0 ; y < Y_LENGTH; y++) {
		gData.map.push([]);
		for (x = 0 ; x < X_LENGTH; x++) {
			hasElf = (x >= MARGIN && y >= MARGIN && x < X_LENGTH_RAWDATA+MARGIN && y < Y_LENGTH_RAWDATA+MARGIN && rawData[y-MARGIN][x-MARGIN] == '#');
			gData.map[y].push(hasElf ? gData.elves.length : NO_ELF);
			if (hasElf) {				
				gData.elves.push({x : x, y : y, plannedDirection : DIRECTION.UNDECIDED});
			}
		}
	}
}

function conclusion_23_1() {
	return conclusion_23_1_aux(NUMBER_STEPS_1); // Correct answer = 3917
}

function conclusion_23_2() {
	initialize();
	return makeElvesGo(NUMBER_STEPS_2); // Aaaah... almost 1st try ! Anyway, correct answer = 988
}

function conclusion_23_1_aux(p_numberSteps) {
	initialize();
	makeElvesGo(p_numberSteps); 
	var xMin = gData.elves[0].x;
	var yMin = gData.elves[0].y;
	var xMax = gData.elves[0].x;
	var yMax = gData.elves[0].y;
	var x, y;
	for (var i = 1 ; i < gData.elves.length ; i++) {
		x = gData.elves[i].x;
		y = gData.elves[i].y;
		xMin = Math.min(x, xMin);
		xMax = Math.max(x, xMax);
		yMin = Math.min(y, yMin);
		yMax = Math.max(y, yMax);
	}
	logMap(xMin, xMax, yMin, yMax);
	console.log("Biggest rectangle : " + xMin + "-" + xMax + " " + yMin + "-" + yMax + " ; answer : " + ((yMax - yMin + 1)*(xMax - xMin + 1) - gData.elves.length));
}

function makeElvesGo(p_numberSteps) {
	var x, y, xx, yy, otherIE, anIE, elf;
	var anyMoved = false;
	for (var iS = 0 ; iS < p_numberSteps ; iS++) {
		anyMoved = false;
		// Program all directions
		gData.elves.forEach(elf => {
			x = elf.x;
			y = elf.y;
			elf.plannedDirection = proposeForOneElf(x, y, iS % 4);		
		});
		// Try to execute the directions
		for (var iE = 0 ; iE < gData.elves.length ; iE++) {
			elf = gData.elves[iE];
			if (elf.plannedDirection != DIRECTION.UNDECIDED) {
				x = elf.x;
				y = elf.y;
				xx = x + DeltaX[elf.plannedDirection];
				yy = y + DeltaY[elf.plannedDirection];
				// The only case that would cause a conflict between 2 elves is if they are separated by one space and aim to go for that space
				anIE = gData.map[yy + DeltaY[elf.plannedDirection]][xx + DeltaX[elf.plannedDirection]];
				if ((anIE == NO_ELF) || (gData.elves[anIE].plannedDirection != OppositeDirection[elf.plannedDirection])) {
					elf.x = xx;
					elf.y = yy;
					gData.map[yy][xx] = iE; // There were no elves already because of the check.
					gData.map[y][x] = NO_ELF; // No elf will come immediately to the former position of the elf because of the checks.
					//console.log("Elf " + iE + " from " + x + " " + y + " to " + xx + " " + yy);
					anyMoved = true;
				} else {
					// Cancel the other elf
					gData.elves[anIE].plannedDirection = DIRECTION.UNDECIDED;
				}
				elf.plannedDirection = DIRECTION.UNDECIDED; // Cancel this elf, now that it has moved (or has its move prevented)
			}
		};
		if (!anyMoved) 
			return (iS+1);
	} 
	return "try higher !";
}

// To solve 23.2 faster, a possible way would have been to : 1) make all elves awake at start (property + awake list) 2) when an elf is not surrounded, register it as sleepy ; 3) for all elves in the awake list, try to move them 4) if an elf used to be sleepy, awake it and add it to the awaken list (checker so there's no duplicates) 5) update the awake list, repeat if it's not empty
// To avoid the problem of memory wasting : make a better estimation of the range of positions

function proposeForOneElf(p_x, p_y, p_stepMod) {
	if (noElf(p_x-1, p_y-1, p_x, p_y-1, p_x+1, p_y-1) && noElf(p_x-1, p_y+1, p_x, p_y+1, p_x+1, p_y+1) && gData.map[p_y][p_x-1] == NO_ELF && gData.map[p_y][p_x+1] == NO_ELF) {
		return DIRECTION.UNDECIDED; /// RAAAAAH, J'AVAIS PAS LU ! "If no other Elves are in one of those eight positions, the Elf does not do anything during this round." SINON j'aurais écrit ça beaucoup plus tôt !
	}		
	var dir;
	const directionsInList = [DIRECTION.UP, DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT, DIRECTION.UP, DIRECTION.DOWN, DIRECTION.LEFT];
	for (var i = p_stepMod ; i <= p_stepMod+3 ; i++) {
		dir = proposeForOneElfOneDirection(p_x, p_y, directionsInList[i]);
		if (dir != DIRECTION.UNDECIDED) {
			return dir;
		}
	}
	return DIRECTION.UNDECIDED;
}

function proposeForOneElfOneDirection(p_x, p_y, p_direction) {
	switch (p_direction) {
		case DIRECTION.UP :			
			if (noElf(p_x-1, p_y-1, p_x, p_y-1, p_x+1, p_y-1)) {
				return DIRECTION.UP;
			} 
			break;
		case DIRECTION.DOWN :
			if (noElf(p_x-1, p_y+1, p_x, p_y+1, p_x+1, p_y+1)) {
				return DIRECTION.DOWN;
			}
			break;
		case DIRECTION.LEFT :
			if (noElf(p_x-1, p_y-1, p_x-1, p_y, p_x-1, p_y+1)) {
				return DIRECTION.LEFT;
			}
			break;
		case DIRECTION.RIGHT :
			if (noElf(p_x+1, p_y-1, p_x+1, p_y, p_x+1, p_y+1)) {
				return DIRECTION.RIGHT;
			}
			break;
	}
	return DIRECTION.UNDECIDED;
}

function noElf(p_x1, p_y1, p_x2, p_y2, p_x3, p_y3) {
	return gData.map[p_y1][p_x1] == NO_ELF && gData.map[p_y2][p_x2] == NO_ELF && gData.map[p_y3][p_x3] == NO_ELF;
}

function logMap(xMin, xMax, yMin, yMax) {
	var string;
	for (var y = yMin ; y <= yMax ; y++) {
		string = "";
		for (var x = xMin ; x <= xMax ; x++) {
			string += gData.map[y][x] != NO_ELF ? (gData.map[y][x] % 10) : ".";			
		}
		console.log(string); 
	}
}