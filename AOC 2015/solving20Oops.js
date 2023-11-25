// OOPS ! I didn't read the problem and ended up looking for the first number with at least 2.9M divisors when in reality the SUM OF DIVISORS needed to be at least 2.9M. So... it was an interesting search, but unfortunately it was useless, at least partially.
// Well, I had fun anyway.

const rawData = 29000000;
const actualConst = rawData/10;

/* Find the lowest number that has at least (actualConst) divisors.
2*3*5*7*11*13*17...
2*2*2*2*2*2*2*...
4,8,16 => 3,4,5...

2916000 divisors =
5^3 * 3^6 * 2^5
2 3 5 7 11 13 ^6
17 19 ^5
23 29 31 ^2

2914912 divisors =
2^5 * 11 * 7^2 * 13^2
2 3^13
5^11
7 11^5

*/
// Credits : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

function getSmallerNumberWithThatManyDivisors(p_listFactors, p_maxValueSearched) {
	var answer = 1n;
	var prime;
	var iPrime = 0;
	for (var i = 0 ; i < p_listFactors.length ; i++) {
		for (var j = 0 ; j < p_listFactors[i].coef ; j++) {
			prime = BigInt(G_UtilsMath.primeNumbers[iPrime]);
			iPrime++;
			for (var k = 0 ; k < p_listFactors[i].number-1 ; k++) {				
				answer *= prime;
				if (answer > p_maxValueSearched) {
					return 0n;
				}
			}
		}
	}
	return answer;
}
// Bad idea :  9699690 is NOT the smallest number with 256 divisors : there's 9261000 too (and there may be better... although it would require a divisor like 2^7 and 3^7, or 2^15 and 3 divisors...)
// Anyway, I should keep the number 2903040, it may be my "winning number of divisors".
// 2903040 = 2^6 for 7 divisors, 3^4 for 5, how many for 82944 ? 
// For 81 divisors, 5005^2
// For the 1024 divisors left... 
// 17,19,23,29,31 all at power 3
// OR 17*19*23*29*31*37*43*47*53*59. Which one is smaller ?
// So : 5184n*(5005n**2) * 17n*19n*23n*29n*31n*37n*41n*43n*47n*53n*59n
// OK, back to the 2835 ? is (360360^2) the smallest number with 2835 divisors ? 
// Or what is the sqrt of the number ? 
// Well, we can have something along the lines of 7 5 3 3 3 3 or 9 9 7 5 or 9 7 5 3 3
// Try 9 9 7 5 (so exponents are 8 8 6 4) : sqrt is 4 4 3 2. So... 7938000
// Try 9 7 5 3 3 (so exponents are 8 6 4 2 2 : sqrt is 4 3 2 1 1... 831600 
// So no, the smallest number with exactly 2835 divisors is 360360**2 and that's it.


// Maybe we should find a muliple of an interesting power of 2 above 1024. 
// Let's try 1024*2880 : so 45 divisors between 2 and 3 (8 4 : 20736) and 16 prime numbers (including 5, 7, 11... AWESOME ! . ?)
// 20736n* 5n*7n*11n*13n *17n*23n*29n*31n *37n*41n*43n*47n *53n*59n*61n*67n

// Don't maximize the power of 2. In fact, if it's compact with the power of 3 it may be better. Let's end the try o
// So... what about 12^6 ? We don't have to sacrifice our 2 for a low power.
// 9 9 9 
// so (2n*3n*5n)**8n *17017n*(19n*23n*31n*37n*41n*43n*47n*53n)
// (2n*3n*5n)**8n * (7436429n)**3n
// My ideas keep going worse !

function getNumberWithThatManyDivisors(p_listFactors) {
	var answer = 1n;
	var prime;
	var iPrime = 0;
	for (var i = 0 ; i < p_listFactors.length ; i++) {
		for (var j = 0 ; j < p_listFactors[i].coef ; j++) {
			prime = BigInt(G_UtilsMath.primeNumbers[iPrime]);
			iPrime++;
			for (var k = 0 ; k < p_listFactors[i].number-1 ; k++) {				
				answer *= prime;
			}
		}
	}
	return answer;
}

function conclusion_20_1() {
	const STARTING_POINT = 2916000;
	var listFactors = primeDecompositionFinder(STARTING_POINT);
	var bestNumber = getNumberWithThatManyDivisors(listFactors);
	var bestNumberDivisors = STARTING_POINT;
	var number;
	for (var divNumb = STARTING_POINT-1; divNumb >= actualConst ; divNumb--) {
		listFactors = primeDecompositionFinder(divNumb);
		number = getSmallerNumberWithThatManyDivisors(listFactors, bestNumber);
		if (number != 0n) {
			bestNumberDivisors = divNumb;
			bestNumber = number;
		}
	}
	return bestNumber;
	// Oops, so the answer is not 193363512497182902311236800n (2903040 divisors)
	// Well, 140925949786082454226833600n is better with the same number of divisors. Still not the correct answer.
	// 		 
	// Or with 2949120 divisors ?
	//       1429387330554389628690428160n NOOOOO
	
}							