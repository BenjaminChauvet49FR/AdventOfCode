const startingData = [[1,0],[2,3],[3,0],[2,1]]; // rightmost = outside
var dynamicData = [startingData[0].slice(), startingData[1].slice(), startingData[2].slice(), startingData[3].slice()]; 
var hallway = [4,4,4,4,4,4,4,4,4,4,4];
var blocked = [1,1,0,1,0,1,0,1,0,1,1];
const weights = [1, 10, 100, 1000];
var events = [];
var spaceOfMyRoom = [2,4,6,8]; // 0 is in front of space 2 of corridor, 1 is in front of space 4...

function conclusion_23_1() {
	var bestScore = 99999;
	
	var answer = moveToHallway(2, 0); // Move A at left
	answer += moveToHallway(3, 3); // Move B left to b stack
	answer += moveToHallway(3, 9); // Move C to the right
	answer += moveDirectly(2);
	answer += moveDirectly(1); // Enter both Ds
	answer += leaveHallway(9);
	answer += moveDirectly(1); // Enter both Cs
	answer += leaveHallway(3); // Enter a B
	answer += moveToHallway(0, 1); // Move A at left
	answer += moveDirectly(0); // Enter the other B
	answer += leaveHallway(1);
	answer += leaveHallway(0);  // Enter both As
	return answer; // Best combination, worth 13455
}

function isEmptyHallway(p_space) {
	return (hallway[p_space] == 4)
}

function emptySpaceHallway(p_space) {
	hallway[p_space] = 4;
}

// Space with p_start not empty !
// Possible move = required energy
// Impossible move = 0.
function leaveHallway(p_room) {
	const item = hallway[p_room];
	const roomGoal = spaceOfMyRoom[item];
	var answer;
	if (p_room > roomGoal) {
		if (!allEmptyBetween(roomGoal, p_room)) {
			console.log("NO !");
			return 0;
		}
		dynamicData[item].push(item);
		answer = (p_room - roomGoal + 3 - dynamicData[item].length)*weights[item];
	} else {
		if (!allEmptyBetween(roomGoal, p_room)) {
			console.log("NO !");
			return 0;
		}
		dynamicData[item].push(item);
		answer = (roomGoal - p_room + 3 - dynamicData[item].length)*weights[item];
	}
	console.log("Item " + item + " leaves room " + p_room + " weight " + answer);
	emptySpaceHallway(p_room);
	return answer;
}

// Checks if all stacks strictly between are empty (the ones in between must be okay).
function allEmptyBetween(p_lowerRoom, p_higherRoom) {
	for (var i = p_lowerRoom+1 ; i < p_higherRoom ; i++) {
		if (!isEmptyHallway(i)) {
			return false;
		}
	}	
	return true;
}

// Last element of dynamicData[p_stack] ; must not be empty !
// Possible move = required energy
// Impossible move = 0
function moveToHallway(p_stack, p_destination) {
	const item = dynamicData[p_stack].pop();
	var answer = 2 - dynamicData[p_stack].length;
	const roomStartH = spaceOfMyRoom[p_stack];
	if (roomStartH < p_destination) {
		if (!allEmptyBetween(roomStartH, p_destination)) {
			dynamicData[p_stack].push(item);
			console.log("NO !");
			return 0;
		}
		answer += p_destination - roomStartH;
	} else {
		if (!allEmptyBetween(p_destination, roomStartH)) {
			dynamicData[p_stack].push(item);
			console.log("NO !");
			return 0;
		}
		answer += roomStartH - p_destination;
	}
	hallway[p_destination] = item;
	answer *= weights[item];
	console.log("Item " + item + " moves from stack " + p_stack + " to room " + p_destination + " weight " + answer);
	return answer;
}

// Last element of dynamicData[p_stackStart] ; its destination must be able to take 1 place without having to move again.
function moveDirectly(p_stackStart) {
	const item = dynamicData[p_stackStart].pop();
	var answer = 2 - dynamicData[p_stackStart].length;
	const roomStartH = spaceOfMyRoom[p_stackStart];
	const roomGoalH = spaceOfMyRoom[item];
	if (roomStartH < roomGoalH) {
		if (!allEmptyBetween(roomStartH, roomGoalH)) {
			dynamicData[p_stackStart].push(item);
			console.log("NO !");
			return 0;
		}
		answer += roomGoalH - roomStartH;
	} else {
		if (!allEmptyBetween(roomGoalH, roomStartH)) {
			dynamicData[p_stackStart].push(item);
			console.log("NO !");
			return 0;
		}
		answer += roomStartH - roomGoalH;
	}
	dynamicData[item].push(item);
	answer += 3 - dynamicData[item].length;
	answer *= weights[item];
	console.log("Item " + item + " moves from stack " + p_stackStart + " to stack " + item + " weight " + answer);
	return answer;

}
