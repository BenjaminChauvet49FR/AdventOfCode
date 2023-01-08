console.log("Data too big. Make sure solving19data.js is included !");
// How to make data file from data ?
// 0 : copy data
// 1 : desactivate regex, replace all "--- scanner 0 " with "]"
// 2 : replace all "---" with "["
// 3 : activate regex, replace all "\].+\[" with "],\r\n["
// 4 : add [ and ] at the very beginning and end of file
// 5 : replace all "\r\n\r\n" with "\r\n"
// 6 : add "[" and "]," in columns, then replace " ]" with "]" (as usual)
// 7 : desactivate regex, discard all "[],"
// 8 : verify everything is fine, and name the variable.

const scannerData = scannerDataOfficial;

// INDIRECT TRIEDRE !
var gData = {};
const COOR_0_POSITIVE = 0;
const COOR_0_NEGATIVE = 1;
const COOR_1_POSITIVE = 2;
const COOR_1_NEGATIVE = 3;
const COOR_2_POSITIVE = 4;
const COOR_2_NEGATIVE = 5;
const POSSIBLE_FACINGS = [0, 1, 2, 3, 4, 5];
const LABEL_FACINGS = ["X_POS", "X_NEG", "Y_POS", "Y_NEG", "Z_POS", "Z_NEG"];
const UNKNOWN = -1;
const UNKNOWN_COOR = null;
const NO_TURN = 0;
const TURN_CLOCKWISE = 1;
const TURN_UPSIDEDOWN = 2;
const TURN_COUNTERCLOCKWISE = 3;

// We assume we are in an indirect triedre (since it doesn't matter) and that 0 is facing x positive, with y on its right and z on its up. Only thing that matters is that it's consistent between all scanners.
// Thx google image for helping me visualizing things.
// In comments, x y and z are coordinates 0, 1, 2. They shouldn't be, but hey...
function init() {
	gData.scanners = [];
	var ascendingXs;
	var ascendingYs;
	var ascendingZs;
	var scanner;
	for (var iScan = 0 ; iScan < scannerData.length ; iScan++) {
		scanner = scannerData[iScan];
		ascendingXs = generateArrayFromToIncluded(0, scanner.length-1);
		ascendingYs = generateArrayFromToIncluded(0, scanner.length-1);
		ascendingZs = generateArrayFromToIncluded(0, scanner.length-1);
		sortAscending(ascendingXs, [function(p_index) {return scannerData[iScan][p_index][0]} ]);
		sortAscending(ascendingYs, [function(p_index) {return scannerData[iScan][p_index][1]} ]);
		sortAscending(ascendingZs, [function(p_index) {return scannerData[iScan][p_index][2]} ]);
		gData.scanners.push(
			{
			id : iScan,
			validOrientation : false, // Will serve later !
			seenIndexesAscendingInCoor:[ascendingXs.slice(), // Indexes of the (1st/2nd/3rd coordinates seen by the scanner (in its orientation) in ascending order)
			                            ascendingYs.slice(),
			                            ascendingZs.slice()],
			seenCoors : []
			}
		);
		// For readability
		for (var iCoors = 0 ; iCoors < scanner.length ; iCoors++) {
			gData.scanners[iScan].seenCoors.push(scannerData[iScan][iCoors].slice());
		}
	}	
}

// Tries to give an alignment of the 2nd scanner relative to the 1st scanner, if it has any.
// Alignment found : at least 12 common beacons. Here, researches are stopped !
// Requires that "facing" is correctly defined as shown above !!!
function tryToFindOrientation(p_scanner1st, p_scannerToOrient) {
	var facing2;
	var matching, matchingAdvanced;
	// For the 1st scanner, we are assuming we are facing X positive !
	for (facing2 = 0 ; facing2 <= 5 ; facing2++) {
		matching = find12CommonCoorsFacings(p_scanner1st, p_scannerToOrient, Math.floor(facing2/2), (facing2 % 2 == 1)); // Returns pairs of indexes of beacons that have chances to match since their coordinates match.
		if (matching != null) {
			// Now, check if orientations match.
			matchingAdvanced = analyzeMatchingOnAxis(p_scanner1st, p_scannerToOrient, facing2, matching);
			if (matchingAdvanced) {
				return true;
			} 
		}
	}
	return false;
}

