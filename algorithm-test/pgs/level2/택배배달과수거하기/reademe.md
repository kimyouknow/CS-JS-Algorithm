링크: https://school.programmers.co.kr/learn/courses/30/lessons/150369

프로그래머스 level2 택배 배달과 수거하기

### 문제 읽기

트럭 로직

- 재활용 택배 상자들을 싣기
- 물류창고에서 출발
- 각 집에 재활용 택배 상자 배달
- 빈 재활용 택배 상자들을 수거
- 물류창고에 내리기

정답: 트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리 구하기

### 풀이1: 그리디: 45m 실패

제일 먼 집을 가면서 한 번에 처리할 수 있는 경우를 잘 찾아야 한다.

- target = 배달 및 수거를 해야하는 집
- target 중 가장 멀리 있는 집부터 탐색
- target의 배달 및 수거 수량이 남아 있으면 target의 인덱스 줄이지 않기
- cap이 남아 있으면 target보다 낮은 집의 배달 및 수거 줄이기
- target의 배달 및 수거 수량이 남아 있지 않으면 target의 인덱스 줄이기

```javascript
target = n - 1
 curCap = cap
 이동거리 = 0
 while(n > 0)
     deliver = target
     while(curCap > 0 && deliver > 0)
         if (curCap >= deliveries[deliver])
             curCap -= deliveries[deliver]
             deliveries[deliver] = 0
             deliver--
         else if(curCap < deliveries[deliver])
             deliveries[deliver] -= curCap
             curCap = 0
     이동거리 += target
     pickup = target
     while(curCap < cap && pickup > 0)
         if(curCap - pickups[pickup] >= 0)
             curCap -= pickups[pickup]
             pickups[pickup] = 0
             pickup--
         else if(curCap - pickups[pickup] < 0)
             pickups[pickup] -= curCap
             curCap = cap
```

### 풀이2: 그리디: 45m 실패

- 제일 먼 집부터 탐색
- 배달 및 수거 둘 중 하나라도 남은 집

### 풀이3: 그리디: 15m ✅

- curCap을 사용하지 않아도 됨.
- cap보다 배달 및 수거량이 많으면 cap만큼 빼고 다시 방문
- cap보다 배달 및 수거량이 작거나 같으면 0으로 만들고 재방문 필요 없음
- cnt: target을 몇 번 방문했는지
- 제일 먼 집을 가면서 사이 집을 들를 수 있음
