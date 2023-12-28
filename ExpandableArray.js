function ExpandableArray(p_xLengthBasis, p_yLengthBasis, p_xNumberGrids, p_yNumberGrids, p_xStart, p_yStart, p_defaultValue, p_setupNotNullValueFunction) {
	this.defaultValue = p_defaultValue;
	this.xLengthGrids = p_xLengthBasis;
	this.yLengthGrids = p_yLengthBasis;
	this.xNumberGrids = p_xNumberGrids;
	this.yNumberGrids = p_yNumberGrids;
	this.xMin = p_xStart;
	this.yMin = p_yStart;
	this.xMax = p_xStart;
	this.yMax = p_yStart;
	this.array = generateDoubleEntryArray(p_xNumberGrids, p_yNumberGrids, null);
	this.xStart = p_xStart;
	this.yStart = p_yStart;
	this.xTotalLength = this.xLengthGrids*this.xNumberGrids;
	this.yTotalLength = this.yLengthGrids*this.yNumberGrids;
	this.xCenter = Math.floor(this.xTotalLength/2);
	this.yCenter = Math.floor(this.yTotalLength/2);
	this.complexDefaultValue = false;
	if (p_setupNotNullValueFunction) {
		this.defaultValueFunction = p_setupNotNullValueFunction;
		this.complexDefaultValue = true;
	}
}

// Point (xStart, yStart) must be at the center of the total grid
ExpandableArray.prototype.put = function(p_x, p_y, p_value) {
	const superCoors = this.getSuperCoors(p_x, p_y);
	if (this.array[superCoors.yG][superCoors.xG] == null) {
		this.array[superCoors.yG][superCoors.xG] = generateDoubleEntryArray(this.xLengthGrids, this.yLengthGrids, this.defaultValue);
	}
	this.array[superCoors.yG][superCoors.xG][superCoors.yIn][superCoors.xIn] = p_value;
	if (this.xMax < p_x) {this.xMax = p_x;}
	if (this.xMin > p_x) {this.xMin = p_x;}
	if (this.yMax < p_y) {this.yMax = p_y;}
	if (this.yMin > p_y) {this.yMin = p_y;}
}

// When the "real default value" has complex properties, this method allows to write properties of non-initialized spaces without having used put by initializing them right now. 
// It updates mines and maxes !
// Heavily copy-pasted on put function : we still have a default "simple" value, but now we put another default value in that space AND we update mines and maxes accordingly
ExpandableArray.prototype.getSafe = function(p_x, p_y) {
	const superCoors = this.getSuperCoors(p_x, p_y);
	if (this.complexDefaultValue) { 
		if (this.array[superCoors.yG][superCoors.xG] == null) {
			this.array[superCoors.yG][superCoors.xG] = generateDoubleEntryArray(this.xLengthGrids, this.yLengthGrids, this.defaultValue);	
		}
		if (this.array[superCoors.yG][superCoors.xG][superCoors.yIn][superCoors.xIn] == this.defaultValue) {
			this.array[superCoors.yG][superCoors.xG][superCoors.yIn][superCoors.xIn] = this.defaultValueFunction();
			if (this.xMax < p_x) {this.xMax = p_x;}
			if (this.xMin > p_x) {this.xMin = p_x;}
			if (this.yMax < p_y) {this.yMax = p_y;}
			if (this.yMin > p_y) {this.yMin = p_y;}
		}
		return this.array[superCoors.yG][superCoors.xG][superCoors.yIn][superCoors.xIn];
	} else {
		return this.get(p_x, p_y);
	}
}

ExpandableArray.prototype.get = function(p_x, p_y) {
	const superCoors = this.getSuperCoors(p_x, p_y);
	if (this.array[superCoors.yG][superCoors.xG] == null) {
		return this.defaultValue;
	}
	return this.array[superCoors.yG][superCoors.xG][superCoors.yIn][superCoors.xIn];
}

ExpandableArray.prototype.getSuperCoors = function(p_x, p_y) {
	const dx = p_x-this.xStart+this.xCenter;
	const dy = p_y-this.yStart+this.yCenter;
	return {
		xG : Math.floor(dx/this.xLengthGrids),
		yG : Math.floor(dy/this.yLengthGrids),
		xIn : dx % this.xLengthGrids,
		yIn : dy % this.yLengthGrids
	}
}

// Warning : both functions may uselessly check default value spaces (the first one because it checks all spaces, the second one because it checks all spaces in grids it runs)

// This one checks space by space.
ExpandableArray.prototype.forAllSpacesComplete = function(p_function) {
	var x, y;
	for (y = this.yMin ; y <= this.yMax ; y++) {
		for (x = this.xMin ; x <= this.xMax ; x++) {
			p_function(x, y);
		}
	}
}

// This one directly checks grid by grid. Useful when all elements must be run in an irrelevant order (for example when summing up or looking for a min/max)
ExpandableArray.prototype.forAllSpacesExpanded = function(p_function) {
	var xG, yG, xIn, yIn;
	var xG = Math.floor((this.xMin-this.xStart+this.xCenter)/this.xLengthGrids);
	var yG = Math.floor((this.yMin-this.yStart+this.yCenter)/this.yLengthGrids);
	const xGMin = xG;
	const xGMax = Math.floor((this.xMax-this.xStart+this.xCenter)/this.xLengthGrids);
	const yGMax = Math.floor((this.yMax-this.yStart+this.yCenter)/this.yLengthGrids);
	var x, y;
	var xSt, ySt;
	for ( ; yG <= yGMax ; yG++) {
		for (xG = xGMin ; xG <= xGMax ; xG++) {
			if (this.array[yG][xG] != null) {
				xSt = xG*this.xLengthGrids-this.xCenter+this.xStart;
				ySt = yG*this.yLengthGrids-this.yCenter+this.yStart;
				for (yIn = 0 ; yIn < this.yLengthGrids ; yIn++) {
					for (xIn = 0 ; xIn < this.xLengthGrids ; xIn++) {
						p_function(xSt+xIn, ySt+yIn);
					}
				}
			}
		}
	}
}

function testExpandableArray() {	
	const ea = new ExpandableArray(100, 100, 50, 50, 0, 0, -1);
	var listX = [141, 334, 17, 16, 15, 14, 13,  12,   11];
	var listY = [100, 101, 53, 52, 51, 50, 49, -48, -55];
	for (var i = 0 ; i < listX.length ; i++) {
		ea.put(listX[i], listY[i], i);
	}
	for (var i = 0 ; i < listX.length ; i++) {
		console.log(ea.get(listX[i], listY[i]));
	}
	ea.put(listX[0], listY[0], 120);
	var answer = 0;
	function f(x, y) {
		const val = ea.get(x, y);
		if (val != -1) {
			console.log("Value at " + x + "," + y + " : " + val);
			if (x != ea.getMin && y != ea.getMin) {				
				console.log("Value of down-left neighbour : " + ea.get(x-1, y-1));
			}
			answer += val;
		}
	}
	ea.forAllSpacesComplete(f);
	console.log("Sum of logged spaces : " + answer);
	answer = 0;
	ea.forAllSpacesExpanded(f);
	console.log("Sum of logged spaces : " + answer);
}

// WARNING : the following hasn't been tested yet :
// Difference between number of grids in X and number in Y
// Difference between size of grid in X and in Y