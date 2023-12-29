var gBest = -1;
var gAttack = 9;
var gHP = 51;

function conclusion_22_1() {
	gBest = -1;
	conclusion_22_aux(50, 447, gHP, 0, 0, 0, 53, false);
	conclusion_22_aux(52, 427, gHP-2, 0, 0, 0, 73, false);
	conclusion_22_aux(50, 387, gHP, 6, 0, 0, 113, false);
	conclusion_22_aux(50, 327, gHP, 0, 6, 0, 173, false);
	conclusion_22_aux(50, 271, gHP, 0, 0, 5, 229, false);
	return gBest;
} // Exactly 900 for (51, 9). And quickly obtained ! 

function conclusion_22_aux(p_myHP, p_manaLeft, p_bossHP, p_countArmor, p_countPoison, p_countRecharge, p_manaSpent, p_hardMode) { // Hard mode added for part 2 ;)
	if (p_manaSpent > gBest && gBest != -1) {
		return;
	}
	var myHP = p_myHP;
	var bossHP = p_bossHP;
	var manaLeft = p_manaLeft;
	var countArmor = p_countArmor;
	var countPoison = p_countPoison;
	var countRecharge = p_countRecharge;
	// Start of enemy turn effects
	if (countArmor > 0) {countArmor--;}
	if (countPoison > 0) {bossHP-=3; countPoison--;}
	if (countRecharge > 0) {manaLeft+=101; countRecharge--;}
	if (bossHP <= 0) {
		testBest(p_manaSpent);
		return;
	}
	
	// Ennemy attacks
	if (countArmor > 0) {
		myHP -= Math.max(gAttack-7,1); 
	} else {
		myHP -= gAttack;
	}
	// Start of my turn effects
	if (p_hardMode) {
		myHP--;
	}
	if (countArmor > 0) {countArmor--;}
	if (countPoison > 0) {bossHP-=3; countPoison--;}
	if (countRecharge > 0) {manaLeft+=101; countRecharge--;}	
	if (myHP <= 0) { // Accidentally good if you replace myHP with p_myHP and don't take a decision first (e.g. you call 50, 500, gHP, 0, 0, 0, 0)
		return;
	} else if (bossHP <= 0) {
		testBest(p_manaSpent);
		return;
	} else if (manaLeft < 53) {
		return; 
	} else {
		var mc = 53;
		conclusion_22_aux(myHP, manaLeft-mc, bossHP-4, countArmor, countPoison, countRecharge, p_manaSpent+mc, p_hardMode);	
		mc = 73
		if (manaLeft >= mc) {
			conclusion_22_aux(myHP+2, manaLeft-mc, bossHP-2, countArmor, countPoison, countRecharge, p_manaSpent+mc, p_hardMode);	
		}		
		mc = 173
		if (manaLeft >= mc && countPoison == 0) {
			conclusion_22_aux(myHP, manaLeft-mc, bossHP, countArmor, 6, countRecharge, p_manaSpent+mc, p_hardMode);
		} 
		mc = 229
		if (manaLeft >= mc && countRecharge == 0) {
			conclusion_22_aux(myHP, manaLeft-mc, bossHP, countArmor, countPoison, 5, p_manaSpent+mc, p_hardMode);
		} 
		mc = 113
		if (manaLeft >= mc && countArmor == 0) {
			conclusion_22_aux(myHP, manaLeft-mc, bossHP, 6, countPoison, countRecharge, p_manaSpent+mc, p_hardMode);
		} 
	}
}

function testBest(p_manaSpent) {	
	if (gBest == -1) {
		gBest = p_manaSpent;
	} else {
		gBest = Math.min(gBest, p_manaSpent);
	}
}



function conclusion_22_2() {
	gBest = -1;
	// First HP loss on hard mode = we start at 49
	conclusion_22_aux(49, 447, gHP, 0, 0, 0, 53, true);
	conclusion_22_aux(51, 427, gHP-2, 0, 0, 0, 73, true);
	conclusion_22_aux(49, 387, gHP, 6, 0, 0, 113, true);
	conclusion_22_aux(49, 327, gHP, 0, 6, 0, 173, true);
	conclusion_22_aux(49, 271, gHP, 0, 0, 5, 229, true);
	return gBest;
}

// My first part had SOOO many bugs that didn't prevent me to win, yet I lost in the 2nd part...