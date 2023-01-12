var rawDataOfficial = [
"[[[[0,6],[8,7]],[2,3]],[3,[[6,5],[0,0]]]]",   
"[[2,[9,[4,9]]],[[[3,0],4],[2,[4,7]]]]",   
"[[[4,[5,2]],[1,[9,7]]],[[2,4],[[4,5],4]]]",   
"[[[[6,7],8],[[6,6],3]],[6,[7,[4,9]]]]",   
"[[[[5,4],[7,4]],[8,[2,3]]],[[[9,7],6],[2,[4,7]]]]",   
"[[[[2,4],[0,9]],6],[[[7,3],[5,9]],[0,[2,3]]]]",   
"[[6,[9,[2,4]]],[[3,0],[1,[0,0]]]]",   
"[[3,7],[3,[2,0]]]",   
"[[0,[2,[4,6]]],[8,9]]",   
"[[[7,5],[[3,8],5]],[[[9,8],[4,3]],[5,[1,4]]]]",   
"[[9,[[4,7],[7,1]]],[[7,[8,7]],[4,[2,6]]]]",   
"[[[0,4],9],[[[5,1],[3,2]],4]]",   
"[[[5,9],2],[8,[3,[2,4]]]]",   
"[[[[2,2],[9,2]],[0,7]],[[[3,7],3],0]]",   
"[5,[[9,1],[[6,6],9]]]",   
"[[5,[1,[1,7]]],[[[2,2],[5,2]],[2,0]]]",   
"[[[[2,0],5],[[6,1],[3,1]]],7]",   
"[4,[2,[3,3]]]",   
"[[[[8,3],[3,2]],[[4,0],3]],[[[2,5],9],4]]",   
"[[[6,4],[[0,8],[4,9]]],[[[7,9],7],[[5,5],[7,8]]]]",   
"[3,7]",   
"[[1,5],[[[3,7],[7,1]],[[7,4],[9,3]]]]",   
"[[3,[0,[4,4]]],[[3,4],[[3,1],0]]]",   
"[[1,[[1,1],[5,1]]],[[[8,0],5],7]]",   
"[[[[9,2],0],2],[8,5]]",   
"[4,[[0,[0,9]],[2,2]]]",   
"[[[4,[2,0]],[[5,5],[8,2]]],[[[5,1],[7,7]],[0,9]]]",   
"[[5,[[0,1],[5,9]]],[3,[8,[8,4]]]]",   
"[[1,9],[[3,[1,0]],[4,3]]]",   
"[[[1,6],[2,8]],[8,[9,3]]]",   
"[[[3,4],0],[4,[8,[5,8]]]]",   
"[[8,[9,0]],[[[6,4],[5,5]],[8,3]]]",   
"[[[[9,1],[3,9]],[1,[8,0]]],[[8,[8,5]],[[2,2],0]]]",   
"[1,[6,[6,7]]]",   
"[[[5,[5,8]],[[0,8],7]],[[7,6],[[7,6],[3,8]]]]",   
"[[8,[1,[8,6]]],[[8,4],[[3,3],1]]]",   
"[7,[9,[5,7]]]",   
"[[[8,9],[9,6]],[[[6,7],[7,4]],[2,[2,6]]]]",   
"[[[2,0],4],[1,[6,[6,0]]]]",   
"[[8,[8,[6,1]]],[[6,1],[[6,5],[2,3]]]]",   
"[4,[2,[[9,6],[3,5]]]]",   
"[6,[[3,7],[6,9]]]",   
"[[[[8,6],9],4],[8,[5,0]]]",   
"[[[[6,6],3],[7,[3,9]]],1]",   
"[[1,[7,5]],[[6,1],[0,[9,3]]]]",   
"[[[3,[6,0]],[2,5]],[[4,3],0]]",   
"[[[[9,2],7],[[3,7],6]],[[1,[9,1]],[[7,1],[7,7]]]]",   
"[[[[0,7],4],2],[5,[[2,1],3]]]",   
"[[[1,2],[[6,4],[8,6]]],[[[7,3],7],[[6,1],[2,1]]]]",   
"[[[[7,6],8],5],[[3,3],[[7,3],9]]]",   
"[[5,[[6,8],0]],[[6,[7,1]],2]]",   
"[[[4,8],[[8,2],[6,5]]],[5,[5,[8,7]]]]",   
"[[6,[[4,8],[5,4]]],[[[1,7],6],[6,9]]]",   
"[8,[8,[3,1]]]",   
"[[8,3],[1,[5,[0,9]]]]",   
"[[2,[[8,3],[5,1]]],[[2,[6,1]],[[4,0],[9,3]]]]",   
"[5,3]",   
"[[[5,3],[[1,2],[4,6]]],[[7,6],[[0,3],0]]]",   
"[[[6,5],8],[2,[8,3]]]",   
"[[[8,6],[0,5]],[[2,4],5]]",   
"[[[1,[4,1]],[[9,4],1]],1]",   
"[[[8,6],[[1,4],[9,3]]],[4,[[4,4],1]]]",   
"[[[2,[4,2]],[1,0]],3]",   
"[[0,2],[7,[7,[8,5]]]]",   
"[[[9,[9,5]],[0,[4,8]]],[[6,[6,7]],[[3,3],1]]]",   
"[1,[[[3,7],[3,2]],3]]",   
"[[0,[[1,6],4]],[[[2,2],[5,9]],2]]",   
"[[5,8],[0,9]]",   
"[[[[9,4],[8,8]],[[7,3],[8,1]]],[1,[7,[7,6]]]]",   
"[[[[7,6],[4,2]],7],[3,[[7,5],[0,9]]]]",   
"[[[5,6],[6,2]],[[8,6],[9,6]]]",   
"[[4,7],[6,9]]",   
"[6,[[0,[7,7]],[1,4]]]",   
"[[[[2,7],2],4],[[[1,8],[0,3]],3]]",   
"[[7,[[1,8],[0,1]]],[[3,0],[[5,0],9]]]",   
"[[[[1,8],[0,3]],2],[[9,5],1]]",   
"[[[[1,2],3],6],[3,[[8,3],[8,8]]]]",   
"[9,[[4,0],2]]",   
"[[[[8,5],6],9],[7,[9,[3,4]]]]",   
"[[[[5,8],[8,5]],0],6]",   
"[[[[0,8],[9,3]],3],[[[6,4],9],[[6,8],5]]]",   
"[[[[2,9],2],0],[[[9,0],[0,7]],[[6,3],[9,8]]]]",   
"[[[0,[0,5]],1],6]",   
"[[[1,[0,5]],9],[[[6,8],[7,4]],[1,[1,1]]]]",   
"[[[6,1],[8,6]],[[1,[0,8]],[[6,7],[1,8]]]]",   
"[[5,[[9,9],6]],[[0,7],[[8,2],[4,5]]]]",   
"[[5,4],[5,[[0,7],[5,7]]]]",   
"[[5,[4,8]],[[5,[0,7]],[8,6]]]",   
"[[[[9,5],2],[3,[9,6]]],[[6,8],[3,8]]]",   
"[[[[1,4],[2,9]],[2,4]],[[1,3],[[0,4],[9,9]]]]",   
"[[0,4],[[7,[1,4]],2]]",   
"[[6,4],[[[2,7],9],2]]",   
"[[[[9,6],6],[[4,7],[3,7]]],[[[4,8],4],[[5,2],[4,8]]]]",   
"[[[[8,8],0],[6,7]],[3,[0,[7,1]]]]",   
"[[[0,[0,3]],7],[[2,0],[6,[4,5]]]]",   
"[[[[0,4],5],[4,[2,6]]],[[9,9],7]]",   
"[1,[8,8]]",   
"[[[4,2],[2,[6,6]]],7]",   
"[7,[3,[4,[2,3]]]]",   
"[0,9]											"
];

