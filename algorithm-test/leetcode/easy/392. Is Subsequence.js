/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const n = s.length;
  const m = t.length;
  let i = 0; // s
  let j = 0; // t

  while (j < m && i < n && i <= j) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i === n;
};

// read
// s가 t의 subsequence면 true 아니면 false 반환
// s,t: string, lowercase english letter
// 0 <= s.length <= 100
// 0 <= t.length <= 10 ^ 4
// subsequence:
// - 비교 문자열의 구성문자로 구성된 문자
// - 문자의 순서가 바뀌면 안 됨
// - 떨어져 있어도 됨

// 1트: 11m
// n = s.length
// m = t.length
// i = 0 -> s
// j = 0 -> t

// while(j < m && i < n && i < j)
//     if(s[i] === t[i])
//         i++
//         j++
//     else
//         j++

// while문을 다 돌았는데 i < n ? false : true
