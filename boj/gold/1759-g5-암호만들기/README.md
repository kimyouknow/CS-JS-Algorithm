링크: [https://www.acmicpc.net/problem/1759](https://www.acmicpc.net/problem/1759)

[백준] 1759-g5-암호만들기 조합 브루스포스 백트래킹

# 문제 읽기

암호

- 서로 다른 L개의 알파벳 소문자
- 최소 한 개의 모음(a,e,i,o,u)
- 최소 두 개의 자음
- 오름차순
- C: 새 보안 시스템에서 암호로 사용했을 법한 문자의 종류

(3 ≤ L ≤ C ≤ 15)

C개의 문자들로 가능성 있는 암호들을 모두 구하는 프로그램

# 1트: 40m

시간 복잡도: O(2 ^ n)

공간 복잡도:

주어진 문자열을 오름차순으로 정렬

DFS 탐색

dfs(idx, acc, counts)

acc.length ≥ L :

최소 한 개의 모음, 최소 두 개의 자음

종료

for( idx + 1 < i < C)

const [gather, consonant] = checkGathers(letters[i]);

dfs(i, […acc, letter[i], [모음 개수, 자음개수])

dfs(i, […acc], counts)

위의 로직에서 방문처리 추가

## 2트: 시간복잡도 줄이기

어차피 for문을 돌리다보면 내가 구분해서 넣어주지 않아도 구분됨

[a,b,c,d,e]. 3개 뽑기라고 하면

- [a]
  - [a,b]
    - [a,b,c]
    - [a,b,d]
    - [a,b,e]
  - [a,c]
    - [a,c,d]
    - …
- …
