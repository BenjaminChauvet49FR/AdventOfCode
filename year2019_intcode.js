function readIntCode(p_data) {
	for (var ri = 0 ; ri < p_data.length ; ri+=4) {
		if (p_data[ri+1] > p_data.length || p_data[ri+2] > p_data.length || p_data[ri+3] > p_data.length) {
			return -1;
		}
		if (p_data[ri] == 1) {
			p_data[p_data[ri+3]] = p_data[p_data[ri+1]]+p_data[p_data[ri+2]];
		}
		if (p_data[ri] == 2) {
			p_data[p_data[ri+3]] = p_data[p_data[ri+1]]*p_data[p_data[ri+2]];			
		}
		if (p_data[ri] == 99) {
			return p_data[0];
		}
	}
	return -1;
}