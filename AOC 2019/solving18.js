var rawData = [
"#################################################################################",
"#.............#.....#.................#.#.....#...#.......#...................#a#",
"#.#####.#######.#.###.#########.#####.#.#.###Y###.#.#####.#.#####.###########.#.#",
"#.#...#.#.....#.#..c#.........#...#.#...#...#.#...#.#.#...#.#.#...#...#...#.....#",
"#.#.###.#.###.#.###.#.###########.#.###.#.#.#.#.#.#.#.#.#.#.#.#.###.#.#.#.#######",
"#.#...#...#.#...#.#...#...........#.#...#.#.#...#.#.#.#.#.#.#.#...#.#.#.#.#.....#",
"#.#.#.#####.#####.#####.###.#######.#.###.#.#######.#.#.###.#.###.#.#.#.#.#.###.#",
"#.#.#.............#.#...#.#.#..e..#.....#.#...........#...#.#...#...#...#.....#.#",
"#.#########.#####.#.#.###.#.#.###.#####.#.###############.#T#.#.###############.#",
"#...#..k....#.....#.#.Z.#...#...#.....#.#.........#.#.....#.#.#.....#.L.....#...#",
"###.#.#.#######.###.###.#######.#####.#.#########.#.#.###.#.#.###.#.###.###.#.###",
"#...#.#.#.....#.#...#...#.....#.....#.#.#...#...#.#.#.#...#.#.#...#...#.#...#...#",
"#.###.#.#.###.#.#.###.###.###.#####.#.#.#.#.#.#.#.#.#.###.#.###.#####.#.#.#####.#",
"#.#...#.#.#...#.#...#.....#.#.....#.#.#.#.#...#...#.#...#.#.#...#.#...#.#.#.....#",
"#.###.#.#.#.###.###.#######.#.#####.#.#.#.#########.###.###.#.###.#.###.#.#.###.#",
"#...#.#.#.#...#...#.........#.#.....#.#.#.............#.......#...#.#...#.#...#.#",
"###.#.###.###.###.###.#.#####.#.#####.###############.#########.#.#.###.#.###.#.#",
"#.....#...#...#.J...#.#.#.....#.....#...#...........#.#...#...#.#.......#...#.#.#",
"#######.###.#######.#.###.#####.#######.#########.#.#.###.#.#.#########.#####.#.#",
"#.......#.#...#...#...#...#...#.#.......#.....O.#.#.#.#...#.#.......#...#.....#s#",
"#.#######.###.#.#.#####.###.#.#.#.#######.#####.#.#.#.#.###.#####.#.#.###.#####.#",
"#...#...#...#...#...#.#.#...#...#.......#.....#.#.#.#.#...#.#...#.#.#...#...#...#",
"###.#.#.#.#########.#.#.#.#######.#####.#.#####.#.###.###.#.###.###.#.#####.#.###",
"#.#...#.#.........#...#...#....d#.....#.#.#.....#.#...#...#.#.#...#.#.#.....#.#.#",
"#.#####.#######.#######.###.###.#####.#.#.#.#####.#.###.#.#.#.###.#.#.#.#####.#.#",
"#...#.#.......#.......#...#.#...#.....#.#.#.....#.......#.#.....#.#.#.#.#.......#",
"#.#.#.#######.#.#.#####.###.#.#####.###.#.#####.#############.###.#.#.#.#######.#",
"#.#...#.....#.#.#...#...#...#.....#...#.#.#...#.#...........#.#...#.#.#.#...#.#.#",
"#.###.###.#.#.#.###.#.###.#######.#####.#.###.#.#.#########.#.#.###.#.#.#.#.#.#.#",
"#...#.....#.#.#...#...#...#.......#.....#...#.#.#.....#...#...#...#.#.#...#.#...#",
"#.#.#######.#.###.#####.###.#######.#######.#.#.#####.###.#######.#.#####.#.#.###",
"#.#.#.....#.#.#.#.#.#...#.#.#...#...#...#...#.#.....#...#.....#...#.....#.#.#w#.#",
"#.#.#.###.#.#.#.#.#.#.###.#.#.#.###.#.#.#.###.#.###.###.#.###.#.###.###.###.#.#.#",
"#.#.#.#.#.#.#.#.#.#.#.#m..#...#...#...#.#.#...#...#...#.#...#.#.#.....#.#...#.#.#",
"###.#.#.#.###W#.#.#.#.#.#########.#####.#.#.#.###.#####.###.#.#.#######.#.###.#.#",
"#...#...#.#...#.....#.#.......#...#...#.#.#.#.#.#.....#.....#.#.........#.#.#...#",
"#.###.###.#.###.#####.#.###.###.###.#.#.#.#.#.#.#####.#######.###########.#.###.#",
"#.#...#...#.#...#.S...#...#.....#...#.#.#...#.....#.#.........#...#...#...#.....#",
"#.#.###.###.#####.#######.#######.###.#.#########.#.###########.#.#.#.#.###.#####",
"#.....#...........#.......F.......#..................f..........#...#...#.......#",
"#######################################.@.#######################################",
"#.....#.#...........#.....#.........................#...#.....#.M.......#.....#.#",
"###P#.#.#.#######.###.###.#.#######.###.#.#########.#.#.#.###.###.#####.###.#.#.#",
"#...#...#...#.#...#.....#.#.#.......#...#...#.........#...#.......#...#.....#.#.#",
"#.#.#######.#.#.###.#####.#.#.#######.#####.###############.#########.#######.#.#",
"#.#.#.....#.#.#.#...#...#.#.#.#.........#...#.......#...#.....#.....#.#.......#.#",
"#.###.###.#.#.#.#.###.#.#.#.#.###########.###.#####.#.#.#######.###.#.#.#######.#",
"#...#.#.#.#...#.#.#...#...#.#...........#...#...#.#...#.......#.#.#.#.#.........#",
"#.#.#.#.#.#.###.#.#.#####.#######.#####.###.###.#.###########.#.#.#.#.#.#######.#",
"#.#.#...#...#...#.#r#.....#.....#.....#.#...#.#.#.......#...#.....#.#...#.....#.#",
"#.#.###.#####.###.#.#######.###.#####.#.#.#.#.#.###.#####.#.#######.#.###.###.#.#",
"#.#...#.#...#...#.#.........#...#...#.#.#.#...#...#.#.....#.#......p#...#.#.#.#.#",
"###.#.#.#.#.###.#.###########.###.#.#.#.#.###.###.#.#.#####.#.###.#######.#.#.###",
"#...#.#.#.#...#.......#.....#.#...#...#.#...#.#...#.....#...#.#...#.K...#.#.#...#",
"#.#####.#.###.#######.#.###Q#.#.#######.###.#.#.#####.###.###.#.###.###.#.#.###.#",
"#.....#...#...#.#...#.#.#.#...#...#.....#...#.#.....#.#...#...#.#...#.#..j#.#...#",
"#.###.#####.###.#.#.###.#.#########.###.#.#########.###.#.#.###.#.###.#####.#.###",
"#...#.#.....#...#.#.B...#...#...#...#...#.#.......#.....#.#...#.#...........#.R.#",
"#.###.#.#######.#.#######.#.#.#.#.###.###.#.#.###.#######.###.###.#############.#",
"#.#...#.......#.#n....#...#.#.#...#...#.#...#...#.....#...#.#.....#..u..#.....#.#",
"###.#.#######.#.#####.#.###.#.#####.###.#.#####.###.###.###.###.###.###.#.###.#.#",
"#...#.#...#...#.....#.#.#...#...#.#...#.#...#...#...#...#...#.#.#...#...#.#...#.#",
"#.#####.#.#.###.#.#####.#.###.#.#.###.#.#####.#######.#####.#.###.###.###.###.#.#",
"#...#...#.#.#...#.......#.#...#.#...#...#.....#.......#.....#.U...#.#...#...#...#",
"#.#.#.###.#.#.#########.#.#####.###.###.#.#.###.#######.###########.###X#.#.###.#",
"#.#..l#...#.#...#.......#.....#...#...#.#.#o#...#.#.....#...#......x....#.#.#...#",
"#.#####C###.#.###.###########.###.#.###.#.###.###.#.###.#.#.#I#############.#.###",
"#.....#...#.#.#...#...#.....#.#...#.#...#.#...#.....#...#.#...#v......G.#...#..q#",
"###.#####.#.###.###.#.#.###.#.#.###.#.###.#.###.#####.#.#.#####.#######.#.#####.#",
"#.#y#...#.#...#.#...#.#...#.#...#...#...#.#.#...#.....#.#..i..#...#.....#...#...#",
"#.#.#.#.#.###.#.#.###.#.#.#.#####.#.###.#.#.###.#.###########H#.#.#.#####.#.#.###",
"#...#.#.#...#.#.....#.#.#.#.#...#.#.....#.#...#.#...........#.#.#.#g..#...#.#...#",
"#.###.#.###A#.#######.#.#.#.#.###.#######.###.#.#########.#.#.#.#.###.#####.###.#",
"#.#...#.....#.........#.#.#.#.#...#.....#...#.#.......#...#.#.#.#.#.#.#...#...#.#",
"###.#####################.#.#.#.#####.###.#.#.#########.###.#.###.#.#.#.#.###.#.#",
"#...#.......#.............#..t#.#...#...#.#.#.#.......#.#...#...#.#.#.N.#.....#.#",
"#.###.#####.#.#########.#######.#.#D#.#.#.#.#.#.#####.#.#.#####.#.#.###########.#",
"#.#...#...#..z#.#.......#.....#...#.#.#.#.#.#...#...#...#.#.#..h#.#.....#......b#",
"#.#.###.#.#####.#.#######.###.#####.###.#.#.#####.#.#####.#.#.###.#.###.#.#######",
"#.......#.......#...........#...........#.#.....E.#.........#...V.#...#.........#",
"#################################################################################"
]; // Useful keys indexes boil down to : [12, 14, 19, 20, 22, 24] m,o,t,u,w,y
const X_LENGTH = rawData[0].length;
const Y_LENGTH = rawData.length;

