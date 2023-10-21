rawDataInit = "##..#..##.#....##.#..#.#.##.#.#.######..##.#.#.####.#..#...##...#....#....#.##.###..#..###...#...#.."

rawDataCombi = [
"#..#. => .",
".#..# => #",
"..#.# => .",
"..... => .",
".#... => #",
"#..## => #",
"..##. => #",
"#.##. => #",
"#.#.# => .",
"###.# => #",
".#### => .",
"..### => .",
".###. => .",
"#.#.. => #",
"###.. => .",
"##.#. => .",
"##..# => .",
"##.## => .",
"#.### => .",
"...## => #",
"##... => #",
"####. => .",
".#.## => .",
"#...# => #",
".#.#. => #",
"....# => .",
".##.. => .",
"...#. => .",
"..#.. => .",
"#.... => .",
".##.# => #",
"##### => #"];

var code;
// To each combination in binary (ABCDE : 16A+8B+4C+2D+E), give its matching status
const BINARY_CODE = [16, 8, 4, 2, 1];

function init() {
	code = generateArray(32, false);
	var tokens, number;
	rawDataCombi.forEach(str => {
		tokens = str.split(" ");
		number = 0;
		for (var i = 0 ; i <= 4 ; i++) {			
			number += (tokens[0].charAt(i) == '#' ? BINARY_CODE[i] : 0);
		}
		code[number] = (tokens[2] == '#');
	});
}

function conclusion_12_1() {
	init();
	const NB_GENERATIONS = 20;
	// So, pots that match rawDataInit at start are from (NB_GENERATIONS+2) à (NB_GENERATIONS+2+rawData-1) .
	const nbPots = NB_GENERATIONS*2+4+rawDataInit.length
	pots = generateDoubleEntryArray(nbPots, 2, false);
	var formerIndex = 0;
	var newIndex = 1;
	for (var i = 0 ; i < rawDataInit.length ; i++) {
		pots[formerIndex][i+NB_GENERATIONS+2] = (rawDataInit.charAt(i) == '#');
	}
	var sum;
	for (var i = 0 ; i < NB_GENERATIONS ; i++) {
		for (var k = 2 ; k < nbPots-2 ; k++) {			
			sum = 0;
			for (var j = -2 ; j <= 2 ; j++) {
				sum += (pots[formerIndex][k+j] ? BINARY_CODE[j+2] : 0);
			}
			pots[newIndex][k] = code[sum];
		}
		formerIndex = 1-formerIndex;
		newIndex = 1-newIndex;
	}
	// The lastly updated index was "former index", and remember that the pot number 0 is at index (NB_GENERATIONS+2).
	var answer = 0;
	for (var k = 0 ; k < nbPots ; k++) {
		if (pots[formerIndex][k]) {
			answer += (k-(NB_GENERATIONS+2));
		}
	}
	return answer;
}