const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../15686-g5-치킨배달/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => +v));

const solution = (rawInputs) => {
  const [[n, m], ...arr] = rawInputs;
  let answer = Number.MAX_SAFE_INTEGER;

  const chickens = [];
  const houses = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 2) {
        chickens.push([i, j]);
        continue;
      }
      if (arr[i][j] === 1) {
        houses.push([i, j]);
        continue;
      }
    }
  }

  const getLength = (house, chicken) =>
    Math.abs(house[0] - chicken[0]) + Math.abs(house[1] - chicken[1]);

  const getChickenCityLength = (arr) =>
    houses.reduce((acc, house) => {
      const min = arr.reduce((acc, chicken) => {
        const res = getLength(house, chicken);
        if (res <= acc) return res;
        else return acc;
      }, Number.MAX_SAFE_INTEGER);
      return acc + min;
    }, 0);

  const dfs = (idx, acc) => {
    if (acc.length === m) {
      const res = getChickenCityLength(acc);
      if (res <= answer) {
        answer = res;
      }
      return;
    }

    for (let i = idx + 1; i < chickens.length; i++) {
      dfs(i, [...acc, chickens[i]]);
    }
  };

  dfs(-1, []);

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
