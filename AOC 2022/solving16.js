const rawData1 = [
"Valve AA has flow rate=0; tunnels lead to valves DD, II, BB",
"Valve BB has flow rate=13; tunnels lead to valves CC, AA",
"Valve CC has flow rate=2; tunnels lead to valves DD, BB",
"Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE",
"Valve EE has flow rate=3; tunnels lead to valves FF, DD",
"Valve FF has flow rate=0; tunnels lead to valves EE, GG",
"Valve GG has flow rate=0; tunnels lead to valves FF, HH",
"Valve HH has flow rate=22; tunnel leads to valve GG",
"Valve II has flow rate=0; tunnels lead to valves AA, JJ",
"Valve JJ has flow rate=21; tunnel leads to valve II"
];

const rawDataOfficial = [
"Valve TB has flow rate=20; tunnel leads to valve DN" ,
"Valve SY has flow rate=0; tunnels lead to valves OJ, RZ",
"Valve EH has flow rate=0; tunnels lead to valves OL, GH",
"Valve ZE has flow rate=0; tunnels lead to valves WZ, WE",
"Valve RZ has flow rate=0; tunnels lead to valves GM, SY",
"Valve FN has flow rate=0; tunnels lead to valves YP, DN",
"Valve GH has flow rate=12; tunnels lead to valves EH, PV, BH, WY, DW" ,
"Valve YL has flow rate=0; tunnels lead to valves GM, YZ",
"Valve IA has flow rate=0; tunnels lead to valves AA, GM",
"Valve WK has flow rate=0; tunnels lead to valves HJ, AA",
"Valve HK has flow rate=0; tunnels lead to valves AA, OJ",
"Valve WG has flow rate=0; tunnels lead to valves YP, EK",
"Valve XU has flow rate=0; tunnels lead to valves EX, SK",
"Valve BH has flow rate=0; tunnels lead to valves GH, DL",
"Valve OI has flow rate=0; tunnels lead to valves EZ, OV",
"Valve WE has flow rate=5; tunnels lead to valves ZE, YZ, BF, EZ, HJ",
"Valve AC has flow rate=0; tunnels lead to valves OJ, OV",
"Valve EI has flow rate=18; tunnels lead to valves OD, GS, XZ, WY, QU" ,
"Valve CP has flow rate=0; tunnels lead to valves GS, AA",
"Valve WZ has flow rate=0; tunnels lead to valves ZE, OJ",
"Valve EZ has flow rate=0; tunnels lead to valves OI, WE",
"Valve LI has flow rate=0; tunnels lead to valves WJ, OV",
"Valve WJ has flow rate=0; tunnels lead to valves LI, YP",
"Valve AQ has flow rate=0; tunnels lead to valves PF, EX",
"Valve DW has flow rate=0; tunnels lead to valves EK, GH",
"Valve OA has flow rate=25; tunnels lead to valves OL, PN, OD" ,
"Valve ZV has flow rate=0; tunnels lead to valves GM, OV",
"Valve CH has flow rate=0; tunnels lead to valves QU, EX",
"Valve CG has flow rate=0; tunnels lead to valves PN, EK",
"Valve EX has flow rate=19; tunnels lead to valves AQ, XU, CH, BF" ,
"Valve DN has flow rate=0; tunnels lead to valves TB, FN",
"Valve QU has flow rate=0; tunnels lead to valves EI, CH",
"Valve QA has flow rate=0; tunnels lead to valves ZO, PU",
"Valve DL has flow rate=0; tunnels lead to valves OJ, BH",
"Valve BF has flow rate=0; tunnels lead to valves WE, EX",
"Valve OJ has flow rate=4; tunnels lead to valves SY, WZ, AC, DL, HK",
"Valve MN has flow rate=0; tunnels lead to valves AA, OV",
"Valve WY has flow rate=0; tunnels lead to valves EI, GH",
"Valve PF has flow rate=21; tunnel leads to valve AQ" ,
"Valve EK has flow rate=10; tunnels lead to valves DW, WG, CG, XZ" ,
"Valve GA has flow rate=0; tunnels lead to valves KB, YP",
"Valve BW has flow rate=0; tunnels lead to valves AL, GD",
"Valve YZ has flow rate=0; tunnels lead to valves WE, YL",
"Valve VG has flow rate=0; tunnels lead to valves PV, GD",
"Valve OD has flow rate=0; tunnels lead to valves OA, EI",
"Valve GM has flow rate=13; tunnels lead to valves YL, RZ, SK, ZV, IA" ,
"Valve YP has flow rate=22; tunnels lead to valves GA, AL, WJ, WG, FN" ,
"Valve SK has flow rate=0; tunnels lead to valves GM, XU",
"Valve PN has flow rate=0; tunnels lead to valves OA, CG",
"Valve AA has flow rate=0; tunnels lead to valves CP, WK, MN, HK, IA",
"Valve AL has flow rate=0; tunnels lead to valves BW, YP",
"Valve OV has flow rate=7; tunnels lead to valves AC, OI, LI, ZV, MN",
"Valve ZO has flow rate=23; tunnel leads to valve QA" ,
"Valve HJ has flow rate=0; tunnels lead to valves WE, WK",
"Valve KB has flow rate=0; tunnels lead to valves GA, PU",
"Valve OL has flow rate=0; tunnels lead to valves OA, EH",
"Valve PV has flow rate=0; tunnels lead to valves GH, VG",
"Valve PU has flow rate=24; tunnels lead to valves KB, QA",
"Valve GD has flow rate=17; tunnels lead to valves VG, BW",
"Valve GS has flow rate=0; tunnels lead to valves CP, EI",
"Valve XZ has flow rate=0; tunnels lead to valves EI, EK"     

];


