// For days 10 and 14

const intToHexa = "0123456789abcdef";

function reverseFromTo(p_list, p_index1, p_index2) {
	var i1 = p_index1;
	var i2 = p_index2;
	var ri1, ri2, temp;
	while (i1 < i2) {
		ri1 = i1 % p_list.length;
		ri2 = i2 % p_list.length;
		temp = p_list[ri1];
		p_list[ri1] = p_list[ri2];
		p_list[ri2] = temp;
		
		i1++;
		i2--;
	}
	
}

function megaXOR(p_array, p_index1, p_index2) {
	var answer = p_array[p_index1];
	for (var i = p_index1+1 ; i <= p_index2 ; i++) {
		answer = answer^p_array[i];
	}
	return answer;
}

function makeKnotHash(p_string) {
	
	var knotted = generateNumericArray(0, 255);
	var gLengths = [];
	for (var i = 0 ; i < p_string.length ; i++) {
		gLengths.push(p_string.charCodeAt(i));
	}
	gLengths.push(17);
	gLengths.push(31);
	gLengths.push(73);
	gLengths.push(47);
	gLengths.push(23);
	var pos = 0;
	for (var rounds = 0 ; rounds < 64 ; rounds++) {		
		for (var i = 0 ; i < gLengths.length ; i++) {
			reverseFromTo(knotted, pos, pos+gLengths[i]-1);
			pos += (gLengths[i] + i + gLengths.length*rounds);
			pos %= knotted.length;
		}
	}
	var denseHash;
	var charInd;
	var answer = "";
	for (var i = 0 ; i < 16 ; i++) {
		denseHash = megaXOR(knotted, i*16, i*16+15);
		charInd = Math.floor(denseHash/16);
		answer += intToHexa.charAt(charInd);
		charInd = denseHash%16;
		answer += intToHexa.charAt(charInd);
	}
	return answer;
}



// ---------------

const SET = 0;
const ADD = 1;
const JGZ = 2;
const SND = 3;
const MUL = 4;
const RCV = 5;
const MOD = 6;
const SUB = 7;
const JNZ = 8;

function initMusica(p_rawData) {
	var labels = [];
	var instructions = [];
	var tokens;
	var oper, val1, isReg1, val2, isReg2;
	p_rawData.forEach(str => {
		tokens = str.split(" ");
		switch(tokens[0]) {
			case "set" : oper = SET; break;
			case "add" : oper = ADD; break;
			case "jgz" : oper = JGZ; break;
			case "snd" : oper = SND; break;
			case "mul" : oper = MUL; break;
			case "mod" : oper = MOD; break;
			case "rcv" : oper = RCV; break;
			case "jnz" : oper = JNZ; break;
			case "sub" : oper = SUB; break;
			default : oper = 1/0; break;
		}
		if (tokens[1] >= 'a' && tokens[1] <= 'z') {
			val1 = getIndexInListWithAdd(labels, tokens[1]);
			isReg1 = true;
		} else {
			val1 = parseInt(tokens[1], 10);
			isReg1 = false;
		}
		if (tokens.length == 3) {			
			if (tokens[2] >= 'a' && tokens[2] <= 'z') {
				val2 = getIndexInListWithAdd(labels, tokens[2]);
				isReg2 = true;
			} else {
				val2 = parseInt(tokens[2], 10);
				isReg2 = false;
			}
			instructions.push({oper : oper, val1 : val1, val2 : val2, isReg1 : isReg1, isReg2 : isReg2});
		} else {
			instructions.push({oper : oper, val1 : val1, isReg1 : isReg1});
		}		
	});
	return instructions;
}

function findMusicaRegistersNumber(p_instructions) {
	var answer = 0;
	for (var i = 0 ; i < p_instructions.length ; i++) {
		if (p_instructions[i].isReg1) {
			answer = Math.max(p_instructions[i].val1, answer);
		}
		if (p_instructions[i].isReg2) { // Note : Warning, not always defined !
			answer = Math.max(p_instructions[i].val2, answer);
		}
	}
	return answer;
}

