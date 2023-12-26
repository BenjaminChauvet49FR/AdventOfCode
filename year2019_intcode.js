const INTCODE_WRONG_OPERATOR = -1;
const INTCODE_USER_STOP = -2;
const INTCODE_WAITING_FOR_INPUT = -3;
const INTCODE_WRONG_MEMORY_ACCESS = -4;
const INTCODE_OK = 0;

function newIntCodeReader(p_input) {
	var answer = {};
	answer.pointer = 0n;
	answer.end = false;
	answer.input = [];
	if (p_input) {
		p_input.forEach(k => {
			if (typeof(k) == "bigint") {				
				answer.input.push(k);
			} else {
				answer.input.push(BigInt(k));
			}
		});
	} 
	answer.inputIndex = 0n;
	answer.pending = false;
	answer.relativeBase = 0n;
	answer.extraMemory = [];
	return answer;
}

function provideInput(p_reader, p_input) {
	if (typeof(p_input) == "bigint") {				
		p_reader.input.push(p_input);
	} else {
		p_reader.input.push(BigInt(p_input));
	}
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
	if (ri < 0) {
		return INTCODE_WRONG_MEMORY_ACCESS
	}
	if (ri > p_program.length) {
		return INTCODE_WRONG_MEMORY_ACCESS;
	}
	var opcode = p_program[ri];
	var operator = opcode % 100n;
	var parameters;
	if (operator == 1n) { // Addition
		parameters = getIntCodeParameters(opcode, 3, p_program, p_reader, [false, false, true]);
		writeIntCode(p_program, p_reader, parameters[2], parameters[0] + parameters[1]); // TODO Warning : this is not the address !
		p_reader.pointer += 4n;
	} else if (operator == 2n) { // Multiplication
		parameters = getIntCodeParameters(opcode, 3, p_program, p_reader, [false, false, true]);
		writeIntCode(p_program, p_reader, parameters[2], parameters[0] * parameters[1]);
		p_reader.pointer += 4n;
	} else if (operator == 3n) { // Input
		if (p_reader.inputIndex == p_reader.input.length) {
			p_reader.pending = true;
			p_reader.inputIndex = 0n;
			p_reader.input = [];
		} else {			
			parameters = getIntCodeParameters(opcode, 1, p_program, p_reader, [true]);
			writeIntCode(p_program, p_reader, parameters[0], p_reader.input[p_reader.inputIndex]);
			p_reader.inputIndex++;
			p_reader.pointer += 2n;
		}
	} else if (operator == 4n) { // Output
		parameters = getIntCodeParameters(opcode, 1, p_program, p_reader, [false]);
		p_reader.emitsOutput = true;
		p_reader.output = parameters[0];
		p_reader.pointer += 2n;
	} else if (operator == 5n) { // Jump-if-true
		parameters = getIntCodeParameters(opcode, 2, p_program, p_reader, [false]);
		if (parameters[0] != 0n) {
			p_reader.pointer = parameters[1];
		} else {			
			p_reader.pointer += 3n;
		}
	} else if (operator == 6n) { // Jump-if-false
		parameters = getIntCodeParameters(opcode, 2, p_program, p_reader, [false]);
		if (parameters[0] == 0n) {
			p_reader.pointer = parameters[1];
		} else {			
			p_reader.pointer += 3n;
		}
	} else if (operator == 7n) { // less than
		parameters = getIntCodeParameters(opcode, 3, p_program, p_reader, [false, false, true]);
		writeIntCode(p_program, p_reader, parameters[2], (parameters[0] < parameters[1] ? 1n : 0n) );
		p_reader.pointer += 4n;
	} else if (operator == 8) { // equal
		parameters = getIntCodeParameters(opcode, 3, p_program, p_reader, [false, false, true]);
		writeIntCode(p_program, p_reader, parameters[2], (parameters[0] == parameters[1] ? 1n : 0n) );
		p_reader.pointer += 4n;
	} else if (operator == 9n) { // relative base adjust
		parameters = getIntCodeParameters(opcode, 2, p_program, p_reader);
		p_reader.relativeBase += parameters[0];
		p_reader.pointer += 2n;
	} else if (operator == 99n) { // End
		p_reader.end = true;
	} else {		
		return INTCODE_WRONG_OPERATOR;
	}
	return INTCODE_OK;
}

