// Time O(n)
// Space O(1)


/**
 * @param {number[]} nums
 * @return {number}
*/
var singleNumber3 = function(nums) {
  const map = new Map();
  for (const n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }

  for (const [k, v] of map) {
    if (v === 1) return k;
  }
};

/**
 * @param {number[]} nums
 * @return {number}
*/
var singleNumber2 = function(nums) {
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) {
      set.delete(n)
    } else {
      set.add(n);
    }
  }

  return set.values().next().value;
};

/**
 * @param {number[]} nums
 * @return {number}
*/
var singleNumber = function(nums) {
  let n = 0;

  for (const num of nums) {
    n = n ^ num;
  }

  return n;
};

console.log(singleNumber([2,2,1])) // 1
console.log(singleNumber([4,1,2,1,2])) // 4
console.log(singleNumber([1])) // 1
