/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let s = 0;
  let e = nums.length;
  let answer = -1;
  while (s < e) {
    const m = Math.floor((s + e) / 2);
    if (nums[m] === target) {
      answer = m;
      break;
    } else if (nums[m] > target) {
      e = m;
    } else {
      s = m + 1;
    }
  }
  return answer;
};

// read
// nums: number[], 1 <= nums.length <= 10 ^ 4, asc sorted
// target: number , 10 ^ 4 < nums[i], target < 10 ^ 4
