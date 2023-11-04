const rawDataOfficial = [
"..##..#|#..#.#.||........|||...#..|....||......|..",
"##.#.#....##..###...##|#...|...||.#...#|.|.#...#|.",
"....##|....|#.........#|..|......#...##.#..|....##",
"###...||#|.......#|..#.#||...|....|......||..|..|.",
"......||.|.....#.#####.#.#.|...|##....#...#.......",
"#..|..#.|.......#......#.#|.........|##....##.||#.",
"|##..#|...|.#.....#..|.||#.|..##..#...||#.#.|.....",
"...|.#.|....||...#.||#|...|..#.#........|.|||....#",
"..|||#.|...#.##.||.......#.|.#.|..|#|..|.|##.#...#",
"|#...#.....#...#...#||..|.......|.|..|.##..#.#..#.",
"......||...#.#||...|.||.|#.|..##|.||....#..##.##..",
"#|........#|...|#.|.||#||...#..|#...#...##.|.|....",
"|#.||..##|#.|.|....#.#.......|.#.|.|.#.....#.|....",
"....###.|.#...|#.|##.||....|#.#....#...|...||.|..#",
".....#..#|..|#.#..###..#.|#.....###.|......#|.#.|.",
"||.##....|....#..||#.#....|.##.|...#.|##..........",
"#|#.#..|..|#....#.#.|..||...|..........#|.........",
".#|.##..|.|.|..#|...|..|..|.#....|#|.....#|.#...|.",
"|....|.|..#..#|..#.###.|||......|.###..|..........",
"#|#.#.......|...|||.||##.....##..||...|..##...##..",
".|||...#.|....##....#..#..........|..#..........|.",
".#....#...#..##....#.#......||...##....|...#..|.|.",
"|||....||#....|...|.....#.#..||.|.|..#..|...||....",
"###...|#|...|...||.##.#....|.....##....#|#.#|#||.#",
"..#.|....#|.|..#......#..|..|#|....#.......#.|#..|",
".##..|#.|......|..#.##..#.#....|#.....#...|.....#.",
".|.|.....|..|..|..........|....#..##..#|.##.|..||#",
"|..#.|.|..#......#||...||.#..#..|.......|.#.|.....",
"|....|.#..#||....|#.#|....#|..#|.#.|##.....|.||.#.",
"....|#.||.#..#....||||..|.|#.|#...|..|#.#.#|#..###",
"#....#.#..|..#|.|.|..||.#......|......|.|......#|#",
"|##|......||.#...#......#.|..||....|.#..........#.",
"##...|...#.....#...|.#..||...|.#|.##...|.#...#.|..",
"...|..||...#.#....#|.#...###......#|#.|.|.#|.....#",
".#||...##....|...##.#|.#.#..#.........#..#....||#.",
"....#.....|..|.|..#|.......|.|..#....#|.#......#.#",
"........#.|....#..|..|..|...|.|#|.#.#......#|..||.",
"...#...#..#.||#|||...#.|........|#.#|........###.#",
"###..#.|..|...||..||......|##.||...#.|.|##.|.#|##|",
"|#||||#|..|..|..||.....#|.#....#..#......#...##.||",
"...#..|..###.#.|..|#.||..|.#.||....#|#|##...#..|.#",
".##.#..|#|##.|...#..|.##..|.#||.#.|#..#....##.....",
".#.#.|......|....#.....|||.||...#.#.||.|.||#|.#..|",
".....#.#..|.|##.....|.|#|.##.#...|..#......##.|...",
"##.#.#.##|.#.||#..|.|.|.|.|#.##.|#.|...#......#||.",
".....|..#......#.#..|##||||..|..#...#|#...|#...|##",
"....#..|..|.|...|.|...|#....#.#.|.#..||...|#.||...",
"...|..|||.#|.||.|#.##.|....#|.||.......#...#.|...#",
"....#.|.||||.....##........#.......#....|#|##....#",
".#.|#||...|..|...|..|...##.#||...||......#.||##..#"];

