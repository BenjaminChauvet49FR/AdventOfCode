const rawData=`../.. => ###/.../#..
#./.. => #../.#./###
##/.. => #../###/#..
.#/#. => .#./##./#.#
##/#. => .#./.../...
##/## => .../#../#.#
.../.../... => #.##/#.../..##/.##.
#../.../... => .#../#..#/###./#.##
.#./.../... => ..../###./.###/##..
##./.../... => .###/##../.#.#/..#.
#.#/.../... => ..#./...#/.##./#.##
###/.../... => ##.#/..../#.../....
.#./#../... => .##./..../.##./.###
##./#../... => .##./##../#.#./#.#.
..#/#../... => .#../####/##.#/##.#
#.#/#../... => .##./##.#/#..#/#...
.##/#../... => .#../.#.#/####/....
###/#../... => .###/#.#./.#../...#
.../.#./... => ##.#/####/##../#..#
#../.#./... => #..#/..##/.###/.##.
.#./.#./... => #.../#..#/...#/#.#.
##./.#./... => .#.#/#..#/..#./##.#
#.#/.#./... => .##./#.#./##../#.##
###/.#./... => #.../...#/.#../.#.#
.#./##./... => ####/#.../#.../###.
##./##./... => ##../##../.#../##..
..#/##./... => ##.#/####/..##/.##.
#.#/##./... => .#.#/.##./..../#..#
.##/##./... => ..../.###/..#./###.
###/##./... => .###/.##./..../..#.
.../#.#/... => .###/####/..##/#.#.
#../#.#/... => .#../.##./..#./....
.#./#.#/... => ..##/#.##/###./#...
##./#.#/... => ...#/#..#/#.../##..
#.#/#.#/... => ####/#.#./####/.#..
###/#.#/... => #.##/####/..../#.#.
.../###/... => #..#/.##./.##./.#..
#../###/... => #..#/...#/#..#/...#
.#./###/... => ..##/###./..##/#.##
##./###/... => ###./####/#.../####
#.#/###/... => ..../#..#/.##./.##.
###/###/... => .###/#.#./#.#./#...
..#/.../#.. => #..#/...#/.###/.#.#
#.#/.../#.. => ...#/.###/..../.#..
.##/.../#.. => ..##/..##/#.../..#.
###/.../#.. => ..../..##/#.../.#.#
.##/#../#.. => ...#/#..#/##../.##.
###/#../#.. => .##./###./.##./#.#.
..#/.#./#.. => .##./..#./###./.#..
#.#/.#./#.. => .#.#/...#/#..#/.#..
.##/.#./#.. => #.../#.##/.###/.#..
###/.#./#.. => ##../#.#./#.##/#...
.##/##./#.. => ..#./##.#/..#./..##
###/##./#.. => ..##/..#./.##./###.
#../..#/#.. => ...#/.#.#/..../.#..
.#./..#/#.. => ..../.#.#/#..#/...#
##./..#/#.. => #.#./#.##/..#./.###
#.#/..#/#.. => #.#./...#/.#.#/....
.##/..#/#.. => .###/.##./..#./....
###/..#/#.. => .##./###./#.../.###
#../#.#/#.. => #.../..##/...#/..##
.#./#.#/#.. => ..##/###./###./..#.
##./#.#/#.. => ...#/.##./#..#/#.#.
..#/#.#/#.. => #..#/...#/###./###.
#.#/#.#/#.. => ####/...#/..#./##..
.##/#.#/#.. => ..../..#./..../#.##
###/#.#/#.. => .#../#.#./.###/#...
#../.##/#.. => .###/####/.#.#/.#..
.#./.##/#.. => ###./#.#./..../.#..
##./.##/#.. => #.##/..#./#.#./.##.
#.#/.##/#.. => ..#./..#./..../..#.
.##/.##/#.. => #..#/#.##/.#.#/###.
###/.##/#.. => .###/..../.#.#/....
#../###/#.. => ###./..#./..../#.##
.#./###/#.. => ..../##.#/####/####
##./###/#.. => ..#./##.#/.###/.###
..#/###/#.. => .###/.#../####/#.##
#.#/###/#.. => ...#/##../..../.#.#
.##/###/#.. => #.##/..#./#.../##..
###/###/#.. => ###./#.##/.###/....
.#./#.#/.#. => #.#./#.../..#./#.##
##./#.#/.#. => ####/.##./...#/.##.
#.#/#.#/.#. => ###./##.#/#.../#..#
###/#.#/.#. => .###/.#.#/..../...#
.#./###/.#. => #..#/.###/..#./.##.
##./###/.#. => .#.#/#.##/.#.#/###.
#.#/###/.#. => ...#/...#/##.#/....
###/###/.#. => ####/#.##/##../.#..
#.#/..#/##. => #.../...#/####/#...
###/..#/##. => ####/###./.##./.##.
.##/#.#/##. => .#.#/#.../####/####
###/#.#/##. => .#../#.#./.#../#.##
#.#/.##/##. => ##.#/#..#/#.../..##
###/.##/##. => ####/.#../.##./###.
.##/###/##. => .#../..#./#..#/.##.
###/###/##. => ...#/.#../..../..#.
#.#/.../#.# => #..#/##../#.##/###.
###/.../#.# => ..##/.#.#/#.#./#.#.
###/#../#.# => .#.#/###./..../.###
#.#/.#./#.# => ..##/#.##/#.../####
###/.#./#.# => ####/###./...#/.###
###/##./#.# => ..../##../####/.###
#.#/#.#/#.# => ..../..../.##./####
###/#.#/#.# => ##../#..#/.#.#/#..#
#.#/###/#.# => #..#/..../####/#.##
###/###/#.# => ####/..../.##./.#.#
###/#.#/### => .#.#/#..#/###./.##.
###/###/### => ##../#.##/.##./#..#`.split("\n");

