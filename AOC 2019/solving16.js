const rawDataOfficial = "59709275180991144553584971145772909665510077889137728108418335914621187722143499835763391833539113913245874471724316543318206687063884235599476032241946131415288903315838365933464260961288979081653450180693829228376307468452214424448363604272171578101049695177870848804768766855959460302410160410252817677019061157656381257631671141130695064999297225192441065878259341014746742840736304437968599872885714729499069286593698777113907879332554209736653679474028316464493192062972874319626623316763537266681767610340623614648701699868901159785995894014509520642548386447251984766543776759949169049134947575625384064448900019906754502662096668908517457172";
const rawDataExample = "12345678";
var rawData = rawDataOfficial;

var gData, gIOld, gINew;
const pattern = [0, 1, 0, -1];

function init() {
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
}

function mix() {
	var count, k;
	for (var i = 0 ; i < rawData.length ; i++) {
		count = 0;
		for (var j = 0 ; j < rawData.length ; j++) {
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