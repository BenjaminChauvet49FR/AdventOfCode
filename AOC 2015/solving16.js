const rawData = [
"children: 1, cars: 8, vizslas: 7",
"akitas: 10, perfumes: 10, children: 5",
"cars: 5, pomeranians: 4, vizslas: 1",
"goldfish: 5, children: 8, perfumes: 3",
"vizslas: 2, akitas: 7, perfumes: 6",
"vizslas: 0, akitas: 1, perfumes: 2",
"perfumes: 8, cars: 4, goldfish: 10",
"perfumes: 7, children: 2, cats: 1",
"pomeranians: 3, goldfish: 10, trees: 10",
"akitas: 7, trees: 8, pomeranians: 4",
"goldfish: 1, perfumes: 4, cars: 6",
"samoyeds: 6, trees: 6, perfumes: 2",
"akitas: 10, pomeranians: 0, vizslas: 2",
"cars: 2, perfumes: 3, children: 4",
"goldfish: 2, children: 8, cars: 5",
"goldfish: 9, cars: 0, vizslas: 5",
"cats: 5, trees: 6, perfumes: 6",
"cars: 0, perfumes: 8, pomeranians: 7",
"trees: 2, goldfish: 5, perfumes: 4",
"akitas: 4, vizslas: 4, trees: 0",
"pomeranians: 7, trees: 0, goldfish: 10",
"cars: 4, vizslas: 0, perfumes: 3",
"vizslas: 8, trees: 1, akitas: 2",
"children: 7, trees: 0, akitas: 1",
"goldfish: 3, akitas: 2, trees: 2",
"pomeranians: 4, vizslas: 4, samoyeds: 2",
"cars: 0, trees: 8, akitas: 5",
"perfumes: 6, cats: 0, cars: 2",
"trees: 7, akitas: 1, vizslas: 1",
"perfumes: 9, cars: 9, trees: 10",
"pomeranians: 5, akitas: 9, samoyeds: 1",
"pomeranians: 10, vizslas: 5, goldfish: 5",
"vizslas: 2, akitas: 3, trees: 7",
"goldfish: 10, perfumes: 0, samoyeds: 7",
"akitas: 6, cats: 7, perfumes: 10",
"pomeranians: 8, vizslas: 7, akitas: 6",
"goldfish: 2, cars: 10, children: 7",
"goldfish: 2, perfumes: 3, cars: 7",
"trees: 9, vizslas: 10, cars: 5",
"goldfish: 1, pomeranians: 0, trees: 2",
"trees: 2, goldfish: 6, vizslas: 3",
"akitas: 1, cars: 3, vizslas: 3",
"akitas: 1, pomeranians: 1, vizslas: 3",
"goldfish: 7, akitas: 3, vizslas: 10",
"akitas: 8, samoyeds: 8, goldfish: 2",
"trees: 0, vizslas: 4, cars: 9",
"cars: 9, trees: 10, perfumes: 4",
"akitas: 0, vizslas: 5, perfumes: 4",
"goldfish: 9, trees: 1, cars: 4",
"goldfish: 2, perfumes: 5, cars: 2",
"samoyeds: 1, goldfish: 2, perfumes: 7",
"cars: 0, perfumes: 4, goldfish: 8",
"goldfish: 9, vizslas: 2, akitas: 9",
"trees: 1, goldfish: 9, children: 5",
"cars: 0, akitas: 5, trees: 4",
"trees: 4, samoyeds: 5, children: 9",
"children: 0, vizslas: 8, cars: 3",
"trees: 4, pomeranians: 5, akitas: 5",
"vizslas: 10, cats: 3, children: 2",
"cats: 6, vizslas: 2, cars: 2",
"akitas: 1, vizslas: 0, children: 4",
"akitas: 4, trees: 9, children: 10",
"pomeranians: 6, vizslas: 6, cars: 4",
"perfumes: 8, pomeranians: 1, children: 8",
"perfumes: 3, goldfish: 6, trees: 5",
"goldfish: 10, akitas: 8, vizslas: 4",
"vizslas: 10, samoyeds: 3, trees: 2",
"samoyeds: 4, cars: 7, perfumes: 3",
"perfumes: 2, goldfish: 0, trees: 2",
"trees: 8, vizslas: 7, akitas: 6",
"cars: 2, children: 7, perfumes: 3",
"cars: 1, akitas: 9, perfumes: 0",
"vizslas: 4, akitas: 7, cars: 5",
"samoyeds: 3, cars: 3, akitas: 2",
"trees: 2, cars: 1, vizslas: 7",
"samoyeds: 9, perfumes: 1, trees: 6",
"trees: 6, perfumes: 10, cars: 7",
"trees: 0, children: 8, vizslas: 5",
"vizslas: 0, trees: 0, samoyeds: 1",
"trees: 6, goldfish: 8, perfumes: 0",
"samoyeds: 8, pomeranians: 6, akitas: 5",
"vizslas: 6, perfumes: 9, akitas: 4",
"cats: 0, vizslas: 3, pomeranians: 10",
"cars: 4, perfumes: 6, samoyeds: 5",
"vizslas: 7, trees: 5, goldfish: 7",
"goldfish: 2, trees: 2, vizslas: 1",
"trees: 6, goldfish: 10, pomeranians: 4",
"vizslas: 1, akitas: 0, perfumes: 8",
"goldfish: 8, akitas: 3, vizslas: 7",
"vizslas: 9, akitas: 7, perfumes: 9",
"children: 7, cars: 7, trees: 9",
"vizslas: 10, akitas: 8, goldfish: 1",
"goldfish: 7, vizslas: 2, pomeranians: 0",
"cats: 2, samoyeds: 6, pomeranians: 3",
"samoyeds: 4, children: 4, pomeranians: 10",
"pomeranians: 9, cats: 1, goldfish: 3",
"trees: 1, akitas: 6, goldfish: 1",
"vizslas: 7, akitas: 2, perfumes: 7",
"pomeranians: 6, perfumes: 2, trees: 1",
"cars: 3, children: 9, trees: 10",
"children: 0, perfumes: 0, vizslas: 3",
"cars: 4, goldfish: 5, children: 2",
"pomeranians: 3, perfumes: 7, cats: 8",
"akitas: 0, perfumes: 5, vizslas: 5",
"akitas: 7, vizslas: 2, samoyeds: 8",
"goldfish: 7, perfumes: 0, cats: 8",
"cats: 6, pomeranians: 9, cars: 6",
"akitas: 3, vizslas: 10, cats: 5",
"akitas: 10, perfumes: 2, cars: 7",
"goldfish: 7, pomeranians: 1, trees: 1",
"akitas: 10, samoyeds: 6, vizslas: 6",
"cats: 6, akitas: 7, trees: 9",
"akitas: 1, trees: 9, vizslas: 8",
"vizslas: 2, cats: 1, cars: 4",
"akitas: 0, trees: 5, goldfish: 7",
"goldfish: 2, trees: 10, akitas: 2",
"cars: 4, goldfish: 10, perfumes: 5",
"cars: 5, perfumes: 6, trees: 0",
"perfumes: 5, vizslas: 1, cats: 0",
"perfumes: 8, akitas: 9, vizslas: 4",
"samoyeds: 2, vizslas: 7, perfumes: 6",
"children: 6, trees: 9, perfumes: 2",
"cars: 7, akitas: 0, pomeranians: 0",
"akitas: 7, cats: 8, vizslas: 5",
"goldfish: 3, trees: 1, cars: 4",
"cars: 4, perfumes: 3, akitas: 0",
"children: 10, vizslas: 5, akitas: 9",
"akitas: 3, samoyeds: 2, cats: 8",
"cats: 8, akitas: 1, vizslas: 8",
"trees: 4, cars: 6, perfumes: 6",
"akitas: 7, perfumes: 6, goldfish: 9",
"akitas: 6, vizslas: 7, trees: 1",
"akitas: 5, vizslas: 7, children: 9",
"cars: 8, goldfish: 4, pomeranians: 4",
"samoyeds: 1, pomeranians: 6, akitas: 4",
"perfumes: 10, goldfish: 1, cars: 3",
"cars: 3, samoyeds: 6, vizslas: 7",
"samoyeds: 10, akitas: 3, perfumes: 4",
"perfumes: 10, vizslas: 2, goldfish: 7",
"samoyeds: 7, cars: 1, trees: 2",
"children: 6, cats: 5, cars: 9",
"cats: 0, trees: 1, akitas: 10",
"samoyeds: 4, cars: 0, children: 7",
"trees: 0, cars: 4, perfumes: 8",
"goldfish: 7, cars: 5, trees: 1",
"perfumes: 7, cars: 7, goldfish: 0",
"trees: 2, goldfish: 7, vizslas: 5",
"samoyeds: 8, perfumes: 1, trees: 0",
"vizslas: 2, samoyeds: 5, trees: 0",
"akitas: 4, perfumes: 4, pomeranians: 2",
"trees: 2, cars: 0, goldfish: 10",
"goldfish: 7, vizslas: 0, trees: 0",
"children: 9, cats: 0, pomeranians: 10",
"cars: 6, goldfish: 10, akitas: 5",
"perfumes: 9, trees: 2, akitas: 3",
"pomeranians: 9, perfumes: 5, cars: 9",
"akitas: 0, trees: 2, cars: 7",
"goldfish: 10, trees: 8, akitas: 7",
"akitas: 5, trees: 10, cars: 10",
"akitas: 3, trees: 5, cars: 8",
"samoyeds: 2, cars: 7, perfumes: 4",
"cars: 6, vizslas: 10, pomeranians: 5",
"cars: 10, perfumes: 6, vizslas: 9",
"pomeranians: 7, cars: 4, vizslas: 2",
"goldfish: 9, vizslas: 3, trees: 1",
"goldfish: 1, samoyeds: 3, trees: 1",
"vizslas: 4, goldfish: 7, cats: 5",
"children: 1, cars: 5, samoyeds: 7",
"trees: 1, samoyeds: 3, goldfish: 6",
"goldfish: 2, cars: 3, perfumes: 9",
"cars: 4, goldfish: 0, trees: 6",
"cats: 8, perfumes: 6, trees: 1",
"akitas: 9, goldfish: 7, cars: 10",
"vizslas: 2, trees: 0, akitas: 1",
"perfumes: 3, vizslas: 8, akitas: 4",
"perfumes: 0, akitas: 6, goldfish: 3",
"perfumes: 6, children: 1, goldfish: 10",
"cars: 5, vizslas: 3, children: 10",
"perfumes: 3, trees: 8, cats: 9",
"perfumes: 8, vizslas: 4, trees: 7",
"perfumes: 7, vizslas: 9, samoyeds: 4",
"vizslas: 9, trees: 4, pomeranians: 4",
"trees: 9, cars: 3, goldfish: 5",
"perfumes: 2, cars: 4, vizslas: 3",
"children: 10, akitas: 10, cats: 9",
"cars: 5, samoyeds: 0, trees: 0",
"trees: 2, goldfish: 3, cars: 4",
"goldfish: 3, vizslas: 1, cats: 6",
"trees: 2, pomeranians: 10, cars: 7",
"perfumes: 10, akitas: 3, samoyeds: 0",
"cats: 5, vizslas: 6, akitas: 6",
"samoyeds: 5, trees: 1, perfumes: 8",
"pomeranians: 0, akitas: 9, cats: 0",
"trees: 1, goldfish: 0, perfumes: 10",
"perfumes: 2, akitas: 7, cars: 5",
"perfumes: 5, samoyeds: 8, cars: 1",
"vizslas: 2, pomeranians: 9, trees: 1",
"trees: 8, vizslas: 6, children: 8",
"pomeranians: 4, cars: 7, vizslas: 5",
"trees: 0, perfumes: 10, akitas: 10",
"cats: 9, akitas: 4, vizslas: 0",
"goldfish: 9, pomeranians: 9, cats: 6",
"cars: 5, perfumes: 5, trees: 2",
"pomeranians: 7, children: 2, akitas: 6",
"samoyeds: 7, pomeranians: 7, children: 6",
"trees: 1, cars: 1, pomeranians: 4",
"goldfish: 2, perfumes: 5, trees: 0",
"perfumes: 2, samoyeds: 4, trees: 1",
"cars: 8, perfumes: 6, goldfish: 9",
"perfumes: 4, cars: 8, samoyeds: 3",
"perfumes: 2, cars: 8, trees: 9",
"trees: 7, perfumes: 2, akitas: 5",
"children: 3, goldfish: 5, vizslas: 0",
"akitas: 6, goldfish: 0, children: 0",
"trees: 8, akitas: 3, goldfish: 1",
"goldfish: 6, perfumes: 8, akitas: 3",
"children: 7, trees: 2, vizslas: 6",
"goldfish: 8, samoyeds: 4, pomeranians: 6",
"goldfish: 8, samoyeds: 0, children: 9",
"perfumes: 1, cars: 8, vizslas: 6",
"perfumes: 9, cars: 10, children: 10",
"perfumes: 9, vizslas: 1, trees: 0",
"goldfish: 1, akitas: 2, vizslas: 8",
"samoyeds: 8, akitas: 7, vizslas: 4",
"goldfish: 1, cars: 4, perfumes: 10",
"goldfish: 9, trees: 4, perfumes: 5",
"vizslas: 5, trees: 4, goldfish: 7",
"cars: 1, cats: 10, perfumes: 4",
"vizslas: 8, cars: 10, akitas: 4",
"cats: 1, children: 8, vizslas: 3",
"perfumes: 7, cats: 6, samoyeds: 7",
"cars: 3, children: 9, perfumes: 7",
"vizslas: 1, samoyeds: 2, children: 2",
"trees: 1, samoyeds: 8, children: 2",
"trees: 6, akitas: 9, goldfish: 7",
"children: 10, trees: 0, samoyeds: 8",
"pomeranians: 4, trees: 1, goldfish: 2",
"vizslas: 4, akitas: 2, cars: 0",
"goldfish: 9, cars: 10, perfumes: 4",
"perfumes: 3, vizslas: 6, trees: 6",
"pomeranians: 6, akitas: 4, trees: 2",
"cars: 8, perfumes: 5, children: 7",
"trees: 4, perfumes: 7, cars: 3",
"perfumes: 6, akitas: 1, vizslas: 7",
"akitas: 3, perfumes: 9, samoyeds: 0",
"pomeranians: 3, vizslas: 9, samoyeds: 1",
"cars: 0, goldfish: 7, cats: 2",
"trees: 5, goldfish: 6, perfumes: 3",
"trees: 0, pomeranians: 7, perfumes: 9",
"cars: 9, trees: 1, goldfish: 10",
"perfumes: 3, cars: 8, trees: 7",
"cars: 5, akitas: 7, trees: 8",
"perfumes: 7, akitas: 3, trees: 8",
"goldfish: 8, samoyeds: 1, vizslas: 7",
"perfumes: 3, cars: 4, children: 6",
"perfumes: 9, trees: 8, children: 7",
"trees: 8, children: 6, cars: 4",
"vizslas: 1, trees: 10, goldfish: 9",
"vizslas: 5, trees: 6, goldfish: 9",
"trees: 0, goldfish: 6, cars: 7",
"cars: 1, perfumes: 4, goldfish: 9",
"cars: 7, goldfish: 9, cats: 9",
"cars: 0, children: 5, goldfish: 8",
"cars: 2, akitas: 8, trees: 0",
"perfumes: 9, children: 8, samoyeds: 7",
"cats: 1, children: 1, vizslas: 10",
"vizslas: 8, children: 2, trees: 6",
"akitas: 10, vizslas: 3, cats: 2",
"children: 4, goldfish: 1, cats: 6",
"vizslas: 5, cars: 9, akitas: 9",
"vizslas: 5, children: 4, akitas: 3",
"cars: 1, goldfish: 0, vizslas: 0",
"goldfish: 10, samoyeds: 1, akitas: 2",
"goldfish: 10, children: 2, pomeranians: 0",
"children: 0, vizslas: 1, samoyeds: 6",
"children: 1, vizslas: 3, samoyeds: 1",
"perfumes: 4, cats: 6, children: 10",
"pomeranians: 7, goldfish: 3, cars: 4",
"perfumes: 5, goldfish: 9, trees: 7",
"goldfish: 6, trees: 5, perfumes: 8",
"cars: 2, akitas: 1, vizslas: 7",
"vizslas: 4, akitas: 3, children: 8",
"pomeranians: 8, akitas: 9, vizslas: 4",
"samoyeds: 10, trees: 10, pomeranians: 2",
"akitas: 9, perfumes: 7, goldfish: 6",
"akitas: 2, vizslas: 7, goldfish: 10",
"pomeranians: 8, cars: 6, samoyeds: 5",
"pomeranians: 1, trees: 0, goldfish: 0",
"trees: 10, samoyeds: 1, children: 0",
"cats: 10, samoyeds: 6, trees: 0",
"vizslas: 9, trees: 6, goldfish: 5",
"cats: 4, perfumes: 8, cars: 3",
"goldfish: 10, perfumes: 10, cats: 0",
"cats: 7, trees: 6, akitas: 4",
"vizslas: 8, cars: 1, akitas: 6",
"vizslas: 5, akitas: 10, trees: 1",
"pomeranians: 8, samoyeds: 5, vizslas: 4",
"perfumes: 10, children: 5, vizslas: 2",
"cars: 10, akitas: 7, cats: 5",
"trees: 1, perfumes: 7, cars: 7",
"cars: 9, vizslas: 1, perfumes: 3",
"perfumes: 9, vizslas: 1, akitas: 5",
"akitas: 9, trees: 1, goldfish: 10",
"children: 10, vizslas: 6, pomeranians: 8",
"trees: 3, goldfish: 6, cats: 9",
"cars: 5, perfumes: 9, vizslas: 5",
"children: 0, goldfish: 7, trees: 2",
"trees: 9, samoyeds: 4, cars: 0",
"cats: 8, vizslas: 2, perfumes: 3",
"cars: 6, pomeranians: 6, vizslas: 6",
"vizslas: 6, akitas: 7, cats: 10",
"trees: 0, goldfish: 7, cars: 0",
"perfumes: 5, akitas: 5, cars: 2",
"akitas: 10, vizslas: 3, samoyeds: 8",
"cars: 3, perfumes: 1, goldfish: 8",
"pomeranians: 6, goldfish: 9, perfumes: 1",
"goldfish: 4, akitas: 6, cars: 2",
"perfumes: 8, vizslas: 8, akitas: 0",
"akitas: 10, cars: 5, vizslas: 6",
"vizslas: 4, akitas: 3, cats: 4",
"goldfish: 4, akitas: 8, cars: 8",
"pomeranians: 5, vizslas: 7, cats: 1",
"perfumes: 1, trees: 6, goldfish: 0",
"goldfish: 6, trees: 10, cars: 10",
"akitas: 2, samoyeds: 6, trees: 9",
"vizslas: 4, akitas: 7, cars: 9",
"children: 3, perfumes: 4, cars: 1",
"akitas: 9, perfumes: 6, cars: 10",
"perfumes: 2, goldfish: 0, trees: 1",
"vizslas: 10, pomeranians: 7, goldfish: 6",
"trees: 3, vizslas: 8, cars: 3",
"akitas: 2, cats: 1, goldfish: 8",
"cars: 6, trees: 2, vizslas: 0",
"samoyeds: 7, cars: 7, trees: 3",
"cats: 7, children: 1, perfumes: 8",
"akitas: 5, goldfish: 10, vizslas: 5",
"cats: 3, vizslas: 0, akitas: 10",
"perfumes: 8, cars: 1, trees: 8",
"cars: 4, samoyeds: 8, children: 2",
"goldfish: 9, pomeranians: 1, samoyeds: 1",
"akitas: 3, trees: 0, goldfish: 2",
"perfumes: 4, vizslas: 8, pomeranians: 9",
"akitas: 4, cars: 5, goldfish: 4",
"samoyeds: 5, cats: 4, trees: 0",
"samoyeds: 4, cars: 8, akitas: 2",
"akitas: 3, vizslas: 10, perfumes: 10",
"goldfish: 10, akitas: 4, cars: 1",
"perfumes: 10, cats: 4, vizslas: 5",
"akitas: 2, vizslas: 4, cars: 7",
"akitas: 5, vizslas: 5, cars: 6",
"vizslas: 8, perfumes: 6, cars: 3",
"cars: 10, vizslas: 0, goldfish: 10",
"cars: 10, perfumes: 5, children: 7",
"vizslas: 6, akitas: 3, samoyeds: 9",
"akitas: 2, perfumes: 7, cars: 10",
"cars: 10, perfumes: 7, children: 6",
"akitas: 4, cars: 8, trees: 1",
"trees: 2, cars: 1, goldfish: 2",
"vizslas: 5, cars: 9, trees: 4",
"perfumes: 4, akitas: 3, cars: 3",
"children: 3, akitas: 2, cats: 5",
"cars: 8, cats: 4, akitas: 10",
"cats: 2, trees: 1, vizslas: 4",
"vizslas: 2, pomeranians: 5, samoyeds: 9",
"samoyeds: 2, akitas: 7, goldfish: 9",
"goldfish: 8, trees: 7, cats: 2",
"perfumes: 2, vizslas: 6, trees: 5",
"cars: 5, samoyeds: 0, perfumes: 6",
"samoyeds: 10, trees: 10, vizslas: 1",
"trees: 2, vizslas: 3, cars: 4",
"akitas: 6, pomeranians: 2, cats: 4",
"trees: 2, perfumes: 3, goldfish: 9",
"vizslas: 5, children: 0, pomeranians: 6",
"trees: 1, vizslas: 8, perfumes: 10",
"cars: 0, akitas: 6, children: 0",
"akitas: 1, vizslas: 0, trees: 0",
"samoyeds: 10, cats: 5, pomeranians: 0",
"goldfish: 3, pomeranians: 7, cats: 7",
"perfumes: 0, cats: 0, trees: 8",
"perfumes: 4, samoyeds: 1, akitas: 7",
"akitas: 4, pomeranians: 2, children: 4",
"vizslas: 9, akitas: 4, trees: 10",
"trees: 1, vizslas: 10, akitas: 6",
"trees: 3, akitas: 8, goldfish: 3",
"goldfish: 6, perfumes: 2, children: 9",
"children: 10, akitas: 7, goldfish: 7",
"goldfish: 3, vizslas: 10, perfumes: 5",
"children: 4, trees: 0, cars: 2",
"trees: 0, cats: 3, goldfish: 10",
"samoyeds: 9, pomeranians: 0, cats: 6",
"samoyeds: 10, trees: 3, akitas: 4",
"akitas: 9, goldfish: 10, perfumes: 7",
"goldfish: 6, cars: 2, akitas: 9",
"trees: 4, goldfish: 9, vizslas: 7",
"vizslas: 4, samoyeds: 1, goldfish: 6",
"vizslas: 5, cats: 0, samoyeds: 1",
"goldfish: 7, cats: 0, trees: 7",
"cars: 10, akitas: 1, vizslas: 7",
"samoyeds: 10, cats: 6, goldfish: 6",
"cats: 6, samoyeds: 0, trees: 2",
"trees: 1, children: 4, goldfish: 2",
"cats: 8, vizslas: 4, children: 3",
"cars: 9, perfumes: 8, pomeranians: 2",
"goldfish: 8, trees: 2, cars: 5",
"perfumes: 1, pomeranians: 5, vizslas: 5",
"perfumes: 6, trees: 2, pomeranians: 6",
"trees: 0, goldfish: 6, cars: 6",
"trees: 0, samoyeds: 7, goldfish: 9",
"samoyeds: 10, goldfish: 6, pomeranians: 0",
"perfumes: 5, vizslas: 6, trees: 0",
"goldfish: 2, trees: 2, pomeranians: 0",
"pomeranians: 4, perfumes: 8, cats: 8",
"vizslas: 4, cars: 5, akitas: 1",
"perfumes: 2, trees: 8, goldfish: 7",
"akitas: 3, trees: 1, perfumes: 3",
"cars: 7, trees: 1, perfumes: 8",
"cars: 5, goldfish: 5, trees: 1",
"cars: 9, goldfish: 4, samoyeds: 2",
"pomeranians: 8, akitas: 1, goldfish: 6",
"cars: 0, cats: 0, children: 8",
"akitas: 10, goldfish: 1, vizslas: 8",
"children: 8, vizslas: 6, samoyeds: 10",
"samoyeds: 3, goldfish: 10, vizslas: 8",
"cars: 3, children: 7, goldfish: 4",
"cars: 9, perfumes: 9, goldfish: 8",
"akitas: 5, trees: 10, vizslas: 10",
"vizslas: 10, cars: 3, akitas: 7",
"cats: 6, perfumes: 5, goldfish: 10",
"goldfish: 7, trees: 5, vizslas: 10",
"perfumes: 3, trees: 7, cars: 3",
"cars: 2, vizslas: 1, akitas: 6",
"pomeranians: 8, perfumes: 5, cars: 3",
"children: 8, cars: 0, perfumes: 7",
"samoyeds: 0, vizslas: 9, akitas: 10",
"akitas: 3, vizslas: 8, cats: 4",
"goldfish: 5, trees: 8, samoyeds: 8",
"cars: 10, samoyeds: 9, goldfish: 7",
"samoyeds: 5, akitas: 7, perfumes: 9",
"goldfish: 10, perfumes: 5, cars: 0",
"pomeranians: 1, samoyeds: 9, children: 4",
"vizslas: 4, perfumes: 2, cats: 5",
"trees: 0, pomeranians: 3, cars: 7",
"akitas: 0, cars: 2, vizslas: 10",
"children: 1, akitas: 9, trees: 0",
"cars: 5, perfumes: 7, goldfish: 9",
"akitas: 0, perfumes: 1, vizslas: 2",
"vizslas: 7, perfumes: 0, cars: 5",
"vizslas: 6, goldfish: 10, trees: 0",
"cars: 7, vizslas: 7, trees: 3",
"pomeranians: 4, akitas: 4, vizslas: 8",
"cats: 4, perfumes: 8, children: 3",
"samoyeds: 8, akitas: 9, cars: 1",
"cars: 8, akitas: 5, vizslas: 2",
"vizslas: 9, perfumes: 4, akitas: 4",
"akitas: 3, goldfish: 2, vizslas: 6",
"cars: 4, perfumes: 5, goldfish: 10",
"trees: 9, pomeranians: 4, goldfish: 10",
"pomeranians: 1, perfumes: 9, children: 6",
"samoyeds: 0, goldfish: 8, vizslas: 6",
"cars: 10, goldfish: 8, samoyeds: 8",
"akitas: 8, goldfish: 9, vizslas: 2",
"cars: 1, vizslas: 2, akitas: 8",
"goldfish: 2, akitas: 4, samoyeds: 10",
"children: 5, perfumes: 5, cars: 5",
"perfumes: 9, trees: 0, samoyeds: 6",
"akitas: 5, goldfish: 3, cats: 6",
"perfumes: 3, goldfish: 0, trees: 4",
"goldfish: 2, children: 4, trees: 1",
"cars: 0, perfumes: 8, children: 7",
"vizslas: 8, cats: 5, samoyeds: 9",
"pomeranians: 7, trees: 2, goldfish: 3",
"goldfish: 8, akitas: 4, perfumes: 5",
"perfumes: 2, pomeranians: 3, cars: 8",
"samoyeds: 0, akitas: 7, pomeranians: 6",
"vizslas: 7, perfumes: 1, trees: 6",
"vizslas: 3, samoyeds: 1, perfumes: 10",
"cars: 6, perfumes: 5, vizslas: 2",
"pomeranians: 1, goldfish: 3, akitas: 7",
"goldfish: 10, trees: 0, cars: 3",
"cats: 3, akitas: 5, vizslas: 8",
"pomeranians: 5, vizslas: 2, trees: 3",
"cars: 8, samoyeds: 10, goldfish: 10",
"pomeranians: 3, vizslas: 6, goldfish: 5",
"perfumes: 7, vizslas: 4, akitas: 7",
"goldfish: 1, trees: 0, perfumes: 10",
"goldfish: 6, perfumes: 0, akitas: 10",
"cats: 2, akitas: 10, trees: 1",
"akitas: 1, goldfish: 3, cars: 7",
"goldfish: 3, akitas: 6, vizslas: 6",
"goldfish: 8, perfumes: 2, akitas: 2",
"trees: 4, vizslas: 8, perfumes: 6",
"cars: 9, perfumes: 3, cats: 0",
"trees: 3, vizslas: 6, goldfish: 7",
"trees: 8, samoyeds: 1, perfumes: 5",
"children: 9, akitas: 8, vizslas: 4",
"vizslas: 2, pomeranians: 1, perfumes: 7",
"trees: 2, akitas: 4, vizslas: 6",
"akitas: 8, pomeranians: 7, trees: 0",
"perfumes: 6, goldfish: 3, vizslas: 7",
"cars: 1, perfumes: 6, vizslas: 1",
];
// Note : I removed the "Sue x" for simplicity

