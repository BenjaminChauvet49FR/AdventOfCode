var array;
const X_LENGTH = 300;
const Y_LENGTH = 300;
const SERIAL_NUMBER = 7803;

function init() {
	var number;
	array = generateDoubleEntryArray(Y_LENGTH+1, X_LENGTH+1, 0);
	for (var x = 1 ; x <= X_LENGTH ; x++) {
		for (var y = 1 ; y <= Y_LENGTH ; y++) {
			number = ((x+10)*y+SERIAL_NUMBER)*(x+10);
			number = Math.floor(number/100);
			number = number % 10; 
			array[x][y] = number-5;
		}
	}
}

function conclusion_11_1() {
	init();
	var best = {x : -1, y : -1, sum : -46}; // Min. is -45 cause each space is at least -5.
	var sum;
	const DeltaX = [0, 0, 0, 1, 1, 1, 2, 2, 2];
	const DeltaY = [0, 1, 2, 0, 1, 2, 0, 1, 2];
	for (var x = 1 ; x <= X_LENGTH-2 ; x++) {
		for (var y = 1 ; y <= Y_LENGTH-2 ; y++) {
			sum = 0;
			for (var k = 0 ; k < 9 ; k++) {				
				sum += array[x+DeltaX[k]][y+DeltaY[k]];
			}
			if (sum > best.sum) {
				best.x = x;
				best.y = y;
				best.sum = sum;
			}
		}
	}
	return best;
}

function conclusion_11_2() {
	init();
	var best = {x : -1, y : -1, size : 0, sum : -46}; 
	var sum;
	for (size = 0 ; size <= X_LENGTH ; size++) {		
		for (var x = 1 ; x <= X_LENGTH-size-1 ; x++) {
			// Window starts in x, x+size-1, and goes down, then shifts 1 right, then back up...
			sum = totalizeRange(x, 1, x+size-1, size);
			if (sum > best.sum) {
				best.x = x;
				best.y = 1;
				best.size = size;
				best.sum = sum;
			}
			for (var y = 2 ; y+size-1 <= Y_LENGTH ; y++) {
				sum += totalizeRange(x, y+size-1, x+size-1, y+size-1);
				sum -= totalizeRange(x, y-1, x+size-1, y-1);
				if (sum > best.sum) {
					best.x = x;
					best.y = y;
					best.size = size;
					best.sum = sum;
				}
			}
		}
	}
	return best;	
}

function totalizeRange(p_xMin, p_yMin, p_xMax, p_yMax) {
	var sum = 0;
	for (var x = p_xMin ; x <= p_xMax ; x++) {
		for (var y = p_yMin ; y <= p_yMax ; y++) {
			sum += array[x][y];
		}
	}
	return sum;
}