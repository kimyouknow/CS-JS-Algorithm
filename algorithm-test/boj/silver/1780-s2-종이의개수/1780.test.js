const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('1780-s2-종이의개수 tester', () => {
  it('1', () => {
    const ex1 = parser(
      '9\n0 0 0 1 1 1 -1 -1 -1\n0 0 0 1 1 1 -1 -1 -1\n0 0 0 1 1 1 -1 -1 -1\n1 1 1 0 0 0 0 0 0\n1 1 1 0 0 0 0 0 0\n1 1 1 0 0 0 0 0 0\n0 1 -1 0 1 -1 0 1 -1\n0 -1 1 0 1 -1 0 1 -1\n0 1 -1 1 0 -1 0 1 -1'
    );
    expect(solution(ex1)).toBe('10\n12\n11');
  });
  it('2', () => {
    const ex1 = parser('3\n0 0 0\n0 0 0\n0 0 0');
    expect(solution(ex1)).toBe('0\n1\n0');
  });
  it('3', () => {
    const ex1 = parser('1\n0');
    expect(solution(ex1)).toBe('0\n1\n0');
  });
  it('3', () => {
    const ex1 = parser('3\n1 1 0\n1 1 0\n0 0 0');
    expect(solution(ex1)).toBe('0\n5\n4');
  });
});
