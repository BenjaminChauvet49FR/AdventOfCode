const PLAYER_1_START = 6;
const PLAYER_2_START = 2;

function conclusion_21_1() {
	var score1 = 0;
	var score2 = 0;
	var pos1 = PLAYER_1_START;
	var pos2 = PLAYER_2_START;
	var dieLastRoll = 0;
	var numberOf10Cycles = 0;
	var count3Rolls = 0;
	while (score1 < 1000 && score2 < 1000) {
		pos1 += 3*dieLastRoll+6;
		while (pos1 > 10) {
			pos1 -= 10;
		}
		score1 += pos1;
		dieLastRoll += 3;
		count3Rolls++;
		if (dieLastRoll >= 10) {
			dieLastRoll -= 10;
		}
		if (score1 < 1000) {
			pos2 += 3*dieLastRoll+6;
			while (pos2 > 10) {
				pos2 -= 10;
			}
			score2 += pos2;
			dieLastRoll += 3;
			count3Rolls++;
			if (dieLastRoll >= 10) {
				dieLastRoll -= 10;
			}
		}
		console.log(score1 + " " + score2 + " (" + pos1 + ")(" + pos2 +")");
	}
	return (score1 >= 1000 ? score2 : score1)*(count3Rolls*3);
} // Correct answer = 926610


// ------
// Part 2

const universesRolling = [1, 3, 6, 7, 6, 3, 1];
const valuesRolling = [3, 4, 5, 6, 7, 8, 9];

function conclusion_21_2() {
	var listUniverses = [{
		position1 : PLAYER_1_START,
		position2 : PLAYER_2_START,
		score1 : 0,
		score2 : 0,
		universesLeadingToIt : 1
	}];
	
	var p1Turn = true;
	var p1Winnings = 0;
	var p2Winnings = 0;
	while (listUniverses.length > 0) {		
		listUniverses = generatePossibleUniversesTurn(listUniverses, p1Turn);
		if (p1Turn) {
			while (listUniverses.length > 0 && listUniverses[listUniverses.length-1].score1 >= 21) {
				p1Winnings += listUniverses.pop().universesLeadingToIt;
			}
		} else {
			while (listUniverses.length > 0 && listUniverses[listUniverses.length-1].score2 >= 21) {
				p2Winnings += listUniverses.pop().universesLeadingToIt;
			}			
		}
		p1Turn = !p1Turn;
		console.log(listUniverses.length); // Warning : may take long ! ~2-3 mins overall to find the answer
	}
	return Math.max(p1Winnings, p2Winnings);
} // Correct answer = 146854918035875


function generatePossibleUniversesTurn(p_listUniverses, p_forPlayer1) {
	var answer = [];
	var pos;
	if (p_forPlayer1) {		
		p_listUniverses.forEach(universe => {
			for (var i = 0 ; i < universesRolling.length ; i++) {
				pos = (universe.position1 + valuesRolling[i]);
				if (pos > 10) {
					pos -= 10;
				}
				answer.push({
					position1 : pos,
					position2 : universe.position2,
					score1 : universe.score1 + pos,
					score2 : universe.score2,
					universesLeadingToIt : universe.universesLeadingToIt * universesRolling[i]
				});
			}
		});
		sortAscending(answer, [
			function(u) {return u.score1},
			function(u) {return u.score2},
			function(u) {return u.position1},
			function(u) {return u.position2},
			function(u) {return u.universesLeadingToIt}
		]);
	} else {
		p_listUniverses.forEach(universe => {
			for (var i = 0 ; i < universesRolling.length ; i++) {
				pos = (universe.position2 + valuesRolling[i]);
				if (pos > 10) {
					pos -= 10;
				}
				answer.push({
					position1 : universe.position1,
					position2 : pos,
					score1 : universe.score1,
					score2 : universe.score2 + pos,
					universesLeadingToIt : universe.universesLeadingToIt * universesRolling[i]
				});
			}
		});
		sortAscending(answer, [
			function(u) {return u.score2},
			function(u) {return u.score1},
			function(u) {return u.position2},
			function(u) {return u.position1},
			function(u) {return u.universesLeadingToIt}
		]);
	}
	var newUniverse = null;
	for (var i = 0 ; i < answer.length ; i++) {
		if (newUniverse != null && answer[i].position1 == newUniverse.position1 && answer[i].position2 == newUniverse.position2
		&& answer[i].score1 == newUniverse.score1 && answer[i].score2 == newUniverse.score2) {
			newUniverse.universesLeadingToIt += answer[i].universesLeadingToIt;
			answer[i].universesLeadingToIt = 0;
		} else {			
			newUniverse = answer[i];
		}		
	}
	answer.filter(function(u) { return u.universesLeadingToIt > 0 });
	return answer;
} 