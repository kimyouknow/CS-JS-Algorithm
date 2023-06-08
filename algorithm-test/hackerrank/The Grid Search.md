링크: [https://www.hackerrank.com/challenges/the-grid-search/problem?isFullScreen=true](https://www.hackerrank.com/challenges/the-grid-search/problem?isFullScreen=true)

# 느낀 점

시간복잡도를 줄일 수 있는 방법은 딱히 없는 듯

# 문제 읽기

숫자 배열이 주어졌을 때, 주어진 패턴이 존재하는지 확인

grid: (R,C)

pattern: (r,c)

- 1 ≤ R, C, r,c ≤ 1,000
- 1 ≤ r < R
- 1 ≤ c < C

# 1트: 25m ✅

완탐?

시간복잡도 안걸리나

R,C이 각각 1,000인데

1 1 … 1

1 1. .. 2

r,c는 999

1, ..1

1… 2

이러면 시간복잡도 최대.

그리드 배열의 첫 요소와 패턴의 첫 요소가 일치할 때 나머지 패턴 비교

- 일치하는 요소의 패턴 인덱스 + 패턴의 길이 > 그리드의 길이 → 탐색하지 않음
- 가로, 세로 둘다

```tsx
function gridSearch(G, P) {
  // Write your code here
  const R = G.length;
  const C = G[0].length;
  const r = P.length;
  const c = P[0].length;

  const check = (i, j) => {
    let res = true;
    for (let x = 0; x < r; x++) {
      for (let y = 0; y < c; y++) {
        if (G[i + x][j + y] !== P[x][y]) {
          res = false;
          break;
        }
      }
    }
    return res;
  };

  let answer = false;
  for (let i = 0; i < R - r + 1; i++) {
    for (let j = 0; j < C - c + 1; j++) {
      if (check(i, j)) {
        answer = true;
        break;
      }
    }
  }
  return answer ? 'YES' : 'NO';
}
```