// We assume the observation on 1st axis is always positive
function find12CommonCoorsFacings(p_scanner1, p_scanner2, p_axis2, p_reverse2) {
	var i1, i2;
	var indexes1 = p_scanner1.seenIndexesAscendingInCoor[0];
	var indexes2;
	// if (!p_reverse2) {
		indexes2 = p_scanner2.seenIndexesAscendingInCoor[p_axis2];
	// } else {
	//	indexes2 = p_scanner2.seenIndexesAscendingInCoor[p_axis2].slice().reverse(); // Now, we fix that both indexes1 and indexes2 are for ascending coors.
	// }
	var indexesAlignedFor1, indexesAlignedFor2;
	var areMatching;
	var basis1, basis2;
	var ii1, ii2;
	for (i1 = 0 ; i1 <= indexes1.length - 12 ; i1++) {
		for (i2 = 0 ; i2 <= indexes2.length - 12 ; i2++) {
			indexesAlignedFor1 = [indexes1[i1]];
			indexesAlignedFor2 = p_reverse2 ? [atPosFromEnd(indexes2, i2)] : [indexes2[i2]];
			basis1 = p_scanner1.seenCoors[indexes1[i1]][0];
			if (!p_reverse2) {				
				basis2 = p_scanner2.seenCoors[indexes2[i2]][p_axis2];
			} else {
				basis2 = p_scanner2.seenCoors[atPosFromEnd(indexes2,i2)][p_axis2];
			}
			for (ii1 = i1+1 ; ii1 < indexes1.length ; ii1++) {
				for (ii2 = i2+1 ; ii2 < indexes2.length ; ii2++) {
					if (!p_reverse2) {
						areMatching = (p_scanner1.seenCoors[indexes1[ii1]][0] - basis1 == p_scanner2.seenCoors[indexes2[ii2]][p_axis2] - basis2);
					} else {
						areMatching = (p_scanner1.seenCoors[indexes1[ii1]][0] - basis1 == basis2 - p_scanner2.seenCoors[atPosFromEnd(indexes2,ii2)][p_axis2]);
					}
					if (areMatching) {				
						indexesAlignedFor1.push(indexes1[ii1]);
						if (!p_reverse2) {
							indexesAlignedFor2.push(indexes2[ii2]);
						} else {							
							indexesAlignedFor2.push(atPosFromEnd(indexes2,ii2));
						}
					}
				}
			}
			if (indexesAlignedFor1.length >= 12) {
				return {
					indexesAlignedForScanner1ThisAxis : indexesAlignedFor1.slice(), 
					indexesAlignedForScanner2ThisAxis : indexesAlignedFor2.slice(),
					basis1 : basis1,
					basis2 : basis2
				}
			}
		}
	}	
	
	return null;
}

function atPosFromEnd(p_array, p_index) {
	return p_array[p_array.length-1-p_index];
}

