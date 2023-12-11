const rawData = [
"seti 123 0 5",
"bani 5 456 5",
"eqri 5 72 5",
"addr 5 1 1",
"seti 0 0 1",
"seti 0 3 5",
"bori 5 65536 4",
"seti 13284195 4 5",
"bani 4 255 3",
"addr 5 3 5",
"bani 5 16777215 5",
"muli 5 65899 5",
"bani 5 16777215 5",
"gtir 256 4 3",
"addr 3 1 1",
"addi 1 1 1",
"seti 27 1 1",
"seti 0 5 3",
"addi 3 1 2",
"muli 2 256 2",
"gtrr 2 4 2",
"addr 2 1 1",
"addi 1 1 1",
"seti 25 2 1",
"addi 3 1 3",
"seti 17 1 1",
"setr 3 7 4",
"seti 7 3 1",
"eqrr 5 0 3",
"addr 3 1 1",
"seti 5 3 1"];

const OPCODES = {
	ADDR :"addr",
	ADDI :"addi",
	MULR :"mulr",
	MULI :"muli",
	BANR :"banr",
	BANI :"bani",
	BORR :"borr",
	BORI :"bori",
	SETR :"setr",
	SETI :"seti",
	GTIR :"gtir",
	GTRI :"gtri",
	GTRR :"gtrr",
	EQIR :"eqir",
	EQRI :"eqri",
	EQRR :"eqrr",
};

const INVALID_VALUE = -1;
const NB_REG = 5;

function calculate(p_operator, p_a, p_b, p_registersIn) {
	switch(p_operator) {
		case OPCODES.ADDR: 
			return (p_a <= NB_REG && p_b <= NB_REG) ? p_registersIn[p_a]+p_registersIn[p_b] : INVALID_VALUE; break;
		case OPCODES.ADDI: 
			return (p_a <= NB_REG) ? p_registersIn[p_a]+p_b : INVALID_VALUE; break;
		case OPCODES.MULR: 
			return (p_a <= NB_REG && p_b <= NB_REG) ? p_registersIn[p_a]*p_registersIn[p_b] : INVALID_VALUE; break;
		case OPCODES.MULI: 
			return (p_a <= NB_REG) ? p_registersIn[p_a]*p_b : INVALID_VALUE; break;		
		case OPCODES.BANR: 
			return (p_a <= NB_REG && p_b <= NB_REG) ? p_registersIn[p_a]&p_registersIn[p_b] : INVALID_VALUE; break;
		case OPCODES.BANI: 
			return (p_a <= NB_REG) ? p_registersIn[p_a]&p_b : INVALID_VALUE; break;		
		case OPCODES.BORR: 
			return (p_a <= NB_REG && p_b <= NB_REG) ? p_registersIn[p_a]|p_registersIn[p_b] : INVALID_VALUE; break;
		case OPCODES.BORI: 
			return (p_a <= NB_REG) ? p_registersIn[p_a]|p_b : INVALID_VALUE; break;		
		case OPCODES.SETR: 
			return (p_a <= NB_REG) ? p_registersIn[p_a] : INVALID_VALUE; break;
		case OPCODES.SETI: 
			return p_a;	
		case OPCODES.GTRR: 
			return (p_a <= NB_REG && p_b <= NB_REG) ? (p_registersIn[p_a] > p_registersIn[p_b] ? 1 : 0) : INVALID_VALUE; break; 
		case OPCODES.GTRI: 
			return (p_a <= NB_REG) ? (p_registersIn[p_a] > p_b ? 1 : 0) : INVALID_VALUE; break;
		case OPCODES.GTIR: 
			return (p_b <= NB_REG) ? (p_a > p_registersIn[p_b] ? 1 : 0) : INVALID_VALUE; break;
		case OPCODES.EQRR: 
			return (p_a <= NB_REG && p_b <= NB_REG) ? (p_registersIn[p_a] == p_registersIn[p_b] ? 1 : 0) : INVALID_VALUE; break;
		case OPCODES.EQRI: 
			return (p_a <= NB_REG) ? (p_registersIn[p_a] == p_b ? 1 : 0) : INVALID_VALUE; break;
		case OPCODES.EQIR: 
			return (p_b <= NB_REG) ? (p_a == p_registersIn[p_b] ? 1 : 0) : INVALID_VALUE; break;
		default :
			return INVALID_VALUE; break;
	}
}

const INSTPOINTER = 1;

var START_REGISTERS;
function conclusion_21_1() {
	//return conclusion_21_aux(500, 0, 500); // Okay, it's gonna be somme "plus or minus"
	//return conclusion_21_aux(1000, 0, 500);
	START_REGISTERS = [0,0,0,0,0,0]
	return conclusion_21_aux(550000000, 0, 0); // If it doesn't work (or it is too long) I swap for another technical.
}

function conclusion_21_2() {
	//START_REGISTERS = [0,29,1,0,111,11476504]
	//START_REGISTERS = [0, 28, 1, 0, 233, 16244699]
	START_REGISTERS = [0,28,1,0,87,8225691]
	return conclusion_21_aux(1000000000000, 0, 0); // If it doesn't work (or it is too long) I swap for another technical.
}

function conclusion_21_aux(p_maxSteps, p_minValue, p_maxValue) {
	var tokens, a, b, c, ope;
	var inst;
	var valueBit0 = p_minValue;
	var steps;
	var minsteps = p_maxSteps;
	var minValue = -1;
	var found = false;
	var lastValueThatCausesToHalt = -1;
	var tree = defaultNode();	
	while (!found && valueBit0 <= p_maxValue) {
		steps = 0;
		registers = START_REGISTERS;
		inst = registers[INSTPOINTER];
		while (steps < minsteps && inst < rawData.length) {
			tokens = rawData[inst].split(" ");
			ope = tokens[0];
			a = parseInt(tokens[1], 10);
			b = parseInt(tokens[2], 10);
			c = parseInt(tokens[3], 10);
			registers[c] = calculate(ope, a, b, registers);
			registers[INSTPOINTER]++;
			inst = registers[INSTPOINTER];
			steps++;
			if (ope == OPCODES.EQRR) {
				if (registers[5] == 16244699) {
					console.log(registers)
				}
				if (!insertInBinaryTree(tree, registers[5])) {
					found = true;
				} else {
					lastValueThatCausesToHalt = registers[5];
				}
			}
		}
		valueBit0++;
	}
	return found ? lastValueThatCausesToHalt : -1;
}
// 1st part : execute and set a conditional breakpoint when it is about to execute the EQRR instruction, look at register 5
// 2nd part : 16244699 too high


// Inserts a value into a binary tree that contains a value at each node
// The tree is assumed to contain at least one node
DEFAULT_NODE_VALUE = -1;
function insertInBinaryTree(p_tree, p_value) {
	if (p_tree.value == DEFAULT_NODE_VALUE) {
		p_tree.value = p_value;
		p_tree.left = {
			value : DEFAULT_NODE_VALUE
		}
		p_tree.right = {
			value : DEFAULT_NODE_VALUE
		}
		return true;
	} 
	if (p_tree.value == p_value) {
		return false;
	}
	if (p_tree.value < p_value) {
		return insertInBinaryTree(p_tree.left, p_value);			
	} else {
		return insertInBinaryTree(p_tree.right, p_value);					
	}
}

function defaultNode() {
	return {
		value : DEFAULT_NODE_VALUE
	}
}