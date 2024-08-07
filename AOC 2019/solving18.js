var rawData; 
var gXLength;
var gYLength;

// IMPORTANT : see "rawDataBank" in mazeBank
function switchRawData(p_index, p_artificiallyRemoveKeysDoors) {
	var rawDataOriginal = rawDataBank[p_index];
	gXLength = rawDataOriginal[0].length;
	gYLength = rawDataOriginal.length;
	
	// Note : this only removes doors from A to Z and keys from a to z. Any other character may make things bug !
	if (p_artificiallyRemoveKeysDoors && p_artificiallyRemoveKeysDoors.length > 0) {
		var x, y, ic, c;
		rawData = [];
		for (y = 0 ; y < gYLength ; y++) {
			rawData.push("");
			for (x = 0 ; x < gXLength ; x++) {
				for (ic = 0 ; ic < p_artificiallyRemoveKeysDoors.length ; ic++) {
					c = p_artificiallyRemoveKeysDoors.charAt(ic);
					if (rawDataOriginal[y].charAt(x) == c) {
						rawData[y] += '.';
						console.log("Warning : maze altered with suppression of character " + c + " in " + x + "," + y);
						break;
					}
				}
				if (ic == p_artificiallyRemoveKeysDoors.length) {
					rawData[y] += rawDataOriginal[y].charAt(x);
				}
			}
		}
	} else {
		rawData = rawDataOriginal;
	}
}
switchRawData(2); // Don't delete door X on github maze !

// All keys = [0 : (gNbKeys-1)].
const NO_KEY = -1;
const WALL = -2;
const ADDED_WALL = -3;
const EMPTY = NO_KEY;

function getKeyDoorFromRawData_aux(p_x, p_y, p_charRef) {
	const c = charToASCIIRelativePosition(rawData[p_y].charAt(p_x), p_charRef);
	if (c > 25 || c < 0) {
		return NO_KEY;
	}
	var xx, yy;
	var add = 0;
	var c2;
	for (var dir = 0 ; dir <= 3 ; dir++) {
		xx = p_x + DeltaX[dir];
		yy = p_y + DeltaY[dir];
		c2 = charToASCIIRelativePosition(rawData[yy].charAt(xx), '0');
		if (c2 >= 0 && c2 <= 9) {
			add = c2+1;
			break;
		}
	}
	return c + 26*add;
}

function getKeyFromRawData(p_x, p_y) {
	return getKeyDoorFromRawData_aux(p_x, p_y, 'a');
}

function getDoorFromRawData(p_x, p_y) {
	return getKeyDoorFromRawData_aux(p_x, p_y, 'A');
}

function keyValue(p_x, p_y) {
	const c = gField[p_y][p_x];
	return ((c < gNbKeys) && (c >= 0)) ? c : NO_KEY;
}

function isSolid(p_x, p_y) {
	return gField[p_y][p_x] == WALL || gField[p_y][p_x] == ADDED_WALL;
}

// Adds walls in dead-ends (if space p_x, p_y is a dead-end) until a key or a 3-way point is met. 
// This 3-way point becomes a 2-way point that may be closed later
// No "." on the edges, so no need to check neighbors;
function closeDeadEndRecursively(p_x, p_y) {
	if (keyValue(p_x, p_y) != NO_KEY) {
		return;
	}
	const wallUp = isSolid(p_x, p_y-1);
	const wallDown = isSolid(p_x, p_y+1);
	const wallLeft = isSolid(p_x-1, p_y);
	const wallRight = isSolid(p_x+1, p_y);
	if (wallUp && wallDown) {
		if (wallRight) {
			gField[p_y][p_x] = ADDED_WALL;
			closeDeadEndRecursively(p_x-1, p_y);
		} else if (wallLeft) {
			gField[p_y][p_x] = ADDED_WALL;
			closeDeadEndRecursively(p_x+1, p_y);			
		}
	}
	if (wallLeft && wallRight) {
		if (wallUp) {
			gField[p_y][p_x] = ADDED_WALL;
			closeDeadEndRecursively(p_x, p_y+1);			
		} else if (wallDown) {
			gField[p_y][p_x] = ADDED_WALL;
			closeDeadEndRecursively(p_x, p_y-1);
		}
	}
}

// Global vars
var gNbKeys;
var gNbSectors;
var gSectorBordersCoors = [];
var gSectorStartsCoors = [];
var gStart;
var gField;
var gDoorsField;
var gKeysDataBuild;
var gDoorsDataBuild;
var gExtraDistance;
var gUsefulKeyList;
var gDoorGrouperCount;
const NO_GROUP = -1;

function calculateNbKeys() {
	gNbKeys = 0;
	var key;
	for (var y = 0 ; y < gYLength ; y++) {
		for (var x = 0 ; x < gXLength ; x++) {
			key = getKeyFromRawData(x, y);
			if (key != NO_KEY) {
				gNbKeys = Math.max(gNbKeys, key+1);
			}
		}
	}
}

function generateKeyData(p_index) {
	var coef = "";
	if (p_index > 26) {
		coef += ("" + (Math.floor(p_index/26)-1))
	}
	return {
		index : p_index,
		x : -1,
		y : -1,
		matchingDoorIDs : [],
		doorsCodeName : coef+asciiRelativePositionToChar(p_index%26, 'A'),
		keyCodeName : coef+asciiRelativePositionToChar(p_index%26, 'a')
	};	
}

function initP1() {	

	calculateNbKeys(); // Initialize gNbKeys
	// gNbSectors will be initialized later (probably in buildTreeForTheFirstTime where it is needed) ; it is identified from 0 to gNbSectors-1
	
	gPotentialDeadEndsToPurge = [];
	gUsefulKeyList = generateNumericArray(0, gNbKeys-1);
	gKeysDataBuild = generateArrangedArray(gNbKeys, generateKeyData);

	gDoorsDataBuild = []; // Contains : x, y, key, doorGroup
	gField = [];
	gExtraDistance = 0;
	var x, y;
	// Generate the field ! 
	var c;
	generateField();
	
	// Now... time to build the tree ! 
	buildTreeForTheFirstTime();
	do {
		purgePotentialDeadEnds();
		buildTreeForTheFirstTime();
		gBuildToBeRefreshed = false;
		checkTerminalPurge();
		if (gBuildToBeRefreshed) {continue};
		removeAllDoorsBehindTheirKeysAndOtherDoors();
		if (gBuildToBeRefreshed) {continue};
		bringBackAllSeparations();
		if (gBuildToBeRefreshed) {continue};
		findAllSimilarConsecutiveKeys();
		if (gBuildToBeRefreshed) {continue};
	} while (gBuildToBeRefreshed);
	displayTheField(false);
}