var valves = [];
var distancesArray = [];

function compareValvesForSort(p_A, p_B) {
      const res1 = p_B.rate - p_A.rate;
      if (res1 != 0) {
            return res1;
      }
      if (p_B.name > p_A.name) {
            return 1
      } else if (p_B.name < p_A.name) {
            return -1;
      } else {
            return 0;
      }
}

function initialize(p_rawData) {    
      valves = [];
      var tokens;

      // Initialize valves
      var i, j;
      for (i = 0 ; i < p_rawData.length ; i++) {
            tokens = p_rawData[i].split(" ");
            var valve = {name : tokens[1], rate : parseInt(tokens[4].split(";")[0].substring(5), 10), destNames : [], nearIDs : []};
            for (j = 9 ; j < tokens.length ; j++) {
                  valve.destNames.push(tokens[j].substring(0, 2));
            }
            valves.push(valve);
      }
      
      // Sort the valves
      valves.sort(compareValvesForSort);
      
      var id = 0;
      var k;

      // Replace with IDs
      for (i = 0 ; i < valves.length ; i++) {
            valve = valves[i];
            for (j = 0 ; j < valve.destNames.length ; j++) {
                  for (k = 0 ; k < valves.length ; k++) {                     
                        if (valve.destNames[j] == valves[k].name) {
                              valve.nearIDs.push(k);
                        }
                  }
            }
      }

      // Calculate array of distances
      var reachedYet = [];
      for (i = 0 ; i < valves.length ; i++) {
            distancesArray.push([]);
            for (j = 0 ; j < valves.length ; j++) {
                  distancesArray[i].push(0);
            }
            reachedYet.push(false);
      }
      
      var newlyReached, newlyReachedNext; // Assuming data are not symmetrical !
      var dist;
      for (i = 0 ; i < valves.length ; i++) {
            for (j = 0 ; j < valves.length ; j++) {
                  reachedYet[j] = false;
            }
            newlyReachedNext = valves[i].nearIDs.slice();
            dist = 1;
            while (newlyReachedNext.length > 0) {
                  newlyReached = newlyReachedNext.slice();
                  newlyReachedNext = [];
                  newlyReached.forEach(nr => {                    
                        if (!reachedYet[nr] && nr != i) {
                              reachedYet[nr] = true;
                              distancesArray[i][nr] = dist;
                              distancesArray[nr][i] = dist;
                              valves[nr].nearIDs.forEach(nrn => {                               
                                    newlyReachedNext.push(nrn);
                              });
                        }
                  });
                  dist++;
            }
      }
}

// Assuming we have these minutes left and we wanna go from p_idStart to p_idDest, opening this valve, how much flow will we have ?
function flowOpening(p_idStart, p_idDest, p_minutesLeft) {
      const minutesAfter = (p_minutesLeft-distancesArray[p_idDest][p_idStart]-1);
      return {idDest : p_idDest, flow : minutesAfter * valves[p_idDest].rate, minutesAfter : minutesAfter};
}

// Assumes valves are ranked in flow descending order.
var globalData;
function setItUp() {    
	  globalData = {
		  totalMax : 0,
		  chainIDsMax : [],
		  total : 0,
		  chainIDs : []
	  }
      for (var i = 0 ; i < valves.length ; i++) {
            valves[i].opened = (valves[i].rate == 0);
			if (valves[i].name == "AA") {
				globalData.startingID = i;
			}
      }
}

function establish(p_start, p_minutesLeft) {
      var dataNotOpenedYet = [];
      for (var i = 0 ; i < valves.length ; i++) {           
            if (i != p_start && !valves[i].opened) {
                  dataNotOpenedYet.push(flowOpening(p_start, i, p_minutesLeft));
            }
      }
      sortDescending(dataNotOpenedYet, [function(c) {return c.flow}, function(c) {return c.minutesAfter}, function(c) {return c.idDest}]);
      dataNotOpenedYet.forEach(data => {
            if (data.minutesAfter > 0) {
                  globalData.total += data.flow;
                  valves[data.idDest].opened = true;
                  globalData.chainIDs.push(data.idDest);
                  if (globalData.total > globalData.totalMax) {
                        globalData.totalMax = globalData.total;
                        globalData.chainIDsMax = globalData.chainIDs.slice();
                  }
                  establish(data.idDest, data.minutesAfter);
                  globalData.chainIDs.pop();
                  valves[data.idDest].opened = false;
                  globalData.total -= data.flow;
            }
      });   
}


