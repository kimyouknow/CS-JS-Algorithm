function getParent(arr, x) {
  if (arr[x] === x) return x;
  else return getParent(arr, arr[x]);
}

function union(arr, x, y) {
  const px = getParent(arr, x);
  const py = getParent(arr, y);
  if (px < py) {
    arr[py] = px;
  } else {
    arr[px] = py;
  }
}

function isSameParent(arr, x, y) {
  const px = getParent(arr, x);
  const py = getParent(arr, y);
  return px === py;
}

function solution(n, costs) {
  let answer = 0;
  let idx = 0;
  const arr = Array.from({ length: n }, (v, i) => i);
  const sorted = costs.sort((a, b) => a[2] - b[2]);
  for (const [a, b, c] of sorted) {
    // a,b가 같은 그룹이면 넘어가기
    if (isSameParent(arr, a, b)) continue;
    answer += c;
    union(arr, a, b);
    idx++;
    // a,b가 다른 그룹이라면 같은 그룹으로 만들고, 현재 선택한 간선을 최소신장트리에 추가
    if (idx === n - 1) {
      break;
    }
  }

  return answer;
}
