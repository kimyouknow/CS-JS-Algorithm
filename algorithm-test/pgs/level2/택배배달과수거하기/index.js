function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let target = n - 1;

  // 제일 먼 집가면서 들를 수 있음
  let d = 0;
  let p = 0;

  while (target >= 0) {
    let cnt = 0;

    d += deliveries[target];
    p += pickups[target];

    // 둘 중 하나가 0보다 크다는 의미 -> 배달, 수거량이 하나라도 있으면 다시 방문해야함.
    while (d > 0 || p > 0) {
      d -= cap;
      p -= cap;
      cnt++;
    }
    answer += (target + 1) * 2 * cnt;

    target--;
  }

  return answer;
}
