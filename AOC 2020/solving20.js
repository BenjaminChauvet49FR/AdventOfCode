const rawData = [
"Tile 2141:",
"#.#...#...",
"###..#...#",
".....##...",
"..#.##..#.",
".#....#..#",
"...#######",
".....#...#",
"#.#......#",
"##........",
"########.#",
"          ",
"Tile 3467:",
"..#.#....#",
"#.....#..#",
"....#....#",
"...#......",
"#.#....###",
".#....#..#",
"#.........",
".....#...#",
".##...#...",
"##.#..#.#.",
"          ",
"Tile 3389:",
"......##..",
".##...#...",
".#..###...",
"....##.#..",
"#..#.#....",
".#.##..#..",
"#....##...",
".#...#..##",
"..##.#...#",
"####..#..#",
"          ",
"Tile 2797:",
"#..###..##",
"#.........",
"#.........",
"##.#....#.",
".........#",
".#...#...#",
".........#",
"..#.#....#",
"..#...##..",
"...##..##.",
"          ",
"Tile 1321:",
".#....#..#",
"......#..#",
"#.#......#",
"#..#.#...#",
".........#",
".#..##....",
"...#.....#",
"#....#..#.",
"..##.##...",
"##.###.###",
"          ",
"Tile 2741:",
"..#.#.####",
"#......##.",
"#.#...#.##",
".##......#",
"..#.#....#",
".#.#.....#",
"#........#",
"..#......#",
"#...#....#",
"...#..#..#",
"          ",
"Tile 3169:",
".##.#.#...",
"#.#..#...#",
"#...###...",
"..#...##..",
".#..#.#.##",
"..#.......",
"...#......",
".......#..",
"#.#.......",
"#.#.##..##",
"          ",
"Tile 1097:",
".##.#..#..",
"..#...##..",
"###.#.#...",
"..#..##...",
"......##.#",
"...#..#..#",
"#.#..#..##",
".##.#...#.",
"##.#..#...",
"##..#...##",
"          ",
"Tile 3457:",
"#.#.#.####",
"..#.#.#...",
"..#.......",
"##.....#..",
"#........#",
".......#.#",
"#........#",
"#.......##",
"#..#.#..##",
".##.##.#..",
"          ",
"Tile 1471:",
"##.#.#.##.",
"..........",
"...#...#.#",
"#...#...#.",
".....#..##",
".......#.#",
"........##",
"...#...#.#",
".#....####",
".#.##.##.#",
"          ",
"Tile 1531:",
"#....#..#.",
"#.#....#..",
".......#..",
".##.####.#",
"#..#.##..#",
"#........#",
"##.#.#...#",
"#...#....#",
"..........",
"...##..###",
"          ",
"Tile 1523:",
"##..##.##.",
"...#..##..",
"#....#.#..",
"....#.####",
"#.#....#.#",
"....##..#.",
"#..#....#.",
"#..#..##.#",
"..#...##..",
".#..####..",
"          ",
"Tile 1447:",
".#..#...##",
".........#",
"..........",
"#.#....#.#",
"..#....##.",
"#......#.#",
"#.....#..#",
"#......#.#",
"..........",
"######....",
"          ",
"Tile 2179:",
"#..#...#.#",
"..#......#",
"........#.",
"#.....#..#",
"......##..",
"#..#.##..#",
"#.##..#.#.",
"###.#..##.",
"...#..#..#",
"#.##..#.#.",
"          ",
"Tile 1789:",
"#.#.#.##.#",
"#..#.#....",
".#.#......",
"#.#....#..",
"##..#...#.",
"##..#....#",
"#.###.....",
"#..#.#.#..",
"#.......#.",
"#.##..####",
"          ",
"Tile 2521:",
".###..##..",
"..#.##....",
"##.#.....#",
"..##...#.#",
"#.###.#..#",
".........#",
".........#",
"#.........",
".....#.#.#",
".#....#.#.",
"          ",
"Tile 3583:",
"..#..#.#..",
"..#.....##",
"#......#..",
".........#",
"#...##.#.#",
"..#..#....",
"....#....#",
"#..#..#..#",
"#..#..###.",
"##...#.#.#",
"          ",
"Tile 2633:",
"..#..#...#",
"..........",
"#..###..##",
"###......#",
"..#...#..#",
"#.###..###",
"##..#.##..",
"###.#.#..#",
"#....#....",
"#.#.######",
"          ",
"Tile 1667:",
"###.##..#.",
"........#.",
"..#...##.#",
"........#.",
"#..##....#",
"#.#..#..##",
".##......#",
"..#.......",
"#..#..#..#",
".###..##.#",
"          ",
"Tile 2003:",
"......#...",
"#.#.......",
"#..#......",
"#.....#..#",
"##.......#",
".....##.##",
"#.###.....",
"#..#.#...#",
"......#...",
"#.##...#..",
"          ",
"Tile 1103:",
"###.######",
"...######.",
"........#.",
"#....##..#",
"#.....#..#",
"#....#....",
"#..##..#.#",
"...##....#",
"#......#..",
"##...#.#.#",
"          ",
"Tile 3167:",
"..##...##.",
"##.......#",
"...#...#.#",
".......#..",
".........#",
"........#.",
"##.......#",
"##.#.....#",
"..#.#.....",
".#.####.##",
"          ",
"Tile 1031:",
"#.##....##",
"#.#..#...#",
"#...#.....",
"#.#.......",
"#.#..##...",
"#...#....#",
"##..#....#",
".#.#.....#",
"#.......##",
"...#####.#",
"          ",
"Tile 2539:",
"##...#..##",
"..#....#..",
"......#..#",
"#...###..#",
"...#...#..",
"##....####",
"#.......##",
"#......#.#",
".........#",
".##.#..###",
"          ",
"Tile 1871:",
".#..#.#.##",
"...###...#",
".........#",
"#...##....",
"...###...#",
"###.#..#.#",
"#..##....#",
"##.....#..",
"#....#..##",
"#####.##..",
"          ",
"Tile 2383:",
".#.....###",
"#.#.......",
"#.....#..#",
".#...##..#",
"...#...#.#",
"#....#.#.#",
"...#....##",
"##.#..####",
"...#.....#",
"###.##.#..",
"          ",
"Tile 1237:",
"##.#.#.##.",
".##...####",
"#...#..#..",
"##.#..#.#.",
"##....#.#.",
"....#..###",
"....#....#",
"#.......##",
"..##...#.#",
"#.#..#..##",
"          ",
"Tile 1093:",
"..##.###..",
"....###...",
"#..#.#....",
"#.........",
"..........",
"..#....#.#",
"#.....#...",
"........#.",
"......##.#",
".#...#..##",
"          ",
"Tile 1583:",
"..###.#..#",
".........#",
"......##..",
"#....#..##",
".###...###",
"..##..#.#.",
"....##.#.#",
"#.....#.#.",
"##.......#",
"#.#.##..#.",
"          ",
"Tile 2243:",
"..#..#####",
"...#....##",
"#.....#..#",
"#......#.#",
"..#.#..#.#",
".#...#...#",
"##.....#..",
"##.##.###.",
"#........#",
"#..#...#.#",
"          ",
"Tile 1297:",
"..#......#",
"##..#.....",
".##.#.....",
".....##..#",
".#....##..",
"#.#.#...##",
".#........",
".##.##.#.#",
"..#.###..#",
"#..#...#..",
"          ",
"Tile 1877:",
"....###.#.",
"#....#....",
".##...#..#",
".........#",
".........#",
".#..##.#..",
"...#.....#",
"#.....#..#",
"...##.....",
"#.#.#.#...",
"          ",
"Tile 3779:",
".#...##..#",
".#.......#",
"#.........",
"#.......##",
".....#...#",
".........#",
"...#.#...#",
"#.........",
"..#..#.###",
"#.#####.#.",
"          ",
"Tile 2029:",
"....##..##",
"#..###...#",
".....#..##",
"#...#.#...",
"##..###..#",
"#.#..##.#.",
".......#.#",
"..##..#..#",
"..#....#.#",
".##..#####",
"          ",
"Tile 3221:",
".#..#..##.",
".###..#...",
"....#.##..",
"#.#.#.#.#.",
"#..#...#..",
"..........",
"#.#.....##",
"###....#.#",
"..###...#.",
"#......#..",
"          ",
"Tile 3463:",
".#.#......",
"#...#..#..",
"......#..#",
"#..#.##..#",
"#.....#..#",
".#..###.#.",
"#####...#.",
"#.#....#..",
"#.........",
"##.###.#.#",
"          ",
"Tile 3331:",
"##.###..##",
"##..#..#..",
".....##...",
"..#...#.#.",
"#..#.#...#",
"...###....",
".........#",
".###....##",
"#...####.#",
"..#.##....",
"          ",
"Tile 2473:",
"..####.#.#",
"##.#....##",
"......#.##",
"##.......#",
"##...##..#",
"##....#..#",
".#.#.#....",
"......##.#",
"..#.##....",
"#..###...#",
"          ",
"Tile 2459:",
"##.##....#",
"..........",
"#.#....###",
"#.........",
"##....##.#",
"...#......",
"###.......",
"..........",
"#.....#...",
".#.###.#.#",
"          ",
"Tile 3877:",
"...#.#.#..",
"#....#...#",
".#......#.",
"......##.#",
"....#.##.#",
".#.#..#.##",
"##........",
"....#.####",
"###...#.##",
"######..##",
"          ",
"Tile 2161:",
"..##...#..",
"#....#...#",
"#.#.#.#..#",
".##....###",
"...#..#...",
"#.........",
".##....##.",
".........#",
"#........#",
".#.#.###..",
"          ",
"Tile 3361:",
"#..##.....",
".##.....#.",
"#........#",
"#..#......",
"#.........",
"##...##..#",
"..#..#....",
"#.#.......",
"...#.....#",
"###.#.##..",
"          ",
"Tile 2089:",
".##.####.#",
"...#....##",
".###.#.#..",
".........#",
"..#.##..#.",
".###..##..",
"..........",
"...##.#..#",
"#..#....##",
"#...####.#",
"          ",
"Tile 2711:",
".##.#..###",
"#.#.....##",
"#..###.#.#",
".##.....##",
"...#....#.",
"##......#.",
"#........#",
"..#.......",
"###..#.#.#",
"...#.##..#",
"          ",
"Tile 1753:",
"....##.###",
"#........#",
"#...#...#.",
"..##.#....",
"#..#..#.##",
"#.....#..#",
"#.........",
"...#......",
"##.....#..",
"##..#.....",
"          ",
"Tile 2953:",
".#.####..#",
"...#.....#",
".##.....##",
"#...#.....",
"##........",
"###.#..#.#",
"#..#.##...",
"#..#...#..",
"#.#......#",
"..#.#...#.",
"          ",
"Tile 3593:",
"#..#.#..#.",
"#.#.....#.",
"#.#.......",
"#..#.....#",
"...#..#...",
"#........#",
"#....#.#.#",
"#..#......",
"..#......#",
"...#..#.##",
"          ",
"Tile 1483:",
"..#.####..",
".#.......#",
"##........",
".......#..",
"##..#....#",
"#........#",
"..#...#...",
"#.........",
"###....#..",
"..#.#..##.",
"          ",
"Tile 1657:",
"#####..##.",
".###....#.",
"...#...#.#",
"#..#....#.",
"#.#...#.#.",
".....##.##",
".......#.#",
"####......",
"#..##....#",
"..#...#..#",
"          ",
"Tile 3307:",
".#..##.###",
"....#..#..",
"###..#..##",
"#.###.....",
"..###....#",
"#..#...#.#",
".........#",
"....#.###.",
"..#......#",
"#.##.#.###",
"          ",
"Tile 3617:",
"...#.#.#..",
"..........",
".#....#.##",
".#.#...#..",
".#.....#..",
".##.#..###",
"#..#......",
"#......#..",
".#..#...#.",
"#.##..#..#",
"          ",
"Tile 3001:",
"##...#####",
"..##.....#",
"#.....#.##",
"##........",
"....#.....",
"#....#..#.",
"...##.#...",
".......#.#",
"#.....#..#",
"#.####....",
"          ",
"Tile 1013:",
".##..#....",
"#....##...",
"#...#...##",
".#.###...#",
"....#..#..",
"##...#..#.",
"..#....#..",
"#...#..#.#",
"...#.....#",
"####.#####",
"          ",
"Tile 2801:",
"#...##.##.",
"#.....#...",
"......#...",
"#....#...#",
"...##.....",
".#......#.",
"....##..##",
"#....#####",
"....##...#",
"..#..###..",
"          ",
"Tile 3079:",
"..##.#...#",
"#.....#...",
"...#.....#",
"..#..#...#",
"#..#...###",
"#.##......",
"#.###.....",
"#........#",
"#.....#.#.",
"..#.#...#.",
"          ",
"Tile 1231:",
"####.#####",
"..#.#....#",
".#....#...",
".#..#....#",
"..#......#",
"#..#.###.#",
".#.......#",
"#.##...#.#",
".....#.###",
".###.###.#",
"          ",
"Tile 1171:",
"..#..#..##",
"#...#....#",
"#....#...#",
"#.........",
"###......#",
"#...#..#..",
"..#..#.#..",
"...#...#..",
".....#....",
"###..#.###",
"          ",
"Tile 3319:",
"###.#####.",
"..........",
"..##......",
"#.......#.",
"#..#.#..#.",
".#.##.....",
"..###..#.#",
"#...#...##",
"##.#.#....",
"...##...##",
"          ",
"Tile 2129:",
"##...#.###",
"#........#",
".....#...#",
"##.......#",
"#.#.#.#...",
"......#...",
"#....#..#.",
"..........",
".......#.#",
".###.###.#",
"          ",
"Tile 3371:",
".##.......",
"#....#.#.#",
"..#.#...##",
"#.........",
".#.....#..",
"#.....#.##",
"...#......",
"##....#...",
"..#..##..#",
"#..#.#####",
"          ",
"Tile 1129:",
"#.##..#.#.",
"#......###",
"#.#....#..",
".####...##",
"#...#..#.#",
"#..#......",
".##.....##",
"#..#.....#",
"..........",
"#.###..#..",
"          ",
"Tile 1399:",
"#.....#.##",
"#........#",
".....##...",
"........##",
"...#...#..",
"#.###..##.",
"#..#.#.#.#",
"....##.#.#",
"#.##.....#",
".#..###.##",
"          ",
"Tile 2503:",
"#...#...##",
"#..#.#....",
".....#.#.#",
"...#.....#",
"..#......#",
"..##.....#",
".....#....",
"...#...#.#",
".#........",
"#.###...#.",
"          ",
"Tile 3529:",
".##...####",
".#.....###",
"#..#..##..",
"....##.#.#",
".......##.",
"#........#",
".........#",
"#.##......",
"##....#..#",
"....#.##.#",
"          ",
"Tile 1181:",
".#.##.#.##",
"#..#......",
"#........#",
"..##......",
"##.#...#.#",
".#.##..#.#",
"##........",
"#..#..#..#",
"#.#...#..#",
"..#.#.##..",
"          ",
"Tile 1759:",
"...#..#..#",
"..#...#...",
"##....#...",
"#.#..#.#..",
"#.......##",
"#...#...##",
"##......#.",
"##...#.###",
"##...#....",
".##...#...",
"          ",
"Tile 2543:",
"######.###",
"####....##",
"##.#..#.#.",
"##...#....",
"..........",
"..#......#",
"#.......##",
"##........",
"..###..##.",
"##....####",
"          ",
"Tile 3613:",
".##..#....",
"......#..#",
"#.........",
"....##...#",
"....#....#",
".#..#.....",
"....##...#",
"#.#..#..#.",
"#..#.....#",
"##.##...##",
"          ",
"Tile 3853:",
"....######",
".####....#",
"..###.....",
"#.#.......",
"#..#..#...",
"....#...##",
"##....##.#",
"#..##..#..",
"#.#..#...#",
"..#######.",
"          ",
"Tile 3187:",
".#..#.####",
"#.##....#.",
".....#....",
"##....#...",
".#.##.#...",
"#...##...#",
"#....#...#",
"......#...",
"#....#..#.",
"#..###....",
"          ",
"Tile 2437:",
"#..#.##.#.",
"##...###.#",
".....#....",
".#......#.",
"...##.#...",
"#..###...#",
"#....#....",
".#....#..#",
"..........",
".##.#.#..#",
"          ",
"Tile 2917:",
"#.....#...",
".#.#...#..",
"#.##.##..#",
"......#..#",
"...###....",
"##.#......",
"....#....#",
"###.....##",
".#.#....##",
"####.#..##",
"          ",
"Tile 1511:",
"#...###.#.",
"..##.#..##",
"..#...#...",
"##.#..#.##",
"##....#..#",
"#.........",
"#........#",
"........#.",
"#.....##.#",
".#.....##.",
"          ",
"Tile 2699:",
".#.#......",
"#........#",
"..##...#..",
"......##..",
"..##..#..#",
"#.###..#.#",
"#.#..#...#",
"#.##.....#",
"..###.....",
"###..##.##",
"          ",
"Tile 3259:",
"###.###..#",
".........#",
"#.#.....#.",
"...#..#...",
".##....###",
"##.......#",
"...#.#...#",
"...##...##",
"#.........",
"......#...",
"          ",
"Tile 1429:",
"....##.##.",
".###...#..",
"##.#...###",
"#.........",
"#....#...#",
"#.....#...",
"...#.##...",
"#.......##",
".#......##",
"###.#.##..",
"          ",
"Tile 2039:",
"#....###.#",
".#..#.#..#",
"#.#.#...#.",
"..#.......",
"##...#..##",
"#.#.......",
"#......##.",
"..#....#.#",
"#.#.......",
"..####.#..",
"          ",
"Tile 3637:",
"#.###.#.##",
"#......###",
"#.........",
".....#...#",
"..#..#.##.",
"#..#....#.",
"........#.",
"..#.......",
"...#......",
"...#.###.#",
"          ",
"Tile 1163:",
"##.###.##.",
"#.##.#....",
"..#.#.....",
"#..####.#.",
"#..#......",
"#......#.#",
".#........",
".#.##.....",
"#.##....##",
"##.#......",
"          ",
"Tile 3761:",
"...##.###.",
".........#",
"....#.....",
"##.......#",
"#.......#.",
"...##.....",
"#.#.......",
".........#",
"#.#......#",
".##.###...",
"          ",
"Tile 1777:",
"##...##.##",
"....#.....",
".#...#....",
"#....#.#.#",
"..#.#....#",
"#....###.#",
"##...#....",
"#...###..#",
"#...##..#.",
"......#.##",
"          ",
"Tile 2857:",
".#..#.##..",
"#..#.....#",
"##........",
"...#.#..#.",
".##..#..#.",
"#####.##.#",
"#..##.....",
"##...#.#.#",
"#...#.....",
"...##.##.#",
"          ",
"Tile 3061:",
".#.#.###.#",
"#........#",
".###.###..",
"..##.....#",
"#...#....#",
"#.#.#..###",
".##......#",
".....##...",
"....#.....",
".#..#..#..",
"          ",
"Tile 1721:",
"..#..#####",
".#....###.",
"#..#...#..",
"#.........",
"#....#...#",
"...##..##.",
"#........#",
"#......#..",
"#.........",
"....##.###",
"          ",
"Tile 2693:",
".....#.#..",
".#......#.",
".#.....#.#",
"#....##..#",
"#..#......",
"####.##..#",
"#.#.....#.",
"..........",
"#.#....#.#",
"#.##..#...",
"          ",
"Tile 1259:",
"#...#..###",
"#...#...##",
"##..#.#..#",
"#.#.......",
"#......#.#",
"###.......",
"#...#.....",
"...#.....#",
".#...#...#",
".#...##.##",
"          ",
"Tile 1291:",
"#..##.#...",
"#.....##.#",
".#..#....#",
"#...#...#.",
"..###.#...",
"###......#",
"#..#...#.#",
"#....#....",
"..##......",
"#..#..#.#.",
"          ",
"Tile 1051:",
"#...####.#",
"##..#.....",
".........#",
".#..#..#..",
"##...#..##",
"...##....#",
"##........",
".#......#.",
"...#.....#",
"###.###..#",
"          ",
"Tile 2719:",
".#.##..##.",
".#.....#..",
"#.....#...",
"##.#.....#",
"#######...",
"##...##.#.",
"......##..",
"........##",
"..#....###",
"#..#..#.##",
"          ",
"Tile 3533:",
"...##....#",
"##.......#",
"#....#....",
"....##...#",
".....##.##",
"....#..##.",
"#.........",
"###...#.#.",
"#.........",
"#..####...",
"          ",
"Tile 2659:",
".##.#...#.",
".#..#...#.",
"....#...##",
".#..#.#..#",
"#.##.##..#",
"..##.....#",
"..#..#..##",
"..#.......",
".........#",
"#....####.",
"          ",
"Tile 3517:",
"#..##.#.#.",
".#...#...#",
".#.#.....#",
"##.......#",
"..#.......",
"#......#..",
".........#",
"...##...#.",
"......#.##",
"..##...#..",
"          ",
"Tile 2371:",
"###.##.##.",
".#.#.##..#",
".....#...#",
"#.#.#..#.#",
"####...#.#",
"#.#.#.##..",
"..#.#.....",
"##........",
"..#..#...#",
"#...#.###.",
"          ",
"Tile 1601:",
".####..##.",
"#.........",
"......#...",
"#.#..##.#.",
"..##.#.#.#",
"#.......#.",
"#..#.....#",
"#.....#.#.",
"..###....#",
".#..######",
"          ",
"Tile 2273:",
"..###.###.",
"....#.....",
".##...#...",
"#.#...#...",
"....#.....",
".#.....#.#",
".#......#.",
".#.#..#...",
"........##",
"##..###...",
"          ",
"Tile 3917:",
"####.#...#",
"#...#...##",
"#.##...###",
"#..#...##.",
"....#....#",
".........#",
"......#..#",
"###.#.#...",
"...##...##",
"#..#####.#",
"          ",
"Tile 3701:",
"#..###...#",
"###..#...#",
"#.#...##.#",
".##.#.#..#",
".##..#..##",
"##..#.#...",
".##.#.#.##",
"....##.#..",
"#.....#...",
"..##.##.#.",
"          ",
"Tile 2081:",
"...####.#.",
"........##",
"#.#...#..#",
".###...##.",
"#..#.##...",
"#....#....",
"#.#..###..",
"........##",
"..#......#",
"...##..###",
"          ",
"Tile 2339:",
"#.#..#..##",
".#..#...#.",
"........##",
".##....#..",
"#.....#.#.",
"........#.",
"....#...##",
".#....##..",
"#........#",
"#.##.#...#",
"          ",
"Tile 1373:",
"###.###...",
".........#",
"#......###",
"#...##...#",
".###....#.",
"#..#.....#",
"..........",
"##..#..#.#",
".###.#..##",
"###...##..",
"          ",
"Tile 2837:",
"##....#...",
"...#...#.#",
"#.........",
"..#.......",
"##.#......",
".#....#...",
".###....#.",
"##......##",
".....#....",
".#.##.....",
"          ",
"Tile 3803:",
"#..#..##..",
".......#..",
"##.###....",
"#.#.#.#...",
"....##....",
"#.###..#.#",
"....#...##",
"........#.",
"..##.....#",
"..#..###..",
"          ",
"Tile 3559:",
"#....##.##",
"...##.....",
"..#..#...#",
"#........#",
"##........",
"#.#.......",
"#.#..#.#.#",
"#....#..#.",
"#...#.....",
"##.#.#....",
"          ",
"Tile 1549:",
"####.##.#.",
"......#...",
"#..#.#..##",
"#..#..#.#.",
".#.....#.#",
".........#",
".........#",
"#....#...#",
"#.......#.",
"#####....#",
"          ",
"Tile 1699:",
".#.##.#.#.",
".#..####..",
".#.#......",
".###..##.#",
"#........#",
"##.#......",
".#.#.##..#",
"#.#..#....",
"#.......#.",
".###.##..#",
"          ",
"Tile 2647:",
"###.......",
".......#.#",
"..#.#...#.",
"#..#...#..",
"..##......",
"#.#.#....#",
"....#.#.#.",
"#.........",
"#...#.....",
"#.###...##",
"          ",
"Tile 1361:",
"...##.#.#.",
"..........",
"#.........",
"#.#....#..",
"##..##...#",
"....#.....",
"#.......#.",
"..........",
"#.##.#.#..",
"#..##.#.##",
"          ",
"Tile 3851:",
"##........",
"...##.#...",
"....#.....",
"....####..",
"#.....#..#",
"#...#.##.#",
"#..#.....#",
"...#..##.#",
"#.#....#..",
"#..####...",
"          ",
"Tile 3911:",
"##..##.##.",
"#.#.....##",
"...#.#...#",
".....#....",
".#...#..#.",
"...##.##..",
"#.#.#.####",
".......#.#",
"...#.#....",
"##..#.##.#",
"          ",
"Tile 3719:",
"##.##.###.",
"....#..#..",
"...#......",
"#......###",
".#.#....##",
"..###...#.",
"....#..#.#",
"..........",
"#..#....#.",
"#####..###",
"          ",
"Tile 2239:",
"###.##.##.",
"###......#",
"#.##.#..#.",
"..#....#..",
"......##..",
".....#..#.",
"...#......",
"#.........",
"..........",
".#.....###",
"          ",
"Tile 1249:",
"#.#..####.",
"...#.....#",
"....#....#",
".........#",
".#.##...##",
"..#.####.#",
"...###....",
"#.........",
"#.....#...",
".#..#.#...",
"          ",
"Tile 2707:",
".##.#.....",
"#.....##.#",
".#..#...##",
"...#.#.#..",
"..#.......",
".#.#...#..",
"#.....#...",
"#.##......",
".#........",
".###.#..##",
"          ",
"Tile 2897:",
"..###...#.",
"...#..#..#",
"#......#..",
"#..#.....#",
".....#....",
"..##..####",
"#...##...#",
"#.#......#",
"##......##",
"......#..#",
"          ",
"Tile 3623:",
"#..#.....#",
"##.#...##.",
"##.......#",
"#.#....#.#",
".#....#..#",
"#.##..#...",
".##....#.#",
".#.......#",
"#.#.#..#.#",
"#..#.###.#",
"          ",
"Tile 2617:",
".######...",
"#..#.....#",
"..........",
"#####....#",
"....#....#",
"##.###..##",
"......##..",
".....##..#",
"#.........",
"...####.#.",
"          ",
"Tile 1049:",
"..#.##...#",
".#.....#.#",
"......#..#",
"#####.#...",
"......#...",
"....#.....",
"#.........",
"#.........",
"##.......#",
"..#..#.#.#",
"          ",
"Tile 3019:",
"##.##..#..",
"##...#..##",
"...#....#.",
"..........",
"...#......",
"#...#...#.",
"####.##.#.",
"###......#",
".....#....",
"######...#",
"          ",
"Tile 3067:",
"#...#.#..#",
"#.#.##...#",
"....#.#..#",
"##.#......",
"....###..#",
".#.....#..",
".#.......#",
"......#..#",
"##.#.....#",
".#####.###",
"          ",
"Tile 3203:",
"#...###.##",
"#.#......#",
"..#..#..#.",
".##...##.#",
"#.....###.",
"...##....#",
"#......#.#",
".#........",
".#.#....##",
"##.#####.#",
"          ",
"Tile 2113:",
".#.#.#..#.",
"#...#.....",
"###.....##",
"#.###.....",
"##........",
"#...##....",
"......####",
"......#..#",
"#..###.##.",
"..#.###.##",
"          ",
"Tile 2591:",
"##..###...",
"........##",
"#........#",
".....##..#",
".........#",
"..#...#...",
"....#..#.#",
"#......#..",
"...#......",
".##.##.#.#",
"          ",
"Tile 1499:",
".....##..#",
"...#......",
".##.....#.",
"......##.#",
".#........",
"#..##.#...",
"....##...#",
"#........#",
"....#.....",
".#.##.#..#",
"          ",
"Tile 3413:",
"#..#..##..",
".#..#..###",
"#..#....##",
"##.......#",
"#.###.....",
"#....#..##",
"#........#",
".....#...#",
"#...#....#",
"#.#..#..#.",
"          ",
"Tile 3923:",
".#...#####",
"#..####...",
"#.##....#.",
"#....##..#",
"#.#...##.#",
"..#..#....",
"#.#......#",
".#..#..#.#",
"#.##....#.",
"###.###...",
"          ",
"Tile 3527:",
"#.##...###",
"#......##.",
"#..#..#..#",
"....#....#",
"#.....#.##",
"..........",
"#........#",
"#..#.#...#",
".##..#...#",
"#.#.##.###",
"          ",
"Tile 2957:",
"###.#...#.",
"#.#..#....",
"...#.....#",
"#.#......#",
".##.....#.",
".........#",
"....#.....",
"#......#.#",
"...#......",
"#..##.##..",
"          ",
"Tile 1481:",
"##....#...",
"...#...#.#",
"#.##......",
".......#..",
".#..#..#.#",
".....###.#",
"#.........",
".......##.",
"......#...",
"..###....#",
"          ",
"Tile 1747:",
"###..#####",
"..#.##....",
"##.......#",
".#........",
"#.##.....#",
"...#......",
"#........#",
"#.##...#.#",
"####......",
"##.##...#.",
"          ",
"Tile 3659:",
".##.###...",
"##..##.##.",
"####..#.##",
"....##.###",
"#.........",
".##.#.#..#",
".#...#..##",
"..####.##.",
"#..#..#...",
"..###...#.",
"          ",
"Tile 2621:",
"#####....#",
"...#....#.",
".##......#",
"..###....#",
"...#..#...",
".........#",
"#.........",
".#..#..#..",
".#...##...",
"#......#.#",
"          ",
"Tile 2927:",
".#..####..",
"......#.##",
".......#.#",
"#...#.##.#",
"##...#..##",
"#.....##.#",
"#.......#.",
"##........",
"#.....#...",
"##.#.##...",
"          ",
"Tile 3727:",
"..#.....#.",
"#........#",
"####..#..#",
"##.#....##",
"...#......",
"###....#..",
"#..##..#.#",
"#.#.#...##",
"#...#.....",
".####.##.#",
"          ",
"Tile 2803:",
"##.##..###",
"#....###.#",
"#.....##..",
"#.#...#...",
".#.#......",
"#...##..##",
"......#...",
"##.....#.#",
".##.#..##.",
"..##.##...",
"          ",
"Tile 2593:",
".##.#....#",
"#.#.#.#...",
"#.......##",
"..........",
"...####...",
"....##....",
"#...##.#.#",
"#...##..##",
".##......#",
"##....##.#",
"		  ",
"Tile 3109:",
".###.#..##",
"#.........",
".#...#..##",
"##...#...#",
"#..#....#.",
"#.........",
"#........#",
"#.##..#...",
".#.......#",
"#.#####..#",
"		  ",
"Tile 3797:",
"#...##.##.",
".....#..#.",
"##..##.#..",
"#........#",
".#...#....",
"##..#.#...",
"##....#...",
"###.##...#",
"#......#.#",
"##.###..#.",
"		  ",
"Tile 1367:",
"##.#..##.#",
"..#.......",
".#.......#",
"...#..##..",
".##....##.",
"#..#.##..#",
"..#...#..#",
"#.#......#",
"#..#....##",
"...##..#..",
"		  ",
"Tile 2309:",
"##.#.####.",
"..###.....",
"...#....##",
"..#....#..",
".#....#..#",
"##....#..#",
"..#......#",
"..##..##.#",
".....###.#",
"#..##.##.#",
"		  ",
"Tile 2087:",
".#.#.#.#.#",
"#.##....#.",
"#..#....#.",
"...#......",
"#.......##",
"...#..#...",
"#...###..#",
".#....#..#",
".#.###...#",
".#.#######",
"		  ",
"Tile 2441:",
"....####.#",
".........#",
"#.....##..",
".#..##.#.#",
"####.#..##",
"#.#.....#.",
"#.#.#.##.#",
"....#...##",
"###..###.#",
".#.....##.",
"		  ",
"Tile 3643:",
"##.#...###",
"..##....##",
".....#....",
"#.#.#.#...",
"...#.#.#..",
"....##....",
"....##....",
"#.....##.#",
"#.......##",
".......##.",
"		  ",
"Tile 3251:",
"##...#.#..",
".#.......#",
".#....##..",
"..#.....##",
".#.#......",
"..#..##.##",
".##..###.#",
"....#....#",
"##..##...#",
"#.#..###.#",
"		  ",
"Tile 1787:",
"#.#.#..#.#",
"..........",
"..#......#",
"..........",
".#......#.",
"..#....#..",
"........#.",
"##....#..#",
"..##......",
"###.#...#.",
];

