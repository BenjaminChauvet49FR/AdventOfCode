function conclusion_22_1() {
	var total = 0;
	var type;
	var geologic, erosion;
	var erosionsPreviousRow = [];
	var x, y;
	const XL = 9;
	const YL = 731;
	const DEPTH = 11109;
	/*const XL = 10;
	const YL = 10;
	const DEPTH = 510;*/
	// First line
	for (x = 0 ; x <= XL ; x++) {
		geologic = x*16807
		erosion = (geologic+DEPTH)%20183;
		erosionsPreviousRow.push(erosion);
		total += (erosion%3); // Type !
	}	
	// Next lines
	for (y = 1 ; y <= YL ; y++) {
		for (x = 0 ; x <= XL ; x++) {
			if (x == 0) {
				geologic = y*48271;
			} else {
				geologic = erosionsPreviousRow[x]*previousErosion;
			}
			if (x == XL && y == YL) {
				geologic = 0;
			}
			erosion = (geologic+DEPTH)%20183;
			erosionsPreviousRow[x] = erosion;
			previousErosion = erosion;
			total += (erosion%3); // Type !
		}
	}	
	return total;
}

var gData = {};

// Note : first, I extended by 9, 20 after the goal, but it wasn't enough. So I extended by 30, 80 and it was better... now, how about +100, +300 ?
// Okay, it was 1008. 
function init2() { // In how long do we reach each step ? 
	gData.xTarget = 9;
	gData.yTarget = 731;
	const DEPTH = 11109;
	gData.xL = gData.xTarget + 30; // I hope this margin will be enough
	gData.yL = gData.yTarget + 80; // Ditto 
	gData.parallelPlanArray = [];
	var x, y;
	var erosionArray = [[]];
	// First line
	for (x = 0 ; x <= gData.xL ; x++) {
		geologic = x*16807
		erosion = (geologic+DEPTH)%20183;
		erosionArray[0].push(erosion);
	}	
	// Next lines
	for (y = 1 ; y <= gData.yL ; y++) {
		erosionArray.push([]);
		for (x = 0 ; x <= gData.xL ; x++) {
			if (x == 0) {
				geologic = y*48271;
			} else {
				geologic = erosionArray[y-1][x]*erosionArray[y][x-1];
			}
			if (x == gData.xTarget && y == gData.yTarget) {
				geologic = 0;
			}
			erosion = (geologic+DEPTH)%20183;
			erosionArray[y].push(erosion);
		}
	}	
	// For each plan (1st entry) and each erosion mod 3 (2) give the other plan it can be accessed to, or -1.
	// Rocky (0) : cannot use "neither" (plan 0 - none used), so switch between plans 1 and 2
	// Wet (1) : cannot use "torch" (plan 1 - torch used)
	// Narrow (2) : cannot use "climb" (plan 2 - climb used)
	const selectionParallelPlan = [
		[-1, 2, 1],
		[2, -1, 0],
		[1, 0, -1]
	];
	for (var i = 0; i <= 2 ; i++) {
		gData.parallelPlanArray.push( generateArrangedDoubleEntryArray(gData.xL, gData.yL, function(x, y) {return selectionParallelPlan[i][erosionArray[y][x] % 3]}) );
	}
/*	// Target space is always rocky !
	gData.parallelPlanArray[0][gData.yTarget][gData.xTarget] = false; 
	gData.parallelPlanArray[1][gData.yTarget][gData.xTarget] = true;
	gData.parallelPlanArray[2][gData.yTarget][gData.xTarget] = true;*/
}


function conclusion_22_2() {
	init2();
	const startSpace = {x : 0, y : 0, p : 1}
	const goalSpace = {x : gData.xTarget, y : gData.yTarget, p : 1}
	
	// Always go for the space that is reachable in the lowest amount of time among all the immediately reachable spaces	
	// C/P from 2021-15 ?
	// NO ! You can't really copy from 2021-15 because what made this problem specific was that no matter where you came from, accessing a new space always added the same score no matter where you came from.
	// Instead we have 3 plans, and getting from one point to another without shifting plans when possible will always be faster than with shifting plans.
	
	// Wrong conclusion : 
	// 1) Spread the minimal distances from initial space and list all spaces in a "ready to spread in parallel plan" list
	// 2) While the list isn't empty :
		// Spread the minimal distances from the "parallel space" from the unproceeded space with the lowest time so far (well, in the index). 
	//Important : Any new space that is added in the "ready list" must be added AFTER already inserted spaces, so already processed spaces are always before not processed, allowing the use of an index.
	// NOOOO... "getting from one point to another without shifting plans when possible will always be faster than with shifting plans" is just plain false ! 
	// Plus the strategy of spreading minimal times in the same plan is just false, as going from A in a plan to B to another plan actually requires to switch plans at the accurate moment rather than at the beginning/end.
	var minimalTimeArray = [];
	for (var i = 0 ; i <= 2 ; i++) {		
		minimalTimeArray.push(generateDoubleEntryArray(gData.xL, gData.yL, -1));
	}
	minimalTimeArray[startSpace.p][0][0] = 0;
	readyList = [startSpace];
	
	var x, y, p, xx, yy, pp;
	var currentTime = 0;
	var lastNotEmptyTime = 0;
	var newSpaces = [
		[startSpace], // Spaces at time 0, 7, 14...
		[], // Spaces at time 7k+1
		[], // Spaces at time 7k+2...
		[],
		[],
		[],
		[]
	];
	var nextNewSpaces;
	while (currentTime - lastNotEmptyTime < 7) { // If 7 minutes have consecutively passed with empty lists... we have seen everything !
		nextNewSpaces = [];
		newSpaces[currentTime % 7].forEach(coors => {
			x = coors.x;
			y = coors.y;
			p = coors.p;
			if (minimalTimeArray[p][y][x] == currentTime) { // The space may be outdated ! So... proceed if it isn't !
				lastNotEmptyTime = currentTime;
				// Explore adjacent spaces
				existingNeighborsCoors(x, y, gData.xL, gData.yL).forEach(coors2 => {
					xx = coors2.x;
					yy = coors2.y;
					if (gData.parallelPlanArray[p][yy][xx] != -1 && (minimalTimeArray[p][yy][xx] == -1 || minimalTimeArray[p][yy][xx] > currentTime+1)) {
						minimalTimeArray[p][yy][xx] = currentTime+1;
						newSpaces[(currentTime+1)%7].push({x : xx, y : yy, p : p});
					}
				});
				// Explore space on parallel plan
				pp = gData.parallelPlanArray[p][y][x];
				if (minimalTimeArray[pp][y][x] == -1 || minimalTimeArray[pp][y][x] > currentTime+7) {
					minimalTimeArray[pp][y][x] = currentTime+7;
					nextNewSpaces.push({x : x, y : y, p : pp});
				}
			}
		});
		// Copy the next new spaces into the new spaces
		newSpaces[currentTime%7] = []
		nextNewSpaces.forEach(coors => {
			newSpaces[currentTime%7].push({x : coors.x, y : coors.y, p : coors.p});
		});
		currentTime++;
	}
	return minimalTimeArray[goalSpace.p][goalSpace.y][goalSpace.x];
}



