// Special Pythagorean triplet

/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function isPythagoreanTriplet(a, b, c) {
  if (a === b || a === c || b === c) {
    return false;
  }
  let sides = [a, b, c];
  sides.sort((a, b) => b - a);
  if (Math.pow(sides[0], 2) === (Math.pow(sides[1], 2) + Math.pow(sides[2], 2))) {
    return true;
  }
  return false;
}

function productOfSpecialPythagoreanTriplet(sum) {
  const now = Date.now();
  let a = 1;
  for (i = a; i <= sum - 3; i++) {
    let b = i + 1;
    let c = sum - i - b;
    while (b < c) {
      if (isPythagoreanTriplet(i, b, c)) {
        console.log(`Solved in ${((Date.now() - now)/1000).toFixed(2)}s`);
        return i * b * c;
      }
      b++;
      c--;
    }
  }
  console.log(`Solved in ${((Date.now() - now)/1000).toFixed(2)}s`);
  return `No special pythagorean triplet found with side sum ${sum}`;
}

// console.log(productOfSpecialPythagoreanTriplet(12)); // 60
console.log(productOfSpecialPythagoreanTriplet(1000)); // 31875000
