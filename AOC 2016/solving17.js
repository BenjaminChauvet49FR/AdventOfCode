function conclusion_17_1() {
	return conclusion_17_aux(false);
}

var gBest = 0;
function conclusion_17_2() {
//	return conclusion_17_aux(true); Nope ! Way too long !
	gBest = 0;
	conclusion_17_rec("", 0, 0);
	return gBest;
}

function conclusion_17_aux(p_isPart2) {
	var xLimit = 3;
	var yLimit = 3;
	var pathsToTest = [{path : "", x : 0, y : 0}];
	var nextPathsToTest;
	var salt = "qljzarfv";
	var ptt;
	var md5result;
	var distanceAnswerP2 = 0;
	while(pathsToTest.length > 0) {		
		nextPathsToTest = [];
		// All paths in pathsToTest have the same distance
		for (var i = 0 ; i < pathsToTest.length ; i++) {
			ptt = pathsToTest[i];
			if (ptt.x == xLimit && ptt.y == yLimit) {
				if (!p_isPart2) {
					return ptt.path;
				} else {
					continue;
				}
			}
			md5result = md5(salt+ptt.path); // first 4 characters = up, down, left, right
			if (ptt.y > 0 && isCharOpen(md5result, 0)) {
				nextPathsToTest.push({path : ptt.path+"U", x : ptt.x, y : ptt.y-1});
			}
			if (ptt.y <= yLimit && isCharOpen(md5result, 1)) {
				nextPathsToTest.push({path : ptt.path+"D", x : ptt.x, y : ptt.y+1});
			}
			if (ptt.x > 0 && isCharOpen(md5result, 2)) {
				nextPathsToTest.push({path : ptt.path+"L", x : ptt.x-1, y : ptt.y});
			}
			if (ptt.x <= xLimit && isCharOpen(md5result, 3)) {
				nextPathsToTest.push({path : ptt.path+"R", x : ptt.x+1, y : ptt.y});
			}
		}
		// (almost) no use to sort the password because we have to test ALL of them. That's hash ! Position only is irrelevant.
		pathsToTest = nextPathsToTest;
		distanceAnswerP2++;
	}
	return distanceAnswerP2-1;
}

const gXLimit = 3;
const gYLimit = 3;
const gSalt = "qljzarfv";

/* NOOOOO ! Maximum call stack size exceeded !
function conclusion_17_rec(p_path, p_x, p_y) {
	var md5result;
	if (p_x == gXLimit && p_y == gYLimit) {
		if (p_path.length > gBest) {
			gBest = p_path.length;
		}
		return;
	}
	md5result = md5(gSalt+p_path); // first 4 characters = up, down, left, right
	if (p_y > 0 && isCharOpen(md5result, 0)) {
		conclusion_17_rec(p_path+"U", p_x, p_y-1);
	}
	if (p_y <= gYLimit && isCharOpen(md5result, 1)) {
		conclusion_17_rec(p_path+"D", p_x, p_y+1);
	}
	if (p_x > 0 && isCharOpen(md5result, 2)) {
		conclusion_17_rec(p_path+"L", p_x-1, p_y);
	}
	if (p_x <= gXLimit && isCharOpen(md5result, 3)) {
		conclusion_17_rec(p_path+"R", p_x+1, p_y);
	}
}*/




function isCharOpen(p_str, p_pos) {
	var t = charToASCIIRelativePosition(p_str.charAt(p_pos), 'b');
	return t >= 0 && t <= 5;
}

