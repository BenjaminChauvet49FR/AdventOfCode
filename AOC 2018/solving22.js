function conclusion_22_1() {
	var total = 0;
	var type;
	var geologic, erosion;
	var erosionsPreviousRow = [];
	var x, y;
	const XL = 9;
	const YL = 731;
	const DEPTH = 11109;
	/*const XL = 10;
	const YL = 10;
	const DEPTH = 510;*/
	// First line
	for (x = 0 ; x <= XL ; x++) {
		geologic = x*16807
		erosion = (geologic+DEPTH)%20183;
		erosionsPreviousRow.push(erosion);
		total += (erosion%3); // Type !
	}	
	// Next lines
	for (y = 1 ; y <= YL ; y++) {
		for (x = 0 ; x <= XL ; x++) {
			if (x == 0) {
				geologic = y*48271;
			} else {
				geologic = erosionsPreviousRow[x]*previousErosion;
			}
			if (x == XL && y == YL) {
				geologic = 0;
			}
			erosion = (geologic+DEPTH)%20183;
			erosionsPreviousRow[x] = erosion;
			previousErosion = erosion;
			total += (erosion%3); // Type !
		}
	}	
	return total;
}

