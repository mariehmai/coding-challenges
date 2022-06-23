/**
 * @param {number} n
 * @return {boolean}
*/
var isHappy2 = function(n) {
  let digits = String(n).split("")
  let history = new Set();
  const sum = (arr) => arr.reduce((prev, curr) => prev + Math.pow(curr, 2), 0)

  while (sum(digits) !== 1) {
    if (history.has(sum(digits))) {
      return false;
    }

    history.add(sum(digits));
    digits = String(sum(digits)).split("");
  }

  return true;
};

/**
 * @param {number} n
 * @return {boolean}
*/
var isHappy = function(n) {
  let history = new Set();
  const sumOfSquares = (number) => {
    let sum = 0;

    while (number) {
      let digit = number % 10;
      digit = Math.pow(digit, 2);
      sum += digit;
      number = parseInt(number / 10);
    }

    return sum;
  }

  while (!history.has(n)) {
    history.add(n);
    n = sumOfSquares(n);

    if (n === 1) {
      return true;
    }
  }

  return false;
};


console.log(isHappy(1111111)) // true;
console.log(isHappy(19)) // true;
console.log(isHappy(5)) // false;
console.log(isHappy(2)) // false;
console.log(isHappy(0)) // false;
console.log(isHappy(1)) // true;
