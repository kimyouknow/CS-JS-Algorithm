링크: [https://www.acmicpc.net/problem/2170](https://www.acmicpc.net/problem/2170)

[백준] 2170-g5-선긋기 정렬 스위핑

# 느낀 점

# 문제 읽기

도화지에 선 긋기

- 여러 번 그은 곳과 한 번 그은 곳의 차이 구별 못함

선(들)의 총 길이를 구하는 프로그램을 작성하시오.

선이 여러 번 그려진 곳은 한 번씩만 계산

선을 그은 횟수 N(1 ≤ N ≤ 1,000,000)

N개의 줄에는 선을 그을 때 선택한 두 점의 위치 x, y(-1,000,000,000 ≤ x < y ≤ 1,000,000,000)

# 1트: 25m ✅

오름차순 정렬 (sort: **O(nlogn)**)

누적s, 누적e

acc

0≤ i < n : for문 탐색 i++

[s, e] = arr[i]

if(누적s, 누적e === undefined)

- 누적s = s
- 누적e = e

else

if( 누적s ≤ s ≤ 누적 e)

if(누적e < e)

누적e = e

else if (누적e < 누적s)

누적s = s

누적e = e

acc = 누적e - 누적s +1
