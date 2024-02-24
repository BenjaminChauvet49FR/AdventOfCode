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
"#....f#.......#....m..#.....#..........$ $..........#.......#...#.....#.......#.#",
"####################################### @ #######################################",
"#...#.....#...#...#.#.......#.....#....$ $....#.....#.#.......#...........#.....#",
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
"#.....#.....#...#...#.A...........#....$ $..#.......#.R.....#.......#.......#...#",
"####################################### @ #######################################",
"#.....#.........#...........#......r#..$ $......#.#...#.............#.......#...#",
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

const rawDataPerso = [ // 3962 / 1844
"#################################################################################",
"#.......++++++#...++#...........++++++#+#+++++#+++#+++++++#++++++.............#a#",
"#.#####.#######.#.###.#########.#####+#+#+###+###+#+#####+#+#####.###########.#.#",
"#.#+++#.#.....#.#..c#.++++++++#...#+#+++#+++#+#+++#+#+#+++#+#+#...#...#...#++...#",
"#.#+###.#.###.#.###.#.###########.#+###+#+#+#+#+#+#+#+#+#+#+#+#.###.#.#.#.#######",
"#.#+++#...#+#...#+#...#...........#+#+++#+#+#+++#+#+#+#+#+#+#+#...#.#.#.#.#.....#",
"#.#+#+#####+#####+#####.###+#######+#+###+#+#######+#+#+###+#+###.#.#.#.#.#.###.#",
"#.#+#+++++++++++++#+#...#+#+#..e..#+++++#+#+++++++++++#+++#+#+++#...#...#...++#.#",
"#.#########+#####+#+#.###+#+#.###.#####+#+###############+#+#+#+###############.#",
"#...#..k++++#+++++#+#.Z.#+++#...#.....#+#+++++++++#+#+++++#+#+#+++++#+++++++#...#",
"###.#.#+#######+###+###.#######.#####.#+#########+#+#+###+#+#+###+#+###+###+#.###",
"#...#.#+#+++++#+#+++#...#.....#.....#.#+#+++#+++#+#+#+#+++#+#+#+++#+++#+#+++#...#",
"#.###.#+#+###+#+#+###.###.###.#####.#.#+#+#+#+#+#+#+#+###+#+###+#####+#+#+#####.#",
"#.#++.#+#+#+++#+#+++#.....#+#.++++#.#.#+#+#+++#+++#+#+++#+#+#+++#+#+++#+#+#.....#",
"#.###.#+#+#+###+###+#######+#.#####.#.#+#+#########+###+###+#+###+#+###+#+#.###.#",
"#...#.#+#+#+++#+++#+++++++++#.#.....#.#+#+++++++++++++#+++++++#+++#+#+++#+#...#.#",
"###.#.###+###+###+###+#+#####.#.#####.###############+#########+#+#+###+#+###.#.#",
"#++...#+++#+++#+++++#+#+#.....#.++++#...#+++++++++++#+#+++#+++#+#+++++++#+++#.#.#",
"#######+###+#######+#+###.#####.#######.#########+#+#+###+#+#+#########+#####.#.#",
"#+++++++#+#+++#+++#+++#...#...#.#.......#+++++++#+#+#+#+++#+#+++++++#+++#.....#s#",
"#+#######+###+#+#+#####.###.#.#.#.#######+#####+#+#+#+#+###+#####+#+#+###.#####.#",
"#+++#+++#+++#+++#+++#+#.#...#...#.......#+++++#+#+#+#+#+++#+#+++#+#+#+++#...#...#",
"###+#+#+#+#########+#+#.#.#######+#####.#+#####+#+###+###+#+###+###+#+#####.#.###",
"#+#+++#+#+++++++++#+++#...#++++d#+++++#.#+#+++++#+#+++#+++#+#+#+++#+#+#.....#.#+#",
"#+#####+#######+#######+###+###.#####+#.#+#+#####+#+###+#+#+#+###+#+#+#.#####.#+#",
"#+++#+#+++++++#+++++++#+++#+#...#+++++#.#+#+++++#+++++++#+#+++++#+#+#+#.#++++...#",
"#+#+#+#######+#+#+#####+###+#.#####+###.#+#####+#############+###+#+#+#.#######.#",
"#+#+++#+++++#+#+#+++#+++#+++#.....#+++#.#+#+++#+#+++++++++++#+#+++#+#+#.#...#+#.#",
"#+###+###+#+#+#+###+#+###+#######.#####.#+###+#+#+#########+#+#+###+#+#.#.#.#+#.#",
"#+++#+++++#+#+#+++#+++#+++#.......#.....#+++#+#+#+++++#+++#+++#+++#+#+#...#.#...#",
"#+#+#######+#+###+#####+###.#######.#######+#+#+#####+###+#######+#+#####+#.#.###",
"#+#+#+++++#+#+#+#+#+#+++#+#.#...#++.#...#+++#+#+++++#+++#+++++#+++#+++++#+#.#w#+#",
"#+#+#+###+#+#+#+#+#+#+###+#.#.#.###.#.#.#+###+#+###+###+#+###+#+###+###+###.#+#+#",
"#+#+#+#+#+#+#+#+#+#+#+#m++#...#...#...#.#+#+++#+++#+++#+#+++#+#+#+++++#+#...#+#+#",
"###+#+#+#+###+#+#+#+#+#.#########.#####.#+#+#+###+#####+###+#+#+#######+#.###+#+#",
"#+++#+++#+#+++#+++++#+#.....++#...#...#.#+#+#+#+#+++++#+++++#+#+++++++++#.#+#+++#",
"#+###+###+#+###+#####+#.###.###.###.#.#.#+#+#+#+#####+#######+###########.#+###+#",
"#+#+++#+++#+#+++#+++++#...#.....#...#.#.#+++#+++++#+#+++++++++#...#...#...#+++++#",
"#+#+###+###+#####+#######.#######.###.#.#########+#+###########.#.#.#.#.###+#####",
"#+++++#+++++++++++#++++++.F.......#++..$ $...........f..........#...#...#+++++++#",
"####################################### @ #######################################",
"#+++++#+#.........++#.....#++++++++....$ $++++++++++#+++#+++++#+++++++++#+++++#+#",
"###+#+#+#.#######.###.###.#+#######.###+#.#########+#+#+#+###+###+#####+###+#+#+#",
"#+++#+++#...#+#...#...++#.#+#.......#+++#...#+++++++++#+++#+++++++#+++#+++++#+#+#",
"#+#+#######.#+#.###.#####.#+#.#######+#####.###############+#########+#######+#+#",
"#+#+#.....#.#+#.#...#...#.#+#.#+++++++++#...#.......#...#+++++#.....#+#+++++++#+#",
"#+###.###.#.#+#.#.###.#.#.#+#.###########.###.#####.#.#.#######.###.#+#+#######+#",
"#+++#.#+#.#.++#.#.#...#...#+#...........#...#...#+#...#.......#.#+#.#+#+++++++++#",
"#+#+#.#+#.#.###.#.#.#####+#######+#####.###.###.#+###########.#.#+#.#+#+#######+#",
"#+#+#...#...#...#.#r#+++++#.....#+++++#.#...#+#.#+++++++#+++#...++#.#+++#.....#+#",
"#+#+###.#####.###.#.#######.###.#####+#.#.#+#+#.###+#####+#+#######.#+###.###.#+#",
"#+#+++#.#...#...#.#.........#...#+++#+#.#.#+++#...#+#+++++#+#......p#+++#.#+#.#+#",
"###+#+#.#.#.###.#.###########.###+#+#+#.#.###+###.#+#+#####+#.###+#######.#+#.###",
"#+++#+#.#.#...#...++++#.....#.#+++#+++#.#...#+#...#+++++#+++#.#+++#.K...#.#+#...#",
"#+#####.#.###.#######+#.###Q#.#+#######.###.#+#.#####+###+###.#+###.###.#.#+###.#",
"#+++++#...#...#+#...#+#.#+#...#+++#.....#...#+#.....#+#...#...#+#...#+#..j#+#...#",
"#+###+#####.###+#.#.###.#+#########.###.#.#########.###.#.#.###+#.###+#####+#.###",
"#+++#+#.....#+++#.#.B...#...#...#...#...#.#...++++#.....#.#...#+#.++++++++++#.R.#",
"#+###+#.#######+#.#######.#.#.#.#.###.###.#.#.###+#######.###.###.#############.#",
"#+#+++#.......#+#n++++#...#.#.#...#...#+#...#...#+++++#...#+#.....#++u..#.....#.#",
"###+#+#######.#+#####+#.###.#.#####.###+#+#####.###+###.###+###+###+###.#.###.#.#",
"#+++#+#...#...#+++++#+#.#...#...#+#...#+#+++#...#+++#...#+++#+#+#+++#...#.#++.#.#",
"#+#####.#.#.###+#+#####.#.###+#.#+###.#+#####.#######.#####+#+###+###.###.###.#.#",
"#...#...#.#.#+++#++++++.#.#+++#.#+++#...#.....#.......#+++++#+++++#+#...#...#...#",
"#.#.#.###.#.#+#########.#.#####.###+###.#.#.###.#######+###########+###X#+#.###.#",
"#.#..l#...#.#+++#.......#.....#...#+++#.#.#o#...#+#+++++#...#......x....#+#.#...#",
"#.#####C###.#+###.###########.###.#+###.#.###.###+#+###+#.#.#I#############.#.###",
"#...++#...#.#+#...#...#.....#.#...#+#...#.#...#+++++#+++#.#...#v......G.#...#..q#",
"###.#####.#.###.###.#.#.###.#.#.###+#.###.#.###+#####+#+#.#####.#######.#.#####.#",
"#+#y#...#.#...#.#...#.#...#.#...#...#...#.#.#+++#+++++#+#..i..#...#.....#...#...#",
"#+#+#.#.#.###.#.#.###.#+#.#.#####.#.###.#.#.###+#+###########H#+#.#.#####+#.#.###",
"#+++#.#.#...#.#...++#.#+#.#.#+++#.#.....#.#...#+#++++++++...#.#+#.#g..#+++#.#...#",
"#+###.#.###A#.#######.#+#.#.#+###.#######.###.#+#########.#.#.#+#.###.#####.###.#",
"#+#...#.....#.........#+#.#.#+#...#+++++#...#.#+++++++#...#.#.#+#.#+#.#...#...#.#",
"###.#####################.#.#+#.#####+###+#.#.#########.###.#.###.#+#.#.#.###.#.#",
"#...#.......#.............#..t#.#...#+++#+#.#.#.......#.#...#...#.#+#.N.#.....#.#",
"#.###.#####.#.#########.#######.#.#D#+#+#+#.#.#.#####.#.#.#####.#.#+###########.#",
"#.#...#+++#..z#+#.......#.....#...#.#+#+#+#.#...#...#...#.#+#..h#.#+++++#++++++b#",
"#.#.###+#+#####+#.#######.###.#####.###+#+#.#####.#.#####.#+#.###.#+###+#+#######",
"#...++++#+++++++#.........++#.......++++#+#.....E.#.......++#...V.#+++#+++++++++#",
"#################################################################################"
];

const rawDataBank = [rawDataPerso, rawDataClaude, rawDataGithub];