// Now, we have at least 12 common indexes. Let's see if for each pair, they see the same thing on this axis.
function analyzeMatchingOnAxis(p_scanner1, p_scanner2, p_facing2, p_commonIndexes) {
	// We know that we (potentially) have one coordinate facing !
	//console.log(p_scanner1.id + " orientated " + LABEL_FACINGS[0] + " matches with " + p_scanner2.id + " orientated " + LABEL_FACINGS[p_facing2]) ; // Among last logs part 1
	//console.log("basis 1 = " + p_commonIndexes.basis1 + ", basis 2 = " + p_commonIndexes.basis2) ;
	
	/*console.log("--- ")
	console.log("Match of these scanners : ")
	console.log(p_scanner1.id + " orientated " + LABEL_FACINGS[0]);
	console.log(spyCoors(p_scanner1, 0, p_commonIndexes.indexesAlignedForScanner1ThisAxis));
	console.log(p_scanner2.id + " orientated " + LABEL_FACINGS[p_facing2]);
	console.log(spyCoors(p_scanner2, Math.floor(p_facing2/2), p_commonIndexes.indexesAlignedForScanner2ThisAxis));*/
	
	// We know that p_facing2 of p_scanner2 corresponds to the x positive of p_scanner1. Let's apply the transformation that turns p_facing2 into p_facing1 :
	if (p_facing2 == COOR_0_NEGATIVE) {
		halfTurnToXScanner(p_scanner2); // Turn x negative into x positive and change the sign of either y or z while keeping the other one. Let's say we change z cause we'll work soon on y.
	} else if (p_facing2 == COOR_1_POSITIVE) {
		spinScanner(p_scanner2, {axis1 : 1, sign1 : 1, axis2 : 0});
	} else if (p_facing2 == COOR_1_NEGATIVE) {
		spinScanner(p_scanner2, {axis1 : 1, sign1 : -1, axis2 : 0});
	} else if (p_facing2 == COOR_2_POSITIVE) {
		spinScanner(p_scanner2, {axis1 : 2, sign1 : 1, axis2 : 0});
	} else if (p_facing2 == COOR_2_NEGATIVE) {
		spinScanner(p_scanner2, {axis1 : 2, sign1 : -1, axis2 : 0});
	}
	// Scanner 2 has the same x positive as scanner 1, good ! Now let's reorder them both !
	/*if (!p_scanner2.sorted) {	  // THIS IF SHOULD NOT BE IN FINAL VERSION !	
		sortAscending(p_scanner2.seenCoors, [function(p_coors) {return p_coors[0]}, function(p_coors) {return p_coors[1]}, function(p_coors) {return p_coors[2]}]);
		p_scanner2.sorted = true;
	}
	if (!p_scanner1.sorted) {
		p_scanner1.sorted = true;
		sortAscending(p_scanner1.seenCoors, [function(p_coors) {return p_coors[0]}, function(p_coors) {return p_coors[1]}, function(p_coors) {return p_coors[2]}]);	
	}*/ // DON'T DO IT NOW, YOU DUMMY !
	
	
	// Now, identify what matches p_scanner1.y axis
	var i, ind1, ind2;
	var facingMatchingY1Axis = UNKNOWN;
	const basisY1 = p_scanner1.seenCoors[p_commonIndexes.indexesAlignedForScanner1ThisAxis[0]][1];
	var basis2;
	var countMatch;
	// y positive for 1 = y positive for 2 ?
	countMatch = 0;
	basis2 = p_scanner2.seenCoors[p_commonIndexes.indexesAlignedForScanner2ThisAxis[0]][1]; // But what if point 0 should NOT be the basis (because there are 13 pair of points for instance) ? Okay, let's put a guardrail !
	if (p_commonIndexes.indexesAlignedForScanner1ThisAxis.length != 12) {
		//console.log("WARNING ! Number of common points != 12"); // Among last logs part 1
	}
	for (i = 1 ; i < p_commonIndexes.indexesAlignedForScanner1ThisAxis.length ; i++) {
		if (p_scanner1.seenCoors[p_commonIndexes.indexesAlignedForScanner1ThisAxis[i]][1] - basisY1 == 
			p_scanner2.seenCoors[p_commonIndexes.indexesAlignedForScanner2ThisAxis[i]][1] - basis2) {
			countMatch++;
		}
		if (countMatch == 11) {
			facingMatchingY1Axis = COOR_1_POSITIVE;
			break;
		}
	}
	if (facingMatchingY1Axis == UNKNOWN) {
		// y positive for 1 = y negative for 2 ?
		countMatch = 0;
		for (i = 1 ; i < p_commonIndexes.indexesAlignedForScanner1ThisAxis.length ; i++) {
			if (p_scanner1.seenCoors[p_commonIndexes.indexesAlignedForScanner1ThisAxis[i]][1] - basisY1 == 
				basis2 - p_scanner2.seenCoors[p_commonIndexes.indexesAlignedForScanner2ThisAxis[i]][1]) {
				countMatch++;
			}
			if (countMatch == 11) {
				facingMatchingY1Axis = COOR_1_NEGATIVE;
				break;
			}
		}
	}
	if (facingMatchingY1Axis == UNKNOWN) {
		// y positive for 1 = z positive for 2 ?
		countMatch = 0;
		basis2 = p_scanner2.seenCoors[p_commonIndexes.indexesAlignedForScanner2ThisAxis[0]][2];
		for (i = 1 ; i < p_commonIndexes.indexesAlignedForScanner1ThisAxis.length ; i++) {
			if (p_scanner1.seenCoors[p_commonIndexes.indexesAlignedForScanner1ThisAxis[i]][1] - basisY1 == 
				p_scanner2.seenCoors[p_commonIndexes.indexesAlignedForScanner2ThisAxis[i]][2] - basis2) {
				countMatch++;
			}
			if (countMatch == 11) {
				facingMatchingY1Axis = COOR_2_POSITIVE;
				break;
			}
		}
	}
	if (facingMatchingY1Axis == UNKNOWN) {
		// y positive for 1 = z negative for 2 ?
		countMatch = 0;
		for (i = 1 ; i < p_commonIndexes.indexesAlignedForScanner1ThisAxis.length ; i++) {
			if (p_scanner1.seenCoors[p_commonIndexes.indexesAlignedForScanner1ThisAxis[i]][1] - basisY1 == 
				basis2 - p_scanner2.seenCoors[p_commonIndexes.indexesAlignedForScanner2ThisAxis[i]][2]) {
				countMatch++;
			}
			if (countMatch == 11) {
				facingMatchingY1Axis = COOR_2_NEGATIVE;
				break;
			}
		}
	}
	if (facingMatchingY1Axis != UNKNOWN) {
		 console.log("Also, after realignment of X positives, now Y positive of " + p_scanner1.id + " matches " + LABEL_FACINGS[facingMatchingY1Axis] + " of " + p_scanner2.id) ; // Among last logs part 1
		if (facingMatchingY1Axis == COOR_1_NEGATIVE) {
			halfTurnToYScanner(p_scanner2);
		} else if (facingMatchingY1Axis == COOR_2_POSITIVE) {
			spinScanner(p_scanner2, {axis1 : 2, sign1 : 1, axis2 : 1});
		} else if (facingMatchingY1Axis == COOR_2_NEGATIVE) {
			spinScanner(p_scanner2, {axis1 : 2, sign1 : -1, axis2 : 1});
		}
		// Make the translation for scanner2 from itself to scanner1 according to the differences of point 0 (WHICH IS ASSUMED TO BE GOOD... I HOPE !)
		const indexIndexesGood = 0;
		const indexGood1 = p_commonIndexes.indexesAlignedForScanner1ThisAxis[indexIndexesGood];
		const indexGood2 = p_commonIndexes.indexesAlignedForScanner2ThisAxis[indexIndexesGood];
		const dX = p_scanner2.seenCoors[indexGood2][0] - p_scanner1.seenCoors[indexGood1][0];
		const dY = p_scanner2.seenCoors[indexGood2][1] - p_scanner1.seenCoors[indexGood1][1];
		const dZ = p_scanner2.seenCoors[indexGood2][2] - p_scanner1.seenCoors[indexGood1][2];
		if (!gData.inPart2) {			
			for (var i = 0 ; i < p_scanner2.seenCoors.length ; i++) {
				p_scanner2.seenCoors[i][0] -= dX;
				p_scanner2.seenCoors[i][1] -= dY;
				p_scanner2.seenCoors[i][2] -= dZ; // Translation was relevant for part 1 but not for part 2, where scanners need to be rotated correctly but not moved. Otherwise, it creates weird measurements.
			}
		}
		p_scanner2.originalCoors = [p_scanner1.originalCoors[0] + dX, p_scanner1.originalCoors[1] + dY, p_scanner1.originalCoors[2] + dZ];
		sortScanner(p_scanner2);
		return true;
	} else {
		// console.log("No alignment for axe 2, sorry !"); // Among last logs part 1
		return false; // I thought we had some matching, but we didn't have.
	}
}

