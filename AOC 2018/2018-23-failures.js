const rawData = [
"See original"]

var gData;

function init() {
	// See original
}

function conclusion_23_1() {
	// See original
}

// Tests if a nanobot at an index reaches a cuboid (term used in 2021-22). All points are included.
function intersects(p_index, p_xMin, p_xMax, p_yMin, p_yMax, p_zMin, p_zMax) {
	// Test center is in the range of how many min-max coordinates. (eg see if x is in [p_xMin, p_xMax[, same for y and z)
	// If center in range of all 3 coordinates : it definitely intersects
	// If center in range of no coordinate : see if the closest vertice to the center intersects 
	// If center in range of one coordinate : see if any point on the closest face intersects
	
	
	const x = gData[p_index].x;
	const y = gData[p_index].y;
	const z = gData[p_index].z;
	const r = gData[p_index].r;
	const XCBeforeXMin = !(p_xMin <= x);
	const XCAfterXMax = !(p_xMax >= x);
	const YCBeforeYMin = !(p_yMin <= y);
	const YCAfterYMax = !(p_yMax >= y);
	const ZCBeforeZMin = !(p_zMin <= z);
	const ZCAfterZMax = !(p_zMax >= z);
	
/*	
const XCInRange = (!XCBeforeXMin && !XCAfterXMax);
	const YCInRange = (!YCBeforeYMin && !XYCAfterYMax);
	const ZCInRange = (!ZCBeforeZMin && !ZCAfterZMax);
	
if (XCInRange && YCInRange && ZCInRange) {
		return true;
	}
if (XCInRange) {
		if (YCInRange) {			
			if (ZCBeforeZMin) {return p_zMin-z <= r;} else {return z-p_zMax <= r; }
		} else if (ZCInRange) {
			if (YCBeforeYMin) {return p_yMin-y <= r;} else {return y-p_yMax <= r; }				
		} else {
			var minRange = 0;
			if (YCBeforeYMin) {minRange = p_yMin-y;} else {minRange = y-p_yMax;}
			if (ZCBeforeZMin) {minRange = p_zMin-z;} else {minRange = z-p_zMax;}
			return minRange <= r;
		}
	} else if (YCInRange) {
		if (ZCInRange) {			
			if (XCBeforeXMin) {return p_xMin-x <= r;} else {return x-p_xMax <= r; }		
		} else {
			var minRange = 0;
			if (XCBeforeXMin) {minRange = p_xMin-x;} else {minRange = x-p_xMax;}
			if (ZCBeforeZMin) {minRange = p_zMin-z;} else {minRange = z-p_zMax;}
			return minRange <= r;
		}
	} else if (ZCInRange) {

	} else {
		
	}*/
	var maxRange = 0;
	if (XCBeforeXMin) {maxRange += p_xMin-x;}
	if (XCAfterXMax) {maxRange += x-p_xMax;}
	if (YCBeforeYMin) {maxRange += p_yMin-y;}
	if (YCAfterYMax) {maxRange += y-p_yMax;}
	if (ZCBeforeZMin) {maxRange += p_zMin-z;}
	if (ZCAfterZMax) {maxRange += z-p_zMax;}
	return maxRange <= r;
}

const gSolution = {};