const PIECE_LENGTH = 10;
const MAX_HALF_POWER = 2**(PIECE_LENGTH-1);

const gData = {
	
}

function init() {
	gData.pieces = [];
	var i = 0;
	var number;
	var sideLeft, sideUp, sideRight, sideDown;
	var j;
	while (i < rawData.length) {
		number = parseInt(rawData[i].substring(5,9));
		i++;
		sideLeft = 0;
		sideUp = 0;
		sideDown = 0;
		sideRight = 0;
		for (j = 0 ; j < PIECE_LENGTH ; j++) {
			sideUp *= 2;
			sideUp += (rawData[i][j] == "#" ? 1 : 0);
			sideRight *= 2;
			sideRight += (rawData[i+j][PIECE_LENGTH-1] == "#" ? 1 : 0);
			sideDown *= 2;
			sideDown += (rawData[i+PIECE_LENGTH-1][j] == "#" ? 1 : 0);
			sideLeft *= 2;
			sideLeft += (rawData[i+j][0] == "#" ? 1 : 0);			
		}
		i+= PIECE_LENGTH +1;
		gData.pieces.push({
			number : number,
			sides : [sideLeft, sideUp, sideRight, sideDown], // High convention : LURD = 0123
			matchingSides : 0
		});
	}
}

function findMatchings() {
	gData.correspondings = [];
	var i, dir;
	for (i = 0 ; i < 2**PIECE_LENGTH ; i++) {
		gData.correspondings.push([]);
	}
	for (i = 0 ; i < gData.pieces.length ; i++) {
		for (dir = 0 ; dir <= 3 ; dir++) {	
			putPieceInMatchings(gData.pieces[i].sides[dir], i, dir);
		}
	}
	var value, smartValue, k;
	for (i = 0 ; i < gData.pieces.length ; i++) {
		for (dir = 0 ; dir <= 3 ; dir++) {	
			value = gData.pieces[i].sides[dir];
			smartValue = minCorresponding(value);
			for (k = 0 ; k < gData.correspondings[smartValue].length ; k++) {
				if (gData.correspondings[smartValue][k].index != i) {
					break;
				}
			}
			if (k != gData.correspondings[smartValue].length) {
				gData.pieces[i].matchingSides++;
			}
		}
	}
}

