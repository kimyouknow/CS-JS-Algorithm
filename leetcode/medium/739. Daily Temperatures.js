/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const len = temperatures.length;
  const answer = Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    const cur = temperatures[i];
    if (stack.length === 0) {
      stack.push([i, cur]);
    } else {
      while (stack.length > 0) {
        const last = stack[stack.length - 1];
        if (last[1] >= cur) {
          break;
        } else {
          answer[last[0]] = i - last[0];
          stack.pop();
        }
      }
      stack.push([i, cur]);
    }
  }
  return answer;
};

// read
// number[] 배열을 출력
// number[i] = ith보다 따뜻한 날이 등장하는 날까지 기다리는 날짜
// i왼쪽은 무시

// sol: 25m
// stack: [2, 75] [3, 71] [6,76]
// answer 1 1 0 0 1 1
