const rawData="L2, L5, L5, R5, L2, L4, R1, R1, L4, R2, R1, L1, L4, R1, L4, L4, R5, R3, R1, L1, R1, L5, L1, R5, L4, R2, L5, L3, L3, R3, L3, R4, R4, L2, L5, R1, R2, L2, L1, R3, R4, L193, R3, L5, R45, L1, R4, R79, L5, L5, R5, R1, L4, R3, R3, L4, R185, L5, L3, L1, R5, L2, R1, R3, R2, L3, L4, L2, R2, L3, L2, L2, L3, L5, R3, R4, L5, R1, R2, L2, R4, R3, L4, L3, L1, R3, R2, R1, R1, L3, R4, L5, R2, R1, R3, L3, L2, L2, R2, R1, R2, R3, L3, L3, R4, L4, R4, R4, R4, L3, L1, L2, R5, R2, R2, R2, L4, L3, L4, R4, L5, L4, R2, L4, L4, R4, R1, R5, L2, L4, L5, L3, L2, L4, L4, R3, L3, L4, R1, L2, R3, L2, R1, R2, R5, L4, L2, L1, L3, R2, R3, L2, L1, L5, L2, L1, R4";

function conclusion_1_1() {
	var tokens = rawData.split(", ");
	var n;
	var x = 0;
	var y = 0;
	var dir = DIRECTION.UP;
	for (var i = 0 ; i < tokens.length ; i++) {
		n = parseInt(tokens[i].substring(1), 10);
		switch(tokens[i].charAt(0)) {
			case 'L' : dir = TurningLeftDirection[dir]; break;
			case 'R' : dir = TurningRightDirection[dir]; break;
		}
		x += DeltaX[dir] * n;
		y += DeltaY[dir] * n;
	}
	return Math.abs(x) + Math.abs(y);
}

function conclusion_1_2() {
	var tokens = rawData.split(", ");
	var n;
	var x = 0;
	var y = 0;
	var dir = DIRECTION.UP;
	var ea = new ExpandableArray(100, 100, 100, 100, 0, 0, false);
	for (var i = 0 ; i < tokens.length ; i++) {
		n = parseInt(tokens[i].substring(1), 10);
		switch(tokens[i].charAt(0)) {
			case 'L' : dir = TurningLeftDirection[dir]; break;
			case 'R' : dir = TurningRightDirection[dir]; break;
		}
		for (var j = 0 ; j < n ; j++) {
			x += DeltaX[dir];
			y += DeltaY[dir];
			if (ea.get(x, y)) {				
				return Math.abs(x) + Math.abs(y);
			}
			ea.put(x, y, true);
		}
	}
}