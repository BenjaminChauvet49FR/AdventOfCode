/*
I could solve the 1st part with no coding : since one of the positions of the probe was y = 0, the highest point APEX was some triangular number -(vInit + vInit-1 + vInit-2 + ... + 1), and then we had to fall back (same sum + (-vInit+1), with vInit < 0)

Anyway, let's go for the 2nd part. IIRC vInit was equal to -yMax (considering "my" y.
*/

const DIMENSIONS = [96, 125, -144, -98];
const XMIN = DIMENSIONS[0]; 
const XMAX = DIMENSIONS[1];
const YMIN = -DIMENSIONS[3];
const YMAX = -DIMENSIONS[2];

function conclusion_17_2() {
	const vVertMin = -YMAX-1; 
	const vVertMax = YMAX;
	const vHorizMin = 1;
	const vHorizMax = XMAX;
	var vx, vy;
	var count = 0;
	for (vy = vVertMin; vy <= vVertMax ; vy++) {
		for (vx = vHorizMin; vx <= vHorizMax ; vx++) {
			if (canReachTarget(vx, vy)) {
				if (count < 100) {
					console.log(vx + " " + vy);
				}
				count++;
			}
		}
	}
	return count;
}

function canReachTarget(p_vx, p_vy) {
	var x = 0;
	var y = 0;
	var vx = p_vx;
	var vy = p_vy;
	while (x <= XMAX && y <= YMAX) {
		x += vx;
		y += vy;
		if (vx == 0) {
			if (x < XMIN) {
				return false;
			}
		} else {			
			vx--;
		}
		vy++;
		if (x >= XMIN && y >= YMIN && x <= XMAX && y <= YMAX) {
			return true;
		}
	}
	return false;
}