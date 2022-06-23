/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
*/
var reverseBits = function(n) {
  let result = 0
  for (let i = 0; i < 32; i++) {
    const bit = (n >> i) & 1;
    result = result | (bit << (31 - i))
  }
  return result;
};

console.log(reverseBits(00000010100101000001111010011100)) // 964176192 (43261596)
