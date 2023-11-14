const rawDataExample = [
"seti 5 0 1",
"seti 6 0 2",
"addi 0 1 0",
"addr 1 2 3",
"setr 1 0 0",
"seti 8 0 4",
"seti 9 0 5"
];
const rawDataOfficial=[ // Note : first instruction has been removed for simplicity in coding
"addi 2 16 2",
"seti 1 4 3",
"seti 1 5 1",
"mulr 3 1 5",
"eqrr 5 4 5",
"addr 5 2 2",
"addi 2 1 2",
"addr 3 0 0",
"addi 1 1 1",
"gtrr 1 4 5",
"addr 2 5 2",
"seti 2 9 2",
"addi 3 1 3",
"gtrr 3 4 5",
"addr 5 2 2",
"seti 1 6 2",
"mulr 2 2 2",
"addi 4 2 4",
"mulr 4 4 4",
"mulr 2 4 4",
"muli 4 11 4",
"addi 5 7 5",
"mulr 5 2 5",
"addi 5 4 5",
"addr 4 5 4",
"addr 2 0 2",
"seti 0 1 2",
"setr 2 1 5",
"mulr 5 2 5",
"addr 2 5 5",
"mulr 2 5 5",
"muli 5 14 5",
"mulr 5 2 5",
"addr 4 5 4",
"seti 0 6 0",
"seti 0 6 2",
];

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

const rawData= rawDataOfficial;
const RAW_FIRST=2;
//const RAW_FIRST=0;

function conclusion_19_1() {
	return conclusion_19_aux([0, 0, 0, 0, 0, 0]);
}

function conclusion_19_2() {
	return conclusion_19_aux([1, 0, 0, 0, 0, 0]);
}

function conclusion_19_aux(p_registers) {
	const INSTPOINTER = RAW_FIRST;
	var tokens, a, b, c, ope;
	var inst = p_registers[INSTPOINTER];
	while (inst < rawData.length) {
		tokens = rawData[inst].split(" ");
		ope = tokens[0];
		a = parseInt(tokens[1], 10);
		b = parseInt(tokens[2], 10);
		c = parseInt(tokens[3], 10);
		p_registers[c] = calculate(ope, a, b, p_registers);
		p_registers[INSTPOINTER]++;
		inst = p_registers[INSTPOINTER];	
	}
	return p_registers[0];
}