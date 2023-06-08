링크: [https://www.hackerrank.com/challenges/gridland-metro/problem?isFullScreen=true](https://www.hackerrank.com/challenges/gridland-metro/problem?isFullScreen=true)

# 느낀 점

같은 로직인데 js은 통과가 안되고 파이썬은 통과 되는 이유가 뭐지…

# 문제 읽기

n \* m

기차: 항상 가로 직선으로 움직임

- start(r, c1) → end(r, c2)
- A train track may overlap other train tracks within the same row.

가로등 설치

- 기차 트랙이 없는 곳에 설치 가능

1 ≤ n,m ≤ 10 ^ 9

0 ≤ k ≤ 1000

# 1트: 50m

track [ r, c1, c2]

r을 키 값으로 기차트랙의 길이 누적

- 간격을 두고 설치됨: n = 10일 때 [1, 1,3], [1, 5, 7] 이런식으로 나올 수 도 있음,
- 겹치게 설치 됨: n = 10일 때 [1, 1, 5], [1, 4, 7] 이런식으로 나올 수 도 있음,

n이 10 ^ 9까지 커칠 수 있으니까 효율적인 방법을 생각해야 함

-

# 2트: 50m

```python
def gridlandMetro(n, m, k, track):
    # Write your code here
    trainTrack = {}
    for r, c1, c2 in track:
        curRow = trainTrack.get(r,[])
        for rRange in curRow:
            if c1 <= rRange[1] and c2 >= rRange[0]:
                rRange[0] = min(rRange[0], c1)
                rRange[1] = max(rRange[1], c2)
                break

        else:
            curRow.append([c1,c2])

        trainTrack[r] = curRow

    answer = n * m
    for r, curRow in trainTrack.items():
        for c1, c2 in curRow:
            answer += c1-c2-1

    return answer
```

```jsx
function gridlandMetro(n, m, k, track) {
  // Write your code here

  let answer = n * m;
  const trainTrack = {};
  for (const [r, c1, c2] of track) {
    let flag = true;
    const curRow = trainTrack[r] || [];
    for (let i = 0; i < curRow.length; i++) {
      const row = curRow[i];
      // overlap
      if (c1 <= row[1] && c2 >= row[0]) {
        row[0] = Math.min(row[0], c1);
        row[1] = Math.max(row[1], c2);
        flag = false;
        break;
      }
    }
    if (flag) {
      curRow.push([c1, c2]);
    }
    trainTrack[r] = curRow;
  }

  let acc = 0;
  for (const rows of Object.values(trainTrack)) {
    for (const [c1, c2] of rows) {
      // acc += (c2 - c1 + 1)
      answer += c1 - c2 - 1;
    }
  }
  // return answer - acc < 0 ? 0 : answer - acc
  return answer < 0 ? 0 : answer;
}
```
