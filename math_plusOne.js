/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits = digits.reverse();
  let needIncrement = true, i = 0;

  while (needIncrement) {
    if (i < digits.length) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i] += 1;
        needIncrement = false;
      }
    } else {
      digits.push(1)
      needIncrement = false;
    }
    i++;
  }

  return digits.reverse();
};

console.log(plusOne([1,2,3])) // [1,2,4]
console.log(plusOne([4,3,2,1])) // [4,3,2,2]
console.log(plusOne([9])) // [1,0]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])) // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
