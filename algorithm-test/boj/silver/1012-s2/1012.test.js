const path = require('path');
const fs = require('fs');
const { solution } = require('./index');

describe('tester', () => {
  let t;
  let arr;
  let idx = 1;
  beforeEach(() => {
    const [targetInputs, ...rest] = fs
      .readFileSync(path.resolve(__dirname, `../1012-s2/${idx}.txt`))
      .toString()
      .trim()
      .split('\n');
    t = targetInputs;
    arr = rest;
    idx++;
  });
  it('1', () => {
    expect(solution(t, arr)).toBe('5\n1');
  });
  it('2', () => {
    expect(solution(t, arr)).toBe('2');
  });
  it('3', () => {
    expect(solution(t, arr)).toBe('1');
  });
  it('4', () => {
    expect(solution(t, arr)).toBe('1');
  });
});
