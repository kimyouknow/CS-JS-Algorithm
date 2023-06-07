const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../14981-g5-톱니바퀴/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (rawInputs) => {
  let wheels = rawInputs.slice(0, 4).map((e) => e.split('').map((v) => +v));
  const k = Number(rawInputs[4]);
  const inputs = rawInputs.slice(5).map((e) => e.split(' ').map((v) => +v));

  const getWheelDirection = (idx, dr) => {
    let r = idx;
    let l = idx;
    const wheelDr = Array(4).fill(0);
    wheelDr[idx] = dr;
    while (r < 3) {
      if (wheels[r][2] !== wheels[r + 1][6])
        wheelDr[r + 1] = wheelDr[r] === 0 ? 0 : wheelDr[r] * -1;
      r++;
    }
    while (l >= 1) {
      if (wheels[l][6] !== wheels[l - 1][2])
        wheelDr[l - 1] = wheelDr[l] === 0 ? 0 : wheelDr[l] * -1;
      l--;
    }
    return wheelDr;
  };

  const rotateWheel = (wheel, dr) => {
    const res = [...wheel];
    if (dr === 1) {
      const temp = res[7];
      for (let i = 7; i > 0; i--) {
        res[i] = res[i - 1];
      }
      res[0] = temp;
    } else if (dr === -1) {
      const temp = res[0];
      for (let i = 0; i < 7; i++) {
        res[i] = res[i + 1];
      }
      res[7] = temp;
    }
    return res;
  };

  inputs.forEach(([target, dr]) => {
    const wheelDr = getWheelDirection(target - 1, dr);
    wheels = wheels.map((wheel, idx) => rotateWheel(wheel, wheelDr[idx]));
  });

  const answer = wheels.reduce((acc, cur, idx) => (cur[0] === 1 ? acc + 2 ** idx : acc), 0);
  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
