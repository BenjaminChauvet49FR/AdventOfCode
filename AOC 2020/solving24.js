const rawDataExample = [
"sesenwnenenewseeswwswswwnenewsewsw",
"neeenesenwnwwswnenewnwwsewnenwseswesw",
"seswneswswsenwwnwse",
"nwnwneseeswswnenewneswwnewseswneseene",
"swweswneswnenwsewnwneneseenw",
"eesenwseswswnenwswnwnwsewwnwsene",
"sewnenenenesenwsewnenwwwse",
"wenwwweseeeweswwwnwwe",
"wsweesenenewnwwnwsenewsenwwsesesenwne",
"neeswseenwwswnwswswnw",
"nenwswwsewswnenenewsenwsenwnesesenew",
"enewnwewneswsewnwswenweswnenwsenwsw",
"sweneswneswneneenwnewenewwneswswnese",
"swwesenesewenwneswnwwneseswwne",
"enesenwswwswneneswsenwnewswseenwsese",
"wnwnesenesenenwwnenwsewesewsesesew",
"nenewswnwewswnenesenwnesewesw",
"eneswnwswnwsenenwnwnwwseeswneewsenese",
"neswnwewnwnwseenwseesewsenwsweewe",
"wseweeenwnesenwwwswnew",
];

const rawDataOfficial = [
"eneweeneseneeeneneee",
"wewwwwnewnwseswwnwnwnwsenwnesenwnw",
"enenweneswnewswwneesenwenewswsenw",
"eenweeswsweeneeeenweswnweee",
"eseeseseesweeeseeeeneenwwee",
"wwwwnewsewewwwnwwswnwnwnwww",
"seenwswsesweseswnwseseswsenwnwsewese",
"swswswswswswewnwwwswwswsenwseswnew",
"eeenwseseseseeseseswseese",
"enwweeseseseswwnweneeeswswnenewe",
"nwnesenesesenewnwnenesenenenwnenewesw",
"neseeewwwsenweeenwsesweseeenwee",
"nenenenenewnenwswseeeneswnwseneeene",
"enwnwwnwwwwwwswweewnwwnwwnw",
"neneneneneneneneewneswneneneneswnenese",
"eswseswswswnwswswwswsenwswseneneswseswne",
"weneneneneweswnenwsenwnwewwnwnee",
"sesweneneseewnenewnenwwneenenenene",
"swseswswseswswsewseneswswswwneseswswsw",
"swswswswswnwsweswwswnwswwsweneswswswsw",
"swnwsewwnenwenwswenwnesenwwnwnwnwnw",
"wwnewwswsewwnewwwwwwwww",
"nwwwnwsenewenwwnwwnwswnwwnwnwnw",
"eswseeswsenwseneswswnwswwseswnwswswse",
"swwwnewnwnwsesewswnwnwwwwewnwwww",
"eenenewseeeneweneeeneswenwnwne",
"nwnwnwnwswnwnewnww",
"nwnwneweneswswswwsenenwnenwnwsenenene",
"nwweeseeeeseeesww",
"neneenweeeneneswsweneneneseenwnenw",
"swswswwswwswsweswswneswseswswswneneswse",
"eenweseesenwswneeeneeewseewe",
"wwswesesesesewnwewwswnwwnenwnwsww",
"eseeeeeswseneweenesenweeswese",
"seswenwneesenwnenesenwwneesesenwwnene",
"swseenwswwseswseenwswswe",
"eneeswnenwwsenewsewnwsenwnwsewnww",
"seswseswsenenwnwsweswswseswsesewswwse",
"newneneneneneneenenenenwnenene",
"wsewnewwwwwwwwswwwwe",
"swnwwswwesweswwswswneswswswswwswsww",
"seeeseeenwseeswseeeneesweeswnwe",
"swewswwseneseseseneseswseswseswsw",
"nenwwnenwswnwnenwnesenenenenwnwnwenenwsene",
"swwwnwswnwswnenwswswseeneswneswswswswe",
"weneneenwwseeeeeeseeeenewne",
"wneeweswwwnwwnwwnwneswwe",
"nwewsewnwnwswwwwwwwwswwnwsewne",
"wswwswwwswwswswenwwsw",
"enenweenwsweseeseeeeeswenweesw",
"nwnesenwnwnwnenenwwneswnenwneenwnwnwne",
"neswswswswswswweswneswswsewswwwww",
"wnwseseenwwwnee",
"neneneneneswnenwneseneneneeenwnenwswne",
"wwswnenewwewwseweswwwseewswnw",
"eseseseseswwneseneneswseseseswseseswse",
"swnweswseswswnwswswswseswsesenwswswswsw",
"swswnwseswswswswwwsesenenwsweneswee",
"neswwneeesenwese",
"neswneswwswwswesww",
"swswsesenewwnwwwwwnwwswwsewswsw",
"nwsweswseeneneeneswnwnwe",
"eseseewswwewwwneswwnwneswnwwww",
"nwnwnenwnenwneswnwnwnenwnwnwsenweswwnwne",
"eeweesewseeneseneseseseseesesesewse",
"enwswsenwnwseeeneseese",
"swswseswwnwswsweswswswewsesw",
"esweseeseenwsweeeeseewnwenwsw",
"ewswnweswswswwswnwswswswswswswswsw",
"wswenwswwewswenenweswseweewswne",
"seesweswseeeeneseeneseweeeene",
"swwswewneswswneswswswswseswswsenwsee",
"wwwwnwnwwwnwwwwenwnwnw",
"seeswnwswsesewnenwswswnwesenwwswseenw",
"weeneneeswnewneneenwneneseneneenee",
"wnweneneenwnenwneswswnenenwnwneenwnwne",
"sesesesesesesewsesenwsesesesesenese",
"senwwsenenenenwwsewswnwnweneenwsenenew",
"neneenenewweneneneeeweseseeene",
"eswesesesenenesewnwseseseswseswnw",
"swnwwnwwwswwnwswwwswweeswwwse",
"newwsenenewenwnwsweewsenenewenwnwse",
"swenwneeeseeneeeswnweneenewnwne",
"wsenenenwwswswwseswwweswwnwweswww",
"nwswwwneeneswswnenwswesewsewnwwww",
"sewesenesesenenwswseweswsweswseneew",
"swswneseswswwwseswswseswseswneseswne",
"swneswseswswswswseeswswswnwswsw",
"seenwswswsesesesesewswswnenwswseswswswsw",
"eswswswsweswswseseesenewswswswnwwsw",
"nwsenwnwnwnwwenwnwnw",
"nenewewwneeeeeeswene",
"enwwwwwnesewwnwwswsewwwnwwneww",
"enenenenenwnwwneeswsenenwnwnewnewne",
"eewnenwneneneseswnwneswwseeneneneneesw",
"swswneswswswseswswswsewswseswneswwsene",
"senwseesesewseseseswswnenwseswsesesesese",
"sweeenenwwneneeeew",
"enwnwesewnwswnwwwnewswwwwwnenw",
"enenwwnwnwswnwseswwww",
"swwwwnwwnwwneseswswswseswwwwww",
"swseseseeesesenwseswsesenwnwswswseneseswse",
"nwsesesenwseseseweesesesesesesesesesene",
"nwseseseseseesesesweswseeeneenesesew",
"wnenwseseseswewnewseswenenenwsesesese",
"nwneseswnwsenwnenwnwnwnw",
"swseseswswneseneseswseseneswwsw",
"neeneeenesenwnenene",
"swnwwweseesesenewswseeswneswseewwse",
"esesenwseseseseseneseneseswseseseswnwsw",
"neneeneeweeenenenenwnwwneswneeswne",
"nwwesenwwenwnwswnwnwnwnwnwnwnwnwnwne",
"eeeneneneeeseneenwwneenesweene",
"seeseneeseseswneeseseseewneseesesw",
"sewwewwsewnwwsewewneswnesenewnw",
"nwnwnwnwwswnenwnwnwenwneewweeenenesw",
"wwnwwnwnwwnwenwenwwwsewsewww",
"wswswwnenewseswseswwswswwswwnwswne",
"neeswenweeeneeneeneeneswewee",
"wnesewwwwwwwwseenewsw",
"neswwswseswswnenwswswswseswswseseenew",
"wwseewswneswseswnweswnwswswwswswsw",
"seeswswnwnesenwseswewsesewnwswsenene",
"wwwwsewwwnwwwewnesenwwwwwwne",
"nwseswseswnwseseseswswswsesesee",
"sewwwneewnwnesewseswswnwnenwnwwwnw",
"nwwseneswwseswwwneswnesenewsenewsw",
"sewsewnewsesweswwneneneesewwnewww",
"swsenwnewwenwseswneneeneseseswswese",
"neneeesenwneswnewseswneenwenewenee",
"enwnenwsewwnwswwswwwnwenwswwnew",
"nwnewnwswswnenesenwnwswneeeneneenwnenw",
"wwnewwnwwsesenesewwwswewwweswnw",
"swenweeneeseeweseeeeseeeee",
"weswswswneswnwwwwseswwwwnwwsenese",
"wseseseeseeewseneseseseneseseswne",
"nwnwenwnenewwseswnenwnwnwseswwenwenew",
"seeswesenenenewwnwneneneneeneeene",
"neneseneneneseneneneswneswneenenenenwww",
"seswenwwsenwseneswnwswnwnwseseesenese",
"wwnwnwneswswnweenewwswwswwesww",
"eswsewwswswwswswswenesenenewswswwsw",
"seseseseseeneseesesenwnwnwseseseewsee",
"enewnwwnwneenenw",
"nwwswnwseenwnwsweeswee",
"swswneswswswseswseseseswnenenewnesw",
"nenwnwnenenwswnenenenwnw",
"ewwsesesewswseeseseseswswne",
"nwnwnenwnwnwnenwnesenenenwnwnwnw",
"seswseeswsesesenesesesewse",
"wnwnwnwneeswenwsesenenwseswnenenwsenw",
"newnenenenenenenenenesenenenenene",
"nwnwnwnwnwnwsenenwnwsenwnwnwsesenwnewnw",
"wswwwswwewnwswsesw",
"neswwewswwsewnwsenwwwnewwwww",
"wnwnwswswnesweswswseseswswswswswswnesw",
"nwneseswswsesewseswsenwesewseesweswnw",
"senenwsesesenweseswswseseseeseesesese",
"seswnesenwseeseseseeswesesese",
"seseswswseseneswseswseswnesesewnesewsese",
"wnenwneewenwneswneenwneswswwnenese",
"swsweneswswseswswswswswseswswwswewswnw",
"nwseswnwwnwnwnwnwnwenwwnwnwnwwsenwnw",
"seswswseseswswswsesenwswsesw",
"nwnwnewwnwnwsesewswnesenewsewwwenwnw",
"neswnwnwwwsewnwnwsenewnwwwnwwnwnwnew",
"seseseseseswsesesesesenwseeseseswnwswnw",
"nwnwnwnwnwnwswnwnewwnwnw",
"swswnwswswnwswswswswneeswwswswwseesw",
"eeeneseseswwsweweeeseneeewne",
"eneswnwsewswnwenenwwwwewwwnwsw",
"neseseneseswwesenewsenwnewswswneneswnw",
"senwnwnwenenenenwnenwneswswnwnwnwnenene",
"wewenwnwnwnwenwnwwnwnwnwwnwnwnwsw",
"neeneeeswneeeeswnenwwneeee",
"wnwnwewwnwwwwnwsenwnenwwswnwnwnwsw",
"newsweeneenesweeneesenwneeeww",
"newnenenwnwwneenesweneneneswnwneese",
"swwweneweseseswwswswwwwwwwwnew",
"eeenwneseswwneeeeneeeeeeene",
"sweswseweswswseseseseseswswsewwnwswe",
"wenenenenenenenwnwnenesenesenwswnenwnw",
"swswnwswewswwswswwswsewswwswwenwsw",
"seewenwsesesweseenweeseweenene",
"newneneneneswneseneseneenenenenwnenwnene",
"swwnwswnesewswwnwsewswswwenw",
"nwseseeneseseseseswseseesewseesenwse",
"wnwnwnwnwnwnwnwnwenwnwnwnwnw",
"seswnwwwswnwswswseswswswseeweseesesee",
"swswnewesewwnwswwwnewseswwnwswwwse",
"nesesweeeswenwwnwneeswnw",
"wnwwwnwnwwwseswnwwnenwsewnwewswe",
"neneneneneneswneswneneneeseeenwnenenwne",
"seenwsweeneseswnweenwsweneeswwswswne",
"newewneewneneeseswnesewnewseseene",
"eeeneeeneeneneewneene",
"nesewsewnwswswseneneswnwswe",
"nwnwenwnwwwsewnwnenwwwwnwenwenwsw",
"swseesesenwswsenwsenwswswswswsenwseseswse",
"seweeswnwswsesewseswseeseswsenwnwenwse",
"eeneenenenewnenenenewsenenewneenw",
"swswwneswsesesewseseesewnesesesenesw",
"weeswesweeeeseesenweeseeenw",
"swnesesenwswseseswswswsenenesesesesewnese",
"ewswsewwwwnwwwwwewsw",
"wnwwwnesewnwwswwwwnwnwswewswew",
"seeseseenwwwseesesewewnesenenese",
"seseseeeseseenwesesese",
"wwnwnenwwnenwwwwsenwweswnewsww",
"neesesesewsewswsesesesesesesesewsenese",
"eswswswswsenenwsesewswswswseswseswswneswsw",
"nwenwwwsenwswswewswwnwsewwswwnwse",
"nwwesenwnenwnwswwnwnwnewwwseswwnwnw",
"nenenenenenenwneswenenenwswnewnenwnenenese",
"nwnwnwnwwnenwnwwsewnwnwwnw",
"swwswswswwswwswswswswwesw",
"swswwswenweswseswsw",
"seseseswsesesenweseeewseseseesenwsee",
"nesewnenwnenenwnenesewneseenwneswew",
"nwnenwswnwwswnewnw",
"swswswswswseswswswswswnwseswswsw",
"nenwnenwnwnenwnenenenwse",
"eswswswswswswswsewwswwwwseswswswswnene",
"nwneseswnwswnenenwnenwenwnwnwneswnenenw",
"swneeenenwnwneswnenenese",
"swswswewwswnwesw",
"nwnwnwnwneeneneswneneeswseenwnwswswnwnwne",
"nwsesenwneneneseneneswnewsenewwnwnenese",
"seseseswswseseeswwswsesewesese",
"enwnenewnenesewsweseswwnesenenwsene",
"sesenewnwswseseswswswneswneswswseseesw",
"wewewnwnwwwwwwswwswwwew",
"eswsenwwnwwsweeseesesesesesesesenenw",
"enwswseeeneenewneneeeenwswwsee",
"newwwswswsewswswsenwswswswswswswswswnese",
"eweeseeeeseeeeseewewnesese",
"sewsenwsesenwseswneeswneseswneswnenwnwsw",
"swneeseeeenwswswenenwenwwneswene",
"seneeseenwseswswswnwnwseseseewswwsenw",
"nenwwneeseseewsesesenewseeseesesw",
"nwsenenwneeneneswswnenwswwesweeeeene",
"enwneeswsenwseeene",
"nwwewnweswnwwenwnesenw",
"nenwseneneneenenenweneeneswewneneswnene",
"esesesesesewnwwneseeseswesewnwswsenw",
"wswswswswwswwswnwswwnwewswwewne",
"eeneeseeeenesenwesewnesewenwneew",
"eeeweeeeseeeeeewse",
"eneswneneseneswnwew",
"nwswnwnwenenwnwnwneenwnenwnenenesweswnw",
"swsenenenenenwsenwesenwnwnwnwswnenenww",
"nwwseeswwwwnwwswnenewwewnwwww",
"nwswswswnwswneeswswseswseswseswse",
"nwnenesewswnwewnenesewnenenwesenwnwe",
"wsesesenewseswnenwswswnw",
"eeeeseenwnenwseneeneeneeweesw",
"eeenweeeeeweeeseswnwswnwnwsw",
"nesewnenesenwnwnwnenwnwenwwnewnenwnene",
"nwwswwnwwswenenwnwnwwnwnwnw",
"neneesenesenwneneswnenenwnwwnenenwnwnenw",
"neeenwneeneneneeneweswneswswnenenene",
"nwnwwnwnenwneneswwnweseneneenw",
"nenesesesewnwnwswnesenewewneeswnewnwse",
"swnwnenenwenwneneseswneswnwneenwnwswne",
"nwnweeewesweseeee",
"wsewwnwneeswswswswswwwswweswswswe",
"wwnwnwwnwwnenwnenwewswnwwwswwswsew",
"enwswwwnwnweswewnwwsewwwwew",
"wnwwwwswnwwwwnewwwsesewwww",
"swnwnwesenenenenweswneswswsewewww",
"eneeneewneeneseeneneneweewsenene",
"ewsenenenenenenwnenewnenwnene",
"esenwwwsweewswnww",
"eenwswnwsewenwsenwsenwnweneseswseswnw",
"sewnwneeewsweseesweeewnewswnwene",
"swswswswseesweswswsenwseswswsesenwswsw",
"swswneseswswweswnwswseswswswswnesesesesw",
"esewenweseneesweenweseneneneesw",
"neneweeneeswesesenewesweeseswwe",
"neeneenwneswnenwnenwnwswesenenenewnewnw",
"wwwwwnwwwewswwnwewwneswnwnw",
"seenwseneneswwwswwwnwswswswwnesenesw",
"nwnwnewnwnwnwnwesenwnwnwnwnw",
"nenenwseswswseneswwnwswwwsewseswnww",
"senesesenwwnewnwneneewsw",
"senwswnewsenwwneswwewnwnwwnwneenw",
"swnweesewswswswwswswseseswseswneswswsw",
"senwwnwnenenenwnwnwenwnwnwsesenenewnwnw",
"swneswseeseneswswewseseseseswswswswnwsese",
"sesewnwsewwnesewwnwnwnwnwnenenwsesww",
"eneswnenenewnenwwseneneeneneswswnesw",
"enwwwnwseenwneswnewsewsweseeenwsw",
"nwwwnwnwwewswwwwesewswswswww",
"seeseswwwewneeswswenwnweneswnese",
"swwswnwseseseenwseneseseenwesese",
"senenesenenesenenenenwwwwswneeneeew",
"nwsewnenwwnwwnwnwnwwneswnwnwe",
"seseseswsewneseseseswswneswseseswswsenese",
"nwnwnwsewwnewnwenwnesenenenenwnwnwnw",
"wwnwnwwesesenwwsenwwweeswwnew",
"eneswnenwswnwwwnwnwneneenenenwseswe",
"nwswseseswnwseswswswnwsewswswnwswswswsw",
"wswswnewswwsweeswewesww",
"eneneneneseenwneneewneneeneweee",
"seseeeseeweeeeesesee",
"sesewenweswseeeneseseeeeswenee",
"nesesenwseswsesenwsenwseswseesww",
"swswswseswseswswswswswswneswswsw",
"swseswsenwnwnenwnwswseee",
"neseswneswwwnwswnwseenewnenwsenesenesw",
"nwnwnwnenwnwswnenwnwswnwnw",
"seswswswswesesenwwesesesenwwswsenwsesw",
"seswnwneswnwnewswswenwsenesenenwnesenesw",
"esweeneseweeeeenwsweeneeeee",
"eswsenwnwsenenwswswwswnwsenwwnesweswse",
"nenenenenenwneneneneswnenene",
"eenesweeeneeeeneenwnwneswswene",
"wwwseswsewnwwwwne",
"seseneenweneenwewseneeenenenewswe",
"wnwnwneneneenwnenenwesewnenwwenewne",
"nwweenwwnwewnwesenesesesenwwswwswne",
"nweenwseseeesesesesesweeeeeewe",
"nwneeneswnwnwnwswnwnewnwenww",
"ewnwnenwnwwewenwsewwswnwsenwnww",
"senenweneseeswsenwseseswsenweswseesw",
"ewnwewsewnwnwnwwnwwswwwswwwse",
"wwswswnwswswesesewswwneneswswwesew",
"nenwnwnesenwnenwwnwnwneswseweeswsenw",
"senwwwnwenwwenwwswswnenwnwnwwnwe",
"nwnenwnwesenwwnwnwnwnenwswneeewswnwne",
"sesewseenwsewsesesewseeenwesesee",
"eseeeesesesenwe",
"senweeseenenwnenenenenwneeeewnese",
"nenwnwnwnwesweswnwsenwnwnwnwnwnenwsewnw",
"swseswswnwswswswswwswsw",
"swwsewneswswsweswwnenwseseseneswwsese",
"eneeweeneneeenenewneenenee",
"senesenwnwwseseewswsenwnenwseswse",
"swswseswswwwswneswswswneeseswwneswswsw",
"nenenenenenwseneenenee",
"esewseseseneseeseswseseeseswnesenewse",
"swwsesesweswnwswswnwseesenesesesesesesw",
"swweswwwwwwwswnwswsw",
"wswwwswweswwswwswswneswwswnw",
"ewwwsewwwnwwnenwwewnwnwwnwnwse",
"seneeswsesweseseenwsenwesee",
"nwnwnewnwenwnwnwwnenenenwnesenenene",
"neeeeeeeeeweeeee",
"wswnesenweenwesene",
"eeeeswseeeneseseseswnewseesesee",
"eeswnwseeeneneewseeswneneesweenww",
"enwnwnwnwnwnwwwsenwwwwnwnwswwwsew",
"nwsewswswswseeswswnwnwnwswseneswe",
"eseeseesesenweweseneseeesweew",
"nwswwnwswenwewnwwwnwwwewenww",
"nwwnwnwnwenenwnwswsesewnwnw",
"wwnenwwsewnwnwwnwnwwnww",
"neeeneneeweenwnwswseneseeneneeswnw",
"nwnwnenwnwenwnwswnenwwsenwenw",
"weseeseeseswnwneswseeseenesewsesese",
"seneewenwswnewseewnwwwwneswwesw",
"nwwnwnenwsenwnwnwnwnwsenenwnenw",
"sesweswswnenwnwswswseneswneseseswseswwew",
"nwsenwsenewenwnwnwswnwnenenwnenwnwwnwnw",
"swnwwswswswsesesesenenwswswswswseseneswsw",
"seswswwneswseseswsw",
"nwewesweeeseeneseeeenwseeeee",
"swsesesenewneseswseeseseseseseseseenw",
"swseswswsesweneseneswswswswswswswsenwsenw",
"nwnwnwnwnwwnwnwwnwsenwnwnweewwnwnw",
"sesenwseseseswsenesesesewsesenesesesesese",
"wnewwewwwnwwwweswwwwwsww",
"neweneswnenenenenenenwneenese",
"senwnenwswseseenenenwnwswwwnwswsenwe",
"nwnweswswnwewwesewnwnwnw",
"weeeesweeeneeeseeseesenwnwwe",
"enwsewweseweeseeweenwnwsesese",
"senwnenwnwswnenesenwnenenenenenwnenenenw",
"seesesesenwseeseeeeseewnewesenwse",
"nwnwnwswnwswwnwnwsesenwnwnwnwenwnwenwnw",
"esewswneseseewsweeweenwsenwsenwse",
"wnwenwnwseswesesesesww",
"eseeweswseeeseenesenwsesesesesee",
"nwwwwenwnwsenwsenwnweseneswnwnwnwse",
"nweeeewseeswnweneesweswnenwseee",
"wsenwnwwnwnweseswwneenwwnewwwswnw",
"neneseeneweeneneneeneeenee",
"neeswnenwneeweneswwseeneneneenwneese",
"nwnwnwnwnwnenwnwnwnewse",
"swsesenwseswneswseseseseseswnesesesesw",
"nenwneswswsesewnwnewwswseswwwswneswsew",
"nenwswwnwswnwwnwnwnwnwnwnwnwneenenenwe",
"wwnwnenwsenwnwseswnwseneeswnenwswneese",
"seseneseseesenwnwseseesenweseswswnwsewse",
"nwnwnwnwnwesenwnwnwenwnwnwnwnwswnwnwwnw",
"nwwsenenwnwnenwsene",
"nwsesewnewswswswwnwswesweneeswwswne",
"eneneneneeeeneesweneeeenweswnesw",
"ewnenenewseneswnwwswseswseseenwsesenw",
"seesenwnweneeeeesweeeeeeeewe"
];