// We come from a facing in some axe negative or positive, we must change it to the positive of the given axe.
function spinScanner(p_scanner, p_transform) {
	var temp;
	for (var i = 0 ; i < p_scanner.seenCoors.length ; i++) {
		temp = p_scanner.seenCoors[i][p_transform.axis2];
		p_scanner.seenCoors[i][p_transform.axis2] = p_scanner.seenCoors[i][p_transform.axis1] * p_transform.sign1;
		p_scanner.seenCoors[i][p_transform.axis1] = temp * -p_transform.sign1;
	}
}

function halfTurnToXScanner(p_scanner) {
	for (var i = 0 ; i < p_scanner.seenCoors.length ; i++) {		
		p_scanner.seenCoors[i][0] *= -1;
		p_scanner.seenCoors[i][2] *= -1;
	}
}

function halfTurnToYScanner(p_scanner) {
	for (var i = 0 ; i < p_scanner.seenCoors.length ; i++) {		
		p_scanner.seenCoors[i][1] *= -1;
		p_scanner.seenCoors[i][2] *= -1;
	}
}

function conclusion_19_1() {
	init();	

	// Okay, scanners aren't mapped altogether as I hoped they would have been. 
	// You can't start at 0 and see how it works out because... 0 matches only 3. 
	// Let's just make a violent synchronization out of them by pairing all of them together !
	// We assume scanners with lower indexes are always fine.
	/*for (var iOK = 0 ; iOK < gData.scanners.length ; iOK++) {
		for (var iDoubt = iOK+1 ; iDoubt < gData.scanners.length ; iDoubt++) {
			// Sort scanners if ya want
			tryToFindOrientation(gData.scanners[iOK], gData.scanners[iDoubt]);
		}
	}*/
	// NOOOO, we actually can't assume that ! Because let's say 3 and 13 match, then 13 align on 3. But later we find that 8 and 13 match, yet 8 and 3 don't match... we don't have the same alignment AT ALL !
	// This is why we need to make networks of scanners seeing the same beacons. Start with beacon 0 that is authoritar, then chain until you run out.
	
	// With the correction of my mistake of "not always reordering the ascending coordinates every time", all 38 scanners match together. Fine !

	var wellOrientedScannersIds;
	var newWellOrientedScannersIds;
	var lastAuthoritaryIndex = 0;
	var beaconsFoundThisMatching;
	var totalCount = 0;
	while (lastAuthoritaryIndex < gData.scanners.length) {
		if (gData.scanners[lastAuthoritaryIndex].validOrientation) {
			lastAuthoritaryIndex++;
		} else {			
			wellOrientedScannersIds = [lastAuthoritaryIndex];
			gData.scanners[lastAuthoritaryIndex].validOrientation = true; // New reference scanner : assumed to be well oriented, now all scanners that match it or a scanner that match it will be aligned the same. No choice !
			sortScanner(gData.scanners[lastAuthoritaryIndex]);
			beaconsFoundThisMatching = copyPoints(gData.scanners[lastAuthoritaryIndex].seenCoors);
			gData.scanners[lastAuthoritaryIndex].originalCoors = [0, 0, 0]; // Spoiler : scanner 0 will be the only one with this position
			while (wellOrientedScannersIds.length > 0) {
				newWellOrientedScannersIds = [];
				wellOrientedScannersIds.forEach(iOK => {
					//if (!gData.scanners[iOK].triedToMatchAll) {				
						for (var iDoubt = 0 ; iDoubt < gData.scanners.length ; iDoubt++) {
							if (!gData.scanners[iDoubt].validOrientation && tryToFindOrientation(gData.scanners[iOK], gData.scanners[iDoubt])) {
								gData.scanners[iDoubt].validOrientation = true;
								newWellOrientedScannersIds.push(iDoubt);
								beaconsFoundThisMatching = unionizePoints(beaconsFoundThisMatching, gData.scanners[iDoubt].seenCoors);
							}
						}
					//	gData.scanners[iOK].triedToMatchAll = true;
					// }			
				});		
				wellOrientedScannersIds = newWellOrientedScannersIds;
				// Make an union of new beacons and former beacons
			}
		} // Out of new data.
		totalCount += beaconsFoundThisMatching.length;
	}
	
	gData.listOfBeacons = copyPoints(beaconsFoundThisMatching);
	return totalCount; /// YEEES ! Correct answer = 428 (but actually, correct answer = beaconsFoundThisMatching.length, and totalCount was somehow equal to 16692 which is 428*39
}
// LOG JAVASCRIPT ASTUCE POUR LES TABLEAUX (je le mets ici car c'est trop utile) : Remplacer : \r\n: \r\n(3) par (rien du tout)
const pointComparatorArray = [function(p_coors) {return p_coors[0]}, function(p_coors) {return p_coors[1]}, function(p_coors) {return p_coors[2]} ];

