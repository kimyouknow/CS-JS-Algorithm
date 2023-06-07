/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // // sol1: Object
  // const obj = s.split("").reduce((acc,cur) => {
  //     if(acc[cur]){
  //         acc[cur]++
  //     } else{
  //         acc[cur] = 1
  //     }
  //     return acc
  // }, {})
  // let answer = 0
  // let isOdd = 0
  // Object.entries(obj).map(([key, value]) => {
  //     if(value % 2 !== 0){
  //         isOdd = 1
  //     }
  //     answer += Math.floor(value / 2)
  // })
  // return answer * 2 + isOdd
  // sol2: Set
  const set = new Set();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);
    } else {
      set.delete(s[i]);
      count += 2;
    }
  }
  return count + (set.size > 0 ? 1 : 0);
};

//read
// 주어진 문자열로 만들 수 있는 the length of the longest palindrome

// sol: 7m
// Time: O(n) + O(n)
// palindrome : 좌우반전
// - 최소 2개
// - 홀: 가운데 1개
// - 짝: 가운데 2개

// Map 구조 활용
// - key: 문자
// - value: 등장 횟수

// -> 각 value를 2로 나눈 몫의 합
// -> 홀수가 여러 개 있으면 하나의 나머지만 사용

// sol2: 10m
// Time: O(n)

// Set구조 활용
// set에 [value]가 있으면
//      ans += 2
//      set에서 value제거
// set에 [value]가 없으면
//      set에서 value추가
// for문이후 set의 잔여가 있음녀 무조건 홀수개 있는 문자
