/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let left = 0;
  let maxSize = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    maxSize = Math.max(maxSize, i - left + 1);
  }
  return maxSize;
};

// 문제 읽기
// s: string, 0 <= s.length < = 5 * 10 ^ 4, English letters, digits, symbols and spaces.
// s 중에서 반복되지 않고 가장 길게 연속된 문자열 찾기

// 예시 (현재 / 답)
//  a / a  -> ab / ab -> abc / abc -> abca / abcab -> abcab -> abcabc / abc -> abcabcb / abcb -> abcabcbb -> abc

// 1트: 48m -> 조건문을 어떻게 짜야할지 모르겠음. 너무 복잡함
// 총 길이가 10 ^ 4
// 그리디하게 앞에서 탐색하면서 조건문으로 풀기
// k 번째 한 자리 비교 : k-1이랑만 비교
// k 번째 두 자리 비교: k-1, k-2랑 비교
// k 번째 l(l <= k) 자리 비교: k-1, k-2, ... k - l

// answer = s[0], s = 0, e = 0, n = s.length
// for( 1 <= e < n)
// 각 단계마다 비교대상을 0번째 인덱스까지 탐색하면서 같은 문자가 있는지 확인: 같은 문자 있으면 s에 idx저장
// 각 단계에서 e가 가리키는 대상과 answer[answer.length-1]이 같으면 : s = e,
// 각 단계에서 e가 가리키는 대상과 answer[answer.length-1]이 다르면 :

// 2트: 30m
// n = s.length라고 할 때, s[0,n]의 값은 s[0,n-1]에서 한자리만 비교하면 되지 않나? -> n번째 요소가 들어와서 새로운 반복을 찾을 수 있어서 어려울 듯
// abcab까지가 반복없는 최장 substring이라도 다음 차례에서 c가 들오면 abc로 바뀐다.
// bruth force로 풀면 조건문이 많아지고 처음에 했던 생각대로 dp로 풀기
// n[k] = n[k-1]에서 s[k]만 비교하면 구해짐
// n[k]는
// 시작과 끝이 있으니까 이차원 배열

// 3트
// 먼저 확인한 문자열들을 subStr 변수에 담아
// 중복되는 알파벳이 있는지 체크하여 subStr을 재할당하고
// 연속되는 문자열의 길이를 새로 확인하는 문자열의 길이와 지속적으로 비교하여 더 큰 값을 maxLength 변수에 할당하고
// 문자열 순회를 마친 후 maxLength반환

// 4트: 다른 풀이 참고 ✅

// set과 슬라이딩 윈도우 활용

// set에 문자가 없으면,
// - 해당 문자를 set에 추가
// - 최대 길이 계산
// set에 문자가 있으면
// - 슬라이딩 이동
// - 이전에 이미 존재하는 앞에 있는 모든 문자 제거
