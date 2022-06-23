/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
var search = function(nums, target) {
  if (nums.length === 0) return -1;

  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = parseInt((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return -1;
};

// O(log n)
console.log(search([5], 5)) // 0
console.log(search([], 9)) // -1
console.log(search([2, 5], 5)) // 1
console.log(search([-1,0,3,5,9,12], 9)) // 4
console.log(search([-1,0,1,3,5,9,12], 2)) // -1
