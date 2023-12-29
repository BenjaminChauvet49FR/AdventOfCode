// https://en.wikipedia.org/wiki/MD5
// https://www.comparitech.com/blog/information-security/md5-algorithm-with-examples/

const s = 
[7, 12, 17, 22,  7, 12, 17, 22,  7, 12, 17, 22,  7, 12, 17, 22,
 5,  9, 14, 20,  5,  9, 14, 20,  5,  9, 14, 20,  5,  9, 14, 20,
 4, 11, 16, 23,  4, 11, 16, 23,  4, 11, 16, 23,  4, 11, 16, 23,
 6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21];
 
const k = [
0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,
0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,
0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x02441453,0xd8a1e681,0xe7d3fbc8,
0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,
0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,
0x289b7ec6,0xeaa127fa,0xd4ef3085,0x04881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,
0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,
0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391
];

// https://tutorialspoint.com/string-to-binary-in-javascript I'll take the "c.charCodeAt(0).toString(2)"

// https://cs.indstate.edu/~fsagar/doc/paper.pdf
// https://www.hashgenerator.de/hash-functions/md5/

function getMD5(g_message) {
	var h0 = 0x67452301;
	var h1 = 0xEFCDAB89;
	var h2 = 0x98BADCFE;
	var h3 = 0x10325476;
	var f, g;
	// Here, we assume we only have only one chunk of 512 bits
	var message = [];
	var bitsChar;
	g_message.split('').forEach(c => {
		bitsChar = c.charCodeAt(0).toString(2);
		while (bitsChar.length < 8) {
			bitsChar = "0"+bitsChar;
		}
		for (var i = 0; i <= 7 ; i++) {
			message.push(bitsChar.charAt(i) == '1');
		}
	});
	
	const l = message.length;
	message.push(true);
	for (var i = l+1 ; i < 448 ; i++ ) {
		message.push(false);
	}
	const ll = numberToBinary(l);
	while (message.length < 512-ll.length) {
		message.push(false);
	}
	ll.forEach(lll => {
		message.push(lll);
	});
	var M = [];
	for (var i = 0 ; i < 16 ; i++) {
		M.push(0);
		for (var j = i*32 ; j < (i+1)*32 ; j++) {
			M[i]*=2;
			if (message[j]) {				
				M[i]++;
			}
		}
	}
	var a = h0;
	var b = h1;
	var c = h2;
	var d = h3;
	var bb;
	var overflow;
	for (var i = 0 ; i < 64 ; i++) {
		if (0 <= i && i <= 15) {
			f = (b & c) | ((-b-1) & d)
			g = i;
		}
		if (16 <= i && i <= 31) {
			f = (b & d) | ((-d-1) & c)
			g = (5*i+1)%16
		}
		if (32 <= i && i <= 47) {
			f = (b^c)^d
			g = (3*i+5)%16
		}
		if (48 <= i && i <= 63) {
			f = c^(b|(-d-1))
			g = (7*i)%16
		}
		f += a+k[i]+M[g]
		f %= 2**32
		a = d;
		d = c;
		c = b;
		bb = f;
		for (var j = 0 ; j < s[i] ; j++) {
			overflow = (bb >= 2**31)
			bb*=2;
			bb%=2**32;
			if (overflow) {
				bb++;
			}
		}
		b = b + bb;
		b %= 2**32;
		//console.log(numberToHexadecimalPad8char(a)+numberToHexadecimalPad8char(b)+numberToHexadecimalPad8char(c)+numberToHexadecimalPad8char(d));
	}
	return numberToHexadecimalPad8char(a)+numberToHexadecimalPad8char(b)+numberToHexadecimalPad8char(c)+numberToHexadecimalPad8char(d);
}

function numberToHexadecimalPad8char(p_number) {
	var answer = numberToHexadecimal(p_number);
	while (answer.length < 8) {
		answer = "0"+answer;
	}
	return answer;
}