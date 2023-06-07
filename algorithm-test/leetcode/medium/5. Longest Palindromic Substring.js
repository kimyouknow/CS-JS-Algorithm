/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
  let answer = '';
  let max = 0;

  // // sol1 : DP
  // // 초기화
  // for (let i = 0; i < n; i++) {
  //     dp[i][i] = true;
  //     max = 1
  //     answer = s[i]
  // }

  // // 에러 처리: 연속한 두 수가 같을 때
  // for (let i = 0; i <= n - 2; i++) {
  //     if (s[i] === s[i + 1]) {
  //         dp[i][i + 1] = true;
  //         max = 2
  //         answer = s.slice(i,i+2)
  //     }
  // }

  // for (let l = n - 1; l >= 0; l--) {
  //     for (let r = l + 2; r < n; r++) {
  //         if (s[l] === s[r] && dp[l + 1][r - 1]) {
  //             dp[l][r] = true;
  //             if(r - l + 1 > max) {
  //                 max = r - l + 1
  //                 answer = s.slice(l,r+1)
  //             }
  //         }
  //     }
  // }

  // sol2: Brute force
  const checkPalindromic = (l, r) => {
    while (l >= 0 && r < n && s[l] === s[r]) {
      l -= 1;
      r += 1;
    }
    return s.slice(l + 1, r);
  };

  for (let i = 0; i < n; i++) {
    const cur1 = checkPalindromic(i, i);
    const cur2 = checkPalindromic(i, i + 1);
    const bigger = cur1.length > cur2.length ? cur1 : cur2;
    if (bigger.length > max) {
      max = bigger.length;
      answer = bigger;
    }
  }

  return answer;
};

// read

// sol1: DP (40m) ✅
// - l === r ⇒ 팰린드롬
// - l > r ⇒ 탐색 불가 : 필랜드롬 아님
// - l < r ⇒ 탐색 가능:
//     - l: r가 팰린드롬이면 l+ 1: r -1도 팰린드롬
//     - l과 r의 차이가 2이상일 때
// dp[l][r] = dp[l+1][r-1] && s[l] === s[r]

// sol2: bruth force
// for문으로 s의 각 자리를 시작으로 좌우로 확장하면서 팰린드롬인지 비교하기
