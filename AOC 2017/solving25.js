const rawData=`Begin in state A.
Perform a diagnostic checksum after 12861455 steps.

In state A:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state B.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state B.

In state B:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state C.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the right.
    - Continue with state E.

In state C:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state E.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state D.

In state D:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.

In state E:
  If the current value is 0:
    - Write the value 0.
    - Move one slot to the right.
    - Continue with state A.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the right.
    - Continue with state F.

In state F:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state E.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state A.`.split("\n");



function conclusion_25_1() {
	const RIGHT = +1;
	const LEFT = -1;
	const STATE_A = 0;
	const STATE_B = 1;
	const STATE_C = 2;
	const STATE_D = 3;
	const STATE_E = 4;
	const STATE_F = 5;
		
	const MOVE_A = [[1, RIGHT, STATE_B], [0, LEFT, STATE_B]];
	const MOVE_B = [[1, LEFT, STATE_C], [0, RIGHT, STATE_E]];
	const MOVE_C = [[1, RIGHT, STATE_E], [0, LEFT, STATE_D]];
	const MOVE_D = [[1, LEFT, STATE_A], [1, LEFT, STATE_A]];
	const MOVE_E = [[0, RIGHT, STATE_A], [0, RIGHT, STATE_F]];
	const MOVE_F = [[1, RIGHT, STATE_E], [1, RIGHT, STATE_A]];
	const MOVE = [MOVE_A, MOVE_B, MOVE_C, MOVE_D, MOVE_E, MOVE_F];
	// TODO : Automatize this, because this program is entierely humanly handled :) 

	var count = 0;
	var nbSteps = 12861455;
	var state = STATE_A;
	var band = generateArray(1000000, false);
	var pos = Math.floor(band.length/2); // No out-of-bounds I hope...
	var currentMove, formerState;
	for (var i = 0 ; i < nbSteps ; i++) {
		currentMove = MOVE[state][band[pos] ? 1 : 0];
		formerState = band[pos];
		band[pos] = currentMove[0];
		count += (band[pos]-formerState);
		pos += currentMove[1]; 
		state = currentMove[2];
	}
	return count;
}