// Find xMin, yMin, zMin, xMax, yMax, zMax of all centers + range.
function init2() {
	gSolution.xMin = gData[0].x;
	gSolution.yMin = gData[0].y;
	gSolution.zMin = gData[0].z;
	gSolution.xMax = gData[0].x;
	gSolution.yMax = gData[0].y;
	gSolution.zMax = gData[0].z;
	var nb; // Nanobot at index i
	for (var i = 0 ; i < gData.length ; i++) {
		nb = gData[i];
		gSolution.xMin = Math.min(nb.x-nb.r, gSolution.xMin);
		gSolution.xMax = Math.max(nb.x+nb.r, gSolution.xMax);
		gSolution.yMin = Math.min(nb.y-nb.r, gSolution.yMin);
		gSolution.yMax = Math.max(nb.y+nb.r, gSolution.yMax);
		gSolution.zMin = Math.min(nb.z-nb.r, gSolution.zMin);
		gSolution.zMax = Math.max(nb.z+nb.r, gSolution.zMax);
	}
	// Modulus works weirdly in JS below 0. Anyway, set mines to the multiple of 10M immediately below, and maxes to the multiple of 10M-1 immediately above
	gSolution.SPLITTER = 10000000;
	gSolution.xMin -= gSolution.SPLITTER;
	gSolution.xMin -= (gSolution.xMin % gSolution.SPLITTER);
	gSolution.xMax += (gSolution.SPLITTER - (gSolution.xMax % gSolution.SPLITTER) -1);
	gSolution.yMin -= gSolution.SPLITTER;
	gSolution.yMin -= (gSolution.yMin % gSolution.SPLITTER);
	gSolution.yMax += (gSolution.SPLITTER - (gSolution.yMax % gSolution.SPLITTER) -1);
	gSolution.zMin -= gSolution.SPLITTER;
	gSolution.zMin -= (gSolution.zMin % gSolution.SPLITTER);
	gSolution.zMax += (gSolution.SPLITTER - (gSolution.zMax % gSolution.SPLITTER) -1);
	
	gSolution.absoluteMax = 1; // range count of the pixel that is in range of the max # of the nanobots
	gSolution.absoluteMaxDistance = gSolution.xMax+gSolution.yMax+gSolution.zMax; // Distance from 0,0,0
	
	gSolution.matches = generateArrangedArray(gData.length, function(x) {return [x]});
	var nb1, nb2;
	for (var i = 0 ; i < gData.length ; i++) {
		nb1 = gData[i];
		for (var j = i+1 ; j < gData.length ; j++) {
			nb2 = gData[j];
			if (Math.abs(nb2.x-nb1.x) + Math.abs(nb2.y-nb1.y) + Math.abs(nb2.z-nb1.z) <= nb1.r + nb2.r) {				
				gSolution.matches[j].push(i);
				gSolution.matches[i].push(j);
			}
		}
	}
	sortDescending(gSolution.matches, [function(x) {return x.length}]);
}

// After I sorted all things, it happened that 977 nanobots had 976 or more in sight(so with themselves 977), which means we could have an intersection of 977.
// Let's find the intersection of... well, all cubes (eg all xyz cuboids - rather than octaedres - centered around the centers)
// Note : in gSolution.matches, all arrays contain their own index so that we know which is which even after sorting
function manualIntersectionOfCubes() {
	var xMin = gSolution.xMin;
	var xMax = gSolution.xMax;
	var yMin = gSolution.yMin;
	var yMax = gSolution.yMax;
	var zMin = gSolution.zMin;
	var zMax = gSolution.zMax;
	var nb;
	for (var i = 0 ; i < 977 ; i++) {
		nb = gData[gSolution.matches[976][i]];
		xMin = Math.max(xMin, nb.x-nb.r);
		xMax = Math.min(xMax, nb.x+nb.r);
		yMin = Math.max(yMin, nb.y-nb.r);
		yMax = Math.min(yMax, nb.y+nb.r);
		zMin = Math.max(zMin, nb.z-nb.r);
		zMax = Math.min(zMax, nb.z+nb.r);
	}
	// xMMin = "xManual min"
	gSolution.xMMin = xMin; 
	gSolution.xMMax = xMax; 
	gSolution.yMMin = yMin; 
	gSolution.yMMax = yMax; 
	gSolution.zMMin = zMin; 
	gSolution.zMMax = zMax; 
	
	// Okay, xMMin, yMMin, zMMin are all positive. If for some reason the vertice with the smallest coordinates (so the closest one of 0,0,0) is within range of all 977 nanobots, we win.
/*	for (var i = 0 ; i < 977 ; i++) {
		nb = gData[gSolution.matches[976][i]];
		if (Math.abs(nb.x-gSolution.xMMin) + Math.abs(nb.y-gSolution.yMMin) + Math.abs(nb.z-gSolution.zMMin) > nb.r) {
			return -1;
		}
	}
	return gSolution.xMMin+gSolution.yMMin+gSolution.zMMin;*/
	// LOL Nice try !
	
	// Anyways let's split the xMMin cuboid into 2 and see if there is one half that contains all the nanobots. Then rinse and repeat. 
	/*var count1 = 0;
	var count2 = 0;
	xHalf = Math.floor((gSolution.xMMin+gSolution.xMMax)/2);
	for (var i = 0 ; i < 977 ; i++) {
		if (intersects(gSolution.matches[976][i], gSolution.xMMin, xHalf, gSolution.yMMin, gSolution.yMMax, gSolution.zMMin, gSolution.zMMax)) {
			count1++;
		}
		if (intersects(gSolution.matches[976][i], xHalf+1, gSolution.xMMax, gSolution.yMMin, gSolution.yMMax, gSolution.zMMin, gSolution.zMMax)) {
			count2++;
		}
	}*/ // Hum... both boxes contain 977 ranges. So not the best idea.
	
}

