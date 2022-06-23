/**
 * @param {number[]} nums
 * @return {number}
*/
var maxSubArray = function(nums) {
  let max = nums[0];
  let curSum = 0;

  for (const n of nums) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += n;
    max = Math.max(max, curSum);
  }

  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6 - [4,-1,2,1]
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([5,4,-1,7,8])) // 23
console.log(maxSubArray([-1])) // -1
console.log(maxSubArray([-1,-2])) // -1


// [-2,1,-3,4,-1,2,1,-5,4] 6
// [-2,1,-3,4,-1,2,1,-5,4]
