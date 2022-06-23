/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    const result = []

    nums.sort()

    for (const [i, el] of nums.entries()) {
      if (i > 0 && el == nums[i - 1]) {
        continue;
      }

      let left = i + 1, right = nums.length - 1;

      while (left < right) {
        const threeSum = el + nums[left] + nums[right]
        if (threeSum > 0) {
          right-=1;
        } else if (threeSum < 0) {
          left+=1;
        } else {
          result.push([el, nums[left], nums[right]])
          left += 1;
          while(left < right && nums[left] == nums[left-1]) {
            left += 1;
          }
        }
      }
    }

    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])) // []
console.log(threeSum([0])) // []
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])) // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