function conclusion_16_1() {
      initialize(rawDataOfficial);
      setItUp();
      establish(globalData.startingID, 30);
	  return {answer : globalData.totalMax, chainIDsMax : globalData.chainIDsMax, valves : valves} // Good answer = 2080, chain = [7, 0, 11, 3, 1, 2]
}


// ----



// Assumes again valves are ranked in flow descending order.
var globalData;
function setItUp2() {
	  globalData = {
		  totalMax : 0,
		  chainIDsMeMax : [],
		  chainIDsElMax : [],
		  total : 0,
		  chainIDsMe : [],
		  chainIDsEl : [],
		  openableValves : 0
	  }
	  var alreadyOpen;
      for (var i = 0 ; i < valves.length ; i++) {
            alreadyOpen = (valves[i].rate == 0);
			valves[i].opened = alreadyOpen;
			if (!alreadyOpen) {				
				globalData.openableValves++;
			}
			if (valves[i].name == "AA") {
				globalData.startingID = i;
			}
      }
}

function dataForValves(p_startId, p_minutesLeft) {
      var dataNotOpenedYet = [];
      for (var i = 0 ; i < valves.length ; i++) {           
            if (i != p_startId && !valves[i].opened) {
                  dataNotOpenedYet.push(flowOpening(p_startId, i, p_minutesLeft));
            }
      }
	  sortDescending(dataNotOpenedYet, [function(c) {return c.flow}, function(c) {return c.minutesAfter}, function(c) {return c.idDest}]);
	  return dataNotOpenedYet;
}

function establish2(p_startMe, p_minutesLeftMe, p_startEl, p_minutesLeftEl) {
	if (p_minutesLeftMe == 0 && p_minutesLeftEl == 0) {
		return;
	}
	if (p_minutesLeftMe >= p_minutesLeftEl) {		
		var dataNotOpenedYet = dataForValves(p_startMe, p_minutesLeftMe);
		var foundOne = false;
		dataNotOpenedYet.forEach(data => {
			if (data.minutesAfter > 0 && (globalData.openableValves*data.flow > globalData.totalMax - globalData.total) ) {
				foundOne = true;
				openValve(data, globalData.chainIDsMe);
				updateMax();
				establish2(data.idDest, data.minutesAfter, p_startEl, p_minutesLeftEl);
				closeValve(data, globalData.chainIDsMe);
			}
		});
		if (!foundOne) {
			establish2(0, 0, p_startEl, p_minutesLeftEl);
		}
	} else {
		var dataNotOpenedYet = dataForValves(p_startEl, p_minutesLeftEl);
		var foundOne = false;
		dataNotOpenedYet.forEach(data => {
			if (data.minutesAfter > 0 && (globalData.openableValves*data.flow > globalData.totalMax - globalData.total)) {
				foundOne = true;
				openValve(data, globalData.chainIDsEl);
				updateMax();
				establish2(p_startMe, p_minutesLeftMe, data.idDest, data.minutesAfter);
				closeValve(data, globalData.chainIDsEl);
			}
		});
		if (!foundOne) {
			establish2(p_startMe, p_minutesLeftMe, 0, 0);
		}
	}
}

function openValve(p_dataOpen, p_chainToInsert) {
	globalData.total += p_dataOpen.flow;
	valves[p_dataOpen.idDest].opened = true;
	p_chainToInsert.push(p_dataOpen.idDest);
	globalData.openableValves--;
}

function updateMax() {
	if (globalData.total > globalData.totalMax) {
		globalData.totalMax = globalData.total;
		globalData.chainIDsMeMax = globalData.chainIDsMe.slice();
		globalData.chainIDsElMax = globalData.chainIDsEl.slice();
	}
}

function closeValve(p_dataOpen, p_chainToPop) {
	  p_chainToPop.pop();
	  valves[p_dataOpen.idDest].opened = false;
	  globalData.total -= p_dataOpen.flow;
	  globalData.openableValves++;
}

function conclusion_16_2() {
    //initialize(rawData1);
    initialize(rawDataOfficial);
	// 1) move me, with my minutes left
	// 2) move the elephant, with their minutes left (the one with more remaining time ALWAYS goes first, or me if tied)
	setItUp2();
    establish2(globalData.startingID, 26, globalData.startingID, 26);
	return {answer : globalData.totalMax, chainIDsMeMax : globalData.chainIDsMeMax, chainIDsElMax : globalData.chainIDsElMax, valves : valves} 
	chainIDsElMax
	// Correct answer : 2752. Ids : [9, 6, 4, 10, 8] and [7, 0, 11, 3, 1, 2]
	// Adding the "openableValves" was crucial to avoid useless operations !
}