var rawDataExample = [
"[[[0,[5,8]],[[1,7],[9,6]]],[[4,[1,2]],[[1,4],2]]]",
"[[[5,[2,8]],4],[5,[[9,9],0]]]",
"[6,[[[6,2],[5,6]],[[7,6],[4,7]]]]",
"[[[6,[0,7]],[0,9]],[4,[9,[9,0]]]]",
"[[[7,[6,4]],[3,[1,3]]],[[[5,5],1],9]]",
"[[6,[[7,3],[3,2]]],[[[3,8],[5,7]],4]]",
"[[[[5,4],[7,7]],8],[[8,3],8]]",
"[[9,3],[[9,9],[6,[4,9]]]]",
"[[2,[[7,7],7]],[[5,8],[[9,3],[0,2]]]]",
"[[[[5,2],5],[8,[3,7]]],[[5,[7,5]],[4,4]]]"
];

var rawData123 = [
"[1,1]",
"[2,2]",
"[3,3]",
"[4,4]",
"[5,5]",
"[6,6]"
];

function stringToSFNumber(p_string) {
	return stringToSFNumber_aux(p_string, 0);
}


function stringToSFNumber_aux(p_string, p_iChar) {
	var iChar = 0;
	var c;
	var tree = {};
	while(true) {
		c = p_string[p_iChar];
		switch(c) {
			case '[' : 
				var answerLeft = stringToSFNumber_aux(p_string, p_iChar+1);
				var answerRight = stringToSFNumber_aux(p_string, answerLeft.finalPos+2); // Skip ',' to jump from left to right
				return {left : answerLeft, right : answerRight, finalPos : answerRight.finalPos+1}; // Final char is the ']' 
			break;
			default :
				return {value : parseInt(c), finalPos : p_iChar};
			return;
		}
		iChar++;
	}
}