const field = stringArray_to_charDoubleEntryArray(rawData);
var gData = {
	keys : [],
	nodesSector : [[],[],[],[],[],[],[],[],[],[],[],[]],
	checkerPaths : new CheckCollectionDoubleEntry(X_LENGTH, Y_LENGTH),
	usefulKeyIDs : []
};
var distancesBetweenKeys; 

const X_SPLIT_LEFT = 39;
const X_SPLIT_RIGHT = 41;
const Y_SPLIT_UP = 39;
const Y_SPLIT_DOWN = 41;
const WALL = '#';
const ADDED_WALL = '+';
const EMPTY = '.';
const NOPE = -1;
const SECTION_MARK = '1';
const LEFT_UP_1 = 1;
const LEFT_UP_2 = 2;
const RIGHT_UP_1 = 3;
const RIGHT_UP_2 = 4;
const LEFT_DOWN_1 = 5;
const LEFT_DOWN_2 = 6;
const RIGHT_DOWN_1 = 7;
const RIGHT_DOWN_2 = 8;

function doorValue(p_x, p_y) {
	const c = charToASCIIRelativePosition(field[p_y][p_x], 'A');
	return ((c <= 25) && (c >= 0)) ? c : NOPE;
}

function keyValue(p_x, p_y) {
	const c = charToASCIIRelativePosition(field[p_y][p_x], 'a');
	return ((c <= 25) && (c >= 0)) ? c : NOPE;	
}

