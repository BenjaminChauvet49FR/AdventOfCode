// Utilitary in double entry arrays

/*
A double entry array contains some stuff and some regions that are delimited by element p_barrier
We fill the region of space (p_x, p_y) by propagation and count the region size filled this way.
*/
function countRegionSizeAndFill(p_array, p_barrier, p_x, p_y) {
	var listCoors = [{x : p_x, y : p_y}];
	var x, y;
	var total = 0;
	var coors;
	while (listCoors.length > 0) {
		coors = listCoors.pop();
		x = coors.x;
		y = coors.y;
		if (p_array[y][x] != p_barrier) {
			total++;
			p_array[y][x] = p_barrier;
			if (y > 0) {
				listCoors.push({x : x, y : y-1});
			}
			if (x > 0) {
				listCoors.push({x : x-1, y : y});
			}
			if (y < p_array.length-1) {
				listCoors.push({x : x, y : y+1});
			}
			if (x < p_array[0].length-1) {
				listCoors.push({x : x+1, y : y});
			}
		}
	}
	return total;
}