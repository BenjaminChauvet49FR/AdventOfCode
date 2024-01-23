const rawData=`cpy a d
cpy 7 c
cpy 365 b
inc d
dec b
jnz b -2
dec c
jnz c -5
cpy d a
jnz 0 0
cpy a b
cpy 0 a
cpy 2 c
jnz b 2
jnz 1 6
dec b
dec c
jnz c -4
inc a
jnz 1 -7
cpy 2 b
jnz c 2
jnz 1 4
dec b
dec c
jnz 1 -4
jnz 0 0
out b
jnz a -19
jnz 1 -21`.split("\n"); 

// out b alternatively 0 and 1 :

var gPointer;
var gInstructions;
var gVal;
var gCount;

const NO_REG = -1;
const INEXIST = -2;

function init() {
	gInstructions = [];
	gPointer = 0;
	gCount = 0;
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
		case "out" :
			val = (inst.reg1 == NO_REG ? inst.val1 : p_registers[inst.reg1]);
			if (gCount > 0) {
				if (val != 1-gVal) {					
					gPointer = gInstructions.length;
				}
			}
			gCount++;
			gVal = val;
		break
	}
	gPointer++;
}

function conclusion_25_1() {
	var registers = [175, 0, 0, 0]; 
	init();
	while (gPointer < gInstructions.length && gCount != 1000) {
		read(registers);
	}
	return gCount;
}

// +2555 / must be halved and rounded down each step, we must land alternatively on an odd and an even step.
/*
Failed :
5 10 
11 22 
23 46
47 94
95 190
191 382
383 766
767 1534
1535 3070
Ok, I try 3070 - 2555 in input

0
1
2
5
10
21
42
85
170
341
682
1365
2730
Try 175

And it works :)

An analysis here : https://www.reddit.com/r/adventofcode/comments/5k6yfu/2016_day_25_solutions/
*/

