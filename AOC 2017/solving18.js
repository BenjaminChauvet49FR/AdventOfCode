const rawData=`set i 31
set a 1
mul p 17
jgz p p
mul a 2
add i -1
jgz i -2
add a -1
set i 127
set p 680
mul p 8505
mod p a
mul p 129749
add p 12345
mod p a
set b p
mod b 10000
snd b
add i -1
jgz i -9
jgz a 3
rcv b
jgz b -1
set f 0
set i 126
rcv a
rcv b
set p a
mul p -1
add p b
jgz p 4
snd a
set a b
jgz 1 3
snd b
set f 1
add i -1
jgz i -11
snd a
jgz f -16
jgz a -19`.split("\n");

// Both parts need library2017.js to work !

function conclusion_18_1() {
	var instructions = initMusica(rawData);
	var rn = findMusicaRegistersNumber(instructions);
	registers = generateArray(rn, 0);
	musicReader = generateNewMusicaReader();
	while (musicReader.soundRetrieved == 0) {
		applyInstructionP1(instructions, registers, musicReader);
	}
	return musicReader.soundRetrieved;
} // 3188

function conclusion_18_2() {
	var instructions = initMusica(rawData);
	var rn = findMusicaRegistersNumber(instructions);
	registers1 = generateArray(rn, 0);
	registers2 = generateArray(rn, 0);
	registers2[2] = 1; // TODO : warning, human analysis : I saw that p was the 3rd register
	musicReader1 = generateNewMusicaReader();
	musicReader2 = generateNewMusicaReader();
	var valuesSent = 0;
	while (!isBlocked(musicReader1) || !isBlocked(musicReader2)) {
		applyInstructionP2(instructions, registers1, musicReader1);
		if (readsSnd(musicReader2, instructions)) {
			valuesSent++;
		}
		applyInstructionP2(instructions, registers2, musicReader2);
		if (isBlocked(musicReader1) && readyToSend(musicReader2)) {
			unlockWith(musicReader1, registers1, musicReader2);			
		}
		if (isBlocked(musicReader2) && readyToSend(musicReader1)) {
			unlockWith(musicReader2, registers2, musicReader1);
		}
	}
	return valuesSent;
}  // 7112 :) (so, half 14224 if register 0 for program 1 is set to 1, instead of register 2)