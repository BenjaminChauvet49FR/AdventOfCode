const rawDataOfficial=`move position 2 to position 1
move position 2 to position 5
move position 2 to position 4
swap position 0 with position 2
move position 6 to position 5
swap position 0 with position 4
reverse positions 1 through 6
move position 7 to position 2
rotate right 4 steps
rotate left 6 steps
rotate based on position of letter a
rotate based on position of letter c
move position 2 to position 0
swap letter d with letter a
swap letter g with letter a
rotate left 6 steps
reverse positions 4 through 7
swap position 6 with position 5
swap letter b with letter a
rotate based on position of letter d
rotate right 6 steps
move position 3 to position 1
swap letter g with letter a
swap position 3 with position 6
rotate left 7 steps
swap letter b with letter c
swap position 3 with position 7
move position 2 to position 6
swap letter b with letter a
rotate based on position of letter d
swap letter f with letter b
move position 3 to position 4
rotate left 3 steps
rotate left 6 steps
rotate based on position of letter c
move position 1 to position 3
swap letter e with letter a
swap letter a with letter c
rotate left 2 steps
move position 6 to position 5
swap letter a with letter g
rotate left 5 steps
reverse positions 3 through 6
move position 7 to position 2
swap position 6 with position 5
swap letter e with letter c
reverse positions 2 through 7
rotate based on position of letter e
swap position 3 with position 5
swap letter e with letter d
rotate left 3 steps
rotate based on position of letter c
move position 4 to position 7
rotate based on position of letter e
reverse positions 3 through 5
rotate based on position of letter h
swap position 3 with position 0
swap position 3 with position 4
move position 7 to position 4
rotate based on position of letter a
reverse positions 6 through 7
rotate based on position of letter g
swap letter d with letter h
reverse positions 0 through 3
rotate right 2 steps
rotate right 6 steps
swap letter a with letter g
reverse positions 2 through 4
rotate based on position of letter e
move position 6 to position 0
reverse positions 0 through 6
move position 5 to position 1
swap position 5 with position 2
rotate right 3 steps
move position 3 to position 1
rotate left 1 step
reverse positions 1 through 3
rotate left 4 steps
reverse positions 5 through 6
rotate right 7 steps
reverse positions 0 through 2
move position 0 to position 2
swap letter b with letter c
rotate based on position of letter d
rotate left 1 step
swap position 2 with position 1
swap position 6 with position 5
swap position 5 with position 0
swap letter a with letter c
move position 7 to position 3
move position 6 to position 7
rotate based on position of letter h
move position 3 to position 0
move position 4 to position 5
rotate left 4 steps
swap letter h with letter c
swap letter f with letter e
swap position 1 with position 3
swap letter e with letter b
rotate based on position of letter e`.split("\n");


const rawDataExample = `swap position 4 with position 0
swap letter d with letter b
reverse positions 0 through 4
rotate left 1 step
move position 1 to position 4
move position 3 to position 0
rotate based on position of letter b
rotate based on position of letter d`.split("\n");

const rawData = rawDataOfficial;

function conclusion_21_aux(p_password) {
	//var answer = ['a','b','c','d','e'];
	answer = p_password.slice();
	var answerCopy;
	var n1, n2, m1, m2, c1, c2, temp, tokens;
	rawData.forEach(str => {
		tokens = str.split(" ");
		if (str.startsWith("swap position")) {
			n1 = parseInt(tokens[2],10);
			n2 = parseInt(tokens[5],10);
			temp = answer[n1];
			answer[n1] = answer[n2];
			answer[n2] = temp;
		} else if (str.startsWith("swap letter")) {
			for (var i = 0 ; i < answer.length ; i++) {
				if (tokens[2] == answer[i]) {n1 = i;}
				if (tokens[5] == answer[i]) {n2 = i;}
			}
			temp = answer[n1];
			answer[n1] = answer[n2];
			answer[n2] = temp;
		} else if (str.startsWith("move")) {
			n1 = parseInt(tokens[2],10);
			n2 = parseInt(tokens[5],10);
			// Move char from index n1 to index n2 : case n1 > n2 : 01234567 becomes 05123467. Case n1 < n2 : 01234567 becomes 02345167
			answerCopy = answer.slice();
			if (n1 > n2) {
				for (var i = n2+1 ; i <= n1 ; i++) {
					answer[i] = answerCopy[i-1];
				}
				answer[n2] = answerCopy[n1];
			} else {
				for (var i = n1 ; i <= n2-1 ; i++) {
					answer[i] = answerCopy[i+1];
				}
				answer[n2] = answerCopy[n1];
			}
		} else if (str.startsWith("reverse")) {
			n1 = parseInt(tokens[2],10);
			n2 = parseInt(tokens[4],10);
			m1 = Math.min(n1, n2);
			m2 = Math.max(n1, n2);
			while (m1 < m2) {
				temp = answer[m1];
				answer[m1] = answer[m2];
				answer[m2] = temp;
				m1++;
				m2--;
			}
		} else if (tokens[1] == "based") {
			c1 = tokens[6];
			for (n1 = 0 ; answer[n1] != c1 ; n1++) {}
			n2 = (n1 + 1 + (n1 >= 4 ? 1 : 0));
			// Rotate to the right n2 times (character in pos i ends in position i2;
			answerCopy = answer.slice();
			for (var i = 0 ; i < answer.length ; i++) {
				answer[(i+n2) % answer.length] = answerCopy[i];
			}
		} else { // Classic rotation
			n2 = parseInt(tokens[2], 10);
			if (tokens[1] == "left") {
				n2 = answer.length-n2;
			}
			answerCopy = answer.slice();
			for (var i = 0 ; i < answer.length ; i++) {
				answer[(i+n2) % answer.length] = answerCopy[i];
			}
		}
	});
	var realAnswer = "";
	for (var i = 0 ; i < answer.length ; i++) {
		realAnswer += answer[i];
	}
	return realAnswer;
}

function conclusion_21_1() {
	return conclusion_21_aux(['a','b','c','d','e','f','g','h']);
}

function conclusion_21_2() {
	var allPer = generateAllPermutations(8);
	var original = ['f','b','g','d','c','e','a','h'], i, k;
	var answer = ['a','b','c','d','e','f','g','h'], i, k;
	for (i = 0 ; i < allPer.length ; i++) {
		for (k = 0 ; k < 8 ; k++) {
			answer[k] = original[allPer[i][k]];	
		}
		if (testEqualityArray(original, conclusion_21_aux(answer))) {
			var realAnswer = "";
			for (var i = 0 ; i < answer.length ; i++) {
				realAnswer += answer[i];
			}
			return realAnswer;
		}
	}
}