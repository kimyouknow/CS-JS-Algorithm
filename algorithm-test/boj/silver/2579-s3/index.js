const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

const solution = (inputs) => {
  const [length, ...arr] = inputs.map((v) => +v);
  const memo = Array(301).fill(0);
  const stairs = [...arr];
  memo[0] = stairs[0];
  memo[1] = Math.max(stairs[0] + stairs[1], stairs[1]);
  memo[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);
  for (let i = 3; i < length; i++) {
    memo[i] = Math.max(
      memo[i - 2] + stairs[i],
      stairs[i - 1] + stairs[i] + memo[i - 3]
    );
  }
  const answer = memo[length - 1];
  return answer;
};

module.exports = { solution };
