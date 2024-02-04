function distanceSpiral(p_input) {
	var sr = Math.ceil(Math.sqrt(p_input));
	sr += ((sr+1) % 2); // First odd above the square root;
	var rm = sr*sr-p_input;
	var sqs = sr-1;
	var x = sqs/2;
	var y = sqs/2;
	if (rm >= sqs) {
		x = -sqs/2;
		rm -= sqs;
		if (rm >= sqs) {
			y = -sqs/2;
			rm -= sqs;
			if (rm >= sqs) {
				x = sqs/2;
				rm -= sqs;
				y += rm;
			} else {
				x += rm;
			}
		} else {
			y -= rm;
		}
	} else {
		x -= rm;
	}
	
	return Math.abs(x) + Math.abs(y);
}

function conclusion_3_1() {
	return distanceSpiral(325489);
}


function sumNeighbors(ea, p_x, p_y) {
	var answer = 0;
	const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
	const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
	var v;
	for (var i = 0 ; i < 8 ; i++) {		
		v = ea.get(p_x + dx[i], p_y + dy[i]);
		if (v != -1) {
			answer += v;
		}
	}
	return answer;
}

function conclusion_3_2() {
	const input = 325489;
	var ea = new ExpandableArray(3, 3, 100, 100, 0, 0, -1);
	ea.put(0, 0, 1);
	var n = 0;
	var dir = DIRECTION.RIGHT;
	var x, y, radius;
	x = 0; 
	y = 0;
	radius = 0;
	while (n < input) {
		if (y == radius) {
			if (x == radius+1) {
				dir = DIRECTION.UP;
				radius++;
			} else {
				dir = DIRECTION.RIGHT;
			}
		} else if (x == -radius) {
			dir = DIRECTION.DOWN;
		} else if (y == -radius) {
			dir = DIRECTION.LEFT;
		} else {
			dir = DIRECTION.UP;
		}
		x += DeltaX[dir];;
		y += DeltaY[dir];
		n = sumNeighbors(ea, x, y);
		ea.put(x, y, n);
	}
	return n;
}

