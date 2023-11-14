const rawData = [
[156, 193],
[81, 315 ],
[50, 197 ],
[84, 234 ],
[124, 162],
[339, 345],
[259, 146],
[240, 350],
[97, 310 ],
[202, 119],
[188, 331],
[199, 211],
[117, 348],
[350, 169],
[131, 355],
[71, 107 ],
[214, 232],
[312, 282],
[131, 108],
[224, 103],
[83, 122 ],
[352, 142],
[208, 203],
[319, 217],
[224, 207],
[327, 174],
[89, 332 ],
[254, 181],
[113, 117],
[120, 161],
[322, 43 ],
[115, 226],
[324, 222],
[151, 240],
[248, 184],
[207, 136],
[41, 169 ],
[63, 78  ],
[286, 43 ],
[84, 222 ],
[81, 167 ],
[128, 192],
[127, 346],
[213, 102],
[313, 319],
[207, 134],
[154, 253],
[50, 313 ],
[160, 330],
[332, 163]
];

var gData = {}
const UNKNOWN = -1;
const BLOCKED = -2;

function init() {
	gData.xMin = rawData[0][0];
	gData.xMax = rawData[0][0];
	gData.yMin = rawData[0][1];
	gData.yMax = rawData[0][1];
	gData.arrayInfinity = generateArray(rawData.length, false);
	var x, y;
	// Find xMin, xMax, yMin, yMax...
	rawData.forEach(coors => {
		x = coors[0];
		y = coors[1];
		if (gData.xMin > x) {
			gData.xMin = x;
		}
		if (gData.yMin > y) {
			gData.yMin = y;
		}
		if (gData.xMax < x) {
			gData.xMax = x;
		}
		if (gData.yMax < y) {
			gData.yMax = y;
		}
	});
}

function findMinima() {
	gData.array = generateDoubleEntryArray(gData.xMax-gData.xMin+1,gData.yMax-gData.yMin+1, UNKNOWN);
	// Setup land ; generation 0.
	gData.newlyExplored = []; 
	gData.newSpacesThisTime = new CheckCollectionDoubleEntry(gData.xMax-gData.xMin+1,gData.yMax-gData.yMin+1);
	for (var i = 0 ; i < rawData.length ; i++) {
		x = rawData[i][0]-gData.xMin;
		y = rawData[i][1]-gData.yMin;
		gData.array[y][x] = i;		
		gData.newlyExplored.push({x : x, y : y});
	};
	var r, xx, yy;
	// The "n-th" generation below reveals the new spaces at distance n of each origin point.
	// All spaces in "newlyExplored" are either explored by one nonnegative number (they belong permanently to that space) or blocked
	// For each space in newlyExplored that is not blocked : 
		// Explore the neighbors. For each neighbor, if it is :
			// out-of-bounds, declare the region unlimited (it can continue to explore within the array). Otherwise :
				// Unexplored, add them to newSpacesThisTime and explore them with the same number
				// Explored by the same number, do nothing
				// Explored by another number...
					// ...and not in newSpacesThisTime, don't add it
					// ... and in newSpacesThisTime, declare the space blocked (as they are the same distance of an origin point)
	// Eventually, newlyExplored takes the spaces of newSpacesThisTime, which is cleaned;
	while (gData.newlyExplored.length > 0) {
		gData.newlyExplored.forEach(coors => {
			x = coors.x;
			y = coors.y;
			r = gData.array[y][x];
			if (r == BLOCKED) {
				return;
			}
			if (x == 0) {
				gData.arrayInfinity[r] = true
			} else {
				exploreExistingSpace(x-1, y, r);
			}
			if (y == 0) {
				gData.arrayInfinity[r] = true
			} else {
				exploreExistingSpace(x, y-1, r);
			}
			if (x == gData.xMax-gData.xMin) {
				gData.arrayInfinity[r] = true
			} else {
				exploreExistingSpace(x+1, y, r);
			}
			if (y == gData.yMax-gData.yMin) {
				gData.arrayInfinity[r] = true
			} else {
				exploreExistingSpace(x, y+1, r);
			}			
		});
		// Eventually...
		gData.newlyExplored = [];
		gData.newSpacesThisTime.list.forEach(coors => {
			gData.newlyExplored.push({x : coors.x, y : coors.y});
		});
		gData.newSpacesThisTime.clean();
	}
}

// Explores the space p_x, p_y, from a space that contains the region r, in order to propagate it.
function exploreExistingSpace(p_x, p_y, r) {
	if (gData.array[p_y][p_x] == UNKNOWN) {
		gData.array[p_y][p_x] = r;
		gData.newSpacesThisTime.add(p_x, p_y);
	} else if (gData.array[p_y][p_x] != r && gData.newSpacesThisTime.get(p_x, p_y)) {
		gData.array[p_y][p_x] = BLOCKED;
	}		
}

function conclusion_6_1() {
	init();
	findMinima();
	// Victory lap !
	var count = generateArray(rawData.length, 0);
	for (var y = 0 ; y < gData.array.length ; y++) {
		for (var x = 0 ; x < gData.array[0].length ; x++) {
			if (gData.array[y][x] >= 0) {
				count[gData.array[y][x]]++;
			}
		}
	}
	var indexBest = -1;
	for (var i = 0 ; i < rawData.length ; i++) {
		if (!gData.arrayInfinity[i] && (indexBest == -1 || count[i] > count[indexBest])) {
			indexBest = i;
		}
	}
	return count[indexBest];
}

function conclusion_6_2() {
	// This time you need to sum the Manhattan distances of all the locations with a point. This can be done by summing the x distances and the y distances actually !
	init();
	var sumHorizDist = generateArray(gData.xMax-gData.xMin+1, 0);
	//var sumVertDist = generateArray(gData.yMax-gData.yMin+1, 0);
	for (var x = gData.xMin ; x <= gData.xMax ; x++) {
		for (var i = 0 ; i < rawData.length ; i++) {			
			sumHorizDist[x-gData.xMin] += Math.abs(rawData[i][0]-x);
		}
	}
	var answer = 0;
	var sumVertDistForY = 0;
	const THRESHOLD = 10000;
	for (var y = gData.yMin ; y <= gData.yMax ; y++) {
		sumVertDistForY = 0;
		for (var i = 0 ; i < rawData.length ; i++) {			
			sumVertDistForY += Math.abs(rawData[i][1]-y);
		}
		var ix = 0;
		while (sumVertDistForY + sumHorizDist[ix] >= THRESHOLD) {
			ix++;
		}
		while (ix < gData.xMax-gData.xMin+1 && sumVertDistForY + sumHorizDist[ix] < THRESHOLD) {
			ix++;
			answer++;
		}
	}
	return answer;
}