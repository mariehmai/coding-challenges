const brackets = new Map()
brackets.set("]", "[")
brackets.set("}", "{")
brackets.set(")", "(")

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];

    for (const bracket of s) {
      if (brackets.has(bracket)) {
        if (stack.length > 0 && stack[stack.length -1] === brackets.get(bracket)) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(bracket)
      }
    }

    return stack.length === 0;
};

console.log(isValid("()")) // true
console.log(isValid("(){}[]")) // true
console.log(isValid("(]")) // false
console.log(isValid("{[]}")) // true
console.log(isValid("[({(())}[()])]")) // true
