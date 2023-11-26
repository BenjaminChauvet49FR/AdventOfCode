function conclusion_25_1() {
	var x = 1;
	var y = 1;
	var answer = 20151125;
	var mul = 252533;
	var modulus = 33554393;
	do {
		if (y > 1) {
			x++;
			y--;
		} else { // Good thing the above condition is NOT tested again... right ?
			y = x+1;
			x = 1;
		}
		answer *= mul;
		answer %= modulus;
	} while (y != 2947 || x != 3029);
	return answer;
}