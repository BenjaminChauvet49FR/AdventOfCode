function conclusion_14_1() {
	var answer = 0;
	var binary;
	for (var k = 0 ; k <= 127 ; k++) {
		binary = hexadecimalToBinary(makeKnotHash("ugkiagan"+"-"+k));
		binary.forEach(bool => {
			if (bool) {
				answer++;
			}
		});
	}
	return answer;
}

function conclusion_14_2() {
	var answer = 0;
	var binary;
	var field = [];
	for (var k = 0 ; k <= 127 ; k++) {
		binary = hexadecimalToBinary(makeKnotHash("ugkiagan"+"-"+k));
		field.push(generateArrangedArray(binary.length, function(x) {
			var y = x-(128-binary.length);
			return (y >= 0 && binary[y]); // Yeah, my bad, all binary arrays don't have a fixed length...
		}));
	}
	// Count the number of regions !
	var x, y, total;
	var answer = 0;
	for (y = 0 ; y < field.length ; y++) {
		for (x = 0 ; x < field[0].length ; x++) {
			total = countRegionSizeAndFill(field, false, x, y); // It should be filled from TRUE to FALSE, not the other way around !!!! Wow, two mistakes !
			if (total > 0) {
				answer++;
			}
		}
	}
	return answer;
}