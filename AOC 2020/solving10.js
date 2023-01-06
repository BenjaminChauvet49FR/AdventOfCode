const dataOfficial = [
47   ,
61   ,
131  ,
15   ,
98   ,
123  ,
32   ,
6    ,
137  ,
111  ,
25   ,
28   ,
107  ,
20   ,
99   ,
36   ,
2    ,
97   ,
88   ,
124  ,
138  ,
75   ,
112  ,
52   ,
122  ,
78   ,
46   ,
110  ,
41   ,
64   ,
63   ,
16   ,
93   ,
104  ,
105  ,
91   ,
27   ,
45   ,
119  ,
14   ,
1    ,
65   ,
62   ,
118  ,
37   ,
79   ,
77   ,
19   ,
71   ,
35   ,
130  ,
69   ,
5    ,
44   ,
9    ,
48   ,
125  ,
136  ,
103  ,
140  ,
53   ,
126  ,
106  ,
55   ,
129  ,
139  ,
87   ,
68   ,
21   ,
85   ,
76   ,
31   ,
113  ,
12   ,
100  ,
24   ,
96   ,
82   ,
13   ,
70   ,
72   ,
86   ,
26   ,
117  ,
58   ,
132  ,
114  ,
40   ,
54   ,
133  ,
51   ,
92   ,
];

const dataExample = [
28,
33,
18,
42,
31,
14,
46,
20,
48,
47,
24,
23,
49,
45,
19,
38,
39,
11,
1 ,
32,
25,
35,
8 ,
17,
7 ,
9 ,
4 ,
2 ,
34,
10,
3 ,
];

const data = dataOfficial;

function conclusion_10_1() {
	data.sort(function(a, b) {return a-b});
	var gap3 = data[0] == 3 ? 1 : 0;
	var gap1 = data[0] == 1 ? 1 : 0;
	var i = 1;
	while (i < data.length && data[i] - data[i-1] <= 3) {
		if (data[i]-data[i-1] == 3) {
			gap3++;
		}
		if (data[i]-data[i-1] == 1) {
			gap1++;
		}
		i++;
	}
	return (gap3+1)*gap1; // Not 1608 (missed the last gap) or 1675. // Compared with data[i+1]-data[i] ...
}


function conclusion_10_2() {
	var max = 0;
	for (var i = 0 ; i < data.length ; i++) {
		max = Math.max(data[i], max);
	}
	var adaptatorExist = generateArray(max+1, false); // Which of these values from 0 (excluded) to the max adapter adaptatorExist among the adapters ?
	for (var i = 0 ; i <= max ; i++) {
		adaptatorExist[data[i]] = true;
	}
	var reachIMinus1 = 0;
	var reachIMinus2 = 0;
	var reachIMinus3 = 0;
	var reachI = 0;
	for (var i = 1 ; i <= max ; i++) {
		reachIMinus3 = reachIMinus2;
		reachIMinus2 = reachIMinus1;
		reachIMinus1 = reachI; // Values previously outdated !
		if (!adaptatorExist[i]) {
			reachI = 0;
		} else {			
			reachI = reachIMinus1 + reachIMinus2 + reachIMinus3; 
			if (i <= 3) { // The adaptator exists and we are below 3.
				reachI++;
			}
		}
	}
	return reachI;
} // Correct answer = 12401793332096 (existing examples = great, it allowed me to submit my first answer as the correct one)