const rawData = rawDataOfficial;

function setupFlippings(p_flipCoors) {
	var x, y, i, iChar;
	var chain;
	for (var i = 0 ; i < rawData.length ; i++) {
		iChar = 0;
		x = 0;
		y = 0;
		chain = rawData[i];
		while (iChar < chain.length) {
			if (chain[iChar] == 'e') {
				x+=2;
				iChar++;
				continue;				
			}
			if (chain[iChar] == 'w') {
				x-=2;
				iChar++;
				continue;
			}
			if (chain[iChar] == 'n') {
				if (chain[iChar+1] == 'e') {
					x ++;
				} else {
					x --;
				}
				y--;
				iChar+=2;
				continue;
			}
			if (chain[iChar] == 's') {
				if (chain[iChar+1] == 'e') {
					x++;
				} else {
					x --;
				}
				y++;
				iChar+=2;
				continue;
			}
		}
		p_flipCoors.push({x : x, y : y}); // x and Y must always be the same parity !
	}
}

function conclusion_24_1() {
	var flipped = [];
	setupFlippings(flipped);
	sortAscending(flipped, [function(a) {return a.y}, function(b) {return b.x}]);
	var count = 0;
	var countIdentical = 1;
	for (var i = 1 ; i < flipped.length ; i++) {
		if ((flipped[i].x == flipped[i-1].x && flipped[i].y == flipped[i-1].y)) {
			countIdentical++;
		} else {
			if (countIdentical % 2 == 1) {
				count++;
			}
			countIdentical = 1;
		}
	}
	if (countIdentical % 2 == 1) {
		count++;
	}	
	return count;
} // Correct answer = 322

