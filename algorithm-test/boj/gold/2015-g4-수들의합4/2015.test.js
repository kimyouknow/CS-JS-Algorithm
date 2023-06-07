const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('2015-g4-수들의합4 tester', () => {
  it('1', () => {
    const ex1 = parser('4 0\n2 -2 2 -2');
    expect(solution(ex1)).toBe(4);
  });
  it('2', () => {
    const ex2 = parser('6 5\n1 2 3 4 5 0');
    expect(solution(ex2)).toBe(3);
  });
  it('모두 0일 떼,', () => {
    const ex3 = parser('3 0\n0 0 0');
    expect(solution(ex3)).toBe(6);
  });
});