function flipping(p_value) {
	var alternateValue = 0;
	var emptier = MAX_HALF_POWER;
	var value = p_value;
	var power = 1;
	while (emptier >= 1) {
		if (value >= emptier) {			
			alternateValue += power;
			value -= emptier;
		}
		emptier /= 2;
		power *= 2;
	}
	return alternateValue;
}

function minCorresponding(p_value) {
	return Math.min(p_value, flipping(p_value));
}

function putPieceInMatchings(p_valMatching, p_idPiece, p_direction) {
	gData.correspondings[minCorresponding(p_valMatching)].push({index : p_idPiece, direction : p_direction});
}

function conclusion_20_1() {
	init();
	findMatchings();
	var answer = 1;
	for (var i = 0 ; i < gData.pieces.length ; i++) {
		if (gData.pieces[i].matchingSides == 2) {
			console.log("Une des pièces est " + gData.pieces[i].number);
			answer *= gData.pieces[i].number; // Let's hope there are exactly 4 such pieces. Pieces must either have 2, 3 or 4 matching sides.
		}
	}
	return answer; 
} // Good pieces = 2797, 3167, 3593, 3517, correct answer = 111936085519519

// -------

const UNCHANGED = 0;
const TURN_CW = 1;
const TURN_U = 2;
const TURN_CCW = 3;
const FLIP_MAIN_DIAG = 4;
const FLIP_2ND_DIAG = 5;
const FLIP_VT = 6;
const FLIP_HZ = 7;

