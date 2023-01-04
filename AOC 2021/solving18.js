var rawDataExample = [
"[[[0,[4,5]],[0,0]],[[[4,5],[2,6]],[9,5]]]",
"[7,[[[3,7],[4,3]],[[6,3],[8,8]]]]",
"[[2,[[0,8],[3,4]]],[[[6,7],1],[7,[1,6]]]]",
"[[[[2,4],7],[6,[0,5]]],[[[6,8],[2,8]],[[2,1],[4,5]]]]",
"[7,[5,[[3,8],[1,4]]]]",
"[[2,[2,2]],[8,[8,1]]]",
"[2,9]",
"[1,[[[9,3],9],[[9,0],[0,7]]]]",
"[[[5,[7,4]],7],1]",
"[[[[4,2],2],6],[8,7]]"
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
		return split(p_SFNumber.left) | split(p_SFNumber.right); // | and not || because we need to do both;
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
		return "[" + toString(p_SFNumber.left) + "," + toString(p_SFNumber.right) + "]";
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
		console.log(toString(answer));
	}
	return answer;
}

function conclusion_18_1() {
	console.log(toString(addList(rawDataExample)));
	console.log("---");
	console.log(toString(addList(rawData123)));

	
	
	/* Expected for rawDataExample :
	[[[[4,0],[5,4]],[[7,7],[6,0]]],[[8,[7,7]],[[7,9],[5,0]]]]
	[[[[6,7],[6,7]],[[7,7],[0,7]]],[[[8,7],[7,7]],[[8,8],[8,0]]]]
	[[[[7,0],[7,7]],[[7,7],[7,8]]],[[[7,7],[8,8]],[[7,7],[8,7]]]]
	...
	[[[[8,7],[7,7]],[[8,6],[7,7]]],[[[0,7],[6,6]],[8,7]]]
	*/
}

function addStrings(p_stringA, p_stringB) {
	console.log(toString(add(stringToSFNumber(p_stringA), stringToSFNumber(p_stringB))));
}

function simplifyString(p_string) {
	var numb = stringToSFNumber(p_string);
	simplify(numb);
	console.log(toString(numb));
}