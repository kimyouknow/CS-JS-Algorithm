https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1

724. Find Pivot Index

pivot를 가운데 인덱스로 잡고 가운데 인덱스부터 좌우 합을 비교하면서 풀면 빨리 풀릴 줄 알았다.
그런데 주어진 배열이 크기순도 아니고 음수가 섞여 있어 pivot을 가운데서부터 탐색하면 조건문이 복잡해졌다.

단순하게 pivot을 0번 인덱스부터 시작하면서 합을 비교하니 쉽게 풀렸다.

# 문제 읽기

nums의 pivot index 계산하기
pivot index : pivot기준으로 왼쪽 요소들의 합과 pivot기준으로 오른쪽 요소의 합이 같아지는 index
pivot index가 0 이거나 nums.length -1이면 각각 각 끝의 합은 0으로 계산
가장 왼쪽에 있는 pivot 반환, 없으면 -1

## 1트: 25m

sums : 배열의 합을 만들기
n = nums.length-1, s = 0, e = n
pivot = Math.floor((s+e) / 2)
비교하기
while(pivot >= 0 && pivot < n)
left: sums[pivot-1]
right: sums[n] - sums[pivot]
left === right : 종료
left > right : pivot--
left < right: pivot++

error
[-1,-1,-1,-1,-1,0]
p = 3

## 2트: 10m

비교할 때 left, right합을 비교해서 p를 움직이면 안 됨
에러 난 경우처럼 p를 왼쪽으로 옮겨도 left가 left가 커지는 경우가 있다.
비교하기 수정
while(pivot >= 0 && pivot < n)
l: sums[pivot-1]
r: sums[n] - sums[pivot]
target = nums[p]
target >= 0
l > r: p--
l < r: p++
target < 0
l > r: p++
l < r: p--

## ✅ 3트: 8m

sums: 배열의 합
n = nums.length
p를 중간부터 할 필요없이 0번 인덱스부터 차례대로 탐색 -> 탐색하다가 l === r이면 종료
answer = -1
for( 0<= p < n)
l = sums[p-1] || 0
r = sums[n-1] - sums[p]
if(l === r) answer = p, break
