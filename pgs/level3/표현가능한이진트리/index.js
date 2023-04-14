const convertToBinary = (n) => {
  let res = '';
  let next = n;
  while (next > 0) {
    res = String(next % 2) + res;
    next = Math.floor(next / 2);
  }
  return res;
};

function solution(numbers) {
  const max = 10 ^ 15;
  const binaryMax = convertToBinary(max);

  const getLens = () => {
    const res = [];
    const dfs = (i, acc) => {
      if (acc >= binaryMax) return;
      if (acc !== 0) {
        res.push(acc);
      }
      dfs(i + 1, acc + 2 ** i);
    };
    dfs(0, 0);
    return res;
  };

  const lens = getLens();

  const addZero = (binary) => {
    const len = binary.length;
    const zero = '0';
    for (let i = 0; i < lens.length; i++) {
      if (lens[i] >= len) {
        binary = zero.repeat(lens[i] - len) + binary;
        break;
      }
    }
    return binary;
  };

  const binaryDfs = (binary) => {
    const len = binary.length;
    const mid = Math.floor(len / 2);

    if (binary[mid] === '0') {
      if (!binary.split('').every((v) => v === '0')) return false;
    }

    if (len === 1) {
      return true;
    }

    const left = binaryDfs(binary.slice(0, mid));
    const center = binary[mid];
    const right = binaryDfs(binary.slice(mid + 1, len));

    return left && right;
  };

  const checkIsBinaryTree = (n) => {
    if (n === 1) return 1;
    let binary = convertToBinary(n);
    binary = addZero(binary);
    const flag = binaryDfs(binary);
    return flag ? 1 : 0;
  };

  const answer = numbers.map(checkIsBinaryTree);

  return answer;
}
