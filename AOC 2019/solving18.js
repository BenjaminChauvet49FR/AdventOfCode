var rawDataPersonal = [
"#################################################################################",
"#.............#.....#.................#.#.....#...#.......#...................#a#",
"#.#####.#######.#.###.#########.#####.#.#.###Y###.#.#####.#.#####.###########.#.#",
"#.#...#.#.....#.#..c#.........#...#.#...#...#.#...#.#.#...#.#.#...#...#...#.....#",
"#.#.###.#.###.#.###.#.###########.#.###.#.#.#.#.#.#.#.#.#.#.#.#.###.#.#.#.#######",
"#.#...#...#.#...#.#...#...........#.#...#.#.#...#.#.#.#.#.#.#.#...#.#.#.#.#.....#",
"#.#.#.#####.#####.#####.###.#######.#.###.#.#######.#.#.###.#.###.#.#.#.#.#.###.#",
"#.#.#.............#.#...#.#.#..e..#.....#.#...........#...#.#...#...#...#.....#.#",
"#.#########.#####.#.#.###.#.#.###.#####.#.###############.#T#.#.###############.#",
"#...#..k....#.....#.#.Z.#...#...#.....#.#.........#.#.....#.#.#.....#.L.....#...#",
"###.#.#.#######.###.###.#######.#####.#.#########.#.#.###.#.#.###.#.###.###.#.###",
"#...#.#.#.....#.#...#...#.....#.....#.#.#...#...#.#.#.#...#.#.#...#...#.#...#...#",
"#.###.#.#.###.#.#.###.###.###.#####.#.#.#.#.#.#.#.#.#.###.#.###.#####.#.#.#####.#",
"#.#...#.#.#...#.#...#.....#.#.....#.#.#.#.#...#...#.#...#.#.#...#.#...#.#.#.....#",
"#.###.#.#.#.###.###.#######.#.#####.#.#.#.#########.###.###.#.###.#.###.#.#.###.#",
"#...#.#.#.#...#...#.........#.#.....#.#.#.............#.......#...#.#...#.#...#.#",
"###.#.###.###.###.###.#.#####.#.#####.###############.#########.#.#.###.#.###.#.#",
"#.....#...#...#.J...#.#.#.....#.....#...#...........#.#...#...#.#.......#...#.#.#",
"#######.###.#######.#.###.#####.#######.#########.#.#.###.#.#.#########.#####.#.#",
"#.......#.#...#...#...#...#...#.#.......#.....O.#.#.#.#...#.#.......#...#.....#s#",
"#.#######.###.#.#.#####.###.#.#.#.#######.#####.#.#.#.#.###.#####.#.#.###.#####.#",
"#...#...#...#...#...#.#.#...#...#.......#.....#.#.#.#.#...#.#...#.#.#...#...#...#",
"###.#.#.#.#########.#.#.#.#######.#####.#.#####.#.###.###.#.###.###.#.#####.#.###",
"#.#...#.#.........#...#...#....d#.....#.#.#.....#.#...#...#.#.#...#.#.#.....#.#.#",
"#.#####.#######.#######.###.###.#####.#.#.#.#####.#.###.#.#.#.###.#.#.#.#####.#.#",
"#...#.#.......#.......#...#.#...#.....#.#.#.....#.......#.#.....#.#.#.#.#.......#",
"#.#.#.#######.#.#.#####.###.#.#####.###.#.#####.#############.###.#.#.#.#######.#",
"#.#...#.....#.#.#...#...#...#.....#...#.#.#...#.#...........#.#...#.#.#.#...#.#.#",
"#.###.###.#.#.#.###.#.###.#######.#####.#.###.#.#.#########.#.#.###.#.#.#.#.#.#.#",
"#...#.....#.#.#...#...#...#.......#.....#...#.#.#.....#...#...#...#.#.#...#.#...#",
"#.#.#######.#.###.#####.###.#######.#######.#.#.#####.###.#######.#.#####.#.#.###",
"#.#.#.....#.#.#.#.#.#...#.#.#...#...#...#...#.#.....#...#.....#...#.....#.#.#w#.#",
"#.#.#.###.#.#.#.#.#.#.###.#.#.#.###.#.#.#.###.#.###.###.#.###.#.###.###.###.#.#.#",
"#.#.#.#.#.#.#.#.#.#.#.#m..#...#...#...#.#.#...#...#...#.#...#.#.#.....#.#...#.#.#",
"###.#.#.#.###W#.#.#.#.#.#########.#####.#.#.#.###.#####.###.#.#.#######.#.###.#.#",
"#...#...#.#...#.....#.#.......#...#...#.#.#.#.#.#.....#.....#.#.........#.#.#...#",
"#.###.###.#.###.#####.#.###.###.###.#.#.#.#.#.#.#####.#######.###########.#.###.#",
"#.#...#...#.#...#.S...#...#.....#...#.#.#...#.....#.#.........#...#...#...#.....#",
"#.#.###.###.#####.#######.#######.###.#.#########.#.###########.#.#.#.#.###.#####",
"#.....#...........#.......F.......#..................f..........#...#...#.......#",
"#######################################.@.#######################################",
"#.....#.#...........#.....#.........................#...#.....#.M.......#.....#.#",
"###P#.#.#.#######.###.###.#.#######.###.#.#########.#.#.#.###.###.#####.###.#.#.#",
"#...#...#...#.#...#.....#.#.#.......#...#...#.........#...#.......#...#.....#.#.#",
"#.#.#######.#.#.###.#####.#.#.#######.#####.###############.#########.#######.#.#",
"#.#.#.....#.#.#.#...#...#.#.#.#.........#...#.......#...#.....#.....#.#.......#.#",
"#.###.###.#.#.#.#.###.#.#.#.#.###########.###.#####.#.#.#######.###.#.#.#######.#",
"#...#.#.#.#...#.#.#...#...#.#...........#...#...#.#...#.......#.#.#.#.#.........#",
"#.#.#.#.#.#.###.#.#.#####.#######.#####.###.###.#.###########.#.#.#.#.#.#######.#",
"#.#.#...#...#...#.#r#.....#.....#.....#.#...#.#.#.......#...#.....#.#...#.....#.#",
"#.#.###.#####.###.#.#######.###.#####.#.#.#.#.#.###.#####.#.#######.#.###.###.#.#",
"#.#...#.#...#...#.#.........#...#...#.#.#.#...#...#.#.....#.#......p#...#.#.#.#.#",
"###.#.#.#.#.###.#.###########.###.#.#.#.#.###.###.#.#.#####.#.###.#######.#.#.###",
"#...#.#.#.#...#.......#.....#.#...#...#.#...#.#...#.....#...#.#...#.K...#.#.#...#",
"#.#####.#.###.#######.#.###Q#.#.#######.###.#.#.#####.###.###.#.###.###.#.#.###.#",
"#.....#...#...#.#...#.#.#.#...#...#.....#...#.#.....#.#...#...#.#...#.#..j#.#...#",
"#.###.#####.###.#.#.###.#.#########.###.#.#########.###.#.#.###.#.###.#####.#.###",
"#...#.#.....#...#.#.B...#...#...#...#...#.#.......#.....#.#...#.#...........#.R.#",
"#.###.#.#######.#.#######.#.#.#.#.###.###.#.#.###.#######.###.###.#############.#",
"#.#...#.......#.#n....#...#.#.#...#...#.#...#...#.....#...#.#.....#..u..#.....#.#",
"###.#.#######.#.#####.#.###.#.#####.###.#.#####.###.###.###.###.###.###.#.###.#.#",
"#...#.#...#...#.....#.#.#...#...#.#...#.#...#...#...#...#...#.#.#...#...#.#...#.#",
"#.#####.#.#.###.#.#####.#.###.#.#.###.#.#####.#######.#####.#.###.###.###.###.#.#",
"#...#...#.#.#...#.......#.#...#.#...#...#.....#.......#.....#.U...#.#...#...#...#",
"#.#.#.###.#.#.#########.#.#####.###.###.#.#.###.#######.###########.###X#.#.###.#",
"#.#..l#...#.#...#.......#.....#...#...#.#.#o#...#.#.....#...#......x....#.#.#...#",
"#.#####C###.#.###.###########.###.#.###.#.###.###.#.###.#.#.#I#############.#.###",
"#.....#...#.#.#...#...#.....#.#...#.#...#.#...#.....#...#.#...#v......G.#...#..q#",
"###.#####.#.###.###.#.#.###.#.#.###.#.###.#.###.#####.#.#.#####.#######.#.#####.#",
"#.#y#...#.#...#.#...#.#...#.#...#...#...#.#.#...#.....#.#..i..#...#.....#...#...#",
"#.#.#.#.#.###.#.#.###.#.#.#.#####.#.###.#.#.###.#.###########H#.#.#.#####.#.#.###",
"#...#.#.#...#.#.....#.#.#.#.#...#.#.....#.#...#.#...........#.#.#.#g..#...#.#...#",
"#.###.#.###A#.#######.#.#.#.#.###.#######.###.#.#########.#.#.#.#.###.#####.###.#",
"#.#...#.....#.........#.#.#.#.#...#.....#...#.#.......#...#.#.#.#.#.#.#...#...#.#",
"###.#####################.#.#.#.#####.###.#.#.#########.###.#.###.#.#.#.#.###.#.#",
"#...#.......#.............#..t#.#...#...#.#.#.#.......#.#...#...#.#.#.N.#.....#.#",
"#.###.#####.#.#########.#######.#.#D#.#.#.#.#.#.#####.#.#.#####.#.#.###########.#",
"#.#...#...#..z#.#.......#.....#...#.#.#.#.#.#...#...#...#.#.#..h#.#.....#......b#",
"#.#.###.#.#####.#.#######.###.#####.###.#.#.#####.#.#####.#.#.###.#.###.#.#######",
"#.......#.......#...........#...........#.#.....E.#.........#...V.#...#.........#",
"#################################################################################"] // My maze. Lucky !

