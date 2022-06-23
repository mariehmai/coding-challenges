/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
var search = function(nums, target) {
  let low = 0; high = nums.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (nums[mid] == target) {
      return mid;
    }

    if (nums[low] <= nums[mid]) {
      if (target > nums[mid] || target < nums[low]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (target < nums[mid] || target > nums[high]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
  }

  return -1;
};

console.log(search([6,7,8,10,11,14,0,2,3,4,5], 0)) // 6
console.log(search([0,1,2,3,4,5,6,7], 3)) // 3
console.log(search([4,5,6,7,0,1,2], 3)) // -1
console.log(search([1,3], 3)) // 1
console.log(search([1], 0)) // -1
console.log(search([1], 1)) // 0
