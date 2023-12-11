const rawDataOfficial = [
"################################",
"######..#######.################",
"######...######..#.#############",
"######...#####.....#############",
"#####....###G......#############",
"#####.#G..#..GG..##########..#.#",
"#######G..G.G.....##..###......#",
"######....G...........#.....####",
"#######.G......G........##..####",
"######..#..G.......E...........#",
"######..G................E..E..#",
"####.............E..........#..#",
"#####.........#####........##..#",
"########.....#######.......#####",
"########..G.#########......#####",
"#######.....#########....#######",
"#######G....#########..G...##.##",
"#.#.....GG..#########E##...#..##",
"#.#....G....#########.##...#...#",
"#....##......#######..###..##E.#",
"####G.........#####...####....##",
"####..G...............######..##",
"####....#.....##############.###",
"#..#..###......#################",
"#..#..###......#################",
"#.....#####....#################",
"###########.E.E.################",
"###########.E...################",
"###########.E..#################",
"#############.##################",
"#############.##################",
"################################",
];
const rawDataEx1 = [
"#######",
"#.G...#",
"#...EG#",
"#.#.#G#",
"#..G#E#",
"#.....#",  
"#######",
];
const rawDataEx2 = [
"#######",
"#G..#E#",
"#E#E.E#",
"#G.##.#",
"#...#E#",
"#...E.#",
"#######"
];

const rawDataEx3 = [
"#######",
"#E.G#.#",
"#.#G..#",
"#G.#.G#",
"#G..#.#",
"#...E.#",
"#######"];

const rawDataEx4 = [
"#########",
"#G......#",
"#.E.#...#",
"#..##..G#",
"#...##..#",
"#...#...#",
"#.G...G.#",
"#.....G.#",
"#########"];

const rawData = rawDataOfficial;

var gData = {};
var gNewSpaceFinder;

const WALL = 1;
const GROUND = 0;
const ADJACENT_ELF = -1;
const ADJACENT_GOBLIN = -2;
const NOBODY = -3;
const GOBLIN = 0;
const ELF = 1;

function init() {
	gData.characterList = [];
	gData.arrayChars = [];
	gData.arrayLand = [];
	gData.elfAttack = 3;
	
	gData.elfCount = 0;
	gData.goblinCount = 0;
	gData.standingCharIndex = []; // Contains in real time the indexes of standing characters
	gData.fullPassedRounds = 0;
	for (var y = 0 ; y < rawData.length ; y++) {
		gData.arrayChars.push([]);
		gData.arrayLand.push([]);
		for (var x = 0 ; x < rawData[0].length ; x++) {
			switch(rawData[y].charAt(x)) {
				case '#' :
					gData.arrayLand[y].push(WALL);
					gData.arrayChars[y].push(NOBODY);
				break;
				case '.' : 
					gData.arrayLand[y].push(GROUND);
					gData.arrayChars[y].push(NOBODY);
				break;
				case 'G' :
					gData.arrayLand[y].push(GROUND);
					gData.arrayChars[y].push(gData.characterList.length);
					gData.characterList.push({
						race : GOBLIN,
						hp : 200,
						x : x,
						y : y
					});
					gData.goblinCount++;
				break;
				case 'E' :
					gData.arrayLand[y].push(GROUND);
					gData.arrayChars[y].push(gData.characterList.length);
					gData.characterList.push({
						race : ELF,
						hp : 200,
						x : x,
						y : y
					});
					gData.elfCount++;				
				break;
			}
		}
	}

	gNewSpaceFinder = new CheckCollectionDoubleEntryGeneric(gData.arrayLand[0].length, gData.arrayLand.length,DIRECTION.UNDECIDED);
	gData.arrayAdjacency = [[], []];
	gData.arrayAdjacency[GOBLIN] = generateDoubleEntryArray(gData.arrayLand[0].length, gData.arrayLand.length, 0); // Always change them when an unit is moving.
	gData.arrayAdjacency[ELF] = generateDoubleEntryArray(gData.arrayLand[0].length, gData.arrayLand.length, 0); // Always change them when an unit is moving.
	
	gData.characterList.forEach(charac => {
		existingNeighborsCoors(charac.x, charac.y, gData.arrayLand[0].length, gData.arrayLand.length).forEach(coors => {
			gData.arrayAdjacency[charac.race][coors.y][coors.x]++;
		});
	});
	
	gData.currentRound = 0;
	gData.standingCharIndex = [];
	for (var i = 0 ; i < gData.characterList.length ; i++) {
		gData.standingCharIndex.push(i);
	}
}

