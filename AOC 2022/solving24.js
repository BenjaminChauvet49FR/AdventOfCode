const rawData = [
"#.########################################################################################################################",
"#<.^><>^>>>^<v^^v>v^vv<v>.<v^><>^<^.^>^><^^v^>v^v>>v><v<^vv>><^.v<^vv.v<^<^<vv<<vv>..v^><>..<<^.<v^^^vv>.<<^v>^<<v<^v^v>>#",
"#>^><.^<^v<>^<<vv^<^<>>^v<^vvv>vvv<><v^v<>><<^>.v.>^v^^><^<v^v^v^.>v^<vvv^^.vv^^v^<^^v>>>>.v^^.>v>^<<v>vv<<v>.>>><^>>>>v>#",
"#>v>^^^^>.^.v<>>>v>v^^v.>v^>><..v<^vv^v^><<>v<^<vv>>^.<.>>>v<>>^^v>>^<^v^<^v^v<v^>^.vvvv.<<.>^<^^>>v>v<>><^^>v^^<v^.vv<>>#",
"#><<<>v^^v>v>v>^<<<.<^.><<<>v>>>.^<^><>^v<^^>>v.>vv^<<<>^<>>><^^.^vv^<vv<<><.vv^^v^<^><.v^^>^<^<vvv<>><<><>vv^vv^<.^<v^v>#",
"#>>^^^>.>>><^^<<v^v^v.>^.v<v<vv>vv>^<^^^<>>vv>v^<v^vv<^v^>^>v^>>v<>>>^v>vvv>v>^<<>v^>v><<^<v<<.>v>>><^<<>^<>>v<<v>.<.v<<>#",
"#>..<>v>^..v<v.<v<vv<><<v^>>v<^.>v^>vv^v<^v>v<vv^<<^.^^^.<^v.<vvv<<<^^^^<v<v.>.^.^>.<.^^><<^.^<>>^v>^vv<<>.^^^..v<<v<<v^.#",
"#>^..<v^^v^<<v<vv<^^^<>v><^><>>^<v><>vvv..^>v^v<v<.<^^<<v><<><v>vv><vvv.<><^.vv<^.v><><<^vv^v<<v^v>>^v>>>>vvv>^<<v<>^>>^>#",
"#<<>^><^v>v<v>^^>v<>>>.^^v.>v<>^^v^v>v^v^<^^<v<<.v<^^>^v<.>.^<><<^v>^..<>>><.>^<.<<>>^^v>>v^^<^>.^v<v>>>vvv>>>>vv<vvv.v<>#",
"#><<v<^v^^^>v>.<.>>>^^^>>..>v^^>>^<^<><.^>>^>.v><^^^>>^vv>^v^v.>v<.^^>><<.<..><>^<v>v<^<^v<^^v<.>vv^^^^<v>>v^<v<<<^vv<.^.#",
"#<<^><><^v.<v>.^><v<v^^>^>>vvv><<^^<><>.vv^^><v.>vv>^^v>^v>>^<^>..<<^<v<^.v^^<<>><<.<^>^>^<vv><<>^>vvv>^>^^>>>.>vv^<<^<>.#",
"#<..>^>vv<<^^v>^<vv<v^v<^^<v^^^v^v<^>.^.^^>>>.^<^v^^v><v^^v^^vv^<<<.....>v^<<vv>>.>><v<v>>v..v<^><>vvv<vv<^v<<>>.^^v<v^<<#",
"#>v>><^v.<v<v>^^>^vv>vvvv<>v><>v.^<>><>^><.<^><.>.<<^^v^^.>v>v^><><vv^><.<>><<v^v.<^^>v>.<>vv.v<^v^v^<^<>>v<><<v.^<.<<^v<#",
"#<<>^vvv.^<v<.vv<^.v><v<<^vv<<vv<v^v>v<vv^^<>><^v^>^^^^>v.>>.^vv.<v<>^^^><^^>>^<..<.>>^^^<<^^^v^^<v<^.vv<^v>><<^.<<>>><.<#",
"#..v>.>>v<^vv><vv<v>^<.>>^^>v^><<^>v<^v^..^v>^>.^vvv<v><<.<.<>v>^^<<<v^^^vvvv^.>v>^^>^>>^><<v<>^>.v.^<v<>.^^>><.v^v<.vv^<#",
"#>^<vv<>v<v^<.>>>v<><vv>^^<v<^v><<v^v^v>^^<>.vv>v.^^<v^v<v><v<v^vv>.<>v<<<>>><<v<<.v>v^<..^v^^<v^v.>vv.^^<>>v^<.<^>v^<^.<#",
"#<>>>vv.>^>.v>v<v<v><>^>v^v<>^.>>v>^^>vv>><>v.^.>^>>>^<><v^>vv<.>vvv<>^v><v>>><vvv.<v^<>>.vv^v>>>>>v<^>.v<.<<.vv>><.^<<.<#",
"#<^v^>>>><><v<<.^<<^><.^<^^^<.^.v><>^vv<^<><.><^<v<v<v<<<^<v^>>v<<<.<v>.>^.<><.^^<>v>>^vv<^^<>v<v<v<^<^>v.^<v><<<>>^>v^<<#",
"#<<><.vv^v<v>v^^<.<^<<<<<<v.v^..><v^^^^^v^<>v^<<^>v<^v^.<.<>^<v^^v<<.><>v>v.v>vv>.><v>^v>.<>>v^<.>v<vvvvvvv<><^^v>>^^<>>>#",
"#><>v>>v.^<<<<v>>v.<<^^..^<^.v.v^<>v<^^>.^^<.^>^<.vvv.^vv^.>.>^<>v^v<<><^.v>v^^v<v>^v>>.^vv<v^^>><<<^<>v<<v<<^>><v.<v<>^>#",
"#>><>vvv^>v<>v<v>^.<<>^^<^>>v^.<^>>.<<v<<^<^><^<>>^.vvv>v><<>><>vv.^<v>v><^>.^^^.v>>^^^vv^<^><^>>>.<^v^<vv>>^>>^>v>><.<v>#",
"#>><<^v<>>>>^<><.<>vvv.<^>v<>.<.<<^>v>v<v^^vv^^>>v<^>^v^<^.>v><vv^^^.^v^>^><<<v^.>^<^>v<^v<>><<vv<^v><.<>^^v.^^.^>^.v<<>>#",
"#.<<^><v>>>v^>.^v><v^>>vv>^<<v<v.>^^.<v<.<<<v<>><^<v^<v^>^vvv>^<<>>v<<.v^><<vv^<v>v<<^v>vv<<.v^<<^v^<<v<<<>><^^vvvv<v>vv<#",
"#><>>>^>^^><v^^^<>><>^<.<^^<>^^.>.<>.>v>vv>..><>>^<v>>vv>.v>.v^^<<^v<><^^^vv.^<>.^>v>v>v<<^<v><v.<^v<.^.<><<><>.v^^v^v^.>#",
"#<<.^.v^><<^vv^v^.^>.<v<v.v^<v^v><.v.^vv^.>.<>>><<>^>v^>.<^>>>v<>^<>^^>..<.^>v^>^v.<<>^v^<>>>v>>v^>^.^<.vv><>^v^v><^^<^<>#",
"#>v^><v>v<v^^>><vv^^v..>><><.<^vvv>^<>^<>v^..^v.>>v>vvv><v>>v>vv>^^v<<^<^^^>>v<^><v.v<^v^<^.>>v>^v<>^>vv^<.<.<^v<<<><^.^>#",
"########################################################################################################################.#"
];

