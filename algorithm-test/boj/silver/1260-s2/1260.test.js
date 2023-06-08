const path = require('path');
const fs = require('fs');
const { solution } = require('./index');

describe('tester', () => {
  let t;
  let arr;
  let idx = 1;
  beforeEach(() => {
    const [targetInputs, ...rest] = fs
      .readFileSync(path.resolve(__dirname, `../1260-s2/${idx}.txt`))
      .toString()
      .trim()
      .split('\n');
    t = targetInputs;
    arr = rest;
    idx++;
  });
  it('1', () => {
    expect(solution(t, arr)).toBe('1 2 4 3\n1 2 3 4');
  });
  it('2', () => {
    expect(solution(t, arr)).toBe('3 1 2 5 4\n3 1 4 2 5');
  });
  it('3', () => {
    expect(solution(t, arr)).toBe('1000 999\n1000 999');
  });
  it('4', () => {
    expect(solution(t, arr)).toBe('1 2 3 5 4\n1 2 3 4 5');
  });
});
