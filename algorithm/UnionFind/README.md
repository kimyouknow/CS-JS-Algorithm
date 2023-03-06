# Union-Find란?

Union find는 대표적인 그래프 알고리즘으로, 여러 개의 노드가 존재할 때 두 개의 노드를 선택해, 현재 이 두 노드가 서로 같은 그래프에 속하는지 판별하는 알고리즘이다.

공통원소가 없는 “상호 배타적(Disjoin-set)”인 부분 집한 들로 나눠진 원소들에 대한 정보를 저장한다.

## 핵심 메서드

make-set(x): 초기화

- x를 유일한 원소로 하는 새로운 집합을 만든다.

union(x, y) : 합하기

- x가 속한 집합과 y가 속한 집합을 합친다. 즉, x와 y가 속한 두 집합을 합치는 연산

find(x): 찾기

- x가 속한 집합의 대표값(루트 노드 값)을 반환한다. 즉, x가 어떤 집합에 속해 있는지 찾는 연산

### 배열

- Array[i]: i번 원소가 속하는 집합의 번호(즉, 루트 노드의 번호)
- make-set(x)
  - Array[i] = i와 같이 각자 다른 집합 번호로 초기화한다.
- union(x, y)
  - 배열의 모든 원소를 순회하면서 y의 집합 번호를 x의 집합 번호로 변경한다.
  - 시간 복잡도: O(N)
- find(x)
  - 한 번만에 x가 속한 집합 번호를 찾는다.
  - 시간 복잡도: O(1)

### 트리

- 같은 집합 = 하나의 트리, 즉 집합 번호 = 루트 노드
- make-set(x)
  - 각 노드는 모두 루트 노드이므로 N개의 루트 노드 생성 및 자기 자신으로 초기화한다.
- union(x, y)
  - x, y의 루트 노드를 찾고 다르면 y를 x의 자손으로 넣어 두 트리를 합한다.
  - 시간 복잡도: O(N)보다 작으므로 find 연산이 전체 수행 시간이 지배한다.
- find(x)
  - 노드의 집합 번호는 루트 노드이므로, 루트 노드를 확인하여 같은 집합인지 확인한다.
  - 시간 복잡도: 트리의 높이와 시간 복잡도가 동일하다. (최악: O(N-1))

[https://gmlwjd9405.github.io/2018/08/31/algorithm-union-find.html](https://gmlwjd9405.github.io/2018/08/31/algorithm-union-find.html)

### 초기화

N개의 원소가 각각의 집합에 포함되어 있도록 초기화한다.

`Array[i] = i` 의 형태로 `모든 값이 자기 자신을 가리키도록 만든다.`

### Union(합치기)

두 원소 a,b가 주어질 때, 이들이 속한 두 집합을 하나로 합친다. 일반적으로 부모를 합칠 때는 더 작은 값 쪽을 합친다. 예를들어, union(1,2)를 한다고 했을 때, 2번 인덱스에 1이 들어가게 된다.

만약 1,2,3을 차례대로 연결한다고 했을 때, 1과 3의 부모가 달라지게 된다. (Array[1] = 1 , Array[2] = 1, Array[3] = 2) 1과 3이 연결되어 있는지 파악하기 어렵기 때문에 `재귀함수`를 사용해 3의 부모인 2를 찾고, 2의 부모인 1을 찾아 Array[3]의 값으로 넣어준다.

두 집합을 합치기 위해 배열의 모든 원소를 순회하며 하나의 집한 번호를 나머지 한 개의 집합 번호로 교체해야하기 때문에 `O(N)`의 연산을 실행한다.

```jsx
function getParent(arr, x) {
  if (arr[x] === x) return x;
  else return getParent(arr, arr[x]);
}

function union(arr, x, y) {
  const px = getParent(arr, x);
  const py = getParent(arr, y);
  if (px < py) {
    arr[py] = px;
  } else {
    arr[px] = py;
  }
}
```

### Find(찾기)

어떤 원소 A가 주어질 때, 이 원소가 속한 집합을 반환한다. Union과정에서 설정한 Array의 인덱스로 접근하면 속한 집합을 `O(1)`의 연산으로 접근할 수 있다.

# 참고자료

[https://www.youtube.com/watch?v=AMByrd53PHM](https://www.youtube.com/watch?v=AMByrd53PHM)

[https://brenden.tistory.com/33](https://brenden.tistory.com/33)

[https://bowbowbow.tistory.com/26](https://bowbowbow.tistory.com/26)

[https://gmlwjd9405.github.io/2018/08/31/algorithm-union-find.html](https://gmlwjd9405.github.io/2018/08/31/algorithm-union-find.html)