function findLimitations(p_octaedre) {
	// See original
}


var gPlans;
var gLimitations;
var gTree;

function init3() {
	gLimitations = [];
	gPlans = {
		XYZ : [],
		mXYZ : [],
		XmYZ : [],
		XYmZ : []
	}
	gData.forEach(octaedre => {
		var limitations = findLimitations(octaedre);
		shiftIntoListUniqueNumbers(gPlans.XYZ, limitations.XYZmin);
		shiftIntoListUniqueNumbers(gPlans.XYZ, limitations.XYZmax+1);
		shiftIntoListUniqueNumbers(gPlans.mXYZ, limitations.mXYZmin);
		shiftIntoListUniqueNumbers(gPlans.mXYZ, limitations.mXYZmax+1);
		shiftIntoListUniqueNumbers(gPlans.XmYZ, limitations.XmYZmin);
		shiftIntoListUniqueNumbers(gPlans.XmYZ, limitations.XmYZmax+1);
		shiftIntoListUniqueNumbers(gPlans.XYmZ, limitations.XYmZmin);
		shiftIntoListUniqueNumbers(gPlans.XYmZ, limitations.XYmZmax+1);
		gLimitations.push(limitations);
		gTree = generateArrangedArray(gPlans.XYZ.length, function(x) {return []});
	});
}

/*

// This was supposed to cause four for loops to increase a giant tree of parts... but this was dropped out !
function calculatePresences(p_limits) {
	const ind1_XYZ = gPlans.XYZ.indexOf(p_limits.XYZmin);
	const ind2_XYZ = gPlans.XYZ.indexOf(p_limits.XYZmax+1)-1;
	const ind1_mXYZ = gPlans.mXYZ.indexOf(p_limits.mXYZmin);
	const ind2_mXYZ = gPlans.mXYZ.indexOf(p_limits.mXYZmax+1)-1;
	const ind1_XmYZ = gPlans.XmYZ.indexOf(p_limits.XmYZmin);
	const ind2_XmYZ = gPlans.XmYZ.indexOf(p_limits.XmYZmax+1)-1;
	const ind1_XYmZ = gPlans.XYmZ.indexOf(p_limits.XYmZmin);
	const ind2_XYmZ = gPlans.XYmZ.indexOf(p_limits.XYmZmax+1)-1;
	for (var i1 = ind1_XYZ ; i1 <= ind2_XYZ ; i1++) {
		insertIfNeeded(gTree, i1, gPlans.XmYZ.length, false);
		for (var i2 = ind1_mXYZ ; i2 <= ind2_mXYZ ; i2++) {
			insertIfNeeded(gTree[i1], i2, gPlans.XYmZ.length, false);
			for (var i3 = ind1_XmYZ ; i3 <= ind2_XmYZ ; i3++) {
				insertIfNeeded(gTree[i1][i2], i3, gPlans.XYmZ.length, true);
				for (var i4 = ind1_XYmZ ; i4 <= ind2_XYmZ ; i4++) {
					gTree[i1][i2][i3][i4]++;
				}
			}
		}
	}
}

function insertIfNeeded(p_array, p_index, p_numbers, p_isNumeric) {
	if (p_array[p_index].length == 0) {
		if (p_isNumeric) {
			p_array[p_index] = generateArray(p_numbers, 0);
		} else {
			p_array[p_index] = generateArrangedArray(p_numbers, function(x) {return []});			
		}
	}
}*/



