/**
 * @param {number} n - a positive integer
 * @return {number}
*/
// Does not work with the last input
var hammingWeight2 = function(n) {
  let result = 0;

  while (n) {
     result += n % 2;
     n = n >> 1;
  }

  return result;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
*/
var hammingWeight = function(n) {
  let result = 0;

  while (n) {
    n &= (n - 1);
    result += 1;
  }

  return result;
};

console.log(hammingWeight(00000000000000000000000000001011)) // 3
console.log(hammingWeight(00000000000000000000000010000000)) // 1
console.log(hammingWeight(00000000000000000000000000000000)) // 0
console.log(hammingWeight(11111111111111111111111111111101)) // 31
