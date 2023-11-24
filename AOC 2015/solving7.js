const rawData = [
"af AND ah -> ai",
"NOT lk -> ll",
"hz RSHIFT 1 -> is",
"NOT go -> gp",
"du OR dt -> dv",
"x RSHIFT 5 -> aa",
"at OR az -> ba",
"eo LSHIFT 15 -> es",
"ci OR ct -> cu",
"b RSHIFT 5 -> f",
"fm OR fn -> fo",
"NOT ag -> ah",
"v OR w -> x",
"g AND i -> j",
"an LSHIFT 15 -> ar",
"1 AND cx -> cy",
"jq AND jw -> jy",
"iu RSHIFT 5 -> ix",
"gl AND gm -> go",
"NOT bw -> bx",
"jp RSHIFT 3 -> jr",
"hg AND hh -> hj",
"bv AND bx -> by",
"er OR es -> et",
"kl OR kr -> ks",
"et RSHIFT 1 -> fm",
"e AND f -> h",
"u LSHIFT 1 -> ao",
"he RSHIFT 1 -> hx",
"eg AND ei -> ej",
"bo AND bu -> bw",
"dz OR ef -> eg",
"dy RSHIFT 3 -> ea",
"gl OR gm -> gn",
"da LSHIFT 1 -> du",
"au OR av -> aw",
"gj OR gu -> gv",
"eu OR fa -> fb",
"lg OR lm -> ln",
"e OR f -> g",
"NOT dm -> dn",
"NOT l -> m",
"aq OR ar -> as",
"gj RSHIFT 5 -> gm",
"hm AND ho -> hp",
"ge LSHIFT 15 -> gi",
"jp RSHIFT 1 -> ki",
"hg OR hh -> hi",
"lc LSHIFT 1 -> lw",
"km OR kn -> ko",
"eq LSHIFT 1 -> fk",
"1 AND am -> an",
"gj RSHIFT 1 -> hc",
"aj AND al -> am",
"gj AND gu -> gw",
"ko AND kq -> kr",
"ha OR gz -> hb",
"bn OR by -> bz",
"iv OR jb -> jc",
"NOT ac -> ad",
"bo OR bu -> bv",
"d AND j -> l",
"bk LSHIFT 1 -> ce",
"de OR dk -> dl",
"dd RSHIFT 1 -> dw",
"hz AND ik -> im",
"NOT jd -> je",
"fo RSHIFT 2 -> fp",
"hb LSHIFT 1 -> hv",
"lf RSHIFT 2 -> lg",
"gj RSHIFT 3 -> gl",
"ki OR kj -> kk",
"NOT ak -> al",
"ld OR le -> lf",
"ci RSHIFT 3 -> ck",
"1 AND cc -> cd",
"NOT kx -> ky",
"fp OR fv -> fw",
"ev AND ew -> ey",
"dt LSHIFT 15 -> dx",
"NOT ax -> ay",
"bp AND bq -> bs",
"NOT ii -> ij",
"ci AND ct -> cv",
"iq OR ip -> ir",
"x RSHIFT 2 -> y",
"fq OR fr -> fs",
"bn RSHIFT 5 -> bq",
"0 -> c",
"14146 -> b",
"d OR j -> k",
"z OR aa -> ab",
"gf OR ge -> gg",
"df OR dg -> dh",
"NOT hj -> hk",
"NOT di -> dj",
"fj LSHIFT 15 -> fn",
"lf RSHIFT 1 -> ly",
"b AND n -> p",
"jq OR jw -> jx",
"gn AND gp -> gq",
"x RSHIFT 1 -> aq",
"ex AND ez -> fa",
"NOT fc -> fd",
"bj OR bi -> bk",
"as RSHIFT 5 -> av",
"hu LSHIFT 15 -> hy",
"NOT gs -> gt",
"fs AND fu -> fv",
"dh AND dj -> dk",
"bz AND cb -> cc",
"dy RSHIFT 1 -> er",
"hc OR hd -> he",
"fo OR fz -> ga",
"t OR s -> u",
"b RSHIFT 2 -> d",
"NOT jy -> jz",
"hz RSHIFT 2 -> ia",
"kk AND kv -> kx",
"ga AND gc -> gd",
"fl LSHIFT 1 -> gf",
"bn AND by -> ca",
"NOT hr -> hs",
"NOT bs -> bt",
"lf RSHIFT 3 -> lh",
"au AND av -> ax",
"1 AND gd -> ge",
"jr OR js -> jt",
"fw AND fy -> fz",
"NOT iz -> ja",
"c LSHIFT 1 -> t",
"dy RSHIFT 5 -> eb",
"bp OR bq -> br",
"NOT h -> i",
"1 AND ds -> dt",
"ab AND ad -> ae",
"ap LSHIFT 1 -> bj",
"br AND bt -> bu",
"NOT ca -> cb",
"NOT el -> em",
"s LSHIFT 15 -> w",
"gk OR gq -> gr",
"ff AND fh -> fi",
"kf LSHIFT 15 -> kj",
"fp AND fv -> fx",
"lh OR li -> lj",
"bn RSHIFT 3 -> bp",
"jp OR ka -> kb",
"lw OR lv -> lx",
"iy AND ja -> jb",
"dy OR ej -> ek",
"1 AND bh -> bi",
"NOT kt -> ku",
"ao OR an -> ap",
"ia AND ig -> ii",
"NOT ey -> ez",
"bn RSHIFT 1 -> cg",
"fk OR fj -> fl",
"ce OR cd -> cf",
"eu AND fa -> fc",
"kg OR kf -> kh",
"jr AND js -> ju",
"iu RSHIFT 3 -> iw",
"df AND dg -> di",
"dl AND dn -> do",
"la LSHIFT 15 -> le",
"fo RSHIFT 1 -> gh",
"NOT gw -> gx",
"NOT gb -> gc",
"ir LSHIFT 1 -> jl",
"x AND ai -> ak",
"he RSHIFT 5 -> hh",
"1 AND lu -> lv",
"NOT ft -> fu",
"gh OR gi -> gj",
"lf RSHIFT 5 -> li",
"x RSHIFT 3 -> z",
"b RSHIFT 3 -> e",
"he RSHIFT 2 -> hf",
"NOT fx -> fy",
"jt AND jv -> jw",
"hx OR hy -> hz",
"jp AND ka -> kc",
"fb AND fd -> fe",
"hz OR ik -> il",
"ci RSHIFT 1 -> db",
"fo AND fz -> gb",
"fq AND fr -> ft",
"gj RSHIFT 2 -> gk",
"cg OR ch -> ci",
"cd LSHIFT 15 -> ch",
"jm LSHIFT 1 -> kg",
"ih AND ij -> ik",
"fo RSHIFT 3 -> fq",
"fo RSHIFT 5 -> fr",
"1 AND fi -> fj",
"1 AND kz -> la",
"iu AND jf -> jh",
"cq AND cs -> ct",
"dv LSHIFT 1 -> ep",
"hf OR hl -> hm",
"km AND kn -> kp",
"de AND dk -> dm",
"dd RSHIFT 5 -> dg",
"NOT lo -> lp",
"NOT ju -> jv",
"NOT fg -> fh",
"cm AND co -> cp",
"ea AND eb -> ed",
"dd RSHIFT 3 -> df",
"gr AND gt -> gu",
"ep OR eo -> eq",
"cj AND cp -> cr",
"lf OR lq -> lr",
"gg LSHIFT 1 -> ha",
"et RSHIFT 2 -> eu",
"NOT jh -> ji",
"ek AND em -> en",
"jk LSHIFT 15 -> jo",
"ia OR ig -> ih",
"gv AND gx -> gy",
"et AND fe -> fg",
"lh AND li -> lk",
"1 AND io -> ip",
"kb AND kd -> ke",
"kk RSHIFT 5 -> kn",
"id AND if -> ig",
"NOT ls -> lt",
"dw OR dx -> dy",
"dd AND do -> dq",
"lf AND lq -> ls",
"NOT kc -> kd",
"dy AND ej -> el",
"1 AND ke -> kf",
"et OR fe -> ff",
"hz RSHIFT 5 -> ic",
"dd OR do -> dp",
"cj OR cp -> cq",
"NOT dq -> dr",
"kk RSHIFT 1 -> ld",
"jg AND ji -> jj",
"he OR hp -> hq",
"hi AND hk -> hl",
"dp AND dr -> ds",
"dz AND ef -> eh",
"hz RSHIFT 3 -> ib",
"db OR dc -> dd",
"hw LSHIFT 1 -> iq",
"he AND hp -> hr",
"NOT cr -> cs",
"lg AND lm -> lo",
"hv OR hu -> hw",
"il AND in -> io",
"NOT eh -> ei",
"gz LSHIFT 15 -> hd",
"gk AND gq -> gs",
"1 AND en -> eo",
"NOT kp -> kq",
"et RSHIFT 5 -> ew",
"lj AND ll -> lm",
"he RSHIFT 3 -> hg",
"et RSHIFT 3 -> ev",
"as AND bd -> bf",
"cu AND cw -> cx",
"jx AND jz -> ka",
"b OR n -> o",
"be AND bg -> bh",
"1 AND ht -> hu",
"1 AND gy -> gz",
"NOT hn -> ho",
"ck OR cl -> cm",
"ec AND ee -> ef",
"lv LSHIFT 15 -> lz",
"ks AND ku -> kv",
"NOT ie -> if",
"hf AND hl -> hn",
"1 AND r -> s",
"ib AND ic -> ie",
"hq AND hs -> ht",
"y AND ae -> ag",
"NOT ed -> ee",
"bi LSHIFT 15 -> bm",
"dy RSHIFT 2 -> dz",
"ci RSHIFT 2 -> cj",
"NOT bf -> bg",
"NOT im -> in",
"ev OR ew -> ex",
"ib OR ic -> id",
"bn RSHIFT 2 -> bo",
"dd RSHIFT 2 -> de",
"bl OR bm -> bn",
"as RSHIFT 1 -> bl",
"ea OR eb -> ec",
"ln AND lp -> lq",
"kk RSHIFT 3 -> km",
"is OR it -> iu",
"iu RSHIFT 2 -> iv",
"as OR bd -> be",
"ip LSHIFT 15 -> it",
"iw OR ix -> iy",
"kk RSHIFT 2 -> kl",
"NOT bb -> bc",
"ci RSHIFT 5 -> cl",
"ly OR lz -> ma",
"z AND aa -> ac",
"iu RSHIFT 1 -> jn",
"cy LSHIFT 15 -> dc",
"cf LSHIFT 1 -> cz",
"as RSHIFT 3 -> au",
"cz OR cy -> da",
"kw AND ky -> kz",
"lx -> a",
"iw AND ix -> iz",
"lr AND lt -> lu",
"jp RSHIFT 5 -> js",
"aw AND ay -> az",
"jc AND je -> jf",
"lb OR la -> lc",
"NOT cn -> co",
"kh LSHIFT 1 -> lb",
"1 AND jj -> jk",
"y OR ae -> af",
"ck AND cl -> cn",
"kk OR kv -> kw",
"NOT cv -> cw",
"kl AND kr -> kt",
"iu OR jf -> jg",
"at AND az -> bb",
"jp RSHIFT 2 -> jq",
"iv AND jb -> jd",
"jn OR jo -> jp",
"x OR ai -> aj",
"ba AND bc -> bd",
"jl OR jk -> jm",
"b RSHIFT 1 -> v",
"o AND q -> r",
"NOT p -> q",
"k AND m -> n",
"as RSHIFT 2 -> at"
];

