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

const data : {
	arrayInfinity : null, // Array of (rawData.length) ; each entry should be true iff the corresponding point in rawData has an infinite expansion
	xMin : 0,
	yMin : 0,
	xMax : 0,
	yMax : 0,
}

function init() {
	data.xMin = rawData[0][0];
	data.xMax = rawData[0][0];
	data.yMin = rawData[0][1];
	data.yMax = rawData[0][1];
	arrayInfinity : generateArray(rawData.length, false);
	var x, y;
	var xP, yP;
	const DIRS = {
		L:0,
		U:1,
		R:2,
		D:3,
		LU:4,
		UR:5,
		RD:6,
		DL:7
	}
	var blocked = generateArray(8, false);
	var blockCount;
	
	// Determine whether each point is blocked in 4 directions
	// y ascending = going up
	for (var iP = 0 ; iP < rawData.length ; iP++) {
		xP = rawData[iP][0];
		yP = rawData[iP][1];
		blockCount = 0;
		for (var i = 0 ; i < rawData.length ; i++) {
			if (iP != i) {
				if (xP == x) {
					if (y < yP) {
						blocked[DIRS.D] = true;
					} else {
						blocked[DIRS.U] = true; 
					}
				}
				if (yP == y) {
					if (x < xP) {
						blocked[DIRS.R] = true;
					} else {
						blocked[DIRS.L] = true;
					}
				} else if (x % 2 + y % 2 + xP % 2 + yP % 2 == 0) { // Same parity of points
					blocked[DIRS.L] |= x < xP;
					blocked[DIRS.R] |= x > xP;
					blocked[DIRS.U] |= y > yP;
					blocked[DIRS.D] |= y < yP;					
				} else { // Different parity of points
					if (Math.abs(y-yP) > Math.abs(x-xP)) { // more y gap than x gap : link
						if (x < xP) {
							blocked[DIRS.R] = true;
						} else {
							blocked[DIRS.L] = true;
						}
					} else {
						if (y < yP) {
							blocked[DIRS.D] = true;
						} else {
							blocked[DIRS.U] = true; 
						}
					}
				}
			}
			if (blocked[DIRS.L] && blocked[DIRS.U] && blocked[DIRS.R] && blocked[DIRS.D]) {
				break;
			}
		}
		arrayInfinity[iP] = blocked[DIRS.L] && blocked[DIRS.U] && blocked[DIRS.R] && blocked[DIRS.D];
	}
}

function conclusion_6_1() {
	// For each point, find whether it has L/U/R/D boundaries with at least another point. It has no infinite expansion ONLY IF it has a limit with all four directions.
	// Also, it can have a limit left if it has a 
	
	
}