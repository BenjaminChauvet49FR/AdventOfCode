const rawData11 = [3,8,1005,8,318,1106,0,11,0,0,0,104,1,104,0,3,8,1002,8,-1,10,1001,10,1,10,4,10,108,1,8,10,4,10,1002,8,1,28,1,107,14,10,1,107,18,10,3,8,102,-1,8,10,101,1,10,10,4,10,108,1,8,10,4,10,102,1,8,58,1006,0,90,2,1006,20,10,3,8,1002,8,-1,10,101,1,10,10,4,10,1008,8,1,10,4,10,1001,8,0,88,2,103,2,10,2,4,7,10,3,8,1002,8,-1,10,101,1,10,10,4,10,1008,8,1,10,4,10,1001,8,0,118,1,1009,14,10,1,1103,9,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,108,0,8,10,4,10,1002,8,1,147,1006,0,59,1,104,4,10,2,106,18,10,3,8,102,-1,8,10,1001,10,1,10,4,10,1008,8,0,10,4,10,101,0,8,181,2,4,17,10,1006,0,36,1,107,7,10,2,1008,0,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,108,0,8,10,4,10,101,0,8,217,3,8,102,-1,8,10,1001,10,1,10,4,10,1008,8,0,10,4,10,101,0,8,240,1006,0,64,3,8,102,-1,8,10,1001,10,1,10,4,10,108,0,8,10,4,10,1002,8,1,264,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,1,10,4,10,1001,8,0,287,1,1104,15,10,1,102,8,10,1006,0,2,101,1,9,9,1007,9,940,10,1005,10,15,99,109,640,104,0,104,1,21102,932700857236,1,1,21101,335,0,0,1106,0,439,21101,0,387511792424,1,21101,346,0,0,1106,0,439,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,21101,46372252675,0,1,21102,393,1,0,1106,0,439,21101,97806162983,0,1,21102,404,1,0,1105,1,439,3,10,104,0,104,0,3,10,104,0,104,0,21102,1,825452438376,1,21101,0,427,0,1106,0,439,21102,709475586836,1,1,21101,0,438,0,1106,0,439,99,109,2,22101,0,-1,1,21101,40,0,2,21102,1,470,3,21102,1,460,0,1106,0,503,109,-2,2106,0,0,0,1,0,0,1,109,2,3,10,204,-1,1001,465,466,481,4,0,1001,465,1,465,108,4,465,10,1006,10,497,1101,0,0,465,109,-2,2105,1,0,0,109,4,2102,1,-1,502,1207,-3,0,10,1006,10,520,21102,1,0,-3,21202,-3,1,1,21202,-2,1,2,21101,0,1,3,21101,0,539,0,1106,0,544,109,-4,2105,1,0,109,5,1207,-3,1,10,1006,10,567,2207,-4,-2,10,1006,10,567,22101,0,-4,-4,1106,0,635,21202,-4,1,1,21201,-3,-1,2,21202,-2,2,3,21102,586,1,0,1105,1,544,22101,0,1,-4,21102,1,1,-1,2207,-4,-2,10,1006,10,605,21102,0,1,-1,22202,-2,-1,-2,2107,0,-3,10,1006,10,627,22101,0,-1,1,21102,1,627,0,106,0,502,21202,-2,-1,-2,22201,-4,-2,-4,109,-5,2105,1,0];

function conclusion_11_1() {
	var reader = new newIntCodeReader(rawData11, [0]); 
	var direction = DIRECTION.UP;
	var x = 0;
	var y = 0;
	var stepsListWithColours = [];
	var foundIndex = {found : false, index : 0}; // index = index of current position in stepsListWithColours. Colour = colour of the matching tile. // MISTAKE : started at -1
	var count = 0; // Only for debug
	while (!reader.end) {
		var outputs = runAndOutputIntcodeProgram(reader);
		if (outputs.length != 2) {
			console.log("Alert !");
			return -1;
		}
		// Paint a new space (or not !)
		if (!foundIndex.found) {
			stepsListWithColours.splice(foundIndex.index, 0, {x : x, y : y, colour : outputs[0]});
			//console.log("New paint : " + x + " " + y);
		} else {
			stepsListWithColours[foundIndex.index].colour = outputs[0]; // MISTAKE : put a "s".
			//console.log("Old paint : " + x + " " + y);
		}
		// Turn and move
		direction = (outputs[1] == 1 ? TurningRightDirection[direction] : TurningLeftDirection[direction]); // MISTAKE : inverted right/left
		//console.log(outputs[1] + " : new direction " + direction);
		x += DeltaX[direction]; 
		y += DeltaY[direction];
		// Identify new space && reread
		foundIndex = findPaintSpace(stepsListWithColours, {x : x, y : y});// Identify new space
		provideInput(reader, foundIndex.found ? stepsListWithColours[foundIndex.index].colour : 0); // Input
		count++;
	}
	return stepsListWithColours.length;
} // Good ! It was 2082.

// Copied from intcode file !
// Only returns the index. No splice...
function findPaintSpace(p_list, p_coors) {
	var iMin = 0;
	var iMax = p_list.length-1;
	var iMid;
	var elt;
	while (true) {
		if (iMax-iMin < 5) { // I want to play safe here !
			var iNex = Math.min(iMin, iMax);
			while (iNex < p_list.length && (superiorCoors(p_coors, p_list[iNex]) || equalCoors(p_coors, p_list[iNex])) ) {
				if (equalCoors(p_coors, p_list[iNex])) {
					return {found : true, index : iNex}
				}
				iNex++;
			}
			return {found : false, index : iNex};
		}
		iMid = Math.floor((iMin + iMax) / 2);
		elt = p_list[iMid];
		if (equalCoors(p_coors, elt)) {
			return {found : true, index : iMid};
		} else if (superiorCoors(elt, p_coors)) {
			iMax = iMid-1;
		} else {			
			iMin = iMid+1;
		}
	}
}


function conclusion_11_2() {
	var reader = new newIntCodeReader(rawData11, [1]); 
	var direction = DIRECTION.UP;
	var x = 0;
	var y = 0;
	var expandableArray = new ExpandableArray(100, 100, 100, 100, 0, 0, 0);
	expandableArray.put(0, 0, 1);
	while (!reader.end) {
		var outputs = runAndOutputIntcodeProgram(reader);
		if (outputs.length != 2) {
			console.log("Alert !");
			return -1;
		}
		// Paint a new space (or not !)
		expandableArray.put(x, y, outputs[0]);
		// Turn and move
		direction = (outputs[1] == 1 ? TurningRightDirection[direction] : TurningLeftDirection[direction]); // MISTAKE : inverted right/left
		x += DeltaX[direction]; 
		y += DeltaY[direction];
		// Identify new space && reread
		provideInput(reader, expandableArray.get(x, y)); // Input
	}
	var answer = "";
	for (y = expandableArray.yMin ; y <= expandableArray.yMax ; y++) {
		answer = "";
		for (x = expandableArray.xMin ; x <= expandableArray.xMax ; x++) {
			answer += (expandableArray.get(x, y) ? '#' : '-');
		}
		console.log(answer);
	}

}