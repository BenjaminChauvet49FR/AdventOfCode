/*
// Official data :
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
"##### => #"];*/

/*// Example data :
rawDataInit = "#..#.#..##......###...###"

rawDataCombi = [
"...## => #",
"..#.. => #",
".#... => #",
".#.#. => #",
".#.## => #",
".##.. => #",
".#### => #",
"#.#.# => #",
"#.### => #",
"##.#. => #",
"##.## => #",
"###.. => #",
"###.# => #",
"####. => #"];*/

// Github account data
rawDataInit="##...#......##......#.####.##.#..#..####.#.######.##..#.####...##....#.#.####.####.#..#.######.##...";
rawDataCombi = [
"#.... => .",
"#..## => #",
"....# => .",
"...#. => .",
"...## => #",
"#.#.# => .",
".#... => #",
"##.#. => .",
"..#.# => .",
".##.# => #",
"###.# => #",
".#.## => .",
"..... => .",
"##### => #",
"###.. => .",
"##..# => #",
"#.### => #",
"#.#.. => .",
"..### => .",
"..#.. => .",
".#..# => #",
".##.. => #",
"##... => #",
".#.#. => #",
".###. => #",
"#..#. => .",
"####. => .",
".#### => #",
"#.##. => #",
"##.## => .",
"..##. => .",
"#...# => #"]

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

function conclusion_12_2() {
	init();
	const NB_GENERATIONS = 300;
	var stringLog;
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
		stringLog = "";
		for (var k = 2 ; k < nbPots-2 ; k++) {
			stringLog += pots[formerIndex][k] ? "#" : ".";
		}
		//console.log(stringLog);
		// I'm not proud, but I saw that after 300 generatons all plants have died out except a few one that move to the right ! So... let's do the math !
		// Note : this also happened with the provided example and with my Github account
	}
	// The lastly updated index was "former index", and remember that the pot number 0 is at index (NB_GENERATIONS+2).
	var answer = 0;
	var nbPotsA = 0;
	for (var k = 0 ; k < pots[formerIndex].length ; k++) {
		if (pots[formerIndex][k]) {
			answer += (k-(NB_GENERATIONS+2));
			nbPotsA++;
		}
	}
	return answer + (nbPotsA * (50000000000-NB_GENERATIONS));
}