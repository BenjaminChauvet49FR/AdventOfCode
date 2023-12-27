const rawDataOfficial = [
"O#....#.........#.##...O...#.O#..#...O..O#.##.OOO.O...#..#...#OO...OOO#O##..O.O.O..#....O..#...#....",
"...O...O...#OO......#.........O.##....O.#O#..OO.#.O##.O.#.#.O...#O.OOOO.O#..O.#OO....O.....O.O...O..",
".....#..O....O....O....O..#OO.O..#O.......O......O.O.....OO....OO......##.O.#.#....#..#.#..OOO.#.O#.",
".....#..##OO..O.....#..#...O..#..O..#O..#OOO..#......O...##......OO#....#......#O.....O#.#O#O...#...",
"#..O..OO##O...O#O#.OOO...#.....#.#O.O#....#..........O...O#O..........#........O.O.O#O...#..OO#.....",
"#O.#.....##.#.OO.#..#.OO#..#.##...#..O.O..........#O.#..OO.#..O.......O.#O..O..O.O..O.....O..OOO...#",
"#......O.##.##...OO..O.##.##.O.#..........#..O.###O...O...##.#....###OO...#...#............O.O..#.#O",
"....O...O.###.#.#...O..O..O.OO...O...#........#O.....O...O#.O.O.....O#O........##.O..#OO.OO#.O##....",
".....O..O#..OO.....#.O..O.#.#............#.###...#.O.###......#O#.OO.#O..OO...O.....O#O......O......",
".....O.O...O#.......O.......#.OO.O##..#...O.#....#..O.....O...O.O..O.O.#.O#O...#.#..O...#O..O..OO...",
"O..#..O......O.....O....##OO.O..O.....#.O.#..#.#O.#.#O..............##..#..O......O...O.##..O....#..",
".#...#......#..O...###....#.O#...#..O..#O......##O.OO.O.......O#OO...O#.O.#....O.O#..#.#OO.O#O.OO...",
"...#...O#..#..##...OO####O#.#.##....###OO#.O..........O....#O...#.....OO#.#....O....O#.##...O.#.#...",
"...O.OO.OO#O#.##O..O.....O...#....#O.....#.#...#O#..#..OO.O.#.#O.#.O.#..OO....O..#..#.O.#O......OO..",
"......#...O#...O#...O...O#..........O.....#OOO#.......#.O.O...O...#.#...#O##..O##.OO..O.......O#O...",
"......#...O.O...O.O.....#....#.#.....#.#...#.O#....#OO.#...OO.....#.......O.#.....O......O..##......",
"#O.O.O.O.OO...O###.........O.#.....O#.......O#...#O......O..#.O...O.....O...#.##O.#..##O..O#...O.#.O",
"O.O...#...OO#.#....OO.O...###..OO#O...O...#...##..O#.#.##..OO..O#..O...O.#...##.......#...OO.#OO.O..",
"..##OO#.............#...O..OO.#...##....O.O.....O.#O...O.O...O#.###....#....#....#.O..O...#....O#O#.",
"...O..#.......O.....O......O..O.#O#O.#......OOO..#...#..O....#..O#.#.O..O..#......OO..O..#.OO...O...",
"O#..........#OOOO.##..O.O#O.#.#...OO......##..#OO#.O.O#OOO.OO#.......#O.#...O#O.O..OO.....O...#O....",
"..#O#..O....#........#OO###...#.##.##.O....#..#..O....#O..#......O....#..O..#.....O.#......O##..#.#.",
"##.#..##.O.O.#.O.....O....O#.#...O..#..#....##O.#....O..OO.O.....#O.#O....O.......#.OO..O.OOO#OO#...",
"#.........#.#.#..OO.O.....O...#......O#O.O....#..O.#OO....O..O...#O...####O...O.....#..#....O.#.##..",
"#........O.O..OO.....O.....#O.O.....O....#....#...O.#.#.#.O...O#..#....#OO##.#..##O.OO...#O#.OO.#.O.",
"O........O.....O...O..#..#.O..............#..##.#.....O#O#.#...O#.O...O..O...#.#..O..O.OO.O....#....",
"..O.O.........##.#O..O...O.O....O#.#..O..##.........#.#O.O.....#.#......OO#..OO.#.O.OO...O.OO..#.O.O",
"#OO...O##..O#..OO.O#O.#.#.O..#..O....O.O#.#O.#........OO.O..........#....O.O....#.OO.#O..........#O.",
".O..O##.#.O.##.O..O......#...###...#..#OOO.#...#O.......O.....O.#.....O.OO#...O#O.O...#OO.....O.#.#.",
"....#.#.O...O#OO..#..OOOO...O.............O..O..O#..O.#.O.....#.O......#OO.O#OOO........#..#..OO...#",
".O...#....O..O##.OO.###.O..OO.O....#.O..##.OO#O.....##..........###.O...O#..OO..O.O#O.....O.#.......",
"#.O......OOO......O.#..O..##...#O.O#.O#..OO..#..#O.OOO#..#.O.O...O..O....#O...O...#..#.##.O...#.O#.#",
"...O...O....O.#.#OOO.....O#O......O#..OO........O.....O..O.......##O..#...OOOOO#....O..#.O......#..O",
"#.....#....O.....O..O.O.#O#O.O.#.....#..#O.....#.#.#...OO.OOO#O##.##O.O.###.O..O...O#.#.O......##..O",
".O.#..#.O##..#..OO#.#.O#.#.O..O.....#....O##...O.....##O..##...O...O...O.#.#...#O..OO...O....#....#.",
"O#..#.###....O.#..#.O.O...O.O....#.......#.O.#O.#...#.O.O#..#.#..O..O.O#...O....O.O.O##...#.....OOO.",
"...#.#O.#......OO#.##..O..#.#.O.###O...O.#O.O..O..#.....O..#O.O.O....OO##O..OO...O##.#....O.O...O...",
".OO.O#..#.OO.O.O..O#OOO.OO.##.O........O..#.O..#..O.............O.O..#.OOO.#................##O.....",
"....##O...O..O..O.........#..O..O...O...O..O.#.....O......O#.O#.#.......OO...O.#.O#.....#.#........#",
"...#.O...OO.OOO.#O............O..O#..#...#..OO.....O........O..#.O..O...O#O....##O.O...O.O..#.O....#",
"...#.#O..O#.#..O....O..OO....O..O#O..........OO.O..O.......#.#..#....O..##.O.#....O#O.....#OO.....O.",
"..#.O...#.O..O#.....O...OO##.#.OO.O.O.O.O.#.O#...#O...O..###.....O#..#...........O.##O......#..O.#..",
"O.....O......O.O....#.O.O..#.#...O...#.O.O#OO..#...O#......O.OO.O.O..#...#.#.....O#....OOO..OOO.O..#",
"O....#O#....#..O#....##........O##O......O##.#O.....O.O.....#.##..#.OO..##....#.O#...OO........#..O.",
".#....O...O.#......#O##.#......#..#.#...............OO.OOOOO.O.OO..OO.O.#.O.......#O....O#.#O..OO.O#",
"#O.OOO#OO....##.O.#.O#.O...#....#.....#....OO#.O.#OOOO....#..#.#.##.O...#...OOO...#......O......#.#.",
"O.#.#O.#.#.#.O.#.O........#.O.#.OO#O.O##.#..#...O.O.....O.#...O#.....#.OO..O#.OO.#...#.O....#.......",
"..O..O.O.O..###....#O...#O#.##O......#O....OO.O..O.#...O#.O....#..#.#.O.........#OO..........O#..O#.",
"#.#...........#.......#..OO..#.....##...#........#O.#O..#O....#OO.O.O....#.O..O#.....##.O###O##....O",
"..OO..OOOO.....O...#.O.#....O.....O.##O#...#..O...#...O.OOO.O..#.#...#....O#.#...#.O.O.O.....##..O.#",
"..OOO..#.#O..OO.O......O...#.#..O.....O.OO.O.O.OO...O..#.O.O.....#..O..#.##.O....#.#O.OOOOO#..O#.O..",
".....#.....O......#..#.....O..........O####..O..O.#O#.....#O...#..O.#...#....#.OOOO.OO.O.O.O#...O..#",
"O.#.#O.#.O...O.OO..O......#...#.O#......O...##O#..O.OO.#....O#...OO...#...................O..#O...O.",
".#.OO...OO....O#......O.O#O#O.O.O....O...O.OO#.#O.O.O.#O.O...#.....O..##.#..##..O#...O#O#...O...#...",
".#.....#..##O.OOO#.O#.##.O..#..O#O..#..#...O#O.O##....O...O.O..O#..#.O.O.O.......#O..O..#O.O...O.#.O",
"......O..O.#..#.##.O.O....OO..O.....#.O..#O...#O.O..#..#..O...O..O..#.#O......O..O......O.....O.##..",
"..O....#O..O.#O...#O...#.O.#...O...#.#.#...O..O.#.......#...O...OO.#O..#OO..OO.O#OOO###.......#.O..O",
"..O..O...#..#....#....O..O#.#.O.........O.#.##.#O..#.OO.#O.O.O#.....#O..O....O#.........#.#.#.....O#",
"......O.#O#..#OO.#...O..#....#O.....#.......##.#.............O.#OO..#.O...#..O#.####.#OO..O.O...#.#.",
"#......O....O..O....O.....#.O......#.........#.O.O..#...#.O..O#...#.O#.#O.#..#.O....O.#...#O..O...#.",
".O...#...OO.#O.....#...O#...O.O#.#.O.#O...OO..#.O##O#.#OO#O...O#......##.O.##O.#......O.........OO..",
"..O#.O..#OO..O........O.OO.O..O...O.#....#..#.#O#..O...#.....#.#OO.O.......#..O...OO..O.OO.#.#O.OO..",
"OO.O........O.#..O...O.O...OO#.O#O.O.O...OOO.O.#...O.......OO.#.#..O#.#..#..O...OO.#..O#O.#..#....O.",
"O..#..O.O#.OO..#...O#........#...#.O...O...#...#.#.O...#...#O.OO.#......O...O.O........#.##O#.O..#O.",
"OO.OO.#..#..#....O..O.O..O..........OO#.....##OO.O..##.......#.....O.......#...O....O..#........#O.O",
"O#.....O.O...#..#..O#..#.O.O##.O.#O...#O..O##O....O.O##.#...###...........O#.O...........O..O.O.....",
"....O......##....O.........#O...O#.#.#....O.#..........#.#.O..O..#..O...O....OOO......OO.O..O#..OO.O",
".O.#..O........O.O.......O..##.#..OOO..#.#.....##.O.O.#.#...#.O.#.###.O.....O....O.....O..O.O.O#...#",
"...O..O.O#.....O.O.......O.O.#..#O#.O#..OOOO..#......O.O.#....O...#.#..#O....#..OOO.O.OO.#O.O....O#.",
"...O.....#....#OOO#.O#...#.O......#.#O.O...OO.O#.OO.OO..O...#........O#.#.O#.....O..O#.OOO........#.",
"O..O..O...O.............O..O.O.OO...O..O.....O...O#..##OO#O..#.##...#O..#O#......O##.O........#..#..",
".OO.#.#O...O...O.#.O.O.O.........O..O..O..OOO....#..#.O#..O......#..#O..#....#..#.......OO.......O#.",
"#.....#.O#.....#..O..O.O..O...O.##O.O..#..O.......O.O..O........#....O.#...#OO.O..O...O..O.#..O..O.O",
"#..##.#O##.##..#.......##.O..OO.#.#O#O#...#.#.O....OOO.##OOO.OO.O#.O#........#...#...#.##.OOO..#..#.",
"....O.##O#O..#O..O.O#....OO....O...#.O..O.O..#O..O..#..OOO.....##OO.....#.O.#OO...#.O.OOO.O....#....",
".O........#O...O.O.O.O#..O#.O.....#OO.#.O..#.#.O.....O....O......O....O..O.#..##.....O.#.....O..O...",
"O...O......#..O#.......#O.....O#.#.....#.O.OO.O.#O..O##.....OO#..O.O.O........#O..O.....#..........O",
"..#O.O.#.O.#..#......O#..O#..O..#...O..#.O.O#.##..#.#O..O..#.#...##.#...#..O#......#...O#O.O.#..#...",
".OO...O..O...O.O..O..O#.....O.#O#.O#O.#.....O.#...#..#...O..OO.....O..O.O....#...#O#.#.OO#....O....O",
".#...O.........#.O.O#.OO.#O..O....O.....O....##.....O..#OOO.....#...#.#OO..#O.O.O...#O.OO.O.#.......",
"..OO.#O......O.O..##.#........OO..O#..O...O..#..#...#O..##O...O#...##.#..O..#......#..O.O#.O.#...O.O",
"..##.O..###..OO.O#O..#.......O#...#.O#..OO.##O.O.O........#O#.#.OO....#.##.O.OO#.....O.O##........#.",
"..O.OO.O##.O...##O...#O..#O.#.O...#O.##..#.O.#..##....##.O....O....O.....###.....#O..#..O..#O...O...",
".##.....#.....O#.O...#.....#.##.OO..OOO...OO#..O......#........#O.O..O.O...#...OO....O.#...O.O...O..",
"...O.....O.#....O...#..O.O......#..#OO.#.O.O#.#O....#.##...O...##O.O.O#.........O.#O......#O.......O",
"..###O..#O.#.O.....O.#........O.#........#O##.#..O#.##.O.O........O###.#.O....O.....###....O##O.....",
"#O#.....#.....O..............O...#..O..#O.O...........###.O.#.....##O.....O#O..#.....O.OO....O#O....",
".#...O...O..#.#...............O.O#....O..#.#OO.O..O........O....O..O......##..#.#OO#...O#..O##......",
".OO.O...O##O.#O#..O.......O..##.#O#.....#..O..O#.#O#.#...#...#..O..##..#....O.....#.#..O....O.##.O#.",
"#...O#.#O.O...#.O....O#.O#..O..O......OO#.O....#.....OO#O....#O.OOO...#OO..#..#O...#.#O..OO.#...O...",
".O...O..O.O....#....#O...#.....#...O...#..OOO.....OO#OOO.O..#O.#....#..O...#...O..O.O##...#O.O.OO..#",
"O#O..O#......#.#O..#O....OO#O#...#...O....##...#.O...O.#O...OO....O.#.O.O...O#........#O.O..O#..#..O",
"OOO#....O...##.O.........OO..O.OOOOO.O..O..#..###.O.#....##.....O.O.O#.#..OOO....OO.....OO....O...#.",
"#O###O...O...#..OO...#O.....#.....O.O...O.#..OO#..##....O..##..O##.......O..O.O#OOO...O..#.....##...",
"..#O.....#.O#O#.O.#.#....#O..#O.O.O..#..O#..O.O.O...OO..#.#..##..O.O...OO..O.##.O.OO.#.#..##.......#",
"O...OO.O......#..#...O.#.O.#O...#.O.OO#...O....#OOO..#..O..O.....O.....#.O.#O#...OO.O#.OO..O.##...#.",
".....#OO....O.O#O......O.O.O.#.O..O#O#...#O...#.#O...#.O..#.OO.O....OO...O#........#O...#.#........O",
".O....#..OOO........#.O.#O.#.........#.#....O#OO#.......O..O#O.###.O....O.O.O......O.#.O..O..#...O.O",
"#.O.#O..##.OO...O##O......O#.OO........OO...O#....#....#..O#........O#..O.O...O.#O...#...#.#.....O##",
".O.O.O.OO..OO.#..#....O....O.O#...O...OOO..#.OO#.....##........O...O#O.#..OO##.O.#..#..#O#.O..OO##.."
];