const rawDataClaude = [
"#################################################################################",
"#.#.........#...#....r#.......#...#.....#.....#...........#.......#......c......#",
"#X#.#####.#.#.#.#.###.#####.#.#.#.#.###.#.###.#.#######Q###.#.###.#.#####.###.#.#",
"#...#.....#...#...#.#.....#.#...#.....#.#.#...#.#.....#.....#.#.#.#.#...#.#.#.#.#",
"#.###.#############.#####.#.###########.#.#.#####.###.#.#####.#.#.###F#.#.#.#.###",
"#...#.#j......#.......P.#.#.#.......#...#.#.....#...#.#.#.....#...#...#.#...#...#",
"###.#.#.###.#.#.#######.#.###.#####.#.#.#.#####.###.#.###.#####.###.###.#######.#",
"#...#.#...#.#.#.......#.#.....#...#...#.#.....#.#...#...#.#...#.#...#...#.....M.#",
"#.###.#.###.#.#######.#.#######.#.#####.#.###.#.#.#####.#.#.###.#.#####.#.#######",
"#.#...#.#...#.#.....#.#.........#.......#.#.#.#...#.......#.....#.....#.#...#...#",
"#.#.#####.###.#.#.###.###################.#.#.###.#############.#.###.#.###.#.#.#",
"#.#...#...#...#.#...#.#...#.......#.....#...#.#...#.....#.....#.#...#.#...#...#.#",
"#.###.#.#####.#.###.#.#.#.#.#####.#.#.#####.#.#####.###.#.###.#.###.#.###.#.###.#",
"#...#.#..g..#.#.#...#.L.#.#.#..n#.#.#...#...#.....#.#..i#.#...#...#.#.#.#.#.#...#",
"#####.#####.###.#.#.#####.#.#.#.#.#####.#####.###.#.#.###.#.#####.###.#.#.#.#.###",
"#.....#...#.....#.#.#.......#.#.#...#...#...#...#...#.....#...#...#...#.#.#.#...#",
"#D#####.#.#######.###.#######.#.###.#.#.#.#.#############.###.#.###U###.#A#####.#",
"#.......#.#.H...#.....#...E...#...#...#.#.#...#.........#...#.#...#.#...........#",
"#.#######.#.###.#######.#########.#####.#.###.#.#######.#.###.###.#.###########.#",
"#.#.....#.#.#.#e........#.....N...#...#.#.#.....#.....#.#.#...#...#...#.......#y#",
"#.###.#.#.#.#.#########.#.#########.###.#.#######.###.#.###.#####.#.#.#.#####.#.#",
"#...#.#.#.#.#.....#.O.#.#.#.......#.....#.#...#.....#....z#.#...#.#.#.#.#...#.#.#",
"###.#.###.#.#.###.#.#####.#.#####.#.#####.#.#.###########.#.###.#.#.#.#.###.#.#.#",
"#.....#.V.#.#.#...#......o#.#.....#.#...#...#.T.......#.......#.#.#.#.......#.#.#",
"#######.###.#.#.#############.#####.#.#.#.###########.#########.#.###########.#.#",
"#.....#...#...#..b#...#.......#.....#.#.#.#.....#...#.........#.#.......#.....#.#",
"#.###.###.#######.#.#.#####.###.#####.###.#.#####.#.###.#####.#.#######.#.#######",
"#.#.#.#...#.....#...#...#...#...#.......#.#.#.....#...#.....#.#.......#.#.......#",
"#.#.#.#.#.#.###.#######.#.###.#########.#.#.#.#######.#####S#.#######.#.#.#####.#",
"#u#...#.#.#...#.......#.#.....#.......#.#.#.#...#...#.....#.#.....#...#.#.#.#..v#",
"#.###.#.#.###.#####.#.#.###.###.#####.#.#.#.###.#.#.#####.#######.#.###.#.#.#.#.#",
"#...#...#...#.#...#.#.#...#...#.#.#...#.#.....#.#.#.#.....#.......#.#.#.#...#.#.#",
"###.###W#####.#.###.#####.###.#.#.#.###.#.#####.#.#.#####.#.#######.#.#.###.#.###",
"#...#...#.......#...#...#.#.#...#...#...#.#.....#.#.....#...#.......#.#..d#.#...#",
"#.#######.#######.###.#.#.#.#####.###.#.#.#.#####.#####.#####.#######.###.#.###.#",
"#.......#a..#.#.Y.#...#...#.....#.....#.#.#.....#.....#...#...#...#.....#.#.#...#",
"#.#####.###.#.#.#.#.#######.#.#.#######.#.#####.###.#####.#.###.###.###.#.#.#.#.#",
"#.....#...#.#.#.#.#...#.#...#.#.#.......#.#...#.....#.....#.#.....#...#.#.#.#.#.#",
"#####.#.###.#.#.#####.#.#.###.###.#######.###.#######.#####.#.###.###.#.#.###.#.#",
"#....f#.......#....m..#.....#.......................#.......#...#.....#.......#.#",
"#######################################.@.#######################################",
"#...#.....#...#...#.#.......#.....#...........#.....#.#.......#...........#.....#",
"#.#.#.#.#.#.#.#.#.#.#.#.###.#.###.#####.#.###.###.#.#.#.#####.#.#######.#.###.#.#",
"#.#...#.#...#.#.#...#.#...#...#.........#...#...#.#...#.#...#.#.#.#...#.#.#...#.#",
"#######.#####.#.###.#.###.#############.###.###.#.###.#.#.###.#.#.#.#.#.#.#.###.#",
"#.....#.#.......#...#s#.#.#.........#...#...#...#...#.#.#.#...#...#.#...#...#.#.#",
"#.###.#.#############.#.#.#.#######.#.###.#####.#.#.###.#.#.#####.#.#########.#.#",
"#...#...#...............#.#.#.#.....#.#.#.....#t#.#...#.#.#.#.....#...#.......#.#",
"#.#.#####.###############.#.#.#.#####.#.#.###.#.#####.#.#.#.#########.#.#######.#",
"#.#.#...#.#.....#...#...#.....#.#...#.#.#.#.#.#.#.....#...#...#.......#.........#",
"#.#.#.#.#.#.###Z#.###.#.###.###.#.###.#.#.#.#.#.#.###.###.###.#.#######.#####.###",
"#.#.#.#.#...#.....#...#...#.#...#.#...#.#.#.#.#...#...#...#.#.#...#...#.#...#...#",
"###.#.#.#####.#####.#####.###.###.#.###.#.#.#.#########.###.#.#.#.###.#.#.#.###.#",
"#...#.#.....#.#.#...#...#.....#.........#...#...........#...#.#.#...#...#.#.#...#",
"#.###.#.#####.#.#.###.#.###.###############.#############.###.#####.#####.#.###.#",
"#.#...#....k....#.#...#.....#.......#...#.#.......#.....#...#...K.#.#.....#...#.#",
"#.#.#############.#####.#####.#####.#.#.#.#######.#.###.###.#####.#.#.#######.#.#",
"#...#.........#...#...#.....#...#.#...#.#.......#...#.........#...#.#.#.....#.#.#",
"#####.#######.#.###.#.#########.#.#####.#.#.###.#.###########.#.###.#.#.#####.#.#",
"#.....#.........#...#.#.........#...#...#.#...#.#.#.......#...#...#...#...#...#.#",
"#.###############B###.#.###########.#.#######.###.#.#####.#####.#.#.#####.#.###.#",
"#.....#.....#...#...#h#...........#.....#.....#...#.#...#.....#.#.#.....#.#...#w#",
"#.###.#.###.#.#.###.#####.#######.#####.#.#####.###.#.#.#########.#####.#.###.###",
"#...#...#...#.#...#.....#.......#...#.#.#.#.....#.#...#...#.....#...#.......#...#",
"#########.###.###.#####.#####.#####.#.#.#.#.#####.#######.#.###.###.#.#########.#",
"#.....#...#.....#.....#...#...#.....#.#.#...#.......#...#.#.#.......#...#.....#.#",
"#.###.#.###.#####.#######.#.###.#####.#.#.#####.#####.#.#.#.#############.###G#.#",
"#...#...#...#...#.......#.#...#.#...#...#.....#.....#.#...#.......#.......#.#...#",
"###.#####.###.#.###.###.#.#####.###.#.#######.#####.#.###########.#.#######.###.#",
"#...#.......#.#...#.#...#.#.....#...#...#...#.....#.#.......#...#.#.#.........#.#",
"#.###.#######.###.#.#.###.#.#####.#####.#.#.#####.#.#######.#.#.#.#.#.###.#####.#",
"#.....#...#...#.#.#.#...#.#.#...#.......#.#.......#...#...#...#...#.#.#.#.......#",
"#.#######.#.###.#.#####.#.#C#.#.#.#######.#########.###.#.#########.#.#.#########",
"#.......#.#...#.....R...#...#.#.#.#.....#.#.......#...#.#.....#.....#.#.........#",
"#######.#.###.###############.#.#.###.#.#.#.#####.#.#.#.#.###.#.#.###.###.#####.#",
"#.....#.#...#...#...........#.#.#.....#.#.#.....#...#..p#.#...#.#.#...#...#...#.#",
"#.#####.#.#.###.#.#########.#.#.#######.#.###.###########.###.###.#.###.#####.#.#",
"#.....#.#.#.#q#...#.....#.#.#.#.......#.#.#...#.....#...#...#...#.#...#.#x....#.#",
"#.###.#.#.#.#.#######.#.#.#.#.###.#####.#.#####.###.#.#I###.###.#.###.#.#.#####.#",
"#...#...J.#...........#...#.....#.......#.......#.....#..l..#.....#.....#.......#",
"#################################################################################" // Claude's maze
];

