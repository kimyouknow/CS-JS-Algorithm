/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const n = height.length;
  let l = 0;
  let r = n - 1;
  let answer = 0;
  while (l < r) {
    if (height[l] < height[r]) {
      answer = Math.max((r - l) * height[l], answer);
      l++;
    } else {
      answer = Math.max((r - l) * height[r], answer);
      r--;
    }
  }
  return answer;
};

// read

// 사각형의 넓이가 최대가 되려면 좌우 벽 사이가 가장 멀어야 함

// 전체 탐색 : O(n ^ 2)

// 풀이1: 12m

// 양 벽이 높을 수록, 서로 멀수록
// 양끝값부터 시작
// 좌우를 비교하면서 더 작은 값이면 안으로 한 칸 당기기
// 예외처리: 논리적인 증명을 하지 못함, 직관적으로 될 것 같다고 판단(다양한 경우의 테스트 케이스 생각해봄)
