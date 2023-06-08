const compareOneLetter = (origin, compare, idx) => {
  let isRestSame = true;
  if (origin[idx] === compare[idx]) return false;

  for (let i = 0; i < origin.length; i++) {
    if (i === idx) continue;
    if (origin[i] !== compare[i]) isRestSame = false;
  }
  return isRestSame;
};

function solution(begin, target, words) {
  let answer = 0;
  const queue = [];
  const n = begin.length;
  queue.push([0, begin]);
  const found = words.find((word) => word === target);
  while (found && queue.length > 0) {
    const [count, current] = queue.shift();
    if (current === target) {
      answer = count;
      break;
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < words.length; j++) {
        if (compareOneLetter(current, words[j], i)) {
          queue.push([count + 1, words[j]]);
        }
      }
    }
  }

  return answer;
}