// When we reorder a scanner, we MUST reorder the ordonatted as well. Otherwise they fail to look at all the data, when looking for something mathing x positive.
// And yes, such lists are required !
function sortScanner(p_scanner) {
	sortAscending(p_scanner.seenCoors, pointComparatorArray);	
	sortAscending(p_scanner.seenIndexesAscendingInCoor[0], [function(p_index) {return p_scanner.seenCoors[p_index][0]} ]);
	sortAscending(p_scanner.seenIndexesAscendingInCoor[1], [function(p_index) {return p_scanner.seenCoors[p_index][1]} ]);
	sortAscending(p_scanner.seenIndexesAscendingInCoor[2], [function(p_index) {return p_scanner.seenCoors[p_index][2]} ]);	
}

function spyCoors(p_scanner, p_axis, p_coorsToSpy) {
	var answer = [];
	for (var i = 0 ; i < p_coorsToSpy.length ; i++) {
		answer.push(p_scanner.seenCoors[p_coorsToSpy[i]][p_axis]);
	}
	return answer;
}

function copyPoints(p_points) {
	var answer = [];
	for (var i = 0 ; i < p_points.length ; i++) {
		answer.push(p_points[i].slice());
	}
	return answer;
}

// We are assuming both list of points are ordered
function unionizePoints(p_listPoints1, p_listPoints2) {
	var answer = [];
	var i1 = 0;
	var i2 = 0;
	var point1, point2, compare;
	point1 = p_listPoints1[i1].slice();
	point2 = p_listPoints2[i2].slice();
	while (i1 < p_listPoints1.length && i2 < p_listPoints2.length) {
	compare = standardComparison(point1, point2, pointComparatorArray);
		if (compare < 0) {
			answer.push(point1);
			i1++;
			if (i1 < p_listPoints1.length) {				
				point1 = p_listPoints1[i1].slice();
			}
		} else if (compare > 0) {
			answer.push(point2);
			i2++;
			if (i2 < p_listPoints2.length) {				
				point2 = p_listPoints2[i2].slice();
			}
		} else {
			answer.push(point1);
			i1++;
			i2++;
			if (i1 < p_listPoints1.length) {
				point1 = p_listPoints1[i1].slice();
			}
			if (i2 < p_listPoints2.length) {				
				point2 = p_listPoints2[i2].slice();
			}
		}
	}
	for ( ; i1 < p_listPoints1.length ; i1++) {
		answer.push(p_listPoints1[i1].slice());
	}
	for ( ; i2 < p_listPoints2.length ; i2++) {
		answer.push(p_listPoints2[i2].slice());
	}	
	return answer;
}

//conclusion_19_1();

function conclusion_19_2() {
	gData.inPart2 = true; 
	conclusion_19_1();
	var max = 0;
	var i, j;
	var scannerI, scannerJ;
	var value;
	for (i = 0 ; i < gData.scanners.length ; i++) {
		scannerI = gData.scanners[i].originalCoors;
		for (j = i+1 ; j < gData.scanners.length ; j++) {
			scannerJ = gData.scanners[j].originalCoors;
			value = Math.abs(scannerI[1]-scannerJ[1]) +  Math.abs(scannerI[0]-scannerJ[0]) + Math.abs(scannerI[2]-scannerJ[2]);
			if (value > max) {
				max = value;
				console.log("New max : " + value + " " + i + " " + j + " : " + scannerI[0] + "," + scannerI[1] + "," + scannerI[2] + " - " + scannerJ[0] + "," + scannerJ[1] + "," + scannerJ[2]);
			}
		}
	}
	return max;
} // The part 2 would be impossible if there were 2 sets of scanners not matched by commonly seen beacons.