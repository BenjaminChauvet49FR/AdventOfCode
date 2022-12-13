const rawData2 = [
"addx 15",
"addx -11",
"addx 6",
"addx -3",
"addx 5",
"addx -1",
"addx -8",
"addx 13",
"addx 4",
"noop",
"addx -1",
"addx 5",
"addx -1",
"addx 5",
"addx -1",
"addx 5",
"addx -1",
"addx 5",
"addx -1",
"addx -35",
"addx 1",
"addx 24",
"addx -19",
"addx 1",
"addx 16",
"addx -11",
"noop",
"noop",
"addx 21",
"addx -15",
"noop",
"noop",
"addx -3",
"addx 9",
"addx 1",
"addx -3",
"addx 8",
"addx 1",
"addx 5",
"noop",
"noop",
"noop",
"noop",
"noop",
"addx -36",
"noop",
"addx 1",
"addx 7",
"noop",
"noop",
"noop",
"addx 2",
"addx 6",
"noop",
"noop",
"noop",
"noop",
"noop",
"addx 1",
"noop",
"noop",
"addx 7",
"addx 1",
"noop",
"addx -13",
"addx 13",
"addx 7",
"noop",
"addx 1",
"addx -33",
"noop",
"noop",
"noop",
"addx 2",
"noop",
"noop",
"noop",
"addx 8",
"noop",
"addx -1",
"addx 2",
"addx 1",
"noop",
"addx 17",
"addx -9",
"addx 1",
"addx 1",
"addx -3",
"addx 11",
"noop",
"noop",
"addx 1",
"noop",
"addx 1",
"noop",
"noop",
"addx -13",
"addx -19",
"addx 1",
"addx 3",
"addx 26",
"addx -30",
"addx 12",
"addx -1",
"addx 3",
"addx 1",
"noop",
"noop",
"noop",
"addx -9",
"addx 18",
"addx 1",
"addx 2",
"noop",
"noop",
"addx 9",
"noop",
"noop",
"noop",
"addx -1",
"addx 2",
"addx -37",
"addx 1",
"addx 3",
"noop",
"addx 15",
"addx -21",
"addx 22",
"addx -6",
"addx 1",
"noop",
"addx 2",
"addx 1",
"noop",
"addx -10",
"noop",
"noop",
"addx 20",
"addx 1",
"addx 2",
"addx 2",
"addx -6",
"addx -11",
"noop",
"noop",
"noop"
];

const rawData = [
"noop",
"noop",
"addx 6",
"addx -1",
"noop",
"addx 5",
"addx 3",
"noop",
"addx 3",
"addx -1",
"addx -13",
"addx 17",
"addx 3",
"addx 3",
"noop",
"noop",
"noop",
"addx 5",
"addx 1",
"noop",
"addx 4",
"addx 1",
"noop",
"addx -38",
"addx 5",
"noop",
"addx 2",
"addx 3",
"noop",
"addx 2",
"addx 2",
"addx 3",
"addx -2",
"addx 5",
"addx 2",
"addx -18",
"addx 6",
"addx 15",
"addx 5",
"addx 2",
"addx -22",
"noop",
"noop",
"addx 30",
"noop",
"noop",
"addx -39",
"addx 1",
"addx 19",
"addx -16",
"addx 35",
"addx -28",
"addx -1",
"addx 12",
"addx -8",
"noop",
"addx 3",
"addx 4",
"noop",
"addx -3",
"addx 6",
"addx 5",
"addx 2",
"noop",
"noop",
"noop",
"noop",
"noop",
"addx 7",
"addx -39",
"noop",
"noop",
"addx 5",
"addx 2",
"addx 2",
"addx -1",
"addx 2",
"addx 2",
"addx 5",
"addx 1",
"noop",
"addx 4",
"addx -13",
"addx 18",
"noop",
"noop",
"noop",
"addx 12",
"addx -9",
"addx 8",
"noop",
"noop",
"addx -2",
"addx -36",
"noop",
"noop",
"addx 5",
"addx 2",
"addx 3",
"addx -2",
"addx 2",
"addx 2",
"noop",
"addx 3",
"addx 5",
"addx 2",
"addx 19",
"addx -14",
"noop",
"addx 2",
"addx 3",
"noop",
"addx -29",
"addx 34",
"noop",
"addx -35",
"noop",
"addx -2",
"addx 2",
"noop",
"addx 6",
"noop",
"noop",
"noop",
"noop",
"addx 2",
"noop",
"addx 3",
"addx 2",
"addx 5",
"addx 2",
"addx 1",
"noop",
"addx 4",
"addx -17",
"addx 18",
"addx 4",
"noop",
"addx 1",
"addx 4",
"noop",
"addx 1",
"noop",
"noop"
];

function conclusion_10_1() {
	var step, j, tokens;
	var x = 1;
	var total = 0;
	var duringCycle = 1;
	var coef = 20;
	var value, delay;
	const data = rawData2;
	for (step = 0 ; step < data.length ; step++) {
		tokens = data[step].split(" "); 
		if (tokens.length == 2) {
			value = parseInt(tokens[1],10);
			delay = 2;
		} else {
			value = 0;
			delay = 1;
		}
		for (j = 0 ; j < delay ; j++) {			
			console.log("During cycle " + duringCycle + " : " + x);
			if (duringCycle == coef) {
				total += coef * x;
				console.log("Total " + total +" during cycle " + duringCycle + " (x = " + x + ")");
				coef += 40;
			}
			duringCycle++;
		}
		x += value;
	}
	return total;
} // Correct answer : 14360

function conclusion_10_2() {
	var step, j, tokens;
	var x = 1;
	var total = 0;
	var duringCycle = 1;
	var value, delay;
	const data = rawData;
	var strings = [""];
	var nextBascule = 40;
	var lastBascule = 0;
	for (step = 0 ; step < data.length ; step++) {
		tokens = data[step].split(" "); 
		if (tokens.length == 2) {
			value = parseInt(tokens[1], 10);
			delay = 2;
		} else {
			value = 0;
			delay = 1;
		}
		for (j = 0 ; j < delay ; j++) {			
			strings[strings.length-1] += (x - duringCycle + lastBascule <= 0 && x - duringCycle + lastBascule >= -2) ? "#" : ".";
			if (duringCycle == nextBascule) {
				console.log(strings[strings.length-1]);
				strings.push("");
				nextBascule += 40;
				lastBascule += 40;
			}
			duringCycle++
		}
		x += value;
	}
	return total;
} // Correct answer : BGKAEREZ