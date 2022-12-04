const DIRECTION = {LEFT : 0, UP : 1, RIGHT : 2, DOWN : 3, UNDECIDED : -1}
const DeltaX = [-1, 0, 1, 0];
const DeltaY = [0, -1, 0, 1];
const OppositeDirection = [2, 3, 0, 1];
const TurningRightDirection = [1, 2, 3, 0];
const TurningLeftDirection = [3, 0, 1, 2];
const OrthogonalDirections = [[1, 3], [0, 2], [1, 3], [0, 2]];
const KnownDirections = [DIRECTION.LEFT, DIRECTION.UP, DIRECTION.RIGHT, DIRECTION.DOWN];
const ORIENTATION = {HORIZONTAL : 0, VERTICAL : 1}
const KnownOrientations = [ORIENTATION.HORIZONTAL, ORIENTATION.VERTICAL];
const OrientationDirection = [ORIENTATION.HORIZONTAL, ORIENTATION.VERTICAL, ORIENTATION.HORIZONTAL, ORIENTATION.VERTICAL]
const OrthogonalOrientationDirection = [ORIENTATION.VERTICAL, ORIENTATION.HORIZONTAL, ORIENTATION.VERTICAL, ORIENTATION.HORIZONTAL]

const LabelDirection = ['l', 'u', 'r', 'd'];
function stringDirection(p_dir) {
	return LabelDirection[p_dir];
}
const LabelOrientation = ['h', 'v'];
function stringOrientation(p_dir) {
	return LabelOrientation[p_dir];
}



function leftNeighborExists(p_x) {
	return p_x > 0;
}

function upNeighborExists(p_y) {
	return p_y > 0;
}

function rightNeighborExists(p_x, p_limit) {
	return p_x <= p_limit - 2;
}

function downNeighborExists(p_y, p_limit) {
	return p_y <= p_limit - 2;
}

// Below functions are mostly for editors and not solvers.
existingNeighborsDirections = function(p_x, p_y, p_xLength, p_yLength) {
	var resultDirs = [];
	if (leftNeighborExists(p_x)) {
		resultDirs.push(DIRECTION.LEFT);
	}
	if (upNeighborExists(p_y)) {
		resultDirs.push(DIRECTION.UP);
	}
	if (rightNeighborExists(p_x, p_xLength)) { 
		resultDirs.push(DIRECTION.RIGHT);
	}
	if (downNeighborExists(p_y, p_yLength)) {
		resultDirs.push(DIRECTION.DOWN);
	}
	return resultDirs;
}

existingNeighborsCoors = function(p_x, p_y, p_xLength, p_yLength) {
	var resultCoors = [];
	if (leftNeighborExists(p_x)) {
		resultCoors = [{x : p_x-1, y : p_y}];
	}
	if (upNeighborExists(p_y)) {
		resultCoors.push({x : p_x, y : p_y-1});
	}
	if (rightNeighborExists(p_x, p_xLength)) { // No reuse of the function below, sorry
		resultCoors.push({x : p_x+1, y : p_y});
	}
	if (downNeighborExists(p_y, p_yLength)) {
		resultCoors.push({x : p_x, y : p_y+1});
	}
	return resultCoors;
}

existingNeighborsCoorsDirections = function(p_x, p_y, p_xLength, p_yLength) {
	var resultCoorsDirs = [];
	if (leftNeighborExists(p_x)) {
		resultCoorsDirs = [{x : p_x-1, y : p_y, direction : DIRECTION.LEFT}];
	}
	if (upNeighborExists(p_y)) {
		resultCoorsDirs.push({x : p_x, y : p_y-1, direction : DIRECTION.UP});
	}
	if (rightNeighborExists(p_x, p_xLength)) { // No reuse of the function below, sorry
		resultCoorsDirs.push({x : p_x+1, y : p_y, direction : DIRECTION.RIGHT});
	}
	if (downNeighborExists(p_y, p_yLength)) {
		resultCoorsDirs.push({x : p_x, y : p_y+1, direction : DIRECTION.DOWN});
	}
	return resultCoorsDirs;
}

existingRDNeighborsCoorsDirections = function(p_x, p_y, p_xLength, p_yLength) {
	var resultCoorsDirs = [];
	if (rightNeighborExists(p_x, p_xLength)) {
		resultCoorsDirs.push({x : p_x+1, y : p_y, direction : DIRECTION.RIGHT});
	}
	if (downNeighborExists(p_y, p_yLength)) {
		resultCoorsDirs.push({x : p_x, y : p_y+1, direction : DIRECTION.DOWN});
	}
	return resultCoorsDirs;
}

// Now, only booleans
function neighborExists(p_x, p_y, p_xLength, p_yLength, p_dir) {
	switch (p_dir) {
		case DIRECTION.LEFT : return p_x > 0;
		case DIRECTION.UP : return p_y > 0;
		case DIRECTION.RIGHT : return p_x <= p_xLength - 2;
		case DIRECTION.DOWN : return p_y <= p_yLength - 2;
	}
}

// Warning : no equivalent in grid_is_good
// Also assumes all spaces exist with coors 0..p_yLength-1, 0..p_xLength-1 and that order of output doesn't matter
function existingOrthoDiagonalNeighborsCoors(p_x, p_y, p_xLength, p_yLength) {
	var result = [];
	const upExists = this.neighborExists(p_x, p_y, p_xLength, p_yLength, DIRECTION.UP); 
	const downExists = this.neighborExists(p_x, p_y, p_xLength, p_yLength, DIRECTION.DOWN); 
	if (p_x > 0) {
		if (upExists) {
			result.push({x : p_x-1, y : p_y-1});
		}
		if (downExists) {
			result.push({x : p_x-1, y : p_y+1});
		}
		result.push({x : p_x-1, y : p_y});
	}
	if (p_x <= p_xLength-2) {
		if (upExists) {
			result.push({x : p_x+1, y : p_y-1});
		}
		if (downExists) {
			result.push({x : p_x+1, y : p_y+1});
		}
		result.push({x : p_x+1, y : p_y});
	}		
	if (upExists) {
		result.push({x : p_x, y : p_y-1});		
	}
	if (downExists) {
		result.push({x : p_x, y : p_y+1});		
	}
	return result;
}