function explode(p_SFNumber) {
	explode_aux(p_SFNumber, 0);
}

function explode_aux(p_SFNumber, p_depth) {
	if (p_depth == 4 && hasLeftPart(p_SFNumber)) {
		const vLeft = p_SFNumber.left.value;
		const vRight = p_SFNumber.right.value;
		p_SFNumber.left = null;
		p_SFNumber.right = null;
		p_SFNumber.value = 0;
		return {leftSalvage : vLeft, rightSalvage : vRight};		
	} else if (hasLeftPart(p_SFNumber)) {
		/*const leftPart = explode_aux(p_SFNumber.left, p_depth+1);
		const rightPart = explode_aux(p_SFNumber.right, p_depth+1);
		const vLeftLeft = leftPart.leftSalvage;
		const vRightRight = rightPart.rightSalvage;
		const vLeftRight = leftPart.rightSalvage;
		const vRightLeft = rightPart.leftSalvage;
		if (vRightLeft !== null) {			
			addUp(p_SFNumber.left, vRightLeft, true);
		}
		if (vLeftRight != null) {			
			addUp(p_SFNumber.right, vLeftRight, false);
		}
		return {leftSalvage : vLeftLeft, rightSalvage : vRightRight};
		*/
		const leftPart = explode_aux(p_SFNumber.left, p_depth+1);
		const vLeftLeft = leftPart.leftSalvage;
		const vLeftRight = leftPart.rightSalvage;
		if (vLeftRight != null) {			
			addUp(p_SFNumber.right, vLeftRight, false);
		}
		const rightPart = explode_aux(p_SFNumber.right, p_depth+1);
		const vRightLeft = rightPart.leftSalvage;
		const vRightRight = rightPart.rightSalvage;
		if (vRightLeft !== null) {			
			addUp(p_SFNumber.left, vRightLeft, true);
		}
		return {leftSalvage : vLeftLeft, rightSalvage : vRightRight};
	} else {
		return {leftSalvage : null, rightSalvage : null};
	}
}

function hasLeftPart(p_SFNumber) {
	return (p_SFNumber.left && p_SFNumber.left != null);
}

function hasValue(p_SFNumber) {
	return (p_SFNumber.value || p_SFNumber.value == 0);
}