var gData = {};

const NOT = 1;
const AND = 2;
const OR = 3;
const LSHIFT = 4;
const RSHIFT = 5;
const NONE = 6;

function init() {
	gData.instructionList = [];
	var tokens;
	var ope, a, aDirect, b, bDirect, target;
	gData.instructionsThatUse = generateArrangedArray(702, function(x) {return []}); // List all indexes instrTations that have the entry (0-701) as 'a' or 'b' instrTand.
	var str;
	for (var i = 0 ; i < rawData.length ; i++) {
		str = rawData[i];
		tokens = str.split(" ");
		if (tokens.length == 4) {
			ope = NOT;
			a = tokens[1];
			b = a;
			target = code702(tokens[3]);
		} else if (tokens.length == 5) {
			switch(tokens[1]) {
				case "AND" : ope = AND; break;
				case "OR" : ope = OR; break;
				case "LSHIFT" : ope = LSHIFT; break;
				case "RSHIFT" : ope = RSHIFT; break;
			}
			a = tokens[0];
			b = tokens[2];
			target = code702(tokens[4]);
		} else {
			ope = NONE;
			a = tokens[0];
			b = a;
			target = code702(tokens[2]);
		}
		if (isNaN(a)) {
			aDirect = false;
			a = code702(a);
			gData.instructionsThatUse[a].push(i);
		} else {
			aDirect = true;
			a = parseInt(a, 10);
		}
		if (isNaN(b)) {
			bDirect = false;
			b = code702(b);
			gData.instructionsThatUse[b].push(i); // Note : this "instructionsThatUse" should have been part of the resolution...
		} else {
			bDirect = true;
			b = parseInt(b, 10);
		}
			
		
		gData.instructionList.push({
			operator : ope,
			a : a,
			aDirect : aDirect,
			b : b,
			bDirect : bDirect,
			target : target
		});
	};
}

