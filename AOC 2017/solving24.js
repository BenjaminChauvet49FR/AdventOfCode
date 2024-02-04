const rawData=`42/37
28/28
29/25
45/8
35/23
49/20
44/4
15/33
14/19
31/44
39/14
25/17
34/34
38/42
8/42
15/28
0/7
49/12
18/36
45/45
28/7
30/43
23/41
0/35
18/9
3/31
20/31
10/40
0/22
1/23
20/47
38/36
15/8
34/32
30/30
30/44
19/28
46/15
34/50
40/20
27/39
3/14
43/45
50/42
1/33
6/39
46/44
22/35
15/20
43/31
23/23
19/27
47/15
43/43
25/36
26/38
1/10`.split("\n");

var gSize;
var gGraph;
var gTaken;
var gBonus;

function set(p_x, p_y, p_value) {
	if (p_y > p_x) {
		gTaken[p_y][p_x] = p_value;
	} else {
		gTaken[p_x][p_y] = p_value;		
	}
}

function get(p_x, p_y) {
	if (p_y > p_x) {
		return gTaken[p_y][p_x];
	} else {
		return gTaken[p_x][p_y];		
	}
}


function init() {
	var tokens;
	gSize = 0; // So all sizes are integers starting from 0, right ?
	var val1, val2;
	rawData.forEach(str => {
		tokens = str.split('/');
		gSize = Math.max(gSize, parseInt(tokens[0], 10));
		gSize = Math.max(gSize, parseInt(tokens[1], 10));
	});
	gSize++;
	gGraph = generateArrangedArray(gSize, function(x) {return []});
	gTaken = generateDoubleEntryArray(gSize, gSize, false);
	gBonus = generateArray(gSize, 0);
	rawData.forEach(str => {
		tokens = str.split('/');
		val1 = parseInt(tokens[1], 10);
		val2 = parseInt(tokens[0], 10);
		if (val1 == val2) {
			gBonus[val1]++;
		} else {
			gGraph[val1].push(val2);
			gGraph[val2].push(val1);
		}
	});
}

// So it's acyclic, right ? WRONG, 0/22/35 are in a cycle !
function exploreFrom(p_from, p_sumSoFar) {
	var startValue = p_sumSoFar;
	var firstTime = !get(p_from, p_from);
	if (firstTime) { // Pile the visit the first time we visit a nod. (even if it has no bonus)
		startValue += gBonus[p_from]*p_from*2; // So a bridge 22/22 adds 44 to the total. 
		set(p_from, p_from, true);
	}
	gMax = Math.max(startValue, gMax); 
	var val;
	for (var k = 0 ; k < gGraph[p_from].length ; k++) {
		val = gGraph[p_from][k];
		if (val != p_from && !get(val, p_from)) {
			set(val, p_from, true);
			exploreFrom(val, startValue + val + p_from);
			set(val, p_from, false);
		}
	}
	if (firstTime) {
		set(p_from, p_from, false); // Depile the visit
	}
}

var gMax;
function conclusion_24_1() {
	init();
	gMax = 0;
	exploreFrom(0, 0);
	return gMax;
}

// ----------------------

var gLongest;
function exploreFromP2(p_from, p_sumSoFar, p_length) {
	var startValue = p_sumSoFar;
	var startLength = p_length;
	var firstTime = !get(p_from, p_from);
	if (firstTime) { 
		startValue += gBonus[p_from]*p_from*2;  
		set(p_from, p_from, true);
		startLength+= gBonus[p_from]; // Each bonus (if it exists) extends the length by one (if it exists !!!)
	}
	if (startLength > gLongest) {
		gLongest = startLength;
		gMax = startValue;
	} else if (startLength == gLongest && startValue > gMax) {
		gMax = startValue;
	}
	var val;
	for (var k = 0 ; k < gGraph[p_from].length ; k++) {
		val = gGraph[p_from][k];
		if (val != p_from && !get(val, p_from)) {
			set(val, p_from, true);
			exploreFromP2(val, startValue + val + p_from, startLength+1);
			set(val, p_from, false);
		}
	}
	if (firstTime) {
		set(p_from, p_from, false); // Depile the visit
	}
}

var gMax;
function conclusion_24_2() {
	init();
	gMax = 0;
	gLongest = 0;
	exploreFromP2(0, 0, 0);
	return gMax;
} // Not 1887 :(