function generateField() {
	gSectorBordersCoors = [];
	gSectorStartsCoors = [];
	gDoorsField = generateDoubleEntryArray(gXLength, gYLength, NO_KEY);
	gField = generateArrangedDoubleEntryArray(gXLength, gYLength, function(x, y) {
		c = rawData[y].charAt(x); // Note : right now, doors are treated as empty spaces
		if (c >= 'a' && c <= 'z') {
			return getKeyFromRawData(x, y);
		}
		if (c == '#') {return WALL;}
		if (c == '&') {return ADDED_WALL;}
		if (c == '$') {gSectorStartsCoors.push({x : x, y : y});};
		if (c == ' ') {gSectorBordersCoors.push({x : x, y : y});};
		if (c == '@') {gStart = {x : x, y : y};};
		return EMPTY;
	});

	// Remove all dead ends + find all keys coordinates + find all doors coors (but don't update the doors now !)
	var key;
	var doorsCoors = [];
	for (y = 0 ; y < gYLength ; y++) {
		for (x = 0 ; x < gXLength ; x++) {
			key = keyValue(x, y);
			if (gField[y][x] == EMPTY) {
				closeDeadEndRecursively(x, y);
			}
			if (key != NO_KEY) {
				gKeysDataBuild[key].y = y;
				gKeysDataBuild[key].x = x;
			}
			if (getDoorFromRawData(x,y) != NO_KEY) {
				doorsCoors.push({x : x, y : y});
			}
		}
	}
	var idDoor = 0;
	var doorKey;
	// Set the "key ids" of the doors and add them to the keys
	doorsCoors.forEach(coors => {
		x = coors.x;
		y = coors.y;
		if (!isSolid(x, y)) {
			doorKey = getDoorFromRawData(x, y); 
			idDoor = gDoorsDataBuild.length;
			gDoorsDataBuild.push({key : doorKey, x : x, y : y, removalPending : false});
			gKeysDataBuild[doorKey].matchingDoorIDs.push(idDoor);
			gDoorsField[y][x] = idDoor;
		}
	});	
	
	
	// If we remove some keys...
	for (key = 0 ; key < gNbKeys ; key++) {
		if (gKeysDataBuild[key].y == -1 && gKeysDataBuild[key].x == -1) {
			gKeysDataBuild[key] = null;
		};
	}
}

var gBuildToBeRefreshed;
var gFieldNextDirectionsForRebuilds;
var gDoorsToBeRemoved;

// Build the tree. I couldn't build it before all dead-ends (with no key) were removed !
// Since it is the first time, it must rely on data on the field
function buildTreeForTheFirstTime() {
	gSectorBranches = []; 
	gSectorBordersCoors.forEach(coors => {
		gField[coors.y][coors.x] = WALL;
	});
	gNbSectors = gSectorStartsCoors.length;
	
	const gFieldNextDirectionsForRebuilds = generateArrangedDoubleEntryArray(gXLength, gYLength, function() {return {}} );
	gDoorsToBeRemoved = [];
	
	// Refresh group of doors (will be useful when looking for similar doors)
	// TODO Make a CheckCollectionGeneric
	for (var doorId = 0 ; doorId < gDoorsDataBuild.length ; doorId++) {
		if (gDoorsDataBuild[doorId] != null) {			
			gDoorsDataBuild[doorId].doorGroup = NO_GROUP;
		}
	}
	gDoorGrouperCount = 0;
	for (var sector = 0 ; sector < gNbSectors ; sector++) {
		gSectorBranches.push(makeListNodesFromField(gSectorStartsCoors[sector].x, gSectorStartsCoors[sector].y, DIRECTION.UNDECIDED));	
		// Note : normally, when using makeListNodesFromField we start from the space after the previous key/crossroad, but it doesn't apply here. 
		// So... subtract 1 artificially for the "path from the root.
		gSectorBranches[sector][0].distanceFromPrecedent--;
	}
	gSectorBordersCoors.forEach(coors => {
		gField[coors.y][coors.x] = EMPTY;
	});
}

function buildTreeForTheSecondTime() {
	for (var sector = 0 ; sector < gNbSectors ; sector++) {
		var newTree = removeDeadSeparations(gSectorBranches[sector]);
		gSectorBranches[sector] = removeDeadNodes(newTree);
	}	
}

function removeDeadSeparations(p_listNodes) {
	var newListNodes = p_listNodes;
	var indexInSep = -1;
	var nodeInSep;
	var finalNode = newListNodes[newListNodes.length-1];
	for (var i = 0 ; i < finalNode.separation.length ; i++) {
		nodeInSep = finalNode.separation[i][0];
		if (!isSolid(nodeInSep.x, nodeInSep.y)) {
			if (indexInSep == -1) {
				indexInSep = i;
			} else {
				indexInSep = -2;
				break;
			}
		}
	}
	if (indexInSep >= 0) {
		newListNodes = newListNodes.concat(removeDeadSeparations(finalNode.separation[indexInSep]));
		finalNode.separation = [];
	} else {
		var newSeparations = [];
		for (var i = 0 ; i < finalNode.separation.length ; i++) {
			nodeInSep = finalNode.separation[i][0];
			if (!isSolid(nodeInSep.x, nodeInSep.y)) {
				newSeparations.push(removeDeadSeparations(finalNode.separation[i]));
			}
		}
		finalNode.separation = newSeparations;
	}
	return newListNodes;
}

