var rawData = "^^^^......^...^..^....^^^.^^^.^.^^^^^^..^...^^...^^^.^^....^..^^^.^.^^...^.^...^^.^^^.^^^^.^^.^..^.^";
var gNumberGen = 40;
//var rawData = ".^^.^.^^^^";
//var gNumberGen = 10;

var gData; // False = safe
var gIOld, gINew;

function init() {
	gData = [[false], [false]];
	gIOld = 0;
	gINew = 1;
	for (var i = 0 ; i < rawData.length ; i++) {
		gData[gIOld].push(rawData.charAt(i) == '^'); // Error, swapped ^ and .
		gData[gINew].push(false);
	}
	gData[gIOld].push(false);
	gData[gINew].push(false);
}

function conclusion_18_1() {
	init();
	var answer = 0; 
	var k;
	
	for (k = 1 ; k <= rawData.length ; k++) {
		if (!gData[gIOld][k]) {
			answer++;
		}
	}
	var l, m, r;
	for (var i = 0 ; i < gNumberGen-1 ; i++) {
		for (k = 1 ; k <= rawData.length ; k++) {
			l = gData[gIOld][k-1];
			r = gData[gIOld][k+1];
			gData[gINew][k] = (r^l)==1;
			if (!gData[gINew][k]) {
				answer++;
			}
		}	
		gIOld = 1-gIOld;
		gINew = 1-gINew;		
	}
	return answer; // 1990 too high :(
}

function conclusion_18_2() {
	init();
//	gNumberGen = 400000;
	gNumberGen = 40000000;
	var answer = 0; 
	var k;
	for (k = 1 ; k <= rawData.length ; k++) {
		if (!gData[gIOld][k]) {
			answer++;
		}
	}
	var k;
	var l, m, r;
	var i = 1;
	var couple = {first : 300, period : -1}
	var state = {data : null, value : 0};
	var nbTries = 300;
	while (i < gNumberGen) {
		for (k = 1 ; k <= rawData.length ; k++) {
			l = gData[gIOld][k-1];
			r = gData[gIOld][k+1];
			gData[gINew][k] = (r^l)==1;
			if (!gData[gINew][k]) {
				answer++;
			}
		}
		gIOld = 1-gIOld;
		gINew = 1-gINew;

		// Now, we try the fast forward :)
		
/*	
		flash = fff.attempt(i, gData[gIOld]);
		if (flash != null) {
			i = flash.stepsAfter;
			answer += flash.nbLoopsSkipped * (answer-flash.savedState.score);
		}*/
		
		if (couple.period == -1) {
			if (i == (couple.first + nbTries)) {
				couple.first = i;
				nbTries *= 2; 
			}
			if (i == couple.first) {
				state.data = gData[gIOld].slice();
				state.value = answer;
			} else if (i > couple.first) {
				for (k = 1 ; k <= rawData.length ; k++) {
					if (state.data[k] != gData[gIOld][k]) {
						break;
					}
				}
				if (k == rawData.length) {					
					// Fast forward !
					couple.period = i-couple.first;
					var valueToIncrease = answer + state.value;
					while (i < gNumberGen-couple.period) {
						i+= couple.period;
						answer += valueToIncrease;
					}
				}
			}
		}
		i++;
	}
	return answer; 
} // Good answer 20003246, but no period was detected...


// TODO : too lazy to finish it ; it's not practical because someday the problem will be "How many steps do we need to reach a score of at least X" rather than the classic "what is the score after X steps ?"

// In problems where we must repeat an operation a huge number of times and some element has a state in loop, we try to find that loop.
// p_limit : total number of iterations 
// p_firstStepTry : first step when we think we are in the period
// p_nbStepsTry : maximal supposed length of the period
// p_copyStateFunction(p_state) : to memorize the state after one step
// p_equalityFunction(p_state) : to test if the provided state is equal to the one saved. If yes : we found the period ! 
function FastForwardFinder(p_limit, p_firstStepTry, p_nbStepsTry, p_copyStateFunction, p_equalityFunction) {
	this.period = -1;
	this.limit = p_limit;
	this.firstStepPeriod = p_firstStepTry;
	this.nbStepsTry = p_nbStepsTry; 
	this.copyStateFunction = p_copyStateFunction;
	this.equalityFunction = p_equalityFunction;
	this.savedState = null;
}

FastForwardFinder.prototype.attempt = function(p_step, p_state) {
	if (this.period == -1 && this.p_step >= this.firstStepPeriod) {
		if (p_step == this.firstStepPeriod + this.nbStepsTry) { // Retry loop !
			this.firstStepPeriod = p_step;
			this.nbStepsTry *= 2;
		}
		if (p_step == this.firstStepPeriod) {
			this.savedState = this.copyStateFunction(p_state);
		} else if (this.equalityFunction(this.savedState, p_state)) { // Found a loop !
			this.period = p_step-this.savedState;
			var stepsAfter = p_step;
			var numberLoopsSkipped = 0;
			var speedBoost = 256;
			while (speedBoost >= 1) { // Fast forward !			 	
				while (stepsAfter < this.limit-this.period*speedBoost) {
					stepsAfter += this.period*speedBoost;
					numberLoopsSkipped += speedBoost;
				}
				speedBoost /= 2;
			}
			return {stepsAfter : stepsAfter, numberLoopsSkipped : numberLoopsSkipped, savedState : this.savedState};			
		} 
	}
	return null;
}

