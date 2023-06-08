const path = require('path');
const fs = require('fs');
const { solution } = require('./index');

describe('tester', () => {
  let inputs;
  let arr;
  let idx = 1;
  beforeEach(() => {
    const [targetInputs, ...targetArr] = fs
      .readFileSync(path.resolve(__dirname, `../1018-s4/${idx}.txt`))
      .toString()
      .trim()
      .split('\n');
    inputs = targetInputs;
    arr = targetArr;
    idx++;
  });
  it('1', () => {
    expect(solution(inputs, arr)).toBe(1);
  });
  it('2', () => {
    expect(solution(inputs, arr)).toBe(12);
  });
  it('3', () => {
    expect(solution(inputs, arr)).toBe(0);
  });
  it('4', () => {
    expect(solution(inputs, arr)).toBe(31);
  });
  it('5', () => {
    expect(solution(inputs, arr)).toBe(0);
  });
  it('6', () => {
    expect(solution(inputs, arr)).toBe(2);
  });
  it('7', () => {
    expect(solution(inputs, arr)).toBe(15);
  });
});
