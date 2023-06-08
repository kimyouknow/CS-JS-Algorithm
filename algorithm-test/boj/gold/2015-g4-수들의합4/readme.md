링크: [https://www.acmicpc.net/problem/2015](https://www.acmicpc.net/problem/2015)

[백준] 2015-g4-수들의합4 누적 합

# 느낀 점

다른 사람들이 수학공식을 활용해서 푼 풀이를 참고했다.

# 문제 읽기

배열 A: N개의 정수가 저장되어 있음

A의 부분합: 1 ≤ i ≤ j ≤ N인 정수 i와 j에 대해 A[i]부터 A[j]까지의 합

N과 A[1], A[2], ..., A[N]이 주어졌을 때,

이러한 N×(N+1)/2개의 부분합 중 합이 K인 것이 몇 개나 있는지를 구하는 프로그램

(1 ≤ N ≤ 200,000, |K| ≤ 2,000,000,000)

# 1트: 38m

0 ≤ i ≤ j < N

### 전체 탐색: 이중for문

시간복잡도: O(N ^ 2)

```markdown
arr[i] = 0
0 <= i < n (왼쪽)
acc
i <= j < n (오른쪽)
acc += arr[j]
```

### 해시

for문돌면서 객체만들기

key: A[i], value: 등장횟수

key값으로만 부분합을 구하고 value값만큼 곱하기

# 2트: ✅ 45m: 다른 사람풀이 참고

전부탐색해야하나? ⇒

prefixSum[i] = arr[0] ~ arr[i]까지의 합

obj[i] = i가 등장한 횟수

i ~ j까지의 합

- prefixSum[i] = k
- prefixSum[i] - prefixSum[j] = k
  - 현재까지의 누적합에서 k를 뺀 값이 obj에 있다면 answer에 obj[prefixSum[j] - k]만큼 더하기
  -
