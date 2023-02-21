/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 1트
  // const n = nums.length;
  // const origin = [...nums];
  // if(n === 1) return
  // for(let i = 0; i < n; i++){
  //     const idx = i + k >= n ? (i+k) % n: i + k;
  //     nums[idx] = origin[i];
  // }
  // 2트
  const reverse = (l, r) => {
    while (l < r) {
      const temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
      r--;
    }
  };
  const n = nums.length;
  const idx = k % n;
  reverse(0, n - 1);
  reverse(0, idx - 1);
  reverse(idx, n - 1);
};

// read
// nums를 k만큼 rotate 시키기
// rotate: 오른쪽으로 이동
// 1 <= nums.length <= 10^5
// -2^31 <= nums[i] <= 2^31 - 1
// 0 <= k <= 10^5
// 그냥 돌렸을 때, time complexity O(n * k)
// modify nums in-place instead.

// 1트: 20m: use copied array
// ex1)
// nums:[1,2,3,4,5,6,7], k = 3
// answer: []
// [7,1,2,3,4,5,6]
// [6,7,1,2,3,4,5]
// [5,6,7,1,2,3,4]
// new = i + k >= n ? (i+k) % n: i + k;

// 2트: inplace (ref. solution): 40m
// nums: 1 2 3 4 5 6 7
// idx = k % n

// reverse(nums, l, r)
//     while(l < r)
//         temp = nums[l]
//         nums[k] = nums[r]
//         nums[r] = temp
//         l++
//         h--
// k = k % n;
// nums: 1 2 3 4 5 6 7
// reverse(nums, 0, n-1);
// nums: 7 6 5 4 3 2 1
// reverse(nums, 0, k-1);
// nums: 5 6 7 4 3 2 1
// reverse(nums, k, n-1);
// nums: 5 6 7 1 2 3 4
