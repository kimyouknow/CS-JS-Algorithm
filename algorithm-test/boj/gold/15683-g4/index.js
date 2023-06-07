const path = require('path');
const fs = require('fs');
const [inputs, ...arr] = fs
  .readFileSync(path.resolve(__dirname, '../15683-g4/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (inputs, arr) => {
  const [N, M] = inputs.split(' ').map((v) => +v);
  const board = arr.map((element) => element.split(' ').map((v) => +v));
  // const cctvs = Array.from({ length: 6 }, () => []);
  const cctvs = [];
  let answer = 0;
  // 초기화
  for (let col = 0; col < N; col++) {
    for (let row = 0; row < M; row++) {
      switch (board[col][row]) {
        case 0:
          answer++;
          break;
        case 1:
          cctvs.push({ type: 1, col, row });
          break;
        case 2:
          cctvs.push({ type: 2, col, row });
          break;
        case 3:
          cctvs.push({ type: 3, col, row });
          break;
        case 4:
          cctvs.push({ type: 4, col, row });
          break;
        case 5:
          cctvs.push({ type: 5, col, row });
          break;
        default:
          break;
      }
    }
  }

  const isWall = (spot) => spot === 6;

  const checkRightBlindSpot = (col, row, targetBoard) => {
    let acc = 0;
    for (let r = row; r < M; r++) {
      if (isWall(targetBoard[col][r])) break;
      if (targetBoard[col][r] === 0) {
        targetBoard[col][r] = 9;
        acc++;
      }
    }
    return { acc, targetBoard };
  };

  const checkLeftBlinSpot = (col, row, targetBoard) => {
    let acc = 0;
    for (let r = row; r >= 0; r--) {
      if (isWall(targetBoard[col][r])) break;
      if (targetBoard[col][r] === 0) {
        targetBoard[col][r] = 9;
        acc++;
      }
    }
    return { acc, targetBoard };
  };

  const checkDownBlindSpot = (col, row, targetBoard) => {
    let acc = 0;
    for (let c = col; c < M; c++) {
      if (isWall(targetBoard[c][row])) break;
      if (targetBoard[c][row] === 0) {
        targetBoard[c][row] = 9;
        acc++;
      }
    }
    return { acc, targetBoard };
  };

  const checkUpBlindSpot = (col, row, targetBoard) => {
    let acc = 0;
    for (let c = col; c >= 0; c--) {
      if (isWall(targetBoard[c][row])) break;
      if (targetBoard[c][row] === 0) {
        targetBoard[c][row] = 9;
        acc++;
      }
    }
    return { acc, targetBoard };
  };

  let max = 0;
  const recursion = (idx, fillSpot, accBoard) => {
    if (idx >= cctvs.length) {
      if (max <= fillSpot) max = fillSpot;
      return;
    }
    const { type, col, row } = cctvs[idx];
    let targetBoard = accBoard.map((v) => [...v]);
    if (type === 5) {
      const right = checkRightBlindSpot(col, row, targetBoard);
      const left = checkLeftBlinSpot(col, row, right.targetBoard);
      const down = checkDownBlindSpot(col, row, left.targetBoard);
      const up = checkUpBlindSpot(col, row, down.targetBoard);
      const newAcc = right.acc + left.acc + down.acc + up.acc + fillSpot;
      recursion(idx + 1, newAcc, up.targetBoard);
    }
    if (type === 2) {
      // 상하
      const down = checkDownBlindSpot(col, row, targetBoard);
      const up = checkUpBlindSpot(col, row, down.targetBoard);
      const colAcc = down.acc + up.acc + fillSpot;
      recursion(idx + 1, colAcc, up.targetBoard);
      // 좌우
      const right = checkRightBlindSpot(col, row, targetBoard);
      const left = checkLeftBlinSpot(col, row, right.targetBoard);
      const rowAcc = right.acc + left.acc + fillSpot;
      recursion(idx + 1, rowAcc, left.targetBoard);
    }
    if (type === 4 || type === 3 || type === 1) {
      // 위
      const nonUpright = checkRightBlindSpot(col, row, targetBoard);
      const nonUpleft = checkLeftBlinSpot(col, row, nonUpright.targetBoard);
      const nonUpdown = checkDownBlindSpot(col, row, nonUpleft.targetBoard);
      const nonUpAcc =
        nonUpright.acc + nonUpleft.acc + nonUpdown.acc + fillSpot;
      recursion(idx + 1, nonUpAcc, nonUpdown.targetBoard);
      // 아래
      const nonDownright = checkRightBlindSpot(col, row, targetBoard);
      const nonDownleft = checkLeftBlinSpot(col, row, nonDownright.targetBoard);
      const nonDownup = checkUpBlindSpot(col, row, nonDownleft.targetBoard);
      const nonDownAcc =
        nonDownright.acc + nonDownleft.acc + nonDownup.acc + fillSpot;
      recursion(idx + 1, nonDownAcc, nonDownup.targetBoard);
      // 좌
      const nonLeftright = checkRightBlindSpot(col, row, targetBoard);
      const nonLeftdown = checkDownBlindSpot(
        col,
        row,
        nonLeftright.targetBoard
      );
      const nonLeftup = checkUpBlindSpot(col, row, nonLeftdown.targetBoard);
      const nonLeftAcc =
        nonLeftright.acc + nonLeftdown.acc + nonLeftup.acc + fillSpot;
      recursion(idx + 1, nonLeftAcc, nonLeftup.targetBoard);
      // 우
      const nonRightleft = checkLeftBlinSpot(col, row, targetBoard);
      const nonRightdown = checkDownBlindSpot(
        col,
        row,
        nonRightleft.targetBoard
      );
      const nonRightup = checkUpBlindSpot(col, row, nonRightdown.targetBoard);
      const nonRightAcc =
        nonRightleft.acc + nonRightdown.acc + nonRightup.acc + fillSpot;
      recursion(idx + 1, nonRightAcc, nonRightup.targetBoard);
    }
  };

  recursion(0, 0, board);
  return max;
};

console.log(solution(inputs, arr));

module.exports = { solution };