// Inspect the 'new' tree (after the one-choice separations have been cleaned)
// and clean everything that was altered on the field since the last time the tree was rebuilt
function removeDeadNodes(p_listNodes) {
	var doorsFP = [];
	var distanceFP = 0;
	var deep = 0;
	var listNewNodes = [];
	while (deep < p_listNodes.length) {
		// Don't forget : we don't know exactly what is in x,y right now. Synchronize, or else !
		p_listNodes[deep].key = gField[p_listNodes[deep].y][p_listNodes[deep].x];
		doorsFP = doorsFP.concat(p_listNodes[deep].doorsFromPrecedent.filter(function(doorId) {return gDoorsDataBuild[doorId] != null}));
		distanceFP += p_listNodes[deep].distanceFromPrecedent;
		if ((p_listNodes[deep].key == NO_KEY || gKeysDataBuild[p_listNodes[deep].key] == null) && deep < p_listNodes.length-1) { // An in-between node has no key ? Accumulate with the next one !
			// Nothing
		} else { // Everything we've accumulated must be stored here (either last node or node with a key)
			listNewNodes.push({ 
				doorsFromPrecedent : doorsFP.slice(),
				distanceFromPrecedent : distanceFP,
				x : p_listNodes[deep].x,
				y : p_listNodes[deep].y,
				key : p_listNodes[deep].key
			});
			doorsFP = [];
			distanceFP = 0;
		}
		deep++;
	}
	const finalSep = p_listNodes[p_listNodes.length-1].separation;
	listNewNodes[listNewNodes.length-1].separation = [];
	finalSep.forEach(branch => {
		listNewNodes[listNewNodes.length-1].separation.push(removeDeadNodes(branch));
	});
	return listNewNodes;
}

// Start from the space closer from the center to make a node, either at the first key met, or at the first 3-way point met.
function makeListNodesFromField(p_x, p_y, p_comeFrom) {
	var keepGoing = true;
	var distancePreviousNode = 1;
	var x, y, xx, yy;
	// First, explore the tunnel as much as possible (we already are at distance 1).
	var doorsMetAlongTheWay = [];
	var previousDir = DIRECTION.UNDECIDED;
	var nextDir;
	x = p_x;
	y = p_y;
	var previousDir = p_comeFrom;
	var severalDirections;
	var key, door;
		
	while (keepGoing) {		
		nextDir = DIRECTION.UNDECIDED;
		severalDirections = false;
		key = keyValue(x, y);
		if (key != NO_KEY) { // Find a key ?
			keepGoing = false;
		}
		door = gDoorsField[y][x];
		if (door != NO_KEY) { // Find a door ? (if it is at an intersection, it counts for this node)
			doorsMetAlongTheWay.push(door);
			// Duplicates possibles. So be it. (they will be removed later)
		}
		for (var dir = 0 ; dir <= 3 ; dir++) {// High convention : directions = 0123
			// Find the "non empty dir"
			if (dir != previousDir) {
				xx = x + DeltaX[dir];
				yy = y + DeltaY[dir];
				if (!isSolid(xx, yy)) {
					if (nextDir != DIRECTION.UNDECIDED) {
						keepGoing = false; // Crossroad
					}
					nextDir = dir;
				}				
			}
		}
		if (nextDir == -1) { // Dead end
			keepGoing = false;
		}
		if (keepGoing) {
			distancePreviousNode++;
			x += DeltaX[nextDir];
			y += DeltaY[nextDir];
			previousDir = OppositeDirection[nextDir];
		}
	}
	// Make the node that will be returned + group doors together
	var listNodes = [{
		key : key, 
		distanceFromPrecedent : distancePreviousNode, 
		doorsFromPrecedent : doorsMetAlongTheWay.slice(), 
		separation : [],
		x : x,
		y : y
	}];
	if (doorsMetAlongTheWay.length >= 2) {
		gDoorGrouperCount++;
		doorsMetAlongTheWay.forEach(doorId => {
			gDoorsDataBuild[doorId].doorGroup = gDoorGrouperCount;
		});
	}
	
	KnownDirections.forEach(dir => {
		if (dir != previousDir && !isSolid(x + DeltaX[dir], y + DeltaY[dir])) {
			listNodes[0].separation.push(makeListNodesFromField(x + DeltaX[dir], y + DeltaY[dir], OppositeDirection[dir]));
		}
	});	
	if (listNodes[0].separation.length == 1) {
		listNodes = listNodes.concat(listNodes[0].separation[0]);
		listNodes[0].separation = [];
	}
	return listNodes;
}

// This affects the field (not the tree, that isn't even checked !) and does 3 things :
// Looks for the terminal keys
// Removes terminal ones outside of dead-ends
// The tree needs to be rechecked after !
function checkTerminalPurge() {
	for (key = 0 ; key < gNbKeys ; key++) {
		if (gKeysDataBuild[key] == null) {continue;}
		gKeysDataBuild[key].deadEndEscape = deadEndToFollow(gKeysDataBuild[key].x, gKeysDataBuild[key].y);
		if (gKeysDataBuild[key].matchingDoorIDs.length == 0) {
			if (gKeysDataBuild[key].deadEndEscape == DIRECTION.UNDECIDED) {
				deleteKey(key);
			}
		} 
	}
}

// Moves a key closer to the center (as we are going to make a round-trip to get it anyway) to either the first door or the first crossroad.
// Any key on the way is removed and replaced by the key that we are moving.
function moveKeySpacesBack(p_keyID) {
	keepGoing = true; 
	x = gKeysDataBuild[p_keyID].x;
	y = gKeysDataBuild[p_keyID].y;
	//console.log("About to move " + p_keyID + " ; former extraDistance = " + gExtraDistance);
	while (keepGoing) {
		detf = deadEndToFollow(x, y);
		keepGoing = (detf != DIRECTION.UNDECIDED); 
		if (keepGoing) {
			xx = x + DeltaX[detf];
			yy = y + DeltaY[detf];
			keepGoing = (gDoorsField[yy][xx] == NO_KEY);
			if (keepGoing) {
				key2 = keyValue(xx, yy);
				if (key2 != NO_KEY) {
					replaceDoorsBuild(key2, p_keyID);
					deleteKey(key2);
				}
				moveKeyBuild(p_keyID, xx, yy);
				gField[y][x] = ADDED_WALL;
				gExtraDistance += 2; 
				x = xx;
				y = yy;
			}
		}
	}
	//console.log("And now = " + gExtraDistance);
}

// This function gives a new position to the key. It does NOT affect distance or anything strategic.
function moveKeyBuild(p_keyID, p_x, p_y) {
	gField[gKeysDataBuild[p_keyID].y][gKeysDataBuild[p_keyID].x] = EMPTY;
	gField[p_y][p_x] = p_keyID;
	gKeysDataBuild[p_keyID].x = p_x;
	gKeysDataBuild[p_keyID].y = p_y;
	gBuildToBeRefreshed = true;
}