function isSolid(p_x, p_y) {
	return field[p_y][p_x] == WALL || field[p_y][p_x] == ADDED_WALL;
}

// No "." on the edges, so no need to check neighbors;
function addWallsIfNeeded(p_x, p_y) {
	if (keyValue(p_x, p_y) != NOPE) {
		return;
	}
	const wallUp = isSolid(p_x, p_y-1);
	const wallDown = isSolid(p_x, p_y+1);
	const wallLeft = isSolid(p_x-1, p_y);
	const wallRight = isSolid(p_x+1, p_y);
	if (wallUp && wallDown) {
		if (wallRight) {
			field[p_y][p_x] = ADDED_WALL;
			addWallsIfNeeded(p_x-1, p_y);
		} else if (wallLeft) {
			field[p_y][p_x] = ADDED_WALL;
			addWallsIfNeeded(p_x+1, p_y);			
		}
	}
	if (wallLeft && wallRight) {
		if (wallUp) {
			field[p_y][p_x] = ADDED_WALL;
			addWallsIfNeeded(p_x, p_y+1);			
		} else if (wallDown) {
			field[p_y][p_x] = ADDED_WALL;
			addWallsIfNeeded(p_x, p_y-1);
		}
	}

}


function initKeys() {
	if (gData.alreadyDone) {
		return;
	}
	gData.alreadyDone = true;
	field[Y_SPLIT_UP][X_SPLIT_LEFT] = SECTION_MARK;
	field[Y_SPLIT_UP][X_SPLIT_RIGHT] = SECTION_MARK;
	field[Y_SPLIT_DOWN][X_SPLIT_LEFT] = SECTION_MARK;
	field[Y_SPLIT_DOWN][X_SPLIT_RIGHT] = SECTION_MARK;
	for (var i = 0 ; i < 26 ; i++) {
		// There are keys from a to z, right ?
		gData.keys.push({
			id : i,
			requiresKeys : [],
			requiresDoors : [],
			x : -1,
			y : -1,
			distFSM : -1, // FSM = from start marker
			section : -1,
			requiredForAnyKey : false,
			useful : false
		});
	}
	var x, y;
	// Remove all dead ends + find all keys
	for (y = 0 ; y < Y_LENGTH ; y++) {
		for (x = 0 ; x < X_LENGTH ; x++) {
			if (field[y][x] == EMPTY || doorValue(x, y) != NOPE) {
				addWallsIfNeeded(x, y);
			}
			if (keyValue(x, y) != NOPE) {
				gData.keys[keyValue(x, y)].y = y;
				gData.keys[keyValue(x, y)].x = x;
			}
		}
	}
	
	// Look for the required keys for each key + give each key a quadrant and a distance from the center
	makeSearches(X_SPLIT_LEFT-1, Y_SPLIT_UP, LEFT_UP_1);
	makeSearches(X_SPLIT_LEFT, Y_SPLIT_UP-1, LEFT_UP_2);
	makeSearches(X_SPLIT_LEFT-1, Y_SPLIT_DOWN, LEFT_DOWN_1);
	makeSearches(X_SPLIT_LEFT, Y_SPLIT_DOWN+1, LEFT_DOWN_2);
	makeSearches(X_SPLIT_RIGHT+1, Y_SPLIT_UP, RIGHT_UP_1);
	makeSearches(X_SPLIT_RIGHT, Y_SPLIT_UP-1, RIGHT_UP_2);
	makeSearches(X_SPLIT_RIGHT+1, Y_SPLIT_DOWN, RIGHT_DOWN_1);
	makeSearches(X_SPLIT_RIGHT, Y_SPLIT_DOWN+1, RIGHT_DOWN_2);	
	
	// Purge the useless keys
	purgeUselessKeys();
	
	var dist;
	distancesBetweenKeys = generateDoubleEntryArray(gData.keys.length, gData.keys.length, -1);
	
	// Now, let's make distances ! (only between useful keys)
	for (i = 0 ; i < gData.keys.length ; i++) {
		if (gData.keys[i].useful) {
			for (j = i+1 ; j < gData.keys.length ; j++) {
				if (gData.keys[j].useful) {
					if (gData.keys[i].section == gData.keys[j].section && gData.keys[j].section) {
						dist = distanceWithinSection(gData.keys[i].section, gData.keys[i].nodeInSection, gData.keys[j].nodeInSection);
					} else {
						dist = gData.keys[i].distFSM + gData.keys[j].distFSM + distanceSectionMarkers(gData.keys[i].section,gData.keys[j].section);
					}
					distancesBetweenKeys[j][i] = dist;
					distancesBetweenKeys[i][j] = dist;
				}
			}			
		}
	}
}

