[프로그래머스] level3-가장먼노드 그래프

n개의 노드
1 <= 각 노드의 번호 <= n
2 <= n <= 20,000
answer: 1번 노드에서 가장 멀리 떨어진 노드의 개수
가장 멀리 떨어진 노드 : 최단경로로 이동했을 때 간선의 개수가 가장 많은 노들
그래프

- 양방향 간선
- 1 <= 간선의 개수 <=50,000
- [a,b] : a와 b사이에 간선이 있다는 뜻

### 풀이1: 25m ✅

adjacent matrix vs adjacent list

adjacent matrix: vertex2 만큼 메모리 소모
adjacent list: edge 갯수 만큼 메모리 소모 => list로 구현해서 통과

BFS탐색

- queue에서 shift하면서
