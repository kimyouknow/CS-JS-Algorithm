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
var reverseList = function (head) {
  let current = new ListNode();
  current = current.next;
  while (head) {
    const prev = current;
    current = new ListNode(head.val);
    current.next = prev;
    head = head.next;
  }

  return current;
};

// 1트: 13m
// (val, next)
// head (1, 2) : prev = cur(0,null), cur(1, 0), cur(1,prev) -> head(2,3)
// head(2,3) : prev = cur(1, prev), cur(2,0), cur(2, prev)
