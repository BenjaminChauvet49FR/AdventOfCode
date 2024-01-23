const rawData=`cpy a b
dec b
cpy a d
cpy 0 a
cpy b c
inc a
dec c
jnz c -2
dec d
jnz d -5
dec b
cpy b c
cpy c d
dec d
inc c
jnz d -2
tgl c
cpy -16 c
jnz 1 c
cpy 90 c
jnz 81 d
inc a
inc d
jnz d -2
inc c
jnz c -5`.split("\n"); 

var gPointer;
var gInstructions;

const NO_REG = -1;
const INEXIST = -2;

function init() {
	gInstructions = [];
	gPointer = 0;
	var tokens;
	rawData.forEach(str => {
		tokens = str.split(" ");
		var inst = {};
		inst.inst = tokens[0]
		inst.reg1 = indRegister(tokens[1]);
		if (inst.reg1 == NO_REG) {
			inst.val1 = parseInt(tokens[1], 10);
		}
		if (tokens.length > 2) {
			inst.reg2 = indRegister(tokens[2]);
			if (inst.reg2 == NO_REG) {
				inst.val2 = parseInt(tokens[2], 10);
			}
		} else {
			inst.reg2 = INEXIST;
		}
		gInstructions.push(inst);
	});
}

function indRegister(p_str) {
	var c = charToASCIIRelativePosition(p_str, 'a');
	if (c >= 0 && c <= 3) {
		return c;
	} else {
		return NO_REG;
	}
}

function read(p_registers) {
	var inst = gInstructions[gPointer];
	var val;
	switch(inst.inst) {
		case "dec" :
			if (inst.reg1 != NO_REG) {				
				p_registers[inst.reg1]--;
			}
		break;
		case "inc" :
			if (inst.reg1 != NO_REG) {				
				p_registers[inst.reg1]++;
			}
		break;
		case "cpy" :
			if (inst.reg2 != NO_REG) {				
				val = (inst.reg1 == NO_REG ? inst.val1 : p_registers[inst.reg1]);
				p_registers[inst.reg2] = val;
			}
		break;
		case "jnz" :
			val = (inst.reg1 == NO_REG ? inst.val1 : p_registers[inst.reg1]);
			if (val != 0) {				
				var val2 = (inst.reg2 == NO_REG ? inst.val2 : p_registers[inst.reg2]);
				//if (gPointer > -val2) { // We can't temporarily go below -1 ? Let's see it...					
					gPointer += val2;
					gPointer--; // To negate the final ++
				// }
			}
			
		break;
		case "tgl" :
			val = gPointer+(inst.reg1 == NO_REG ? inst.val1 : p_registers[inst.reg1]); // ERROR : put - instead of +
			if (val >= 0 && val < gInstructions.length) {					
				if (gInstructions[val].reg2 == INEXIST) { // ERROR : tested inst.reg2 instead of gInstructions[val].reg2
					gInstructions[val].inst = (gInstructions[val].inst == "inc" ? "dec" : "inc");
				} else {
					gInstructions[val].inst = (gInstructions[val].inst == "jnz" ? "cpy" : "jnz");					
				}
			}
		break
	}
	gPointer++;
}

function conclusion_23_1() {
	var registers = [6, 0, 0, 0];
	init();
	while (gPointer < gInstructions.length) {
		read(registers);
	}
	return registers[0];
} // 33210 

function conclusion_23_2() {
	var registers = [12, 0, 0, 0];
	init();
	while (gPointer < gInstructions.length) {
		read(registers);
	}
	return registers[0];
} // Okay, debug analysis and logic make me tell it's 12! (so 479001600)... unless there's a trick behind ! 
// Aaaand, there were one ! I should go back to part 1.
// 7 : 5040 + 7290
// 6 : 720 + 7290
// 5 : Bug ? (no 7410, it froze)
// 8 : 40320 + 7290 

// 6 minimum idk why ; must be linked to comparisons to 1 
// +7290 due to 90 and 81

// I didn't humanly analyze the program tonight, debugger was my best friend.