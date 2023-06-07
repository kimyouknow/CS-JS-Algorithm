링크: [https://www.acmicpc.net/problem/1987](https://www.acmicpc.net/problem/1987)

[백준] 1987-g4-알파벳 깊이 우선 탐색 백트래킹

# 느낀 점

시간초과를 해결하는데 시간이 오래걸렸다.

set이 아닌 길이가 26인 배열(알파벳)을 만들어서 방문여부 확인

# 문제 읽기

세로 R칸, 가로 C칸 (1 ≤ R,C ≤ 20)

- 대문자 알파벳
- 말 위치 : 좌측 상단(1,1)

말 이동

- 인접 상하좌우
- 새로 이동한 칸에 적혀 있는 알파벳은 지금까지 지나온 모든 칸에 적혀 있는 알파벳과 달라야 함
- = 같은 알파벳이 적힌 칸을 두 번 지날 수 없음

좌측 상단부터 시작해서 말이 최대한 몇 칸을 지날 수 있는지 구하는 프로그램

## 1트 : DFS 백트래킹 : 44m - 시간초과

bfs가 아닌 dfs

백트래킹

방문처리 수정

- dfs마다 새롭게 생성하지 않고 dfs호출 후 다시 해당 값만 초기화

중복체크 처리

- dfs마다 새롭게 생성하지 않고 dfs호출 후 다시 해당 값만 초기화

```tsx
visited[nr][nc] = true;
set.add(board[nr][nc]);
dfs(nr, nc);
visited[nr][nc] = false;
set.delete(board[nr][nc]);
```

## 2트: 30m 통과 ✅

visited와 set을 따로 둘 필요 없이 알파벳 배열(길이가 26인)을 둬서 한 번에 방문처리 가능하다.

```tsx
const toASCII = (w) => w.charCodeAt() - 65;
const alphabet = Array.from({ length: 26 }, () => false);

alphabet[toASCII(board[nr][nc])] = true;
dfs(nr, nc, idx + 1);
alphabet[toASCII(board[nr][nc])] = false;
```