const rawDataGithub = [
// Données de mon "compte Github pour le labyrinthe" :
"#################################################################################",
"#.#...#.....#...............#.....#v....#.........#p....#...#...................#",
"#.#.#.#.#.#.#M#############.#.###.#####.#####.###.#.###.#.#.#################.#.#",
"#..n#...#.#...#.#...........#...#.......#.....#.....#.#...#...#.......#...#...#.#",
"#########.#####.#.###########.#.#######.#.###########.#######.#C#####.#.#.#.###.#",
"#.........#.#.....#.........#.#.#.......#...........#...........#...#.#.#...#...#",
"#.#########.#.#########.#####.#W###.###############.###.#########.###.#.#####.###",
"#.Y...#...#...#.......#z......#...#.#...#...#.....#..d#.#.#..x..#...#.#.#...#.#.#",
"#####.#.#.#.###.#.###.#####.#####.#.#.#.#.#.#.###.###.#.#.#.###.#.#.#.#.#.#.#.#.#",
"#.....#.#...#...#.#.#.....#...#...#.#.#.#.#...#.......#...#.#...#.#.....#.#...#.#",
"#.#######.#######.#.#####.#####.#####.#.#.#############.###.#.###.#########.###.#",
"#...#...#.#...#...#.#...#.....#...B...#.#.....#...#.....#...#.#.....#....t#.....#",
"#.#.#.#.#.#.#.#.###.#.#.#####.#.#######.#.###.#.#.###.###.###.#.#####.###.#####N#",
"#.#...#.#...#.#.#.....#...#...#.#...#...#...#.#.#...#.#...#...#...#...#.#...#.#.#",
"#.#####.#####.#.#########.#.###.#.#.#.#.###.#.#.###.###.###.#######.###.###.#.#.#",
"#.#...#.#.......#...#.....#...#...#.#.#.#.#.#...#.#.....#...#.....#.#...#...#.#.#",
"#.#.###.#########.#.#.###.###.#####.#.#.#.#.#####.#######.###.###.#.#.###.###.#.#",
"#.#...#.#...#.....#.#...#...#.#...#.#.#.#.#.#.....#.....#...#.#.#...#...#.#...#.#",
"#.###.#.#.#.#.#####.#.#.#####.#.###.#.###.#.#.###.###.#.###.#.#.#####.#.#J#E###.#",
"#.....#.#.#...#...#.#.#.....#.#.....#...#.#.#.#.......#.#...#.#...#...#...#.....#",
"#######.#.#####.###.#######.#.#########.#.#.#.#########.#.###.#.#.#.#########.###",
"#.......#.#.....#.I.#.....#.............#...#...#.....#.#...#.#.#.#.........#...#",
"#.#######.###.###.#.#####.#.###########.#.###.#.###.###.###.#####.#########.###.#",
"#.......#...#.#...#.....#.#.#.......#...#.#...#.#...#.....#.........#.....#.#...#",
"#.#####.###.#.#.#######.#.###.#####.#.###.#####.#.###.#######.#####.#.###.#.###.#",
"#.#...#...#.#.#.......#.#.....#.#...#...#.#...#.#...#u#.....#...#...#.#.#.#...#.#",
"#.###.#.###.#.#######.#.#######.#.#####.#.#.#.#.#.#.#.#.#.#.###.#####.#.#.###.#.#",
"#...#.#...#.....#.....#.#.....#...#...#.#...#.#.#.#...#.#.#...#.#.....#.#.#...#.#",
"###.#.###.#####.#.#####.#.#.#.#.###.#.#.#####.#.#.#####.#.#.###.#.#####.#.#.###.#",
"#...#...#.......#.#.....#.#.#.#.....#.#.#.....#.#.#.....#.#.#...#.....#.#.#.#..k#",
"#.###.###########.#.#######.#.#######.#.#.#####.###.#####.###.#.#####.#.#.#.#.###",
"#...#...........#.#.....#...#.......#.#.#...#.........#...#...#.#.....#.#...#.#.#",
"###.#.###.###.###.#####.#.#.#######.#.#.###.#.#########.#.#.###.#.#####.#####.#.#",
"#.#.#...#...#.#...#...#.#.#.#.....#.#.#.#.#.#...#.......#.#.#...#...#.....#...#.#",
"#.#.###.###.#.#.###.#.#.#.###.###.###.###.#.#####.#######.#.#.#####.#.#.#.#.###.#",
"#.#.#.....#.#.#.....#g#...#...#.#...#...#.#.......#...#...#.#...#.#.#.#.#.#.....#",
"#.#.#######.#.#######.###.#.###.###.###.#.#########.###.###.###.#.#.#.#.#######.#",
"#...#.....#.#.#.....#.#...#.......#.#...#.....#.......#.#.#...#...#.#.#.......#.#",
"#.###.###.#.#.#.###.#.###########.#.#.###.###.#.#####.#.#.###.#####.#.#######.#.#",
"#.....#.....#...#...#.A...........#.........#.......#.R.....#.......#.......#...#",
"#######################################.@.#######################################",
"#.....#.........#...........#......r#...........#.#...#.............#.......#...#",
"###.###.#.#######.#.#######.#.#####.###.#.#.###.#.#.#.#.#######.###.#.#####.###.#",
"#...#...#.........#...#...#.#.....#.....#.#...#...#.#...#...#...#.#.#.....#.....#",
"#.###.###############.#.###.#.###.#####.#.###.#####.#######.#.###.#.#####.#######",
"#.....#.......#.#.....#...#.#.#...#.....#.#.#.#.....#.......#.#...#.....#.......#",
"#.#######.###.#.#.#######.#.###.#.#######.#.#.#.#########.###.#.#######G#.#####.#",
"#.....#...#.#...#.#.......#...#.#.#.....#...#.#.#.....#..a#...#.#.....#.#i....#.#",
"#####.#.###.###.#.###.#.#####.#.###.###.#####.#.###.#.#.#.#.###.#.###.#.#######.#",
"#...#.#.#.....#.#...#.#.#.....#.....#...#...#.......#...#.#.#.....#.#.........#.#",
"#.#.#.#.#.#####.###.#.###.###########.###.#.#.#############.#.#####.#########.#.#",
"#.#.#.#.#.......#...#.....#.....#...#...#.#.#.#.............#.......#...#.....O.#",
"#.#.#.#.#########.#######.#.###.#.#.###.#.#.###.###########.#########.#.#######.#",
"#.#.#e#.........#.#.....#...#...#.#.....#.#.#...#...........#.......#.#.....#...#",
"###.#.#########.#.#.###.#####P###.#######.#.#.#########.#####.#####.#.#####.#.###",
"#...#.......#...#...#.#.#...#...#...#...#.#...#.......#.#w....#f..#...#...#.#...#",
"#.#.#######.#.#######.#.#.#####.#.#.#.#.#.#.###.#####.###.###.#.#.#####.#.#.#####",
"#.#.#...#...#.........#.#...#...#.#...#.#.#.#.......#.#...#...#.#...#...#.#.#...#",
"#.#.#.###.#######.###.#.#.#.#.###.#####.#.###.#######.#.#######.###.#.###.#.#.#.#",
"#.#...#...#.....#...#.#.#.#...#..o..#...#...#...#...#.#...#...F.#...#...#.#...#.#",
"#.#####.###.###.###.###.#####.#####.#.#.#.#.#.###.#.#.###.#.#####L###.#.#.#####.#",
"#.......#...#.#.#...#.#.....#.....#.#.#.#.#...#...#.#.#...#...#...#...#.#.....#.#",
"#K#######.#.#.#.#.###.#####.#####X###.#.#######.###.#.#.#######.#####.#.#######.#",
"#....j..#.#.#.....#...#.....#...#...#.#.#.......#...#.#.....#...#.S.#.#.........#",
"#######.###.#####.#.###.#####.#.###.#.###.#######.###.#####.#.###.#.#.###########",
"#.....#...#.....#.#...#.......#...#.#...#.....#.#.#.......#.#l....#.#.#...#.....#",
"#T#.#####.#####.#####.#.#########.#.###.#.###.#.#.#####.#.#.#######.#.#.###.###.#",
"#.#.....#.#.....#.....#.#.......#.#.#...#c#.#.#.....#...#.#...Z.#...#.#.....#...#",
"#.###.###.#.#.###.#####.#.#####.#.#.#.#.#.#.#.#####.#.#######.###.###.#.#####.#.#",
"#...#...#...#.#...#...#...#...#.#.#.#.#.#...#.....#...#.....#.#s..#...#.#.#...#.#",
"###.###.#.#####.###.###.###.#.###.#.#.###.#######.###.#.#.###.#.###.###Q#.#.#####",
"#.#.#.#.#.#...#...#...#.#...#.....#.#...#.#.....#.#...#.#.#...#.V.#.#...#.#.....#",
"#.#.#.#.#.#.#.###.#.#.#.#.#########.###.#.#.###.#.#####.#.#.#####.#.#.###.#####.#",
"#...#.#...#.#...#.#.#.#.#...#...#...#...#.#...#y..#...#.#.#.......#.#.#.......#.#",
"#.###.#####.###.#.###.#.###.#.###.###.#.#####.#####.#.#.#.#########.#.#.#.#####.#",
"#.#.....#...#.#...#...#.#...#.#.D.#.U.#.#.....#...#.#.#.#.......#...#..b#.#.....#",
"#.#####.#.###.#####.###.#.###.#.###.###.#.#####.#.#.#.#.#######.#.#######.#.###.#",
"#.H...#.#...#...........#.#...#.#.....#.#m......#...#...#.......#.#...#...#.#...#",
"#####.#.###.#############.#.#.#.#####.#.#.###############.#######.#.#.#####.#.###",
"#..q......#...............#.#.........#.#...............#...........#.......#..h#",
"#################################################################################"
];

