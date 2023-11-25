const rawDataTextual = [
"Sugar: capacity 3, durability 0, flavor 0, texture -3, calories 2",
"Sprinkles: capacity -3, durability 3, flavor 0, texture 0, calories 9",
"Candy: capacity -1, durability 0, flavor 4, texture 0, calories 1",
"Chocolate: capacity 0, durability 0, flavor -2, texture 2, calories 8",
];

const rawData = [
3,  0,  0,  -3,  2,
-3,  3,  0,  0,  9,
-1,  0,  4,  0,  1,
0,  0,  -2,  2,  8,
];

// Constraint : A+B+C+D = 100
// Formula = (3A-3B-C)*3B*(C-4D)*(2D-3A)
// All four product terms (well, all three) must be > 0
// We need : 
/* D > 3A/2
A > B-C/3
C > 4D
=>
 (okay, I messed up but here's the idea)

Okay, let's go info !
First, let's move C freely ; D will be constrained, A will be constrained and B will ultimately be constrained.
*/

function conclusion_15_1() {
	var bests = [0, 0, 0, 0];
	var bestScore = 0;
	var score;
	var a, b, c, d;
	for (c = 0 ; c <= 100 ; c++) {
		for (d = 0 ; (4*c-2*d) > 0 && c+d <= 100 ; d++) {
			for (a = 0 ; (2*d-3*a) > 0 && a+c+d <= 100 ; a++) {
				b = 100-a-c-d;
				if (b > 0 && 3*a-3*b-c > 0) {
					score = 3*b * (3*a-3*b-c) * (4*c-2*d) * (2*d-3*a);
					if (score > bestScore) {
						bests = [a,b,c,d];
						bestScore = score;
					}
				}
			}
		}
	}
	return bestScore;
}

function conclusion_15_2() {
	var bests = [0, 0, 0, 0];
	var bestScore = 0;
	var score;
	var a, b, c, d;
	for (c = 0 ; c <= 100 ; c++) {
		for (d = 0 ; (4*c-2*d) > 0 && c+d <= 100 ; d++) {
			for (a = 0 ; (2*d-3*a) > 0 && a+c+d <= 100 ; a++) {
				b = 100-a-c-d;
				if (b > 0 && 3*a-3*b-c > 0 & 2*a+9*b+c+8*d == 500) {
					score = 3*b * (3*a-3*b-c) * (4*c-2*d) * (2*d-3*a);
					if (score > bestScore) {
						bests = [a,b,c,d];
						bestScore = score;
					}
				}
			}
		}
	}
	return bestScore;
}