const rawDataExample = [
"O....#....",
"O.OO#....#",
".....##...",
"OO.#O....O",
".O.....O#.",
"O.#..O.#.#",
"..O..#O..O",
".......O..",
"#....###..",
"#OO..#...."
];

const rawData = rawDataOfficial;
//const rawData = rawDataExample;

function conclusion_14_1() {
	var field = [];
	for (var i = 0 ; i < rawData.length ; i++) {
		field.push(stringToCharArray(rawData[i]));
		rollNorthLastRow(field);
	}
	var weight = 1;
	var answer = 0;
	for (var i = field.length-1 ; i >= 0 ; i--) {
		for (var k = 0 ; k < field[0].length ; k++) {
			if (field[i][k] == 'O') {
				answer += weight;
			}
		}
		weight++;
	}
	return answer;
}

function conclusion_14_2() {
	var field = [];
	for (var i = 0 ; i < rawData.length ; i++) {
		field.push(stringToCharArray(rawData[i]));
	}
	var previousIter = -1;
	const NB_GEN = 1000000000;
	var treeOfSeenConfigs = {branches : []};
	for (var i = 0 ; i < NB_GEN ; i++) {
		rollOneCycle(field);
		
		// Trying to jump through time...
		if (previousIter == -1) {			
			previousIter = addNewConfig(treeOfSeenConfigs, i, field);
			if (previousIter != -1) {
				var periodDuration = i-previousIter;
				while(periodDuration < 100) {
					periodDuration *=2; // 7 is too few
				}
				while (i < NB_GEN-periodDuration) {
					i += periodDuration; 
				}
			}
		}
		
	}
	
	// Victory lap
	var weight = 1;
	var answer = 0;
	for (var i = field.length-1 ; i >= 0 ; i--) {
		for (var k = 0 ; k < field[0].length ; k++) {
			if (field[i][k] == 'O') {
				answer += weight;
			}
		}
		weight++;
	}
	return answer;
}