const EDGE_ID = -2;

function makePuzzle() {
	gData.cornerIDs = [];
	for (var i = 0 ; i < gData.pieces.length ; i++) {
		if (gData.pieces[i].matchingSides == 2) {
			gData.cornerIDs.push(i);
		}
	}
	gData.puzzleSide = 12; // So... sqrt of the number of puzzle pieces, which is a square of course.
	gData.piecesPlacement = generateDoubleEntryArray(gData.puzzleSide, gData.puzzleSide, null);
	
	// Let's assume the 1st corner is the 1st piece. 
	// Also let's assume everything is fine with the matchings : 2 different edges with corresponding values always match. (hoping for a miracle)
	gData.piecesPlacement[0][0] = gData.cornerIDs[0];
	spinFlipPiece(gData.pieces[gData.cornerIDs[0]], EDGE_ID, EDGE_ID, null, null);
	var newPiece;
	var newMatchings;
	var newMatchings2;
	var smartValue;
	var indexNewPiece;
	var x, y;
	// Going right
	for (x = 1 ; x < gData.puzzleSide ; x++) {
		smartValue = minCorresponding (gData.pieces[gData.piecesPlacement[0][x-1]].newSides[DIRECTION.RIGHT]);
		newMatchings = gData.correspondings[smartValue];
		if (newMatchings.length != 2) {
			console.log("Warning ! Several matches found for piece in y=0, x=" + x + ", min.matching = "+smartValue);
			return;
		} else {
			indexNewPiece = newMatchings[0].index;
			if (indexNewPiece == gData.piecesPlacement[0][x-1]) {
				indexNewPiece = newMatchings[1].index;
			}
			spinFlipPiece(gData.pieces[indexNewPiece], smartValue, EDGE_ID, true);
		}
		gData.piecesPlacement[0][x] = indexNewPiece;
	}
	// Going down
	for (y = 1 ; y < gData.puzzleSide ; y++) {
		smartValue = minCorresponding (gData.pieces[gData.piecesPlacement[y-1][0]].newSides[DIRECTION.DOWN]);
		newMatchings = gData.correspondings[smartValue];
		if (newMatchings.length != 2) {
			console.log("Warning ! Several matches found for piece in x=0, y=" + y + ", min.matching = "+smartValue);
			return;
		} else {
			indexNewPiece = newMatchings[0].index;
			if (indexNewPiece == gData.piecesPlacement[y-1][0]) {
				indexNewPiece = newMatchings[1].index;
			}
			spinFlipPiece(gData.pieces[indexNewPiece], EDGE_ID, smartValue, true);
		}
		gData.piecesPlacement[y][0] = indexNewPiece;
	}
	// D + R
	var newMatchingsLeft, newMatchingsUp, smartValueLeft, smartValueUp, indexNewPieceLeft, indexNewPieceUp;
	for (y = 1 ; y < gData.puzzleSide ; y++) {
		for (x = 1 ; x < gData.puzzleSide ; x++) {
			smartValueLeft = minCorresponding (gData.pieces[gData.piecesPlacement[y][x-1]].newSides[DIRECTION.RIGHT]);
			smartValueUp = minCorresponding (gData.pieces[gData.piecesPlacement[y-1][x]].newSides[DIRECTION.DOWN]);
			newMatchings = gData.correspondings[smartValueLeft];
			newMatchings2 = gData.correspondings[smartValueUp];
			if (newMatchings.length != 2 || newMatchings2.length != 2) {
				console.log("Warning ! Several matches found for piece in x="+x+", y=" + y);
				return;
			} else {
				indexNewPieceLeft = newMatchings[0].index;
				if (indexNewPieceLeft == gData.piecesPlacement[y][x-1]) {
					indexNewPieceLeft = newMatchings[1].index;
				}
				indexNewPieceUp = newMatchings2[0].index;
				if (indexNewPieceUp == gData.piecesPlacement[y-1][x]) {
					indexNewPieceUp = newMatchings2[1].index;
				}
				if (indexNewPieceLeft != indexNewPieceUp) {
					console.log("Error ! Inconsistency of pieces to put in x="+x+", y=" + y + " ; conflict between IDs " + indexNewPieceLeft + " " + indexNewPieceUp);
					return;
				}
				spinFlipPiece(gData.pieces[indexNewPieceLeft], smartValueLeft, smartValueUp, true);
				gData.piecesPlacement[y][x] = indexNewPieceLeft;
			}
		}
	}
}

