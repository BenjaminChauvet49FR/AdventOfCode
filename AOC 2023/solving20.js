const rawDataOfficial = [
"%jr -> mq, xn",
"%zl -> tz, cm",
"&lh -> nr",
"%hx -> jx, tz",
"%cm -> tz, ls",
"&fk -> nr",
"broadcaster -> sj, pf, kh, cn",
"%gz -> mq, lq",
"%gb -> xf, kr",
"%zc -> rq",
"%ln -> qj, xf",
"%gq -> pp",
"%fb -> xf",
"%pf -> tg, nv",
"%bc -> cf",
"&tz -> cn, fk, ls",
"%cq -> fb, xf",
"%rq -> tg, dx",
"%km -> gq",
"&mq -> gq, xn, fv, km, lh, xv, sj",
"%zp -> mq, xv",
"%jx -> tz, np",
"&tg -> mm, rp, zc, pf, bc",
"%cv -> sq, xf",
"%nv -> ht, tg",
"%sq -> gb",
"%kr -> ln",
"%dk -> cv",
"%xn -> zp",
"%sx -> xf, cq",
"%zt -> tz, fq",
"%dx -> tg, qn",
"&ff -> nr",
"%bn -> hx, tz",
"%fj -> zt, tz",
"%ht -> rr, tg",
"%fq -> tz, bn",
"%kh -> dk, xf",
"%sj -> mq, fv",
"%vm -> zl, tz",
"&mm -> nr",
"%rp -> bc",
"%fh -> sx",
"%ls -> fj",
"%xz -> mq, gz",
"%fv -> km",
"&nr -> rx",
"%lq -> mq",
"%xv -> xz",
"%cn -> tz, vm",
"%pp -> jr, mq",
"%hn -> tg",
"%qn -> hn, tg",
"%rr -> rp, tg",
"%cf -> tg, zc",
"%qj -> fh, xf",
"&xf -> sq, dk, fh, ff, kh, kr",
"%np -> tz"
];

const rawDataExample1 = [
"broadcaster -> a, b, c",
"%a -> b",
"%b -> c",
"%c -> inv",
"&inv -> a"
];

const rawDataExample2 = [
"broadcaster -> a",
"%a -> inv, con",
"&inv -> b",
"%b -> con",
"&con -> output"
]

const rawDataSubprogramMQ_LH = [
"&mq -> gq, xn, fv, km, lh, xv, sj", // lh needs to be low. (like all outputs) (because lh -> &nr -> rx)
"%sj -> mq, fv", // sj = entrance. 
"%zp -> mq, xv",
"%xz -> mq, gz",
"%pp -> jr, mq",
"%jr -> mq, xn",
"%gz -> mq, lq",
"%lq -> mq",
"%gq -> pp",
"%km -> gq",
"%xn -> zp",
"%fv -> km",
"%xv -> xz",
"broadcaster -> sj"];

const rawDataSubprogramTZ_FK = [
"&tz -> cn, fk, ls",
"%zl -> tz, cm",
"%hx -> jx, tz",
"%cm -> tz, ls",
"%zt -> tz, fq",
"%fj -> zt, tz", 
"%bn -> hx, tz",
"%fq -> tz, bn",
"%vm -> zl, tz",
"%cn -> tz, vm", 
"%np -> tz",
"%jx -> tz, np",
"%ls -> fj",
"broadcaster -> cn"
];

const rawDataSubprogramXF_FF = [
"&xf -> sq, dk, fh, ff, kh, kr",
"%gb -> xf, kr",
"%ln -> qj, xf",
"%fb -> xf",
"%cq -> fb, xf",
"%cv -> sq, xf",
"%sx -> xf, cq",
"%kh -> dk, xf", 
"%qj -> fh, xf",
"%kr -> ln",
"%dk -> cv",
"%sq -> gb",
"%fh -> sx",
"broadcaster -> kh"
];

const rawDataSubprogramTG_MM = [
"&tg -> mm, rp, zc, pf, bc",
"%zc -> rq",
"%pf -> tg, nv",
"%rq -> tg, dx",
"%nv -> ht, tg",
"%dx -> tg, qn",
"%ht -> rr, tg",
"%rp -> bc",
"%bc -> cf",
"%cf -> tg, zc",
"%hn -> tg",
"%qn -> hn, tg",
"%rr -> rp, tg",
"broadcaster -> pf"
];


var rawData = rawDataOfficial;
const NB_ITERS = 1000;

var gData;
var gIBR;
const FL = 1;
const CO = 2;
const NONE = 3;
var gIEND;

