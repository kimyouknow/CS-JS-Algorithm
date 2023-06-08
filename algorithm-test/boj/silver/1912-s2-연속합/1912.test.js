const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map((v) => +v));

describe('1912-s2-연속합 tester', () => {
  it('1', () => {
    const ex1 = parser('10\n2 1 -4 3 4 -4 6 5 -5 1');
    expect(solution(ex1)).toBe(14);
  });
  it('2', () => {
    const ex2 = parser('10\n10 -4 3 1 5 6 -35 12 21 -1');
    expect(solution(ex2)).toBe(33);
  });
  it('3', () => {
    const ex3 = parser('5\n-1 -2 -3 -4 -5');
    expect(solution(ex3)).toBe(-1);
  });
  it('4', () => {
    const ex4 = parser('1\n-1');
    expect(solution(ex4)).toBe(-1);
  });
});
