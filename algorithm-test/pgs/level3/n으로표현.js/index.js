const operations = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => Math.floor(a / b),
  (a, b) => Number(String(a) + String(b)),
];

const operationsLength = operations.length;

function solution(n, number) {
  let answer = 9;
  function recursion(acc, idx) {
    if (idx > 8) {
      return -1;
    }
    if (acc === number) {
      if (answer <= idx) {
        console.log('acc', acc, answer);
        return answer;
      }
      answer = idx;
    }
    for (let i = 0; i < operationsLength; i++) {
      const res = operations[i](acc, n);
      recursion(res, idx + 1);
    }
    return acc;
  }

  const res = recursion(n, 1);
  console.log('res', res);
  return res;
}

const answer = solution(5, 12);
console.log('answer: ', 4);
console.log('res: ', answer);
