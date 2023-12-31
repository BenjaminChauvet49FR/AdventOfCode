function logArrayChars(p_arrayChars) {
	var string = "";
	var i, j;
	for (i = 0 ; i < p_arrayChars.length ; i++) {
		string = "";
		for (j = 0 ; j < p_arrayChars[0].length ; j++) {
			string+=p_arrayChars[i][j];
		}
		console.log(string);
	}
}

function logArrayCharsWithAlign(p_arrayChars) {
	var string = "";
	var i, j;
	for (i = 0 ; i < p_arrayChars.length ; i++) {
		string = numberStringAlign(i, p_arrayChars.length-1) + " ";
		for (j = 0 ; j < p_arrayChars[0].length ; j++) {
			string+=p_arrayChars[i][j];
		}
		console.log(string);
	}
}

// Log ranges by pairs (assume there are an even number)... [3, 2, 8, 10] => "3-2  8-10"
function rangesString(p_array) {
	var answer = "";
	for (var i = 0 ; i < p_array.length ; i+=2) {
		answer += p_array[i] + "-" + p_array[i+1] + "  "
	}
	return answer;
}

// Give numbers an unique alignment so they are visible.
function numberStringAlign(p_value, p_max) {
	var expectedDigits = p_max == 0 ? 1 : 1+Math.floor(Math.log10(p_max));
	var meaningDigits = p_value == 0 ? 1 : 1+Math.floor(Math.log10(p_value));
	var answer = "";
	for (var i = meaningDigits ; i < expectedDigits ; i++) {
		answer += "0";
	}
	return answer + p_value;
}

function log3DMethod(p_method, p_xMin, p_xMax, p_yMin, p_yMax, p_zMin, p_zMax, p_separator, p_true, p_false) {
	var h, x, y;
	var hMin = p_zMax
	var hMax = p_zMin
	var yMin = p_yMax
	var yMax = p_yMin
	var xMin = p_xMax
	var xMax = p_xMin
	for (h = p_zMin ; h <= p_zMax ; h++) {
		for (x = p_xMin ; x <= p_xMax ; x++) {
			for (y = p_yMin ; y <= p_yMax ; y++) {
				if (p_method(x, y, h)) {
					xMin = Math.min(x, xMin);
					xMax = Math.max(x, xMax);
					yMin = Math.min(y, yMin);
					yMax = Math.max(y, yMax);
					hMin = Math.min(h, hMin);
					hMax = Math.max(h, hMax);
				}
			}
		}
	}
	var string;
	for (h = hMin ; h <= hMax ; h++) {
		for (y = yMin ; y <= yMax ; y++) {
			string = numberStringAlign(y, yMax) + " ";
			for (x = xMin ; x <= xMax ; x++) {
				string += (p_method(x, y, h) ? p_true : p_false);
			}
			console.log(string);
		}
		console.log("z=" + numberStringAlign(h, hMax));
		console.log(p_separator);
	}
	
}

// Logs a 3D array with true or false
function log3DArray(p_3DArray) {
	log3DMethod(
	function(x, y, z) {return p_3DArray[z][y][x]}, 
	0, p_3DArray[0][0].length-1, 0, p_3DArray[0].length-1, 0, p_3DArray.length-1,
	"----------", "#", "."
	);
}

function logAsciiArray(p_output) {
	var data = [[]]; 
	var str = "";
	for (var i = 0 ; i < p_output.length ; i++) {
		if (String.fromCharCode(p_output[i]) != "\n") {				
			str += String.fromCharCode(p_output[i]);
		} else {
			console.log(str);
			str = "";
		}
	}
}