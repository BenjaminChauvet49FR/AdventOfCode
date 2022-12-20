const data1 = [
[4,2,3,14,2,7],
[2,3,3,8,3,12]
];

const dataOfficial = [
[4 ,4 ,4 ,14 ,3 ,16 ],
[4 ,3 ,3 ,11 ,4 ,7 ],
[4 ,4 ,3 ,14 ,3 ,8 ],
[2 ,3 ,2 ,14 ,3 ,8 ],
[2 ,4 ,3 ,19 ,4 ,8 ],
[2 ,4 ,3 ,14 ,4 ,9 ],
[3 ,3 ,2 ,20 ,3 ,18 ],
[4 ,4 ,2 ,14 ,3 ,17 ],
[2 ,4 ,4 ,15 ,2 ,20 ],
[ 4, 4, 2, 7 ,4 ,13 ],
[ 2, 4, 4, 17, 3, 11],
[ 4, 3, 3, 18, 4, 8 ],
[ 4, 4, 2, 11, 4, 8 ],
[ 3, 4, 4, 6 ,3 ,16 ],
[ 3, 3, 3, 20, 2, 12],
[ 4, 2, 2, 16, 2, 8 ],
[ 4, 3, 4, 11, 3, 15],
[ 3, 4, 4, 5 ,3 ,12 ],
[ 4, 3, 3, 10, 2, 10],
[ 4, 3, 4, 15, 3, 12],
[ 3, 4, 3, 10, 2, 7 ],
[ 4, 4, 4, 12, 4, 19],
[ 4, 3, 4, 16, 2, 15],
[ 3, 4, 4, 18, 3, 13],
[ 3, 3, 2, 16, 3, 14],
[ 3, 3, 2, 15, 3, 9 ],
[ 4, 4, 4, 10, 2, 7 ],
[ 4, 4, 4, 5 ,3 ,15 ],
[ 3, 4, 2, 15, 2, 13],
[ 4, 4, 4, 12, 3, 8 ]
]


const data = dataOfficial;

const ORE = 0;
const CLAY = 1;
const OBSIDIAN = 2;
const GEODE = 3;

const gData = {
      costOreOre : -1,
      costOreClay : -1,
      costOreObs : -1,
      costClayObs : -1,
      costOreGeo : -1,
      costObsGeo : -1,
      maxProduced : 0,
      builtMaxProduced : [],
      minutesMaxProduced : []
}


function findOptimal(p_duration, p_index) {
      gData.costOreOre = data[p_index][0];
      gData.costOreClay = data[p_index][1];
      gData.costOreObs = data[p_index][2];
      gData.costClayObs = data[p_index][3];
      gData.costOreGeo = data[p_index][4];
      gData.costObsGeo = data[p_index][5];
      gData.costOreMax = Math.max(gData.costOreClay, Math.max(gData.costOreObs, gData.costOreGeo));
      gData.maxProduced = 0;
      gData.builtMaxProduced = [];
      gData.minutesMaxProduced = [];
      
      buildAux([1,0,0,0], [0,0,0,0], p_duration, ORE, [], []);
      buildAux([1,0,0,0], [0,0,0,0], p_duration, CLAY, [], []);
      return gData;
}

function buildAux(p_producers, p_stuff, p_timeLeft, p_toBeBuilt, p_buildDecisions, p_minutesBuild) {
      var timeLeft = p_timeLeft;
      if (p_toBeBuilt == ORE) {
            while(timeLeft > 1 && p_stuff[ORE] < gData.costOreOre) {
                  timeLeft--;
                  produce(p_producers, p_stuff);
            }
            p_stuff[ORE] -= gData.costOreOre; // Minute will be consumed below
      }
      if (p_toBeBuilt == CLAY) {
            while(timeLeft > 1 && p_stuff[ORE] < gData.costOreClay) {
                  timeLeft--;
                  produce(p_producers, p_stuff);
            }
            p_stuff[ORE] -= gData.costOreClay;
      }
      if (p_toBeBuilt == OBSIDIAN) {
            while(timeLeft > 1 && (p_stuff[ORE] < gData.costOreObs || p_stuff[CLAY] < gData.costClayObs)) {
                  timeLeft--;
                  produce(p_producers, p_stuff);
            }
            p_stuff[ORE] -= gData.costOreObs;
            p_stuff[CLAY] -= gData.costClayObs;
      }
      if (p_toBeBuilt == GEODE) {
            while(timeLeft > 1 && (p_stuff[ORE] < gData.costOreGeo || p_stuff[OBSIDIAN] < gData.costObsGeo)) {
                  timeLeft--;
                  produce(p_producers, p_stuff);
            }
            p_stuff[ORE] -= gData.costOreGeo;
            p_stuff[OBSIDIAN] -= gData.costObsGeo;
      }
      if (timeLeft == 1) {
            produce(p_producers, p_stuff);
            timeLeft = 0;
      }
      if (timeLeft == 0) {
            tryToUpdateOptimal(p_stuff[GEODE], p_buildDecisions, p_minutesBuild);
      } else {
            produce(p_producers, p_stuff);
            p_producers[p_toBeBuilt]++;
            timeLeft--;
            p_buildDecisions.push(p_toBeBuilt);
            p_minutesBuild.push(timeLeft);
            if (p_producers[ORE] < gData.costOreMax) {                  
                  buildAux(p_producers.slice(), p_stuff.slice(), timeLeft, ORE, p_buildDecisions.slice(), p_minutesBuild.slice());
            }
            if (p_producers[CLAY] < gData.costClayObs) {                
                  buildAux(p_producers.slice(), p_stuff.slice(), timeLeft, CLAY, p_buildDecisions.slice(), p_minutesBuild.slice());
            }
            if (p_producers[CLAY] > 0 && p_producers[OBSIDIAN] < gData.costObsGeo) {                  
                  buildAux(p_producers.slice(), p_stuff.slice(), timeLeft, OBSIDIAN, p_buildDecisions.slice(), p_minutesBuild.slice());
            }
            if (p_producers[OBSIDIAN] > 0) {                
                  buildAux(p_producers.slice(), p_stuff.slice(), timeLeft, GEODE, p_buildDecisions.slice(), p_minutesBuild.slice());
            }
      }
}

function tryToUpdateOptimal(p_geodeProduced, p_builtMaxProduced, p_minutesMaxProduced) {
      if (p_geodeProduced > gData.maxProduced) {
            gData.maxProduced = p_geodeProduced;
            gData.builtMaxProduced = p_builtMaxProduced.slice();
            gData.minutesMaxProduced = p_minutesMaxProduced.slice();
      }
}

function produce(p_producers, p_stuff) {
      for (var i = 0 ; i < 4 ; i++) {
            p_stuff[i] += p_producers[i];
      }
}

function conclusion_19_1() {
	var answer = 0;
	var opt1;
	for (var i = 0 ; i < data.length ; i++) {
		opt1 = findOptimal(24, i).maxProduced;
		console.log(i + " " + opt1);
		answer += (i+1)*opt1;
	}
	return answer; // Correct answer = 1264
}

function conclusion_19_2() {
	var answer = 1;
	var opt1;
	for (var i = 0 ; i < 3 ; i++) {
		opt1 = findOptimal(32, i).maxProduced;
		console.log(i + " " + opt1);
		answer *= opt1;
	}
	return answer; // Correct answer = 11*49*25 = 13475
}