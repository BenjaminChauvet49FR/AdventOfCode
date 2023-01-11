const rawData = [
".##...#.",
".#.###..",
"..##.#.#",
"##...#.#",
"#..#...#",
"#..###..",
".##.####",
"..#####."
/*".#.",
"..#",
"###"*/
];

const gData = {};

function init() {
	gData.cubes = [[],[]];
	gData.futureIndex = 1;
	gData.currentIndex = 0;
	gData.landSide = 30;
	gData.landHeight = 17;
	gData.firstLine = 8;
	for (var i = 0 ; i < gData.landHeight ; i++) {
		gData.cubes[0].push(generateDoubleEntryArray(gData.landSide, gData.landSide, false));
		gData.cubes[1].push(generateDoubleEntryArray(gData.landSide, gData.landSide, false));
	}
	var x, y;
	const xMinInit = Math.floor((20-rawData[0].length)/2);
	const yMinInit = Math.floor((20-rawData.length)/2);
	const xMaxInit = xMinInit + rawData[0].length;
	const yMaxInit = yMinInit + rawData.length;
	for (y = yMinInit ; y < yMaxInit ; y++) {
		for (x = xMinInit ; x < xMaxInit ; x++) {
			gData.cubes[gData.currentIndex][gData.firstLine][y][x] = (rawData[y-yMinInit][x-xMinInit] == '#');
		}
	}
}


function getCubesAround(p_h, p_x, p_y) {
	var val = 0;
	for (hh = p_h-1 ; hh <= p_h+1 ; hh++) {
		for (xx = p_x-1 ; xx <= p_x+1 ; xx++) {
			for (yy = p_y-1 ; yy <= p_y+1 ; yy++) {
				if (gData.cubes[gData.currentIndex][hh][yy][xx]) {
					val++;
					if (val >= 5) {
						return val;
					}
				}
			}
		}
	}
	if (gData.cubes[gData.currentIndex][p_h][p_y][p_x]) {
		val--;
	}
	return val;
}

function conclusion_17_1() {
	init();
	var h, x, y, cubesAround, hh, xx, yy;
	for (var i = 0 ; i < 6 ; i++) {
		for (h = 1 ; h < gData.landHeight-1 ; h++) {
		//for (h = gData.firstLine-i-1 ; h <= gData.firstLine+i+1 ; h++) {
			for (y = 1 ; y < gData.landSide-1 ; y++) {
				for (x = 1 ; x < gData.landSide-1 ; x++) {
					cubesAround = getCubesAround(h, x, y);
					if (gData.cubes[gData.currentIndex][h][y][x]) {						
						gData.cubes[gData.futureIndex][h][y][x] = (cubesAround == 2 || cubesAround == 3);
					} else {
						gData.cubes[gData.futureIndex][h][y][x] = (cubesAround == 3);
					}
					
				}
			}
		}
		gData.futureIndex = 1-gData.futureIndex;
		gData.currentIndex = 1-gData.currentIndex;
		log3DArray(gData.cubes[gData.currentIndex]);
		console.log("=========");
	}
	var count = 0;
	for (h = 0 ; h < gData.landHeight ; h++) {
		for (y = 0 ; y < gData.landSide ; y++) {
			for (x = 0 ; x < gData.landSide ; x++) {
				if (gData.cubes[gData.currentIndex][h][y][x]) {			
					count++;
				} 
			}
		}
	}
	return count; 
} // The answer is NOT 383 ???

