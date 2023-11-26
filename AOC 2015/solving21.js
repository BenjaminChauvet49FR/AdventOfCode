const gEHP = 104;
const gEAtk = 8;
const gEDef = 1;
const gMyHP = 100;

// a = attack, d = defense. Not the other way around !

const weapons = [
{c : 8, a : 4, d : 0},
{c : 10, a : 5, d : 0},
{c : 25, a : 6, d : 0},
{c : 40, a : 7, d : 0},
{c : 74, a : 8, d : 0}
]

const armor = [
{c : 13, d : 1, a : 0},
{c : 31, d : 2, a : 0},
{c : 53, d : 3, a : 0},
{c : 75, d : 4, a : 0},
{c : 102, d : 5, a : 0},
{c : 0, d : 0, a : 0} // No armor
];

const rings = [
{c : 25, a : 1, d : 0},
{c : 50, a : 2, d : 0},
{c : 100, a : 3, d : 0},
{c : 20, d : 1, a : 0},
{c : 40, d : 2, a : 0},
{c : 80, d : 3, a : 0}
]

var gStop;
var gBestCost;

function conclusion_21_1() {
	gBestCost = 9999;
	// How many hits can I give ? Math.ceil(100/(gEAtk-def)) (denominator value being at least 1).
	// How many damage will I output in X hits ? X*(atk-1).
	// Let's find for each of all 30 combinations of weapon/armor (including no armor) and then 22 combinations of 0-1-2 rings the winning ones that yield a win. (not optimized because we can !)
	for (var i = 0 ; i < weapons.length ; i++) {
		for (var j = 0 ; j < armor.length ; j++) {
			tryWith([weapons[i], armor[j]]);
			if (!gStop) {				
				for (var k = 0 ; k < rings.length ; k++) {// ERRATUM ! I put first a k=1 because I knew there would be another for loop inside, but not a "tryWith" directly
					tryWith([weapons[i], armor[j], rings[k]]);
					if (!gStop) {					
						for (var l = 0 ; l < k ; l++) {
							tryWith([weapons[i], armor[j], rings[k], rings[l]]);
						}
					}
				}
			}
		}
	}
	return gBestCost;
}
// I'm glad the solution was something that involved buying first attack ring and no other ring. What if it was the solution of 2nd part but not the first ?

function tryWith(p_gear) {
	var atk = 0;
	var def = 0;
	var cost = 0;
	gStop = false;
	for (var i = 0 ; i < p_gear.length ; i++) {
		atk += p_gear[i].a;
		def += p_gear[i].d;
		cost += p_gear[i].c;
		if (cost >= gBestCost) {
			gStop = true; // We have spent too much
			return;
		}
	}
	if (Math.max(1, atk-gEDef)*(Math.ceil(gMyHP/ Math.max(1, gEAtk-def)  )) >= gEHP) {
		gStop = true; // Buying another ring is useless
		if (cost < gBestCost) {
			gBestCost = cost;
		}
	}
}



var gWorstCost;

function conclusion_21_2() {
	gWorstCost = 0;
	for (var i = 0 ; i < weapons.length ; i++) {
		for (var j = 0 ; j < armor.length ; j++) {
			tryWithTraitor([weapons[i], armor[j]]);
			if (!gStop) {
				for (var k = 0 ; k < rings.length ; k++) {
					tryWithTraitor([weapons[i], armor[j], rings[k]]);
					if (!gStop) {					
						for (var l = 0 ; l < k ; l++) {
							tryWithTraitor([weapons[i], armor[j], rings[k], rings[l]]);
						}
					}
				}
			}
		}
	}
	return gWorstCost;
}

function tryWithTraitor(p_gear) {
	var atk = 0;
	var def = 0;
	var cost = 0;
	gStop = false;
	for (var i = 0 ; i < p_gear.length ; i++) {
		atk += p_gear[i].a;
		def += p_gear[i].d;
		cost += p_gear[i].c;
	}
	if (Math.max(1, atk-gEDef)*(Math.ceil(gMyHP/ Math.max(1, gEAtk-def)  )) < gEHP) {
		if (cost > gWorstCost) {
			gWorstCost = cost;
		}
	} else {
		gStop = true; // Buying another ring is useless, we'll win anyway
	}
}
