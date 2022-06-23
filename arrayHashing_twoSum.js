/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
      const diff = target - n;
      if (numMap.has(diff)) {
          return [numMap.get(diff), i];
      } else {
          numMap.set(n, i);
      }
  };
};
