const rawData = [
"Immune System:",
"2321 , 10326,slashing                      ,           , 42 fire , 4         ",
"2899 , 9859 ,                              ,           , 32 slashing , 11    ",
"4581 , 7073 ,                              ,slashing   , 11 radiation , 9    ",
"5088 , 7917 ,bludgeoning fire radiation    ,slashing   , 15 fire , 17        ",
"786  , 1952 ,fire bludgeoning slashing cold,           , 23 slashing , 16    ",
"3099 , 7097 ,                              ,bludgeoning, 17 radiation , 8    ",
"4604 , 4901 ,                              ,           , 8 fire , 13         ",
"7079 , 10328,                              ,           , 14 bludgeoning , 18 ",
"51   , 11243,                              ,           , 1872 cold , 15      ",
"4910 , 5381 ,fire                          , radiation , 10 slashing , 19    ",
"Infection:                                                                   ",
"1758 , 23776 ,                    ,                     , 24 radiation , 2   ",
"4000 , 12869 ,                    ,                     , 5 cold       , 14  ",
"2319 , 43460 ,                    , bludgeoning cold    , 33 radiation , 3   ",
"1898 , 44204 , cold               , radiation           , 39 radiation , 1   ",
"2764 , 50667 ,                    ,slashing radiation   , 31 radiation , 5   ",
"3046 , 27907 , radiation fire     ,                     , 16 slashing , 7    ",
"1379 , 8469  , cold               ,                     , 8 cold , 20        ",
"1824 , 25625 , bludgeoning        ,                     , 23 radiation , 6   ",
"115  , 41114 , fire               ,slashing bludgeoning , 686 slashing , 10  ",
"4054 , 51210 , radiation cold fire,                     , 22 cold , 12       "
];

var gData;
var gIFirstBaddie;
var gIndexOrder;
var gGroupsGood;
var gGroupsBad;

// In order : Number of units, HP per unit, immunities, weaknesses, damage, damage type, initiative
function init() {
	gData = [];
	var tokens;
	var types = [];
	var weaknesses, immunities, damStr; 
	var indexFirstBaddie = 0;
	for (var i = 0 ; i < rawData.length ; i++) {
		tokens = rawData[i].split(",");
		if (tokens.length == 1) {
			if (rawData[i].startsWith("Inf")) {
				gIFirstBaddie = gData.length;
			}
			continue;
		}
		weaknesses = [];
		tokens[3].trim().split(" ").forEach(str => {
			if (str != "") {				
				weaknesses.push(getIndexInListWithAdd(types, str));
			}
		});
		immunities = [];
		tokens[2].trim().split(" ").forEach(str => {
			if (str != "") {				
				immunities.push(getIndexInListWithAdd(types, str));
			}
		});		
		damStr = tokens[4].trim().split(" ");
		gData.push({
			units : parseInt(tokens[0].trim(), 10),
			hp : parseInt(tokens[1].trim(), 10),
			weaknesses : weaknesses.slice(),
			immunities : immunities.slice(),
			damage : parseInt(damStr[0].trim(), 10),
			atkType : getIndexInListWithAdd(types, damStr[1]),
			initiative : parseInt(tokens[5].trim(), 10),
		})
	}
	// All baddies have an index >= gIFirstBaddie, all goods have a lower index.
	
	// At index (i-1) of this array is the number of the group with an initiative i.
	gIndexInit = generateArray(gData.length, -1);
	for (var i = 0 ; i < gData.length ; i++) {
		gIndexInit[gData[i].initiative-1] = i;
	}
	gIndexOrder = generateArrayFromToIncluded(0, gData.length-1);
	gGroupsGood = gIFirstBaddie;
	gGroupsBad = gData.length-gIFirstBaddie;
}



function conclusion_24_1() {
	init();
	while (gGroupsBad > 0 && gGroupsGood > 0) {
		performRound();
	}
	// Victory lap
	var units = 0;
	gData.forEach(group => {
		units += group.units;
	});
	return units;
}

