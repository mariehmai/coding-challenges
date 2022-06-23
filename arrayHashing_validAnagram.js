function lettersCountInWord(word, map) {
  for (const letter of word) {
      if (map.has(letter)) {
          const newCount = map.get(letter) + 1;
          map.set(letter, newCount);
      } else {
          map.set(letter, 1);
      }
  }
}

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isAnagram = function(s, t) {
  if (s.length !== t.length) { return false; }

  const sLettersCount = new Map();
  const tLettersCount = new Map();

  lettersCountInWord(s, sLettersCount);
  lettersCountInWord(t, tLettersCount);

  for (const [k, v] of sLettersCount) {
      if (sLettersCount.get(k) !== tLettersCount.get(k)) {
          return false;
      }
  }

  return true;
};