// Spins and flips a piece such that its edges left and up match the specified ones
function spinFlipPiece(p_piece, p_edgeLeftWanted, p_edgeUpWanted) {
	const oLeft = p_piece.sides[DIRECTION.LEFT];  // No DIRECTION. (...) this time !
	const oUp = p_piece.sides[DIRECTION.UP]; 
	const oRight = p_piece.sides[DIRECTION.RIGHT]; 
	const oDown = p_piece.sides[DIRECTION.DOWN]; 
	
	p_piece.orientation = null;
	if (matching(p_edgeLeftWanted, oLeft)) {
		if (matching(p_edgeUpWanted, oUp)) {
			p_piece.newSides = [oLeft, oUp, oRight, oDown];
			p_piece.orientation = UNCHANGED;
		}
		if (matching(p_edgeUpWanted, oDown)) {
			p_piece.newSides = [oLeft, oDown, oRight, oUp];
			p_piece.orientation = FLIP_VT;
		}
	}
	if (matching(p_edgeLeftWanted, oUp)) {
		if (matching(p_edgeUpWanted, oLeft)) {
			p_piece.newSides = [oUp, oLeft, oDown, oRight];
			p_piece.orientation = FLIP_MAIN_DIAG;
		} 
		if (matching(p_edgeUpWanted, oRight)) {
			p_piece.newSides = [oUp, oRight, oDown, oLeft];
			p_piece.orientation = TURN_CW;
		}
	}
	if (matching(p_edgeLeftWanted, oRight)) {
		if (matching(p_edgeUpWanted, oUp)) {
			p_piece.newSides = [oRight, oUp, oLeft, oDown];
			p_piece.orientation = FLIP_HZ;
		}
		if (matching(p_edgeUpWanted, oDown)) {
			p_piece.newSides = [oRight, oDown, oLeft, oUp];
			p_piece.orientation = TURN_U;
		}
	} 
	if (matching(p_edgeLeftWanted, oDown)) {
		if (matching(p_edgeUpWanted, oLeft)) {
			p_piece.newSides = [oDown, oLeft, oUp, oRight];
			p_piece.orientation = TURN_CCW;
		} 
		if (matching(p_edgeUpWanted, oRight)) {
			p_piece.newSides = [oDown, oRight, oUp, oLeft];
			p_piece.orientation = FLIP_2ND_DIAG;
		}
	}
	if (p_piece.orientation == null) {
		console.log("Alert ! Something unclear happened about the positions !");
	}
}
// True if two numbers (edge or 0-1023) are matching, false otherwise.
function matching(p_sideValueA, p_sideValueB) {
	if (p_sideValueA == p_sideValueB) {
		return true;
	}
	if (p_sideValueA == EDGE_ID) {
		return false;
	}
	return flipping(p_sideValueA) == p_sideValueB;
}

