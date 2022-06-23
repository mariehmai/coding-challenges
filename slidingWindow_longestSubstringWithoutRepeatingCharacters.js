/**
 * @param {string} s
 * @return {number}
*/
var lengthOfLongestSubstring = function(s) {
  const uniques = new Set();
  let left = 0, longest = 0;

  for (let right in s) {
    while (uniques.has(s[right])) {
      uniques.delete(s[left])
      left++;
    }
    uniques.add(s[right]);
    longest = Math.max(longest, right-left + 1);
  }

  return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("0")) // 1
console.log(lengthOfLongestSubstring("")) // 0
console.log(lengthOfLongestSubstring("au")) // 2
console.log(lengthOfLongestSubstring("dvdf")) // 3

// abcabcbb
// l=0, r=0 a
// l=0, r=1 ab
// l=0, r=2 abc
// l=0, r=4 abca
// l=1, r=4 bca
