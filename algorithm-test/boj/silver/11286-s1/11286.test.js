const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => +v);

describe('11286-s1 tester', () => {
  it('1', () => {
    const ex1 = parser('18\n1\n-1\n0\n0\n0\n1\n1\n-1\n-1\n2\n-2\n0\n0\n0\n0\n0\n0\n0');
    expect(solution(ex1)).toBe('-1\n1\n0\n-1\n-1\n1\n1\n-2\n2\n0');
  });
  it('2', () => {
    const ex1 = parser('20\n-1\n5\n2\n-2\n4\n3\n1\n5\n-4\n-3\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n');
    expect(solution(ex1)).toBe('-1\n1\n-2\n2\n-3\n3\n-4\n4\n-5\n5');
  });
});
