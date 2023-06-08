/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // 1트: reduce
  // return nums.reduce((acc,cur) => {
  //     const sum = acc.length > 0 ? acc[acc.length -1] + cur : cur
  //     return [...acc, sum]
  // }, [])

  // 2트: map
  // let acc = 0
  // return nums.map(n => {
  //     acc += n
  //     return acc
  // })

  // 3트: for
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

// 문제 읽기
// nums라는 숫자 배열이 들어오면 nums의 길이에 해당하는 배열을 반환
// nums의 길이에 해당하는 배열의 각 인덱스는 nums[0]...nums[k]의 합
