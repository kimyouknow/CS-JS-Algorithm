function solution(n, times) {
  let answer = 0;

  times.sort((a, b) => a - b);

  const getRes = (num) => [...times].reduce((acc, cur) => acc + Math.floor(num / cur), 0);

  let start = 1;
  let end = Number.MAX_SAFE_INTEGER;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const res = getRes(mid);
    if (res >= n) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  answer = start;

  return answer;
}
