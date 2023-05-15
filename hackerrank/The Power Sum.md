링크: [https://www.hackerrank.com/challenges/the-power-sum/problem?isFullScreen=true](https://www.hackerrank.com/challenges/the-power-sum/problem?isFullScreen=true)

# 느낀 점

# 문제 읽기

X를 찾을 수 있는 방법의 수

- i ^ N의 합으로 표현 가능해야함
- unique한 자연수의 거듭제곱

1 ≤ x ≤ 1000

2 ≤ N ≤ 10

# 1트: 20m ✅

제곱근? Math.pow(x, 1/n)

완탐?

- 제곱수의 합이라서 케이스가 그렇게 많지 않을듯?
- 최대 수 : 1,000 ^ 1/2 → 30 정도
  - 1 ~ 30까지 의 수 : k ⇒ k ^ 2의 합으로 1,000을 만드는 경우

for( X의 n 제곱근부터 시작 ≥ i > 1)

- 큰 수부터 시작해서 경우의 수 줄이기

DFS

- 방문했으면 넘어가기

```jsx
function powerSum(X, N) {
  // Write your code here
  let answer = 0;
  const root = Math.floor(Math.pow(X, 1 / N));

  const visited = Array.from({ length: root + 1 }, () => false);

  const dfs = (i, acc) => {
    if (visited[i]) return;
    if (acc > X) return;
    if (acc === X) {
      answer++;
      return;
    }

    for (let k = i; k > 0; k--) {
      visited[k] = true;
      dfs(k - 1, acc + k ** N);
      visited[k] = false;
    }
  };
  dfs(root, 0);

  return answer;
}
```

# 2트:

시간줄이기: DP

참고: [https://steady-coding.tistory.com/300](https://steady-coding.tistory.com/300)
