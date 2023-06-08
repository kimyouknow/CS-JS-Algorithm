/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let answer = new ListNode();
  const result = answer;
  // 1트
  // while(list1 || list2){
  //     if(list1 && list2){
  //         const cur1 = list1.val
  //         const cur2 = list2.val
  //         if(cur1 >= cur2){
  //             answer.next = new ListNode(cur2)
  //             answer = answer.next
  //             list2 = list2.next
  //         } else {
  //             answer.next = new ListNode(cur1)
  //             answer = answer.next
  //             list1 = list1.next
  //         }
  //     } else if(!list1){
  //         answer.next = new ListNode(list2.val)
  //         answer = answer.next
  //         list2 = list2.next
  //     } else{
  //         // !list2
  //         answer.next = new ListNode(list1.val)
  //         answer = answer.next
  //         list1 = list1.next
  //     }
  // }

  // 2트
  while (list1 && list2) {
    const cur1 = list1.val;
    const cur2 = list2.val;
    if (cur1 >= cur2) {
      answer.next = new ListNode(cur2);
      answer = answer.next;
      list2 = list2.next;
    } else {
      answer.next = new ListNode(cur1);
      answer = answer.next;
      list1 = list1.next;
    }
  }
  let rest = list1 || list2;
  while (rest) {
    answer.next = new ListNode(rest.val);
    answer = answer.next;
    rest = rest.next;
  }
  return result.next;
};

// 1트 : 15m
// 정렬된 결과를 반환해야 한다
// - list1이 먼저끝났는데 남은 list2가 모두 list1의 마지막 요소 보다 작을 수 가 있다.
// list1.val / list2.val
// 둘다 있으면 비교해서 작은 값을 연결, 큰 값은 보류
// 작은 값을 가져온 연결리스트만 인덱스 증가
// 같으면 둘다 증가