// If we are in a dead-end, return the direction needed to take to escape. 
// Otherwise, return DIRECTION.UNDECIDED.
function deadEndToFollow(p_x, p_y) {
	const wallUp = isSolid(p_x, p_y-1);
	const wallDown = isSolid(p_x, p_y+1);
	const wallLeft = isSolid(p_x-1, p_y);
	const wallRight = isSolid(p_x+1, p_y);
	if (wallUp && wallDown) {
		if (wallLeft) {return DIRECTION.RIGHT;}
		if (wallRight) {return DIRECTION.LEFT;}
	}
	if (wallLeft && wallRight) {
		if (wallUp) {return DIRECTION.DOWN;}
		if (wallDown) {return DIRECTION.UP;}		
	}
	return DIRECTION.UNDECIDED;
}

function isCorridor(p_x, p_y) {
	var count = 0;
	if (isSolid(p_x, p_y-1)) {count++;}
	if (isSolid(p_x, p_y+1)) {count++;}
	if (isSolid(p_x+1, p_y)) {count++;}
	if (isSolid(p_x-1, p_y)) {count++;}
	return count == 2;
}

// This is a simple function used solely during building the maze !
function deleteKey(p_keyID) {
	var x = gKeysDataBuild[p_keyID].x;
	var y = gKeysDataBuild[p_keyID].y;
	gPotentialDeadEndsToPurge.push({x : x, y : y});
	gField[y][x] = EMPTY; 
	gKeysDataBuild[p_keyID] = null;
	gBuildToBeRefreshed = true;
}

// This is a simple function used solely during building the maze !
function replaceDoorsBuild(p_replaced, p_replacer) {
	gKeysDataBuild[p_replaced].matchingDoorIDs.forEach(doorID => {
		gDoorsDataBuild[doorID].key = p_replacer;
		gKeysDataBuild[p_replacer].matchingDoorIDs.push(doorID);
		gBuildToBeRefreshed = true;
	});
}

function removeAllDoorsBehindTheirKeysAndOtherDoors() {
	for (var sector = 0 ; sector < gNbSectors ; sector++) {
		removeDoorsBehindTheirKeysAndOtherDoors(gSectorBranches[sector], []);
	}
}

// Remove a door that is behind its key within a tree OR behind another door
function removeDoorsBehindTheirKeysAndOtherDoors(p_listNodes, p_keysMet) {
	keysMet = p_keysMet.slice();
	var deep = 0;
	var doorsRemoved;
	var currentNode = null;
	var dfp, doorID;
	for (deep = 0 ; deep < p_listNodes.length ; deep++) {		
		currentNode = p_listNodes[deep];
		doorsRemoved = [];
		keysMet.forEach(key => {
			for (dfp = 0 ; dfp < currentNode.doorsFromPrecedent.length ; dfp++) {
				doorID = currentNode.doorsFromPrecedent[dfp];
				if (keyMatchesDoor(key, doorID)) {
					gDoorsDataBuild[doorID].removalPending = true;
					doorsRemoved.push({node : currentNode, doorID : doorID});
				}
				// Here, duplicated doors are removed !
				for (var dfp2 = 0 ; dfp2 < dfp ; dfp2++) {
					if (gDoorsDataBuild[currentNode.doorsFromPrecedent[dfp2]].key == gDoorsDataBuild[doorID].key && !gDoorsDataBuild[doorID].removalPending) {
						gDoorsDataBuild[doorID].removalPending = true;
						doorsRemoved.push({node : currentNode, doorID : doorID});
					}
				}
			}
		});
		doorsRemoved.forEach(doorIdAndNode => {
			deleteDoorAndPotentiallyKey(doorIdAndNode.doorID);
		});
		if (currentNode.key != NO_KEY) {
			keysMet.push(currentNode.key);
		}
		var key;
		currentNode.doorsFromPrecedent.forEach(doorID => {			
			if (gDoorsDataBuild[doorID] != null) {				
				key = gDoorsDataBuild[doorID].key;
				if (keysMet.indexOf(key) == -1) {
					keysMet.push(key);
				}
			}
		});
	}
	if (currentNode != null) {
		for (var i = 0 ; i < currentNode.separation.length ; i++) {			
			removeDoorsBehindTheirKeysAndOtherDoors(currentNode.separation[i], keysMet);
		}
	}
}

function keyMatchesDoor(p_keyID, p_doorId) {
	return gDoorsDataBuild[p_doorId].key == p_keyID;
}

// Remove a door (from a door ID - and updates the list of keys in the node right after it)
function deleteDoorAndPotentiallyKey(p_doorId) {
	const door = gDoorsDataBuild[p_doorId];
	gDoorsField[door.y][door.x] = NO_KEY;
//	p_nodeAfterDoor.doorsFromPrecedent = p_nodeAfterDoor.doorsFromPrecedent.filter(function(doorID) {return doorID != p_doorId}); // Suboptimal : I may remove several keys in a row in the same door. 
	const key = door.key;
	gKeysDataBuild[key].matchingDoorIDs = gKeysDataBuild[key].matchingDoorIDs.filter(function(doorID) {return doorID != p_doorId}); // Ditto. 
	if (gKeysDataBuild[key].matchingDoorIDs.length == 0 && !inADeadEnd(key)) {
		deleteKey(key);
	}
	gDoorsDataBuild[p_doorId] = null; // ERROR : I have put "door" instead.
	gBuildToBeRefreshed = true;
}

function inADeadEnd(p_keyID) {
	const x = gKeysDataBuild[p_keyID].x;
	const y = gKeysDataBuild[p_keyID].y;
	var countSolid = 0;
	KnownDirections.forEach(dir => {
		if (isSolid(x + DeltaX[dir], y + DeltaY[dir])) {
			countSolid++;
		}
	});
	return (countSolid == 3);
}

var gNotBackingMode = true;
function switchNotBackingMode() {
	gNotBackingMode = !gNotBackingMode;
	console.log("Attention, gNotBackingMode est desormais a " + gNotBackingMode);
}

function bringBackAllSeparations() {
	for (var key = 0 ; key < gNbKeys ; key++) {
		if (gKeysDataBuild[key] != null && gKeysDataBuild[key].matchingDoorIDs.length > 0) {
			moveKeySpacesBack(key);
		}
	}
}

