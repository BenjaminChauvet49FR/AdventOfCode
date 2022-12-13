const OPER_PLUS = 0;
const OPER_TIMES = 1;
const OPER_SQUARE = 2;
const OPER_ARRAY = ["+","*","^"];
const NUMBER_ROUNDS = 20;
const NUMBER_ROUNDS_2 = 10000;

/*:var monkeys = [
{
	items : [79, 98],
	oper : OPER_TIMES,
	operand : 19,
	divisible : 23,
	destTrue : 2,
	destFalse : 3
},
{
	items : [54, 65, 75, 74],
	oper : OPER_PLUS,
	operand : 6,
	divisible : 19,
	destTrue : 2,
	destFalse : 0
},
{
	items : [79, 60, 97],
	oper : OPER_SQUARE,
	operand : 2,
	divisible : 13,
	destTrue : 1,
	destFalse : 3
},
{
	items : [74],
	oper : OPER_PLUS,
	operand : 3,
	divisible : 17,
	destTrue : 0,
	destFalse : 1
}
];
const LCM_TESTS = 96577// lowest common multiple of all tests;*/

var monkeys = [{}, {}, {}, {}, {}, {}, {}, {}];

monkeys[0].items = [62, 92, 50, 63, 62, 93, 73, 50];
monkeys[0].oper = OPER_TIMES;
monkeys[0].operand = 7;
monkeys[0].divisible = 2;
monkeys[0].destTrue = 7;
monkeys[0].destFalse = 1;

monkeys[1].items = [51, 97, 74, 84, 99];
monkeys[1].oper = OPER_PLUS;
monkeys[1].operand = 3;
monkeys[1].divisible = 7;
monkeys[1].destTrue = 2;
monkeys[1].destFalse = 4;

monkeys[2].items = [98, 86, 62, 76, 51, 81, 95];
monkeys[2].oper = OPER_PLUS;
monkeys[2].operand = 4;
monkeys[2].divisible = 13;
monkeys[2].destTrue = 5;
monkeys[2].destFalse = 4;

monkeys[3].items = [53, 95, 50, 85, 83, 72];
monkeys[3].oper = OPER_PLUS;
monkeys[3].operand = 5;
monkeys[3].divisible = 19;
monkeys[3].destTrue = 6;
monkeys[3].destFalse = 0;

monkeys[4].items = [59, 60, 63, 71];
monkeys[4].oper = OPER_TIMES;
monkeys[4].operand = 5;
monkeys[4].divisible = 11;
monkeys[4].destTrue = 5;
monkeys[4].destFalse = 3;

monkeys[5].items = [92, 65];
monkeys[5].oper = OPER_SQUARE;
monkeys[5].operand = 2;
monkeys[5].divisible = 5;
monkeys[5].destTrue = 6;
monkeys[5].destFalse = 3;

monkeys[6].items = [78];
monkeys[6].oper = OPER_PLUS;
monkeys[6].operand = 8;
monkeys[6].divisible = 3;
monkeys[6].destTrue = 0;
monkeys[6].destFalse = 7;

monkeys[7].items = [84, 93, 54];
monkeys[7].oper = OPER_PLUS;
monkeys[7].operand = 1;
monkeys[7].divisible = 17;
monkeys[7].destTrue = 2;
monkeys[7].destFalse = 1;

const LCM_TESTS = 9699690;

for (var i = 0 ; i <  monkeys.length ; i++) {
	monkeys[i].numberItemsChecked = 0;
}

conclusion_11_1 = function() {
	var i, j, k, monkey, item, dest;
	for (i = 0 ; i < NUMBER_ROUNDS ; i++) {
		console.log("---Round " + i + "---");
		for (j = 0 ; j < monkeys.length ; j++) {
			monkey = monkeys[j];
			console.log("Monkey " + j + " : oper " + OPER_ARRAY[monkey.oper] + monkey.operand + " M.O. " + monkey.divisible + " ? " + monkey.destTrue + " : " + monkey.destFalse);
			for (k = 0 ; k < monkey.items.length ; k++) {
				item = monkey.items[k];
				console.log("Inspect " + i + "." + j + "." + k + " val. " + item); 
				if (monkey.oper == OPER_PLUS) {
					item += monkey.operand;
				} else if (monkey.oper == OPER_TIMES) {
					item *= monkey.operand;
				} else {
					item = item * item;
				}
				item = Math.floor(item/3);
				if (item % monkey.divisible == 0) {
					dest = monkey.destTrue
				} else {
					dest = monkey.destFalse;
				}
				monkeys[dest].items.push(item); // The order in which items are tested is irrelevant... right ?
				console.log("Now val. " + item + ", goes to " + dest + " (who has " + monkeys[dest].items.length + " item(s))");
			}
			monkey.numberItemsChecked += monkey.items.length;
			monkey.items = [];
			console.log("Number of items inspected by monkey " + j + " : " + monkey.numberItemsChecked);
		}
	}
	
	for (j = 0 ; j < monkeys.length ; j++) {
		console.log("Number of items inspected by monkey " + j + " : " + monkeys[j].numberItemsChecked);
	}
	// Two highest = 297 & 306, product 90882
}

conclusion_11_2 = function() {
	var i, j, k, monkey, item, dest;
	for (i = 0 ; i < NUMBER_ROUNDS_2 ; i++) {
		for (j = 0 ; j < monkeys.length ; j++) {
			monkey = monkeys[j];
			for (k = 0 ; k < monkey.items.length ; k++) {
				item = monkey.items[k];
				if (monkey.oper == OPER_PLUS) {
					item += monkey.operand;
				} else if (monkey.oper == OPER_TIMES) {
					item *= monkey.operand;
				} else {
					item = item * item;
				}
				item = item % LCM_TESTS;
				if (item % monkey.divisible == 0) {
					dest = monkey.destTrue
				} else {
					dest = monkey.destFalse;
				}
				monkeys[dest].items.push(item); 
			}
			monkey.numberItemsChecked += monkey.items.length;
			monkey.items = [];
		}
	}
	
	for (j = 0 ; j < monkeys.length ; j++) {
		console.log("Number of items inspected by monkey " + j + " : " + monkeys[j].numberItemsChecked);
	}
	// Two highest = 297 & 306, product 90882
} // Answer : 174243*177299 = 30893109657