var rawData = [
[3391837, 2528277, 3448416, 2478759],
[399473, 1167503, 1188862, 2000000],
[3769110, 2896086, 4076658, 2478123],
[900438, 3835648, -435606, 3506717],
[2913762, 3937542, 2964244, 3612685],
[3646459, 3446878, 3264675, 3635510],
[1182092, 2135147, 1188862, 2000000],
[3213897, 2710772, 3448416, 2478759],
[3242113, 3984214, 3264675, 3635510],
[2809237, 3782833, 2872059, 3592616],
[2962421, 37354, 3358601, -1111474],
[3456740, 2458922, 3448416, 2478759],
[1799203, 3569221, 2872059, 3592616],
[3907873, 3898376, 3264675, 3635510],
[3481951, 2453964, 3448416, 2478759],
[1120077, 2963237, 1188862, 2000000],
[2901181, 3029961, 2872059, 3592616],
[3111105, 3361570, 2964244, 3612685],
[2533601, 3956413, 2872059, 3592616],
[108898, 2275290, 1188862, 2000000],
[3501591, 2414995, 3448416, 2478759],
[3035657, 3700769, 2964244, 3612685],
[1286795, 298997, 308571, -434280],
[200812, 3470019, -435606, 3506717],
[2550124, 1556776, 1188862, 2000000],
[3955070, 601908, 4076658, 2478123],
[3565419, 2355172, 3448416, 2478759]
];
// Original input : "Sensor at x=3391837, y=2528277: closest beacon is at x=3448416, y=2478759"

const Y_ANALYZED = 2000000;

function conclusion_15_1() {
	var excludedXIntervals = [];
	var i, j;
	var xS, yS, xB, yB;
	var manDist;
	var yAnalyzeDist;
	var xMin, yMin;
	for (var i = 0 ; i < rawData.length ; i++) {
		xS = rawData[i][0];
		yS = rawData[i][1];
		xB = rawData[i][2];
		yB = rawData[i][3];
		manDist = Math.abs(xS-xB) + Math.abs(yS-yB);
		yAnalyzeDist = Math.abs(Y_ANALYZED - yS)
		if (yAnalyzeDist <= manDist) {
			xMin = xS-(manDist-yAnalyzeDist);
			xMax = xS+(manDist-yAnalyzeDist);
			// remember hypothesis : xB, yB is the only closest beacon to xS, yS. So we should exclude either xMin or xMax if necessary, but not any x n between.
			if (yB == Y_ANALYZED) {				
				if (xMin == xB) {
					xMin++;
				}				
				if (xMax == xB) {
					xMax--;
				}
			}
			if (xMin <= xMax) {
				console.log(xS,yS,xB,yB,"Man.dist",manDist,"yAnalyzeDist",yAnalyzeDist,"intervalle :",xMin, " ", xMax);
				excludedXIntervals.push([xMin, xMax]);
			}
		}
	}
	var unionized = union(excludedXIntervals);
	var answer = 0;
	for (var i = 0 ; i < unionized.length ; i++) {
		answer += intervalDiscreteLength(unionized[i]);
	}
	return {answer : answer, unions : unionized} // Correct answer = 5525847
}


// ---
const X_MIN = 0;
const X_MAX = 4000000;
const Y_MIN = 0;
const Y_MAX = 4000000;

function conclusion_15_2() {

	var i, j;
	var xS, yS, xB, yB;
	var manDist;
	var yAnalyzeDist;
	var xMin, yMin;
	var dataSortedYSensors = [];
	for (var i = 0 ; i < rawData.length ; i++) {
		dataSortedYSensors.push(rawData[i].slice());
	}
	sortAscending(dataSortedYSensors,[
		function(s) {return s[1]}
	]);
	var unionized;
	for (var y = Y_MIN ; y <= Y_MAX ; y++) {
		unionized = scanLine(y);
		if (unionized.length != 1) {
			return {union : unionized, y : y};
		} else if (unionized[0][0] > X_MIN || unionized[0][1] < X_MAX) {
			return {union : unionized, y : y};
		}
	}
	return null;  // I'm gonna deduce x coordinate myself
	// Correct answer : x = 3335216, y = 3187704
	// Definitive correct answer = 4000000*x+y, so 13340867187704
}



function scanLine(p_yAnalyzed) {
	var coveredXIntervals = [];
	for (var i = 0 ; i < rawData.length ; i++) {
		xS = rawData[i][0];
		yS = rawData[i][1];
		xB = rawData[i][2];
		yB = rawData[i][3];
		manDist = Math.abs(xS-xB) + Math.abs(yS-yB);
		yAnalyzeDist = Math.abs(p_yAnalyzed - yS)
		if (yAnalyzeDist <= manDist) {
			xMin = xS-(manDist-yAnalyzeDist);
			xMax = xS+(manDist-yAnalyzeDist);
			coveredXIntervals.push([xMin, xMax]);
		} // This time, position of beacons are not excluded !
	}
	return union(coveredXIntervals);

}


