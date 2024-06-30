var rawDataNoKeys;				
var gFieldInConstruction;
const SEED = {
	EMPTY : -1,
	WALL : -2,
	FUTURE_DOOR : -3,
	PLACEHOLDER : -10
};

function switchRawDataNoKeys(p_index) {
	rawDataNoKeys = rawDataNoKeysBank[p_index];
	gXLength = rawDataNoKeys[0].length;
	gYLength = rawDataNoKeys.length;
}
switchRawDataNoKeys(0);

const gNbKeysAndDoors = 26;
var gXStart;
var gYStart;
// Seeding part 1 (we have a maze with only walls and the start/hub space)

//from the value set in rawDataNoKeys (an array of strings) that corresponds to a maze with only its walls removed to the hub, just add keys and doors at random
function addKeysInRawMaze() {
	const xL = gXLength;
	const yL = gYLength;
	const yLDiscrete = (yL-1)/2;
	const xLDiscrete = (xL-1)/2;
	const allowedSpaces = generateArrangedDoubleEntryArray(xL, yL, function(x, y) {return rawDataNoKeys[y].charAt(x) != '#'});
	var x, y;
	
	
	gFieldInConstruction = generateArrangedDoubleEntryArray(xL, yL,function(x, y) {
		return (rawDataNoKeys[y].charAt(x) == '#' ? SEED.WALL : SEED.EMPTY);
	});
	
	// Variable part !
	for (y = 39 ; y <= 41 ; y++) {
		for (x = 39 ; x <= 41 ; x++) {
			allowedSpaces[x][y] = false;
		}
	}
	gXStart = 40;
	gYStart = 40; // Reused in seeding part 2
	
	var key = 0;
	var xA, yA, xx, yy, xx2, yy2, dir, dir2;
	while (key < gNbKeysAndDoors) {
		do {			
			xA = 2*randomNumber(0, xLDiscrete-1)+1;
			yA = 2*randomNumber(0, yLDiscrete-1)+1;
		} while (!allowedSpaces[yA][xA]);
		gFieldInConstruction[yA][xA] = key;
		if (key >= 26) {
			addPlaceHolder(xA, yA);
		}
		spreadForbiddenSpacesAround(allowedSpaces, xA, yA);
		key++;
	}	
	
	key = 0;
	
	/*
	Automatic door placement : 1) place the doors without thinking, symbolizing them with a (!)
	2) Solving time : collect as many keys as you can without crossing a door.
	Couldn't collect any key ? Too bad, our door placement was wrong !
	*/
	
	// Automatic door placement !
	const nbDoors = gNbKeysAndDoors;
	var door = 0;
	while (door < nbDoors) {
		do {			
			xA = randomNumber(0, xL-2)+1; // First and last of the field that can have '.'
			yA = randomNumber(0, yL-2)+1; // Same
		} while (!allowedSpaces[yA][xA]);
		gFieldInConstruction[yA][xA] = SEED.FUTURE_DOOR;
		spreadForbiddenSpacesAround(allowedSpaces, xA, yA);
		door++;
	}
	
}

function keyToDoor(p_key) {
	return 1000 + p_key;
}

function doorToKey(p_door) {
	return p_door-1000;
}

function addPlaceHolder(p_x, p_y) {
	for (var dir = 0 ; dir <= 3 ; dir++) { // High convention : directions 0123
		if (gFieldInConstruction[p_y+DeltaY[dir]][p_x+DeltaX[dir]] == SEED.EMPTY) {
			gFieldInConstruction[p_y+DeltaY[dir]][p_x+DeltaX[dir]] = SEED.PLACEHOLDER;
			return;
		}
	}
}

function spreadForbiddenSpacesAround(p_allowedArray, p_x, p_y) {
	p_allowedArray[p_y][p_x] = false;
	for (dir = 0 ; dir <= 3 ; dir++) { // High convention : directions 0123
		xx = p_x + DeltaX[dir];
		yy = p_y + DeltaY[dir];
		dir2 = TurningRightDirection[dir];
		p_allowedArray[yy][xx] = false;
		p_allowedArray[yy + DeltaY[dir2]][xx + DeltaX[dir2]] = false;
		xx2 = xx + DeltaX[dir];
		yy2 = yy + DeltaY[dir];
		if (xx2 >= 0 && xx2 < gXLength && yy2 >= 0 && yy2 < gYLength) {
			p_allowedArray[yy2][xx2] = false;
		}
	}
}

