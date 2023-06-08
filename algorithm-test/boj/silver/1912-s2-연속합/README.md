링크: [https://www.acmicpc.net/problem/1912](https://www.acmicpc.net/problem/1912)

[백준] 1912-s2-연속합 다이나믹프로그래밍

# 문제 읽기

n개의 정수로 이루어진 임의의 수열

연속된 몇 개의 수를 선택해서 구할 수 있는 합 중 가장 큰 합

정수의 개수 : n(1 ≤ n ≤ 100,000)

수는 -1,000보다 크거나 같고, 1,000보다 작거나 같은 정수

# 1트: 48m:

투포인터와 누적합을 활용한 계산법

dp[k] = Math.max(dp[k-1], arr[k], acc[k-1] + arr[k])

if(d[k-1] > arr[k] + acc[k-1]

dp[k] = dp[k-1]

acc[k] = acc[k-1] + arr[k]

if(d[k-1] === arr[k])

     acc[k] = arr[k]

dp[k] = arr[k]

if(d[k-1] < arr[k])

acc[k] = acc[k-1] + arr[k]

dp[k] = dp[k-1] + arr[k]

if(d[k-1] > arr[k] + acc[k-1]

dp[k] = dp[k-1]

acc[k] = acc[k-1] + arr[k]

if(d[k-1] < arr[k] + acc[k-1]

dp[k] = arr[k] + acc[k-1]

acc[k] = arr[k] + acc[k-1]

if(d[k-1] === arr[k] + acc[k-1]

# 2트: 20m 시간초과

dp = Array.from({ length: n }, () => 0); ⇒ 이차원 배열로 모든 결과를 기억할 필요없이 한줄 씩 계산해도 된다.

이중 for문 ( 0 ≤ s < n, s ≤ e < n)

if( s === e)

dp[e] = arr[e]

findMax(dp[e]);

continue

dp[e] = dp[e-1] + arr[e]

findMax(dp[e]);

# 3트: 20m ✅

dp = arr초기값

findMax(dp[0]);
for ( 0 ≤ i < n) {
if (dp[i - 1] > 0) dp[i] = dp[i] + dp[i - 1]; ⇒ dp[i-1]이 0보다 작으면 이전값을 누적하지 않고 새롭게 시작
findMax(dp[i]);
}
