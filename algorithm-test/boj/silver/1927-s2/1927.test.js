const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => +v);

describe('1927-s2 tester', () => {
  it('1', () => {
    const ex1 = parser('9\n3\n2\n5\n1\n6\n0\n4\n0\n0');
    expect(solution(ex1)).toBe('1\n2\n3');
  });
  it('2', () => {
    const ex1 = parser('9\n3\n0\n0\n1\n6\n0\n4\n0\n0');
    expect(solution(ex1)).toBe('3\n0\n1\n4\n6');
  });
});
