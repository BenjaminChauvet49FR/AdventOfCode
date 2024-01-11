var rawData = "^^^^......^...^..^....^^^.^^^.^.^^^^^^..^...^^...^^^.^^....^..^^^.^.^^...^.^...^^.^^^.^^^^.^^.^..^.^";
var gNumberGen = 40;
//var rawData = ".^^.^.^^^^";
//var gNumberGen = 10;

var gData; // False = safe
var gIOld, gINew;

function init() {
	gData = [[false], [false]];
	gIOld = 0;
	gINew = 1;
	for (var i = 0 ; i < rawData.length ; i++) {
		gData[gIOld].push(rawData.charAt(i) == '^'); // Error, swapped ^ and .
		gData[gINew].push(false);
	}
	gData[gIOld].push(false);
	gData[gINew].push(false);
}

function conclusion_18_1() {
	init();
	var answer = 0; 
	var k;
	
	for (k = 1 ; k <= rawData.length ; k++) {
		if (!gData[gIOld][k]) {
			answer++;
		}
	}
	var l, m, r;
	for (var i = 0 ; i < gNumberGen-1 ; i++) {
		for (k = 1 ; k <= rawData.length ; k++) {
			l = gData[gIOld][k-1];
			r = gData[gIOld][k+1];
			gData[gINew][k] = (r^l)==1;
			if (!gData[gINew][k]) {
				answer++;
			}
		}	
		gIOld = 1-gIOld;
		gINew = 1-gINew;
		/*for (k = 1 ; k <= rawData.length ; k++) {
			if (!gData[gIOld][k]) {
				answer++;
			}
		}*/		
	}
	return answer; // 1990 too high :(
}