// Returns the number of the next instruction ; modifies the registers, too
function applyInstructionP1(p_instructions, p_registers, p_reader) {
	var inst = p_instructions[p_reader.index];
	switch(inst.oper) {
		case SET :
			p_registers[inst.val1] = (inst.isReg2 ? p_registers[inst.val2] : inst.val2); break;
		case ADD :
			p_registers[inst.val1] += (inst.isReg2 ? p_registers[inst.val2] : inst.val2); break;
		case MUL :
			p_registers[inst.val1] *= (inst.isReg2 ? p_registers[inst.val2] : inst.val2); break;
		case MOD :
			p_registers[inst.val1] %= (inst.isReg2 ? p_registers[inst.val2] : inst.val2); break;
		case SUB :
			p_registers[inst.val1] -= (inst.isReg2 ? p_registers[inst.val2] : inst.val2); break;
		case JGZ :
			var ctrl = (inst.isReg1 ? p_registers[inst.val1] : inst.val1);
			if (ctrl > 0) {				
				p_reader.index += (inst.isReg2 ? p_registers[inst.val2] : inst.val2); 
				p_reader.index--; // To compensate
			}
			break;
		case JNZ :
			var ctrl = (inst.isReg1 ? p_registers[inst.val1] : inst.val1);
			if (ctrl != 0) {				
				p_reader.index += (inst.isReg2 ? p_registers[inst.val2] : inst.val2); 
				p_reader.index--; // To compensate
			}
			break;
		case SND : 
			p_reader.sound = (inst.isReg1 ? p_registers[inst.val1] : inst.val1); break;
		case RCV :
			var ctrl = (inst.isReg1 ? p_registers[inst.val1] : inst.val1);
			if (ctrl != 0) {				
				p_reader.soundRetrieved = p_reader.sound;
			}
			break;
	}
	p_reader.index++;
}

function generateNewMusicaReader() {
	return {
		soundRetrieved : 0,
		sound : 0,
		index : 0,
		send : [],
		indexSend : 0,
		registerWaiting : -1
	}
} 

function readsSnd(p_reader, p_instructions) {
	return p_instructions[p_reader.index].oper == SND;
}

function readsMul(p_reader, p_instructions) {
	return p_instructions[p_reader.index].oper == MUL;
}

function isBlocked(p_reader) {
	return p_reader.registerWaiting != -1;
}

function readyToSend(p_reader) {
	return p_reader.indexSend < p_reader.send.length;
}

function unlockWith(p_readerToUnlock, p_registers, p_readerWith) {
	p_registers[p_readerToUnlock.registerWaiting] = p_readerWith.send[p_readerWith.indexSend];
	p_readerWith.indexSend++;
	p_readerToUnlock.registerWaiting = -1;
	if (p_readerWith.indexSend == p_readerWith.send.length) {
		p_readerWith.send = [];
		p_readerWith.indexSend = 0;
	}
}

function outOfInstructionBounds(p_reader, p_instructions) {
	return (p_reader.index >= p_instructions.length) || (p_reader.index) < 0;
}

function applyInstructionP2(p_instructions, p_registers, p_reader) {
	if (isBlocked(p_reader)) {
		return;
	}
	var inst = p_instructions[p_reader.index];
	switch(inst.oper) {
		case SET :
			p_registers[inst.val1] = (inst.isReg2 ? p_registers[inst.val2] : inst.val2); break;
		case ADD :
			p_registers[inst.val1] += (inst.isReg2 ? p_registers[inst.val2] : inst.val2); break;
		case MUL :
			p_registers[inst.val1] *= (inst.isReg2 ? p_registers[inst.val2] : inst.val2); break;
		case MOD :
			p_registers[inst.val1] %= (inst.isReg2 ? p_registers[inst.val2] : inst.val2); break;
		case JGZ :
			var ctrl = (inst.isReg1 ? p_registers[inst.val1] : inst.val1);
			if (ctrl > 0) {				
				p_reader.index += (inst.isReg2 ? p_registers[inst.val2] : inst.val2); 
				p_reader.index--; // To compensate
			}
			break;
		case SND : 
			p_reader.send.push(inst.isReg1 ? p_registers[inst.val1] : inst.val1); break;
		case RCV :
			p_reader.registerWaiting = inst.val1; break;
	}
	p_reader.index++;
}