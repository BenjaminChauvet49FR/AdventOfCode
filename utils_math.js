const G_UtilsMath = {
	primeNumbers : [2, 3, 5, 7],
	maximal : 10
};

// Launch the "Crible d'Eratosthene" to check for all prime numbers up to P included (TODO : so far, if we already had a bigger max, keep them)
// Maybe there's a solution that involves not regenerating the list if the new max is above the old one. But here we are.
// Note : for sake of not making the list absurdingly heavy, I only consider cases where p >= 10
function launchCrible(p_maximal) {
	if (p_maximal < G_UtilsMath.maximal) {
		return G_UtilsMath.primeNumbers;
	}
	G_UtilsMath.primeNumbers = [2, 3, 5, 7];
	G_UtilsMath.maximal = p_maximal;
	var candidates = [];
	for (var i = 11 ; i <= p_maximal ; i++) {
		if (i%2 != 0 && i%3 != 0 && i%5 != 0 && i%7 != 0) {
			candidates.push(i);
		}
	}
	candidates.reverse();
	var p;
	var limitation = Math.sqrt(p_maximal);
	while (candidates.length > 0 && (p = candidates.pop()) <= limitation) { // It's great "pop" is both an affectation and a returned value
		G_UtilsMath.primeNumbers.push(p);
		candidates = candidates.filter(function(q) {return q % p != 0});
	}
	while (candidates.length > 0) {
		G_UtilsMath.primeNumbers.push(candidates.pop());
	}
}

function primeDecompositionFinder(p_number) {
	// TODO : certainly improvable in a way we don't have to launch the crible entierely again !
	launchCrible(Math.sqrt(p_number)+1); // For the margin
	var answer = primeDecompositionFinder_aux(p_number, 2, 0, [{number : 2, coef : 0}]);
	answer.reverse();
	return answer;
}

function primeDecompositionFinder_aux(p_number, p_prime, p_ip, p_list) {
	if (p_number == 1) {
		return p_list;
	} else if (p_number % p_prime == 0) {
		p_list[p_list.length-1].coef++;
		return primeDecompositionFinder_aux(p_number/p_prime, p_prime, p_ip, p_list);
	} else {
		if (p_list[p_list.length-1].coef == 0) {
			p_list.pop();
		}
		if (p_ip == G_UtilsMath.primeNumbers.length-1) { // If the only divisors left are > the sqrt of the initial number... then there is only one. And it is coprime with all the numbers below it. So it is prime.
			p_list.push({number : p_number, coef : 1});
			return p_list;
		}
		const newPrime = G_UtilsMath.primeNumbers[p_ip+1];
		p_list.push({number : newPrime, coef : 0});
		return (primeDecompositionFinder_aux(p_number, newPrime, p_ip+1, p_list));
	}
}


function gcd(p_a, p_b) {
	if (p_a < 0) {
		return gcd(-p_a, p_b);
	}
	if (p_b < 0) {
		return gcd(p_a, -p_b);
	}
	if (p_a < p_b) {
		return gcd(p_b, p_a);
	}
	return gcd_aux(p_a, p_b);
}
function gcd_aux(p_a, p_b) {
	if (p_b == 0) {
		return p_a;
	}
	return gcd_aux(p_b, p_a % p_b);
}

function gcd_all(p_list) {
	var answer = p_list[0];
	for (var i = 1 ; i < p_list.length ; i++) {
		answer = gcd(answer, p_list[i]);
	}
	return answer;
}

// Warning : we assume there is no zero and only positive integers among the arguments !
function lcm(p_a, p_b) {
	return p_a*p_b/gcd(p_a, p_b);
}

// Returns lcm of all elements in the non-empty list. Same constraints as above !
function lcm_all(p_list) {
	var answer = p_list[0];
	for (var i = 1 ; i < p_list.length ; i++) {
		answer = lcm(answer, p_list[i]);
	}
	return answer;
}