// Remember :
// 	gData.correspondings[minCorresponding(p_valMatching)].push({index : p_idPiece, direction : p_direction});

// For each piece that we know is an edge... just set its side to -2.
function cutEdges() {
	for (var i = 0 ; i < gData.correspondings.length ; i++) {
		if (gData.correspondings[i].length == 1) {
			gData.pieces[gData.correspondings[i][0].index].sides[
				gData.correspondings[i][0].direction
			] = EDGE_ID;
		}
	}
}

// Congrats, you have disposed the pieces correctly ! Now, let's see how they should actually assemble.
// First, with borders.
function fillPiecesWithBorders() {
	var lineCount = 1;
	var newArray;
	var functionNewXYToOriginal;
	var coorsInFct;
	for (var i = 0 ; i < gData.pieces.length ; i++) {
		gData.pieces[i].arrayOfChars = generateArrangedDoubleEntryArray(PIECE_LENGTH, PIECE_LENGTH, function(j, k) {
			var charac = rawData[lineCount + k][j];
			if (k == 0 || k == PIECE_LENGTH-1 || j == 0 || j == PIECE_LENGTH-1) {
				if (charac == '#') {					
					charac = '@';
				} else {
					charac = '\'';
				}
			}
			return charac;
		}); 
		lineCount += PIECE_LENGTH+2;
		functionNewXYToOriginal = getGoodMethodToConvertCoors(gData.pieces[i].orientation);
		newArray = generateArrangedDoubleEntryArray(PIECE_LENGTH, PIECE_LENGTH, function(x, y) {
			coorsInFct = functionNewXYToOriginal(x, y); 
			return gData.pieces[i].arrayOfChars[coorsInFct.y][coorsInFct.x];
		});
		for (var j = 0 ; j < PIECE_LENGTH ; j++) {
			for (var k = 0 ; k < PIECE_LENGTH ; k++) {
				gData.pieces[i].arrayOfChars[j][k] = newArray[j][k];
			}
		}
	}
}

