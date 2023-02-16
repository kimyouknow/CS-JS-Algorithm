/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const length = path.length;
  const stack = [];
  let idx = 0;

  while (idx < length) {
    let cur = path[idx];
    idx++;
    if (cur === '/') {
      // "/"를 쌓기
      while (idx < length && path[idx] === '/') {
        cur += path[idx];
        idx++;
      }
    } else {
      // "/"의 다른 단어를 쌓기
      while (idx < length && path[idx] !== '/') {
        cur += path[idx];
        idx++;
      }
    }

    // 다 쌓은 결과를 토대로
    if (cur === '..') {
      if (stack.length > 0) stack.pop();
    } else if (cur[0] !== '/' && cur !== '.') {
      stack.push(cur);
    }
  }
  const answer = stack.join('/');
  return '/' + answer;
};

// https://leetcode.com/problems/simplify-path/

// leetcode 71. Simplify Path

// # 느낀 점

// 스택을 사용해야겠다는 건 생각보다 빨리 알아차렸다.

// 구현하는데 한 글자씩 쌓아가는 중첩된 if문 로직을 고민하는데 오래걸렸다.

// # 문제 읽기

// `.` : 현재 디렉토리

// **`..`** : 부모 디렉토리

// `. . .` : 이름으로 취급

// `//` : 멀티플 슬래쉬는 슬래쉬하나로 취급

// `/` : 자식디렉토리

// 1 <= path.length <= 3000

// # 1트: 35m

// 스택자료구조활용?

// target = path를 한글짜씩 확인[i]

// const stack = [];

// acc = “”

// ```jsx
// /**
//  * @param {string} path
//  * @return {string}
//  */
// const simplifyPath = (path) => {
//   const length = path.length;
//   const stack = [];
//   let idx = 0;

//   while (idx < length) {
//     let cur = path[idx];
//     idx++;
//     if (cur === '/') {
//       // "/"를 쌓기
//       while (idx < length && path[idx] === '/') {
//         cur += path[idx];
//         idx++;
//       }
//     } else {
//       // "/"의 다른 단어를 쌓기
//       while (idx < length && path[idx] !== '/') {
//         cur += path[idx];
//         idx++;
//       }
//     }

//     // 다 쌓은 결과를 토대로
//     if (cur === '..') {
//       if (stack.length > 0) stack.pop();
//     } else if (cur[0] !== '/' && cur !== '.') {
//       stack.push(cur);
//     }
//   }
//   const answer = stack.join('/');
//   return '/' + answer;
// };
// ```
