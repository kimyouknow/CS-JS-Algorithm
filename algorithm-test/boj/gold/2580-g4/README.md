[https://www.acmicpc.net/problem/2580](https://www.acmicpc.net/problem/2580)

백준 2580-g4-스도쿠 백트래킹

# 느낀 점

아이디어를 생각하는데 오래걸리지 않았지만 구현하는데 오래걸렸다.

수도코드를 최대한 자세히 썼다.

다른 사람들 풀이에 비해 시간이 오래걸렸는데 더 최적화할 수 있는 풀이를 생각해봐야겠다.

# 문제 읽기

규칙

- 가로줄 세로줄 : 1 ~ 9 까지 숫자가 한 번만
- 굵은 선 3 \* 3 : 1 ~ 9 까지 숫자가 한 번만

스도쿠 채우기

# 1트: 58m 시간초과

이중 for문

map[r][c]

visited = 길이가 9인 bool 배열

비어있는 값의 좌표들을 모으고

각 좌표에 대해서 탐색 : 재귀

- search: 탐색함수: 가능한 숫자를 반환
  - 가로 탐색 : map[r][i]와 visited 비교
  - 세로 탐색: map[i][c]와 visited 비교
  - 굵은 선 3 _ 3 탐색 : ( r/ 3, c /3) 이중 for문 / 방문배열 탐색 i = r _ 3 + c
- 3가지 방법으로 빈 칸에 들어갈 수 있는 숫자들을 찾기
- 가능한 숫자가 없으면 재귀함수 종료( 자동으로 이전 재귀로 돌아가서 다음 숫자 탐색)

for문 해당 숫자들을 하나씩 넣고 다음 재귀 호출

# 2트: 시간초과 해결하기

search함수 실행시 방문배열을 배번 새로 할당했는데 미리 만들어 넣고 값만수정

```jsx
const visited = Array.from({ length: 9 }, () => false);

const search = (r, c) => {
  // const visited = Array.from({ length: 9 }, () => false); => 시간초과 원인
  const res = [];
  for (let i = 0; i < 9; i++) {
    if (!visited[i]) res.push(i + 1);
    visited[i] = false;
  }
  return res;
};
```
