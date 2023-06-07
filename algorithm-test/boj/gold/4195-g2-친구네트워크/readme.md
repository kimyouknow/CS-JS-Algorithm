링크:[https://www.acmicpc.net/problem/4195](https://www.acmicpc.net/problem/4195)

[백준] 4195-g2-친구 네트워크

자료 구조
해시를 사용한 집합과 맵
분리 집합

# 느낀 점

ojbect의 key, value를 아이디(길이가최대20)로 설정하니 메모리 초과가 발생했다.

메모리 초과 문제를 해결하면서 union find 로직을 실행하기 위해 value를 고유 id(배열의 인덱스)로 설정해서 문제를 해결할 수 있었다.

# 문제 읽기

어떤 사이트의 친구 관계가 생긴 순서대로 주어졌을 때, 두 사람의 친구 네트워크에 몇 명이 있는지 구하는 프로그램을 작성

친구 네트워크란 친구 관계만으로 이동할 수 있는 사이

두 사람의 친구 네트워크에 몇 명이 있는지 구하는 프로그램

친구 관계의 수 F가 주어지며, 이 값은 100,000을 넘지 않는다.

# 1트: 50m → 메모리 초과

아이디 종류의 최대 개수: 100,000 \* 2

연결은 union을 활용해서 할 수 있는

연결된 개수를 어떻게 구하지?

- 누적 탐색 값으로 계산, 재귀를 얼마나 호출해서 root까지 갔는지

```tsx
network = {};
getParent(x, idx);
if (network[x]) return getParent(network[x], idx + 1);
else return [x, idx];

union(x, y)[(px, xIdx)] = getParent(x, 1)[(py, yIdx)] = getParent(y, 1);
if (px < py) network[py] = px;
else network[px] = py;
return xIdx + yIdx;
```

⇒ 이렇게 누적 값으로 하면 안 됨

- a b , a c 두 값이 들어오면 두 번째 (a,c)에서 a는 네트워크 값이 2이어야 하는데 재귀를 한 번 호출해서 1밖에 안 됨
- 모두 탐색 한 뒤 root의 개수를 더하기

```tsx
const count = (root) =>
  Object.entries(network).reduce((acc, cur) => {
    const [key, value] = cur;
    if (value === root) return acc + 1;
    return acc;
  }, 0);
```

→ 메모리 초과

## 2트: 20m + 50m ✅

unionFind에서 key, value를 변경

- key: 아이디
- value: 고유 숫자,

고유 숫자 선점하기

```tsx
let i = 0;
if (network[a] === undefined) {
  network[a] = i;
  i++;
}
```

union , find함수 변경

- find함수 → links라는 각 인덱스가 본인을 가리키고 있는 배열로 부모 찾기
- px, py를 비교하는게 아니라 sizes[px], sizes[py]를 비교하기

```tsx
// 사이즈가 큰 쪽으로 합치고
// 연결은 작은 쪽으로 연결
if (sizes[px] < sizes[py]) {
  sizes[py] += sizes[px];
  links[px] = links[py];
} else {
  sizes[px] += sizes[py];
  links[py] = links[px];
}
```
