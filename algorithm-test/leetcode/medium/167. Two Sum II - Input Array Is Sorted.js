/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const n = numbers.length;
  let answer = [];
  // sol1: binary search
  // for(let i = 0; i < n-1; i++){
  //     const cur = target - numbers[i]
  //     let s = i+1;
  //     let e = n;
  //     while(s < e){
  //         const m = Math.floor((s+e)/2)
  //         if(cur > numbers[m]){
  //             s = m+1
  //         } else {
  //             e = m
  //         }
  //     }
  //     if(cur === numbers[s]) {
  //         answer = [i+1,s+1]
  //         break
  //     }
  // }
  // sol2: two-potiner
  let s = 0;
  let e = n - 1;
  while (s < e) {
    const cur = numbers[s] + numbers[e];
    if (cur < target) {
      s++;
    } else if (cur > target) {
      e--;
    } else {
      answer = [s + 1, e + 1];
      break;
    }
  }
  return answer;
};

// read
// number: non-decreasing ordered arr,
// numbers의 요소 중 nums[idx1] + nums[idx2] = target이 되는 Idx1, idx2 찾기
// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// -1000 <= target <= 1000

// sol1:24m - binary search
// Time O(n ^ 2) : 이중 for문  X
// Time O(n * logn)
// for(0 <= i < n)
//     이분 탐색: target - nums[i]
//     같은게 연속으로 있을 수도 있으니까 lowerbound

// sol2 - two pointer
// Time O(n)
// s = 0, e = n-1
// numbers[s] + numbers[e] < target : s++
// numbers[s] + numbers[e] > target : e--
// numbers[s] + numbers[e] === target
