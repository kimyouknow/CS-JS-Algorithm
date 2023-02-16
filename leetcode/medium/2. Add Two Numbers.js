/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// /**
//  * 1트: ✅ 30m
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
//     let current = new ListNode()
//     let result = current
//     let sum = 0
//      while(l1 || l2){
//         const l1val = l1 ? l1.val : 0
//         const l2val = l2 ? l2.val : 0
//         sum += l1val + l2val
//         current.next = new ListNode(sum % 10);
//         current = current.next
//         sum = sum > 9 ? 1 : 0;
//         l1 = l1 ? l1.next : null;
//         l2 = l2 ? l2.next : null;
//     }
//     if(sum){
//         current.next = new ListNode(sum)
//     }
//     return result.next
// };

/**
 * 2트: ✅ 10m
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let current = new ListNode();
  let result = current;
  let sum = 0;

  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    current.next = new ListNode(sum % 10);
    current = current.next;

    sum = sum > 9 ? 1 : 0;
  }

  if (sum) {
    current.next = new ListNode(sum);
  }

  return result.next;
};

// solution

// 1트: 시간:  n + n => 2n
// a: 연결리스트
// l1  l2 -> 각각의 head부터 더해서 a라는 새로운 연결리스트 생성
// a를  출력

// 문제 읽기
// 음이 아닌 정수 두 개,  비어 있지 않은 연결 리스트 두 개(l1, l2)
// 숫자는 역순으로 저장, 각 노드에는 숫자가 하나씩 포함됩니다.
// 두 숫자를 더하고 합계를 연결된 목록으로 반환합니다.
// 숫자 0 자체를 제외하고는 두 숫자에 앞 0이 포함되어 있지 않다고 가정
// 0 <= Node.val <= 9
// [1, 100]
// l1: 243, l2: 564 -> 342 + 465 -> 807
// 245, 5649 -> 542 + 9465 ->