const rawData = rawDataGithub;//rawDataClaude;
const X_LENGTH = rawData[0].length;
const Y_LENGTH = rawData.length;

const field = stringArray_to_charDoubleEntryArray(rawData);
var gData = {
	keys : [],
	nodesSector : [[],[],[],[],[],[],[],[],[],[],[],[]],
	checkerPaths : new CheckCollectionDoubleEntry(X_LENGTH, Y_LENGTH),
	usefulKeyIDs : [],
	potentiallyFinalKeyIDs : [] 
};
var distancesBetweenKeys; 

const X_SPLIT_LEFT = 39;
const X_SPLIT_RIGHT = 41;
const Y_SPLIT_UP = 39;
const Y_SPLIT_DOWN = 41;
const WALL = '#';
const ADDED_WALL = '+';
const EMPTY = '.';
const NO_KEY = -1;
const SECTION_MARK = '1';
const LEFT_UP_1 = 1;
const LEFT_UP_2 = 2;
const RIGHT_UP_1 = 3;
const RIGHT_UP_2 = 4;
const LEFT_DOWN_1 = 5;
const LEFT_DOWN_2 = 6;
const RIGHT_DOWN_1 = 7;
const RIGHT_DOWN_2 = 8;

function doorValue(p_x, p_y) {
	const c = charToASCIIRelativePosition(field[p_y][p_x], 'A');
	return ((c <= 25) && (c >= 0)) ? c : NO_KEY;
}

