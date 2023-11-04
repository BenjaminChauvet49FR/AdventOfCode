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

// ---
// Part 2 - recursive ! 
// We assume deck 1 and deck 2 were already sliced.

const safetyArray = [6,24,120,720,5040]
function getSafety(p_totalCards) {
	if (p_totalCards >= 8) {
		return 10000;
	}
	return safetyArray[p_totalCards-3];
}

function makeAGame(p_deck1, p_deck2, p_totalCards) {
	var deck1 = p_deck1;
	var deck2 = p_deck2;
	var i1 = 0;
	var i2 = 0;
	var k;
	var val1;
	var val2;
	var treeOfSeenConfigs = {branches : []};
	var newConfig = true;
	var subDeck1, subDeck2, resultSubGame;
	var totalCards;
	var numberAttempts = 0;
	var emergencyMode = false;
	const limitSafety = getSafety(p_totalCards);
	while (!hasLost(deck1) && !hasLost(deck2)) {
		if (emergencyMode && !addNewConfig(treeOfSeenConfigs, deck1, deck2)) {
			newConfig = false;
			break;
		} 
		numberAttempts++;
		if (numberAttempts == limitSafety) {
			if (!emergencyMode) {
				addNewConfig(treeOfSeenConfigs, deck1, deck2);
			}
			emergencyMode = true;
		}
		val1 = drawFirstCard(deck1);
		val2 = drawFirstCard(deck2);
		if (val1 <= numberCardsRemaining(deck1) && val2 <= numberCardsRemaining(deck2)) {
			/*if (!emergencyMode) {
				addNewConfig(treeOfSeenConfigs, deckWith(deck1, val1, p_totalCards), deckWith(deck2, val2, p_totalCards));				
			}*/
			subDeck1 = copyDeck(deck1, val1, val1+val2); // No, you mustn't use all the decks every time !
			subDeck2 = copyDeck(deck2, val2, val1+val2);
			resultSubGame = makeAGame(subDeck1, subDeck2, val1+val2);
			emergencyMode = true;
		} else {
			resultSubGame = val1 > val2;
		}
		if (resultSubGame) {
			insertCards(deck1, val1, val2);
		} else {
			insertCards(deck2, val2, val1);
		}
	}
	return !newConfig || (hasLost(deck2));
}

function hasLost(p_deck) {
	return p_deck.deadIndex == p_deck.firstIndex;
}

function insertCards(p_deck, p_firstCard, p_secondCard) {
	p_deck.cards[p_deck.deadIndex] = p_firstCard;
	p_deck.deadIndex++;
	if (p_deck.deadIndex == p_deck.cards.length) {
		p_deck.deadIndex = 0;
	}
	p_deck.cards[p_deck.deadIndex] = p_secondCard;
	p_deck.deadIndex++;
	if (p_deck.deadIndex == p_deck.cards.length) {
		p_deck.deadIndex = 0;
	}	
}

function drawFirstCard(p_deck) {
	const val = p_deck.cards[p_deck.firstIndex];
	p_deck.firstIndex++;
	if (p_deck.firstIndex == p_deck.cards.length) {
		p_deck.firstIndex = 0;
	}
	return val;
}

function numberCardsRemaining(p_deck) {
	if (p_deck.deadIndex >= p_deck.firstIndex) {
		return p_deck.deadIndex - p_deck.firstIndex;
	} else {
		return p_deck.cards.length + p_deck.deadIndex - p_deck.firstIndex;
	}
}

function copyDeck(p_deck, p_cardNumbers, p_totalCardNumbers) {
	var answer = {
		firstIndex : 0,
		deadIndex : p_cardNumbers,
		cards : []
	}
	var index = p_deck.firstIndex;
	for (var i = 0 ; i < answer.deadIndex ; i++) {
		answer.cards.push(p_deck.cards[index]);
		index++;
		if (index == p_deck.cards.length) {
			index = 0;
		}
	}
	while (answer.cards.length < p_totalCardNumbers) {
		answer.cards.push(-1);
	}
	answer.cards.push(-1);
	return answer;
}

function initDeck(p_array, p_totalCardNumbers) {
	var answer = {
		firstIndex : 0,
		deadIndex : p_array.length,
		cards : p_array.slice()
	}
	while (answer.cards.length < p_totalCardNumbers) {
		answer.cards.push(-1);
	}
	answer.cards.push(-1); // Add an extra card such that when winning, first doesn't match with last
	return answer;
}

function addNewConfig(p_treeOfConfigs, p_deck1, p_deck2) {
	var newBranch = {subtree : p_treeOfConfigs, actuallyNew : false};
	var i = p_deck1.firstIndex;
	while (i != p_deck1.deadIndex) {
		newBranch = tryToInsert(newBranch.subtree, p_deck1.cards[i]);
		i = nextIndex(i, p_deck1);
	}
	newBranch = tryToInsert(newBranch.subtree, -1); // Line added last !
	i = p_deck2.firstIndex;
	while (i != p_deck2.deadIndex) {
		newBranch = tryToInsert(newBranch.subtree, p_deck2.cards[i]);
		i = nextIndex(i, p_deck2);
	}
	return newBranch.actuallyNew;
}

function nextIndex(p_i, p_deck) {
	if (p_deck.cards.length == p_i+1) {
		return 0;
	}
	return p_i+1;
}

// Return a deck with this card in front of it
function deckWith(p_deck, p_card, p_totalCardNumbers) {
	var deck = copyDeck(p_deck, (p_deck.deadIndex-p_deck.firstIndex+1+p_totalCardNumbers) % p_totalCardNumbers, p_totalCardNumbers);
	deck.firstIndex--;
	if (deck.firstIndex == -1) {
		deck.firstIndex = deck.cards.length-1;
	}
	deck.cards[deck.firstIndex] = p_card;
	return deck;
}

// Tries to insert an array in a subtree (imbricated arrays)
// If successful, return {true, singleton of the new tree}
// Otherwise, return the subtree containing it
function tryToInsert(p_subtree, p_eltToAdd) {
	for (var i = 0 ; i < p_subtree.branches.length ; i++) {
		if (p_subtree.branches[i].node == p_eltToAdd) {
			return {actuallyNew : false, subtree : p_subtree.branches[i]}
		} 
	}
	p_subtree.branches.push({ 
		node : p_eltToAdd,
		branches : []
	});
	return {
		actuallyNew : true,
		subtree : p_subtree.branches[p_subtree.branches.length-1]
	}
}

function conclusion_22_2() {
	const totalLength = dataDeck1.length + dataDeck2.length;
	var deck1 = initDeck(dataDeck1, totalLength);
	var deck2 = initDeck(dataDeck2, totalLength);
	var player1Wins = makeAGame(deck1, deck2, totalLength);
	var winningDeck = player1Wins ? deck1 : deck2;
	var i = winningDeck.firstIndex;
	var answer = 0;
	var coef = totalLength;
	do {
		answer += winningDeck.cards[i] * coef;
		i = nextIndex(i, winningDeck);
		coef--;
	} while (i != winningDeck.deadIndex) ; // No classic while loop, we need to count each once !
	return answer;
} // Correct answer = 34173