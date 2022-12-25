var rawData = [
"vvvv.>>...v....v>....>...v.v....v>>v>v..>...v>>>v>.>v.>.>>......>.>..>vv.vv.>>vv>..>.>v...>...>.>.v>..v>>v>>v>>.>.>..v..>v.>.v....v..v>>v>>",
"...>....>..v......>v>......v.v...>.v>..>.>>..v.v>...v.>v>.v.>.vv.>>>.>v...vvv>>.vv..v.>v>.>....>>.vvv....vv>.v.>.....vv.v...>>>vv..>v>.....",
"v...v>v.vvv..>.vv.v....v.>>vvvv>v.vvv....>.>v.vv...v...>>...v.>....>.>>.v.>......>v>.vv.>..>>v.vv>.v.>.vv>..v.v>>>>vvv..>v........>vv>..>v.",
"...>..v>v>v>v.>v..v.>v>>>.>>.>>vvv..v...vvv.>.v>.v..v.v...v...>>v>>....>>...>vv.>v.>>.>v>..v>vv>....v.>...>.v>..>.>>.>v...>.>v...>....v..>>",
".>.....>...>>>>..v.v..>.>>v....>v..>....vv..>.>.>vv..>>v.>.>..v.vvv.>.......v.v>v>..>.v...>.v.v>v..vv..vv>..>.vv.>.vvvv>..>v.>>vv...>.v>v.v",
".vv>.>.vv>>vv..vv>.v..>>>v..>.v>..>v.....>v.v.>..>v..>>v...v.>>.v.v...vv.....>..>>.....>>.vv>.....>>>.>v>...>v..vv.>..>>..v...v..v..>...>..",
">>....>...v..>>...>>>.....v...>>.>.v.>vv.>..>vv....v.v.....>.vv..>>.v>.v>v.>>......>>..>v...v...>...v.>v.>v>.v.>..>v.>....>>v.>>.>.....>...",
".>>vvvv.v>>>>vv.v>...>v...vv.vv.>>v.....vv..v>.vv..>.v.>..>....v...v...v..v>.v.v.vv.>vvvv>..>..>.>.v.v.v.v>...>v..vv>.v>vvv..v.....>>.v>>v.",
"..>.vv>..>>.>.>>>...v.....v.....>>>..>..>>.v...>>>>..>>.>.>>..>.>......v.v>v...v>.v.v.>>v>.v......>v..v.vvv>>>v>....>v..>>.v>vv.vv.>.v..v.>",
".v.v....>vv......>>v....>vv......>>.>....v..>vv>v..>>>.>.vv.....vv.....v...>v..v...v.>.>v..v.>.....v.>.>>.v...>>.>.>.v..vvv....>>>.>v>vvv..",
">>...v>>..>..>.vvv....vv..>vv..v.vv>.vvvv>>>..>>>..>.>..>....>v>.>v......>vv.>...>..>vvv..v>>.>v..>>>.v...>v.vv>..v.v..vvv....v.>>.v...v.>v",
"...>>>>vv.>..v....vv...>.v..vv>.>>...v>>.v>......>v.v>.vv.....v.>..>>>.>v...vv..>..v.>>...v>..vv.>...>v....>v...>..>..>.vv>>.>vv.v.v>.v..vv",
".v....vvv>vv.v.>..v>..>.v.>>v..v>..v...v.vv>>....v.........>..vv..>>...>v..>.>v.v>>v.v>>>...v>.v>.v.v..v>....>.v..vv.vvv>>>.v.v>.>v.v>>>.>.",
"..>>v>>.v>vvv.>>......v>>.....>>v>.>..vv......>>.vv>...>.>.>....>.>.>>.v....vv>v...>..>.>>>.v.>...vv...>>.v>>..>.v>...vvv>v.>.>..>.v>....v.",
".>>....>v.>>>>vv>..>..v...>..v>>.>v..v....>vvv>>>>vv...vv>v>v.>>vvv>>>v..>>>>.>.>.>.v.v.v.v>.v>.v...>..v..>.>>v>.>.vv...v..v>.v..vv...vvv.>",
".v.>v..>..v.v.v...v....>.vv>>v.vvv.>vv>>.v..v..v>v..vv.>>vv>>.>>v...v.>.>..>>>.v.v.>..>>..vv...>.v.>>...>v.>vv...v...>vv.>..>v.v.vvv>.v..v>",
">..v>.v..v.>v...vvv.vv...>>>.>..>vv>.v>..v>v.v..v.>....>>..>>.>>>..>>>>>vv...v.>>.>v..v...>.>vv..>.>..v>>..>..>>.v>....v>>v.v.....>>...v...",
">.>.....>..>..vv..>v....vv....>v.>......v>.>vv>vv>..vv.v.....v.>>>>..>>v.>.>....>v.>.....>...v...v.v..>.v..v>>.vvvv.>..>v..>.>vv..vvv..v.v.",
"..vv..v...vv.>.>.v>v....v..>vv.>v...>>v...vvv>vvv....>v>v>.......>>>.v.v...v...>.>v..v>.v>>...v....v>.>..vvv>>>.vvv.v.v>vv>.vvv>..v>.....v.",
"..v.....>>..>>v>>..>.v.v.vv.v....vvv.vv.....>v>.>v.>.vv....>....>v>...v.v...>>.>....v...vv.>....v>..v.>>.v...vv.>..v.v..>vv..>..v>>v..v.vvv",
"vv>vvvv..vv..v.v.>>>>.>>>>>v>v..>>.vv.>>>..>....v.vvv>.v.v..>>.v>.>>v.v...>.v>>v.>>.vv..>>>>vv..v>>v>v.v...>.....v.v>.v>>.>.v...v..>...v...",
"...>..v>v..v>.....v.vvv.vv.>>>..>>>>.v..>..>v.v.>v..v.vv..v>.v.>.>v.....vv>.>>..>.vvv...>>...>.>v.>.v>.v.v.vv.>>.>v..>..vv.vv>>>..v.v>...>.",
"....v.v>.>v.v.>>>.>.v...>vv.....>.v>v.....>.>.>>>v.v>....vv>vvv...>..>..v..>vv>v.v>>v.>v.v.v>.vv.v..vvv..>.v.....v.>.>>.vv.vv..v>v.>.>..>.>",
".v.>.>.v.v..v..v.>v..vvvvv.>.v.>>v......v...>.>.v.>v..>..vv.>.>v..>..>>v>v..vvv...v...vv>..v....v....>....v.>>.v>>>..>..v.>.v.>v.>....v....",
">v.vvv>>..v>>>>.v.v.v.v.v.v......>v..v.>>vv...>..>.v.....vv>.>v.....v.v.v>>>..v..v...>vv>..v.....>...vvv>...v>.>..>....vv>.v>.....v.v>.....",
"....>..v>.v...>..>..>..v.>..>..v.v......>.v>.v..v>.v>..v..v>.v>.>.v..>..>v..>.>>..v..>vvv>..vv.>>.>v.v.>.>vvv.>..>......>v>.v.v...v>>.>>>.>",
".>vv>v>...v...>..>.v...>>...v.v>>..>.vv....vv...>.>....vv.>.>.v.>>.>v>...v.v..>..>>...>...v.v.>v..v>..v>..>.v...v>.>.>vv.v>..>v...v....v.v>",
">v.v.>.v>>..>v.v..>>..>v.v.>v..v>v.vv>...v>>.>v>v.>v..>>..>....v.vv>vvv....v>vv.vv>vvv..>>........>>>.v....>>.v..>.v....>.v..>..v>v......>.",
".>.v..>.>>..v.vv....vv..v..>.>.v..>...>v...>v.>.vvv>>v.vvv..v.>.v...>>>v.vv>>>v.>>v.v..>v.v..v..>>..v......v>v>v.v..v.>>>.>.>vv.vv.v>..v..>",
"v>...>>v..>....v>>>..v>>>.vvv.>.v..>..vv.>...v.v..v.vvv...v.vv.v>...v........v>v.>v.....>>...>v.v>.>...>>.>>.>>v.v>>v.v..vvv..vv.>..>.v>..v",
".vv.v>...>>>..>.>v>.>.>..v.vv.>..v>...v>.v..v...>vv.>>v...>>.>.>.v.>.>.....>v.>.vv>.>.v...>...v>.>v.>.v.>>v.v>..v>.v>.>.v.v.>v.vv>>>.v.vv>>",
"v...>...vvv.>>>vv.>v.v...>>>>v>>>.vv.>..>.>vvv.v.>.....v..>>>v>..v>....>.>>.>..v...v>.>>..>..v.vv..v.v.>vv>..v..>>>.>>>v.>...>>..>>v.v.vv..",
">..>..vv.vv>...>>..>v....v>v..>.>....>>>...v.>>.v>...>..vv.....>>.>vv..>.vvv..>>>.v..v>>>.>v..v>..v..v>..v.v.vv.>>vvv..v>.>>..>v>vvv>v>>v..",
"v.v>>v....>.....>v.>.v.>v..>.>.v.>v....vvv.>....>>>..>.>.>.>vv>.>v..vv..v..>.v>vv>vv..v.v...v..v......>>..v.>...>>vv.>v..>v.>.>>v.>vv.>.v..",
">..v>..>vv.....v.v...>.vv..>.>vv>v......>...>.vv.v..v..>.v.v>>..v.>..>vv.>.>>vvv..v>..vvvv..v.>v>vv.v..v>>>>v>vv>.>.>>.v>v.v.>..v>.>v.v.v.>",
"vv..vv>v..v..>vvv......vvv.vvvv>>.>.v.v...>v>...v>..vv..vv>>v>.v.>>v.>>.vvv.v...v>>..>>>v..>..>.....v>>.>>v....>.v>.v>.v..vv..v..>.....vv>v",
"v>..v>.>v.>.>>>v.v.vvvvv>v.v>..>.vv>...>>..v.>v.>v....v>..>v...v>.>>...>v..>>.v..>>v..v..>>.>.vv.v..>.>>v...>.>>......v>>.>vv...>.>.v..>...",
"..v.v....v.>v>.v>v.v...>vv>..vv..vv...v>>>v...vv>.>>..v...>v....v...v>.v>>>.v....v..>v.v....>.>..>.>>v.v.v>.>.....v.>vv.>.vvv.>v>>...v...v>",
"vv>..>..v>>>v>.v>v>...>.>>.v..>>>>..>>.v>v.vvvv..>.>>v.>v>>>..>>...>>.v.....>..>.>vv.vv.>>>.>>v>v..vv>vvv.>v.....v>.v>v.>>.vv>>.vv.v>...v.v",
"vvv..>..vv..vv>v.>vv.vv.>.>.>..v>.vv.vvv>v>.v.v>.>>v..vv.v...v.>..>.vvv>...>v..vv.>v..v...>.>..v>v.vv..>..vv.v>v.vv.v.>v.....>>>.......v..>",
"v......v.>>>>...vvv.>..v..>.>>v....vvv.>>.>...v..v.vv.>......>..>......vvvv.v..>.......v..>>..>>>v.>>>..>.v...>vv.v>>...v>>.....>>vvvv..v>.",
".v.....>...>.>......>..vv>..>....v>v.>.v.v...v..v>.>..>.>.v>v.>.>v..v...>.>v.>.vv.v>v.....>v....v.>v>..>.v...v>.>.>...v.v..>v..v..v..>v...>",
">v.>>>.>.v>.>v....>>..>....>.v.>>>...vvv.>.v...>v>.v..>..vv>..v>.v..v...v..>..v.>v>v.......v.>.....v>.>v>v>..v.v>.>>....>v>>.....>>.>v..vv.",
".v..v..v.v>..v..>..v.vv.v>v>>..v>.v....>v......vv....vv.vv>>v.v....>..>..>>.>vvv.v.>.>.>v.v>>v.>>>.vv.>v.>.....>..v..v.>.>..>.v.>>.>v.>vvv>",
"...>...v.>........v....>v....>..>.>>..vv.....v>vv.....>>.vv.>..v.v..vvvv>vv>...vvv..v.>..v...v.>>>..>>.>v..v..vvvv>>.>.>v.vvv.vv.v....vv.v.",
"v..v>..>>.v.>>.v.v>.>.v>v..>>v.v>v......>>....>...>.>>.v>.....>>>>...>..>>.v.v>.v.v..>>v>.>.v.>...>....>v>v>vv...v.......vv>.v.>>.v>v.>>v.>",
">.>v.vv>vv>>v>.....v>...>.....v>.v.v.v.>>>.v....>..vv.v.>>..>..v..vv.v..v.v>>....v>..>..vv>.vv>..v.v.v.>.v.>v.>........>>>>.v.>..v..v>.>.>>",
"...>..>.vv.>...v...v.v.v.>...v>.>...v.v..>.>vv.>..vv..>.v>.vv.vv>vv..>>v.>>v>.>.v>v....>.v.>vvv..v..vv....v...>.v>.>.v>vv.>>....>>.v>>.v.>.",
"vv..>....vvv.>..>.v.v..>...v>..vv.vvv>.v>.v.>..>vv.v>.>...>.v.>.>>>...v...v...v.v.v.>v>v>.>.>v.>v>.v>..v..>v..v>....v...>..>.....>v>..>>vv.",
"...v.>..>.....v.v..vv....v....v....>.>>..v...vvvvv.v.v...v..v>.>.v..>.>..v.....v...>.>v.>.....>..vv...>>.v.v.>>.>>.v>>>>>v.>>...v..v.v...v.",
".....v..>.>..vvv..vv>vv>>....vv..vv>>v.v>...>v.v.v>>.....vv>...>v.>...>.v>v...v.v.v>>>>>.vv>v>v...v>..v...v..>.v>v>>>vvv..v.>.>>>...v....v.",
"v>>>.>v..v>.vvv.v..vv.>v.>..vvv.v...>.vv>.v.v>>...>v....v>.v....>...>v.v..>...v>>...>>>...v..>v>...>.v>.vvv>v...>..>>>vv>.v..vv>>>..v...v.>",
">...v>>..>>....>.>v>.>>v...>.>>>vv...v.>.>.......v...>>.....>.vvv>...>>.v>vv>...>.>v.v.>.v.v>v..v>vv...>.>>...>.....>.v..>vv.>>.>>.>...>...",
".v...>vv>...vv>v.>....>>.v....>....v.vvv>>..v>....>.>>....>v.....>v>.v..>v>vv..v.v>.>v..>vv>..>..v...v.>.>>...>>vv>v>v..>......>.v.v>....v>",
"v...v...v>>v...>vv...>vvv>>v..v....>.....>v>.>>v>..v.>.>>>>.>.>.>...>v>>.vv.....v>..>>>v....v....v.>......v...v>v>>..>...v.>>..v.....vvv>.>",
"v>>.v>v...v.>>v.v>>...>.v.....>vvv.>v...v>.v.v>.v..>v.....v.>v..>>v>v.......>v>v.v>.v>vv>v..v..>>......vv..v.>v.vv>.vv.v.>v..>.v>vv.v>.>.>.",
"v.vv>..v.v...>vv>>..>...>>>...v...v.>v>>>>v>vv.v..v.v..v>>v.vv.>>.v.>vv..vv...v..>vvv>>>.vv..v.v..>.v.......v.v.v..>.v>..>>v>.>v.>vv.v....>",
"v..v.>..>.......v>>v..v.>.....v.v....v..>.v.v>v...vv..>.v>.>vv>v..>v>>.>...>......v>...vv.v.v...>>....>v>...v...v..>>vv.>>.v>..v.>>.v.v....",
">v>..>>...>v>.>..>>..>vv..>..>v..v.v.>>..v.>v.v>>vv.>>..>.vv.v.v.vv...>>...>>v>.v.vvv....v..v.>.v>v>>>v>.>...>vv>...>..>>>v.v.vv....v>>v>v>",
">..>>>>.....>v.>...vvv..>..>...>....v.vv.vv>v>vv...>...v>>..>>v...vv..vv>..>>.v..vvvv>..v....v....>vv.v>...v.v..>v>......>....v>.>..>v>...>",
"..vvv>.>..v...v..>.>v.>.......>.....>v>...v>.>>>>>..v.>...>vvv.v..>vvvvv.>.>v.>.v......>v.....v>v.>..vv.>.v>.......>.vvv.>>.v>.v..>.>v.v.v.",
".....vv>.v>v.>>v..v...>..vv>.v.>v...>vv.>...>...>..>..>>.v.....v..v...vv...v>.>.....v...v>.vv>.v..>>v>....>.>>v.>vv>.v..>..>......vvvv..>.v",
".v>..v>..>.....vv..v>..>....v..v.>v>....v.>vv>v.....v....vv..>.v>..v>.vv>>>.>>..>v..>>..>>....>.v>>>>v.>.v..>>........v.vvv>v.>..>v>>>v>v..",
".>vv.>.....v..v..v>.v...>v>v.vv..v>..vv..>.>v...>...v.vv..>...>..v>>.>v.>>.v...>>>>v.v..>>.v.v...vvvv>.v>v...v.v..>vvv>...>>..>.>v>>>.v>>..",
">..v>>v.v>...v>vv>...v>vv..>vv>>.v.vv.vvv.>.>v>>v...>.v.>v..v.>..v>..v.vv.....v.>>.v.>..>....>>....>..v.vvv>>>>..>....>.v>......>...>>>....",
">.>vv.>v>v.>.>.>>..v..>..>.>v......>..>...>v.vvv>>v...>..v........>.v>...>>...v>.....>v.v....>v.>..>.>vv....>....v.v..v.v>.vv>>..v.vv>.>.>.",
"v.>.v.>v..v>.>.......>.v.>>.v..>....v>.v.v>.>..v..v.>>v...v...v>....v.v.>>v.>.>.v.>.>v>v........v.vv>.v...>>...v.v...>v..v......vvv.v.>>.v>",
"v.v>v>.>.vv.>..>>.>v.v..>....>.>.>v.>v........>.vv....>>>>vv>..>.>v>.v.>>v>..>>.>>.>...v.....>.v>v>..>.v>.v>>>v.>>>vv.>.>....v>>v.>.>.>.>>v",
"..v..>..>......v....>....vv..>..>...>.v.....>>.vv...vvv..v>.>>v>>v..>.vv.>>.v.v>>v>>>>>v>.>>.v>.>v>...v..>...v..>.>>.>.>.>.v.>....>.>.v....",
"..v...>..>v.v.vv....v.>.>vv.v.>.v.>>v.vvvv.v...>>v.........v>>.>vv>..vvv>vv.v>>.>vv>v.>.>.v.v..>v>.>v.vvv....vv..>.v..>v.>......v.v>..>..v.",
"..vv>v>..v>>v.v>.v.>vv.vv.vv>....>.>>>>.>......>...v.>.v>...>..>.....>.>...>.>..v>.>v..vv>>..>>..>>.>>.vv..>>v>>..v..v>.v..>...>v.v>>..>>>>",
".v.v.>.>...>...v>..v>...>.vv..v..vv>>....v..v>>>.>...>v>.v..>vv.>.>>>....>v>....>>>v.v.>..>..>>..v>>.v.vv.v.v.>vv>v.....v.>..v..vv>...v.>>.",
"..vv.v.>v...>v.....v.>v..v....>v>>.>.vv.>.>.>....vv.....>>vvv.>.v>>>.v.>v.vv.v....>..v..>v>v.>>.>v..>.>.>.v.>vv.vv...>v>....>v..>.v>.>>....",
"vvv....>vv>v.v>>>.v>vv..>v.v..>vvv>>.v.>>v>>.>vv>v.v>v.v.>..v.v..v>>v........v.vv.>.v>...>..>...v>>.>.v.....v...vv.vv>.v.vv>>.v>v>v>vv.>>>v",
"..vvv>...vvv>>.....>...v...v>.v..>>v>>vvv...>v..vvv..>>..>>.>>>>..vvv>>vv>vv>>...vv.>.>v>>>.>...>.>.>.v.v..>.>>...v.>>..>>>.>v>>.vv...v>>..",
".>>v.vv.v.>v.>....>.v.v>.vv...vvv..v>.v>>>v>>.>..v.v...v>.vv.>.v..v..vv.>.>.>.>....v..v>>v.vv.>.>v>.v....>v>v..>.v.>..>.v>v>>v>>v>v.>.v.v..",
">.v>.v..>...>v...>...>.>>>v.>.>v>.v.>vv..v..v.v..>.>.>>>v...v.........>..>>vv...v>vv..>v>>.v..>vv....>..>..v>.vv.>v..>v>>>.>>v.vvv.>..>>>v.",
">vv..>.>...>.>.>>....v>vvvv>...v.v.>..v>vv>>...v..>>..>>>>v.>v>...>>....>v>v>..vv....>>....>>>.>..>.>.>.v....>v>..v.>.>>>....>vv.>.>v.>v..>",
"v>...>..>.>>>.v>>v.>>.>...vv.>..vv.....v........vvv>>..>>>.>.v>.>v>>v>v.v...>..v.v>..>...>>v>>.....v>.>>v>...v.>.v>....vv>.v.v.vv.v.......>",
".v>.v.vv.v..>v..v...v..>.v>.v..v>v>......>>>.>..v>..v>vvv.v.vvv.v..>.......>..>>.v.....>...>>>..v.>>>>.>.>v>.>.>..>>vvv.....vv.>.v.v>.....>",
">v..>.v......v.......v.>>>v.>vvv.......>v>v...>>vv.v.>.....>v.......v>v>>..v>....v..v..>.>...>v>..v.>.>v>v.>....>v...>...>vv...vv.vv>>v.>v.",
">v>.v..v..>v.v....vv.v.>vv.>.>>.vv......vvv...>v>.>v..v>...vvv.....>..>.>v>.>.v>.v.v..v.>.v>.v...>v>v.vv..>.>>.>..>...>v.>>v>..>v..>>..>..>",
"..>>..>v>v>...vv>..v...vv..>.>v.>>>.>v..>..v>....>....v....>.v.v>>>v.v>.vv.>.>>v.vv...>vvvv.v>.>>v>>>...v>..>.>>..v..>>..>..>.v>v..v...>.v>",
">v>v..vvv.v.v.>.vv..>.v>.v.>.v>..v..>.>>.>v.>v.......>..v.v.>..>.....v>.>..v>>....v......>v..v>>v..v>>...>>.>..v..>.>>...>.v.v..v>>.>>>>v.v",
">.>>..v>v..vv.>vv.>..v..vv>>v...>...>....v.vv>v...v.>.>..>>>v..v......v>v.v..v>v>...>vv....>v>v.>>>.v.v>.v>....>v...v.>vv..v>.>v.v..>...>.>",
"v.v>.v..>.v...>>..v....>>.v>....vv....>>>..>..>>>v.>v>.....v.>.vv.>....v.vv.vvv.v.v>.vvv....>.......>.v>v>>..v>.vvv>.>vvv.v.>...v.>v>.v>vvv",
"v.>..v...vv>.v.>...>.vv>v.>..v>...v..>v....vvv..>.v.v.vv.>..>...v...>v..v.....v.>>v....v.v..>.>..>vvv.>..>..v.>..>..v.>..v.>....v..>..>>...",
"vvv.....v>v>v>>>.>...>..>>v......>..v>.>>vv..>>...>.>>>>v>..v.......>>.....v..>v.v.v>>>>...v.>..v.....>.>.v..v>v.v>>>>.>>>...>.v>.....>.>v.",
".>..vv...>>.v>v......vv.>.v>>v...>...v..>.>>.v.v>...>vv.>..v..v...v>>>>>v>v.....>..vvv>>.v...>v.vv>..v..>>...>.>>.v..>>>..>.v>>....v>>>....",
"....v>vv>>.v..v..>>..v..>.v..v.v.>......v>.v...vvv>v>>.>..v.>>>.v>v.vv.v.>.vv...v...v.>vv>>..>..v>v>>vv..>>>v>..>.vv..vvv.>...>>vv>.vv>.>..",
".>v>>.v>...>..>...vv..>>vv.vv.v.v.....v>v.......v>>.v.........v.>>..v>.vv..v.>.>.v.>>.v>.v>.>.vv...>>...>.>>..>.v...v..v.>v.>>>v>.>v......>",
".vv>.>.>.....v.>>.....v..>vv.....v>v..>...v>..vvv>>vv.>v.>v.........>...>>>.v...>>v.>v.v>>......vvv.v..vv.>.v>.v>>vv>v>v.>vvv.>v..v......vv",
"..v..vv..>>>>vv>>>>v>.v.v>v..v.v>.v>v>>.v..v>v>>>.>...>.v>vv.v>.>>..vv>.>.vv.....v.vv..v>.>.v......v..>v>.>...>>>>..v.v>.vv>...>.vv.v>...>.",
"v.....v...>.....>v.v.....v.vv...vv>.v>.>>..vvvv>.....v.>.vv>...v>..v...v..v>.>.>>..v.v..>>>>.v..>..>.v>>>.v>v>....>.>>.>>>.....v>.>>v.vv...",
">vv...vv.v...v..vv..v.>v>.>.vv.v...vv>>v.vvv.>>.v..v.>......vv>.>..v.>.>vv>.v.>>.>.>v..>>.>>v.>v..v>>...>>....>v....>..>>...v...>>..>....>v",
"v>>.....>...>v.v..>.....>.>>.v>>..>v.v...vvv>v.>....v...>.v..>.>v.v>...v.v.>.>>...v....>vv.>>>......>v.>v>v>>..v..>v>..v>vv.....v..>>v.v>v>",
">.>..>v>v.>v..>v>..>.vv.v>>v.v....>..>.v.v>>v>.>v.>.v>v>.>>.>v.v.v.>.v>.>..>>>>>..>.>..>>.>.>...>>..>>>..>.v.>..>vv.>>.>.v.>vv.v.>>.v...>v.",
"...>vvvv.vv>.>.>vv.v>>..>.v>>..vv>>.>v.>>>>.vv>v.v.>v..>vv...>...>..v>.........>.........v>>.>....vvvv.v..>v...>>>....>>v..>v.vvv>.v....vv.",
"....v>.vv>..>>>v.v...>v.v.vvv.>.>...>..vvv>v..v....v>.>>...>>.>v...v..v>v.vv>..v.vv...vv>v..>.v>v.v.v.>v.>.>vv.v.>v..v.....>.>v>.>..>..>.vv",
"..>v>>.>v.v.>>v.v>.>>>>...v>>v.vvv.>>.>..v>v...>.v>..vv>>.v>.v.>....>v.>.....v..v.>vv>>>.>.v>>..>.v..>.vv>..>...v.v..>>.>.v>....>v>>v.v>..v",
">..v.v...vvv>...>v.vv.v..>.>v...v>.>.vvv....v>.>.>.>v>>....>>...v.>>>..v>v..>.v.v..v.vv>...>..v>>.vv.v>..vv..v....vv>>..>v.v..v>>v.>..v.>..",
"....v....v>v.>.....>vv....v.v...v>>>.>.v....>......>v...v....>v..v>v..v....>>>>v>>.>..v.v......v>.v....v>.>..>.>>v.>>>...v.vv.>vvv.v.vv..vv",
"..>>..>v.v.>v.v>v.>>.....v........vv.>v.>.vv.v...v.v.>.>...>v.>>v...v.>.......v..>.vv...v.>..>>v>.v...vv>v....vvvvvv>...v.v>...>..>..>>>v.v",
"...>v.....>v>..>v.>v.>.v>.v.vv.v>.v>..>v>>.>>v..>..v..>.>v....v.v.>>>.>v...>>>>..v..vvvv.v>vvvvv...>...v>v>>.vvv..>.v...v...>>..v..>.v...>.",
".v...v...v..>.v>.>>..>...>>.vv>>v..>v..>v>..v.v.>v.v>.vv..v.v.>.>v..>..v..>...v>v>v.>>..>v.>>..v.....>..>.....v>..>>.vvvv.>.v>.>>>>v.v>....",
"v.v.>v..>..>v.v>.v..>>....>>vv>v...>>..v....v........>v>v.>.>.v.>.v>v>...>>.v.v>vvvv.>..>>v>..>.v.v>.v>..>...v>.v>v>>v.........>>.vvv..v.v>",
">>.>.v.>.....>v>.......>v.v.v>.>v..v....>v...>.v.vv...>.>.v...v>..v.v>..>.v.v.>v.>.>.>vv>.>>vv..>v>>..vv.v..>v..>..v....>v>vv>v>>>.>v..>.v>",
"v.....vvvv>...v>..vv.>vv..vv.>vv...v>>>...vvv....>>v...v....v>.>vv>.>>>vv>>>>....vv..v>>>>..v..>.v...>.v....v...>v>.>.>>>v>...>..v.v..>>v>v",
"...v>v.>v.>vvvv>..v>...vvv.>......vvv..vv>.>.....>>.vv.>.>.>>..>>>>>..v>v.vv.>.>>vv>v>>v>..>..vvv.v>...>.vv...>v.>..v>.v.>.>vv.v.>...>vv..>",
"....v.vv.>>...v.vv>.>>>.>..>..v>vvv.v>v.>>>...v>v.>.vvv.>>...>.vv>>..v.....v..v.>>.v>....>.v..>.>v.>.v....>.>.v..>v>>>v.>v.v.>v>vv.>.v>.vv.",
"v.v>.vvv..>>v.>..>.>..>..>..v>.v.>v..v..>>v>>v.v.v.>..>.vv....v>>.v.>....>.>>vvv>...>.v.v>..vv.>.v..>v....v....vv....v.>..>.v>....v.....v.v",
".>..>>vv>>.v>>v..>.v>>..vv.v>>>.>>>v.v>..>...>..vvv..>vv.>v>>>.>>>v.......v....v>v.>v.vv>...>...>>...v>v>..v.>>..v..>>>>..v.......v>.....>>",
".......v>.vv.v.>>v.v>v.....v.vv>v>>....v>v..v>>v.v...v>...v.>v..v..v>v......>.>.>...>>....>.v...v.v>v.v...vv>...>>...>.>.>>.>>.>.>..v.v...>",
"v.>.>v..v>>.>>.v>.v.>>v>v..>v..>..>.....v>....v>>v>.>...>v.v..>vv.>vv.>>...v.>..vv..>...v.>..v......v.>...vv>v>>>>vv.>vv>.>.>...>...>>vv.>>",
".>.>v>>.>.v.>......v.v.>v>>v..v.v>....>.....v.>.v.>.>>>v.v>>vv...v..v>>>>.v...>>>.vvvvvv..>..>..>vv>.vv.>.>.>..>>vvv.v.>....v>vv..>vv>v.vv>",
".>>v..v>...v......>.>..>v..>.....>.>v..vv.v>>vv>.vv...>...v.v>....v>...>.v>>...>.....vv>.>vv>..>.v.>.>v....>v..>..v>>>v.>...>.>v.>.>v.v>.v.",
".>v.>>v.v....v.......>.v.v.v..>v....>v>.v>.>v>>..>v.v>>.>>.vv>>vvv.>v>v.....>>vv.v.v.v.....>.>.vvv>v>...>..v>.v.>>>>>..>v>.>v.>>v>>v....v.v",
"vv..>.>>.>.vv..>..>...v.....v....>.v>v....v.vv.v...>.vv..v>>.....v.>......>.....vvv..v>v>.v...v>.>v.v..>..>.>vv....>>.>>v>.>.v..v>vv.v>.v..",
"v>.v...>v..v..vv>>v..>v.v>.vv>>..>>>.v.>.....>v..>v.>v....>vv...>.>>>.>>v.>.>v..>.>v.>>..>v...>>.>.>v..v.v.vvvv....v.v>.>..>>>..>vv>...vvv.",
"v>>.....>vv.>....v>.>>v..vv.>vv...>v>.vvv...v>...v.v>.>...v.>.>>v.v..v>.....vv.>..>>.vv.>..>.v.>v>..v.vv.v.v...v.v..v>.v.v......vv>...>..>v",
".>...v.>.v..>vv...>.vvv..>>v..>..v.>.....>......>>>.v.vvv..>>...v>.>.vv.v>..v.vv>vv...v>.vv>..vv.>...v.v..v...v..v.>...vvvv.>..vv..v...vv..",
">..>>>.v>..v......v.>.....>v.>>>..>.>>..>>v.>>vv>.>....v>v.>.v..v>..>..v..>v..v....>>>>...vv..>...>.......>.>.v>....v.v>>.v.>.>v>.>>>v..>>>",
"..>.>vv......>.v>>.vvv>..v.v.>.v.>>>>.v>>v>......>>>>.>>.....>.>..>.vv..v.>..v>>vvv.v>...v..v.>.v..>.....v>vvvv.v.vvv>.>v..v>>.v>v...>..v.>",
">..>..>..vvv.>.>.>..vv>....>v>.v.>v.>>>...>>.v.>.>.>.>...vv..v>..>vv...v>..v..v.>..>.>v>......v.....v.v.vv...>v...vv>vv.>>.v..v..v.v..v...v",
".>...v..v...v.>..v..v>v.v....v>.vv.>.vvv.v.>>.v..vv...>>..v.>>.v>.>.>..>vv>vv.v...>.v>>........>.>v>...vv.vv>v..v>.>.v.>v.v..>..vv>.v..>...",
".v.v>...>v....v....>>>vv..>>v..>....>vv.>.>...>>..v.....>v.>.>...v.>v.>v>..>.v.>.....v.>>>v>>>v..v.v>>>v.>>..v..v....vvv..v>>.>>>v......v>>",
"..>.v.>>>.v....>..>vv...vv>>.>v.>>..v.v>>>.v.>v>.v..>>>....>vv................>>>.>.>..v>...>...v.>>.v.>>>.v....>>>.......>v>vv.v....v...>.",
"vv.......>v.v.v.>..vvvv>.>>vv...>..>.>>v...v.>v.v>.>..v.....vv..v..>.>>....v..vv.v.vv>..vv>v>vv>v>...>.v.>>....>.>>...>vv>>.v..>v.>.>>v....",
"v...v.vvv.v..v>...>.>...v..v.vv..>.........vv.>vv.....v>v.v....>.v.v>>v>.>..v>>v>..>..v>.>v.v.v.v..v>>v..v..>...v.v.........>>v.>...v.v.v.>",
".>...v...v.vvv.>v.vv.>>>.v.v.vvv>.....v>v.v>....v.>>....>....v..v>.vvv..vvv..vv.v.v.v>.>.v>v..v>.v.>>..>.....v.>.>.v....>>>>.>vv>.v..vv>..v",
">>.v..v..v>v>..vv...>.v..v.>..vv.v.vv.>>v..vvv>>vv..>..v.v.v.vv>>..>v.>>.>...>v.>.v.>......v>..vv..>v...>...>...>.>>>v.>>..v.>....v.vv.v>.>",
"....vv.......v.v.>.v>v.v...>...v>.v>.....v>.>v....>vv>>>>v.vv>>v...>..>>.>>...>>..vvvv..v>>>.>>v..>vv.>v>..v......>v...v>>.v..v.v.....>..>.",
">.v>>v..>>>..vv>.>>>..vv>vv.vv...>...vvvv..v.v>v..v.>v>....>..>.vv.vvv.>...>v.vv..v.v>>...>v>>..>v.vvv.vv.>>v......>.>.v>>..>>..v....>...v.",
"vv.>>vv.....>.v...v.........>...>>>>>.>>....>vvv.>..v..>v>>....vvvv>v>>vv..>..>vv.>v..>>>.>.....v..v>>...>>v.>.>..>vv...v.v.>v..vv.>..v>>v.",
"...v...>.v...v>.>>...>v>vvv...v>v.vvv>>..>v.......>...>.vvv.>vv>.vv....>vv.>v>.>.>....>v...>>.>.v....v>>v>>.>v>v.>>>>.>vvv>..v..>>v.vvv...>",
">.>>v.>.vv>.v>.>..>.>.v.v...v>..>>....v..>>v..>.v>v.......v.v.v>v..v>vvv.>>>.vv...>.>vvv>vv.....>>.vv..v>v.>>vv>.vv.v>.>>.vvv.>...vv.vv.v..",
"..>v...v.v.....>v>>>>..>.>..>.v...>.>.>>..v.>v>.v>>v...>..>..v.v..>vvvv.>>.v>...>vvv...v...v....>..>.v>>>....v..>....vv.>v.>.v>v....v.vv.v.",
];