const gData = {}
const X_LENGTH = rawData[0].length-2;
const Y_LENGTH = rawData.length-2;
const X_ENTRANCE = 0;
const Y_ENTRANCE = -1;
const X_EXIT = X_LENGTH-1;
const Y_EXIT = Y_LENGTH;

const FROM_DOWN = "^";
const FROM_LEFT = "<";
const FROM_UP = "v";
const FROM_RIGHT = ">";
const FROM_WAIT = "O";
const NOT_YET = ".";
const MAXIMAL_WASTING = 25;

function init() {
	var x, y;
	gData.land = [];
	for (y = 0; y < Y_LENGTH ; y++) {
		gData.land.push([]);
		for (x = 0; x < X_LENGTH ; x++) {
			gData.land[y].push({bannedHorizontal : [], bannedVertical : []});
		}
	}
	
	var count;
	var xx, yy;
	for (y = 0; y < Y_LENGTH ; y++) {
		for (x = 0; x < X_LENGTH ; x++) {
			xx = x;
			yy = y;
			switch (rawData[y+1][x+1]) {
				case ">" :
					for (count = 0 ; count < X_LENGTH ; count++) {
						shiftIntoListUniqueNumbers(gData.land[yy][xx].bannedHorizontal,count);
						xx++;
						if (xx == X_LENGTH) {
							xx = 0;
						}
					}
				break;
				case "<" :
					for (count = 0 ; count < X_LENGTH ; count++) {
						shiftIntoListUniqueNumbers(gData.land[yy][xx].bannedHorizontal, count);
						xx--;
						if (xx == -1) {
							xx = X_LENGTH-1;
						}
					}
				break;
				case "v" :
					for (count = 0 ; count < Y_LENGTH ; count++) {
						shiftIntoListUniqueNumbers(gData.land[yy][xx].bannedVertical, count);
						yy++;
						if (yy == Y_LENGTH) {
							yy = 0;
						}
					}
				break;
				case "^" :
					for (count = 0 ; count < Y_LENGTH ; count++) {
						shiftIntoListUniqueNumbers(gData.land[yy][xx].bannedVertical, count);
						yy--;
						if (yy == -1) {
							yy = Y_LENGTH-1;
						}
					}
				break;
			}
		}
	}
	// Initialize "wasted time"
	gData.reachInTime = [];
	for (y = 0 ; y < Y_LENGTH ; y++) {
		for (x = 0 ; x < X_LENGTH ; x++) {
		
		}
	}
	
	
}

function conclusion_24_1() {
	init();
}

function findTheWay() {
	var x = X_ENTRANCE;
	var y = Y_ENTRANCE;	
}

function canGo(p_x, p_y, p_step) {
	return (findInSortedArray(gData.land[p_y][p_x].bannedHorizontal, p_step % X_LENGTH) == INDEX_NOT_FOUND) && 
		   (findInSortedArray(gData.land[p_y][p_x].bannedVertical, p_step % Y_LENGTH) == INDEX_NOT_FOUND);
}

function explore(p_x, p_y, p_wastedTime, p_from) {
	if (gData.reachInTime[p_y][p_x][p_wastedTime] != NOT_YET || !canGo(p_x, p_y, p_wastedTime)) {
		return;
	}
	gData.reachInTime[p_y][p_x][p_wastedTime] = p_from;
	if (p_wastedTime < MAXIMAL_STEPS-1) {
		return;
	}
	
}