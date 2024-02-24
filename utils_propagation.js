// Utilitary in double entry arrays

/*
A double entry array contains some stuff and some regions that are delimited by element p_barrier
We fill the region of space (p_x, p_y) by propagation and count the region size filled this way.
*/
function countRegionSizeAndFill(p_array, p_barrier, p_x, p_y) {
	var listCoors = [{x : p_x, y : p_y}];
	var x, y;
	var total = 0;
	var coors;
	while (listCoors.length > 0) {
		coors = listCoors.pop();
		x = coors.x;
		y = coors.y;
		if (p_array[y][x] != p_barrier) {
			total++;
			p_array[y][x] = p_barrier;
			if (y > 0) {
				listCoors.push({x : x, y : y-1});
			}
			if (x > 0) {
				listCoors.push({x : x-1, y : y});
			}
			if (y < p_array.length-1) {
				listCoors.push({x : x, y : y+1});
			}
			if (x < p_array[0].length-1) {
				listCoors.push({x : x+1, y : y});
			}
		}
	}
	return total;
}

/*
A double entry array contains a maze made of '#s' (walls) and digits (0-9 in this first version).
The goal is to calculate all distances between the existing nodes.
Used in problem 2016-24.
Assumption : all edges are #s.
*/
function findDistancesClassicMaze(p_charArray) {
	var coorsPos = [];
	var coorsStart = null;
	var x, y;
	var charac;
	for (y = 0 ; y < p_charArray.length ; y++) {
		for (x = 0 ; x < p_charArray[0].length ; x++) {
			charac = p_charArray[y][x];
			if (charac != '#' && charac != '.') {
				coorsPos.push({x : x, y : y, index : digit(charac)});
			}
		}
	}
	coorsPos.sort(function(c1, c2) {return c1.index-c2.index});	
	var field = new CheckCollectionDoubleEntry(p_charArray[0].length, p_charArray.length);
	var distances = generateDoubleEntryArray(coorsPos.length, coorsPos.length, 0);
	var distance, yetToFound, coorsToExplore, futureCoorsToExplore, coors, x, y, dgt, chr;
	for (var i = 0 ; i < coorsPos.length ; i++) {
		distance = 0;
		yetToFound = coorsPos.length-i-1; // don't count the number itself
		coorsToExplore = [{x : coorsPos[i].x, y : coorsPos[i].y}];
		while (yetToFound > 0) {
			futureCoorsToExplore = [];
			for (var j = 0 ; j < coorsToExplore.length ; j++) {				
				coors = coorsToExplore[j];
				x = coors.x;
				y = coors.y;
				if (field.add(x, y)) {
					chr = p_charArray[y][x];
					dgt = digit(chr);
					if (dgt != UTILS_CHAR_INVALID && dgt > i) {
						distances[i][dgt] = distance;
						distances[dgt][i] = distance;
						yetToFound--;
					}
					if (chr != '#') {
						futureCoorsToExplore.push({x : x+1, y : y});					
						futureCoorsToExplore.push({x : x-1, y : y});					
						futureCoorsToExplore.push({x : x, y : y+1});					
						futureCoorsToExplore.push({x : x, y : y-1});					
					}
				}
			}
			copiesCoorsList(futureCoorsToExplore, coorsToExplore);
			if (yetToFound > 0) {			
				distance++;
			}
		}
		field.clean();
	
	} // For one point
	return distances;
}