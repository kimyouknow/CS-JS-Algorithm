/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.length;
  // 투포인터
  const answer = Array(n);
  let l = 0;
  let r = n - 1;
  for (let i = n - 1; i >= 0; i--) {
    const lsq = nums[l] ** 2;
    const rsq = nums[r] ** 2;
    if (lsq > rsq) {
      answer[i] = lsq;
      l++;
    } else {
      answer[i] = rsq;
      r--;
    }
  }
  // // 자바스크립트 메서드 활용
  // const answer = nums.map(v => v ** 2).sort((a,b) => a-b);
  return answer;
};

// read
// acs sorted 배열의 각 요소를 제곱한 다음 정렬해서 반환하기

// 1트: 12m
// 1) 제곱 -> 정렬
// Time Complexity: O(n) + O(logn)
// 2) : 투포인터
// 정렬되어 있음
// ansewr = nums.length 길이의 빈배열
// l = 0, r = nums.length - 1
// nums[l]과 nums[r]을 각각 제곱해서 비교
// 큰 건 answer의 끝 인덱스부터 삽입
// l이 더 크면 l++, r이 더 크면 r--
// Time Complexity: O(n)