// Keys are consecutive if there is no door and no crossroads between them (well, no door during the maze construction) and similar if they open consecutive doors. Yup, simple as that.
function findAllSimilarConsecutiveKeys() {
	for (var i = 0 ; i < gNbSectors ; i++) {
		findSimilarConsecutiveKeys(gSectorBranches[i]);
	}
}

function findSimilarConsecutiveKeys(p_listNodes) {
	var keysInTheChain = [p_listNodes[0].key];
	for (var deep = 1 ; deep < p_listNodes.length ; deep++) {		
		if (p_listNodes[deep].doorsFromPrecedent.length != 0) {
			purgeKeysFromConsecutiveIfSimilar(keysInTheChain);
			keysInTheChain = [];
		}
		if (p_listNodes[deep].key != NO_KEY) { // Oopsie, didn't bring that case before testing my github maze !			
			keysInTheChain.push(p_listNodes[deep].key);
		}
	}
	purgeKeysFromConsecutiveIfSimilar(keysInTheChain);		
	for (var k = 0 ; k < p_listNodes[p_listNodes.length-1].separation.length ; k++) {		
		findSimilarConsecutiveKeys(p_listNodes[p_listNodes.length-1].separation[k]);
	}
}

// Note : keys have been met in order from the beginning to the end of the list
function purgeKeysFromConsecutiveIfSimilar(p_keysInTheChain) {
	var key, key2, dg, dg2;
	if (p_keysInTheChain.length >= 2) {
		for (var i = 1 ; i < p_keysInTheChain.length ; i++) {
			key = p_keysInTheChain[i];
			if (gKeysDataBuild[key].matchingDoorIDs.length != 1) {continue;}
			dg = gDoorsDataBuild[gKeysDataBuild[key].matchingDoorIDs[0]].doorGroup;
			if (dg == -1) {continue;}
			for (var j = 0 ; j < i ; j++) {
				key2 = p_keysInTheChain[j];
				if (gKeysDataBuild[key2] == null || gKeysDataBuild[key2].matchingDoorIDs.length != 1) {continue;}
				dg2 = gDoorsDataBuild[gKeysDataBuild[key2].matchingDoorIDs[0]].doorGroup;
				if (dg2 == dg) { // So, not -1
					deleteDoorAndPotentiallyKey(gKeysDataBuild[key2].matchingDoorIDs[0], null);
				}
			}
		}
	}
}

// -------------------------------

function logTheField() {
	var str, c, k;
	for (var y = 0 ; y < gYLength ; y++) {
		str = "";
		for (var x = 0 ; x < gXLength ; x++) {
			if (gDoorsField[y][x] != NO_KEY) {
				c = asciiRelativePositionToChar(gDoorsDataBuild[gDoorsField[y][x]].key , 'A');
			} else {
				k = keyValue(x, y);
				if (k != NO_KEY) {
					c = asciiRelativePositionToChar(k , 'a');
				} else {
					switch(gField[y][x]) {
						case ADDED_WALL : c = '&'; break;
						case WALL : c = '#'; break;
						default : c = '.'; break;
					}
				}
			}
			str += c;
		}
		console.log(str);
	}
}

function displayTheField(p_isPart2) {
	// TODO I will need to find something a colorblind-friendly system if the number of keys become too important (> 130, 5 distinct colours used)
	var eltID = document.getElementById("day2019_18FamousMaze");
	eltID.innerHTML = "";	
	var eltChar, c, class_, k;
	for (var y = 0 ; y < gYLength ; y++) {
		for (var x = 0 ; x < gXLength ; x++) {
			if (gDoorsField[y][x] != NO_KEY) {
				k = gDoorsDataBuild[gDoorsField[y][x]].key;
				c = asciiRelativePositionToChar(k%26 , 'A');
				class_ = "door" + Math.floor(k/26); 
			} else {
				k = keyValue(x, y);
				if (k != NO_KEY) {
					c = asciiRelativePositionToChar(k%26 , 'a');
					class_ = "key" + Math.floor(k/26); 
				} else {
					switch(gField[y][x]) {
						case ADDED_WALL : 
							c = '&'; 
							class_ = "addedWall"; 
							break;
						case WALL : 
							c = '#'; 
							class_ = "wall";
							break;
						default : 
							c = rawData[y].charAt(x); 
							class_ = "";
							if (c == ' ') {
								c = '_';
								if (p_isPart2) {
									class_ = "addedWall";
								}
							}
							break;
					}
				}
			}
			eltChar = document.createElement("span");
			eltChar.setAttribute("class", class_);
			eltChar.innerHTML = c;
			eltID.appendChild(eltChar);
		}
		eltID.appendChild(document.createElement("br"));
	}
}

function logTheTree(p_sector) {
	logTheTree_aux(gSectorBranches[p_sector], "");
}

function logTheTree_aux(p_listNodes, p_extraSpaces) {
	var str = "";
	var strDoors, comma, arrow;
	arrow = "";
	p_listNodes.forEach(node => {
		strDoors = "";
		comma = "";
		node.doorsFromPrecedent.forEach(doorId => {
			strDoors += comma + doorId +"(" + gKeysDataBuild[gDoorsDataBuild[doorId].key].doorsCodeName + ")";
			comma = ",";
		});
		str += arrow + "(x,y " + node.x + "," + node.y + ") ";
		str += node.distanceFromPrecedent + "/[" + strDoors + "] "; 
		str += (node.key == -1 ? "-" : gKeysDataBuild[node.key].keyCodeName);
		arrow = " -> ";
	});
	console.log(p_extraSpaces + str);
	p_listNodes[p_listNodes.length-1].separation.forEach(ln => {
		logTheTree_aux(ln, p_extraSpaces + "  ");
	});
	return str;
}

// ------------------------------------------

// Now, it's time to resolve this !

var gBestDistance;
var gKeysUnlockingInfo;
var gKeysTakenSoFar;
var gBestKeysPath;
function conclusion_18_1() {
	initP1();
	gBestDistance = -1;
	makeKeyUnlockingGraph();
	var availableKeys = [];
	for (var key = 0 ; key < gNbKeys ; key++) {
		if (gKeysDataBuild[key] != null && gKeysUnlockingInfo[key].notUnlockedYet == 0) {
			availableKeys.push(key);
		}
	}
	gKeysDataDistBuild = generateArrangedArray(gNbKeys, function(){return {}});
	gKeysTakenSoFar = [gNbKeys]; // "gNbKeys" = artificial number of the starting points
	generateDistanceArray(false);
	findBestPathNoTerm(gNbKeys, availableKeys, gExtraDistance);
	
	
	// Now, where to add the terminal keys ? 
	var terminalKeys = [];
	for (var key = 0 ; key < gNbKeys ; key++) {
		if (gKeysDataBuild[key] != null && gKeysUnlockingInfo[key].unlocks.length == 0) {
			findBestMomentToTakeTermKey(key);
		}
	}
	return gBestDistance;
}

