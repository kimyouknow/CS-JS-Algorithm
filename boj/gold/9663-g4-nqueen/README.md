링크: [https://www.acmicpc.net/problem/9663](https://www.acmicpc.net/problem/9663)

[백준] 96630-g4-nqueen

# 느낀 점

# 문제 읽기

크기가 N × N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제

N이 주어졌을 때, 퀸을 놓는 방법의 수를 구하는 프로그램

(1 ≤ N < 15)

# 1트: 36m 시간초과

완전탐색

visited = n \*n bool

dfs(x,y,idx)

if(idx === n) answer ++;

return

// 층은 무조건 증가, 열은 다시 0부터 탐색

for( let i = x, i < n; i++)

for( let j = 0, j < n; j++)

if(visited[i][j]) continue; // x === i, y === i 여기서 걸림

// 퀸 조건

visited[i][j] = true

dfs(i,j,idx+1)

visited[i][j] = false

퀸 조건 (x,y)

- 가로에 야무도 없어야함
  - for(let i =0; i< n; i++)
    if(visiited[i][y]) return false
    return true
- 세로에 아무도 없어야함
  - for(let i =0; i< n; i++)
    if(visiited[x][i]) return false
    return true
- 좌상단 우하단 대각선에 아무도 없어야함
  - for(let i =0; i< n; i++)
    if( visited[x-i][y-i]) return false
    if( visited[x +i][y +i]) return false
    return true
- 우상단 좌하단 대각선에 아무도 없어야함
  - for(let i =0; i< n; i++)
    if( visited[x+i][y-i]) return false
    if( visited[x-i][y +i]) return false
    return true

# 2트: 시간초과 해결 ✅

dfs를 수행할 때, 이중 for문으로 다시 전부 탐색할 필요가 없다. 행을 기준으로 dfs가 수행되기 때문에 row에 대해서 for문을 실행할 필요가 없기 때문이다.

# 3트: 다른 사람풀이 참고
