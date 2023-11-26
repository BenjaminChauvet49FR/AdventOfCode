const rawData = [
"Tristram to AlphaCentauri = 34",
"Tristram to Snowdin = 100",
"Tristram to Tambi = 63",
"Tristram to Faerun = 108",
"Tristram to Norrath = 111",
"Tristram to Straylight = 89",
"Tristram to Arbre = 132",
"AlphaCentauri to Snowdin = 4",
"AlphaCentauri to Tambi = 79",
"AlphaCentauri to Faerun = 44",
"AlphaCentauri to Norrath = 147",
"AlphaCentauri to Straylight = 133",
"AlphaCentauri to Arbre = 74",
"Snowdin to Tambi = 105",
"Snowdin to Faerun = 95",
"Snowdin to Norrath = 48",
"Snowdin to Straylight = 88",
"Snowdin to Arbre = 7",
"Tambi to Faerun = 68",
"Tambi to Norrath = 134",
"Tambi to Straylight = 107",
"Tambi to Arbre = 40",
"Faerun to Norrath = 11",
"Faerun to Straylight = 66",
"Faerun to Arbre = 144",
"Norrath to Straylight = 115",
"Norrath to Arbre = 135",
"Straylight to Arbre = 127"
];

const gData = {};

function init() {
	places = []; 
	distanceLists = [];
	var p1, p2, d, tokens;
	for (var i = 0 ; i < rawData.length ; i++) {
		tokens = rawData[i].split(" ");
		p1 = getIndexInListWithAdd(places, tokens[0]);
		p2 = getIndexInListWithAdd(places, tokens[2]);
		d = parseInt(tokens[4], 10);
		distanceLists.push({
			p1 : p1,
			p2 : p2, 
			d : d
		});
	}
	gData.nbPlaces = places.length;
	gData.distances = generateDoubleEntryArray(gData.nbPlaces, gData.nbPlaces, 0);
	for (var i = 0 ; i < distanceLists.length ; i++) {
		p1 = distanceLists[i].p1;
		p2 = distanceLists[i].p2;
		d = distanceLists[i].d;
		gData.distances[p1][p2] = d;
		gData.distances[p2][p1] = d;
	}
}

const gSolution = {
	bestDistance : 9999
}

function conclusion_9_1() {
	init();
	gSolution.bestDistance = 9999;
	var placesVisited = generateArray(gData.nbPlaces, false);
	for (var i = 0 ; i < placesVisited.length ; i++) {
		placesVisited[i] = true;
		conclusion_9_1_aux(placesVisited, gData.nbPlaces-1, i, 0);
		placesVisited[i] = false;
	}		
	return gSolution.bestDistance;
	
}

function conclusion_9_1_aux(p_placesSeen, p_numberLeft, p_lastCity, p_distance) {
	if (p_distance > gSolution.bestDistance) {
		// Do nothing
	} else if (p_numberLeft == 0) {
		gSolution.bestDistance = p_distance;
	} else {
		for (var i = 0 ; i < gData.nbPlaces ; i++) {
			if (!p_placesSeen[i]) {
				p_placesSeen[i] = true;
				conclusion_9_1_aux(p_placesSeen, p_numberLeft-1, i, p_distance+gData.distances[i][p_lastCity])
				p_placesSeen[i] = false;
			}
		}
	}
}

function conclusion_9_2() {
	init();
	gSolution.bestDistance = 0;
	var placesVisited = generateArray(gData.nbPlaces, false);
	for (var i = 0 ; i < placesVisited.length ; i++) {
		placesVisited[i] = true;
		conclusion_9_2_aux(placesVisited, gData.nbPlaces-1, i, 0);
		placesVisited[i] = false;
	}		
	return gSolution.bestDistance;
	
}

function conclusion_9_2_aux(p_placesSeen, p_numberLeft, p_lastCity, p_distance) {
	if (p_numberLeft == 0) {
		gSolution.bestDistance = Math.max(p_distance, gSolution.bestDistance);
	} else {
		for (var i = 0 ; i < gData.nbPlaces ; i++) {
			if (!p_placesSeen[i]) {
				p_placesSeen[i] = true;
				conclusion_9_2_aux(p_placesSeen, p_numberLeft-1, i, p_distance+gData.distances[i][p_lastCity])
				p_placesSeen[i] = false;
			}
		}
	}
}

