
/**
 * @param {number[]} nums
 * @return {number}
*/
var findMin = function(nums) {
  let res = nums[0];
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    if (nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
      break;
    }

    let mid = parseInt((left+right)/2);

    res = Math.min(res, nums[mid])

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1
    }
  }

  return res;
};

console.log(findMin([3,4,5,0,1,2,3])) // 0
console.log(findMin([4,5,6,7,0,1,2])) // 0
console.log(findMin([11,13,15,17])) // 11
console.log(findMin([1])) // 1
