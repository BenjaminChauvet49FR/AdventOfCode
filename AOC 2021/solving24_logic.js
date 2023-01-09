inp w\r\nmul x 0\r\nadd x z\r\nmod x 26
Sauté : div z ?, add x ?
eql x w\r\neql x 0\r\nmul y 0\r\nadd y 25\r\nmul y x\r\n
mul y x\r\nadd y 1\r\nmul z y\r\nmul y 0\r\nadd y w

eql x w\r\neql x 0\r\nmul y 0\r\nadd y 25\r\nmul y x\r\nadd y 1\r\nmul z y\r\nmul y 0\r\nadd y w

Nombre après le div z :

[1, 1, 1, 1, 1, 26, 26, 
1, 26, 1, 26, 26, 26, 26]

Nombre après le add x :
[14, 14, 14, 12, 15, -12, -12, 
12, -7, 13, -8, -5, -10, -7]

Nombre après le add y :
[14, 2, 1, 13, 5, 5, 5, 
9, 3, 13, 2, 1, 11, 8]

Ce que ça donne : 
x = z%26
z' = z ou [z/26]
x = (z%26 + "nombre après")
x = 0 si ((z%26 + Na) == w), 1 sinon
y = 25
y = 0|25
y = 1|26
z = z' | 26*z'
y = 0|w + "nombre après 2"
z = z' | 26z'+w+Na2


Les 5 premiers nombres :
z = 0 ; 
Etape 1 : z' = 0 ; z = w1 + 14
Etape 2 : z' = w1 + 14 ; z = 26(w1 + 14) + w2 + 2
Etape 3 : z' = z prec, z = 26(26(w1+14) +w2+2) +w3+1
Etape 4 : 
Etape 5 : 456976(w1+14) + 17576(w2+2) + 676(w3+1) + 26(w4+13) + w5+5
Etape 6 : w5+5 VS [w1+14, w2+2, w3+1, w4+13] (pour être dans le cas improbable : w5+5-12 = w6)
Etape 6 : z = 17576(w1+14) + 676(w2+2) + 26(w3+1) + (w4+13)	
si w5-7 = w6
Etape 7 : w4+13 VS [w1+14, w2+2, w3+1] (pour être dans le cas improbable : w4+13-12 = w7 ; 
Etape 7 : 676(w1+14) + 26 (w2+2) + w3+1
si w4+1 = w7
Etape 8 : 17576(w1+14) + 676(w2+2) + 26 (w3+1) + w8+9
Etape 9 : 676(w1+14) + 26(w2+2) + (w3+1) 
si w8+9-7 = w9
si w8+2 = w9
Etape 10 : 17576(w1+14) + 676(w2+2) + 26 (w3+1) + w10 + 13
Etape 11 : 676(w1+14) + 26(w2+2) + (w3+1) 
si w10 + 13 - 8 = w11
si w10 + 5 = w11
Etape 12 : 26(w1+14) + w2+2
si w3 + 1 - 5 = w12
si w3-4 = w12
Etape 13 : w1+14
si w2+2-10 = w13
w2-8 = w13
Etape 14 : 0 si w1+14-7 = w14
w1+7 = w14
Bref : 
1-14 : 2 9 
2-13 : 9 1
3-12 : 9 5
4-7 : 8 9
5-6 : 9 2
8-9 : 7 9
10-11 : 4 9

Largest (part 1)
29989297949519
Smallest (part 2)
1-14 : 1 8 
2-13 : 9 1
3-12 : 5 1
4-7 : 1 2
5-6 : 8 1
8-9 : 1 3
10-11 : 1 6
19518121316118

inp w
mul x 0 (0 0 0)
add x z (0 0 0)
mod x 26 (0 0 0)
div z 1 (0 0 0)
add x 14 (14 0 0)
eql x w (0 0 0)
eql x 0 (1 0 0)
mul y 0 (1 0 0)
add y 25 (1 25 0)
mul y x (1 25 0)
add y 1 (1 26 0)
mul z y (1 26 0)
mul y 0 (1 0 0)
add y w (1 w1 0)
add y 14 (1 w1+14 0)
mul y x (1 w1+14 0)
add z y (1 w1+14 w1+14)

inp w
mul x 0 (0 Y1 Z1)
add x z (Z1 Y1 Z1)
mod x 26 (Z1%26 Y1 Z1)
div z 1 (Z1%26 Y1 Z1)
add x 14 (Z1%26+14 Y1 Z1)
eql x w (0 Y1 Z1)
eql x 0 (1 Y1 Z1)
mul y 0 (1 0 Z1)
add y 25 (1 25 Z1)
mul y x (1 25 Z1)
add y 1 (1 26 Z1)
mul z y (1 26 26*Z1)
mul y 0 (1 0 26*Z1)
add y w (1 w2 26*Z1)
add y 2 (1 w2+2 26*Z1)
mul y x (1 w2+2 26*Z1)
add z y (1 w2+2 26*Z1+w2+2)

inp w
mul x 0 (0 - Z2)
add x z (Z2 - Z2)
mod x 26
div z 1
add x 14
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 1
mul y x
add z y

inp w
mul x 0
add x z
mod x 26
div z 1
add x 12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 13
mul y x
add z y

inp w
mul x 0
add x z
mod x 26
div z 1
add x 15
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 5
mul y x
add z y

inp w
mul x 0
add x z
mod x 26
div z 26
add x -12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 5
mul y x
add z y

inp w
mul x 0
add x z
mod x 26
div z 26
add x -12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 5
mul y x
add z y

inp w
mul x 0
add x z
mod x 26
div z 1
add x 12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 9
mul y x
add z y

inp w
mul x 0
add x z
mod x 26
div z 26
add x -7
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 3
mul y x
add z y

inp w
mul x 0
add x z
mod x 26
div z 1
add x 13
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 13
mul y x
add z y

inp w
mul x 0
add x z
mod x 26
div z 26
add x -8
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 2
mul y x
add z y

inp w
mul x 0
add x z
mod x 26
div z 26
add x -5
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 1
mul y x
add z y

inp w
mul x 0
add x z
mod x 26
div z 26
add x -10
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 11
mul y x
add z y

inp w
mul x 0 (0 Y Z)
add x z (Z Y Z)
mod x 26 (Z%26 Y Z)
div z 26 (Z%26 Y Z/26)
add x -7 (Z%26-7 Y Z/26)
eql x w (0|1 Y Z/26)
eql x 0 (1|0 Y Z/26)
mul y 0 (1|0 0 Z/26)
add y 25 (1|0 25 Z/26)
mul y x (1|0 25|0 Z/26)
add y 1 (1|0 26|1 Z/26)
mul z y (1|0 26 (Z-Z%26)|(Z/26))
mul y 0 (1|0 0 (Z-Z%26)|(Z/26))
add y w (1|0 w (Z-Z%26)|(Z/26))
add y 8 (1|0 w+8 (Z-Z%26)|(Z/26))
mul y x (1|0 (w+8)|0 (Z-Z%26)|(Z/26))
add z y (1|0 (w+8)|0 (Z-Z%26+w+8)|(Z/26) )