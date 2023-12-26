const INTCODE_INCORRECT_VALUE = -1;
const INTCODE_USER_STOP = -2;
const INTCODE_WAITING_FOR_INPUT = -3;
const INTCODE_OK = 0;

function newIntCodeReader(p_input) {
	var answer = {};
	answer.pointer = 0;
	answer.end = false;
	answer.input = (p_input ? p_input.slice() : []);
	answer.inputIndex = 0;
	answer.pending = false;
	return answer;
}

function provideInput(p_reader, p_input) {
	p_reader.input.push(p_input);
	p_reader.pending = false;
}

// Warning : this function alters p_program.
// Before the first launch, please initialise p_reader at newReader 
// Another warning : no test of validity of indexes... so far.
// All "write to" instructions are assumed to be correct. I hope I won't run into a program that will allow me to write just any value in a future problem !
function readIntCodeStep(p_program, p_reader) {
	if (p_reader.pending) {
		return INTCODE_WAITING_FOR_INPUT;
	}
	p_reader.emitsOutput = false;
	ri = p_reader.pointer;
	if (ri >= p_program.length || ri < 0) {
		return INTCODE_INCORRECT_VALUE
	}
	var opcode = p_program[ri];
	var operator = opcode % 100;
	var parameterModes;
	if (operator == 1) { // Addition
		parameterModes = getIntCodeParamModes(opcode, 2);
		const value1 = parameterModes[0] == 0 ? p_program[p_program[ri+1]] : p_program[ri+1];
		const value2 = parameterModes[1] == 0 ? p_program[p_program[ri+2]] : p_program[ri+2];
		p_program[p_program[ri+3]] = value1 + value2;
		p_reader.pointer += 4;
	} else if (operator == 2) { // Multiplication
		parameterModes = getIntCodeParamModes(opcode, 2);
		const value1 = parameterModes[0] == 0 ? p_program[p_program[ri+1]] : p_program[ri+1];
		const value2 = parameterModes[1] == 0 ? p_program[p_program[ri+2]] : p_program[ri+2];
		p_program[p_program[ri+3]] = value1 * value2;		
		p_reader.pointer += 4;
	} else if (operator == 3) { // Input
		if (p_reader.inputIndex == p_reader.input.length) {
			p_reader.pending = true;
			p_reader.inputIndex = 0;
			p_reader.input = [];
		} else {			
			p_program[p_program[ri+1]] = p_reader.input[p_reader.inputIndex]; // Always in position mode !
			p_reader.inputIndex++;
			p_reader.pointer += 2;
		}
	} else if (operator == 4) { // Output
		parameterModes = getIntCodeParamModes(opcode, 1);
		p_reader.emitsOutput = true;
		p_reader.output = (parameterModes[0] == 0 ? p_program[p_program[ri+1]] : p_program[ri+1]);
		p_reader.pointer += 2;
	} else if (operator == 5) { // Jump-if-true
		parameterModes = getIntCodeParamModes(opcode, 2);
		const value1 = parameterModes[0] == 0 ? p_program[p_program[ri+1]] : p_program[ri+1];
		const value2 = parameterModes[1] == 0 ? p_program[p_program[ri+2]] : p_program[ri+2];
		if (value1 != 0) {
			p_reader.pointer = value2;
		} else {			
			p_reader.pointer += 3;
		}
	} else if (operator == 6) { // Jump-if-false
		parameterModes = getIntCodeParamModes(opcode, 2);
		const value1 = parameterModes[0] == 0 ? p_program[p_program[ri+1]] : p_program[ri+1];
		const value2 = parameterModes[1] == 0 ? p_program[p_program[ri+2]] : p_program[ri+2];
		if (value1 == 0) {
			p_reader.pointer = value2;
		} else {			
			p_reader.pointer += 3;
		}
	} else if (operator == 7) { // less than
		parameterModes = getIntCodeParamModes(opcode, 2);
		const value1 = parameterModes[0] == 0 ? p_program[p_program[ri+1]] : p_program[ri+1];
		const value2 = parameterModes[1] == 0 ? p_program[p_program[ri+2]] : p_program[ri+2];
		p_program[p_program[ri+3]] = (value1 < value2 ? 1 : 0);
		p_reader.pointer += 4;
	} else if (operator == 8) { // equal
		parameterModes = getIntCodeParamModes(opcode, 2);
		const value1 = parameterModes[0] == 0 ? p_program[p_program[ri+1]] : p_program[ri+1];
		const value2 = parameterModes[1] == 0 ? p_program[p_program[ri+2]] : p_program[ri+2];
		p_program[p_program[ri+3]] = (value1 == value2 ? 1 : 0);
		p_reader.pointer += 4;
	} else if (operator == 99) { // End
		p_reader.end = true;
	} else {		
		return INTCODE_INCORRECT_VALUE;
	}
	return 0;
}

function getIntCodeParamModes(p_opcode, p_nbParams) {
	var number = Math.floor(p_opcode/100);
	var answer = [];
	while (number > 0) {
		answer.push(number % 10);
		number = Math.floor(number/10);
	}
	while (answer.length < p_nbParams) {
		answer.push(0);
	}
	return answer;
}

// Warning : alters data in entrance
function readIntCode(p_program, p_reader, p_stopFunction) {
	if (!p_reader) {
		p_reader = newIntCodeReader();
	}
	while (true) {
		if (p_stopFunction && p_stopFunction(p_reader)) {
			return INTCODE_USER_STOP;
		}
		if (readIntCodeStep(p_program, p_reader) == INTCODE_INCORRECT_VALUE) {
			return INTCODE_INCORRECT_VALUE;
		}
		if (p_reader.end) {
			return INTCODE_OK;
		}
	}
	return INTCODE_INCORRECT_VALUE;
}