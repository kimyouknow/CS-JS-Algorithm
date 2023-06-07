/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = {};
  const existed = {};
  let answer = true;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      if (existed[t[i]]) {
        answer = false;
        break;
      }
      map[s[i]] = t[i];
      existed[t[i]] = true;
    } else {
      if (map[s[i]] !== t[i]) {
        answer = false;
        break;
      }
    }
  }
  return answer;
};

// read
// 주어진 문자 s,t가 Isomorphic ? true : false
// s,t: string, 1 <= s.length <= 5 * 10 ^ 4
// 각각의 문자는 다른 문자로 대체될 수 있음, 순서는 유지
// 두 개의 문자가 하나의 문자로 매핑될 수 없음
// 특정 문자가 자기 자신으로 매핑될 수 있음

// 1트: 16m
// s의 각 문자마다 개수 파악
// t의 각 문자마다 개수 파악
// 순서를 유지해야함
// map = {}
// existed = {}
// for( 0 <= i < s.length)
//     if(map[s[i]] === undefined)
//.        이미 p가 다른 값으로 매핑되어 있으면 종료
//         if(existed[p[i]]) break
//         map[s[i]] = p[i]
//         exitsted[p[i]] = true
//     else
//         이미 s가 매핑되어 있는데 다른 값이 들어오면 종료
//         if(map[s[i]] !== p[i]) break
