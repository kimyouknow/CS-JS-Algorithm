/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
  const sorted = clips.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  if (clips[0][0] !== 0) {
    return -1; //no clip starts from 0
  }
  let currEnd = 0;
  let count = 0;
  let nextEnd = 0;

  let i = 0;
  while (i < clips.length && clips[i][0] <= currEnd) {
    // 현재바라보고 있는 값 중에 최적의 값을 찾기
    while (i < clips.length && clips[i][0] <= currEnd) {
      nextEnd = Math.max(nextEnd, clips[i][1]);
      i++;
    }

    count++;
    currEnd = nextEnd;
    if (currEnd >= time) {
      return count;
    }
  }
  return -1;
  // const dp = Array.from({length: time + 1}, () => Number.MAX_SAFE_INTEGER)
  // dp[0] = 0;

  // for (let i = 1; i <= time; i++) {
  //     for (const [start, end] of clips) {
  //         if (start <= i && i <= end) {
  //             dp[i] = Math.min(dp[i], dp[start] + 1);
  //         }
  //     }
  // }

  // return dp[time] !== Number.MAX_SAFE_INTEGER ? dp[time] : -1;
};

// // read

// video = [start, end], 서로 겹칠 수 있음
// [start, end]를 자유롭게 잘라서 사용 가능
// 전체 스포츠 이벤트 [0, time]을 커버할 수 있도록 주어진 clips를 자르기 -> 최소한으로 선택하기

// sol: 스택 50m
// - s -> e순으로 정렬
// - 스택
// - 하나씩 탐색
// - 1번은 넣고 시작

// - stack[-1]의 s === target의 s => stack에서 하나 빼고 target넣기
// - stack[-1]의 e < target의 e
//     - stack[-1]의 e >= target의 s => stack에 넣기
// - stack[-1]의 e < target의 s => 다음 target으로 넘어가기

// [0,2],[1,5], [1,9], [4,6], [5,9], [8,10]
// [0, 1], [0, 2], [0, 3], [0, 4], [1, 3], [1, 4], [2, 5], [2, 6], [3, 4], [4, 5], [4, 7], [5, 6], [5, 7], [6, 7], [6, 8], [6, 9]
// error
// -> [ [ 0, 4 ], [ 2, 6 ], [ 4, 7 ], [ 6, 9 ] ]
// => stack에 넣으니까 [2,6]과 같이 사이에 포함되는 clip를 넣어버림

// sol3: 그리디 다른 사람 풀이 참고 50m

// 스택에 넣지말고 최적의 값을 찾아서 선택하기

// 최적의 값?
// -

// sol4: dp 다른 사람 풀이 참고
// time기준 dp
