const rawData = 29000000;
const actualConst = rawData/10;
const actualConst2 = Math.floor(rawData/11)+1;

function getSumDivisors(p_listFactors) {
	var answer = 1;
	var prime;
	var factor, sumFactor;
	for (var i = 0 ; i < p_listFactors.length ; i++) {
		factor = 1;
		sumFactor = 1;
		for (var j = 0 ; j < p_listFactors[i].coef ; j++) {
			factor *= p_listFactors[i].number;
			sumFactor += factor;
		}
		answer *= sumFactor;
	}
	return answer;
}

function conclusion_20_1() {
	const STARTING_POINT = 756000; 
	var bestNumber = STARTING_POINT;
	var listFactors = primeDecompositionFinder(STARTING_POINT);
	var bestSum = getSumDivisors(listFactors);
	var sd;
	var iPrime = G_UtilsMath.primeNumbers.length-1;
	var newPrime = G_UtilsMath.primeNumbers[iPrime];
	for (var number = STARTING_POINT-1; number >= 1 ; number--) {
		if (number == newPrime) { // Skip prime numbers;
			iPrime--;
			if (iPrime >= 0) {				
				newPrime = G_UtilsMath.primeNumbers[iPrime];
			}
			continue;
		}
		listFactors = primeDecompositionFinder(number);
		sd = getSumDivisors(listFactors);
		//if (sd <= bestSum && sd >= actualConst) {
		if (sd >= actualConst) {
			bestSum = sd; // bestSum actually useless
			bestNumber = number;
		}
	}
	return bestNumber;// 750960 AND 743400 have the same divisor sum (2901600), but I had a < rather than a <= in the sd-bestSum comparison...
} // What ? The answer is STILL NOT 743400 ? 
// WAIT ! NO, we don't need the lowest divisor sum at all ! Only one that is higher than 2.9M !

// BTW : sumDivisors(750960) = 150*31*13*8*6 ; for 743400 it's 60*31*13*8*15 ; (and 16 and 25 both have a divisor sum of 31)
// Correct answer is 665280.

function conclusion_20_2() {
	const STARTING_POINT = 1330560; // Twice the answer of first part. Should be good.
	var bestNumber = STARTING_POINT;
	launchCrible(STARTING_POINT);
	var sd;
	var iPrime = G_UtilsMath.primeNumbers.length-1;
	var newPrime = G_UtilsMath.primeNumbers[iPrime];
	for (var number = STARTING_POINT-1; number >= 1 ; number--) {
		if (number == newPrime) { // Skip prime numbers;
			iPrime--;
			if (iPrime >= 0) {				
				newPrime = G_UtilsMath.primeNumbers[iPrime];
			}
			continue;
		}
		sd = getSumBigDivisors(number);
		if (sd >= actualConst2) {
			bestNumber = number;
		}
	}
	return bestNumber;
} // Not bad, actually

// Return the sum of divisors of a number (itself included) that don't divide it by more than 50
function getSumBigDivisors(p_number) {
	var answer = 0;
	for (var i = 1 ; i <= 50 ; i++) {
		if (p_number % i == 0) {
			answer += (p_number / i);
		}
	}
	return answer;
}

