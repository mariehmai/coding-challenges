/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
*/
var searchMatrix = function(matrix, target) {
  const rows = matrix.length, cols = matrix[0].length;

  let top = 0, bottom = rows-1;

  while (top <= bottom) {
    const row = parseInt((top + bottom) / 2);

    if (target > matrix[row][matrix[row].length - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bottom = row - 1;
    } else {
      let low = 0, high = matrix[row].length - 1;

      while (low <= high) {
        const mid = parseInt((high + low) / 2);
        if (matrix[row][mid] === target) {
          return true;
        } else if (target > matrix[row][mid]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      return false;
    }
  }

  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
*/
var searchMatrix2 = function(matrix, target) {
  const arr = matrix.flat();

  let low = 0, high = arr.length - 1;

  while (low <= high) {
    const mid = parseInt((low + high) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return false;
};

console.log(searchMatrix([[1],[3],[5]], 1)) // true;
// console.log(searchMatrix([], 3)) // false;
// console.log(searchMatrix([], 3)) // false;
console.log(searchMatrix([[3]], 3)) // true;
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)) // true;
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)) // false;
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 20)) // true;