const deltaHexaX = [-2, -1, 1, -1, 1, 2];
const deltaHexaY = [0, -1, -1, 1, 1, 0];

function conclusion_24_2() {
	var flipped = [];
	setupFlippings(flipped);
	var minX = flipped[0].x;
	var maxX = flipped[0].x;
	var minY = flipped[0].y;
	var maxY = flipped[0].y;
	for (var i = 1 ; i < flipped.length ; i++) {
		minX = Math.min(flipped[0].x, minX);
		maxX = Math.max(flipped[0].x, maxX);
		minY = Math.min(flipped[0].y, minY);
		minX = Math.max(flipped[0].y, maxY);
	}
	const nbDays = 100;
	var array = generateDoubleEntryArray(nbDays*12, nbDays*6, false);
	var futureArray = generateDoubleEntryArray(array[0].length, array.length, false);
	var x, y; 
	for (var i = 0 ; i < flipped.length ; i++) {
		x = flipped[i].x + nbDays*6;
		y = flipped[i].y + nbDays*3; // x and Y must always be the same parity ! No choice !
		array[y][x] = !array[y][x];
	}
	
	countBlackThisStep = 0;
	for (y = 1 ; y < array.length-1 ; y++) {			
		for (x = (y % 2)+2 ; x < array[0].length-2 ; x += 2) {
			if (array[y][x]) {
				//console.log(x + " " + y); 
				countBlackThisStep++;
			}
			futureArray[y][x] = array[y][x];
		}
	}
	console.log("1st step : " + countBlackThisStep);
	console.log("---");
	
	var iNei, countBlack, countBlackThisStep;
	for (var i = 0 ; i < nbDays ; i++) {
		for (y = 1 ; y < array.length-1 ; y++) {			
			for (x = (y % 2)+2 ; x < array[0].length-2 ; x += 2) {
				countBlack = 0;
				for (iNei = 0 ; iNei <= 5 ; iNei++) {
					if (array[y + deltaHexaY[iNei]][x + deltaHexaX[iNei]]) {
						countBlack++;
					}
				}
				if (countBlack == 0 || countBlack >= 3) {
					futureArray[y][x] = false;
				} 
				if (countBlack == 2) {
					futureArray[y][x] = true;
				}
			}
		}
		countBlackThisStep = 0;
		for (y = 1 ; y < array.length-1 ; y++) {			
			for (x = (y % 2)+2 ; x < array[0].length-2 ; x += 2) {
				array[y][x] = futureArray[y][x];
				if (array[y][x]) {
					countBlackThisStep++;
					//console.log(x + " " + y); 
				}
			}
		}
		console.log(countBlackThisStep);
		//console.log("---");
	}
} // Correct answer = 3831 (1st proposal 3749, didn't take a good enough margin)