function addUp(p_SFNumber, p_value, p_leanToRight) {
	if (hasValue(p_SFNumber)) {
		p_SFNumber.value += p_value;
	} else if (p_leanToRight) {
		addUp(p_SFNumber.right, p_value, true);
	} else {
		addUp(p_SFNumber.left, p_value, false);		
	}
}

var numb = stringToSFNumber("[[[[[9,8],1],2],3],4]");
explode(numb);
var number = stringToSFNumber("[[3,[2,[1,[7,3]]]],[6,[5,[4,[3,2]]]]]");
explode(number);


function split(p_SFNumber) {
	if (hasLeftPart(p_SFNumber)) {
		return split(p_SFNumber.left) || split(p_SFNumber.right); // | and not || because we need to do both; // NOPE actually !"For example, if split produces a pair that meets the explode criteria, that pair explodes before other splits occur."
	} else {
		if (p_SFNumber.value >= 10) {
			p_SFNumber.left = {value : Math.floor(p_SFNumber.value/2)};
			p_SFNumber.right = {value : Math.ceil(p_SFNumber.value/2)};
			p_SFNumber.value = null;
			return true;
		} else {
			return false;
		}
	}
}

function simplify(p_SFNumber) {
	var toSimplify = false;
	do {
		explode(p_SFNumber);
		toSimplify = split(p_SFNumber);
	} while (toSimplify);
}

function toString(p_SFNumber) {
	if (hasLeftPart(p_SFNumber)) {
		return"[" + toString(p_SFNumber.left) +"," + toString(p_SFNumber.right) +"]";
	} else {
		return p_SFNumber.value;
	}
}

var number3 = stringToSFNumber("[[[[[4,3],4],4],[7,[[8,4],9]]],[1,1]]");
simplify(number3);

function add(p_leftSFNumber, p_rightSFNumber) {
	var answer = {
		left : p_leftSFNumber,
		right : p_rightSFNumber
	}
	simplify(answer);
	return answer;
}

function addList(p_listStrings) {
	var number = stringToSFNumber(p_listStrings[0]);
	simplify(number);
	var answer = number;
	for (var i = 1 ; i < p_listStrings.length ; i++) {
		answer = add(answer ,stringToSFNumber(p_listStrings[i]));
		//console.log(toString(answer));
	}
	return answer;
}

function conclusion_18_1() {
	var answer = addList(rawDataOfficial);
	console.log(toString(answer));
	console.log(magnitude(answer)); // Correct answer = 2541
}

function magnitude(p_number) {
	if (hasValue(p_number)) {
		return p_number.value;
	} else {
		return 3*magnitude(p_number.left)+2*magnitude(p_number.right);
	}
}

function addStrings(p_stringA, p_stringB) {
	console.log(toString(add(stringToSFNumber(p_stringA), stringToSFNumber(p_stringB))));
}

function simplifyString(p_string) {
	var numb = stringToSFNumber(p_string);
	simplify(numb);
	console.log(toString(numb));
}


// ----------

function copyNumber(p_number) {
	if (hasValue(p_number)) {
		return {
			left : null,
			right : null,
			value : p_number.value
		} 
	} else {
		return {
			left : copyNumber(p_number.left),
			right : copyNumber(p_number.right),
		}
	}
}

function conclusion_18_2() {
	var numbers = [];
	rawDataOfficial.forEach(string  => { 
		numbers.push(stringToSFNumber(string));
	});
	var i, j, theMax;
	theMax = 0;
	for (i = 0 ; i < numbers.length ; i++) {
		for (j = 0 ; j < numbers.length ; j++) {
			if (i != j) {				
				theMax = Math.max(theMax, magnitude(add(copyNumber(numbers[i]), copyNumber(numbers[j]))));
			}
		} // I need to copy numbers because the 1st number in the list is altered... oopsie !
	}
	
	for (i = 0 ; i < numbers.length ; i++) {
		console.log("After :" + i +" -> " + toString(numbers[i]));
	}
	return theMax;
}

