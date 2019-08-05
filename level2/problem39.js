// Integer right triangles

/*
If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximized?
*/

function isRightAngledTriangle(side1, side2, side3) {
  return Math.pow(side1, 2) + Math.pow(side2, 2) === Math.pow(side3, 2);
}

function findMaxSolutions(limit) {
  const now = Date.now();
  let perimeterValue = 0;
  let maxCountSolutions = 0;
  for (let p = 120; p <= limit; p++) {
    let solutions = new Set();
    for (let a = 1; a < p / 2; a++) {
      for (let b = a; b < (p - a) / 2; b++) {
        let c = p - a - b;
        let sides = [a, b, c];
        if (isRightAngledTriangle(...sides)) {
          solutions.add(`${sides[0]},${sides[1]},${sides[2]}`);
        }
      }
    }
    if (solutions.size > maxCountSolutions) {
      maxCountSolutions = solutions.size;
      perimeterValue = p;
    }
  }
  console.log(require('../utils/time')(now));
  return {
    p: perimeterValue,
    solutions: maxCountSolutions
  };
}

console.log(findMaxSolutions(1000)); // 840
