링크: [https://www.acmicpc.net/problem/9019](https://www.acmicpc.net/problem/9019)

[백준] 9019-g4-DSLR BFS

# 느낀 점

로직을 구현하는데 어렵지 않았지만 백준에서 node.js의 실행시간이 길어 수정하는데 오래걸렸다. 다른 통과 풀이를 보니까 디테일한 로직은 똑같았다.

L,R로직을 구현할 때, 배열을 만들어서 돌리는 부분에서 오래걸린 문제였다.

# 문제 읽기

계산기

D, S, L, R

레지스터에 0 이상 10,000 미만의 십진수를 저장가능

n의 네 자릿수를 d1, d2, d3, d4라고 하자(즉 n = ((d1 × 10 + d2) × 10 + d3) × 10 + d4

- D : n _ 2, n _ 2가 9,999보다 크면 10,000으로 나눈 나머지를 취함
- S : n - 1, n이 0이면 9,999를 ㅈ
- L : n의 각 자릿수를 왼편으로 회전,
- R: n의 각 자릿수를 오른쪽으로 회전,

프로그램

- 서로 다른 두 정수 A와 B(A ≠ B)에 대하여 A를 B로 바꾸는 최소한의 명령어를 생성하는 프로그램
-

# 1트

각 명령어에 대해서 너비우선탐색

orders: 각 명령어 함수가 담긴 길이가 4인 배열

D: (n) ⇒ n _ 2 > 10,000 ? 10,000 % n _ 2 : n \* 2

S: (n) ⇒ n === 0 ? 9,999 : n - 1

L: (n) ⇒ rotate(n, -1)

R: (n) ⇒ rotate(n, +1)

toArr(n, dr){

arr = Array(4).fill(0)

초기화

for(let i = 0 ; i < 4; i++)

arr[i] = Math.floor(n / 10 ^ (4 - i))

n = n % 10 ^ (4 - i)

}

L 돌리기

temp = arr[0]

for(let i = 0 ; i < 4; i++)

arr[i] = arr[i+1]

arr[3] = temp

R 돌리기

temp = arr[4]

for(let i = 3 ; i ≥ o ; i—)

arr[i] = arr[i-1]

arr[0] = temp

## 2트: 시간초과해결

orders의 L,R 로직 변경

array을 돌리지 않고, 곧바로 계산할 수 있게 수정
