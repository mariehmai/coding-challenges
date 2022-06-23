
const isAlpha = char => /^[a-z0-9]+$/i.test(char);

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
//  var isPalindrome = function(s) {
//     let word = "";
//     for (const letter of s) {
//       if (isAlpha(letter)) {
//         word = word.concat(letter);
//       }
//     }
//     return word.split("").reverse().join("").trim().toLowerCase() === word.trim().toLowerCase()
// };

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  if (s.length <= 1) return true;

  let i = 0, j = s.length - 1;

  while (i < j) {
    while (i < j && !isAlpha(s[i])) {
      i++
    };
    while (j > i && !isAlpha(s[j])) {
      j--
    };

    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;

    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome(" ")) // true
console.log(isPalindrome(".,")) // true
