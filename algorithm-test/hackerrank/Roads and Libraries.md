링크: [https://www.hackerrank.com/challenges/torque-and-development/problem?isFullScreen=true](https://www.hackerrank.com/challenges/torque-and-development/problem?isFullScreen=true)

# 느낀 점

처음 문제를 풀 때, “도로 설치 비용 ≥ 도서관 설치 비용 → 각 도시에 도서관 설치” 라는 생각을 하지 못해 union find로 접근했다. 단순하게 그룹을 지어 놓고, 그룹마다 도서관 1개 씩 설치하고 도로만 최소로 연결하면 답을 구할 수 있다고 생각했다.

하지만 “도로 설치 비용 ≥ 도서관 설치 비용 → 각 도시에 도서관 설치” 조건을 만족하는 풀이를 해야해서 각 그룹이 몇 개의 도로로 연결되어 있는지 파악해야했고, 도로 설치 비용과 도서관 설치 비용을 비교하는 if문을 구성하는데 시간이 꽤 걸렸다.

discussion에서 dfs로 풀 수 있다는 힌트를 보고 풀었다. 생각해보니 union find의 getParent도 dfs처럼 탐색하는데 dfs풀이를 못 떠올린게 아쉽다.

# 문제 읽기

cities[c1,c2]: c1과 c2 사이에 도로를 놓을 수 있음

c_lib : 도서관 설치 비용

c_road : 도로 설치 비용

도서관 설치 비용과 도로 설치 비용이 최소가 되게하고 + 모든 도시들 도서관에 접근 가능하도록 도서관을 설치하기

# 1트: 63m - **Union-Find** ✅

최대한 많이

`union find` → 그룹을 나눌 수 있음 → 최소한의 도서관 설치 개수 파악 가능

하지만 도로를 필요 이상으로 설치할 수도 있음

도로 설치하기

- union find하다가 getParent(c1)과 getParent(c2)의 값이 같으면 도로 설치하지 않기

도로 설치한 비용과 비교 각 도시에 건설하는 거랑 비교

- 도로 설치 비용 > 도서관 설치 비용

```jsx
/*
 * Complete the 'roadsAndLibraries' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c_lib
 *  3. INTEGER c_road
 *  4. 2D_INTEGER_ARRAY cities
 */

function roadsAndLibraries(n, c_lib, c_road, cities) {
  // Write your code here
  let totalRoad = 0;
  let totalLib = 0;
  const obj = {}; // 도로를 설치한 도시들을 찾기 위한 obj
  let arr = Array.from({ length: n + 1 }, (_, i) => i);

  const getParent = (x) => {
    if (arr[x] === x) return x;
    else return getParent(arr[x]);
  };

  const union = (x, y) => {
    const px = getParent(x);
    const py = getParent(y);

    if (px === py) {
      arr[py] = px;
    } else if (px < py) {
      arr[py] = px;
      totalRoad++;
      obj[py] === undefined ? (obj[py] = 1) : obj[py]++;
    } else {
      arr[px] = py;
      totalRoad++;
      obj[px] === undefined ? (obj[px] = 1) : obj[px]++;
    }
  };
  cities.forEach(([c1, c2]) => {
    union(c1, c2);
  });

  const parsed = arr.slice(1).map((v) => getParent(v));

  // 그룹으로 묶긴 도시들에 총 몇개의 도로가 설치되었는지
  const installedRoad = Object.entries(obj).reduce((acc, [key, value]) => {
    const p = getParent(key);
    acc[p] === undefined ? (acc[p] = 1) : acc[p]++;
    return acc;
  }, {});

  // 그룹이 몇 개의 도시로 이뤄졌는지
  const group = parsed.reduce((acc, cur) => {
    if (cur === -1 || cur === undefined) return acc;
    acc[cur] === undefined ? (acc[cur] = 1) : acc[cur]++;
    return acc;
  }, {});

  let answer = 0;
  Object.entries(group).forEach(([key, value]) => {
    if (installedRoad[key] === undefined) {
      // 속한 그룹이 없다면 도서관 설치하기
      answer += c_lib;
    } else if (c_lib * value < c_road * installedRoad[key] + c_lib) {
      // 도서관 설치 비용과 도로 설치 비용 비교
      answer += c_lib * value;
    } else {
      answer += c_road * installedRoad[key] + c_lib;
    }
  });
  return answer;
}
```

# 2트 : DFS: 44m ✅

도로 설치 비용 ≥ 도서관 설치 비용 → 각 도시에 도서관 설치

도로 설치 비용 < 도서관 설치 비용 →

- DFS로 연결된 거 다 찾고 도서관 설치
- 도시의 수만큼 2차원 리스트를 만들기 ⇒ 이어질 수 있는 최대의 도로 길이 구하기
- 총 비용: 도로길이*도로비용 + (도시의 수 - 도로길이)*도서관 비용

```jsx
function roadsAndLibraries(n, c_lib, c_road, cities) {
  // Write your code here
  if (c_lib < c_road) {
    return c_lib * n;
  }
  if (cities.length === 0) {
    return c_lib * n;
  }

  const matrix = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => false);

  for (const [c1, c2] of cities) {
    matrix[c1].push(c2);
    matrix[c2].push(c1);
  }

  const dfs = (i) => {
    visited[i] = true;
    let cost = 0;
    for (const v of matrix[i]) {
      if (visited[v]) continue;
      cost++; // 본인 연결
      cost += dfs(v); // 추가연결
    }
    return cost;
  };

  let road = 0;
  for (let i = 1; i < n + 1; i++) {
    if (visited[i]) continue;
    road += dfs(i);
  }
  const answer = road * c_road + (n - road) * c_lib;

  return answer;
}
```
