const rawData=`rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 3
rect 1x1
rotate row y=0 by 2
rect 1x1
rotate row y=0 by 3
rect 1x1
rotate row y=0 by 2
rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 3
rect 1x1
rotate row y=0 by 2
rect 1x1
rotate row y=0 by 3
rect 2x1
rotate row y=0 by 2
rect 1x2
rotate row y=1 by 5
rotate row y=0 by 3
rect 1x2
rotate column x=30 by 1
rotate column x=25 by 1
rotate column x=10 by 1
rotate row y=1 by 5
rotate row y=0 by 2
rect 1x2
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate row y=2 by 18
rotate row y=0 by 5
rotate column x=0 by 1
rect 3x1
rotate row y=2 by 12
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate column x=20 by 1
rotate row y=2 by 5
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate row y=2 by 15
rotate row y=0 by 15
rotate column x=10 by 1
rotate column x=5 by 1
rotate column x=0 by 1
rect 14x1
rotate column x=37 by 1
rotate column x=23 by 1
rotate column x=7 by 2
rotate row y=3 by 20
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate row y=3 by 5
rotate row y=2 by 2
rotate row y=1 by 4
rotate row y=0 by 4
rect 1x4
rotate column x=35 by 3
rotate column x=18 by 3
rotate column x=13 by 3
rotate row y=3 by 5
rotate row y=2 by 3
rotate row y=1 by 1
rotate row y=0 by 1
rect 1x5
rotate row y=4 by 20
rotate row y=3 by 10
rotate row y=2 by 13
rotate row y=0 by 10
rotate column x=5 by 1
rotate column x=3 by 3
rotate column x=2 by 1
rotate column x=1 by 1
rotate column x=0 by 1
rect 9x1
rotate row y=4 by 10
rotate row y=3 by 10
rotate row y=1 by 10
rotate row y=0 by 10
rotate column x=7 by 2
rotate column x=5 by 1
rotate column x=2 by 1
rotate column x=1 by 1
rotate column x=0 by 1
rect 9x1
rotate row y=4 by 20
rotate row y=3 by 12
rotate row y=1 by 15
rotate row y=0 by 10
rotate column x=8 by 2
rotate column x=7 by 1
rotate column x=6 by 2
rotate column x=5 by 1
rotate column x=3 by 1
rotate column x=2 by 1
rotate column x=1 by 1
rotate column x=0 by 1
rect 9x1
rotate column x=46 by 2
rotate column x=43 by 2
rotate column x=24 by 2
rotate column x=14 by 3
rotate row y=5 by 15
rotate row y=4 by 10
rotate row y=3 by 3
rotate row y=2 by 37
rotate row y=1 by 10
rotate row y=0 by 5
rotate column x=0 by 3
rect 3x3
rotate row y=5 by 15
rotate row y=3 by 10
rotate row y=2 by 10
rotate row y=0 by 10
rotate column x=7 by 3
rotate column x=6 by 3
rotate column x=5 by 1
rotate column x=3 by 1
rotate column x=2 by 1
rotate column x=1 by 1
rotate column x=0 by 1
rect 9x1
rotate column x=19 by 1
rotate column x=10 by 3
rotate column x=5 by 4
rotate row y=5 by 5
rotate row y=4 by 5
rotate row y=3 by 40
rotate row y=2 by 35
rotate row y=1 by 15
rotate row y=0 by 30
rotate column x=48 by 4
rotate column x=47 by 3
rotate column x=46 by 3
rotate column x=45 by 1
rotate column x=43 by 1
rotate column x=42 by 5
rotate column x=41 by 5
rotate column x=40 by 1
rotate column x=33 by 2
rotate column x=32 by 3
rotate column x=31 by 2
rotate column x=28 by 1
rotate column x=27 by 5
rotate column x=26 by 5
rotate column x=25 by 1
rotate column x=23 by 5
rotate column x=22 by 5
rotate column x=21 by 5
rotate column x=18 by 5
rotate column x=17 by 5
rotate column x=16 by 5
rotate column x=13 by 5
rotate column x=12 by 5
rotate column x=11 by 5
rotate column x=3 by 1
rotate column x=2 by 5
rotate column x=1 by 5
rotate column x=0 by 1`.split("\n");

function conclusion_8_1() {
	var array = conclusion_8_aux();
	var answer = 0;
	for (var y = 0 ; y < array.length ; y++) {
		for (var x = 0 ; x < array[0].length ; x++) {
			if (array[y][x]) {
				answer++;
			}
		}
	}
	return answer ;
}

function conclusion_8_aux() {
	var array = generateDoubleEntryArray(50, 6, false);
	var tokens, nb;
	var strCol = "rotate column x=";
	var strRow = "rotate row y=";
	rawData.forEach(str => {
		if (str.startsWith(strCol)) {
			tokens = str.substring(strCol.length).split(" ");
			rotateCol(array, parseInt(tokens[0], 10), parseInt(tokens[2], 10));
		}
		if (str.startsWith(strRow)) {
			tokens = str.substring(strRow.length).split(" ");
			rotateRow(array, parseInt(tokens[0], 10), parseInt(tokens[2], 10));
		}
		if (str.startsWith("rect ")) {
			tokens = str.substring("rect ".length).split("x");
			fillArray(array, parseInt(tokens[0], 10), parseInt(tokens[1], 10) );
		}
	});
	return array;
}

function rotateCol(p_array, p_x, p_number) {
	var tempoArray = generateArrangedArray(p_array.length, function(y){return p_array[y][p_x]});
	for (var y = 0 ; y < p_array.length ; y++) {
		p_array[(y+p_number)%p_array.length][p_x] = tempoArray[y];
	}
}

function rotateRow(p_array, p_y, p_number) {
	var tempoArray = generateArrangedArray(p_array[0].length, function(x){return p_array[p_y][x]});
	for (var x = 0 ; x < p_array[0].length ; x++) {
		p_array[p_y][(x+p_number)%p_array[0].length] =  tempoArray[x];
	}
}

function fillArray(p_array, p_xL, p_yL) {
	for (var y = 0 ; y < p_yL ; y++) {
		for (var x = 0 ; x < p_xL ; x++) {
			p_array[y][x] = true;
		}
	}
}

function conclusion_8_2() {
	var array = conclusion_8_aux();
	var answer = "";
	for (var y = 0 ; y < array.length ; y++) {
		answer = "";
		for (var x = 0 ; x < array[0].length ; x++) {
			if (array[y][x]) {
				answer+="@"; // TODO Make a function please
			} else {
				answer+=".";
			}
		}
		console.log(answer);
	}
}