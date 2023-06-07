/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // let s = 0;
    // let e = n;
    // let answer = 1;
    // while (s <= e) {
    //   const m = Math.floor((s + e) / 2);
    //   if (isBadVersion(m)) {
    //     e = m - 1;
    //     answer = m;
    //   } else {
    //     s = m + 1;
    //   }
    // }
    let s = 1;
    let e = n;
    let answer = 1;
    while (s < e) {
      const m = Math.floor((e - s) / 2) + s;
      if (isBadVersion(m)) {
        e = m;
        answer = m;
      } else {
        s = m + 1;
      }
    }
    return answer;
  };
};

// read
// 각 버전은 이전 버전을 기반으로 개발함 -> bad version이후 버전은 모두 bad version

// versions: n [1,2,...n]
// 1 <= bad <= n <= 2^31 - 1 // bad가 반드시 존재함
// first bad version찾기
// isBadVersion()함수를 써서 bad version찾을 수 있는데, isBadVersion 호출을 최소화

// 1트: 17m
// n의 최대값이 2 ^ 31이므로 선형탐색은 부적절
// 이분탐색을 활용하기 -> 가장 왼쪽에 있는 걸 찾아야하니까 lower_bound
// s = 0
// e = n
// let answer = 1
// while( s < e)
//     m = Math.floor((s+e) / 2)
//     if(isBadVersion(m)){
//         // 더 왼쪽으로 가야함
//         e = m
//     } else {
//         s = m + 1
//     }
