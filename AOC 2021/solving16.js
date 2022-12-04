"use strict";


const rawData ="20546C8802538E136091C1802689BCD7DA45948D319D1B100747A009C97696E8B4ABFCA6AB8F4F26C401964A6271C80F802D392C01CEDDCE6E5CB829802F600A00021B14E34C361006E0AC418BB2CA6800BE4599BB6A73507002A52BEEB14D201802F600849E64D3369D37C74100866785B3D0ADFD8E601E5EB9DE2366D93ECB8B040142CB8ACE07CCB5CF34CA89380410B6134CE6FEF104A2B200243396976A00401A45004313D68435DBDDDA61CE6428C01491AEBF0C7E580AE00CCC401B86514216880370EE3443D2013DF003750004361343D88800084C4C8B116A679018300740010C8571BA32080350DA0D42800043A3044189AE0174B314D76E1F3ACF3BDAE3EE7298FF134002EF9DBCD0644127E3CAE7FCBA9A80393544F9A927C973DF1A500965A5CEA94C4DDA5658B94C6C3002A798A629CF21280532BAB4F4C7271E45EE6E71D8143A9BC7948804AB94D1D6006AC200EC1E8A10C00010985316A35C3620061E641644D661A4C012993E99208FC60097802F28F528F738606008CA47205400814C89CC8890064D400AB4BE0A66F2BF253E73AE8401424A7BFB16C0037E06CE0641E0013B08010A8930CE2B980351161DC3730066274188B020054A5E16965940057895ADEB5BF56A635ADE2354191D70566273A6F5B078266008D8022200D46E8291C4401A8CF0CE33CEDE55E9F9802BA00B4BD44A5EA2D10CC00B40316800BAE1003580A6D6026F00090E50024007C9500258068850035C00A4012ED8040B400D71002AF500284009700226336CA4980471D655E25D4650888023AB00525CAE5CBA5E428600BE003993778CB4732996E9887AE3F311C291004BD37517C0041E780A7808802AF8C1C00D0CDBE4ACAD69B3B004E13BDF23CAE7368C9F62448F64546008E0034F3720192A67AD9254917454200DCE801C99ADF182575BBAACAC7F8580";
const data = hexadecimalToBinary(rawData);



const rawData2 = "110100101111111000101000";
const rawData3 = "00111000000000000110111101000101001010010001001000000000";
const rawData4 = "11101110000000001101010000001100100000100011000001100000";

//const rawData5 = "620080001611562C8802118E34";
//const rawData5 = "A0016C880162017C3686B18A3D4780";
//const rawData5 = "8A004A801A8002F478";
// const data = stringToBinaryTransposition(rawData4);
//const data = hexadecimalToBinary(rawData5);

function conclusion_16_1() {
	var packet = {};
	readOnePacket(packet, 0);
	console.log("La version sum vaut " + getVersionSum(packet)); // Good answer = 904
	return packet;
}

function conclusion_16_2() {
	var packet = {};
	readOnePacket(packet, 0);
	console.log("L'opération vaut " + operatePacket(packet)); 
	return packet; // Good answer = 200476472872
}

const SIZE_MODE_LENGTH = 15;
const COUNT_MODE_LENGTH = 11;
const BIT_FOR_SIZE_MODE = false;

