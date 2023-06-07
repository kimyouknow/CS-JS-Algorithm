// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function(board) {
//     const n = 9
//     const visitedRow = Array.from({length: n}, () => false)
//     const visitedCol = Array.from({length: n}, () => false)
//     const visitedBox = Array.from({length: n}, () => false)

//     const checkRow = (r) => {
//         if(visitedRow[r]) return true
//         visitedRow[r] = true
//         const visited = {}
//         for(let i = 0; i < n;i++){
//             if(visited[board[r][i]] && board[r][i] !== ".") return false
//             visited[board[r][i]] = true
//         }
//         return true
//     }
//     const checkCol = (c) => {
//         if(visitedCol[c]) return true
//         visitedCol[c] = true
//         const visited = {}
//         for(let i = 0; i < n;i++){
//             if(visited[board[i][c]] && board[i][c] !== ".") return false
//             visited[board[i][c]] = true
//         }
//         return true
//     }
//     const checkBox = (r,c) => {
//         const idx = Math.floor(r / 3) * 3 + Math.floor(c / 3)
//         if(visitedBox[idx]) return true
//         visitedBox[idx] = true
//         const visited = {}
//         for(let i = 0; i < n / 3;i++){
//            for(let j = 0; j < n / 3;j++){
//                 if(visited[board[i + r][j + c]] && board[i+r][j+c] !== ".") return false
//                 visited[board[i + r][j + c]] = true
//            }
//         }
//         return true
//     }

//     for(let i = 0; i < n;i++){
//         if(!checkRow(i)) return false
//         for(let j = 0; j < n;j++){
//             if(!checkCol(j)) return false
//             if(!checkBox(i,j)) return false
//         }
//     }
//     return true
// };

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const n = 9;
  const rows = Array.from({ length: n }, () => new Set());
  const cols = Array.from({ length: n }, () => new Set());
  const boxes = Array.from({ length: n }, () => new Set());

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const cur = board[i][j];
      if (cur === '.') continue;
      const idx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (rows[i].has(cur) || cols[j].has(cur) || boxes[idx].has(cur)) return false;
      rows[i].add(cur);
      cols[j].add(cur);
      boxes[idx].add(cur);
    }
  }
  return true;
};

// read

// valid rule
// - row: 1 - 9
// - col: 1 - 9
// - 3 * 3: 1 - 9

// sol1: 완탐: 25m

// cur = board[r][c]
// - visitedRow[r]
// - visitedCol[c]
// - visitedBox[r + c / 2]
// - checkRow
// - checkCol
// - checkBox
