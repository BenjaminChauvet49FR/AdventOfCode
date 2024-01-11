const rawData = `The first floor contains a polonium generator, a thulium generator, a thulium-compatible microchip, a promethium generator, a ruthenium generator, a ruthenium-compatible microchip, a cobalt generator, and a cobalt-compatible microchip.
The second floor contains a polonium-compatible microchip and a promethium-compatible microchip.
The third floor contains nothing relevant.
The fourth floor contains nothing relevant.`.split("\n");

// So : (Q = PM)
// F1 : P, T, TM, Q, R, RM, C, CM
// F2 : PM, QM 
// Must be avoided : PM with Q unless also with P (or p with Q unless also with P)

// First : PTQRCtrc/pq//

// Final step : ///PTQRCptqrc
// Right before : //rc/PTQRCptq
