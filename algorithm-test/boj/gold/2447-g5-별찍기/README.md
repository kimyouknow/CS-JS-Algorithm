링크: [https://www.acmicpc.net/problem/2447](https://www.acmicpc.net/problem/2447)

[백준] 2447-g5-별찍기 재귀 분할정복

# 느낀 점

1트에서는 출력을 테이블이 아닌 문자열을 이어붙히려는 생각을 했다.

2트에서는 분할정복 및 재귀적인 로직을 1트와 비슷하지만 테이블로 생각하고 풀었더니 쉽게 풀렸다. 3 _ 3 테이블에서 i === 1이면서 j === 1 일 때가 가운데 빈 상황이다. 재귀적으로 분할 때 `dfs(x + idx / 3 _ i, y + idx / 3 \* j, idx / 3)` 와 같은 형식으로 호출하는데 이 때 i와 j가 1일 때는 재귀호출을 하지 않고 빈 칸으로 두었다.

3트에서는 1트에서 완성하지 못한 풀이를 다른 사람 풀이를 통해 참고했다.

# 문제 읽기

재귀적인 패턴으로 별을 찍어 보자

N=3 \*\* k 이며, 이때 1 ≤ k < 8

N이 3의 거듭제곱(3, 9, 27, ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양

크기 3의 패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩 있는 패턴

N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의 (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태

# 1트: 42m

이해

answer = “”

dfs(0,0, n)

dfs(x,y, idx)

else answer += “\*”

if x ≥ idx / 3 || x ≤ idx / 3 _ 2 || y ≥ idx / 3 || y ≤ idx / 3 _ 2

return idx / 3 \* idx / 3 크기의 빈 배열

for(let i = 0; i < 3; i++)

for(let j = 0;j < 3; j++)

dfs(x + idx / 3 _ i, y + idx / 3 _ j, idx / 3)

# 2트: 15m ✅

n \* n 테이블 만들기

dfs(x,y,idx)

if(idx === 1) table[i][j] = “\*”

for(let i = 0; i < 3; i++)

for(let j = 0;j < 3; j++)

if( i === 1 && j === 1) {

빈칸으로 채우기 (x + idx / 3 _ i, y + idx / 3 _ j, idx / 3)

}

dfs(x + idx / 3 _ i, y + idx / 3 _ j, idx / 3)

빈칸으로 채우기 (x,y,idx)

for(let i = 0; i < idx; i++)

for(let j = 0;j < idx; j++)

table[i][j] = “ “

# 3트: ✅

dfs(n)

dfs(idx)

idx === 3 return “**_”, “_ **“, “\*\*\*\*”

else
