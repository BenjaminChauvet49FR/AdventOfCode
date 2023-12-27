const rawData = [
[-13, 14, -7],
[-18, 9, 0],
[0, -3, -3],
[-15, 3, -13]
];

var gPos;
var gVelo;

function conclusion_12_1() {
	gPos = [];
	for (var i = 0 ; i < rawData.length ; i++) {
		gPos.push(rawData[i].slice());
	}
	gVelo = generateDoubleEntryArray(rawData[0].length, rawData.length, 0);
	for (var i = 0 ; i < 1000 ; i++) {
		performStep();	
	}
	// Victory lap
	var answer = 0;
	var e1, e2;
	for (var i = 0 ; i < rawData.length ; i++) {
		e1 = 0;
		e2 = 0;
		for (var j = 0 ; j <= 2 ; j++) {
			e1 += Math.abs(gPos[i][j]);
			e2 += Math.abs(gVelo[i][j]);
		}
		answer += e1*e2;
	}
	
	return answer;
}

function performStep() {
	for (var i = 1 ; i < gPos.length ; i++) {
		for (var j = 0 ; j < i ; j++) {
			applyVelocities(i, j);
		}
	}
	for (var i = 0 ; i < gPos.length ; i++) {
		for (var j = 0 ; j <= 2 ; j++) {
			gPos[i][j] += gVelo[i][j];
		}
	}
}

function applyVelocities(p_i, p_j) {
	var pi, pj;
	for (var i = 0 ; i <= 2 ; i++) {
		pi = gPos[p_i][i];
		pj = gPos[p_j][i];
		if (pi < pj) {
			gVelo[p_i][i]++;
			gVelo[p_j][i]--;
		} else if (pi > pj) {
			gVelo[p_i][i]--;
			gVelo[p_j][i]++;			
		}
		
	}
}