function init() {
	gData = [];
	var tokens;
	var label;
	var mode;
	for (var i = 0 ; i < rawData.length ; i++) {
		tokens = rawData[i].split(" -> ");
		if (tokens[0].charAt(0) == "%") {
			label = tokens[0].substring(1);
			mode = FL;
		} else if (tokens[0].charAt(0) == "&") {
			label = tokens[0].substring(1);
			mode = CO;
		} else {
			label = tokens[0];
			mode = NONE;
			gIBR = i;
		}
		gData.push({
			label : label,
			mode : mode,
			outputs : [],
			inputIndexesInO : []
		});
		if (mode == FL) {
			gData[gData.length-1].state = false; // False/true = off/on			
		} else if (mode == CO) {
			gData[gData.length-1].inputs = [];
		}
		tokens = tokens[1].split(", ");
		for (var j = 0 ; j < tokens.length ; j++) {			
			gData[i].outputs.push(tokens[j]);
		}
	}
	// Warning : like yesterday (solving19), strings changed into ints
	var i,j,k;
	for (i = 0 ; i < gData.length ; i++) {
		for (j = 0 ; j < gData[i].outputs.length ; j++) {
			for (k = 0 ; k < gData.length ; k++) {
				if (gData[k].label == gData[i].outputs[j]) {
					gData[i].outputs[j] = k;
					break;
				}
			}
			if (k == gData.length) {
				gData[i].outputs[j] = -1;
			}
		}
	}
	// Now, some modules have inputs.
	for (i = 0 ; i < gData.length ; i++) {
		for (j = 0 ; j < gData[i].outputs.length ; j++) {
			k = gData[i].outputs[j];
			if (k != -1 && gData[k].mode == CO) {	
				gData[i].inputIndexesInO.push(gData[k].inputs.length);
				gData[k].inputs.push(false); // true/false = on/off
			} else {
				gData[i].inputIndexesInO.push(-1);
			}
			if (k == -1) {
				gIEND = k;
			}
		}
	}
}

var gListActivations;

function conclusion_20_1() {
	init();
	var aOn = 0;
	var aOff = 0;
	var aStep
	var iAc;
	for (var i = 0 ; i < NB_ITERS ; i++) {
		aStep = pressButton();
		aOn += aStep.ons;
		aOff += aStep.offs;
	}
	return aOn*aOff;
}

function pressButton() {
	var offs = 0;
	var ons = 0;
	gListActivations = [{index : gIBR, signal : false, indexInput : -1}];
	var iAc = 0;
	while (iAc < gListActivations.length) {
		if (gListActivations[iAc].signal) {
			ons++;
		} else {
			offs++;
		}
		processOutputs(gListActivations[iAc]);
		iAc++;
	}
	return {offs : offs, ons : ons}
}

function processOutputs(p_in) {
	const index = p_in.index;
	const signal = p_in.signal;
	const indexInput = p_in.indexInput;
	if (index == -1) {
		return;
	}
	var data = gData[index];
	var output;
	if (data.mode == FL) {
		if (!signal) {
			data.state = !data.state;
			output = data.state;
		} else {
			return;
		}
	} else if (data.mode == CO) {
		data.inputs[indexInput] = signal;
		var i = 0;
		while (i < data.inputs.length && data.inputs[i]) {
			i++;
		}
		output = (i != data.inputs.length);
	} else {
		output = signal;
	}
	var exit;
	for (var i = 0 ; i < data.outputs.length ; i++) {
		gListActivations.push({index : data.outputs[i], signal : output, indexInput : data.inputIndexesInO[i]});
	}
}


function conclusion_20_2_fail() {
	rawData = rawDataExample1;
	init();
	var answer = 0;
	var aStep
	var iAc;
	do {
		aStep = pressButtonP2();		
		answer++;
	} while (aStep.offs < 1);
	return answer;
}

function pressButtonP2() {
	var offs = 0;
	var ons = 0;
	gListActivations = [{index : gIBR, signal : false, indexInput : -1}];
	var iAc = 0;
	while (iAc < gListActivations.length) {
		if (gListActivations[iAc].index == -1) { // The output !			
			if (gListActivations[iAc].signal) {
				ons++;
			} else {
				offs++;
			}
		}
		processOutputs(gListActivations[iAc]);
		iAc++;
	}
	return {offs : offs, ons : ons}
}

function conclusion_20_2_subprogram_aux(p_rawData) {
	rawData = p_rawData;
	init();
	var answer = 0;
	var aStep
	var iAc;
/*	do {
		aStep = pressButtonP2();		
		answer++;
	} while (aStep.offs < 1); // 3761 for rawDataSubprogramMQ_LH. Is there some kind of loop... ?*/
	var answer = [];
	for (var i = 1 ; i <= 100000 ; i++) { // we push the button the first time		
		aStep = pressButtonP2();		
		if (aStep.offs == 1) {
			answer.push(i);
		}
	}
	return answer;
}

function conclusion_20_2() {
	var answer0 = conclusion_20_2_subprogram_aux(rawDataSubprogramMQ_LH);
	var answer1 = conclusion_20_2_subprogram_aux(rawDataSubprogramTZ_FK);
	var answer2 = conclusion_20_2_subprogram_aux(rawDataSubprogramTG_MM);
	var answer3 = conclusion_20_2_subprogram_aux(rawDataSubprogramXF_FF);
	return lcm_all(answer0[0], answer1[0], answer2[0],answer3[0]); // It is luck (or is it ?) that all iterations that send a low are multiple of the first one. I knew there would be a period, but that's it.
	
}