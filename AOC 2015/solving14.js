const rawData = [
"Vixen can fly 8 km/s for 8 seconds, but then must rest for 53 seconds.    ",
"Blitzen can fly 13 km/s for 4 seconds, but then must rest for 49 seconds. ",
"Rudolph can fly 20 km/s for 7 seconds, but then must rest for 132 seconds.",
"Cupid can fly 12 km/s for 4 seconds, but then must rest for 43 seconds.   ",
"Donner can fly 9 km/s for 5 seconds, but then must rest for 38 seconds.   ",
"Dasher can fly 10 km/s for 4 seconds, but then must rest for 37 seconds.  ",
"Comet can fly 3 km/s for 37 seconds, but then must rest for 76 seconds.   ",
"Prancer can fly 9 km/s for 12 seconds, but then must rest for 97 seconds. ",
"Dancer can fly 37 km/s for 1 seconds, but then must rest for 36 seconds.  "
];

function conclusion_14_1() {
	var answer = 0;
	var str, tokens, flyTime, restTime, speed, distance, nbFullCycles, remain;
	const TIME = 2503;
	for (var i = 0 ; i < rawData.length; i++) {
		str = rawData[i];
		tokens = str.split(" ");
		speed = parseInt(tokens[3], 10);
		flyTime = parseInt(tokens[6], 10);
		restTime = parseInt(tokens[13], 10);
		nbFullCycles = Math.floor(TIME/(flyTime+restTime));
		remain = TIME-nbFullCycles*(flyTime+restTime);
		distance = flyTime*nbFullCycles;
		if (remain <= flyTime) {
			distance += remain;
		} else {
			distance += flyTime;
		}
		distance *= speed;
		answer = Math.max(distance, answer);
	}
	return answer;
}


function conclusion_14_2() {
	var answer = 0;
	var tokens;
	const TIME = 2503;
	var speeds = [];
	var flyTimes = [];
	var restTimes = [];
	for (var i = 0 ; i < rawData.length; i++) {
		str = rawData[i];
		tokens = str.split(" ");
		speeds.push(parseInt(tokens[3], 10));
		flyTimes.push(parseInt(tokens[6], 10));
		restTimes.push(parseInt(tokens[13], 10));
	}
	var scores = generateArray(rawData.length, 0);
	var distances = generateArray(rawData.length, 0);
	var bestRunners = [];
	var bestDistance;
	for (var t = 0 ; t < TIME ; t++) {		
		bestRunners = [];
		bestDistance = 0;
		for (var i = 0 ; i < rawData.length ; i++) {
			if (t % (flyTimes[i]+restTimes[i]) < flyTimes[i]) {
				distances[i] += speeds[i];
			}
			if (distances[i] > bestDistance) {
				bestDistance = distances[i];
				bestRunners = [i];
			} else if (distances[i] == bestDistance) {
				bestRunners.push(i);
			}
		}
		bestRunners.forEach(run => {
			scores[run]++;
		});
	}
	var answer = 0;
	for (var i = 0 ; i < scores.length ; i++) {
		answer = Math.max(scores[i], answer);
	}
	return answer;
}