// Lattice paths

/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?
*/

function findPoints(i, j, max) {
  if ((i === max) && (j === max)) {
    return 1;
  }
  if (i < max && j < max) {
    return findPoints(i + 1, j, max) + findPoints(i, j + 1, max);
  }
  if (i < max) {
    return findPoints(i + 1, j, max);
  }
  return findPoints(i, j + 1, max);
}

function latticePaths(n) {
  const now = Date.now();
  const paths = findPoints(0, 0, n);
  console.log(require('../utils/time')(now));
  return paths;
}

// console.log(latticePaths(2)); // 6
console.log(latticePaths(20)); //
