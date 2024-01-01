const rawDataOfficial=`deal with increment 2
cut 3310
deal with increment 13
cut -9214
deal with increment 14
deal into new stack
deal with increment 26
deal into new stack
deal with increment 62
cut -1574
deal with increment 74
cut -7102
deal with increment 41
cut 7618
deal with increment 70
cut 7943
deal into new stack
deal with increment 52
cut -3134
deal with increment 21
deal into new stack
deal with increment 20
deal into new stack
deal with increment 61
cut -2810
deal with increment 60
cut 3355
deal with increment 13
cut 3562
deal with increment 55
cut 2600
deal with increment 47
deal into new stack
cut -7010
deal with increment 34
cut 1726
deal with increment 61
cut 2805
deal with increment 39
cut 1907
deal into new stack
cut 3915
deal with increment 14
cut -6590
deal into new stack
deal with increment 73
deal into new stack
deal with increment 31
cut 1000
deal with increment 3
cut 8355
deal with increment 2
cut -5283
deal with increment 50
cut -7150
deal with increment 71
cut 6728
deal with increment 58
cut -814
deal with increment 14
cut -8392
deal with increment 71
cut 7674
deal with increment 46
deal into new stack
deal with increment 55
cut 7026
deal with increment 17
cut 1178
deal with increment 10
cut -8205
deal with increment 27
cut -55
deal with increment 44
cut -2392
deal into new stack
cut 7385
deal with increment 36
cut -399
deal with increment 74
cut 6895
deal with increment 20
cut 4346
deal with increment 15
cut -4088
deal with increment 3
cut 1229
deal with increment 59
cut 4708
deal with increment 62
cut 2426
deal with increment 30
cut 7642
deal with increment 73
cut 9049
deal into new stack
cut -3866
deal with increment 68
deal into new stack
cut 1407`.split("\n");

const rawDataExample = `deal into new stack
cut -2
deal with increment 7
cut 8
cut -4
deal with increment 7
cut 3
deal with increment 9
deal with increment 3
cut -1`.split("\n");

var rawData;

var gDeck;
var gOperations;
const CUT = 0;
const REVERSE = 1;
const SHUFFLE = 2;

function init() {
	gOperations = [];
	for (var i = 0 ; i < rawData.length ; i++) {
		if (rawData[i].startsWith("c")) {
			gOperations.push({ operation : CUT, parameter : parseInt(rawData[i].substring(4), 10)  });
		} else if (rawData[i].startsWith("deal w")) {
			gOperations.push({ operation : SHUFFLE, parameter : parseInt(rawData[i].substring(19), 10)  });			
		} else {
			gOperations.push({ operation : REVERSE});
		}
	}
	// ERROR : forgot to re-deal the deck afterwards ! 
	gOperations.push({operation : SHUFFLE, parameter : 1});
}

function apply() {
	var firstIndex = 0;
	var goForward = true;
	gOperations.forEach(oper => {
		switch (oper.operation) {
			case REVERSE : 
				if (goForward) {
					goForward = false;
					firstIndex--;
					if (firstIndex == -1) {
						firstIndex = gDeck.length-1;
					}
				} else {
					goForward = true;
					firstIndex++;
					if (firstIndex == gDeck.length) {
						firstIndex = 0;
					}
				}
			break;
			case CUT :
				if (goForward) {
					firstIndex += oper.parameter;
				} else {
					firstIndex -= oper.parameter;
				}
				while (firstIndex < 0) {
					firstIndex += gDeck.length;
				}
				while (firstIndex >= gDeck.length) {
					firstIndex -= gDeck.length;
				}
			break; // We handle negative cuts too
			case SHUFFLE :
				var newDeck = generateArray(gDeck.length, -1);
				var ind = firstIndex;
				var newInd = 0;
				if (goForward) {
					for (var i = 0 ; i < gDeck.length ; i++) { // ERROR : confusion on how we shuffled... (first 0,3,6,9,12...) then make the "new index" vary according to goForward and firstIndex
						newDeck[newInd] = gDeck[ind];
						newInd += oper.parameter;
						if (newInd >= gDeck.length) {
							newInd -= gDeck.length;
						}
						ind++;
						if (ind == gDeck.length) {
							ind = 0;
						}
					}
				} else {
					for (var i = 0 ; i < gDeck.length ; i++) {
						newDeck[newInd] = gDeck[ind];
						newInd += oper.parameter;
						if (newInd >= gDeck.length) {
							newInd -= gDeck.length;
						}
						ind--;
						if (ind == -1) {
							ind = gDeck.length-1; // ERROR : forgot the -1, but it wasn't enough (to correct part 1)
						}
					} 
				}
				firstIndex = 0;
				goForward = true;
				gDeck = newDeck;
			break;
		}
	});
}

