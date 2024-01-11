const rawData = `Disc #1 has 17 positions; at time=0, it is at position 15.
Disc #2 has 3 positions; at time=0, it is at position 2.
Disc #3 has 19 positions; at time=0, it is at position 4.
Disc #4 has 13 positions; at time=0, it is at position 2.
Disc #5 has 7 positions; at time=0, it is at position 2.
Disc #6 has 5 positions; at time=0, it is at position 0.`.split("\n");

const workedData = [[17, 15], [3, 2], [19, 4], [13, 2], [7, 2], [5, 0]];

function conclusion_15_1() {
	const data = [];
	for (var i = 0 ; i < workedData.length ; i++) {
		data.push([workedData[i][0], (workedData[i][1]+i+1)%workedData[i][0]]); // Error : missed the +1 needed to reach first disc
		if (data[i][1] != 0) {			
			data[i][1] = data[i][0]-data[i][1]; // Invert it for the CRT
		}
	}
	return chineseRemainderTheorem(data);
}

function conclusion_15_2() {
	const data = [];
	var i;
	for (i = 0 ; i < workedData.length ; i++) {
		data.push([workedData[i][0], (workedData[i][1]+i+1)%workedData[i][0]]); 
		if (data[i][1] != 0) {			
			data[i][1] = data[i][0]-data[i][1]; 
		}
	}
	data.push([11, 11-(workedData.length+1)]);
	return chineseRemainderTheorem(data);
}
// 1458737... nope ? Too low ?
// 2781422 ... no :(
// LOL, I didn't get that it was below all the other discs !
// Thought it was between the second to last and the last one !