// Test all possible places where the passed key can be tried, and put it in the best one.
function findBestMomentToTakeTermKey(p_key) {
	var indexToPutIn = 0;
	var bestDistanceSaving = -1;
	var distanceSaving;
	var keysNeeded = gKeysUnlockingInfo[p_key].unlockedBy.length;
	for (var i = 0 ; i < gBestKeysPath.length-1 ; i++) {
		if (gKeysUnlockingInfo[p_key].unlockedBy.indexOf(gBestKeysPath[i]) != -1) {
			keysNeeded--; // TODO WARNING : I hope everything is clear that no key can be picked several times !
		}
		if (keysNeeded > 0) { // We don't have all keys yet, so we can not try to pick up the key here.
			continue;
		}
		distanceSaving = gDistance[gBestKeysPath[i+1]][p_key] + gDistance[gBestKeysPath[i]][p_key] - gDistance[gBestKeysPath[i+1]][gBestKeysPath[i]];
		if (bestDistanceSaving == -1 || distanceSaving < bestDistanceSaving) {
			bestDistanceSaving = distanceSaving;
			indexToPutIn = i+1;
		}
	}
	distanceSaving = gDistance[gBestKeysPath[gBestKeysPath.length-1]][p_key];
	if (bestDistanceSaving == -1 || distanceSaving < bestDistanceSaving) {
		bestDistanceSaving = distanceSaving;
		indexToPutIn = gBestKeysPath.length;
	}
	gBestDistance += bestDistanceSaving;
	gBestKeysPath.splice(indexToPutIn, 0, p_key);
}

// Since we don't start from the start but from the hub start, we need to remove a few distance. Calculate it here !
function totalDistanceSectorsFromStart() {
	var total = 0;
	for (var sector = 0 ; sector < gNbSectors ; sector++) {
		// WARNING : if a sector is totally closed, don't count it ! (I made a tricky mistake, getting 2 below or above the theorical minimum for all 3 mazes)
		if (gSectorBranches[sector].length == 1 && gSectorBranches[sector][0].depth == 0 && gSectorBranches[sector][0].separation.length == 0) {
			continue;
		}
		total += getDistanceSectorFromStart(sector);
		
	}
	return total;
}

var gDistanceSectors;

function generateDistanceArray(p_isPart2) {
	// Distance start / key = 2+(depth of key)
	// Distance key / key in 2 != sectors : (depth key1) + (depth key2) + (hub separator)
	// Distance key / key in the same sector, one before another : sum of their depths - sum of the depth of their common node
	// First, find the depth of each key and the sector it belongs to. And the depth of each node
	findAllDepthKeysAndNodes();
	generateDistanceSectorsArray(); // initialize gDistanceSectors
	gDistance = generateDoubleEntryArray(gNbKeys+1, gNbKeys+1, -1);
	var usefulKeys = [];
	for (var key = 0 ; key < gNbKeys ; key++) {
		if (gKeysDataBuild[key] != null) {
			usefulKeys.push(key);
		}
	}
	var key1, key2, val;
	for (var i = 0 ; i < usefulKeys.length ; i++) {
		key1 = usefulKeys[i];
		for (var j = 0 ; j <= i ; j++) {
			key2 = usefulKeys[j];
			if (key1 == key2) {
				gDistance[key2][key1] = 0;
			} else {
				if (gKeysDataDistBuild[key1].sector != gKeysDataDistBuild[key2].sector) {
					if (!p_isPart2) {						
						val = gKeysDataDistBuild[key1].depth + gKeysDataDistBuild[key2].depth + getDistanceSectors(gKeysDataDistBuild[key1].sector, gKeysDataDistBuild[key2].sector);
					} else {
						val = -1;
					}
				} else {
					val = gKeysDataDistBuild[key1].depth + gKeysDataDistBuild[key2].depth - 2*getCommonDepth(gKeysDataDistBuild[key1].sector, key1, key2);
				}
				gDistance[key1][key2] = val;
				gDistance[key2][key1] = val;
			}
		}
		val = getDistanceSectorFromStart(gKeysDataDistBuild[key1].sector) + gKeysDataDistBuild[key1].depth;
		gDistance[key1][gNbKeys] = val;
		gDistance[gNbKeys][key1] = val;
	}
}

function generateDistanceSectorsArray() {
	var newField = generateArrangedDoubleEntryArray(gXLength, gYLength, function(x, y) {return (isSolid(x, y) ? '#' : '.')});
	var coors;
	for (var sect = 0 ; sect < gNbSectors ; sect++) {
		coors = gSectorStartsCoors[sect];
		newField[coors.y][coors.x] = ""+sect;
	}
	newField[gStart.y][gStart.x] = ""+gNbSectors;
	gDistanceSectors = findDistancesClassicMaze(newField);
}

function getDistanceSectors(p_sector1, p_sector2) {
	return gDistanceSectors[p_sector1][p_sector2];
}

function getDistanceSectorFromStart(p_sector) {
	return gDistanceSectors[p_sector][gNbSectors];
}

