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

const rawData = rawDataClaude;
const X_LENGTH = rawData[0].length;
const Y_LENGTH = rawData.length;

const field = stringArray_to_charDoubleEntryArray(rawData);
var gData = {
	keys : [],
	nodesSector : [[],[],[],[],[],[],[],[]],
	distanceWithinSector : [],
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
const SECTOR_MARK = '1'; // Not really useful, except for code clarty.
const LEFT_UP_1 = 0;
const LEFT_UP_2 = 1;
const RIGHT_UP_1 = 2;
const RIGHT_UP_2 = 3;
const LEFT_DOWN_1 = 4;
const LEFT_DOWN_2 = 5;
const RIGHT_DOWN_1 = 6;
const RIGHT_DOWN_2 = 7;

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
	field[Y_SPLIT_UP][X_SPLIT_LEFT] = SECTOR_MARK;
	field[Y_SPLIT_UP][X_SPLIT_RIGHT] = SECTOR_MARK;
	field[Y_SPLIT_DOWN][X_SPLIT_LEFT] = SECTOR_MARK;
	field[Y_SPLIT_DOWN][X_SPLIT_RIGHT] = SECTOR_MARK;
	for (var i = 0 ; i < 26 ; i++) {
		// There are keys from a to z, right ?
		gData.keys.push({
			id : i,
			requiresKeys : [],
			requiresDoors : [],
			requiredByKeys : [],
			x : -1,
			y : -1,
			distFSM : -1, // FSM = from start marker
			sector : -1,
			requiredForAnyKey : false,
			useful : false,
			closestDistances : [],
			nodeIndexInSector : -1,
			minimalDistanceToGoal : -1
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
	
	// Now, let's make distances between 1-nodes of the same sector 2-keys ! (anything useless is removed)
	var iSect;
	var nodesInsectI, commonNode;
	var iNodeA, iNodeB;
	for (iSect = 0 ; iSect < gData.nodesSector.length ; iSect++) {
		nodesInsectI = gData.nodesSector[iSect];
		gData.distanceWithinSector.push([]);
		for (iNodeA = 0 ; iNodeA < nodesInsectI.length ; iNodeA++) {
			gData.distanceWithinSector[iSect].push([]);
			for (iNodeB = 0 ; iNodeB < iNodeA ; iNodeB++) {				
				gData.distanceWithinSector[iSect][iNodeA].push(-1);
			}
		}
		for (iNodeA = 0 ; iNodeA < nodesInsectI.length ; iNodeA++) {
			for (iNodeB = 0 ; iNodeB < iNodeA ; iNodeB++) {
				commonNode = gData.nodesSector[iSect][commonIdNode(iSect, iNodeA, iNodeB)];
				dist = gData.nodesSector[iSect][iNodeA].distFSM + gData.nodesSector[iSect][iNodeB].distFSM - commonNode.distFSM*2;
				gData.distanceWithinSector[iSect][iNodeA][iNodeB] = dist;
				gData.distanceWithinSector[iSect][iNodeB][iNodeA] = dist;
			} // No purge here.
		}					
	}
	
	
	for (i = 0 ; i < gData.keys.length ; i++) {
		if (gData.keys[i].useful) {
			for (j = i+1 ; j < gData.keys.length ; j++) {
				if (gData.keys[j].useful) {
					if (gData.keys[i].idSector == gData.keys[j].idSector) {
						dist = gData.distanceWithinSector[gData.keys[i].idSector][gData.keys[i].nodeIndexInSector][gData.keys[j].nodeIndexInSector];
					} else {
						dist = gData.keys[i].distFSM + gData.keys[j].distFSM + distanceSectorMarkers(gData.keys[i].idSector,gData.keys[j].idSector);
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
	
		var iNode, iNodeFather;

	// Now, purge "nodes of useless keys".
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
	
	// For each key, calculate the "minimal number of steps left" once that one is taken, simply by looking at the dependencies.
	buildTreeAndDistancesRequiredByKeys();	
}

function makeSearches(p_xStart, p_yStart, p_idSector) {
	if (isSolid(p_xStart, p_yStart)) {
		return;
	}
	gData.nodesSector[p_idSector] = [];
	gData.checkerPaths.clean();
	gData.checkerPaths.add(X_SPLIT_LEFT, Y_SPLIT_UP);
	gData.checkerPaths.add(X_SPLIT_RIGHT, Y_SPLIT_UP);
	gData.checkerPaths.add(X_SPLIT_LEFT, Y_SPLIT_DOWN);
	gData.checkerPaths.add(X_SPLIT_RIGHT, Y_SPLIT_DOWN);
	makeSearchesAux(p_xStart, p_yStart, p_idSector, 1, [], [], null);
	// Make the distances thanks to the nodes system.
	//...
}

function makeSearchesAux(p_x, p_y, p_idSector, p_dist, p_reqdKeysList, p_reqdDoorsList, p_closestNodeId) {
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
		gData.keys[c].idSector = p_idSector;
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
		nodeId = gData.nodesSector[p_idSector].length;
		gData.nodesSector[p_idSector].push({ // Where nodes are defined
			idFather : p_closestNodeId,
			distFSM : p_dist,
			idSons : [],
			idKey : c,
			guardedByDoors : p_reqdDoorsList.slice(),
			isCrossRoads : cross,
			guardsDoors : [],
			guardsKeys : [],
			guardsDistance : 0,
			idSector : p_idSector,
			keysGuardedLeftANSWER : 0,
			idInSector : nodeId
		});
		if (p_closestNodeId != null) {			
			gData.nodesSector[p_idSector][p_closestNodeId].idSons.push(nodeId);
		}
		if (c != NO_KEY) {			
			gData.keys[c].nodeIndexInSector = nodeId;
		}
	}
	
	makeSearchesAux(p_x-1, p_y, p_idSector, p_dist+1, p_reqdKeysList.slice(), p_reqdDoorsList.slice(), nodeId);
	makeSearchesAux(p_x+1, p_y, p_idSector, p_dist+1, p_reqdKeysList.slice(), p_reqdDoorsList.slice(), nodeId);
	makeSearchesAux(p_x, p_y-1, p_idSector, p_dist+1, p_reqdKeysList.slice(), p_reqdDoorsList.slice(), nodeId);
	makeSearchesAux(p_x, p_y+1, p_idSector, p_dist+1, p_reqdKeysList.slice(), p_reqdDoorsList.slice(), nodeId);
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

function buildTreeAndDistancesRequiredByKeys() {
	var keyId;
	for (var i = 0 ; i < gData.usefulKeyIDs.length ; i++) {		
		keyId = gData.usefulKeyIDs[i];
		gData.keys[keyId].requiresDoors.forEach(idDoor => {
			gData.keys[idDoor].requiredByKeys.push(keyId);
		});
		gData.keys[keyId].requiresKeys.forEach(idDoor => {
			if (gData.keys[idDoor].useful) {
				gData.keys[idDoor].requiredByKeys.push(keyId);
			}
		});
	}
	for (var i = 0 ; i < gData.usefulKeyIDs.length ; i++) {		
		keyId = gData.usefulKeyIDs[i];		
		calculateMinimalDistanceToGoal(keyId); 
	}
}

function calculateMinimalDistanceToGoal(p_idKey) {
	var key = gData.keys[p_idKey];
	var idReq;
	var val;
	var key2;
	if (key.minimalDistanceToGoal == -1) {
		key.minimalDistanceToGoal = 0;
		key.requiredByKeys.forEach(idReq => {
			val = distancesBetweenKeys[idReq][p_idKey] + calculateMinimalDistanceToGoal(idReq);
			if (val > key.minimalDistanceToGoal) {
				key.minimalDistanceToGoal = val;
			}
		});
	} 
	return key.minimalDistanceToGoal;
}

function distanceSectorMarkers(p_idSectorA, p_idSectorB) {
	const partA = Math.floor(p_idSectorA/2);
	const partB = Math.floor(p_idSectorB/2);
	// So partA and partB = 0 (NW), 1(NE), 2 (SW) or 3 (SE)
	if (partA == partB) {
		return 0;
	}
	if (partA + partB == 3) {
		return 4;
	}
	return 2;
}

function findParametersGuarded(p_idSector, p_node) {
	var i, j;
	if (p_node.idKey != NO_KEY) {
		p_node.guardsKeys = [p_node.idKey];
	}
	p_node.idSons.forEach(idSon => {	
		var nodeSon = gData.nodesSector[p_idSector][idSon];
		findParametersGuarded(p_idSector, nodeSon);
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
	p_node.keysGuardedLeftANSWER = p_node.guardsKeys.length; // ANSWER in majuscules because it's altered in answers !
}

// ----------------
// No more setup, let's solve this !


// New algorithm : 
/*
conclusion :
for each (potential final key) :
	find_best_this_finalkey(final key)

find_best_this_finalkey(final key) :
	gData.idFinalKey = final key
	startFromNode(node start)
	
startFromNode(node I)
	for each (key I not taken yet + accessible)
		find least deep node (ldn) "on the path to key I where all keys to take are accessible AND not final"
		if (key I) is the first of (list of keys to take from ldn)			 
			(climb back until previous crossroad - increase distance)
			(loot all keys to the other path(s) of the crossroad if possible and not done yet - increase distance)
			(do so until ldn - ignoring nodes which are not in the correct sectors)
			goFromNodeForKey(ldn) // Increase distance
			takeAllKeys(ldn) // Start from node ldn, take all keys, come back to node ldn
			startFromNode(ldn) // Recursive call !!!
			if (one key left to take) 
				(Just take the final key and conclude)
			(Don't forget to restore distance and restore keys)
		otherwise, if (key I) is not the first of list, don't do anything. It's already treated elsewhere !

// Find the 1st node starting from sector marker (well, including marker actually) that contains only takeable / not final keys
nodeThatCanGetAllKeys(node, targetedKey) {
	for all (doors guarded by this node) {
		if (door open) || (door can be opened by a key here)
		return node
	}
	find (node among sons that contains key - some for loop is enough)
	
	nodeThatCanGetAllKeys(node_further(targetedKey), targetedKey)
}


*/


/* Remember the structure here - warning, not necessarily up-to-date :
	gData.keys.push({
		id : i,
		requiresKeys : [],
		requiresDoors : [],
		x : -1,
		y : -1,
		distFSM : -1, // FSM = from start marker
		sector : -1,
		requiredForAnyKey : false,
		useful : false,
		closestDistances : [],
		nodeIndexInSector : -1
	});
	
	gData.nodesSector[p_idSector].push({ // Where nodes are defined
		idFather : p_closestNodeId,
		distFSM : p_dist,
		idSons : [],
		idKey : c,
		guardedByDoors : p_reqdDoorsList.slice(),
		isCrossRoads : cross,
		guardsDoors : [],
		guardsKeys : [],
		guardsDistance : 0,
		idSector : p_idSector,
		keysGuardedLeftANSWER : 0,
		idInSector : nodeId
	});
*/	
// A few getters
function getNodeFromKey(p_idKey) {
	const key = gData.keys[p_idKey];
	return gData.nodesSector[key.idSector][key.nodeIndexInSector];
}

function getFather(p_node) {
	return gData.nodesSector[p_node.idSector][p_node.idFather];
}

function alreadyGotAllKeys(p_node) {
	return p_node.keysGuardedLeftANSWER == 0;
}

function rootNodeInSector(p_idSector) {
	var answer = gData.nodesSector[p_idSector][0]; 
	while (!answer.idSons) {
		i++;
		answer = gData.nodesSector[p_idSector][i];
	}
	return answer;
}

function commonIdNode(p_idSector, p_idNodeA, p_idNodeB) {
	if (p_idNodeA > p_idNodeB) {
		return commonIdNode(p_idSector, p_idNodeB, p_idNodeA);
	}
	if (p_idNodeB == p_idNodeA) {
		return p_idNodeA;
	}
	const fatherIndex = gData.nodesSector[p_idSector][p_idNodeB].idFather;
	return commonIdNode(p_idSector, p_idNodeA, fatherIndex);
}


var gAnswer = {}

// And the answer
function conclusion_18_1() {
	console.log(new Date());
	initKeys();
	initGlobalAnswerData();
	/*gData.potentiallyFinalKeyIDs.forEach(idFinalKey => {		
		initOnePathData(idFinalKey);
		startFromNode({isStartingNode : true});
	});*/	
	console.log(new Date());
	return gAnswer;
}

function initGlobalAnswerData() {
	gAnswer.bestDistance = X_LENGTH*Y_LENGTH*26;		
	gAnswer.bestChain = [];
	gAnswer.seededBestChain = [];
}

function initOnePathData(p_idFinalKey) {
	gAnswer.distance = 0; // No matter which key we take first, we will go to a sector marker. But since we have not moved yet, let's not initialize it to -2.
	gAnswer.currentChain = [];
	gAnswer.keysLeftToTake = 0;
	gAnswer.keyTakenYet = [];
	gAnswer.idFinalKey = p_idFinalKey;
	for (var i = 0 ; i < gData.keys.length ; i++) {
		gAnswer.keyTakenYet.push(!gData.keys[i].useful);
		if (gData.keys[i].useful) {
			gAnswer.keysLeftToTake++;
		}
	}
}

function isKeyReachable(p_idKey) {
	const key = gData.keys[p_idKey];
	for (var i = 0 ; i < key.requiresKeys.length ; i++) {
		if (!gAnswer.keyTakenYet[key.requiresKeys[i]]) {
			return false;
		}
	}
	for (var i = 0 ; i < key.requiresDoors.length ; i++) {
		if (!gAnswer.keyTakenYet[key.requiresDoors[i]]) {
			return false;
		}
	}
	return true;
}

// WARNING : does not work if both nodes are in the same sector and no one is the father from the other. 
function distanceBetweenNodes(p_nodeA, p_nodeB) {
	if (p_nodeA.idSector != p_nodeB.idSector) {
		return p_nodeA.distFSM + p_nodeB.distFSM + distanceSectorMarkers(p_nodeA.idSector, p_nodeB.idSector);
	} else {
		return gData.distanceWithinSector[p_nodeA.idSector][p_nodeA.idInSector][p_nodeB.idInSector]; 
	}
}

var DEBUGINCR = 0;

// Precondition : all keys guarded by p_startingNode are collected OR p_startingNode is the root.
function startFromNode(p_startingNode) {
	// Case of excessive distance + case of the final key
	/*if (gAnswer.distance >= gAnswer.bestDistance) {
		return;
	}*/
	if (!p_startingNode.isStartingNode && (gAnswer.distance + gData.keys[p_startingNode.idKey].minimalDistanceToGoal >= gAnswer.bestDistance)) {
		return;
	}
	if (gAnswer.keysLeftToTake == 1) {
		const finalDistance = distanceBetweenNodes(p_startingNode, getNodeFromKey(gAnswer.idFinalKey));
		gAnswer.distance += finalDistance;
		if (gAnswer.distance < gAnswer.bestDistance) {
			gAnswer.bestDistance = gAnswer.distance;
			tryToTakeAKey(gAnswer.idFinalKey);
			gAnswer.bestChain = gAnswer.currentChain.slice();
			releaseLastKey();
		}
		gAnswer.distance -= finalDistance;
		return;
	}
	
	//console.log(DEBUGINCR + " Avant " + gAnswer.keysLeftToTake);
	//DEBUGINCR++; 
	// Standard case
	const currentDist = gAnswer.distance;
	const formerKeysNumber = gAnswer.currentChain.length;
	var keysBeforeCollection;
	var idKeysToSkip = [];
	var indexNextKeyToSkip = -1;
	var nodeOn, destNode, onlyThisKey
	for (var i = 0 ; i < gData.usefulKeyIDs.length ; i++) {
		idKey = gData.usefulKeyIDs[i];
		if (idKeysToSkip.indexOf(idKey) != -1) {
			continue; // Slightly optimizable with an array...
		}
		if (idKey != gAnswer.idFinalKey && !gAnswer.keyTakenYet[idKey] && isKeyReachable(idKey)) { 
			nodeOn = firstNodeThatCanGetAllKeysWithTargetOrTargetKey(gData.keys[idKey]); 
			destNode = nodeOn.desiredNode;
			goToNodeCollectingKeysAlongTheWay(p_startingNode, destNode); // Don't skip keys collected along the way !
			if (nodeOn.onlyThisKey) {
				tryToTakeAKey(idKey);
			} else {
				keysBeforeCollection = gAnswer.currentChain.length;
				collectAllKeysInThisNode(destNode); // All keys that are collected here will be skipped as "target keys" for this startFromNode call !
				for (var j = keysBeforeCollection ; j < gAnswer.currentChain.length ; j++) {					
					shiftIntoListUniqueNumbers(idKeysToSkip, gAnswer.currentChain[j]);
				}
			}
			startFromNode(destNode);			
			// Restart from here
			while (formerKeysNumber < gAnswer.currentChain.length ) {
				releaseLastKey();
			}
			gAnswer.distance = currentDist;
		}
	}
}

// We are talking about a key that can be got and is to be got.
// Returns the shallowest node that either : 1) contains the key 2) contains only unguarded keys.
function firstNodeThatCanGetAllKeysWithTargetOrTargetKey(p_targetKey) {
	// Starting from the root
	/*var i = 0;
	var answer = rootNodeInSector(p_targetKey.idSector); 
	while (!canGetAllKeysThatNode(answer) && answer.idKey != p_targetKey.id) {
		var answer2;
		for (var i = 0 ; i < answer.idSons.length ; i++) {
			answer2 = gData.nodesSector[p_targetKey.idSector][answer.idSons[i]];
			if (answer2.guardsKeys.indexOf(p_targetKey.id) != -1) {
				answer = answer2;
				break;
			}
		}
	}	
	return {desiredNode : answer, onlyThisKey : (answer.idKey == p_targetKey.id) && !canGetAllKeysThatNode(answer)};*/
	return {desiredNode : getNodeFromKey(p_targetKey.id), onlyThisKey : true};
}


// Go to the target node
// Collects all the keys along the way strictly between both nodes.
// Increases the distance for both the trip + the collected keys + returns a list of any newly collected key.
function goToNodeCollectingKeysAlongTheWay(p_startingNode, p_targetNode) {
	if (p_startingNode.isStartingNode) {
		gAnswer.distance += 2 + p_targetNode.distFSM;
	} else {		
		if (p_startingNode.idSector != p_targetNode.idSector) {
			gAnswer.distance += p_startingNode.distFSM + p_targetNode.distFSM + distanceSectorMarkers(p_startingNode.idSector, p_targetNode.idSector); 
			var node = getFather(p_startingNode);
			var comeFromNodeId = p_startingNode.idInSector;
			while (node != null) {
				node.idSons.forEach(idSons => {
					if (idSons != comeFromNodeId && canGetAllKeysThatNode(node)) {
						collectAllKeysInThisNode(node);
					}
				});
				comeFromNodeId = node.idInSector;
				node = getFather(node);
			}
			// Okay, I did it only on the way back to the start. // We can do the way downstream !
		}
		else {
			// We MAY go from a father node to a child node if we ask first to go to a key on a non-autocollect node, then to another one below it.
			// TODO collect keys here !
			gAnswer.distance += gData.distanceWithinSector[p_startingNode.idSector][p_startingNode.idInSector][p_targetNode.idInSector];
		}
	}
} 

// Collects all the keys along the way in a given node.
// Increases the distance + returns a list of any newly collected key.
function collectAllKeysInThisNode(p_node) {
	var newKeyIDs = [];
	increaseDistanceGoingBackAndForth(p_node); // WARNING : call this BEFORE taking new keys, because it's all about taking keys not taken yet !
	p_node.guardsKeys.forEach(idKey => {
		tryToTakeAKey(idKey);
	});
	return newKeyIDs;
}

function tryToTakeAKey(p_idKey) {
	// Warn all guarding nodes that this key has been taken
	if (!gAnswer.keyTakenYet[p_idKey]) {
		gAnswer.keyTakenYet[p_idKey] = true;
		gAnswer.currentChain.push(p_idKey);
		warnAllNodesKeysGuarded(p_idKey, -1);
		gAnswer.keysLeftToTake--;
	}
}

function releaseLastKey() {
	// Consider the last key as not taken
	const idKey = gAnswer.currentChain.pop();
	gAnswer.keyTakenYet[idKey] = false;
	warnAllNodesKeysGuarded(idKey, 1);	
	gAnswer.keysLeftToTake++;
}

function warnAllNodesKeysGuarded(p_idKey, p_difference) {
	var node = getNodeFromKey(p_idKey);
	while (node != null) {
		node.keysGuardedLeftANSWER += p_difference;
		node = node.father;
	}
}

function increaseDistanceGoingBackAndForth(p_node) {
	var nodeSon;
	p_node.idSons.forEach(idSon => {
		nodeSon = gData.nodesSector[p_node.idSector][idSon];
		if (!alreadyGotAllKeys(nodeSon)) {
			gAnswer.distance += 2*(nodeSon.distFSM-p_node.distFSM);
			increaseDistanceGoingBackAndForth(nodeSon);
		} 
	});
}

function canGetAllKeysThatNode(p_node) {
	// We are not getting the final key !
	if (p_node.guardsKeys.indexOf(gAnswer.idFinalKey) != -1) {
		return false;
	}
	for (var i = 0 ; i < p_node.guardsDoors.length ; i++) {
		if (!gAnswer.keyTakenYet[p_node.guardsDoors[i]] && p_node.guardsKeys.indexOf(p_node.guardsDoors[i]) == -1) {
			return false;
		}
	}
	return true;
}

// ---

// SEEDING TIME !
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

















// -----------------------------

// Claude's chain : [6, 9, 25, 8, 3, 21, 19, 11, 15, 23, 22, 17, 20, 5, 0, 24, 12, 1, 2, 10, 16, 7, 14] ; best = 5964 (or so I think). Found in nearly 3 hours. Phew ! 
// Edit : gjzidvtlpxwruafymbcskqheno found humanly matches well.
// My best : 3962