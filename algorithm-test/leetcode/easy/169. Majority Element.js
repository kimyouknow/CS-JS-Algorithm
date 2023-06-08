/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let answer = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      answer = nums[i];
      count = 1;
    } else if (answer === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return answer;
};

// // sol1
// nums.reduce

// sol2
// 시간: O(n)
// 공간: O(1)
//
