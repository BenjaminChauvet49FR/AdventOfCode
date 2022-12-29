const rawDataOfficial = [
"zi-end",
"XR-start",
"zk-zi",
"TS-zk",
"zw-vl",
"zk-zw",
"end-po",
"ws-zw",
"TS-ws",
"po-TS",
"po-YH",
"po-xk",
"zi-ws",
"zk-end",
"zi-XR",
"XR-zk",
"vl-TS",
"start-zw",
"vl-start",
"XR-zw",
"XR-vl",
"XR-ws"
];

const rawDataExample = [
"fs-end",
"he-DX",
"fs-he",
"start-DX",
"pj-DX",
"end-zg",
"zg-sl",
"zg-pj",
"pj-he",
"RW-he",
"fs-DX",
"pj-RW",
"zg-RW",
"start-pj",
"he-WI",
"zg-he",
"pj-fs",
"start-RW"
];

const rawDataBaby = [
"start-A",
"start-b",
"A-c",
"A-b",
"b-d",
"A-end",
"b-end"
];

const rawData = rawDataOfficial;

const gData = {
	
}

function initMaze() {
	gData.rooms = [];
	gData.indexStart = -1;
	gData.indexEnd = -1;
	var tokens;
	var isSmall;
	var ind1, ind2;
	for (var i = 0 ; i < rawData.length ; i++) {
		tokens = rawData[i].split("-");
		ind1 = findIndexOrCreateIfNecessary(tokens[0]);
		ind2 = findIndexOrCreateIfNecessary(tokens[1]);		
		gData.rooms[ind1].links.push(ind2);
		gData.rooms[ind2].links.push(ind1);
	}
}

function findIndexOrCreateIfNecessary(p_token) {
	const index = findRoomIndex(p_token);
	if (index == -1) {
		const charToa = charToASCIIRelativePosition(p_token[0], 'a');
		if (p_token =="start") {
			gData.indexStart = gData.rooms.length;
		}
		if (p_token =="end") {
			gData.indexEnd = gData.rooms.length;
		}
		gData.rooms.push({name : p_token, isSmall : charToa >= 0 && charToa <= 25, links : []});
		return gData.rooms.length-1;
	}
	return index;
}

function findRoomIndex(p_nameRoom) {
	for (var i = 0 ; i < gData.rooms.length ; i++) {
		if (gData.rooms[i].name == p_nameRoom) {
			return i;
		}
	}
	return -1;
}

// ---
// Answer part !

var gAnswer = {}

function conclusion_12_1() {
	initMaze();
	gAnswer.chains = [];
	gAnswer.currentChain = [];
	gAnswer.alreadyVisited = [];
	for (var i = 0 ; i < gData.rooms.length ; i++) {
		gAnswer.alreadyVisited.push(false);
	}
	exploreAll(gData.indexStart); // Correct answer = 3761
}


function exploreAll(p_startingIndex) {
	if (p_startingIndex == gData.indexEnd) { // Note : final room not added !
		gAnswer.chains.push(gAnswer.currentChain.slice());
		return;
	}
	if (gAnswer.alreadyVisited[p_startingIndex]) {
		return;
	}
	var iRoom, formerValue;
	gAnswer.currentChain.push(p_startingIndex);
	formerValue = gAnswer.alreadyVisited[p_startingIndex];
	if (gData.rooms[p_startingIndex].isSmall) {
		gAnswer.alreadyVisited[p_startingIndex] = true;
	}
	for (var i = 0 ; i < gData.rooms[p_startingIndex].links.length ; i++) {
		iRoom = gData.rooms[p_startingIndex].links[i];
		exploreAll(iRoom);
	}
	gAnswer.alreadyVisited[p_startingIndex] = formerValue;
	gAnswer.currentChain.pop();
}

function conclusion_12_2() {
	initMaze();
	gAnswer.chains = [];
	gAnswer.currentChain = [];
	gAnswer.alreadyVisited = [];
	for (var i = 0 ; i < gData.rooms.length ; i++) {
		gAnswer.alreadyVisited.push(false);
	}
	exploreAll2(gData.indexStart, true); // Correct answer = ????
	gAnswer.chains.sort(function(a, b) {
		const c = a.length - b.length ;
		if (c != 0) {
			return c;
		}
		var i = 0;
		while (i < a.length && a[i] == b[i]) {
			i++;
		}
		return (i == a.length ? 0 : (a[i]-b[i]));
	});
	return gAnswer.chains;
}

function exploreAll2(p_startingIndex, p_canStillVisitTwice) {
	if (p_startingIndex == gData.indexEnd) { // Note : final room not added !
		gAnswer.chains.push(gAnswer.currentChain.slice());
		return;
	}
	var canStillVisitTwice = p_canStillVisitTwice;
	if (gAnswer.alreadyVisited[p_startingIndex]) {
		if (canStillVisitTwice) {
			canStillVisitTwice = false;
		} else {
			return;			
		}
	}
	var iRoom, formerValue;
	gAnswer.currentChain.push(p_startingIndex);
	formerValue = gAnswer.alreadyVisited[p_startingIndex];
	if (gData.rooms[p_startingIndex].isSmall) {
		gAnswer.alreadyVisited[p_startingIndex] = true;
	}
	for (var i = 0 ; i < gData.rooms[p_startingIndex].links.length ; i++) {
		iRoom = gData.rooms[p_startingIndex].links[i];
		if (iRoom != gData.indexStart) {			
			exploreAll2(iRoom, canStillVisitTwice);
		}
	}
	gAnswer.alreadyVisited[p_startingIndex] = formerValue;
	gAnswer.currentChain.pop(); // Correct answer = 99138
}