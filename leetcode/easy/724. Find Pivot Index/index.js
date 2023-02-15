/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let acc = 0;
  const sums = nums.map((v) => {
    acc += v;
    return acc;
  });
  let answer = -1;
  const n = nums.length;
  for (let p = 0; p < n; p++) {
    const l = p === 0 ? 0 : sums[p - 1];
    const r = sums[n - 1] - sums[p];
    if (l === r) {
      answer = p;
      break;
    }
  }
  return answer;
};