function makeSearches(p_xStart, p_yStart, p_section) {
	if (isSolid(p_xStart, p_yStart)) {
		return;
	}
	gData.nodesSector[p_section] = [];
	gData.checkerPaths.clean();
	gData.checkerPaths.add(X_SPLIT_LEFT, Y_SPLIT_UP);
	gData.checkerPaths.add(X_SPLIT_RIGHT, Y_SPLIT_UP);
	gData.checkerPaths.add(X_SPLIT_LEFT, Y_SPLIT_DOWN);
	gData.checkerPaths.add(X_SPLIT_RIGHT, Y_SPLIT_DOWN);
	makeSearchesAux(p_xStart, p_yStart, p_section, 1, [], [], null);
	// Make the distances thanks to the nodes system.
	//...
}

function makeSearchesAux(p_x, p_y, p_section, p_dist, p_reqdKeysList, p_reqdDoorsList, p_closestNodeId) {
	if (isSolid(p_x, p_y) || gData.checkerPaths.get(p_x, p_y)) {
		return;
	}
	gData.checkerPaths.add(p_x, p_y);
	const c = keyValue(p_x, p_y);
	var node = p_closestNodeId;
	// Check key
	if (c != NOPE) {
		gData.keys[c].requiresKeys = p_reqdKeysList.slice();
		gData.keys[c].requiresDoors = p_reqdDoorsList.slice();
		gData.keys[c].distFSM = p_dist;
		gData.keys[c].section = p_section;
		p_reqdKeysList.push(c);
		
		node = gData.nodesSector[p_section].length;
		gData.nodesSector[p_section].push({
			father : p_closestNodeId,
			distFSM : p_dist,
			sons : []
		});
		gData.keys[c].nodeInSection = node;
		if (p_closestNodeId != null) {			
			gData.nodesSector[p_section][p_closestNodeId].sons.push(node);
		}
	}
	// Check doors
	const c2 = doorValue(p_x, p_y);
	if (c2 != NOPE) {
		if (p_reqdKeysList.indexOf(c2) == -1) {
			p_reqdDoorsList.push(c2); // The door doesn't count if we need to take the key before
		} else {
			field[p_y][p_x] = EMPTY;
		}
	}
	// Now, check crossroads
	if (c == NOPE) {
		const freeL = isSolid(p_x-1, p_y) ? 0 : 1;
		const freeR = isSolid(p_x+1, p_y) ? 0 : 1;
		const freeU = isSolid(p_x, p_y-1) ? 0 : 1;
		const freeD = isSolid(p_x, p_y+1) ? 0 : 1;
		if (freeL + freeR + freeU + freeD >= 3) {	
		
			node = gData.nodesSector[p_section].length;
			gData.nodesSector[p_section].push({
				father : p_closestNodeId,
				distFSM : p_dist,
				sons : []
			});
			if (p_closestNodeId != null) {			
				gData.nodesSector[p_section][p_closestNodeId].sons.push(node);
			}
		}
	}
	
	makeSearchesAux(p_x-1, p_y, p_section, p_dist+1, p_reqdKeysList.slice(), p_reqdDoorsList.slice(), node);
	makeSearchesAux(p_x+1, p_y, p_section, p_dist+1, p_reqdKeysList.slice(), p_reqdDoorsList.slice(), node);
	makeSearchesAux(p_x, p_y-1, p_section, p_dist+1, p_reqdKeysList.slice(), p_reqdDoorsList.slice(), node);
	makeSearchesAux(p_x, p_y+1, p_section, p_dist+1, p_reqdKeysList.slice(), p_reqdDoorsList.slice(), node);
}

