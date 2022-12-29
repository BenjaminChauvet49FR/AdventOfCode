const publicKey1 = 6930903;
const publicKey2 = 19716708;

function conclusion_25_1() {

	var sLoopS1 = 0;
	var value = 1;
	while (value != publicKey1) {
		value *= 7;
		value %= 20201227;
		sLoopS1++;
	}

	/*var sLoopS2 = 0;
	value = 1;
	while (value != publicKey2) {
		value *= 7;
		value %= 20201227;
		sLoopS2++;
	}*/

	//console.log(sLoopS1 + " " + sLoopS2);

	console.log(sLoopS1);
	value = 1;
	for (var i = 0 ; i < sLoopS1 ; i++) {
		value *= publicKey2;
		value %= 20201227;
	}

	console.log(value);
	// Correct answer = 10548634;
}