const DELTA_READING_ORDER_X = [0, -1, 1, 0];
const DELTA_READING_ORDER_Y = [-1, 0, 0, 1];


// Make an unit move/attack.
// Note : units cannot be on the edge of the array, so no need to check.
function performMove(p_charIndex) {
	var charac = gData.characterList[p_charIndex];
	if (charac.hp <= 0) {
		return;
	} 
	var x = charac.x;
	var y = charac.y;
	var race = charac.race;
	var otherRace = (race == GOBLIN ? ELF : GOBLIN);
	var moved = false;
	if (gData.arrayAdjacency[otherRace][y][x] > 0) {
		attackFrom(x, y, otherRace);
		return;
	}
	// Find the closest space, and if case of tie the first one in reading order, that neighbors an enemy space.
	gNewSpaceFinder.clean();
	gNewSpaceFinder.addGeneric(x, y-1, 0);
	gNewSpaceFinder.addGeneric(x-1, y, 1);
	gNewSpaceFinder.addGeneric(x+1, y, 2);
	gNewSpaceFinder.addGeneric(x, y+1, 3);
	var newSpacesCurious = [{x : x, y : y-1}, {x : x-1, y : y}, {x : x+1, y : y}, {x : x, y : y+1}];
	var newSpacesCurious2 = []; // This step
	var xh, yh, xn, yn; // here / new
	var found = false;
	var dir;
	
	// newSpacesCurious = spaces that must be checked this step but may be invalid to select. Hey, it may contain a space adjacent to a target.
	// But at least, it contains a LURD space.
	while (!found && newSpacesCurious.length > 0) {
		newSpacesCurious2 = [];
		for (var i = 0 ; i < newSpacesCurious.length ; i++) {
			xh = newSpacesCurious[i].x;
			yh = newSpacesCurious[i].y;
			dir = gNewSpaceFinder.get(xh, yh);
			if (gData.arrayLand[yh][xh] != WALL && gData.arrayChars[yh][xh] == NOBODY) {	// Space may be anything ! A wall, a target space...		
				found = (gData.arrayAdjacency[otherRace][yh][xh] > 0); 
				if (found) {
					break;
				}
				for (var j = 0 ; j <= 3 ; j++) {
					xn = xh+DELTA_READING_ORDER_X[j];
					yn = yh+DELTA_READING_ORDER_Y[j];
					if (gNewSpaceFinder.get(xn, yn) == -1) {
						gNewSpaceFinder.addGeneric(xn, yn, dir);
						newSpacesCurious2.push({x : xn, y : yn});
					}
				}
			}
		}
		newSpacesCurious = [];
		newSpacesCurious2.forEach(coors => {
			newSpacesCurious.push({x : coors.x, y : coors.y});
		});						
	}
	if (found) { // I once put a breakpoint here gData.fullPassedRounds == 23 et p_charIndex == 2 (goblin stuck by their partners)
		// Eventually move the character in the direction that allows to reach the (xh, yh) space (target) first
		const dir = gNewSpaceFinder.get(xh, yh);
		const xDest = x + DELTA_READING_ORDER_X[dir];
		const yDest = y + DELTA_READING_ORDER_Y[dir];
		charac.x = xDest;
		charac.y = yDest;
		gData.arrayChars[yDest][xDest] = gData.arrayChars[y][x];
		gData.arrayChars[y][x] = NOBODY;
		for (var i = 0 ; i <= 3 ; i++) {
			gData.arrayAdjacency[charac.race][yDest + DELTA_READING_ORDER_Y[i]][xDest + DELTA_READING_ORDER_X[i]]++;
			gData.arrayAdjacency[charac.race][y + DELTA_READING_ORDER_Y[i]][x + DELTA_READING_ORDER_X[i]]--;
		}
		if (gData.arrayAdjacency[otherRace][yDest][xDest] > 0) {
			attackFrom(xDest, yDest, otherRace);
			return;
		}
	}
}

// At least one victim to attack ! (thank you, gData.arrayAdjacency)
function attackFrom(p_x, p_y, p_victimRace) {
	var ic;
	var iVict = -1;
	for (var dir = 0 ; dir <= 3 ; dir++) {
		ic = gData.arrayChars[p_y + DELTA_READING_ORDER_Y[dir]][p_x + DELTA_READING_ORDER_X[dir]];
		if (ic >= 0 && gData.characterList[ic].race == p_victimRace) {
			if (iVict == -1) {
				iVict = ic;
			} else if (gData.characterList[ic].hp < gData.characterList[iVict].hp) {
				iVict = ic;
			}
		}
	}
	// Victim selected !
	const yV = gData.characterList[iVict].y;
	const xV = gData.characterList[iVict].x;
	gData.characterList[iVict].hp -= (p_victimRace == GOBLIN ? gData.elfAttack : 3);
	if (gData.characterList[iVict].hp <= 0) { // Unit dies
		gData.arrayChars[yV][xV] = NOBODY;
		for (var i = 0 ; i <= 3 ; i++) {
			gData.arrayAdjacency[p_victimRace][yV + DELTA_READING_ORDER_Y[i]][xV + DELTA_READING_ORDER_X[i]]--;
		}
		if (p_victimRace == GOBLIN) {
			gData.goblinCount--;
		}
		if (p_victimRace == ELF) {
			gData.elfCount--;
		}
	}
}

