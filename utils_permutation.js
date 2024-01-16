// Item that tries to find a biejction S within [0, 1,... n-1]
// If array[x][y] is false, it means S(x) cannot be equal to y.

function PermutFinder(p_n) {
	this.number = p_n;
	this.arrayPossibles = generateDoubleEntryArray(p_n, p_n, true);
	this.arrayImage = generateArray(p_n, -1);
	this.arrayAntecedent = generateArray(p_n, -1);
	this.trueLeftInRow = generateArray(p_n, p_n);
	this.trueLeftInColumn = generateArray(p_n, p_n);
	this.notFoundImagesLeft = p_n;
	this.corrupted = false;
}

PermutFinder.prototype.ban = function(p_y, p_x) { // y = entry to permutate ; x = value after permutation
	if (this.arrayPossibles[p_y][p_x]) {
		this.arrayPossibles[p_y][p_x] = false;
		this.trueLeftInColumn[p_x]--;
		this.trueLeftInRow[p_y]--;
		if (this.trueLeftInColumn[p_x] == 0) {
			this.corrupted = true;
		} else if (this.trueLeftInColumn[p_x] == 1 && this.arrayAntecedent[p_x] == -1) {
			for (var y = 0 ; y < this.number ; y++) {
				if (this.arrayPossibles[y][p_x]) {
					this.arrayImage[y] = p_x;
					this.arrayAntecedent[p_x] = y;
					this.notFoundImagesLeft--;
					for (var x = 0 ; x < this.number ; x++) {
						if (x != p_x) {
							this.ban(y, x);
						}
					}
					break;
				}
			}
		}
		if (this.trueLeftInRow[p_y] == 0) {
			this.corrupted = true;
		} else if (this.trueLeftInRow[p_y] == 1 && this.arrayImage[p_y] == -1) {
			for (var x = 0 ; x < this.number ; x++) {
				if (this.arrayPossibles[p_y][x]) {
					this.arrayImage[p_y] = x;
					this.arrayAntecedent[x] = p_y;
					this.notFoundImagesLeft--;
					for (var y = 0 ; y < this.number ; y++) {
						if (y != p_y) {
							this.ban(y, x);
						}
					}
					break;
				}
			}
		}
	}
}
PermutFinder.prototype.success = function() {
	return this.notFoundImagesLeft == 0;
}

PermutFinder.prototype.failure = function() {
	return this.corrupted;
}

PermutFinder.prototype.getImage = function(p_x) {
	return this.arrayImage[p_x];
}

PermutFinder.prototype.getAntecedent = function(p_x) {
	return this.arrayAntecedent[p_x];
}
// Note : nothing to get the "back" yet.

/*Test !
X.XOXX
XOXXXX
XXO.XX
....O.
O...X.
X...XO (Os are to find)
var s = new PermutFinder(6);
s.ban(0,0);
s.ban(0,2);
s.ban(0,4);
s.ban(0,5);
s.ban(1,0);
s.ban(1,2);
s.ban(1,3);
s.ban(1,4);
s.ban(1,5);
s.ban(2,0);
s.ban(2,1);
s.ban(2,4);
s.ban(2,5);
s.ban(4,4);
s.ban(5,0);
s.ban(5,4);
s.arrayImage;
*/


// ---------------
// Now, it's about listing all permutations !

// Generate all permutations of [0, 1, ..., p_length-1]
function generateAllPermutations(p_length) {
	var taken = generateArray(p_length, false);
	var answer = [];
	generateAllPermutations_aux([], taken, answer, p_length);
	return answer;
}

function generateAllPermutations_aux(p_currentList, p_taken, p_accumulator, p_length) {
	if (p_currentList.length == p_length) {
		p_accumulator.push(p_currentList.slice());
	} else {
		for (var i = 0 ; i < p_length ; i++) {
			if (!p_taken[i]) {
				p_taken[i] = true;
				p_currentList.push(i);
				generateAllPermutations_aux(p_currentList, p_taken, p_accumulator, p_length);
				p_currentList.pop(i);
				p_taken[i] = false;
			}
		}
	}
}