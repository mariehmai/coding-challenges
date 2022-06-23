/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
*/
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;

  const windowLength = s1.length;

  const s1Count = Array(26).fill(0), s2Count = Array(26).fill(0);

  for (const i in s1) {
    s1Count[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
    s2Count[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  let matches = 0;
  for (const i in s1Count) {
    matches += (s1Count[i] == s2Count[i] ? 1 : 0);
  }

  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    if (matches === 26) return true;

    let index = s2[right].charCodeAt() - 'a'.charCodeAt();
    s2Count[index] += 1;
    if (s1Count[index] == s2Count[index]) {
      matches += 1;
    } else if (s1Count[index] + 1 == s2Count[index]) {
      matches -= 1;
    }

    index = s2[left].charCodeAt() - 'a'.charCodeAt();
    s2Count[index]--;
    if (s1Count[index] == s2Count[index]) {
      matches += 1;
    } else if (s1Count[index] - 1 == s2Count[index]) {
      matches -= 1;
    }
    left++;
  }

  return matches === 26;
};

console.log(checkInclusion("adb", "eidbaooo")) // true
console.log(checkInclusion("abd", "eidbaooo")) // true
console.log(checkInclusion("ab", "eidbaooo")) // true
console.log(checkInclusion("ab", "eidboaoo")) // false