function keyValue(p_x, p_y) {
	const c = charToASCIIRelativePosition(field[p_y][p_x], 'a');
	return ((c <= 25) && (c >= 0)) ? c : NO_KEY;	
}

function isSolid(p_x, p_y) {
	return field[p_y][p_x] == WALL || field[p_y][p_x] == ADDED_WALL;
}

// No "." on the edges, so no need to check neighbors;
function addWallsIfNeeded(p_x, p_y) {
	if (keyValue(p_x, p_y) != NO_KEY) {
		return;
	}
	const wallUp = isSolid(p_x, p_y-1);
	const wallDown = isSolid(p_x, p_y+1);
	const wallLeft = isSolid(p_x-1, p_y);
	const wallRight = isSolid(p_x+1, p_y);
	if (wallUp && wallDown) {
		if (wallRight) {
			field[p_y][p_x] = ADDED_WALL;
			addWallsIfNeeded(p_x-1, p_y);
		} else if (wallLeft) {
			field[p_y][p_x] = ADDED_WALL;
			addWallsIfNeeded(p_x+1, p_y);			
		}
	}
	if (wallLeft && wallRight) {
		if (wallUp) {
			field[p_y][p_x] = ADDED_WALL;
			addWallsIfNeeded(p_x, p_y+1);			
		} else if (wallDown) {
			field[p_y][p_x] = ADDED_WALL;
			addWallsIfNeeded(p_x, p_y-1);
		}
	}

}


