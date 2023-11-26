const rawData = [
1  ,
3  ,
5  ,
11 ,
13 ,
17 ,
19 ,
23 ,
29 ,
31 ,
41 ,
43 ,
47 ,
53 ,
59 ,
61 ,
67 ,
71 ,
73 ,
79 ,
83 ,
89 ,
97 ,
101,
103,
107,
109,
113,
];

var gData = {};

function init() {
	gData.total = 0;
	gData.bestArticleNumber = rawData.length;
	gData.bestQE = 0;
	for (var i = 0 ; i < rawData.length ; i++) {
		gData.total += rawData[i];
	}
}

function conclusion_24_1() {
	var answer = 0;
	init();
	const initTotal = gData.total/3;
	conclusion_24_aux([],[],[], initTotal, initTotal, initTotal, rawData.length-1); // Started from the lowest packs. Oops... no wonder it took too long.	
	return gData;
}

function conclusion_24_aux(p_list1, p_list2, p_list3, p_remain1, p_remain2, p_remain3, p_indexToPut) {
	if (p_remain1 == 0 && p_remain2 == 0 && p_remain3 == 0) {
		const min = Math.min(p_list1.length, p_list2.length, p_list3.length);
		if (min <= gData.bestArticleNumber) {
			treatMin(p_list1, min);
			treatMin(p_list2, min);
			treatMin(p_list3, min);
		}
	} else if (p_remain1 < 0 || p_remain2 < 0 || p_remain3 < 0) {
		// Do nothing
	} else if (p_list1.length > gData.bestArticleNumber && p_list2.length > gData.bestArticleNumber && p_list3.length > gData.bestArticleNumber) {
		// Do nothing. But we need to cut branches ! 
		// Yeah, this branch cut was decisive ! 
	} else {
		const newVal = rawData[p_indexToPut];
		p_list1.push(newVal);
		conclusion_24_aux(p_list1, p_list2, p_list3, p_remain1-newVal, p_remain2, p_remain3, p_indexToPut-1);
		p_list1.pop();
		if (p_list1.length > 0) {
			p_list2.push(newVal);
			conclusion_24_aux(p_list1, p_list2, p_list3, p_remain1, p_remain2-newVal, p_remain3, p_indexToPut-1);
			p_list2.pop();
			if (p_list2.length > 0) {
				p_list3.push(newVal);
				conclusion_24_aux(p_list1, p_list2, p_list3, p_remain1, p_remain2, p_remain3-newVal, p_indexToPut-1);
				p_list3.pop();			
			}
		}
	}
}

// Test if this list contains the minimum, then sets the record of number of article or QE.
// (We already found an interesting list)
function treatMin(p_list, p_min) {
	if (p_list.length == p_min) {
		if (p_min < gData.bestArticleNumber) {
			gData.bestArticleNumber = p_min;
			gData.bestQE = product(p_list);
		} else if (p_min == gData.bestArticleNumber) {
			const prod = product(p_list);
			if (prod < gData.bestQE) {
				gData.bestQE = prod
			}
		}
	}
}

function product(p_list) {
	var answer = 1;
	p_list.forEach(a => {
		answer *= a;
	});
	return answer;
} // TODO may be centralized. But whatever... maybe a function already exists.



// C/P from part 1 of course !
function conclusion_24_2() {
	var answer = 0;
	init();
	const initTotal = gData.total/4;
	conclusion_24_2_aux([],[],[],[], initTotal, initTotal, initTotal, initTotal, rawData.length-1); 	
	return gData;
}

function conclusion_24_2_aux(p_list1, p_list2, p_list3, p_list4, p_remain1, p_remain2, p_remain3, p_remain4, p_indexToPut) {
	if (p_remain1 == 0 && p_remain2 == 0 && p_remain3 == 0 && p_remain4 == 0) {
		const min = Math.min(p_list1.length, p_list2.length, p_list3.length, p_list4.length);
		if (min <= gData.bestArticleNumber) {
			treatMin(p_list1, min);
			treatMin(p_list2, min);
			treatMin(p_list3, min);
			treatMin(p_list4, min);
		}
	} else if (p_remain1 < 0 || p_remain2 < 0 || p_remain3 < 0 || p_remain4 < 0) {
		// Do nothing
	} else if (p_list1.length > gData.bestArticleNumber && p_list2.length > gData.bestArticleNumber && p_list3.length > gData.bestArticleNumber && p_list4.length > gData.bestArticleNumber) {
		// Do nothing. But we need to cut branches ! 
		// Yeah, this branch cut was decisive ! 
	} else {
		const newVal = rawData[p_indexToPut];
		p_list1.push(newVal);
		conclusion_24_2_aux(p_list1, p_list2, p_list3, p_list4, p_remain1-newVal, p_remain2, p_remain3, p_remain4, p_indexToPut-1);
		p_list1.pop();
		if (p_list1.length > 0) {
			p_list2.push(newVal);
			conclusion_24_2_aux(p_list1, p_list2, p_list3, p_list4, p_remain1, p_remain2-newVal, p_remain3, p_remain4, p_indexToPut-1);
			p_list2.pop();
			if (p_list2.length > 0) {
				p_list3.push(newVal);
				conclusion_24_2_aux(p_list1, p_list2, p_list3, p_list4, p_remain1, p_remain2, p_remain3-newVal, p_remain4, p_indexToPut-1);
				p_list3.pop();
				if (p_list3.length > 0) {
					p_list4.push(newVal);
					conclusion_24_2_aux(p_list1, p_list2, p_list3, p_list4, p_remain1, p_remain2, p_remain3, p_remain4-newVal, p_indexToPut-1);
					p_list4.pop();			
				}
			}		
		}
	}
}

// TO BE IMPROVED : it took about 2 minutes to get the answer... 