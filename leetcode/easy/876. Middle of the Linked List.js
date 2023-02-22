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
var middleNode = function (head) {
  let cur = head;
  let idx = 1;
  let mid = head;
  if (!cur.next) return cur;
  // // sol1
  // while(cur){
  //     cur = cur.next
  //     idx++
  //     if(idx % 2 !== 0) mid = mid.next
  // }
  while (cur && cur.next) {
    cur = cur.next.next;
    mid = mid.next;
  }
  return mid;
};

// read:
// sol1: 12m
// mid idx = Math.floor(n / 2)
// - cur이 두 개 증가할 때,
// mid는 하나 증가하기
// idx = 1, cur의 길이
// idx가 짝수 ->
// idx가 홀수 ->
// cur 1 2 3 4 5 6 7 8 9 10
// mid 1 2 3 4 5 6