function initKeys() {
	if (gData.alreadyDone) {
		return;
	}
	gData.alreadyDone = true;
	field[Y_SPLIT_UP][X_SPLIT_LEFT] = SECTION_MARK;
	field[Y_SPLIT_UP][X_SPLIT_RIGHT] = SECTION_MARK;
	field[Y_SPLIT_DOWN][X_SPLIT_LEFT] = SECTION_MARK;
	field[Y_SPLIT_DOWN][X_SPLIT_RIGHT] = SECTION_MARK;
	for (var i = 0 ; i < 26 ; i++) {
		// There are keys from a to z, right ?
		gData.keys.push({
			id : i,
			requiresKeys : [],
			requiresDoors : [],
			x : -1,
			y : -1,
			distFSM : -1, // FSM = from start marker
			section : -1,
			requiredForAnyKey : false,
			useful : false,
			closestDistances : []
		});
	}
	var x, y;
	// Remove all dead ends + find all keys
	for (y = 0 ; y < Y_LENGTH ; y++) {
		for (x = 0 ; x < X_LENGTH ; x++) {
			if (field[y][x] == EMPTY || doorValue(x, y) != NO_KEY) {
				addWallsIfNeeded(x, y);
			}
			if (keyValue(x, y) != NO_KEY) {
				gData.keys[keyValue(x, y)].y = y;
				gData.keys[keyValue(x, y)].x = x;
			}
		}
	}
	
	// Look for the required keys for each key + give each key a quadrant and a distance from the center
	makeSearches(X_SPLIT_LEFT-1, Y_SPLIT_UP, LEFT_UP_1);
	makeSearches(X_SPLIT_LEFT, Y_SPLIT_UP-1, LEFT_UP_2);
	makeSearches(X_SPLIT_LEFT-1, Y_SPLIT_DOWN, LEFT_DOWN_1);
	makeSearches(X_SPLIT_LEFT, Y_SPLIT_DOWN+1, LEFT_DOWN_2);
	makeSearches(X_SPLIT_RIGHT+1, Y_SPLIT_UP, RIGHT_UP_1);
	makeSearches(X_SPLIT_RIGHT, Y_SPLIT_UP-1, RIGHT_UP_2);
	makeSearches(X_SPLIT_RIGHT+1, Y_SPLIT_DOWN, RIGHT_DOWN_1);
	makeSearches(X_SPLIT_RIGHT, Y_SPLIT_DOWN+1, RIGHT_DOWN_2);	
	
	// Purge the useless keys
	purgeUselessKeys();
	
	var dist;
	distancesBetweenKeys = generateDoubleEntryArray(gData.keys.length, gData.keys.length, -1);
	
	// Now, let's make distances ! (only between useful keys)
	for (i = 0 ; i < gData.keys.length ; i++) {
		if (gData.keys[i].useful) {
			for (j = i+1 ; j < gData.keys.length ; j++) {
				if (gData.keys[j].useful) {
					if (gData.keys[i].section == gData.keys[j].section) {
						dist = distanceWithinSection(gData.keys[i].section, gData.keys[i].nodeIndexInSection, gData.keys[j].nodeIndexInSection);
					} else {
						dist = gData.keys[i].distFSM + gData.keys[j].distFSM + distanceSectionMarkers(gData.keys[i].section,gData.keys[j].section);
					}
					distancesBetweenKeys[j][i] = dist;
					distancesBetweenKeys[i][j] = dist;
				}
			}			
		}
	}
	
	// And... the closest distances from each key ?
	for (i = 0 ; i < gData.keys.length ; i++) {
		if (gData.keys[i].useful) {
			gData.keys[i].closestDistances = gData.usefulKeyIDs.slice();
			gData.keys[i].closestDistances.filter(function(j) {
				return (j != i && gData.keys[j].useful);
			}); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
			gData.keys[i].closestDistances.sort(function(k,l) {
				return distancesBetweenKeys[i][k]-distancesBetweenKeys[i][l];
			});
		}
	}
	
	// Now, purge "nodes of useless keys".
	var nodesInsectI, node;
	var iSect, iNode, iNodeFather;
	for (iSect = 0 ; iSect < gData.nodesSector.length ; iSect++) {
		nodesInsectI = gData.nodesSector[iSect]; // insect = "in sector..." lol, to avoid confusion with nodesSector.
		for (iNode = 0 ; iNode < nodesInsectI.length ; iNode++) {
			node = nodesInsectI[iNode];
			if (node.idKey != NO_KEY && !gData.keys[node.idKey].useful) {
				if (node.isCrossRoads) {
					node.idKey = NO_KEY;
				} else {
					if (node.idFather != null) {
						const index = nodesInsectI[node.idFather].idSons.indexOf(iNode); // It's a replacement
						nodesInsectI[node.idFather].idSons[index] = node.idSons[0];
					}
					nodesInsectI[node.idSons[0]].idFather = node.idFather; // If the key is useless and it's not a crossroads : it must have exactly one son.
					nodesInsectI[iNode] = {}
				}
			}
		}
	}
	// Check for each node which doors guard it + calculate guarded distance (e.g. half the distance required to take all the keys and then leave).
	for (iSect = 0 ; iSect < gData.nodesSector.length ; iSect++) {
		nodesInsectI = gData.nodesSector[iSect]; // insect = "in sector..." lol, to avoid confusion with nodesSector.
		for (iNode = 0 ; iNode < nodesInsectI.length ; iNode++) {
			node = nodesInsectI[iNode];
			if (node.idFather == null) {
				findParametersGuarded(iSect, node);
				break;
			}
		}
	}
	
	// Also check which keys may be final. 
	gData.potentiallyFinalKeyIDs = [];
	gData.usefulKeyIDs.forEach(idKey => {
		if (!gData.keys[idKey].requiredForAnyKey) {
			gData.potentiallyFinalKeyIDs.push(idKey);
		}
	});
	
}

function makeSearches(p_xStart, p_yStart, p_section) {
	if (isSolid(p_xStart, p_yStart)) {
		return;
	}
	gData.nodesSector[p_section] = [];
	gData.checkerPaths.clean();
	gData.checkerPaths.add(X_SPLIT_LEFT, Y_SPLIT_UP);
	gData.checkerPaths.add(X_SPLIT_RIGHT, Y_SPLIT_UP);
	gData.checkerPaths.add(X_SPLIT_LEFT, Y_SPLIT_DOWN);
	gData.checkerPaths.add(X_SPLIT_RIGHT, Y_SPLIT_DOWN);
	makeSearchesAux(p_xStart, p_yStart, p_section, 1, [], [], null);
	// Make the distances thanks to the nodes system.
	//...
}

