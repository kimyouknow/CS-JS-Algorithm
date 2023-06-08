링크: https://www.hackerrank.com/challenges/hackerland-radio-transmitters/problem?isFullScreen=true

# 느낀 점

# 문제 읽기

1차원 배열

라디오 설치,

- 지원 범위가 있음

최소한의 라디오를 설치해서 모든 집에 도달할 수 있게하기

1 ≤ n,k ≤ 10 ^ 5

1 ≤ x[i] ≤ 10 ^ 5

# 1트: 40m

정렬(logn)

a설치횟수(ans)를 기준으로 lowbound?

k = 2

2 4 6 7 9 11 12

각 자리마다 설치할지말지 2가지 조건으로 완탐 → (2 ^ n)

정렬된 배열을 돌면서 각 노드의 떨어진 간격 확인

k = 2, x = [2 4 6 7 9 11 12 ] ⇒ v 2 v 2 v 1 v 2 v 1

k = 10, x = [2 40 66 77 99 119 129 ] ⇒ v 38 v 26 v 11 v 20 v 11

k = 5, x = [2 4 6 7 9 11 12 ] ⇒ v 2 v 2 v 1 v 2 v 1

범위가 k인 라디오를 ans개 설치했을 때 모든 집에 도달할 수 있는지 확인하는 함수

- ans를 적절하게 배치하기
  - 선형탐색
    - 정렬배열[i]일 때, 정렬배열[i+1] - 정렬배열[i]가 k보다 작을 때
    - 정렬배열[i]일 때, 정렬배열[i+1] - 정렬배열[i]가 k보다 클 때

# 2트

그리디로 선형 탐색하면서 확인하기

범위 내에서 가장 오른쪽 집에 라디오 설치하기

정렬 (logn)

k = 2, x = [2 4 6 7 9 11 12 ]

```tsx
function hackerlandRadioTransmitters(x, k) {
  // Write your code here
  const arr = x.sort((a, b) => a - b);
  const n = arr.length;
  let answer = 0;
  let i = 0;
  while (i < n) {
    let radio = arr[i] + k;
    while (i < n && arr[i] <= radio) i++; // 범위를 포함하는 가장 오른쪽 집
    i--; // ! 인덱스 때문에 하나 빼야 함;
    radio = arr[i] + k; // 다음 라디오 위치
    while (i < n && arr[i] <= radio) i++;
    answer++;
  }
  return answer;
}
```
