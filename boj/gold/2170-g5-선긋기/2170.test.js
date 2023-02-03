const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('2170-g5-선긋기 tester', () => {
  it('1', () => {
    const ex1 = parser('4\n1 3\n2 5\n3 5\n6 7');
    expect(solution(ex1)).toBe(5);
  });
  it('2', () => {
    const ex1 = parser('4\n-1 3\n2 5\n-3 1\n-1 0');
    expect(solution(ex1)).toBe(8);
  });
  it('3', () => {
    const ex1 = parser('4\n3 4\n1 2\n-3 -1\n-5 -4');
    expect(solution(ex1)).toBe(5);
  });
  it('4', () => {
    const ex1 = parser('1\n3 4');
    expect(solution(ex1)).toBe(1);
  });
  it('5', () => {
    const ex1 = parser('1\n-1000000000 1000000000');
    expect(solution(ex1)).toBe(2_000_000_000);
  });
  it('6', () => {
    const ex1 = parser('4\n-1 3\n-2 5\n-3 1\n-1 0');
    expect(solution(ex1)).toBe(8);
  });
});