// --------------
// Seeding part 2 (we have labelled keys and unlabelled doors)
function addDoorsInMaze() {
	var keysUsed = new CheckCollection(gNbKeysAndDoors);
	var keysCollected = new CheckCollection(gNbKeysAndDoors);
	var doorsToBreakCoors = []; 
	var dejaVuMaze = generateArrangedDoubleEntryArray(gXLength, gYLength, function(p_x, p_y) {return rawDataNoKeys[p_y].charAt(p_x) == '#'});

	var yetToSeeCoors = [{x : gXStart, y : gYStart}];
	var x, y;
	var coors;
	do {
		// Explore as much as possible from the starting point (inspirated by a method in "utils_propagation.js")
		while (yetToSeeCoors.length > 0) {
			coors = yetToSeeCoors.pop();
			x = coors.x;
			y = coors.y;
			if (dejaVuMaze[y][x]) { // Wall or already explored space
				// Nope, continue
			} else if (gFieldInConstruction[y][x] == SEED.FUTURE_DOOR) {
				doorsToBreakCoors.push({x : x, y : y});
			} else {
				dejaVuMaze[y][x] = true;
				if (gFieldInConstruction[y][x] >= 0 && gFieldInConstruction[y][x] < 1000) { // Got stuck for a little while : if not for the "< 1000", it would unavoidably "collect" doors on which keys were used.
					keysCollected.add(gFieldInConstruction[y][x]);
				}
				//if (y > 0) // Not needed because of the walls to the boundaries of the maze
					yetToSeeCoors.push({x : x, y : y-1});
				//if (x > 0)
					yetToSeeCoors.push({x : x-1, y : y});
				//if (y < p_array.length-1)
					yetToSeeCoors.push({x : x, y : y+1});
				//if (x < p_array[0].length-1)
					yetToSeeCoors.push({x : x+1, y : y});
			}
		}

		// Now that we have explored, select a random door to break and assign it one of the keys we have collected
		// If it's impossible... too bad !
		if (keysCollected.list.length <= keysUsed.list.length) {
			console.log("We are stuck :( please try again");
			return false;
		}
		var breakInd = randomNumber(0, doorsToBreakCoors.length-1);
		x = doorsToBreakCoors[breakInd].x;
		y = doorsToBreakCoors[breakInd].y;
		yetToSeeCoors.push({x : x, y : y});
		doorsToBreakCoors.splice(breakInd, 1);
		var keyToAffect = -1;
		do {
			keyToAffect = keysCollected.list[randomNumber(0, keysCollected.list.length-1)];
		} while (!keysUsed.add(keyToAffect));
		gFieldInConstruction[y][x] = keyToDoor(keyToAffect);
		if (keyToAffect >= 26) {
			addPlaceHolder(x, y);
		}
	} while (keysCollected.list.length < gNbKeysAndDoors);

	// Good :) now, just shuffle the remaining unopened doors at random !
	var remainingUnopenedDoors = [];
	var k;
	for (k = 0 ; k < gNbKeysAndDoors ; k++) {
		if (!keysUsed.get(k)) {
			remainingUnopenedDoors.push(k);
		}
	}
	var permut = generateRandomPermutation(remainingUnopenedDoors.length);
	var i = 0;
	for (y = 0 ; y < gYLength ; y++) {
		for (x = 0 ; x < gXLength ; x++) {
			if (gFieldInConstruction[y][x] == SEED.FUTURE_DOOR) {
				k = remainingUnopenedDoors[permut[i]];
				gFieldInConstruction[y][x] = keyToDoor(k);
				if (k >= 26) {
					addPlaceHolder(x, y);
				}
				i++;
			}
		}
	}
	return true;
}

// --------------
// Input / output part
function construction_18_1() { // Yes, it's a pun with the usual "conclusion_X_1"
	addKeysInRawMaze();
	var isMade = addDoorsInMaze();
	displayTheFieldInConstruction();
	if (isMade) {		
		// ...
	}
}

var gFieldChar;
function displayTheFieldInConstruction() {
	gFieldChar = [];
	var eltID = document.getElementById("day2019_18FamousMaze");
	eltID.innerHTML = "";
	var eltChar, c, class_, k;
	var class_;
	for (var y = 0 ; y < gYLength ; y++) {
		gFieldChar.push("");
		for (var x = 0 ; x < gXLength ; x++) {
			if (gFieldInConstruction[y][x] >= 1000) {
				c = asciiRelativePositionToChar((gFieldInConstruction[y][x]-1000)%26 , 'A');
				class_ = "door"; 
			} else if (gFieldInConstruction[y][x] >= 0) { 
				c = asciiRelativePositionToChar((gFieldInConstruction[y][x])%26 , 'a');				
				class_ = "key"; 
			} else {
				switch(gFieldInConstruction[y][x]) {
					//case ADDED_WALL : c = '&'; class_ = "addedWall";  break;
					case SEED.WALL : c = '#'; class_ = "wall"; break;
					case SEED.FUTURE_DOOR : c = '!'; class_ = ""; break;
					case SEED.PLACEHOLDER : 
						for (dir = 0 ; dir <= 3 ; dir++) {
							k = gFieldInConstruction[y+DeltaY[dir]][x+DeltaX[dir]];
							if (k >= 1000) {
								k -= 1000;
							} 
							if (k >= 0) {
								k = Math.floor(k/26);
								k--;
							}
							if (k >= 0) {
								c = asciiRelativePositionToChar(k, '0');
								class_ = "placeholder";
								break;
							}
						}
						if (dir == 4) {
							c = rawDataNoKeys[y].charAt(x);
							class_ = "";
						}
					break;
					default : c = rawDataNoKeys[y].charAt(x); class_ = ""; break;
				}
			}
			eltChar = document.createElement("span");
			eltChar.setAttribute("class", class_);
			eltChar.innerHTML = c;
			eltID.appendChild(eltChar);
			gFieldChar[gFieldChar.length-1] += c;
		}
		eltID.appendChild(document.createElement("br"));
	}
	rawData = gFieldChar;
}

console.log(`Please call the following functions : 
construction_18_1() (build the maze)
conclusion_18_1() (solve)
displayTheFieldInConstruction() (also sets rawData to get conclusion call ready)`)