function makeSearchesAux(p_x, p_y, p_section, p_dist, p_reqdKeysList, p_reqdDoorsList, p_closestNodeId) {
	if (isSolid(p_x, p_y) || gData.checkerPaths.get(p_x, p_y)) {
		return;
	}
	gData.checkerPaths.add(p_x, p_y);
	const c = keyValue(p_x, p_y);
	var nodeId = p_closestNodeId;
	
	// Check key
	if (c != NO_KEY) {
		gData.keys[c].requiresKeys = p_reqdKeysList.slice();
		gData.keys[c].requiresDoors = p_reqdDoorsList.slice();
		gData.keys[c].distFSM = p_dist;
		gData.keys[c].section = p_section;
		p_reqdKeysList.push(c);		
	}
	// Check doors
	const c2 = doorValue(p_x, p_y);
	if (c2 != NO_KEY) {
		if (p_reqdKeysList.indexOf(c2) == -1) {
			p_reqdDoorsList.push(c2); // The door doesn't count if we need to take the key before
		} else {
			field[p_y][p_x] = EMPTY;
		}
	}
	// Now, add a node
	const freeL = isSolid(p_x-1, p_y) ? 0 : 1;
	const freeR = isSolid(p_x+1, p_y) ? 0 : 1;
	const freeU = isSolid(p_x, p_y-1) ? 0 : 1;
	const freeD = isSolid(p_x, p_y+1) ? 0 : 1;
	const cross = freeL + freeR + freeU + freeD >= 3;
	if (c != NO_KEY || cross) {
		nodeId = gData.nodesSector[p_section].length;
		gData.nodesSector[p_section].push({ // Where nodes are defined
			idFather : p_closestNodeId,
			distFSM : p_dist,
			idSons : [],
			idKey : c,
			guardedByDoors : p_reqdDoorsList.slice(),
			isCrossRoads : cross,
			guardsDoors : [],
			guardsKeys : [],
			guardsDistance : 0
		});
		if (p_closestNodeId != null) {			
			gData.nodesSector[p_section][p_closestNodeId].idSons.push(nodeId);
		}
		if (c != NO_KEY) {			
			gData.keys[c].nodeIndexInSection = nodeId;
		}
	}
	
	makeSearchesAux(p_x-1, p_y, p_section, p_dist+1, p_reqdKeysList.slice(), p_reqdDoorsList.slice(), nodeId);
	makeSearchesAux(p_x+1, p_y, p_section, p_dist+1, p_reqdKeysList.slice(), p_reqdDoorsList.slice(), nodeId);
	makeSearchesAux(p_x, p_y-1, p_section, p_dist+1, p_reqdKeysList.slice(), p_reqdDoorsList.slice(), nodeId);
	makeSearchesAux(p_x, p_y+1, p_section, p_dist+1, p_reqdKeysList.slice(), p_reqdDoorsList.slice(), nodeId);
}

// A key is useless if it isn't in a dead-end (due to tree structure) AND it is not required by a door (other than the ones you need to pick up to open)
function purgeUselessKeys() {
	gData.usefulKeyIDs = [];
	var x, y;
	for (var i = 0 ; i < gData.keys.length ; i++) {
		gData.keys[i].requiresDoors.forEach(idDoor => {
			gData.keys[idDoor].requiredForAnyKey = true;
		});
	}
	for (var i = 0 ; i < gData.keys.length ; i++) {
		// Useful = required by a door (not behind this key) or in an impasse
		if (!gData.keys[i].requiredForAnyKey) {			
			x = gData.keys[i].x;
			y = gData.keys[i].y;
			const wallUp = isSolid(x, y-1);
			const wallDown = isSolid(x, y+1);
			const wallLeft = isSolid(x-1, y);
			const wallRight = isSolid(x+1, y);
			var deadEnd = false;
			if (wallUp && wallDown) {
				if (wallRight) {
					deadEnd = true;
				} else if (wallLeft) {
					deadEnd = true;
				}
			}
			else if (wallLeft && wallRight) {
				if (wallUp) {
					deadEnd = true;
				} else if (wallDown) {
					deadEnd = true;
				}
			}
			if (!deadEnd) {
				gData.keys[i].useful = false;
			} else {
				gData.keys[i].useful = true;
			}
		} else {
			gData.keys[i].useful = true;
		}
		if (gData.keys[i].useful) {
			gData.usefulKeyIDs.push(i);
		} else {
			gData.keys[i] = {
				usefulKeys : false,
				x : gData.keys[i].y,
				y : gData.keys[i].y
			}
		}
	}
}

function distanceSectionMarkers(p_sectionA, p_sectionB) {
	const partA = Math.floor((p_sectionA-1)/2);
	const partB = Math.floor((p_sectionB-1)/2);
	// So partA and partB = 0 (NW), 1(NE), 2 (SW) or 3 (SE)
	if (partA == partB) {
		return 0;
	}
	if (partA + partB == 3) {
		return 4;
	}
	return 2;
}

function distanceWithinSection(p_section, p_idNodeA, p_idNodeB) {
	if (p_idNodeA > p_idNodeB) {
		return distanceWithinSection(p_section, p_idNodeB, p_idNodeA);
	}
	if (p_idNodeB == p_idNodeA) {
		return 0;
	}
	const fatherIndex = gData.nodesSector[p_section][p_idNodeB].idFather;
	return gData.nodesSector[p_section][p_idNodeB].distFSM-gData.nodesSector[p_section][fatherIndex].distFSM + distanceWithinSection(p_section, p_idNodeA, fatherIndex);
	
}

function findParametersGuarded(p_iSect, p_node) {
	var i, j;
	if (p_node.idKey != NO_KEY) {
		p_node.guardsKeys = [p_node.idKey];
	}
	p_node.idSons.forEach(idSon => {	
		var nodeSon = gData.nodesSector[p_iSect][idSon];
		findParametersGuarded(p_iSect, nodeSon);
		nodeSon.guardsDoors.forEach(idDoor => {
			shiftIntoListUniqueNumbers(p_node.guardsDoors, idDoor);
		});
		nodeSon.guardsKeys.forEach(idKey => {
			shiftIntoListUniqueNumbers(p_node.guardsKeys, idKey);
		});
		for (i = nodeSon.guardedByDoors.length-1 ; i >= p_node.guardedByDoors.length ; i--) {
			shiftIntoListUniqueNumbers(p_node.guardsDoors, nodeSon.guardedByDoors[i]); 		
			// It assumes that the doors required to reach each node (so, opposite of guarded doors) increase by the right as we go deeper.
		} // Any door that must be crossed to reach the son but not the father (if the node contains a door - it's a crossroads with one -, the father already has it. )
		
	
	});
}

// ----------------
// No more setup, let's solve this !

var gAnswer = {}
const NUMBER_SEEDS = 100;
const NUMBER_KEYS = 5;

function conclusion_18_1() {
	initKeys();
	gAnswer.keysNumber = gData.keys.length; 
	initGlobalAnswerData();
	for (var i = 0 ; i < NUMBER_SEEDS ; i++) {
		seed();
		/*console.log(gAnswer.distance + " " + gAnswer.min);
		console.log(gAnswer.currentChain);
		console.log("---");*/
	}
	gAnswer.seededBestChain = gAnswer.bestChain.slice();
	console.log(new Date());
	findAnswer(NUMBER_KEYS); // Ok, first we'll try to take 5 keys, then we'll raise this number !
	console.log(new Date());
	return gData;
} // Correct answer = 3962. Correct collect order = 5,22,0,12,3,17,19,25,4,2,10,14,16,1,13,24,20

