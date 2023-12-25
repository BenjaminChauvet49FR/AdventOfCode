const rawData = [
"abcccccccaaaaaaaaccccccccccaaaaaaccccccaccaaaaaaaccccccaacccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccaaaaa",
"abcccccccaaaaaaaaacccccccccaaaaaacccccaaacaaaaaaaaaaaccaacccccccccccaaaaaaccccccccccccccccccccccccccccccccccaaaaa",
"abcccccccaaaaaaaaaaccccccccaaaaaacaaacaaaaaaaaaaaaaaaaaaccccccccccccaaaaaaccccccccccccccaaacccccccccccccccccaaaaa",
"abaaacccccccaaaaaaacccccccccaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccccccccaaaaaaccccccccccccccaaacccccccccccccccccaaaaa",
"abaaaaccccccaaaccccccccccccccccccccaaaaaaaaacaaaacacaaaaaacccccccccaaaaaaaacccccccccccccaaaaccaaacccccccccccaccaa",
"abaaaaccccccaaccccaaccccccccccccccccaaaaaaacaaaaccccaaaaaccccccccccccccccacccccccccccccccaaaaaaaaacccccccccccccca",
"abaaaaccccccccccccaaaacccccccccaacaaaaaaaacccaaacccaaacaacccccccccccccccccccccccccccciiiiaaaaaaaacccccccccccccccc",
"abaaacccccccccccaaaaaacccccccccaaaaaaaaaaacccaaacccccccaacccccccccccaacccccccccccccciiiiiiijaaaaccccccccaaccccccc",
"abaaaccccccccccccaaaacccccccccaaaaaaaacaaacccaaaccccccccccccccccccccaaacaaacccccccciiiiiiiijjjacccccccccaaacccccc",
"abcccccaacaacccccaaaaaccccccccaaaaaacccccacaacccccccccccccccccccccccaaaaaaaccccccciiiinnnoijjjjjjjjkkkaaaaaaacccc",
"abcccccaaaaacccccaacaaccccccccccaaaacccaaaaaaccccccccccccccccccccccccaaaaaaccccccciiinnnnooojjjjjjjkkkkaaaaaacccc",
"abccccaaaaacccccccccccccccccccccaccccccaaaaaaaccccccccccccccccccccaaaaaaaaccccccchhinnnnnoooojjooopkkkkkaaaaccccc",
"abccccaaaaaaccccccccccccccccccccccccccccaaaaaaacccccccccccccccccccaaaaaaaaacccccchhhnnntttuooooooopppkkkaaaaccccc",
"abccccccaaaaccccccccccacccccccccccccccccaaaaaaacccaaccccccccccccccaaaaaaaaaaccccchhhnnttttuuoooooppppkkkaaaaccccc",
"abccccccaccccccccccccaaaacaaaccccccccccaaaaaacaaccaacccaaccccccccccccaaacaaacccchhhnnnttttuuuuuuuuupppkkccaaccccc",
"abccccccccccccccaaccccaaaaaaaccccccccccaaaaaacaaaaaacccaaaaaaccccccccaaacccccccchhhnnntttxxxuuuuuuupppkkccccccccc",
"abcccccccccccccaaaacccaaaaaaacccaccccccccccaaccaaaaaaacaaaaaaccccccccaacccaaccchhhhnnnttxxxxuuyyyuupppkkccccccccc",
"abcccccccccccccaaaaccaaaaaaaaacaaacccccccccccccaaaaaaaaaaaaaccccccccccccccaaachhhhmnnnttxxxxxxyyyuvppkkkccccccccc",
"abcccccccccccccaaaacaaaaaaaaaaaaaaccccccccccccaaaaaacaaaaaaaccccccccccccccaaaghhhmmmttttxxxxxyyyyvvpplllccccccccc",
"abccacccccccccccccccaaaaaaaaaaaaaaccccccccccccaaaaaacccaaaaaacccaacaacccaaaaagggmmmttttxxxxxyyyyvvppplllccccccccc",
"SbaaaccccccccccccccccccaaacaaaaaaaacccccccccccccccaacccaaccaacccaaaaacccaaaagggmmmsttxxxEzzzzyyvvvppplllccccccccc",
"abaaaccccccccccccccccccaaaaaaaaaaaaacaaccccccccccccccccaaccccccccaaaaaccccaagggmmmsssxxxxxyyyyyyvvvqqqlllcccccccc",
"abaaacccccccccccccccccccaaaaaaaaaaaaaaaaacccccccccccccccccccccccaaaaaaccccaagggmmmsssxxxwywyyyyyyvvvqqlllcccccccc",
"abaaaaacccccccccccccccccccaacaaaccaaaaaaacccccccccccccccccccccccaaaaccccccaagggmmmssswwwwwyyyyyyyvvvqqqllcccccccc",
"abaaaaaccccccccccccccccccccccaaaccccaaaacccccccccccccccccaaccaacccaaccccccccgggmmmmssssswwyywwvvvvvvqqqlllccccccc",
"abaaaaacccccccccccccaccacccccaaaccccaaaacccccccccccccccccaaaaaacccccccccccaaggggmllllsssswwywwwvvvvqqqqlllccccccc",
"abaaccccccccccccccccaaaaccccccccccccaccaccccccccccccccccccaaaaacccccccccccaaagggglllllssswwwwwrrqqqqqqmmllccccccc",
"abaaccccccccccccccccaaaaaccccccaaccaaccccccccccccccccccccaaaaaaccaacccccccaaaaggfffllllsswwwwrrrrqqqqqmmmcccccccc",
"abacaaaccccccccccccaaaaaaccccccaaaaaaccccccaacccccccccccaaaaaaaacaaacaaccccaaaaffffflllsrrwwwrrrmmmmmmmmmcccccccc",
"abaaaaaccccccccccccaaaaaaccccccaaaaaccccccaaaaccccccccccaaaaaaaacaaaaaaccccaaaaccfffflllrrrrrrkkmmmmmmmccccaccccc",
"abaaaacccccccccccccccaaccccccccaaaaaacccccaaaacccccccccccccaaccaaaaaaaccccccccccccffflllrrrrrkkkmmmmmccccccaccccc",
"abaaacccccccccccccccccccccccccaaaaaaaaccccaaaacccccccccccccaaccaaaaaaacccccccccccccfffllkrrrkkkkmddddcccccaaacccc",
"abaaacccccccccccccccccccccccccaaaaaaaacccccccccccccccccccccccccccaaaaaaccccccccccccfffllkkkkkkkdddddddcaaaaaacccc",
"abaaaacccccccccccccccccccccccccccaaccccccccccccccccccccccccccccccaacaaacccccccccccccfeekkkkkkkddddddcccaaaccccccc",
"abcaaacccccccccccaaaccccccccaacccaaccccaaaaaccccaaaccccccccccccccaaccccccccccccccccceeeeekkkkdddddccccccaaccccccc",
"abccccccccccccccaaaaaaccccccaaacaaccacaaaaaaaccaaaaccccccccccaccaaccccccccccccccccccceeeeeeeedddacccccccccccccccc",
"abccccccccccccccaaaaaacccccccaaaaacaaaaaccaaaaaaaacccccccccccaaaaacccccccccccccccccccceeeeeeedaaacccccccccccccaaa",
"abccccccaaacccccaaaaacccccccaaaaaacaaaaaaaaaaaaaaaccccccccccccaaaaaccccccccccccccccccccceeeeecaaacccccccccccccaaa",
"abccccccaaaccccccaaaaacccccaaaaaaaaccaaaaacaaaaaaccccccccccccaaaaaacccccccccccccccccccccaaaccccaccccccccccccccaaa",
"abccccaacaaaaacccaaaaacccccaaaaaaaacaaaaaaaaaaaaaaaccccaaaaccaaaacccccccccccccccccccccccaccccccccccccccccccaaaaaa",
"abccccaaaaaaaaccccccccccccccccaaccccaacaaaaaaaaaaaaaaccaaaaccccaaacccccccccccccccccccccccccccccccccccccccccaaaaaa"
];

