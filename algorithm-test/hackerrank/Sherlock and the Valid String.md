링크: [Sherlock and the Valid StringMediumProblem Solving (Basic)Max Score: 35Success Rate: 65.79%\*\*Remove some characters from the string such that the new string's characters have the same frequency.](https://www.hackerrank.com/challenges/sherlock-and-valid-string?isFullScreen=true)

# 느낀 점

처음 시도 일 때는 object로 {[문자]: 등장횟수} 형식으로 개수를 파악하고 등장 횟수가 같은 값들이 2개 일 때만 조건문으로 처리할까 생각했다.

조건문이 복잡할 것 같아 소문자 배열을 만들어 선형탐색으로 해결했다.

# 문제 읽기

주어진 문자열의 모든 문자가 동일한 횟수로 나타나는지 확인

문자열 중 하나의 문자 지웠을 때 나머지가 동일한 횟수로 나타나는지 확인

1 ≤ s ≤ 10 ^ 5

# 1트: 51m ✅

각 문자 별로 등장 횟수가 파악

- 아스키코드로 변환해서 파악하기
- 길이가 26인 배열

배열을 선형탐색

- arr[i] === 0 ⇒ 패스
- flag 기준 값이 없으면 설정
- | 기준 값 - cur| ≥ 2 ⇒ false
- | 기준 값 - cur| ≥ 1
  - 한 번 뺏으면 ⇒ false
  - 이번이 처음이면 패스

```tsx
function isValid(s) {
  // Write your code here
  const arr = Array.from({ length: 26 }, () => 0);
  for (let i = 0; i < s.length; i++) {
    const idx = s[i].charCodeAt() - 97;
    arr[idx]++;
  }
  let flag = -1;
  let answer = true;
  let hasBeen = false;
  for (let i = 0; i < 26; i++) {
    const cur = arr[i];
    if (cur === 0) continue;
    if (flag === -1) {
      flag = cur;
      continue;
    }
    // if(Math.abs(cur - flag) >= 2){
    //    answer = false
    //    break;
    // }
    // if(Math.abs(cur - flag) === 1){
    if (Math.abs(cur - flag) >= 2) {
      if (hasBeen) {
        answer = false;
        break;
      }
      hasBeen = true;
    }
  }
  return answer ? 'YES' : 'NO';
}
```

테스트 케이스 7,13 통과 못함

7,13 ⇒ (Math.abs(cur - flag) >= 2)일 때 무조건 false가 아님

(Math.abs(cur - flag) === 1)과 같이 hasBeen을 사용해야함

# 2트: 다른 사람 풀이 참고 ✅

result가 두 개 일 때 조건문이 복잡한 풀이

```tsx
function isValid(s) {
  let obj = s.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const result = [...new Set(Object.values(obj))].sort((a, b) => b - a);

  if (result.length > 2) return 'NO';
  if (result.length === 2) {
    let count0 = 0;
    let count1 = 0;
    const valueArr = Object.values(obj);
    for (let i = 0; i < valueArr.length; i++) {
      if (valueArr[i] === result[0]) count0++;
      if (valueArr[i] === result[1]) count1++;
    }
    if (result[0] - result[1] === 1 && count0 === 1) return 'YES';
    if (result[1] === 1 && count1 === 1) return 'YES';
    else return 'NO';
  }
  return 'YES';
}
```
