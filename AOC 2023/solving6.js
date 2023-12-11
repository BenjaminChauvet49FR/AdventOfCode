const rawTimes = [40, 70, 98, 79];
const rawDistances = [215, 1051, 2147, 1005];

// In our example, record can always be beaten
function numberOfPossibilities(p_distance, p_time) {
	var i = 1;
	while (i*(p_time-i) <= p_distance) {
		i++;
	}
	// i = smallest value that allows to beat the game
	return (p_time-2*i+1);
}

function conclusion_6_1() {
	var answer = 1;
	for (var i = 0 ; i < rawTimes.length ; i++) {
		answer *= numberOfPossibilities(rawDistances[i], rawTimes[i]);
	}
	return answer;
}
// 27*27*31*48 = 1084752

function conclusion_6_2() {
	return numberOfPossibilities(215105121471005, 40709879);
}