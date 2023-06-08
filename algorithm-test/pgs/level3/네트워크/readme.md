링크: https://school.programmers.co.kr/learn/courses/30/lessons/43162#

[프로그래머스] level3 네트워크 DFS/BFS union find

### 읽기

1 <= n <= 200
0 <= 각 컴퓨터 <= n - 1
i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j] = 1
computers[i][i] = 1

### 풀이 : 26m

union find하고 set해서 남는 숫자

에러 처리

> [[1, 1, 0, 0, 1], [1, 1, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 1, 1, 1], [1, 0, 0, 1, 1]]

케이스의 경우 union을 하면 [ 0, 0, 0, 2, 0 ]가 나옴
하지만 실제로는 전부 연결된 네트워크임
(28번 라인처리): 다시한 번 map을 돌려 부모를 찾는 과정을 만들어줘서 해결