// A key is useless if it isn't in a dead-end (due to tree structure) AND it is not required by a door (other than the ones you need to pick up to open)
function purgeUselessKeys() {
	gData.usefulKeyIDs = [];
	var x, y;
	for (var i = 0 ; i < gData.keys.length ; i++) {
		gData.keys[i].requiresDoors.forEach(idDoor => {
			gData.keys[idDoor].requiredForAnyKey = true;
		});
	}
	for (var i = 0 ; i < gData.keys.length ; i++) {
		// Useful = required by a door (not behind this key) or in an impasse
		if (!gData.keys[i].requiredForAnyKey) {			
			x = gData.keys[i].x;
			y = gData.keys[i].y;
			const wallUp = isSolid(x, y-1);
			const wallDown = isSolid(x, y+1);
			const wallLeft = isSolid(x-1, y);
			const wallRight = isSolid(x+1, y);
			var deadEnd = false;
			if (wallUp && wallDown) {
				if (wallRight) {
					deadEnd = true;
				} else if (wallLeft) {
					deadEnd = true;
				}
			}
			else if (wallLeft && wallRight) {
				if (wallUp) {
					deadEnd = true;
				} else if (wallDown) {
					deadEnd = true;
				}
			}
			if (!deadEnd) {
				gData.keys[i].useful = false;
			} else {
				gData.keys[i].useful = true;
			}
		} else {
			gData.keys[i].useful = true;
		}
		if (gData.keys[i].useful) {
			gData.usefulKeyIDs.push(i);
		}
	}
}

function distanceSectionMarkers(p_sectionA, p_sectionB) {
	const partA = Math.floor((p_sectionA-1)/2);
	const partB = Math.floor((p_sectionB-1)/2);
	// So partA and partB = 0 (NW), 1(NE), 2 (SW) or 3 (SE)
	if (partA == partB) {
		return 0;
	}
	if (partA + partB == 3) {
		return 4;
	}
	return 2;
}