function conclusion_22_1() {
	gDeck = generateNumericArray(0, 10006);
	rawData = rawDataOfficial;
	init();
	apply();
	for (var answer = 0 ; answer < 10007 ; answer++) {
		if (gDeck[answer] == 2019) {
			return answer;
		}
	}
} // 7373 too high :( and so is 6485 :( and so is 1823 :(
// (forgot the last operation)
// 1219 is STILL INCORRECT ?!?!? 
// (Well, I used example this time)
// 1498 it is :)


const DECK_SIZE = 119315717514047;
function conclusion_22_2() {
	rawData = rawDataOfficial;
	init();
	var indexOf0 = 0;
	var indexOf1 = 1;
	indexOf0 = indexAfterOperations(indexOf0, DECK_SIZE);
	indexOf1 = indexAfterOperations(indexOf1, DECK_SIZE);
	var a = BigInt(indexOf1-indexOf0);
	var b = BigInt(indexOf0);
	//var stepsCycle = stepsForAStraightSequence(a, b, DECK_SIZE);
	const DECK_SIZE_BI = BigInt(DECK_SIZE);
	var stepsCycle = DECK_SIZE_BI;
	var realSteps= 101741582076661n%stepsCycle;
	var binary = bigIntToBinary(realSteps);
	const fctA = a;
	const fctB = b;
	var oldB;
	a = 1n;
	b = 0n;
	for (var i = 0 ; i < binary.length ; i++) {
		// Double (65x => 130x)
		oldB = b;
		b *= a;
		b += oldB;
		a *= a;
		a %= DECK_SIZE_BI;
		b %= DECK_SIZE_BI;
		if (binary[i]) { // Apply the basis (64x => 65x)
			a *= fctA;
			b *= fctA;
			b += fctB;
			a %= DECK_SIZE_BI;
			b %= DECK_SIZE_BI;
		}
	}
	// Now, solve the equation ax+b = 2019 and that's done !
	return (inverseModBigInt(a, DECK_SIZE_BI) * (2020n-b+DECK_SIZE_BI)) % DECK_SIZE_BI;
	// Aaaaaugh ! 20403889260408 is too low ! Lol, I was looking for the number 2019 and not 2020 !
	
	
}

// Follow position of the card in position p_starter after operations. 
			// Its new position X means card in Xth position was here before the operations.
			// Each card in the cycle will shift to something new.
function indexAfterOperations(p_starter, p_deckSize) {
	var ind = p_starter;
	/*var cycle = [];
	do {*/ 
		gOperations.forEach(oper => {
			switch(oper.operation) {
				case CUT : 
					ind -= oper.parameter;	// ERROR : I wrote oper.operation :( (I lost time)	
					while (ind < 0) {
						ind += p_deckSize;
					}
					while (ind >= p_deckSize) {
						ind -= p_deckSize;
					}
				break;
				case REVERSE :
					ind = p_deckSize-1-ind;
				break;
				case SHUFFLE :
					ind = (ind*oper.parameter)%p_deckSize;
				break;
			}
		});
	/*	cycle.push(ind);
	} while (cycle.length < 10000000 && ind != 2020);
	return cycle;*/
	return ind;
}



function conclusion_22_random() {
	const MAX_SIZE = 100;
	gDeck = generateNumericArray(0, MAX_SIZE-1); 
	gOperations = [];
	var aleaOper;
	var aleaPar;
	for (var i = 0 ; i < 5 ; i++) {
		aleaPar = randomNumber(0, 5);
		if (aleaPar == 5) {
			gOperations.push({operation : REVERSE});
		} else if (aleaPar == 3 || aleaPar == 4) {
			gOperations.push({operation : CUT, parameter : randomNumber(1, MAX_SIZE-1)});
		} else {
			do {
				aleaPar = randomNumber(1, MAX_SIZE-1);
			} while (gcd(aleaPar, MAX_SIZE) != 1);
			gOperations.push({operation : SHUFFLE, parameter : aleaPar});
		}
		gOperations.push({operation : SHUFFLE, parameter : 1}); // Error : should have added this for my tests. Well, I always had 0 and 1 near each other before the mistake.
	}

	
	var indexOf0 = 0;
	var indexOf1 = 1;
	for (var i = 0 ; i < 5 ; i++) {		
		apply();
		console.log(gDeck.slice(0, 5));
		indexOf0 = indexAfterOperations(indexOf0, MAX_SIZE);
		indexOf1 = indexAfterOperations(indexOf1, MAX_SIZE);
		console.log("Must be 0 1 : " + gDeck[indexOf0] + " " + gDeck[indexOf1]);
		console.log("Index of k : "+(indexOf1-indexOf0)+"k+"+indexOf0);
	}
}


// Calculate the number of times we must loop such that the polynom P(n+1) = a*P(n)+b [mod N] is equal to X again.
// A and B must each be coprime with N.
function stepsForAStraightSequence(p_a, p_b, p_mod) {
	var a = 1;
	var b = 0;
	var steps = 0;
	do {
		b = b*p_a+p_b;
		a = p_a*a;
		b %= p_mod;
		a %= p_mod;
		steps++;
	} while (a != 1);
	return steps; // Apparently b is always = 0 here...
}