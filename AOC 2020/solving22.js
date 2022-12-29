const dataDeckOfficial1 = [
38,
1 ,
28,
32,
43,
21,
42,
29,
18,
13,
39,
41,
49,
31,
19,
26,
27,
40,
35,
14,
3 ,
36,
12,
16,
45
]

const dataDeckOfficial2 = [
34,
15,
47,
20,
23,
2 ,
11,
9 ,
8 ,
7 ,
25,
50,
48,
24,
46,
44,
10,
6 ,
22,
5 ,
33,
30,
4 ,
17,
37]

const dataExampleDeck1 = [9, 2, 6, 3, 1];
const dataExampleDeck2 = [5, 8, 4, 7, 10];

//const dataDeck1 = dataExampleDeck1;
//const dataDeck2 = dataExampleDeck2;
const dataDeck1 = dataDeckOfficial1;
const dataDeck2 = dataDeckOfficial2;

function conclusion_22_1() {
	// Top = 1st in array
	var deck1 = dataDeck1.slice();
	var deck2 = dataDeck2.slice();
	var newDeck1 = [];
	var newDeck2 = [];
	var i1 = 0;
	var i2 = 0;
	var val1;
	var val2;
	while (deck1.length != 0 && deck2.length != 0) {
		val1 = deck1[i1]; 
		val2 = deck2[i2];
		if (val1 < val2) {
			newDeck2.push(val2);
			newDeck2.push(val1);
		} else {
			newDeck1.push(val1);
			newDeck1.push(val2);
		}
		i1++;
		i2++;
		if (i1 == deck1.length) {
			deck1 = newDeck1;
			i1 = 0;
			newDeck1 = [];
		}
		if (i2 == deck2.length) {
			deck2 = newDeck2;
			i2 = 0;
			newDeck2 = [];
		}
	}
	var deckWin = [];
	if (deck1.length == 0) {
		for (var i = i2 ; i < deck2.length ; i++) {
			deckWin.push(deck2[i]);
		}
		for (var i = 0 ; i < newDeck2.length ; i++) {
			deckWin.push(newDeck2[i]);
		}
	} else {
		for (var i = i1 ; i < deck1.length ; i++) {
			deckWin.push(deck1[i]);
		}
		for (var i = 0 ; i < newDeck1.length ; i++) {
			deckWin.push(newDeck1[i]);
		}
	}
	
	var count = 0;
	for (var i = 0 ; i < deckWin.length ; i++) {
		count += deckWin[i] * (deckWin.length - i);
	}
	return count;
}