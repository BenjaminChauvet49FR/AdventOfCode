const rawDataOfficial = "59709275180991144553584971145772909665510077889137728108418335914621187722143499835763391833539113913245874471724316543318206687063884235599476032241946131415288903315838365933464260961288979081653450180693829228376307468452214424448363604272171578101049695177870848804768766855959460302410160410252817677019061157656381257631671141130695064999297225192441065878259341014746742840736304437968599872885714729499069286593698777113907879332554209736653679474028316464493192062972874319626623316763537266681767610340623614648701699868901159785995894014509520642548386447251984766543776759949169049134947575625384064448900019906754502662096668908517457172";
const rawDataExample = "12345678";
var rawData = rawDataOfficial;

var gData, gIOld, gINew;
const pattern = [0, 1, 0, -1];

function init() {
	gLength = rawData.length;
	gData = [generateArrangedArray(rawData.length, function(x) {return digit(rawData[x])} ), 
			 generateArray(rawData.length, 0) ];
	gIOld = 0;
	gINew = 1;
}

function conclusion_16_1() {
	init();
	for (var i = 0 ; i < 100 ; i++) {
		mix();
	}
	var answer = "";
	for (var i = 0 ; i < 8 ; i++) {
		answer += gData[gIOld][i];
	}
	return answer;
} //15841929

function mix() {
	var count, k;
	for (var i = 0 ; i < gLength ; i++) {
		count = 0;
		for (var j = 0 ; j < gLength ; j++) {
			k = (Math.floor((j+1)/(i+1)) % 4);
			count += pattern[k] * gData[gIOld][j];
		}
		if (count >= 0) {			
			gData[gINew][i] = count%10;
		} else {
			gData[gINew][i] = (-count)%10;
		}
	}
	gINew = 1-gINew;
	gIOld = 1-gIOld;
}

// ------------------------
// Try a direct approach

var gLength;

function initP2() {
	gLength = rawData.length*10000
	gData = [generateArrangedArray(gLength, function(x) {return digit(rawData[x%rawData.length])} ), 
			 generateArray(gLength, 0) ];
	gIOld = 0;
	gINew = 1;
}

function getPattern(p_base, p_index) {
	return pattern[Math.floor((p_index+1)/p_base) % 4];
}

function mixP2() {
	var count;
	var iChange, iChangeBegin, iChangeEnd, iNb; // See details below
	var total = 0;
	var base;
	for (var iCal = gLength-1 ; iCal >= 0 ; iCal--) {
		// iChange will take all values where the pattern changes between iCal and iCal+1 (assuming the pattern of "iCal" is full of 0)
		// See details below for how it is calculated for each iCal
		iChange = 0;
		base = iCal+1;
		nb = 1;
		//console.log(" iCal = " + iCal);
		while (iChange < gLength) {			
			iChangeBegin = Math.max(iChange, base*nb-1);
			iChangeEnd = Math.min(gLength-1, base*nb + nb-2);
			for (iChange = iChangeBegin ; iChange <= iChangeEnd ; iChange++) {
				total += gData[gIOld][iChange] * (getPattern(base, iChange) - getPattern(base+1, iChange));
				if (iCal == 0) {					
					//console.log("Change : " + getPattern(base, iChange) + " VS " + getPattern(base+1, iChange) + " (index " + iChange + ")");
				}
			} // by this point, iChange == iChangeEnd+1 
			nb++;
		}
		var digit;
		// Yeah, total isn't the "digit" we are supposed to put but just a convenient variable to avoid recalculing.
		if (total >= 0) {			
			digit = total%10; // And not (total = total % 10)
		} else {
			digit = (-total)%10;
		}
		gData[gINew][iCal] = digit;
	}
	gINew = 1-gINew;
	gIOld = 1-gIOld;
}

/* Let's assume pattern is 100.
Row 99 (base 100), line is 00...01 : (carried by 0-98, 99-99(198)) : change is at index 99 (the fake row 100 has a pattern full of 0s)
Row 98 (base 99), line is carried by 0-97, 98-99(196) : change is at index 98
...
Row 51 (base 52), line is carried by 0-50, 51-99(102) : change is at index 51
Row 50 (base 51), line is carried by 0-49, 50-99(100) : change is at index 50
Row 49 (base 50), line is carried by 0-48, 49-98, 99-99 (148) : changes are at indexes 49, 99
Row 48 (base 49), line is carried by 0-47, 48-96, 97-99 (145) : changes are at indexes 48, 97, 98
Row 47 (base 48), line is carried by 0-46, 47-94, 95-99 (142) : changes are at indexes 47, 95, 96
Row 46 (base 47), line is carried by 0-45, 46-92, 93-99 (139) : changes are at indexes 46, 93, 94
...
Row 34 (base 35), line is carried by 0-33, 34-68, 69-99 (103) : changes are at indexes 34, 69, 70
Row 33 (base 34), line is carried by 0-32, 33-66, 67-99 (100) : changes are at indexes 33, 67, 68
Row 32 (base 33), line is carried by 0-31, 32-64, 65-97, 98-99 : change are at indexes 32, 65, 66, 98, 99 (100)
...
Row 23 (base 24), line is carried by 0-22, 23-46, 47-70, 71-94, 95-99(118)
Row 22 (base 23), line is carried by 0-21, 22-44, 45-67, 68-90, 91-99(113) : changes are at indexes 22, 45, 46, 68, 69, 70, 91, 92, 93, 94, 114, 115, 116, 117, 118


Let b the base (so, the row is b+1) : changes are at the following indexes : 



b-1, (2b-1, 2b), (3b-1, 3b, 3b+1), ... (kb-1, kb, ..., kb-(k-3), kb+(k-2)) until the value reaches 99. Make sure no changing index is ever calculated twice !
Once n is below (sqrt(length)+1), calculating the changing indexes become becomes dangerous, and a direct calculus isn't much worse in terms of complexity
*/

function conclusion_16_2() {
	initP2();
	var positionToSearch = 0;
	for (var i = 0 ; i <= 6 ; i++) {
		positionToSearch *= 10;
		positionToSearch += gData[gIOld][i];
	}
	for (var i = 0 ; i < 1 ; i++) {
		mixP2(); // This method can be used in P1 instead of mix() as well :)
	} 
	var answer = 0;
	for (var i = positionToSearch ; i <= positionToSearch+7 ; i++) {
		answer *= 10;
		answer += gData[gIOld][i];
	}
	return answer;
} 