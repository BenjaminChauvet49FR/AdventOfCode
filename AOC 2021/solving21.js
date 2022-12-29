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