[https://www.acmicpc.net/problem/7662](https://www.acmicpc.net/problem/7662)

# 느낀 점

이진검색트리를 만들어서 풀면 될 것 같았는데 이진검색트리를 js구현하지 못했다.
우선 이분탐색과 배열 혹은 우선순위 큐를 두 개 만들어서 문제를 풀려고 했는데 메모리 초과가 발생하여 통과하지 못했다.
파이썬으로 품

# 문제 읽기

우선순위 큐:

- 삽입
- 삭제
  - 연산 명령에 따라 우선순위가 가장 높은 데이터 또는 가장 낮은 데이터 중 하나를 삭제

정수만 저장하는 이중 우선순위 큐 Q

Q에 저장된 각 정수의 값 자체를 우선순위

입력은 T개의 테스트 데이터

‘I n’은 정수 n을 Q에 삽입하는 연산을 의미한다.

- 동일한 정수가 삽입 가능

‘D 1’는 Q에서 최댓값을 삭제하는 연산

‘D -1’는 Q 에서 최솟값을 삭제하는 연산을 의미

- 최댓값(최솟값)을 삭제하는 연산에서 최댓값(최솟값)이 둘 이상인 경우, 하나만 삭제됨

# 1트 (35) - 메모리 초과

큐가 아니라 정렬된 숫자들

이분 탐색 트리를 활용하기

삽입

- lower_bound를 이용해서 배열에 Target(넣고자하는 수)이 최초로 등장한 위치, target이 없다면 target보다 큰 수가 최초로 등장한 위치를 찾기
- 찾은 위치에 splice를 활용해 삽입 : O(log N) + O(N)

찾으려는 수 이상의 값 처음으로 나오는 위치

```jsx
const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../7662-g4/1.txt'))
  .toString()
  .trim()
  .split('\n');

const lowerBound = (target, arr) => {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

const solution = (commands) => {
  const priorityArr = [];
  commands.forEach((command) => {
    const [order, value] = command.split(' ');
    const nValue = Number(value);
    if (order === 'I') {
      const insertIdx = lowerBound(nValue, priorityArr);
      priorityArr.splice(insertIdx, 0, value);
    }
    if (order === 'D') {
      if (nValue === -1) {
        priorityArr.shift();
      }
      if (nValue === 1) {
        priorityArr.pop();
      }
    }
  });
  if (priorityArr.length === 0) {
    return 'EMPTY';
  }
  const max = priorityArr[priorityArr.length - 1];
  const min = priorityArr[0];
  return `${max} ${min}`;
};

const beforeSolution = (rawInputs) => {
  const [t, ...arr] = rawInputs;
  let T = Number(t);
  let inputs = arr;
  let answer = [];
  while (T > 0) {
    const [n, ...commands] = inputs;
    const N = Number(n);
    const res = solution(commands.slice(0, N));
    answer.push(res);
    T--;
    inputs = commands.slice(N);
  }
  return answer.join('\n');
};

console.log(beforeSolution(rawInputs));

module.exports = { solution };
```

# 2트: 우선순위 큐: 메모리 초과

최소 우선순위 큐와 최대 우선순위 큐 두 개를 만들기

겹치는 값에 대해서는 hash map(자바스크립트에서는 단순 obj)를 최소, 최대 각각 만들어서 방문 처리해주기

- 넣을 때마다 해당 키의 값을 +1
- 뺄 때마다 해당 키의 값을 -1

마지막에 최소, 최대를 찾을 때

- 최대/최소 큐가 빌 때까지 while문을 돌리면서
  - 큐에서 뺀 값을 키로 하는 값이 0이 아니면 while문 계속 돌리기
  - 0이면 while문 종료

# 3트: 이진탐색트리

cpp의 stl을 활용한 풀이가 가장 깔끔하고 이해하기 쉬웠다. 하지만 cpp을 할 줄 몰라 패스

# 4트: 파이썬 ✅

파이썬의 내장 모듈로 해결
