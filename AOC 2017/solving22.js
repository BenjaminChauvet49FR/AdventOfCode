const rawData=`.##.#..#...#....###....#.
#.#######.##.##.#.##.##..
.##.#..#.###.#....###..##
......#.#..##.##...#.#.##
.#.##.##.######...##.#..#
###...#..####..######.#..
###....#....#..#####.#.##
..##..#..#.#.#.#....#####
#.#.......##.#....##..#.#
##..#.###.##.####.##...#.
#.####.##.##..##.#.##.##.
###.#..##.##.#.####...#..
######.#...#....#.#...#..
.#.#.###.##.##..#.#....##
#.###..##....###.###..#.#
.#..##.......#..#.##.##.#
..#...####...##.#.##..#.#
..#.##..#..##.###.#####.#
##..##.##....#..###.#.###
.#..######.#.####..#.###.
##...####..##.#.#.#.#.###
#.#....###...##.##..##.#.
..###.#####.####.#.#..#..
..####..#.#....#.###.....
.#......#.#..####.###....`.split("\n");

function conclusion_22_1() {
	var ea = new ExpandableArray(150, 150, 100, 100, 0, 0, false);
	var x, y;
	for (y = 0 ; y < rawData.length ; y++) {
		for (x = 0 ; x < rawData[0].length ; x++) {
			ea.put(x, y, rawData[y].charAt(x) == '#');
		}
	}
	// Let's go !
	var dir = DIRECTION.UP;
	x = Math.floor(rawData[0].length/2);
	y = Math.floor(rawData.length/2);
	var count = 0;
	for (var i = 0 ; i < 10000 ; i++) {
		if (ea.get(x,y)) {
			dir = TurningRightDirection[dir];
			ea.put(x,y, false);
		} else {
			dir = TurningLeftDirection[dir];
			ea.put(x,y, true);
			count++;
		}
		x += DeltaX[dir];
		y += DeltaY[dir];
	}
	return count;
}


function conclusion_22_2() {
	var ea = new ExpandableArray(1500, 1500, 100, 100, 0, 0, 0);
	var x, y;
	for (y = 0 ; y < rawData.length ; y++) {
		for (x = 0 ; x < rawData[0].length ; x++) {
			ea.put(x, y, rawData[y].charAt(x) == '#' ? 2 : 0);
		}
	}
	// Let's go !
	var dir = DIRECTION.UP;
	x = Math.floor(rawData[0].length/2);
	y = Math.floor(rawData.length/2);
	var count = 0;
	var val;
	for (var i = 0 ; i < 10000000 ; i++) {
		switch(ea.get(x, y)) {
			case 0 : ea.put(x, y, 4); dir = TurningLeftDirection[dir]; break;
			case 3 : count++; break;
			case 2 : dir = TurningRightDirection[dir]; break;
			case 1 : dir = OppositeDirection[dir]; break;
		}
		ea.put(x, y, ea.get(x, y)-1);
		x += DeltaX[dir];
		y += DeltaY[dir];
	}
	return count;
}