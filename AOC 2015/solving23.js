/*jio a, +18 (a 0)
inc a (1)
tpl a (3)
inc a (4)
tpl a (12)
tpl a (36)
tpl a (108)
inc a (109)
tpl a (327)
inc a (328)
tpl a (984)
inc a
inc a (1458k+986)
tpl a
tpl a
tpl a (26622)
inc a (26623)
jmp +22
tpl a (from "jio a" : 3)
inc a (4)
tpl a (12)
inc a 
inc a
tpl a (42)
inc a
tpl a (129)
inc a
inc a
tpl a (393)
tpl a (1179)
inc a
inc a
tpl a (3543)
inc a
inc a
tpl a (10635)
inc a
inc a
tpl a (31911)
jio a, +8 #This instruction puts an end
inc b # Where we loop from
jie a, +4
tpl a
inc a
jmp +2
hlf a
jmp -7*/

function conclusion_23_1() {
	var a = 26623;
	var b = 0;
	var ok = false;
	while (a != 1) {
		b++;
		ok = false;
		if (a%2 == 0) {
			a/=2;
			ok = true; // Paranoid
		} else {
			a*=3;
			a+=1;
		}
	}
	return b;
}

function conclusion_23_2() {
	var a = 31911;
	var b = 0;
	var ok = false;
	while (a != 1) {
		b++;
		ok = false;
		if (a%2 == 0) {
			a/=2;
			ok = true; // Paranoid
		} else {
			a*=3;
			a+=1;
		}
	}
	return b;
}


