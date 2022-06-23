/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null, curr = head

  while (curr) {
    const nxt = curr.next; //2 //3 //null
    curr.next = prev; //null //1 // 2
    prev = curr; //1 //2 //3
    curr = nxt; //2 //3 //null
  }
  return prev;
};

// head = 1 -> 2 -> 3 -> null



var reverseListRecursive = function(head) {
  if (!head) {
    return null;
  }

  let newHead = head;
  if (head.next != null) {
    newHead = reverseListRecursive(head.next);
    head.next.next = head;
  }
  head.next = null;

  return newHead;
};

console.log(reverseList([1,2,3,4,5])) // [5,4,3,2,1]
console.log(reverseListRecursive([1,2,3,4,5])) // [5,4,3,2,1]
