링크: [https://www.acmicpc.net/problem/1043](https://www.acmicpc.net/problem/1043)

[백준] 1043-g4-거짓말 그래프 탐색 분리 집합 UnionFind 합집합 찾기,

# 느낀 점

n이 최대 50이어서 첫 번째 풀이로도 풀렸던 것 같다. n,m, targets이 충분히 크다고 했을 때 unoin find풀이가 시간이 적게 걸린다.

# 문제 읽기

사람수 N , 파티의 수 M(N, M은 50 이하의 자연수), 사람들의 번호는 1부터 N까지의 수

이야기의 진실을 아는 사람 수와 번호: ( 0 이상 50 이하의 정수): targets, targetIds

각 파티에 오는 사람들 수와 번호 (1 이상 50 이하의 정수): people, peopleIds

지민이는 모든 파티에 참가해야함

지민이가 거짓말쟁이로 알려지지 않으면서, 과장된 이야기를 할 수 있는 파티의 개수의 최댓값

- 각각의 파티 중, 이야기의 진실을 아는 사람 번호가 포함되지 않은 파티 구하기
- 어떤 사람이 어떤 파티에서는 진실을 듣고, 또다른 파티에서는 과장된 이야기를 들었을 때도 지민이는 거짓말쟁이로 알려지게 된다.

## 1트: 30m

두 번 탐색

- 첫 번째 탐색: 처음 주어진 targetIds에 포함되는 peopleIds 고르기
  - peopleIds안에 targetIds 중 하나가 있으면, peopleIds에 있는 모든 id들을 targetIds에 추가
  - peopleIds안에 targetIds 중 하나라도 없으면 answer에 추가
- 두 번째 탐색: answer를 돌면서 targetIds에 포함되는 peopleIds 고르기

## 2트: 15m

두 번째 탐색을 했을 때 세번째 탐색해서 진실이 전파될 수 있음.

```jsx
3 3
1 3
1 1
2 1 2
2 2 3
```

답: 0

입력 순서에 상관없이 찾아야함

- `시간복잡도`: O(m _ peopleIds의 최대 = 50 _ 최대 반복횟수(?))

없을 때까지 반복

- res = filtering(answer)
- if(res.length === answer.length) break
- answer = res

## 3트: Union-Find

진실을 알고 있는 집단과 진실을 모르는 집단으로 구분

진실을 알고 있는 집단: 전파될 수 있음

- `시간복잡도`: O(m _ m _ 진실을 아는 사람 수(targets))
- peopleIds를 하나씩 탐색하면서 집단 구분(union)
  - union(arr, peopleIds[i], peopleIds[i + 1]);
- peopleIds를 돌면서 집단에 포함되지 않은 peopleIds를 찾을 때마
  - arr[i] === min : 같은 집단
  - arr[i] !== min : 다른 집단 answer++

`Array[i] = i`

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