// FAILED ! (or is it ?)
// 1) set the overallMax at 0
// 2) 
	// divide the area into, say, 1000 cuboids
	// For each cuboid :
		// Find all nanobots that reach it
		// If the number of nanobots that reach the cuboid > the overallMax 
			// If cuboid is small enough, examine all pixels one by one (may give another overallMax)
			// Otherwise, reiterate on that cuboid (divide it and proceed cuboid by cuboid)
		// Otherwise, just skip that cuboid

function conclusion_23_2() {
	init();
	init2();
	manualIntersectionOfCubes()
	//indexList = generateArrayFromToIncluded(0, rawData.length-1); 
	//examinate(indexList, gSolution.xMin, gSolution.xMax, gSolution.yMin, gSolution.yMax, gSolution.zMin, gSolution.zMax, gSolution.SPLITTER);
	
	
	gSolution.SPLITTER = 1000000; // 6M, 14M, 12M : gaps for manuals MMin/MMaxes
	gSolution.xMMin -= gSolution.SPLITTER;
	gSolution.xMMin -= (gSolution.xMMin % gSolution.SPLITTER);
	gSolution.xMMax += (gSolution.SPLITTER - (gSolution.xMMax % gSolution.SPLITTER) -1);
	gSolution.yMMin -= gSolution.SPLITTER;
	gSolution.yMMin -= (gSolution.yMMin % gSolution.SPLITTER);
	gSolution.yMMax += (gSolution.SPLITTER - (gSolution.yMMax % gSolution.SPLITTER) -1);
	gSolution.zMMin -= gSolution.SPLITTER;
	gSolution.zMMin -= (gSolution.zMMin % gSolution.SPLITTER);
	gSolution.zMMax += (gSolution.SPLITTER - (gSolution.zMMax % gSolution.SPLITTER) -1);
	gSolution.absoluteMax = 945;
	examinate(gSolution.matches[976], gSolution.xMMin, gSolution.xMMax, gSolution.yMMin, gSolution.yMMax, gSolution.zMMin, gSolution.zMMax, gSolution.SPLITTER); 
	return gSolution.absoluteMaxDistance;
}

function examinate(p_indexList, p_xMin, p_xMax, p_yMin, p_yMax, p_zMin, p_zMax, p_step) {
	// Assumption : at start, x amplitude, y amplitude and z amplitude are a multiple of 10M, each < 100*10M  
	if (p_step == 1) { // 55 15 51 WARNING : is it the correct value to examinate pixel by pixel ?
		// Directly examinate pixel by pixel
		var total = 0;
		var bot;
		var d;
		for (var x = p_xMin ; x < p_xMax ; x++) {
			for (var y = p_yMin ; y < p_yMax ; y++) {
				for (var z = p_zMin ; z < p_zMax ; z++) {
					total = 0;
					p_indexList.forEach(index => {
						bot = gData[index];
						if (Math.abs(bot.x - x) + Math.abs(bot.y - y) + Math.abs(bot.z - z) <= bot.r) {
							total++;
						}
					});
					if (total > gSolution.absoluteMax) {
						gSolution.absoluteMax = total;
						gSolution.absoluteMaxDistance = Math.abs(x) + Math.abs(y) + Math.abs(z);
					} else if (total == gSolution.absoluteMax) {
						d = Math.abs(x) + Math.abs(y) + Math.abs(z);
						if (d < gSolution.absoluteMaxDistance) {
							gSolution.absoluteMaxDistance = d;
						}
					}
				}
			}
		}
	} else {
		var xMin, yMin, zMin;
		var indexesInCuboid;
		for (var x = p_xMin ; x < p_xMax ; x+=p_step) {
			for (var y = p_yMin ; y < p_yMax ; y+=p_step) {
				for (var z = p_zMin ; z < p_zMax ; z+=p_step) {
					indexesInCuboid = [];
					// Fill with the nanobots that intersect the current cuboid
					p_indexList.forEach(index => {
						bot = gData[index];
						if (intersects(index, x, x+p_step-1, y, y+p_step-1, z, z+p_step-1)) {
							indexesInCuboid.push(index);
						}
					});
					if (indexesInCuboid.length >= gSolution.absoluteMax) {
						examinate(indexesInCuboid, x, x+p_step-1, y, y+p_step-1, z, z+p_step-1, p_step/10);
					}
				}
			}
		}
	}
}	