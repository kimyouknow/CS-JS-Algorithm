const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' '));

describe('1693-g4 tester', () => {
  it('1', () => {
    const ex1 = parser('3\n1033 8179\n1373 8017\n1033 1033');
    expect(solution(ex1)).toBe('6\n7\n0');
  });
});