// Cause all units to move or attack in the correct order. True if the combat ends.
function performRound() {
	gData.standingCharIndex = gData.standingCharIndex.filter(ic => {
		return (gData.characterList[ic].hp > 0);
	});
	sortAscending(gData.standingCharIndex, [function(ic) {return gData.characterList[ic].y}, function(ic) {return gData.characterList[ic].x}]);
	for (var i = 0 ; i < gData.standingCharIndex.length ; i++) {
		performMove(gData.standingCharIndex[i]);
		if (gData.elfCount == 0 || gData.goblinCount == 0) {
			// If there are no units left to move, increase the fully passed moves
			gData.fullPassedRounds++;
			for (var j = i+1 ; j < gData.standingCharIndex.length ; j++) {
				if (gData.characterList[gData.standingCharIndex[j]].hp > 0) {
					gData.fullPassedRounds--;
					break;
				}
			}
			return true;
		}
	}
	gData.fullPassedRounds++;
	return false;
}

function conclusion_15_1() {
	init();
	while (!performRound()) {}
	// Victory lap
	// Count all the HPs remaining (standing characters belong all to the same race)
	var answer = 0;
	gData.characterList.forEach(charac => {
		if (charac.hp > 0) {
			answer += charac.hp;
		}
	});
	answer *= gData.fullPassedRounds;
	return answer;
}

function logSituation() {
	var str, c;
	console.log("Fully passed rounds = " + gData.fullPassedRounds);
	for (var y = 0 ; y < gData.arrayChars.length ; y++) {
		str = "";
		for (var x = 0 ; x < gData.arrayChars[0].length ; x++) {
			if (gData.arrayLand[y][x] == WALL) {
				c = '#';
			} else if (gData.arrayChars[y][x] >= 0) {
				c = (gData.characterList[gData.arrayChars[y][x]].race == GOBLIN) ? 'G' : 'E';
			} else {
				c = '.';
			}
			str += c;
		}
		console.log(str);
	}
	for (var i = 0 ; i < gData.characterList.length ; i++) {
		c = gData.characterList[i];
		if (c.hp > 0) {
			console.log((c.race == ELF ? 'E' : 'G') + i + " - x y " + c.x + ' ' + c.y + ' - ' + c.hp); 
		}
	}
}

// -----------------

function performRound_noElfLoss() {
	gData.standingCharIndex = gData.standingCharIndex.filter(ic => {
		return (gData.characterList[ic].hp > 0);
	});
	sortAscending(gData.standingCharIndex, [function(ic) {return gData.characterList[ic].y}, function(ic) {return gData.characterList[ic].x}]);
	for (var i = 0 ; i < gData.standingCharIndex.length ; i++) {
		performMove(gData.standingCharIndex[i]);
		if (gData.startingElves > gData.elfCount) { // Game over !
			return -1;
		}
		if (gData.goblinCount == 0) {
			// If there are no units left to move, increase the fully passed moves
			gData.fullPassedRounds++;
			for (var j = i+1 ; j < gData.standingCharIndex.length ; j++) {
				if (gData.characterList[gData.standingCharIndex[j]].hp > 0) {
					gData.fullPassedRounds--;
					break;
				}
			}
			return 1; // Success
		}
	}
	gData.fullPassedRounds++;
	return 0; // What's next ?
}



function conclusion_15_2() {
	init();
	var previousFailedAttempts = 0;
	gData.startingElves = gData.elfCount;
	var result;
	while (true) {
		result = performRound_noElfLoss();
		if (result == -1) { // Game over - try again 			
			previousFailedAttempts++;
			init();
			gData.elfAttack += previousFailedAttempts;
		}
		if (result == 1) {
			break;
		}
	}
	// Victory lap
	// Count all the HPs remaining (standing characters belong all to the same race)
	var answer = 0;
	gData.characterList.forEach(charac => {
		if (charac.hp > 0) {
			answer += charac.hp;
		}
	});
	answer *= gData.fullPassedRounds;
	return answer;
}