// 2764 = wrong ; 18354 = wrong ! 18346 = RIGHT ! (damn execution problems...)
function performRound() {
	// Restore the array of effective power by descending order followed by initiative
	gIndexOrder = gIndexOrder.filter(function(index){return gData[index].units > 0});
	sortDescending(gIndexOrder, [function(x) {return gData[x].units * gData[x].damage}, function(x){return gData[x].initiative}] );
	
	
	// Selection phase
	var arrayGonnaAtk = generateArray(gData.length, -1);
	var arrayGonnaTakeFrom = generateArray(gData.length, -1);
	var group, idx, iFT, iLT, group2, dmg;
	var iVictim, bestDmg, bestInit, bestEnemyPwr;
	for (var i = 0 ; i < gIndexOrder.length ; i++) {
		idx = gIndexOrder[i];
		group = gData[idx];
		if (group.units == 0) {
			continue;
		}
		if (idx < gIFirstBaddie) {
			iFT = gIFirstBaddie;
			iLT = gData.length-1;
		} else {
			iFT = 0;
			iLT = gIFirstBaddie-1;			
		}
		iVictim = -1;
		bestDmg = 0; 
		bestEnemyPwr = 0;
		bestInit = gData.length*2;
		for (var j = iFT ; j <= iLT ; j++) {
			if (arrayGonnaTakeFrom[j] == -1) {				
				group2 = gData[j];
				if (group2.units == 0) {
					continue;
				}
				dmg = calculateDmg1Unit(group, group2);
				enemyPwr = group2.damage * group2.units;
				if (dmg == 0) {
					continue; // Note : without the "dmg > 0"  we could get stuck with the last enemy standing being immune from the first ally choosing.
				}
				if (dmg > bestDmg || (dmg == bestDmg && ( enemyPwr > bestEnemyPwr || (enemyPwr == bestEnemyPwr && group2.initiative > bestInit))) ) {
					bestDmg = dmg; 
					bestEnemyPwr = enemyPwr;
					bestInit = group2.initiative;
					iVictim = j;
				}
			}
		}
		if (iVictim != -1) {			
			arrayGonnaAtk[idx] = iVictim;
			arrayGonnaTakeFrom[iVictim] = idx;
		}
	}

	// Attack phase in init reverse order !
	for (var init = gIndexInit.length-1 ; init >= 0 ; init--) {
		idx = gIndexInit[init];
		group = gData[idx];
		iVictim = arrayGonnaAtk[idx];
		if (group.units == 0 || iVictim == -1) {
			continue;
		}
		group2 = gData[iVictim];
		if (group2.units > 0) {
			dealDmg(group, group2);
			if (group2.units <= 0) {
				group2.units = 0;
				if (iVictim < gIFirstBaddie) {
					gGroupsGood--;
				} else {
					gGroupsBad--;
				}
			}
		}
	}	
}

function calculateDmg1Unit(p_group1, p_group2) {
	var type = p_group1.atkType;
	if (p_group2.immunities.includes(type)) {
		return 0;
	}
	const coef = (p_group2.weaknesses.includes(type)) ? 2 : 1;
	return p_group1.damage*coef;
}

function dealDmg(p_group1, p_group2) {
	var dmg = calculateDmg1Unit(p_group1, p_group2)*p_group1.units;
	var killEm = Math.floor(dmg/p_group2.hp);
	p_group2.units -= killEm;
}



function battleWon(p_boost) {
	init();
	for (var i = 0 ; i < gIFirstBaddie ; i++) {
		gData[i].damage += p_boost;
	}
	var nbRounds = 0;
	while (gGroupsBad > 0 && gGroupsGood > 0 && nbRounds < 10000) {
		performRound();
		nbRounds++;
	} 
	// OH COME ON ! I found a situation where the battle was infinite if left unchecked (at boost 26) !
	return gGroupsBad == 0;
}


function conclusion_24_2() {
	var max = 50;
	var min = 1;
	while (!battleWon(max)) {
		max += 50;
		min += 50;
	}
	var win;
	while (!battleWon(min)) {
		min++;
	}
	// Victory lap
	var units = 0;
	gData.forEach(group => {
		units += group.units;
	});
	return units;
}

// Yes, it was 8698 (after how many boosts ?). But the "infinite battle" situation was a surprise !
// There could have been a situation where a battle was lost or infinite AFTER another one was won but fortunately I didn't meet one.