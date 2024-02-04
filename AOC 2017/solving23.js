const rawData=`set b 65
set c b
jnz a 2
jnz 1 5
mul b 100
sub b -100000
set c b
sub c -17000
set f 1
set d 2
set e 2
set g d
mul g e
sub g b
jnz g 2
set f 0
sub e -1
set g e
sub g b
jnz g -8
sub d -1
set g d
sub g b
jnz g -13
jnz f 2
sub h -1
set g b
sub g c
jnz g 2
jnz 1 3
sub b -17
jnz 1 -23`.split("\n");

// Needs library2017.js to work !
function conclusion_23_1() {
	var instructions = initMusica(rawData);
	var rn = findMusicaRegistersNumber(instructions);
	registers = generateArray(rn, 0);
	musicReader = generateNewMusicaReader();
	var answer = 0;
	while (!outOfInstructionBounds(musicReader, instructions)) {
		if (readsMul(musicReader, instructions)) {
			answer++;
		}
		applyInstructionP1(instructions, registers, musicReader);
	}
	return answer;
} // 3969 :)

function conclusion_23_2() { // Warning : human analysis !
	launchCrible(123500);
	var answer = 1001;
	// All non-prime numbers of the form 106500+17k, k = 0..1000
	G_UtilsMath.primeNumbers.forEach(number => {
		if (number > 106500 && ((number % 17) == (106500 % 17) )) {
			answer--;
		}
	});
	return answer;
} 