const X_LENGTH = rawData[0].length;
const Y_LENGTH = rawData.length;

var gData = {
	
}

function init() {
	gData.hCucumbers = [];
	gData.vCucumbers = [];
	gData.land = [];
	for (y = 0 ; y < Y_LENGTH ; y++) {
		gData.land.push([]);
		for (x = 0 ; x < X_LENGTH ; x++) {
			switch (rawData[y][x]) {
				case '>' :
					gData.land[y].push({isHorizontal : true, id : gData.hCucumbers.length});
					gData.hCucumbers.push({x : x, y : y});
				break;
				case 'v' :
					gData.land[y].push({isHorizontal : false, id : gData.vCucumbers.length});
					gData.vCucumbers.push({x : x, y : y});
				break;
				default : 
					gData.land[y].push(null);
				break;
			}
		}
	}
}

function conclusion_25_1() {
	init();
	hasMoves = true;
	var willMove;
	var x, y, cucumber, idCucumber;
	var count = 0;
	while (hasMoves && count < 10000) {
		count++;
		willMove = [];
		// Horiz.
		for (idCucumber = 0 ; idCucumber < gData.hCucumbers.length ; idCucumber ++) {
			cucumber = gData.hCucumbers[idCucumber];
			x = cucumber.x;
			y = cucumber.y;
			if ((x == X_LENGTH-1 && gData.land[y][0] == null) || (x < X_LENGTH-1 && gData.land[y][x+1] == null)) {
				willMove.push(idCucumber);
			}
		}
		willMove.forEach(ids => {
			cucumber = gData.hCucumbers[ids];
			if (cucumber.x == X_LENGTH-1) {
				moveCucumber(cucumber, true, ids, X_LENGTH-1, cucumber.y, 0, cucumber.y);
			} else {
				moveCucumber(cucumber, true, ids, cucumber.x, cucumber.y, cucumber.x+1, cucumber.y);
			}				
		});
		willMove = [];
		hasMoves = willMove.length > 0;
		// Vert.
		for (idCucumber = 0 ; idCucumber < gData.vCucumbers.length ; idCucumber ++) {
			cucumber = gData.vCucumbers[idCucumber];
			x = cucumber.x;
			y = cucumber.y;
			if ((y == Y_LENGTH-1 && gData.land[0][x] == null) || (y < Y_LENGTH-1 && gData.land[y+1][x] == null)) {
				willMove.push(idCucumber);
			}
		}
		willMove.forEach(ids => {
			cucumber = gData.vCucumbers[ids];
			if (cucumber.y == Y_LENGTH-1) {
				moveCucumber(cucumber, false, ids, cucumber.x, Y_LENGTH-1, cucumber.x, 0);
			} else {
				moveCucumber(cucumber, false, ids, cucumber.x, cucumber.y, cucumber.x, cucumber.y+1);
			}				
		});
		hasMoves = hasMoves || willMove.length > 0;
	}
	console.log(count);
	var string = "";
	for (y = 0 ; y < Y_LENGTH ; y++) {
		string = "";
		for (x = 0 ; x < X_LENGTH ; x++) {
			if (gData.land[y][x] == null) {
				string += ".";
			} else if (gData.land[y][x].isHorizontal) {
				string += ">";
			} else {
				string += "v";
			}
		}
		console.log(string);
	}
}

function moveCucumber(p_cucumber, p_isHorizontal, p_id, p_x1, p_y1, p_x2, p_y2) {
	gData.land[p_y2][p_x2] = {isHorizontal : p_isHorizontal, id : p_id};
	gData.land[p_y1][p_x1] = null;
	if (p_isHorizontal) {
		gData.hCucumbers[p_id].x = p_x2;
		gData.hCucumbers[p_id].y = p_y2;		
	} else {
		gData.vCucumbers[p_id].x = p_x2;
		gData.vCucumbers[p_id].y = p_y2;		
	}		
}