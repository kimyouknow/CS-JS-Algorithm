# 알고리즘 & 자료구조

```bash
├── boj # 백준 알고리즘 문제 풀이 (문제번호-난이도)
├── datastructure # 자료구조 구현
├── pgs # 프로그래머스 알고리즘 문제 풀이(문제이름)
├── algorithm # 정렬 및 탐색 알고리즘 구현
├── utils # 타입 및 유틸 함수
├── src
│   └── app.ts # 자료구조 및 알고리즘 예제 실행
└── etc # 그 외 설정 파일
```

## Algorithm

- [BOJ] : 백준
- [PGS] : 프로그래머스
- [LEET] : 리드코드

### Algorithm 폴더 예시

```bash
.
├── input.txt # 입력값
├── 1744.test.js # 테스트 케이스
├── # 풀이 및 문제 설명
└── index.js # 코드
```

## Datastructure

javascript(typescript)로 구현하면서 학습하는 자료구조

각 자료구조의 특징 및 핵심메서드를 직접 구현하면서 학습하는 용도입니다.

핵심메서드의 동작을 확인하기 위해 `jest`를 활용해 유닛테스트를 실시했습니다.

### 연결리스트(linked list)

[연결리스트 구현 링크](./datastructure/LinkedList)

### 그래프(grap)

[그래프](./datastructure/Graph)

[그래프 - 연결리스트로 구현한 그래프 링크](./datastructure/Graph/AdjacencyListGraph)

[그래프 - 인접행렬로 구현한 그래프 링크](./datastructure/Graph/AdjacencyMatrixGraph)

[그래프 탐색 알고리즘(bfs/dfs)](./algorithm/graphSearch.ts)

### 트리(tree)

[트리 구현 링크](./datastructure/Tree)

### 이진탐색트리(binary search tree)

[이진탐색트리 구현 링크](./datastructure/BinarySearchTree)

### 힙(heap)

[(최대/최소)힙 구현 링크](./datastructure/Heap)

### 우선순위 큐 (Priority Queue)

[우선순위 큐 구현 링크](./datastructure/PriorityQueue)
