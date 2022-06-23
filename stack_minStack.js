
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val)

  const newMin = this.minStack.length === 0 ? val : Math.min(val, this.minStack[this.minStack.length-1]);
  this.minStack.push(this.stack.length === 0 ? val : newMin);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack() // [], []
console.log(obj)
obj.push(3) // [3]
obj.push(2) // [3, 2]
obj.push(-1) // [3, 2, -1]
obj.pop() // null [3, 2]
var param_3 = obj.top() // 2 [3, 2]
var param_4 = obj.getMin() // 2 [3, 2]

console.log(obj)
console.log(param_3)
console.log(param_4)