var gSplits2, gSplits3;

function init() {
	gSplits2 = [];
	gSplits3 = [];
	var inArray, outArray, tokens;
	rawData.forEach(str => {
		inArray = [];
		outArray = [];
		tokens = str.split(" => ")
		if (tokens[0].length == 5) {
			gSplits2.push({input : arrayFromString(tokens[0]), output : arrayFromString(tokens[1])});
		} else {
			gSplits3.push({input : arrayFromString(tokens[0]), output : arrayFromString(tokens[1])});			
		}
	});
}

function arrayFromString(p_str) {
	var tokens = p_str.split('/');
	var answer = [];
	tokens.forEach(str => {
		answer.push(stringToCharArray(str));
	});
	return answer;
}

function conclusion_21_1() {
	return conclusion_21_aux(5); // 152
}

function conclusion_21_2() {
	return conclusion_21_aux(18); // 1956174 (could've taken longer :) )
}


function conclusion_21_aux(p_iters) {
	var data = arrayFromString(".#./..#/###");
	var newData;
	init();
	var xP, yP;
	var l, piece;
	for (var iter = 0 ; iter < p_iters ; iter++) {
		l = data.length;
		if (l % 2 == 0) {
			newData = generateDoubleEntryArray(l*3/2,l*3/2, '#'); 
			for (xP = 0 ; xP < l/2 ; xP++) {
				for (yP = 0 ; yP < l/2 ; yP++) {
					piece = findArray2x2(2*xP, 2*yP, data);
					transposePiece(newData, 3*xP, 3*yP, 3, piece);
				}
			}
		} else {
			newData = generateDoubleEntryArray(l*4/3,l*4/3, '#'); 
			for (xP = 0 ; xP < l/3 ; xP++) {
				for (yP = 0 ; yP < l/3 ; yP++) {
					piece = findArray3x3(3*xP, 3*yP, data);
					transposePiece(newData, 4*xP, 4*yP, 4, piece);
				}
			}
		}
		data = newData;
	}

	// Victory lap (be careful to re-set l though)
	l = data.length;
	var answer = 0;
	for (var y = 0 ; y < l ; y++) {
		for (var x = 0 ; x < l ; x++) {
			if (data[y][x] == '#') {
				answer++;
			}
		}
	}
	return answer;
}


