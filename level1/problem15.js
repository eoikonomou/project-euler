// Lattice paths

/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?
*/
function latticePaths(n) {
  const now = Date.now();
  let paths = 1;
  for (let i = 0; i < n; i++) {
    paths *= (2 * n) - i;
    paths /= i + 1;
  }
  console.log(require('../utils/time')(now));
  return paths;
}

console.log(latticePaths(2)); // 6
console.log(latticePaths(20)); // 137846528820
