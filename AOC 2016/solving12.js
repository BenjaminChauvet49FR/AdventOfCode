const rawData=`cpy 1 a
cpy 1 b
cpy 26 d
jnz c 2
jnz 1 5
cpy 7 c
inc d
dec c
jnz c -2
cpy a c
inc a
dec b
jnz b -2
cpy c b
dec d
jnz d -6
cpy 16 c
cpy 12 d
inc a
dec d
jnz d -2
dec c
jnz c -5`.split("\n");


var gPointer;

function indRegister(p_str) {
	var c = charToASCIIRelativePosition(p_str, 'a');
	if (c >= 0 && c <= 3) {
		return c;
	} else {
		return -1;
	}
}

function read(p_str, p_registers) {
	var tokens = p_str.split(" ");
	var ir, ir2;
	switch(tokens[0]) {
		case "dec" :
			ir = indRegister(tokens[1]);
			p_registers[ir]--;
		break;
		case "inc" :
			ir = indRegister(tokens[1]);
			p_registers[ir]++;
		break;
		case "cpy" :
			ir = indRegister(tokens[1]);
			ir2 = indRegister(tokens[2]);
			if (ir == -1) {
				p_registers[ir2] = parseInt(tokens[1], 10);
			} else {
				p_registers[ir2] = p_registers[ir];				
			}
		break;
		default :
			ir = indRegister(tokens[1]);
			if (p_registers[ir] != 0) {
				gPointer += parseInt(tokens[2], 10);
				gPointer--; // To negate the final ++
			}
		break;
	}
	gPointer++;
}

function conclusion_12_1() {
	gPointer = 0;
	var registers = [0, 0, 0, 0];
	while (gPointer < rawData.length) {
		read(rawData[gPointer], registers);
	}
	return registers[0];
} // 318003

function conclusion_12_2() {
	gPointer = 0;
	var registers = [0, 0, 1, 0];
	while (gPointer < rawData.length) {
		read(rawData[gPointer], registers);
	}
	return registers[0];
} // Great, so it's not like 2018-19 (I think) where changing one register dramastically makes the program longer :)