const rawDataUnofficial = [
".#.#...|#.",
".....#|##|",
".|..|...#.",
"..|#.....#",
"#.#|||#|#|",
"...#.||...",
".|....|...",
"||...#|.#|",
"|.||||..|.",
"...#.|..|."];

const rawData = rawDataOfficial;

var dynamicData;
var gData;

function init() {
	dynamicData = [null, null];
	gData = {};
	gData.xLength = rawData[0].length;
	gData.yLength = rawData.length;
	dynamicData[0] = generateArrangedDoubleEntryArray(gData.xLength, gData.yLength, function(x, y) {return rawData[y].charAt(x)});
	dynamicData[1] = generateArrangedDoubleEntryArray(gData.xLength, gData.yLength, function(x, y) {return "."});
}

function conclusion_18_1() {
	init();
	var iOld = 0;
	var iNew = 1;
	var countLumb = 0;
	var countWood = 0;
	//const NB_GEN = 10;
	const NB_GEN = 10;
	for (var i = 0 ; i < NB_GEN ; i++) {
		for (var y = 0 ; y < gData.yLength ; y++) {
			for (var x = 0 ; x < gData.xLength ; x++) {
				countLumb = 0;
				countWood = 0; // Very not optimal but who cares...
				existingOrthoDiagonalNeighborsCoors(x, y, gData.xLength, gData.yLength).forEach(coors => {
					switch(dynamicData[iOld][coors.y][coors.x]) {
						case '|' : countWood++; break;
						case '#' : countLumb++; break;
					}
				});
				if (dynamicData[iOld][y][x] == '.' && countWood >= 3) {
					dynamicData[iNew][y][x] = '|';
				} else if (dynamicData[iOld][y][x] == '|' && countLumb >= 3) {
					dynamicData[iNew][y][x] = '#';
				} else if (dynamicData[iOld][y][x] == '#' && (countWood == 0 || countLumb == 0)) {
					dynamicData[iNew][y][x] = '.';
				} else {
					dynamicData[iNew][y][x] = dynamicData[iOld][y][x];
				}
			}
		}
		iNew = 1-iNew;
		iOld = 1-iOld;
	}
	
	// Victory lap
	countLumb = 0;
	countWood = 0;
	for (var y = 0 ; y < gData.yLength ; y++) {
		for (var x = 0 ; x < gData.xLength ; x++) {
			switch(dynamicData[iOld][y][x]) {
				case '|' : countWood++; break;
				case '#' : countLumb++; break;
			}
		}
	}
	return countWood*countLumb;
} 