function rollNorthLastRow(p_field) {
	var h;
	for (var k = 0 ; k < p_field[0].length ; k++) {
		h = p_field.length-1;
		if (p_field[h][k] == 'O') {			
			while (h > 0 && p_field[h-1][k] == '.') {
				p_field[h-1][k] = 'O';
				p_field[h][k] = '.';
				h--;
			}
		}
	}
}

function rollOneCycle(p_field) {
	var x, y, xx, yy;
	// Roll south to north
	for (y = 0 ; y < p_field.length ; y++) {		
		for (x = 0 ; x < p_field[0].length ; x++) {
			yy = y;
			if (p_field[yy][x] == 'O') {			
				while (yy > 0 && p_field[yy-1][x] == '.') {
					p_field[yy-1][x] = 'O';
					p_field[yy][x] = '.';
					yy--;
				}
			}
		}
	}
	// Roll east to west
	for (x = 0 ; x < p_field[0].length ; x++) {		
		for (y = 0 ; y < p_field.length ; y++) {
			xx = x;
			if (p_field[y][xx] == 'O') {			
				while (xx > 0 && p_field[y][xx-1] == '.') {
					p_field[y][xx-1] = 'O';
					p_field[y][xx] = '.';
					xx--;
				}
			}
		}
	}
	// Roll north to south
	for (y = p_field.length-1 ; y >= 0 ; y--) {		
		for (x = 0 ; x < p_field[0].length ; x++) {
			yy = y;
			if (p_field[yy][x] == 'O') {			
				while (yy < p_field.length-1 && p_field[yy+1][x] == '.') {
					p_field[yy+1][x] = 'O';
					p_field[yy][x] = '.';
					yy++;
				}
			}
		}
	}
	// Roll west to east
	for (x = p_field[0].length-1 ; x >= 0 ; x--) {		
		for (y = 0 ; y < p_field.length ; y++) {
			xx = x;
			if (p_field[y][xx] == 'O') {			
				while (xx < p_field[0].length-1 && p_field[y][xx+1] == '.') {
					p_field[y][xx+1] = 'O';
					p_field[y][xx] = '.';
					xx++;
				}
			}
		}
	}
}