function getIntCodeParameters(p_opcode, p_nbParams, p_program, p_reader, p_writeInsteadOfRead) {
	var number = p_opcode/100n;
	var ri = p_reader.pointer;
	var modes = [];
	while (number > 0n) {
		modes.push(number % 10n);
		number = number/10n;
	}
	while (modes.length < p_nbParams) {
		modes.push(0n);
	}
	var modeForWrite = (p_writeInsteadOfRead ? p_writeInsteadOfRead.slice() : []);
	while (modeForWrite.length < p_nbParams) {
		modeForWrite.push(false);
	}
	var answer = [];
	for (var i = 0n ; i < p_nbParams ; i++) {
		if (modeForWrite[i]) { // Argument i is one we should WRITE to !
			switch (modes[i]) { // Read "arguments" from index ri+1 to ri+p_nbParams
				case 0n : answer.push( readIntCode(p_program, p_reader, ri+BigInt(i)+1n) ) ; break;
				case 2n : answer.push( readIntCode(p_program, p_reader, ri+BigInt(i)+1n)+p_reader.relativeBase); break;
				// default : should not happen !
			}			
		} else {			
			switch (modes[i]) { // Read "arguments" from index ri+1 to ri+p_nbParams
				case 0n : answer.push( readIntCode(p_program, p_reader, (readIntCode(p_program, p_reader, ri+BigInt(i)+1n))) ); break;
				case 1n : answer.push( readIntCode(p_program, p_reader, ri+BigInt(i)+1n) ); break;
				case 2n : answer.push( readIntCode(p_program, p_reader, (readIntCode(p_program, p_reader, ri+BigInt(i)+1n)+p_reader.relativeBase)) ); break;
				// default : should not happen !
			}
		}
	}
	return answer;
}

// Warning : alters data in entrance
function readIntCodeProgram(p_program, p_reader, p_stopFunction) {
	if (!p_reader) {
		p_reader = newIntCodeReader();
	}
	while (true) {
		if (p_stopFunction && p_stopFunction(p_reader)) {
			return INTCODE_USER_STOP;
		}
		if (readIntCodeStep(p_program, p_reader) < 0) {
			return INTCODE_WRONG_MEMORY_ACCESS;
		}
		if (p_reader.end) {
			return INTCODE_OK;
		}
	}
}

function makeIntCodeBigInt(p_list) {
	var answer = [];
	for (var i = 0 ; i < p_list.length ; i++) {
		answer.push(BigInt(p_list[i]));
	}
	return answer;
}

function writeIntCode(p_program, p_reader, p_address, p_value) {
	if (p_address < 0) {
		console.log("Alert : Invalid writing !");
		return INTCODE_WRONG_MEMORY_ACCESS;
	}
	if (p_address < p_program.length) {
		p_program[p_address] = p_value;
	} else {
		if (p_reader.extraMemory.length == 0) {
			p_reader.extraMemory.push({address : p_address, value : p_value});
		} else { 
			const indexF = findIndexExtraMemoryIntCode(p_reader.extraMemory, p_address);
			if (indexF.found) {
				p_reader.extraMemory[indexF.index] = {address : p_address, value : p_value};
			} else {				
				p_reader.extraMemory.splice(indexF.index, 0, {address : p_address, value : p_value});
			}
		}
	}
}

function readIntCode(p_program, p_reader, p_address) {
	if (p_address < 0n) {
		console.log("Alert : Invalid reading !");
		return INTCODE_WRONG_MEMORY_ACCESS;
	}
	if (p_address < p_program.length) {
		return p_program[p_address];
	} else {
		if (p_reader.extraMemory.length == 0) {
			return 0n; // Day 9 : "Memory beyond the initial program starts with the value 0"
		}
		const indexF = findIndexExtraMemoryIntCode(p_reader.extraMemory, p_address);
		if (indexF.found) {
			return p_reader.extraMemory[indexF.index].value;
		} else {				
			return 0n;
		}
	}
}

// Copied from utils_sorting !
function findIndexExtraMemoryIntCode(p_extraMemory, p_address) {
	var iMin = 0;
	var iMax = p_extraMemory.length-1;
	var iMid;
	var elt;
	while (true) {
		if (iMax-iMin < 5) { // I want to play safe here !
			var iNex = Math.min(iMin, iMax);
			while (iNex < p_extraMemory.length && p_address >= p_extraMemory[iNex].address) {
				if (p_address == p_extraMemory[iNex].address) {
					return {found : true, index : iNex}
				}
				iNex++;
			}
			return {found : false, index : iNex};
		}
		iMid = Math.floor((iMin + iMax) / 2);
		elt = p_extraMemory[iMid].address;
		if (elt == p_address) {
			return {found : true, index : iMid};
		} else if (p_address < elt) {
			iMax = iMid-1;
		} else {			
			iMin = iMid+1;
		}
	}
}