function conclusion_18_2() { // TODO : Great, it's "find a period" time ! ... or is it ?
	init();
	var iOld = 0;
	var iNew = 1;
	var countLumb = 0;
	var countWood = 0;
	var foundWood, foundLumb;
	var coors, cc;
	const NB_GEN = 1000000000; // We have no choice. We must find a period !
	//const NB_GEN = 10;
	var coorsAround;
	var changed;
	var previousIter = -1;
	var periodDuration;
	var treeOfSeenConfigs = {branches : []};
	cc = new CheckCollectionDoubleEntry(gData.xLength, gData.yLength);
	var x, y;

	for (y = 0 ; y < gData.yLength ; y++) {
		for (x = 0 ; x < gData.xLength ; x++) {
			cc.add(x, y);
		}
	}

	var changeList;
	var coorsAround;
	for (var i = 0 ; i < NB_GEN ; i++) {
		changeList = [];
		cc.list.forEach(coors => {
			y = coors.y;
			x = coors.x;
			coorsAround = existingOrthoDiagonalNeighborsCoors(x, y, gData.xLength, gData.yLength);
			if (dynamicData[iOld][y][x] == '.') {
				countWood = 0;
				for (var j = 0 ; j < coorsAround.length ; j++) {
					coors = coorsAround[j];
					if (dynamicData[iOld][coors.y][coors.x] == '|') {
						countWood++;
						if (countWood == 3) {
							changeList.push({x : x, y : y, value : '|'});
							break;
						}
					} 
				}
			} else if (dynamicData[iOld][y][x] == '|') {
				countLumb = 0;
				for (var j = 0 ; j < coorsAround.length ; j++) {
					coors = coorsAround[j];
					if (dynamicData[iOld][coors.y][coors.x] == '#') {
						countLumb++;
						if (countLumb == 3) {
							changeList.push({x : x, y : y, value : '#'});
							break;
						}
					} 
				}					
			} else {
				foundWood = false;
				foundLumb = false;
				for (var j = 0 ; j < coorsAround.length ; j++) {
					coors = coorsAround[j];
					c2 = dynamicData[iOld][coors.y][coors.x];
					if (c2 == '#') {
						foundLumb = true;
					} else if (c2 == '|') {
						foundWood = true;
					} 
					if (foundLumb && foundWood) {
						break;
					}
				}
				if (j == coorsAround.length) {
					changeList.push({x : x, y : y, value : '.'});
				}
			}
		});
		// Change and prepare next generation
		cc.clean();
		changeList.forEach(coorsVal => { 
			y = coorsVal.y;
			x = coorsVal.x;
			dynamicData[iOld][y][x] = coorsVal.value;
			cc.add(x, y);
			coorsAround = existingOrthoDiagonalNeighborsCoors(x, y, gData.xLength, gData.yLength);
			coorsAround.forEach(coors => {
				cc.add(coors.x, coors.y);
			});
		});
		
		// Trying to jump through time...
		if (previousIter == -1) {			
			previousIter = addNewConfig(treeOfSeenConfigs, i);
			if (previousIter != -1) {
				const periodDuration = i-previousIter; // Everything went better than expected ! "previousIter" = 417, i = 445.
				while (i < NB_GEN-periodDuration) {
					i += periodDuration; 
				}
			}
		}
	}	
	
	// Victory lap
	countLumb = 0;
	countWood = 0;
	for (var y = 0 ; y < gData.yLength ; y++) {
		for (var x = 0 ; x < gData.xLength ; x++) {
			switch(dynamicData[iOld][y][x]) {
				case '|' : countWood++; break;
				case '#' : countLumb++; break;
			}
		}
	}
	return countWood*countLumb;
} 


// TODO : May be generalizable ; I copy-pasted it from 2020-22. However, I want to handle more problems with trees before I can do a great copy-paste.
// So here, we sort land configurations by the time they were first observed in order to see if any land config appears twice (we are looking for that period !). The thing is, there is up to 3^2500 possible configs. So good luck...
// The tree is actually of depth (nb of spaces + 1), as the leaf contains the iteration
function addNewConfig(p_treeOfConfigs, p_iteration) {
	var newBranch = {subtree : p_treeOfConfigs, actuallyNew : false};
	var x, y;
	for (y = 0 ; y < gData.yLength ; y++) { // Run all spaces. 
		for (x = 0 ; x < gData.xLength ; x++) {
			newBranch = tryToInsert(newBranch.subtree, dynamicData[0][y][x]);
		}
	}
	if (newBranch.actuallyNew) { // We have run (nb spaces) but there is still one leaf to insert... or to read
		tryToInsert(newBranch.subtree, p_iteration); 
		return -1;
	} else {
		return newBranch.subtree.branches[0].node; 
	}
}

// Tries to insert an array in a subtree (imbricated arrays)
// If successful, return {true, singleton of the new tree}
// Otherwise, return the subtree containing it
function tryToInsert(p_subtree, p_eltToAdd) {
	for (var i = 0 ; i < p_subtree.branches.length ; i++) {
		if (p_subtree.branches[i].node == p_eltToAdd) {
			return {actuallyNew : false, subtree : p_subtree.branches[i]}
		} 
	}
	p_subtree.branches.push({ 
		node : p_eltToAdd,
		branches : []
	});
	return {
		actuallyNew : true,
		subtree : p_subtree.branches[p_subtree.branches.length-1]
	}
}