const gYSTART = 20;
const Y_END = 20;
const gXSTART = 0;
const X_END = 88;

/*const rawData = [
"Sabqponm",
"abcryxxl",
"accszExk",
"acctuvwj",
"abdefghi"
];
const gYSTART = 0;
const Y_END = 2;
const gXSTART = 0;
const X_END = 5;*/


const xLength = rawData[0].length;
const yLength = rawData.length;

function isAccessibleDestFromStart(p_xDest, p_yDest, p_xStart, p_yStart) {
	var dest = charToASCIIRelativePosition(rawData[p_yDest][p_xDest], 'a');
	var star = charToASCIIRelativePosition(rawData[p_yStart][p_xStart], 'a');
	if (rawData[p_yDest][p_xDest] == 'E') {
		dest = charToASCIIRelativePosition('z','a');
	}
	if (rawData[p_yStart][p_xStart] == 'S') {
		star = 0;
	}
	return (dest - star <= 1);
}

function conclusion_12_1() {
	var smallestCoors, x, y, xx, yy, dirTo;
	var notFound, coors;
	var minimalDistancesArray = generateDoubleEntryArray(xLength, yLength, -1);
	minimalDistancesArray[gYSTART][gXSTART] = 0;
	var distanceIfTakenCoors = 0;
	var spacesWithSmallestDistanceFoundDecreasing = [{x : gXSTART, y : gYSTART}];
	while (spacesWithSmallestDistanceFoundDecreasing.length > 0) {
		coors = spacesWithSmallestDistanceFoundDecreasing.pop();
		x = coors.x;
		y = coors.y;
		existingNeighborsCoors(x, y, xLength, yLength).forEach(coors => {
			yy = coors.y;
			xx = coors.x;
			if (minimalDistancesArray[yy][xx] == -1 && isAccessibleDestFromStart(xx, yy, x, y)) {
				minimalDistancesArray[yy][xx] = minimalDistancesArray[y][x] + 1;
				shiftIntoList(spacesWithSmallestDistanceFoundDecreasing, {x : xx, y : yy}, function(p_newCoors) {return -minimalDistancesArray[yy][xx]} );
			}
		});
	}
	return minimalDistancesArray[Y_END][X_END]; // Correct answer = 380
}