// Gets the depth of the common node of two keys 
// Note : heavily relies on the structure of "gSectorBranches" : they must be a list of nodes (a set of distanceFromPrecedent + doorsFromPrecedent + a final key), with only keys at the end), and last one may have a list of separations of either 2 or more such lists, or none.
function getCommonDepth(p_sector, p_key1, p_key2) {
	var superDeep = 0;
	var separationsTakenKey1 = gKeysDataDistBuild[p_key1].separationsTaken;
	var separationsTakenKey2 = gKeysDataDistBuild[p_key2].separationsTaken;
	var nodeList = gSectorBranches[p_sector];
	while (superDeep < separationsTakenKey1.length && superDeep < separationsTakenKey2.length && separationsTakenKey2[superDeep] == separationsTakenKey1[superDeep]) {
		nodeList = nodeList[nodeList.length-1].separation[separationsTakenKey1[superDeep]];
		superDeep++;
	}
	var minNode;
	if ((superDeep == separationsTakenKey1.length) && (superDeep == separationsTakenKey2.length)) {
		minNode = Math.min(gKeysDataDistBuild[p_key1].nodeWithinFinalBranch, gKeysDataDistBuild[p_key2].nodeWithinFinalBranch);// Oopsie, copied p_key1 twice !
		return nodeList[minNode].depth;
	} else if ((superDeep == separationsTakenKey1.length) && (superDeep < separationsTakenKey2.length)) { 
		minNode = gKeysDataDistBuild[p_key1].nodeWithinFinalBranch;
		return nodeList[minNode].depth;	
	} else if ((superDeep == separationsTakenKey2.length) && (superDeep < separationsTakenKey1.length)) {
		minNode = gKeysDataDistBuild[p_key2].nodeWithinFinalBranch;
		return nodeList[minNode].depth;		
	} else {
		// Separations split here
		return nodeList[nodeList.length-1].depth;
	}
}

function findAllDepthKeysAndNodes() {
	for (var sector = 0 ; sector < gNbSectors ; sector ++) {
		findDepthKeysAndNodes(gSectorBranches[sector], sector, 0, []);
	}
}

function findDepthKeysAndNodes(p_listNodes, sector, p_previousNodeDepth, p_separationsTaken) {
	var depth = p_previousNodeDepth;
	var key;
	for (var d = 0 ; d < p_listNodes.length ; d++) {
		depth += p_listNodes[d].distanceFromPrecedent;
		p_listNodes[d].depth = depth;
		key = p_listNodes[d].key;
		if (key != NO_KEY) {
			gKeysDataDistBuild[key].depth = depth;
			gKeysDataDistBuild[key].sector = sector;
			gKeysDataDistBuild[key].separationsTaken = p_separationsTaken.slice();
			gKeysDataDistBuild[key].nodeWithinFinalBranch = d;
			gKeysDataDistBuild[key].isInDeadEnd = (d == p_listNodes.length-1 && p_listNodes[d].separation.length == 0);
		}
	}
	for (var i = 0 ; i < p_listNodes[p_listNodes.length-1].separation.length ; i++) {
		p_separationsTaken.push(i);
		findDepthKeysAndNodes(p_listNodes[p_listNodes.length-1].separation[i], sector, depth, p_separationsTaken.slice());
		p_separationsTaken.pop();
	}
}

// Generate the tree of "which key depends upon which one"
function makeKeyUnlockingGraph() {
	gKeysUnlockingInfo = generateArrangedArray(gNbKeys, function() {return {unlocks : [], unlockedBy : [], notUnlockedYet : 0}});
	gSectorBranches.forEach(listNodes => {
		addToKeyUnlockingGraph(listNodes, []);
	});
}

function addToKeyUnlockingGraph(p_listNodes, p_pendingBlockingKeys) {
	if (p_listNodes.length == 0) {
		return;
	}
	var pendingKeys = p_pendingBlockingKeys.slice();
	var newKey;
	for (var i = 0 ; i < p_listNodes.length ; i++) {
		newKey = p_listNodes[i].key;
		if (newKey != NO_KEY) {	
			pendingKeys.forEach(key => {
				addKeyDependency(key, newKey); // Any key blocked by tree order (either because there was a door before, or there's a key we need to enforce)
			});
			pendingKeys = [];
			p_listNodes[i].doorsFromPrecedent.forEach(doorID => { // A new key behind a door
				addKeyDependency(gDoorsDataBuild[doorID].key, newKey);
			});
			pendingKeys = [newKey]
		} else {
			p_listNodes[i].doorsFromPrecedent.forEach(doorID => {
				pendingKeys.push(gDoorsDataBuild[doorID].key);
			});
		}
	}
	p_listNodes[p_listNodes.length-1].separation.forEach(listNode => {		
		addToKeyUnlockingGraph(listNode, pendingKeys);
	});
}

function addKeyDependency(p_keyBlocking, p_keyBlocked) {
	gKeysUnlockingInfo[p_keyBlocking].unlocks.push(p_keyBlocked);
	gKeysUnlockingInfo[p_keyBlocked].unlockedBy.push(p_keyBlocking);
	gKeysUnlockingInfo[p_keyBlocked].notUnlockedYet++;
}

var gPickAllKeysMode = false;
function switchPickAllKeysMode() {
	gPickAllKeysMode = !gPickAllKeysMode;
	console.log("Attention, gPickAllKeysMode est passe a " + gPickAllKeysMode);
}

function findBestPathNoTerm(p_startPoint, p_keysToTake, p_distance) {
	if (p_keysToTake.length == 0) {
		gBestDistance = (gBestDistance == -1 ? p_distance : Math.min(p_distance, gBestDistance));
		if (gBestDistance == p_distance) {			
			gBestKeysPath = gKeysTakenSoFar.slice();
		}
		return;
	}
	var newKeysToTake;
	p_keysToTake.forEach(key => {
		newKeysToTake = p_keysToTake.filter(function(key2) {return key2 != key}); // TODO Warning : absolutely not efficient ! In our example there are only 26 keys, but beware !
		// Make all new keys available
		gKeysUnlockingInfo[key].unlocks.forEach(key2 => {
			gKeysUnlockingInfo[key2].notUnlockedYet--;
		});
		gKeysUnlockingInfo[key].unlocks.forEach(key2 => { // This way, no risk of problems with duplicates
			if (gKeysUnlockingInfo[key2].notUnlockedYet == 0 && (gPickAllKeysMode || gKeysUnlockingInfo[key2].unlocks.length > 0)) {
				// If gKeysUnlockingInfo is false, we only focus on non-terminal keys, making the run obviously much shorter.
				newKeysToTake.push(key2);
			}
		});
		// Run to that key
		gKeysTakenSoFar.push(key);
		findBestPathNoTerm(key, newKeysToTake, p_distance + gDistance[key][p_startPoint]);
		gKeysTakenSoFar.pop();
		// Re-make all keys unavailable
		gKeysUnlockingInfo[key].unlocks.forEach(key2 => {
			gKeysUnlockingInfo[key2].notUnlockedYet++;
		});
		
	});
}

// --------------------------
// Now, how about solving part 2 ? 

