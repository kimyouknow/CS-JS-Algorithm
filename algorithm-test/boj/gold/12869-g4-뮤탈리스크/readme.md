링크: [https://www.acmicpc.net/problem/12869](https://www.acmicpc.net/problem/12869)

[백준] 12869-g4-뮤탈리스크 다이나믹 프로그래밍 그래프 이론 그래프 탐색 너비 우선 탐색

# 문제 읽기

뮤탈 1기

scv: n개 (1 ≤ N ≤ 3)

- 첫 번째 공격: -9
- 두 번째 공격: -3
- 세 번째 공격: -1

0, 또는 이하면 파괴

0 < 체력 ≤ 60

# 1트: 36m ✅

scvs[]

scvs.length === 3 → 6가지 경우의 수

scvs.length === 2 → 2가지 경우의 수

scvs.length === 1 → 1가지 경우의 수

체력빼는 함수()

queue

queue.push( 공격횟수, 새로 계산된 scvs체력 )

# 2트: 경우의 수 개선하기

# 3트: dp?

DP를 이용하여 풀면 된다.

SCV의 체력이 a, b, c일 때 모든 SCV를 파괴하기 위한 최소 공격 횟수를 f(a,b,c) 라고 두자.

그러면 f(a,b,c)=min{f(a−p,b−q,c−r):{p,q,r}={1,3,9}}+1 이다.

또한, a≤0,b≤0,c≤0 이면 f(a,b,c)=0 이다.

[https://sumin-kim-dev.github.io/boj/boj-gold-12869/](https://sumin-kim-dev.github.io/boj/boj-gold-12869/)

```jsx
dfs(scvs)
	for(let i = 0; i < 3; i++)
		if(scvs[i] < 0) scvs[i] = 0
	return dfs(scvs)

  if(scvs.every(scv => scv === 0) return 0

  if(dp[a][b][c] != -1) return dp[a][b][c];

  dp[a][b][c]=최대숫자;
  //최솟값에 대해서만 dp가 가지고 있는다.
  for(const cases of casMap)
		const newScvs = cal(caes, scvs)
		const [a, b, c] = newScvs;
		dp[a][b][c] = min(dp[a][b][c], dfs(caes)+1);

  return dp[a][b][c];

```
