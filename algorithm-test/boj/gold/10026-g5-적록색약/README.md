링크: [https://www.acmicpc.net/problem/10026](https://www.acmicpc.net/problem/10026)

[백준] 10026-g5-적록색약 그래프 이론 그래프 탐색 너비 우선 탐색 깊이 우선 탐색

# 느낀 점

적록색맹인 경우와 적록색맹이 아닌 경우를 각각 탐색했다. 처음 문제를 풀 때, 시간초과 및 메모리 초과를 걱정했지만 각각의 경우를 따로 탐색해도 충분히 문제는 풀 수 있을 것 같았다. (통과되는 코드가 좋은 코드니까?)

1트를 통과하고 2트에서 좀 더 괜찮은 코드를 짤 수 없을까 고민했는데 1트에 비해 시간 및 메모리 측면에서 크게 나아진 부분은 없다.

# 문제 읽기

N×N인 그리드의 각 칸에 R(빨강), G(초록), B(파랑) (1 ≤ N ≤ 100)

구역은 같은 색으로 이루어져 있다.

또, 같은 색상이 상하좌우로 인접해 있는 경우에 두 글자는 같은 구역에 속한다. (색상의 차이를 거의 느끼지 못하는 경우도 같은 색상이라 한다)

적록색약인 사람이 봤을 때와 아닌 사람이 봤을 때 구역의 수를 구하는 프로그램

# 1트: 30m ✅

DFS로 풀기

- 한 번에 두 가지 경우를 탐색하기: ( 4 ^ n )
  - 이중 for문을 한번만 실행하고, 방문배열을 두 개로 두기
- 두 가지 경우를 각각 탐색하기: ( 4 ^ n )\* 2
  - 이중 for문을 두 번 실행하고, 방문배열 한 개로 두기

### 적록색약이 아닌 사람이 봤을 때: 4 ^ n

- visited : n \* n의 bool 배열 - 방문여부 체크

dfs(target,r,c)

if(map[r][c] ≠ target) return

for(상하좌우)

nr, nc 갱신

if( 0 < nr, nc, n ≥ nr, nc) continue

if(visited[nr][nc]) continue

dfs(map[nr][nc], nr, nc)

for( 0 ≤ r,c ≤ n)

dfs(map[r][c], r,c)

answer++

### 적록색약인 사람이 봤을 때: 4 ^ n

dfs(target,r,c)

if(target === “B”)

if (map[r][c] ≠ “B” ) return

if(target === “R” || target === “G”)

if(target === “B) return

for(상하좌우)

nr, nc 갱신

if( 0 < nr, nc, n ≥ nr, nc) continue

if(visited[nr][nc]) continue

dfs(map[nr][nc], nr, nc)

for( 0 ≤ r,c ≤ n)

dfs(map[r][c], r,c)

answer++

# 2트: 10m

한 가지 탐색 솔루션을 활용

- 적록색약인 경우 → R을 G로 바꾸기