// Reads information and writes them into p_packet (without sub-information for now) 
function readOnePacket(p_packet, p_1bi) { // 1bi = 1st bit index (in data)
	// NO STACK OVERFLOW ASSUMED !
	// Read infos of VN and typeID
	// If typeId == 4 :
		// add literalValue.
	// Otherwise :
		// If next bit == 1 (size reading) :
			// store the final bit of the size of the next subpackets. 
			// While we didn't reach the final bit yet :
				// Read a subpacket, put it into "readOnePacket" and take care of the final index reached.
		// Else, next bit == 0 (number of subpackets reading) :
			// Okay...
			
	 
	
	p_packet.literalValue = [];
	p_packet.subpackets = [];
	p_packet.indexFirstBit = p_1bi;
	if (p_1bi < data.length-50) {
		p_packet.firstBitsRead = binaryToStringTransposition( data.slice(p_1bi, p_1bi+50));
	}
			
	p_packet.versionNumber = nextBitsFromDataToDecimal(p_1bi, 3); // First 3 bits of a pack
	p_packet.typeId = nextBitsFromDataToDecimal(p_1bi+3, 3); // Next 3 bits. 4 : literal value. Anything else : operator. 
	if (p_packet.typeId == 4) {
		// Literal value
		var bitIndexOfNumber = p_1bi+6;
		var continueReading = true;
		while (continueReading) {
			continueReading = data[bitIndexOfNumber] == 1;
			p_packet.literalValue.push(nextBitsFromDataToDecimal(bitIndexOfNumber+1, 4));
			bitIndexOfNumber += 5;
		}
		// Now, the last bit read is bitIndexOfNumber-1. But beware of 4-paddings !
		var lastBitRead = bitIndexOfNumber-1;
		p_packet.indexLastBit = lastBitRead;
		//p_packet.indexLastBit = multipleOf4BitsFrom(lastBitRead, p_1bi);
	} else if (data[p_1bi+6] == BIT_FOR_SIZE_MODE) {
		// Size approach
		var numberOfBitsToRead = nextBitsFromDataToDecimal(p_1bi+7, SIZE_MODE_LENGTH); 
		var currentBit = p_1bi + 7 + SIZE_MODE_LENGTH;
		p_packet.numberOfBitsToRead = numberOfBitsToRead;
		while (currentBit < p_1bi + 7 + SIZE_MODE_LENGTH + numberOfBitsToRead) {
			var newPacket = {};
			readOnePacket(newPacket, currentBit);
			p_packet.subpackets.push(newPacket);
			currentBit = newPacket.indexLastBit+1;
		}
		currentBit--;
		p_packet.indexLastBit = currentBit;
		//p_packet.indexLastBit = multipleOf4BitsFrom(currentBit, p_1bi);
	} else {
		// Packet number approach
		var numberOfPacketsToRead = nextBitsFromDataToDecimal(p_1bi+7, COUNT_MODE_LENGTH); 
		p_packet.numberOfPacketsToRead = numberOfPacketsToRead;
		var currentBit = p_1bi + 7 + COUNT_MODE_LENGTH;
		for (var i = 0 ; i < numberOfPacketsToRead ; i++) {
			var newPacket = {};
			readOnePacket(newPacket, currentBit);
			p_packet.subpackets.push(newPacket);
			currentBit = newPacket.indexLastBit+1;
		}
		currentBit--;
		p_packet.indexLastBit = currentBit;
		//p_packet.indexLastBit = multipleOf4BitsFrom(currentBit, p_1bi);
	}
}

// Gives the value obtained reading the next n bits.
function nextBitsFromDataToDecimal(p_index, p_numberBits) {
	var answer = 0;
	for (var i = 0; i < p_numberBits ; i++) {
		answer *= 2;
		answer += data[p_index+i];
	}
	return answer;
}

// The 1st index of ending such that the number total of bits from 1st to last (both included) is a multiple of 4 bits
function multipleOf4BitsFrom(p_lastBitRead, p_firstBitRead) {
	var numberBitRead = p_lastBitRead-p_firstBitRead-1;
	if (numberBitRead % 4 != 0) {
		return p_lastBitRead + (4 - numberBitRead % 4);
	} else {
		return p_lastBitRead;
	}
}


function getVersionSum(p_packet) {
	var answer = p_packet.versionNumber;
	p_packet.subpackets.forEach(pack => {
		answer += getVersionSum(pack);
	});
	return answer;
}

// No jokes about how the packet is done, right ?
function operatePacket(p_packet) {
	var answer;
	switch (p_packet.typeId) {
		case 0 : 
			answer = 0;
			p_packet.subpackets.forEach(pack => {
				answer += operatePacket(pack);
			});
		break;
		case 1 : 
			answer = 1;
			p_packet.subpackets.forEach(pack => {
				if (answer != 0) {
					answer *= operatePacket(pack);
				}
			});
		break;
		case 2 : 
			var compared;
			answer = operatePacket(p_packet.subpackets[0]);
			for (var i = 1 ; i < p_packet.subpackets.length ; i++) {
				compared = operatePacket(p_packet.subpackets[i]);
				answer = (compared < answer ? compared : answer);
			}
		break;		
		case 3 : 
			var compared;
			answer = operatePacket(p_packet.subpackets[0]);
			for (var i = 1 ; i < p_packet.subpackets.length ; i++) {
				compared = operatePacket(p_packet.subpackets[i]);
				answer = (compared > answer ? compared : answer);
			}
		break;
		case 4 : 
			answer = 0;
			for (var i = 0 ; i < p_packet.literalValue.length ; i++) {
				answer *=16;
				answer += p_packet.literalValue[i];
			}
		break;
		case 5 : 
			answer = (operatePacket(p_packet.subpackets[0]) > operatePacket(p_packet.subpackets[1])) ? 1 : 0;
		break;	
		case 6 : 
			answer = (operatePacket(p_packet.subpackets[0]) < operatePacket(p_packet.subpackets[1])) ? 1 : 0;
		break;
		case 7 : 
			answer = (operatePacket(p_packet.subpackets[0]) == operatePacket(p_packet.subpackets[1])) ? 1 : 0;
		break;
	}
	return answer;
}