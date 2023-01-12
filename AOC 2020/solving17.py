import sys
from itertools import product


with open(sys.argv[1], 'r') as f:
    raw_in = f.readlines()

cells = set()

for y,line in enumerate(raw_in):
    for x,cell in enumerate(line):
        if cell == '#':
            cells.add((x,y,0))

def get_bounds(cells):
    res = []
    for i in range(3):
        res.append(min(cells, key=lambda x: x[i])[i] - 1)
        res.append(max(cells, key=lambda x: x[i])[i] + 2)
    return res

def get_n_count(x, y, z, cells):
    res = 0
    for dx in range(-1,2):
        for dy in range(-1,2):
            for dz in range(-1,2):
                if not (dx == dy == dz == 0) and  ((x+dx, y+dy, z+dz) in cells):
                    res += 1
    return res

def step(cells):
    bounds = get_bounds(cells)
    next_cells = set()
    for x in range(bounds[0], bounds[1]):
        for y in range(bounds[2], bounds[3]):
            for z in range(bounds[4], bounds[5]):
                ns = get_n_count(x,y,z, cells)
                if (x,y,z) in cells and (ns == 2 or ns == 3):
                    next_cells.add((x,y,z))
                elif (x,y,z) not in cells and ns == 3:
                    next_cells.add((x,y,z))
    return next_cells

p1 = cells.copy()
for _ in range(6):
    p1 = step(p1)

print(f'Part 1: {len(p1)}')