const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('1253-g4 tester', () => {
  it('1', () => {
    const ex1 = parser('10\n1 2 3 4 5 6 7 8 9 10');
    expect(solution(ex1)).toBe(8);
  });
  it('2', () => {
    const ex1 = parser('5\n2 3 100 101 201');
    expect(solution(ex1)).toBe(1);
  });
  it('3', () => {
    const ex1 = parser('5\n2 3 100 101 301');
    expect(solution(ex1)).toBe(0);
  });
});
