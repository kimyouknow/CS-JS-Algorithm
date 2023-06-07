const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map((e) => +e));

describe('2470-g5 tester', () => {
  it('1', () => {
    const ex1 = parser('5\n-2 4 -99 98 -1');
    expect(solution(ex1)).toBe('-99 98');
  });
  it('2', () => {
    const ex1 = parser('6\n-2 4 -99 110 105 -1');
    expect(solution(ex1)).toBe('-2 4');
  });
  it('3', () => {
    const ex1 = parser('6\n-2 10 -99 110 105 -1');
    expect(solution(ex1)).toBe('-2 -1');
  });
});