var gPotentialDeadEndsToPurge;
function initP2() {
	
	calculateNbKeys(); // Initialize gNbKeys
	// gNbSectors will be initialized later (probably in buildTreeForTheFirstTime where it is needed) ; it is identified from 0 to gNbSectors-1
	
	gUsefulKeyList = generateNumericArray(0, gNbKeys-1);
	gPotentialDeadEndsToPurge = [];
	gKeysDataBuild = generateArrangedArray(gNbKeys, generateKeyData);
	gDoorsDataBuild = []; // Contains : x, y, key, doorGroup
	gField = [];
	gExtraDistance = 0;
	var x, y;
	// Generate the field ! 
	var c;
	generateField();
	
	gBuildToBeRefreshed = true;
	buildTreeForTheFirstTime();	
	while (gBuildToBeRefreshed) {
		purgePotentialDeadEnds();
		buildTreeForTheFirstTime();	// TODO : redundant the first time (also see P1)
		gBuildToBeRefreshed = false;
		checkTerminalPurge();
		if (gBuildToBeRefreshed) {continue};
		removeAllDoorsBehindTheirKeysAndOtherDoors();
		if (gBuildToBeRefreshed) {continue};
		removeAllKeysAccessibleFromStart();
		if (gBuildToBeRefreshed) {continue};
		bringBackAllSeparations();
		if (gBuildToBeRefreshed) {continue};
		findAllSimilarConsecutiveKeys();
		if (gBuildToBeRefreshed) {continue};
	}
	displayTheField(true);
}

function removeAllKeysAccessibleFromStart() {
	for (var sector = 0 ; sector < gNbSectors ; sector++) {
		var deep = 0;
		var depth = 0;
		var key;
		while (deep < gSectorBranches[sector].length 
		&& gSectorBranches[sector][deep].doorsFromPrecedent.length == 0 
		&& gSectorBranches[sector][deep].separation 
		&& gSectorBranches[sector][deep].separation.length == 0) {
			depth += gSectorBranches[sector][deep].distanceFromPrecedent;
			key = gSectorBranches[sector][deep].key;
			if (key != NO_KEY) {
				gKeysDataBuild[key].matchingDoorIDs.forEach(doorId => {
					deleteDoorAndPotentiallyKey(doorId);
				});
				if (gKeysDataBuild[key] != null) {						
					deleteKey(key);
				}
			}
			deep++;
		}
		if (deep == gSectorBranches[sector].length) {
			gExtraDistance += depth;
		}
	}
}

function purgePotentialDeadEnds() {
	var x, y;
	gPotentialDeadEndsToPurge.forEach(coors => {
		if (gField[coors.y][coors.x] == EMPTY) {			
			closeDeadEndRecursively(coors.x, coors.y);
		}
	});
	gPotentialDeadEndsToPurge = [];
}


var gTheoricalMinimum;
function conclusion_18_2() {
	initP2();
	gBestDistance = -1;
	makeKeyUnlockingGraph();
	var availableKeys = [];
	for (var key = 0 ; key < gNbKeys ; key++) {
		if (gKeysDataBuild[key] != null && gKeysUnlockingInfo[key].notUnlockedYet == 0) {
			availableKeys.push(key);
		}
	}
	gKeysDataDistBuild = generateArrangedArray(gNbKeys, function(){return {isInDeadEnd : false}});
	gKeysTakenSoFar = [];
	generateDistanceArray(true);
	var startingPositions = generateArray(gNbSectors, gNbKeys);
	gTheoricalMinimum = findTheoricalMinimumDistance();
	
	findBestPathP2(startingPositions, availableKeys, gExtraDistance-totalDistanceSectorsFromStart());
	return gBestDistance;
}

// TODO : can be optimized again I guess.
function findBestPathP2(p_startPoints, p_keysToTake, p_distance) {
	if (gBestDistance == gTheoricalMinimum) {
		return;
	}
	if (p_keysToTake.length == 0) {
		gBestDistance = (gBestDistance == -1 ? p_distance : Math.min(p_distance, gBestDistance));
		return;
	}
	var sector, formerPoint;
	var newKeysToTake;
	p_keysToTake.forEach(key => {
		newKeysToTake = p_keysToTake.filter(function(key2) {return key2 != key}); // TODO Warning : absolutely not efficient ! In our example there are only 26 keys, but beware !
		// Make all new keys available
		gKeysUnlockingInfo[key].unlocks.forEach(key2 => {
			gKeysUnlockingInfo[key2].notUnlockedYet--;
		});
		gKeysUnlockingInfo[key].unlocks.forEach(key2 => { // This way, no risk of duplicates
			if (gKeysUnlockingInfo[key2].notUnlockedYet == 0) {
				newKeysToTake.push(key2);
			}
		}); 
		// Run to that key
		gKeysTakenSoFar.push(key);
		sector = gKeysDataDistBuild[key].sector;
		formerPoint = p_startPoints[sector];
		p_startPoints[sector] = key;
		findBestPathP2(p_startPoints, newKeysToTake, p_distance + gDistance[key][formerPoint]);
		p_startPoints[sector] = formerPoint;
		gKeysTakenSoFar.pop();
		// Re-make all keys unavailable
		gKeysUnlockingInfo[key].unlocks.forEach(key2 => {
			gKeysUnlockingInfo[key2].notUnlockedYet++;
		});
		
	});
}

function findTheoricalMinimumDistance() {
	// For each sector, find the deepest key in a dead end, add each branch twice (each section of each branch is run twice except the deepest one, which has all its sections run only once)
	var values;
	var total = gExtraDistance;
	for (var sector = 0 ; sector < gNbSectors ; sector++) {
		values = findTheoricalDataInSector(gSectorBranches[sector], 0);
		total += values.total*2-values.deepest;
	}
	return total;
}

function findTheoricalDataInSector(p_listNodes) {
	var answer = {deepest : 0, total : 0}
	for (var i = 0 ; i < p_listNodes.length ; i++) {
		answer.total += p_listNodes[i].distanceFromPrecedent;
	}
	answer.deepest = p_listNodes[p_listNodes.length-1].depth;
	var answer2;
	for (var j = 0 ; j < p_listNodes[p_listNodes.length-1].separation.length ; j++) {
		answer2 = findTheoricalDataInSector(p_listNodes[p_listNodes.length-1].separation[j]);
		answer.deepest = Math.max(answer.deepest, answer2.deepest);
		answer.total += answer2.total;
	}
	return answer;
}