function gotchaA(p_x, p_y) {
	const charac = rawData[p_y][p_x];
	return charac == 'a' || charac == 'S';
}

function isAccessibleDestFromStartReverse(p_xDest, p_yDest, p_xStart, p_yStart) {
	var dest = charToASCIIRelativePosition(rawData[p_yDest][p_xDest], 'a');
	var star = charToASCIIRelativePosition(rawData[p_yStart][p_xStart], 'a');
	if (rawData[p_yDest][p_xDest] == 'S') {
		dest = 0;
	}
	if (rawData[p_yStart][p_xStart] == 'E') {
		star = charToASCIIRelativePosition('z','a');
	}
	return (star - dest <= 1);
}

function conclusion_12_2() {// Going down the hill ! Start at the end !
	var smallestCoors, x, y, xx, yy, dirTo;
	var notFound, coors;
	var minimalDistancesArray = generateDoubleEntryArray(xLength, yLength, -1);
	minimalDistancesArray[Y_END][X_END] = 0;
	var distanceIfTakenCoors = 0;
	var spacesWithSmallestDistanceFoundDecreasing = [{x : X_END, y : Y_END}];
	var foundASpotA = null;  // Coors of one space of altitude a.
	while (spacesWithSmallestDistanceFoundDecreasing.length > 0 && foundASpotA == null) {
		coors = spacesWithSmallestDistanceFoundDecreasing.pop();
		x = coors.x;
		y = coors.y;
		existingNeighborsCoors(x, y, xLength, yLength).forEach(coors => {
			yy = coors.y;
			xx = coors.x;
			if (minimalDistancesArray[yy][xx] == -1 && isAccessibleDestFromStartReverse(xx, yy, x, y)) {
				minimalDistancesArray[yy][xx] = minimalDistancesArray[y][x] + 1;
				if (foundASpotA == null && gotchaA(xx, yy)) {
					foundASpotA = {x : xx, y : yy, dist : minimalDistancesArray[yy][xx]};
				}
				shiftIntoList(spacesWithSmallestDistanceFoundDecreasing, {x : xx, y : yy}, function(p_newCoors) {return -minimalDistancesArray[yy][xx]} );
			}
		});
	}
	return foundASpotA;
} // Correct answer = 375