function distanceWithinSection(p_section, p_nodeA, p_nodeB) {
	if (p_nodeA > p_nodeB) {
		return distanceWithinSection(p_section, p_nodeB, p_nodeA);
	}
	if (p_nodeB == p_nodeA) {
		return 0;
	}
	const fatherIndex = gData.nodesSector[p_section][p_nodeB].father;
	return gData.nodesSector[p_section][p_nodeB].distFSM-gData.nodesSector[p_section][fatherIndex].distFSM + distanceWithinSection(p_section, p_nodeA, fatherIndex);
	
}

// ----------------
// No more setup, let's solve this !

var gAnswer = {}

function conclusion_18_1() {
	initKeys();
	gAnswer.keysNumber = gData.keys.length; 
	initGlobalAnswerData();
	for (var i = 0 ; i < 10 ; i++) {
		seed();
		console.log(gAnswer.distance + " " + gAnswer.min);
		console.log(gAnswer.currentChain);
		console.log("---");
	}
}

function seed() {
	initOnePathData();
	var randomIndex = -1;
	var previousIndex = -1;
	while (gAnswer.keysLeftToTake > 0) {
		do {
			randomIndex = randomNumber(gAnswer.minRandomInt, gAnswer.maxRandomInt);
		} while (!correctIndex(randomIndex));
		if (previousIndex == -1) {
			gAnswer.distance += gData.keys[randomIndex].distFSM;
		} else {
			gAnswer.distance += distancesBetweenKeys[randomIndex][previousIndex];
		}
		gAnswer.currentChain.push(randomIndex);
		gAnswer.keyTakenYet[randomIndex] = true;
		previousIndex = randomIndex;
		gAnswer.keysLeftToTake--;
	}
	updateAnswerIfBest();
}

function initGlobalAnswerData() {
	gAnswer.min = X_LENGTH*Y_LENGTH*26;		
	gAnswer.bestChain = [];
}

function initOnePathData() {
	gAnswer.distance = 2; // No matter which key we take first, we will go to a section marker.
	gAnswer.currentChain = [];
	gAnswer.keysLeftToTake = 0;
	gAnswer.keyTakenYet = [];
	for (var i = 0 ; i < gAnswer.keysNumber ; i++) {
		gAnswer.keyTakenYet.push(!gData.keys[i].useful);
		if (gData.keys[i].useful) {
			gAnswer.keysLeftToTake++;
		}
	}
	gAnswer.minRandomInt = 0;
	gAnswer.maxRandomInt = gAnswer.keysNumber-1;
}

function correctIndex(p_randInd) {
	var answer = gData.keys[p_randInd].useful && !gAnswer.keyTakenYet[p_randInd];
	if (!answer) { // If the key will not be good anymore (useless or already taken)		
		if (p_randInd == gAnswer.minRandomInt) {
			gAnswer.minRandomInt++;
		} else if (p_randInd == gAnswer.maxRandomInt) {
			gAnswer.maxRandomInt--;
		}
	} else { // The key is still useful and to be taken, but can it be reached yet ?
		var i;
		for (i = 0 ; i < gData.keys[p_randInd].requiresDoors.length ; i++) {
			if (!gAnswer.keyTakenYet[gData.keys[p_randInd].requiresDoors[i]]) {
				return false;
			}
		}
		for (i = 0 ; i < gData.keys[p_randInd].requiresKeys.length ; i++) {
			if (!gAnswer.keyTakenYet[gData.keys[p_randInd].requiresKeys[i]]) {
				return false;
			}
		}
	}
	return answer;
}

function updateAnswerIfBest() {
	if (gAnswer.distance < gAnswer.min) {
		gAnswer.min = gAnswer.distance;
		gAnswer.bestChain = gAnswer.currentChain.slice();
	}
}


// Make sure the distances are... well... consistent
function autoCheckKeysAndDistance(p_arrayKeys) {
	var answer = 2 + gData.keys[p_arrayKeys[0]].distFSM;
	for (var i = 1 ; i < p_arrayKeys.length ; i++) {
		answer += distancesBetweenKeys[p_arrayKeys[i]][p_arrayKeys[i-1]];
	}
	return p_arrayKeys.length + " " + answer;
}