function code702(p_str) {
	var answer = charToASCIIRelativePosition(p_str.charAt(0), 'a');
	if (p_str.length == 2) {
		answer += 26+26*charToASCIIRelativePosition(p_str.charAt(1), 'a'); // Warning ; don't confuse "a" with "aa", don't forget 26+ ;)
	}
	return answer;
}

// Note : a and b are supposed to be direct values, not coded ones.
// Return the instrTand value.
function compute(p_instr) {
	switch (p_instr.operator) {
		case NOT : return 65535-p_instr.a; break;
		case OR : return p_instr.a|p_instr.b; break;
		case AND : return p_instr.a&p_instr.b; break;
		case LSHIFT : return p_instr.a << p_instr.b; break;
		case RSHIFT : return p_instr.a >> p_instr.b; break;
		case NONE : return p_instr.a; break;
	}
}

function conclusion_7_1() {
	// 1) List instrTations that have both aDirect and bDirect at true
	// 2) Calculate them !
	init();
	return conclusion_7_aux();
}

function conclusion_7_aux() {
	var instruction;
	var deductibleInstructions = []; // At anytime, "deductibleInstructions" must always contain IDs of instructions that are ready to be computed 
	var potDeductibleInstructions;
	for (var i = 0 ; i < gData.instructionList.length ; i++) {
		instruction = gData.instructionList[i];
		if (instruction.aDirect && instruction.bDirect) {
			deductibleInstructions.push(i);
		}
	}
	var instr, instrT, instrId; // instrT = instruction with "target" from instr
	var newFound;
	while (deductibleInstructions.length > 0) {
		instrId = deductibleInstructions.pop();
		instr = gData.instructionList[instrId];
		value = compute(instr);
		if (instr.target == 0) { // We want "a"
			return value;
		}
		for (var i = 0 ; i < gData.instructionsThatUse[instr.target].length ; i++) {
			instrT = gData.instructionList[gData.instructionsThatUse[instr.target][i]];
			newFound = false;
			if (!instrT.aDirect && instrT.a == instr.target) {
				instrT.a = value;
				instrT.aDirect = true;
				newFound = true;
			}
			if (!instrT.bDirect && instrT.b == instr.target) {
				instrT.b = value;
				instrT.bDirect = true;
				newFound = true;
			}
			if (newFound && instrT.aDirect && instrT.bDirect) {  // If not for that "newFound", we can have an instruction computed several times, leading to an exponential number of operations as soon as both operands become direct.
				deductibleInstructions.push( gData.instructionsThatUse[instr.target][i] );
			}
		}
	}
}

function conclusion_7_2() {
	var finalSignalA = conclusion_7_1();
	init();
	for (var i = 0 ; i < gData.instructionList.length ; i++) {
		if (gData.instructionList[i].target == 1) {
			gData.instructionList[i].a = finalSignalA;
			gData.instructionList[i].b = finalSignalA;
			gData.instructionList[i].operator = NONE;
			gData.instructionList[i].aDirect = true;
			gData.instructionList[i].bDirect = true;
			break;
		}
	}
	return conclusion_7_aux();
}