function seed() {
	initOnePathData();
	var randomIndex = -1;
	var previousIndex = -1;
	while (gAnswer.keysLeftToTake > 0) {
		do {
			randomIndex = randomNumber(gAnswer.minRandomInt, gAnswer.maxRandomInt);
		} while (!correctIndex(randomIndex));
		if (previousIndex == -1) {
			gAnswer.distance += gData.keys[randomIndex].distFSM;
		} else {
			gAnswer.distance += distancesBetweenKeys[randomIndex][previousIndex];
		}
		gAnswer.currentChain.push(randomIndex);
		gAnswer.keyTakenYet[randomIndex] = true;
		previousIndex = randomIndex;
		gAnswer.keysLeftToTake--;
	}
	updateAnswerIfBest();
}

function initGlobalAnswerData() {
	gAnswer.min = X_LENGTH*Y_LENGTH*26;		
	gAnswer.bestChain = [];
	gAnswer.seededBestChain = [];
}

function initOnePathData() {
	gAnswer.distance = 2; // No matter which key we take first, we will go to a section marker.
	gAnswer.currentChain = [];
	gAnswer.keysLeftToTake = 0;
	gAnswer.keyTakenYet = [];
	for (var i = 0 ; i < gAnswer.keysNumber ; i++) {
		gAnswer.keyTakenYet.push(!gData.keys[i].useful);
		if (gData.keys[i].useful) {
			gAnswer.keysLeftToTake++;
		}
	}
	gAnswer.minRandomInt = 0;
	gAnswer.maxRandomInt = gAnswer.keysNumber-1;
}

function correctIndex(p_randInd) {
	var answer = gData.keys[p_randInd].useful && !gAnswer.keyTakenYet[p_randInd];
	if (!answer) { // If the key will not be good anymore (useless or already taken)		
		if (p_randInd == gAnswer.minRandomInt) {
			gAnswer.minRandomInt++;
		} else if (p_randInd == gAnswer.maxRandomInt) {
			gAnswer.maxRandomInt--;
		}
	} else { // The key is still useful and to be taken, but can it be reached yet ?
		var i;
		for (i = 0 ; i < gData.keys[p_randInd].requiresDoors.length ; i++) {
			if (!gAnswer.keyTakenYet[gData.keys[p_randInd].requiresDoors[i]]) {
				return false;
			}
		}
		for (i = 0 ; i < gData.keys[p_randInd].requiresKeys.length ; i++) {
			if (!gAnswer.keyTakenYet[gData.keys[p_randInd].requiresKeys[i]]) {
				return false;
			}
		}
	}
	return answer;
}

function updateAnswerIfBest() {
	if (gAnswer.distance < gAnswer.min) {
		gAnswer.min = gAnswer.distance;
		gAnswer.bestChain = gAnswer.currentChain.slice();
	}
}

// No more seeding below !
function findAnswer(p_numberKeysToTake) {
	initOnePathData();
	if (p_numberKeysToTake > gData.usefulKeyIDs.length) {
		p_numberKeysToTake = gData.usefulKeyIDs.length;
	}
	gAnswer.keysLeftToTake = p_numberKeysToTake;
	var iKey;
	gAnswer.distance = 2; // Going on any section mark
	for (var i = 0 ; i < gAnswer.seededBestChain.length ; i++) {
		iKey = gAnswer.seededBestChain[i];
		if (correctIndex(iKey)) {
			collectKey(iKey, gData.keys[iKey].distFSM);
			findAnswerAux();
			uncollectKey(2);
		}
	}
}

function findAnswerAux() {
	if (gAnswer.distance > gAnswer.min) {
		return;
	}
	if (gAnswer.keysLeftToTake == 0) {
		updateAnswerIfBest();
		return;
	}
	var iKey;
	const distSoFar = gAnswer.distance;
	const iStart = gAnswer.currentChain[gAnswer.currentChain.length-1];
	//for (var i = 0 ; i < gAnswer.seededBestChain.length ; i++) {
	for (var i = 0 ; i < gData.keys[iStart].closestDistances.length ; i++) {
		//iKey = gAnswer.seededBestChain[i];
		iKey = gData.keys[iStart].closestDistances[i]; // Looks slightly faster...
		if (correctIndex(iKey)) {
			collectKey(iKey, distancesBetweenKeys[iStart][iKey]);
			findAnswerAux();
			uncollectKey(distSoFar);
		}
	}
}

function collectKey(p_index, p_extraDistance) {
	gAnswer.keysLeftToTake--;
	gAnswer.keyTakenYet[p_index] = true;
	gAnswer.currentChain.push(p_index);
	gAnswer.distance += p_extraDistance;
}

function uncollectKey(p_formerDistance) {
	gAnswer.distance = p_formerDistance;
	const iKey = gAnswer.currentChain.pop();
	gAnswer.keyTakenYet[iKey] = false;
	gAnswer.keysLeftToTake++;
}

//---
// Checking methods

// Make sure the distances are... well... consistent
function autoCheckKeysAndDistance(p_arrayKeys) {
	var answer = 2 + gData.keys[p_arrayKeys[0]].distFSM;
	for (var i = 1 ; i < p_arrayKeys.length ; i++) {
		answer += distancesBetweenKeys[p_arrayKeys[i]][p_arrayKeys[i-1]];
	}
	return p_arrayKeys.length + " " + answer;
}



// New algorithm : 
/*
conclusion :
for each (potential final key) :
	find_best_this_finalkey(final key)

find_best_this_finalkey(final key) :
	gData.finalKeyId = final key
	startFromNode(node start)
	
startFromNode(node I)
	for each (key I not taken yet + accessible)
		find least deep node (ldn) "on the path to key I where all keys to take are accessible AND not final"
		if (key I) is the first of (list of keys to take from ldn)			 
			(climb back until previous crossroad - increase distance)
			(loot all keys to the other path(s) of the crossroad if possible and not done yet - increase distance)
			(do so until ldn - ignoring nodes which are not in the correct sections)
			goFromNodeForKey(ldn) // Increase distance
			takeAllKeys(ldn) // Start from node ldn, take all keys, come back to node ldn
			startFromNode(ldn) // Recursive call !!!
			if (one key left to take) 
				(Just take the final key and conclude)
			(Don't forget to restore distance and restore keys)
		otherwise, if (key I) is not the first of list, don't do anything. It's already treated elsewhere !

// Find the 1st node starting from section marker (well, including marker actually) that contains only takeable / not final keys
nodeThatCanGetAllKeys(node, targetedKey) {
	for all (doors guarded by this node) {
		if (door open) || (door can be opened by a key here)
		return node
	}
	find (node among sons that contains key - some for loop is enough)
	
	nodeThatCanGetAllKeys(node_further(targetedKey), targetedKey)
}


*/




// -----------------------------

// Claude's chain : [6, 9, 25, 8, 3, 21, 19, 11, 15, 23, 22, 17, 20, 5, 0, 24, 12, 1, 2, 10, 16, 7, 14] ; best = 5964 (or so I think). Found in nearly 3 hours. Phew ! 