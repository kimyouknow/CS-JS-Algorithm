const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../15691-g4-회전초밥/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (rawInputs) => {
  let [input, ...arr] = rawInputs;
  const [n, d, k, c] = input.split(' ').map((v) => +v);
  arr = arr.map((v) => +v);
  let answer = 0;

  let i = 0;
  let acc = 0;
  let count = 0; // 슬라이딩 범위
  const visited = Array.from({ length: d + 1 }, () => 0);
  while (i < n + k - 1) {
    const e = i >= n ? i - n : i;
    const target = arr[e];
    count++;
    if (target !== c) {
      // 방문하지 않았으면 방문처리 후 누적값 증가, 이미 슬라이딩 내 방문했다면 누적값 증가하지 않음
      if (visited[target] === 0) {
        visited[target] = 1;
        acc++;
      } else {
        visited[target]++;
      }
    }

    if (count === k) {
      if (acc >= answer) {
        answer = acc;
      }
      // 슬라이딩의 첫 값 제거
      const s = i - k + 1 >= n ? i - n - k + 1 : i - k + 1;
      const start = arr[s];
      visited[start]--;
      // 슬라이딩 내 방문한 기록이 없으면 누적값에서 제거
      if (visited[start] === 0) {
        acc--;
      }
      count--;
    }

    i++;
  }

  return answer + 1;
};

console.log(solution(rawInputs));

module.exports = { solution };