const identifiers = [
{name : "children", amount : 3},
{name : "cats", amount : 7},
{name : "samoyeds", amount : 2},
{name : "pomeranians", amount : 3},
{name : "akitas", amount : 0},
{name : "vizslas", amount : 0},
{name : "goldfish", amount : 5},
{name : "trees", amount : 3},
{name : "cars", amount : 2},
{name : "perfumes", amount : 1},
];

function matches(p_str) {
	var tokens = p_str.split(", ");
	var tokens2;
	for (var i = 0 ; i < tokens.length ; i++) {
		tokens2 = tokens[i].split(": ");
		for (var j = 0 ; j < identifiers.length ; j++) {
			if (tokens2[0] == identifiers[j].name) {
				if (parseInt(tokens2[1],10) == identifiers[j].amount) {
					break;
				} else {
					return false;
				}
			}
		}
	}
	return true;
}

function conclusion_16_1() {
	
	for (var i = 0 ; i < rawData.length ; i++) {
		if (matches(rawData[i])) {
			return i+1;
		}
	}
	return -1;
}

function matches2(p_str) {
	var tokens = p_str.split(", ");
	var tokens2;
	var okClue;
	for (var i = 0 ; i < tokens.length ; i++) {
		tokens2 = tokens[i].split(": ");
		for (var j = 0 ; j < identifiers.length ; j++) {
			if (tokens2[0] == identifiers[j].name) {
				switch (j) {
					case 3,6 :
						okClue = parseInt(tokens2[1],10) < identifiers[j].amount; break;
					case 1,7 :
						okClue = parseInt(tokens2[1],10) > identifiers[j].amount; break;					
					default :
						okClue = parseInt(tokens2[1],10) == identifiers[j].amount; break;
				}
				if (okClue) {
					break;					
				} else {
					return false;
				}
			}
		}
	}
	return true;
}

function conclusion_16_2() {
	for (var i = 0 ; i < rawData.length ; i++) {
		if (matches2(rawData[i])) {
			return i+1;
		}
	}
	return -1;
}

