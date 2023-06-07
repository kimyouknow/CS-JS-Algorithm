const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map((v) => +v));

describe('14567-g5-선수과목 tester', () => {
  it('1', () => {
    const ex1 = parser('6 4\n1 2\n1 3\n2 5');
    expect(solution(ex1)).toBe('1 2 2 1 3 1');
  });
  it('2', () => {
    const ex1 = parser('3 2\n2 3\n1 2');
    expect(solution(ex1)).toBe('1 2 3');
  });
  it('n === 1, m === 0', () => {
    const ex1 = parser('1 0\n1 1');
    expect(solution(ex1)).toBe('1');
  });
});
