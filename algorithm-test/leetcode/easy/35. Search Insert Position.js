/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let s = 0;
  let e = nums.length;
  while (s < e) {
    const m = Math.floor((s + e) / 2);
    if (nums[m] >= target) {
      e = m;
    } else {
      s = m + 1;
    }
  }
  return s;
};

// read
// nums: number[], sorted asc,
// target:
// return : if the target is found || 없으면 asc sort 기준으로 삽입되어야할 위치 반환
// 조건
// - O(log n) runtime complexity.

// 1트: 10m
// ex1) 1 2 3 3 5 6 / 5  -> 1233(5)56, 12335(5)6
// ex2) 13356 / 4 -> 133(4)56
// ex1 시뮬레이션
// s = 0, e = 6, m = 3  nums[m] = 3 === 3 -> e = m
// s = 0, e = 3, m = 1, nums[n] = 2 < 3 -> s = m+1
// s = 2, e = 3, m = 2, nums[n] = 3 === 3 -> e = m
// s = 2, e = 2 break
// return s
// ex2 시뮬레이션
// s = 0, e = 5, m = 2, nums[m] = 3 < 4 -> s = m + 1
// s = 3, e = 5, m = 4, nums[m] = 6 > 4 -> e = m
// s = 3, e = 4, m = 3, nums[m] = 5 > 4 -> e = m
// s = 3, e = 3 break
// return s 3
