/**
 * @param {string} s
 * @param {number} k
 * @return {number}
*/
var characterReplacement = function(s, k) {
  const count = new Map();
  let res = 0;

  let left = 0;
  for (const right in s) {
    count.set(s[right], 1 + (count.get(s[right]) || 0))

    while ((right - left + 1) - Math.max(...count.values()) > k) {
      count.set(s[left], count.get(s[left])-1);
      left++;
    }

    res = Math.max(res, right - left + 1);
  }

  return res;
};


console.log(characterReplacement("ABAB", 2)) // 4
console.log(characterReplacement("AABABBA", 1)) // 4
console.log(characterReplacement("ABAB", 2)) // 4
console.log(characterReplacement("ABAB", 1)) // 3
console.log(characterReplacement("ABCDDCDCD", 2)) // 6
console.log(characterReplacement("AABABBA", 1)) // 4


