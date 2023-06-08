[https://www.acmicpc.net/problem/5525](https://www.acmicpc.net/problem/5525)

백준 5525 s1 IOIO

# 느낀 점

시간복잡도를 고려하기..

# 문제 읽기

Pn : I … I ( O가 n개)
`I` 와 `O`로만 이루어진 문자열 S와 정수 N이 주어졌을 때, S안에 Pn이 몇 군데 포함되어 있는지 구하는 프로그램

- 1 ≤ N ≤ 1,000,000
- 2N+1 ≤ M ≤ 1,000,000
- S는 `I`와 `O`로만 이루어져 있다.

# 1트: 20m → 부분성공 (시간초과)

p =I로 시작해서 OI를 n번 더한 문자열

len = p의 길이

for문 ( i = 0; i ≤ n-len;i++)

같은지 여부 체크

for문 ( j = 0; j < len ;j++)

m[j + i] !== p[j] ⇒ 같은지 여부체크 false처리

# 2트: 40m ✅

N ≤ 100, M ≤ 10,000

추가적ㅇ니 제약조건 없음

이중for문이 아닌 다른 방법

- `내부 for문을 전체 돌리지 않고, p에 대하여 앞에 문자 두개를 떼고, 뒤에 붙히는 식`

s.slice(i, i+1)으로 IOI 찾기

찾았으면

- i += 2 , acc++
- 증가시킨 acc === N → answer++, acc— (앞에 문자 두 개 떼기)

못찾았으면

- acc 초기화, i++
