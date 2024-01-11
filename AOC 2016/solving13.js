// C-P from 2019-15
function conclusion_13_1() {
	return conclusion_13_aux(false);
}

function conclusion_13_2() {
	return conclusion_13_aux(true);
}

function conclusion_13_aux(p_isPart2) {
	const xStart = 0;
	const yStart = 0;
	const eaCheck = new ExpandableArray(100, 100, 3, 3, 0, 0, -1);
	const eaLand = new ExpandableArray(100, 100, 3, 3, 0, 0, -1);
	var xGoal = 31;
	var yGoal = 39;
	var addVal = 1350;
/*	var xGoal = 7;
	var yGoal = 4;
	var addVal = 10;*/
	var distance = 0;
	var spacesToAnalyze = [{x : 1, y : 1}];
	var newSpacesToAnalyze = [];
	var found = false;
	var coors;
	var dx, dy;
	var count = 0; // Your starting location will eventually be counted
	while (spacesToAnalyze.length > 0) { // Start will have a distance of 2 :)
		newSpacesToAnalyze = [];
		if (p_isPart2 && distance == 50) { //ERROR : I was sure I needed to put 51 :( but I needed to debug to see I was wrong
			break;
		}
		for (var i = 0 ; i < spacesToAnalyze.length ; i++) {
			coors = spacesToAnalyze[i];
			if (!p_isPart2 && coors.x == xGoal && coors.y == yGoal) {
				return distance;
			}
			KnownDirections.forEach(dir => {			
				dx = coors.x+DeltaX[dir];
				dy = coors.y+DeltaY[dir];
				if (eaCheck.get(dx, dy) == -1 && canReach(dx, dy, addVal, eaLand)) {
					eaCheck.put(dx, dy, distance+1);
					newSpacesToAnalyze.push({x : dx, y : dy});
					count++;
				}
			});
		};
		spacesToAnalyze = [];
		copiesCoorsList(newSpacesToAnalyze, spacesToAnalyze);
		distance++;
	}
	return count;
} // TODO no generalized "distance-in-a-maze" algorithm ? Too bad...

function canReach(p_x, p_y, p_add, p_eaLand) {
	if (p_x == -1 || p_y == -1) {
		return false;
	}
	var val = p_eaLand.get(p_x, p_y);
	if (val != -1) {
		return (val == 0);
	}
	const value = p_x*p_x + 3*p_x + 2*p_x*p_y + p_y + p_y*p_y + p_add;
	const b = numberToBinary(value);
	val = 0;
	for (var i = 0 ; i < b.length ; i++) {
		val += (b[i] ? 1 : 0);
	}
	val %= 2;
	p_eaLand.put(p_x, p_y, val);
	return (val == 0);
}