// TODO : May be generalizable ; I copy-pasted it from 2018-18. However, I want to handle more problems with trees before I can do a great copy-paste.
// So here, we sort land configurations by the time they were first observed in order to see if any land config appears twice (we are looking for that period !). 
// The tree is actually of depth (nb of spaces + 1), as the leaf contains the iteration
function addNewConfig(p_treeOfConfigs, p_iteration, p_data) {
	var newBranch = {subtree : p_treeOfConfigs, actuallyNew : false};
	var x, y;
	for (y = 0 ; y < p_data.length ; y++) { // Run all spaces. 
		for (x = 0 ; x < p_data[0].length ; x++) {
			if (p_data[y][x] != '#') {				
				newBranch = tryToInsert(newBranch.subtree, p_data[y][x]);
			}
		}
	}
	if (newBranch.actuallyNew) { // We have run (nb spaces) but there is still one leaf to insert... or to read
		tryToInsert(newBranch.subtree, p_iteration); 
		return -1;
	} else {
		return newBranch.subtree.branches[0].node; 
	}
}

// Tries to insert an array in a subtree (imbricated arrays)
// If successful, return {true, singleton of the new tree}
// Otherwise, return the subtree containing it
function tryToInsert(p_subtree, p_eltToAdd) {
	for (var i = 0 ; i < p_subtree.branches.length ; i++) {
		if (p_subtree.branches[i].node == p_eltToAdd) {
			return {actuallyNew : false, subtree : p_subtree.branches[i]}
		} 
	}
	p_subtree.branches.push({ 
		node : p_eltToAdd,
		branches : []
	});
	return {
		actuallyNew : true,
		subtree : p_subtree.branches[p_subtree.branches.length-1]
	}
}