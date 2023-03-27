링크: [https://www.acmicpc.net/problem/3109](https://www.acmicpc.net/problem/3109)

그래프 이론 그리디 알고리즘 그래프 탐색 깊이 우선 탐색

# 느낀 점

방문여부 체크, 재귀함수의 return

# 문제 읽기

원웅이는 근처 빵집의 가스관에 몰래 파이프를 설치해 훔쳐서 사용

빵집이 있는 곳은 R\*C 격자로 표현할 수 있다 (1 ≤ R ≤ 10,000, 5 ≤ C ≤ 500)

'.'는 빈 칸이고, 'x'는 건물

첫째 열은 근처 빵집의 가스관이고, 마지막 열은 원웅이의 빵집이다.

가스관과 빵집을 연결하는 파이프를 설치하려고 한다

- 빵집과 가스관 사이에는 건물이 있을 수도 있다.
- 건물이 있는 경우에는 파이프를 놓을 수 없다.
- 모든 파이프라인은 첫째 열에서 시작해야 하고, 마지막 열에서 끝나야 한다.
- 각 칸은 오른쪽, 오른쪽 위 대각선, 오른쪽 아래 대각선으로 연결할 수 있고, 각 칸의 중심끼리 연결하는 것이다.
- 가스관과 빵집을 연결하는 파이프라인을 여러 개 설치
- 겹칠 수 없고, 서로 접할 수도 없음
- 각 칸을 지나는 파이프는 하나

원웅이가 설치할 수 있는 가스관과 빵집을 연결하는 파이프라인의 최대 개수

# 1트: 27m: 시간초과

깊이 우선 탐색

(r,c) →

visited = 방문여부 2차원 배열

이동: (r -1, c + 1), (r, c + 1), (r + 1 , c + 1)

시작점

- for( 0 ≤ i < r)
  anwer += dfs(i, 0, 0)

```tsx
dfs(cr, cc, acc)

	if(acc === 1) return acc
	if(visited[cr][cc]) return acc // 방문했으면 종료
	if(cc === c) return 1
	for(nr,nc를 계산)
		return dfs(nr,nc, acc)
```

### 예외처리

만약 탐색했는데 갈 수 도달할 수 없으면 visited를 원상복구하기

# 2트: 50m ✅

시간초과 해결하기

### 예외처리할 필요 없음

Greedy

- 일반 백트래킹처럼 경로 표시 헤제할 필요 없음
  - 성공했을 경우: 현재 경로로 파이프를 설치하여 해당 칸을 차지하게 되기 때문에 막습니다.
  - 실패했을 경우: 현재 경로가 아니라 다른 경로로 이 자리에 와도 똑같이 실패할 것입니다. 그러므로 그냥 막은 상태로 둡니다. 일종 의 DP

[https://www.acmicpc.net/board/view/19046](https://www.acmicpc.net/board/view/19046)

### 재귀 return값

```tsx
// sol1
const dfsVer1 = (cr, cc, acc) => {
  if (cc === c - 1) return 1;

  for (let i = 0; i < 3; i++) {
    // 생략
    if (dfsVer1(nr, nc, acc) === 1) return 1;
  }

  return 0;
};

// sol2
const dfsVer2 = (cr, cc, acc) => {
  if (cc === c - 1) return 1;

  for (let i = 0; i < 3; i++) {
    // 생략
    return dfsVer2(nr, nc, acc);
  }

  return 0;
};
```

dfsVer1은 답을 찾았더라도 전체 loop를 언제나 완료하고

dfsVer2은 답을 찾자마다 loop를 종료하고 답을 반환한다.

dfsVer1에서 3방향 중 하나의 재귀함수가 1을 반환하면 답을 찾았다는 뜻 → 3 방향 중 하나라도 없으면 0을 return하면서 답을 못찼았다는 0을 반환

dfsVer2에서 3방향 중 하나라도 답이 없을 때 더 깊이 들어가서 탐색, 하나라도 답이 있으면 즉각 재귀 종료
