링크: [https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true](https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true)

# 느낀 점

조금 더 고민해서 시간복잡도를 줄였어야하는데 아쉽

1트에서 배열에 삽입할 때 O(n) 걸리는 거 보고 다른 풀이를 생각했어야 하지 않을까 싶음

# 문제 읽기

- leaderboard의 꼭대기로 올라가는 게임
  - 점수가 제일 높은 플레이어는 leaderboard의 1번임
  - 점수가 같은 사람들끼리는 같은 랭크 받음 → 다음 사람은 그 다음 랭크

주어진 점수판(ranked)가 있을 때, 새로운 플레이어가(player)가 각 기록을 점수판에 입력했을 때 랭크 구하기

1 ≤ n ≤ 2 \* 10 ^ 5

1 ≤ m ≤ 2 \* 10 ^ 5

0 ≤ ranked[i] ≤ 10 ^ 9

0 ≤ player[j] ≤ 10 ^ 9

# 1트: 23m ✅

ranked를 선형탐색하면서 중복 숫자 줄이기 O(n)

이분탐색

- player[i] lower_bound로 찾아서 삽입 O(logn)
- 삽입하는데 걸리는 시간복잡도 O(n)

```jsx
function climbingLeaderboard(ranked, player) {
  // Write your code here
  const arr = [];
  for (const rank of ranked) {
    const last = arr[arr.length - 1];
    if (last === rank) continue;
    arr.push(rank);
  }

  const lowerBound = (target) => {
    let s = 0;
    let e = arr.length;
    while (s < e) {
      const mid = Math.floor((s + e) / 2);
      if (arr[mid] > target) {
        s = mid + 1;
      } else {
        e = mid;
      }
    }
    return s;
  };
  const answer = [];
  for (const record of player) {
    const idx = lowerBound(record);
    answer.push(idx + 1);
    arr.splice(idx, 0, record);
  }
  return answer;
}
```

# 2트: 30m ✅

> discussion의 힌트 활용

O(n)으로 해결 가능: start index → last index에서 이동하고 마지막 인덱스에서 시작하면 매번 전체 배열을 검토할 필요가 없음

ranked를 선형탐색하면서 중복 숫자 줄이기 O(n)

- 직접 추가하지 않아도 된다 → player도 내림차순 정렬이기 때문에 직접 삽입하지 않아도 된다. (이후 player 값들은 이전 값보다 무조건 크기 때문에)

```jsx
function climbingLeaderboard(ranked, player) {
  // Write your code here
  const arr = [];
  for (const rank of ranked) {
    const last = arr[arr.length - 1];
    if (last === rank) continue;
    arr.push(rank);
  }

  const answer = [];
  let n = arr.length;
  for (const record of player) {
    while (n > 0 && record >= arr[n - 1]) {
      n--;
    }
    answer.push(n + 1);
  }
  return answer;
}
```