// I thought I had to transform (x, y) into the original xO, yO that led to this (x, y) (e.g such that rotation_to_the_left(xO, yO) = x,y)...
// Anyway it's only a matter of 2 non-involutive transformations !
function getGoodMethodToConvertCoors(p_orientation) {
	switch(p_orientation) {
		case UNCHANGED :
			return function(x, y) {return {x : x, y : y}};
		break;
		case TURN_CCW :
			return function(x, y) {return {x : y, y : PIECE_LENGTH-1-x}};		
		break;
		case TURN_CW :
			return function(x, y) {return {x : PIECE_LENGTH-1-y, y : x}};
		break;
		case TURN_U :
			return function(x, y) {return {x : PIECE_LENGTH-1-x, y : PIECE_LENGTH-1-y}};		
		break;
		case FLIP_HZ :
			return function(x, y) {return {x : PIECE_LENGTH-1-x, y : y}};
		break;
		case FLIP_MAIN_DIAG :
			return function(x, y) {return {x : y, y : x}};		
		break;
		case FLIP_2ND_DIAG :
			return function(x, y) {return {x : PIECE_LENGTH-1-y, y : PIECE_LENGTH-1-x}};		
		break;
		case FLIP_VT :
			return function(x, y) {return {x : x, y : PIECE_LENGTH-1-y}};		
		break;
	}	
}

