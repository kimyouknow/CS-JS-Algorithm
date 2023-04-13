function solution(n, computers) {
  let arr = Array.from({ length: n }, (x, i) => i);

  const getParent = (x) => {
    if (arr[x] === x) return x;
    else return getParent(arr[x]);
  };

  const union = (x, y) => {
    const px = getParent(x);
    const py = getParent(y);
    if (px < py) {
      arr[py] = px;
    } else {
      arr[px] = py;
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i === j) continue;
      if (computers[i][j] === 1) {
        union(i, j);
      }
    }
  }
  arr = arr.map(getParent);
  const answer = [...new Set(arr)].length;
  return answer;
}