// Copy pasted from 2020-20 :
const UNCHANGED = 0;
const TURN_CW = 1;
const TURN_U = 2;
const TURN_CCW = 3;
const FLIP_MAIN_DIAG = 4;
const FLIP_2ND_DIAG = 5;
const FLIP_VT = 6;
const FLIP_HZ = 7;
function getGoodMethodToConvertCoors(p_orientation, p_pieceLength) {
	switch(p_orientation) {
		case UNCHANGED :
			return function(x, y) {return {x : x, y : y}};
		break;
		case TURN_CCW :
			return function(x, y) {return {x : y, y : p_pieceLength-1-x}};		
		break;
		case TURN_CW :
			return function(x, y) {return {x : p_pieceLength-1-y, y : x}};
		break;
		case TURN_U :
			return function(x, y) {return {x : p_pieceLength-1-x, y : p_pieceLength-1-y}};		
		break;
		case FLIP_HZ :
			return function(x, y) {return {x : p_pieceLength-1-x, y : y}};
		break;
		case FLIP_MAIN_DIAG :
			return function(x, y) {return {x : y, y : x}};		
		break;
		case FLIP_2ND_DIAG :
			return function(x, y) {return {x : p_pieceLength-1-y, y : p_pieceLength-1-x}};		
		break;
		case FLIP_VT :
			return function(x, y) {return {x : x, y : p_pieceLength-1-y}};		
		break;
	}	
}

function findArray2x2(p_x, p_y, p_array) {
	var subArray = [
		[p_array[p_y][p_x], p_array[p_y][p_x+1]], 
		[p_array[p_y+1][p_x], p_array[p_y+1][p_x+1]]
	]; // WARNING when copy-paste !
	var iTransfo, iSplit, x, y, coors;
	var funTransfo, input;
	var output = null;
	var matches;
	for (iTransfo = 0 ; iTransfo < 8 ; iTransfo++) {		
		funTransfo = getGoodMethodToConvertCoors(iTransfo, 2);
		for (iSplit = 0 ; iSplit < gSplits2.length ; iSplit++) {
			input = gSplits2[iSplit].input;
			matches = true;
			for (y = 0 ; y < 2 ; y++) {
				for (x = 0 ; x < 2 ; x++) { // WARNING when copy/paste !
					coors = funTransfo(x, y);
					matches &= (subArray[y][x] == input[coors.y][coors.x]);
				}
			}
			if (matches) {
				return gSplits2[iSplit].output;
			}
		}
	}	
}

function findArray3x3(p_x, p_y, p_array) {
	var subArray = [
		[p_array[p_y][p_x], p_array[p_y][p_x+1], p_array[p_y][p_x+2]], 
		[p_array[p_y+1][p_x], p_array[p_y+1][p_x+1], p_array[p_y+1][p_x+2]],
		[p_array[p_y+2][p_x], p_array[p_y+2][p_x+1], p_array[p_y+2][p_x+2]]
	]; // WARNING when copy-paste !
	var iTransfo, iSplit, x, y, coors;
	var funTransfo, input;
	var output = null;
	var matches;
	for (iTransfo = 0 ; iTransfo < 8 ; iTransfo++) {		
		funTransfo = getGoodMethodToConvertCoors(iTransfo, 3);
		for (iSplit = 0 ; iSplit < gSplits3.length ; iSplit++) {
			input = gSplits3[iSplit].input;
			matches = true;
			for (y = 0 ; y < 3 ; y++) {
				for (x = 0 ; x < 3 ; x++) { // WARNING when copy/paste !
					coors = funTransfo(x, y);
					matches &= (subArray[y][x] == input[coors.y][coors.x]);
				}
			}
			if (matches) {
				return gSplits3[iSplit].output;
			}
		}
	}	
}

function transposePiece(p_final, p_xF, p_yF, p_length, p_input) {
	for (var y = p_yF ; y < p_yF+p_length ; y++) {
		for (var x = p_xF ; x < p_xF+p_length ; x++) {
			p_final[y][x] = p_input[y-p_yF][x-p_xF];
		}
	}
}