function cutBordersAndMakeImage() {
	var xP, xC, yP, yC;
	var array = [];
	for (yP = 0 ; yP < gData.puzzleSide ; yP++) {
		for (yC = 1 ; yC < PIECE_LENGTH-1 ; yC++) {
			array.push([]);
			for (xP = 0 ; xP < gData.puzzleSide ; xP++) {
				for (xC = 1 ; xC < PIECE_LENGTH-1 ; xC++) {
					array[array.length-1].push(gData.pieces[gData.piecesPlacement[yP][xP]].arrayOfChars[yC][xC]);
				}
			}
			
		}
	}
	gData.giantImage = array;
	gData.xyImageLength = gData.giantImage[0].length;
	gData.xyImageLength = gData.giantImage.length;
}

function findMonsters() {
	/*
	Okay, this is the pattern to look after :
	                      # 
		#    ##    ##    ###
		 #  #  #  #  #  #
	So let (0, 0) the leftmost point. The points are (in y, x) :
	00 11 14 05 06 17 1,10 0,11 0,12 1,13 1,16 0,17 0,18 0,19 -1,18 
	*/
	const dX = [1, 4, 5, 6, 7, 10, 11, 12, 13, 16, 17, 18, 19, 18];
	const dY = [1, 1, 0, 0, 1, 1,  0,  0,  1,  1,  0,  0,  0,  -1];
	var coorsTailMonsters = [];
	var numberTries = 0;
	var xx, yy, i;
	while (coorsTailMonsters.length == 0 && numberTries < 8) {
		for (y = 1 ; y < gData.xyImageLength-1 ; y++) {
			for (x = 0 ; x < gData.xyImageLength - 19 ; x++) {
				if (gData.giantImage[y][x] == '#') {
					for (i = 0 ; i < dX.length ; i++) {
						if (gData.giantImage[y+dY[i]][x+dX[i]] != '#') {
							break;
						}
					}
					if (i == dX.length) {
						coorsTailMonsters.push({x : x, y : y});
					}
				}
			}
		}
		if (coorsTailMonsters.length == 0) {
			// Rotate the image (CW or CCW doesn't matter as long as we keep the same wise)
			var newArray = generateArrangedDoubleEntryArray(gData.xyImageLength, gData.xyImageLength, function(x, y) {
				return gData.giantImage[x][gData.xyImageLength-1-y];
			});
			numberTries++;
			gData.giantImage = generateArrangedDoubleEntryArray(gData.xyImageLength, gData.xyImageLength, function(x, y) {return newArray[y][x]});		
			// TODO create a method to copy a double entry array...
			if (numberTries == 4) {
				// Mirror the image
				var newArray = generateArrangedDoubleEntryArray(gData.xyImageLength, gData.xyImageLength, function(x, y) {
					return gData.giantImage[y][gData.xyImageLength-1-x];
				});
			}
			gData.giantImage = generateArrangedDoubleEntryArray(gData.xyImageLength, gData.xyImageLength, function(x, y) {return newArray[y][x]});		
		}
	}
	
	coorsTailMonsters.forEach(coors => {
		gData.giantImage[coors.y][coors.x] = 'O';
		for (var i = 0 ; i < dX.length ; i++) {
			gData.giantImage[coors.y+dY[i]][coors.x+dX[i]] = 'O';
		}
	});
}

function conclusion_20_2() {
	init();
	findMatchings();
	cutEdges();
	makePuzzle();
	fillPiecesWithBorders();
	//logPieces();
	cutBordersAndMakeImage();
	//logImage(); // 00h26
	findMonsters();
	logImage(); // 00h57
	var answer = 0;
	for (y = 0 ; y < gData.xyImageLength ; y++) {
		for (x = 0 ; x < gData.xyImageLength ; x++) {
			if (gData.giantImage[y][x] == '#') {
				answer++;
			}
		}
	}
	return answer; // Correct answer = 1792
}


function logPieces() {
	var xP, xC, yP, yC;
	var string;
	for (yP = 0 ; yP < gData.puzzleSide ; yP++) {
		for (yC = 0 ; yC < PIECE_LENGTH ; yC++) {
			string = "";
			for (xP = 0 ; xP < gData.puzzleSide ; xP++) {
				for (xC = 0 ; xC < PIECE_LENGTH ; xC++) {
					string += gData.pieces[gData.piecesPlacement[yP][xP]].arrayOfChars[yC][xC];
				}
			}
			console.log(string);
		}
	}
}

function logImage() {
	var x, y;
	for (y = 0 ; y < gData.xyImageLength ; y++) {
		string = "";
		for (x = 0 ; x < gData.xyImageLength ; x++) {
			string += gData.giantImage[y][x];
		}
		console.log(string);
	}
}

