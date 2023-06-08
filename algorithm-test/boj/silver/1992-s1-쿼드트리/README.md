링크: [https://www.acmicpc.net/problem/1992](https://www.acmicpc.net/problem/1992)

백준 1992-s1-쿼드트리 재귀 분할정복

# 느낀 점

이중 for문을 돌려서 4분면을 탐색하는 로직을 생각하는데 오래걸렸다. 그림과 좌표를 그려가면서 풀었는데도 쉽지 않았다.

# 문제 읽기

흰 점을 나타내는 0

검은 점을 나타내는 1

N 은 언제나 2의 제곱수, 1 ≤ N ≤ 64

# 1트: 32m

가장 작은 단위인 4칸까지 쪼개서 풀기

(0,0) (0, 1) (1,0) (1,1) → 이중 for문

for(i = 0; i < 2; i++)

for(j = 0; j < 2; j++)

# 2트: 46m ✅

가장 작은 단위윈 4칸 까지 재귀적으로 쪼개서 풀기

- 인덱스로 접근을 어떻게 하지. 왼쪽 위 → 오른쪽 위 → 왼쪽 아래 → 오른쪽 아래 : (0,0) → (0,1) → (1,0) → (1,1)

n = 8

- (0,0) → (0, 4) → (4,0) → (4,4) ⇒ (x , y , 4) , (x , y + 4 , 4) , (x + 4 , y , 4), (x + 4 , y + 4 , 4)

n = 4

- (0,0) → (0,2) → (2,0) → (2,2)
- (0,4) → (0, 6) → (2, 4) → (6,6)

n =2

4분면의 각 꼭짓점을 인자로 넘겨서 2로 나누기

idx = 8

next= 8 / 2

⇒ (x , y , next) , (x , y + next , next) , (x + next , y , next), (x + next , y + next , next)

이중 for문

dfs(x,y,idx)

for (let r = x; r < x + idx; r++) {
for (let c = y; c < y + idx; c++) {

ans += “(”

dfs(start_r, start_c, next)

dfs(start_r, start_c+next, next)

dfs(start_r+nexrt, start_c, next)

dfs(start_r+next, start_c+next, next)

ans += “)”
