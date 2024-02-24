var rawDataNoKeys;				
var gFieldInConstruction;
const PLACEHOLDER = -10;
const SEED = {
	EMPTY : -1,
	WALL : -2
};

function switchRawDataNoKeys(p_index) {
	rawDataNoKeys = rawDataNoKeysBank[p_index];
	gXLength = rawDataNoKeys[0].length;
	gYLength = rawDataNoKeys.length;
}
switchRawDataNoKeys(0);

//from the value set in rawDataNoKeys (an array of strings) that corresponds to a maze with only its walls removed to the hub, just add keys and doors at random
function addKeysAndDoors() {
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
	const nbKeys = 36;
	for (y = 39 ; y <= 41 ; y++) {
		for (x = 39 ; x <= 41 ; x++) {
			allowedSpaces[x][y] = false;
		}
	}
	
	var key = 0;
	var xA, yA, xx, yy, xx2, yy2, dir, dir2;
	while (key < nbKeys) {
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
	
	// TODO Automatic door placement can wait. I will add a few manually to make a solvable maze.
	displayTheFieldInConstruction();
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

function construction_18_1() { // Yes, it's a pun with the usual "conclusion_X_1"
	addKeysAndDoors();
	rawDataNoKeys = gFieldChar;
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
					default : c = c = rawDataNoKeys[y].charAt(x); class_ = ""; break;
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
}