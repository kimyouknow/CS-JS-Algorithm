/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // sol1
  // let i = 0;
  // let j = 0;
  // while(j < nums.length){
  //     if(i === j){
  //         j++
  //     } else {
  //         if(nums[i] === 0 && nums[j] === 0){
  //             j++
  //         } else if (nums[i] === 0){
  //             const temp = nums[j];
  //             nums[j] = nums[i]
  //             nums[i] = temp;
  //             i++
  //         }else if (nums[j] === 0){
  //             i++
  //         } else {
  //             i++
  //             j++
  //         }
  //     }
  // }
  // sol2
  // const n = nums.length
  // let startZero = 0;
  // for(let i = 0; i < n; i++){
  //     if(nums[i] !== 0){
  //         nums[startZero] = nums[i]
  //         startZero++;
  //     }
  // }
  // for(let i = startZero; i < n; i++){
  //     nums[i] = 0
  // }
  const n = nums.length;
  let startZero = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      const temp = nums[startZero];
      nums[startZero] = nums[i];
      nums[i] = temp;
      startZero++;
    }
  }
};

// read:
// - inplace-rotate
// - move all 0 to the end of array, while maintaing the relative order

// sol 1: 18m
// Time : O(n)
// Space: O(1)
// i = 0, j = 0 (i <= j)
// i,j를 경우에 따라 하나씩 증가시키면서 교환하기

// sol2:
// Time : O(n)
// Space: O(1)
// for문을 두 번 돌리기
// 1번 for문(0 <= i < n) nums[i] !== 0이면 맨 앞으로 땡기기
//      startZero = 0
//      startZero++
// 2번 for문:(startZeror <= i < n) nums[i]를 0으로 변경하기

// sol3
// for문을 한번만 돌리면서 변경하기
// startZero = 0
// for(let i = 0; i < n; i++)
// if(nums[i] !== 0)
//     swap(startZero, i)
//     startZero++
