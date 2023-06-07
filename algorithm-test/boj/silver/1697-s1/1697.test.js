const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split(' ')
    .map((v) => +v);

describe('1697-s1 tester', () => {
  it('1', () => {
    const ex1 = parser('5 17');
    expect(solution(ex1)).toBe(4);
  });
  it('2', () => {
    const ex1 = parser('0 0');
    expect(solution(ex1)).toBe(0);
  });
  it('3', () => {
    const ex1 = parser('3 3');
    expect(solution(ex1)).toBe(0);
  });
});
