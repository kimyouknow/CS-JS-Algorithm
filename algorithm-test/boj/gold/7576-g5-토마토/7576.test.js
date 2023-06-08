const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('7576-g5-토마토 tester', () => {
  it('1', () => {
    const ex1 = parser('6 4\n0 0 0 0 0 0\n0 0 0 0 0 0\n0 0 0 0 0 0\n0 0 0 0 0 1');
    expect(solution(ex1)).toBe(8);
  });
  it('2', () => {
    const ex1 = parser('6 4\n0 -1 0 0 0 0\n-1 0 0 0 0 0\n0 0 0 0 0 0\n0 0 0 0 0 1');
    expect(solution(ex1)).toBe(-1);
  });
  it('3', () => {
    const ex1 = parser('6 4\n1 -1 0 0 0 0\n0 -1 0 0 0 0\n0 0 0 0 -1 0\n0 0 0 0 -1 1');
    expect(solution(ex1)).toBe(6);
  });
  it('4', () => {
    const ex1 = parser('5 5\n-1 1 0 0 0\n0 -1 -1 -1 0\n0 -1 -1 -1 0\n0 -1 -1 -1 0\n0 0 0 0 0');
    expect(solution(ex1)).toBe(14);
  });
  it('5', () => {
    const ex1 = parser('2 2\n1 -1\n-1 1');
    expect(solution(ex1)).toBe(0);
  });
  it('6', () => {
    const ex1 = parser('2 2\n0 0\n0 0');
    expect(solution(ex1)).toBe(-1);
  });
  it('7', () => {
    const ex1 = parser('2 2\n1 1\n1 1');
    expect(solution(ex1)).toBe(0);
  });
  it('8', () => {
    const ex1 = parser('3 3\n1 1 1\n1 1 -1\n0 -1 0');
    expect(solution(ex1)).toBe(-1);
  });
  it('9', () => {
    const ex1 = parser('3 3\n1 1 1\n1 1 -1\n0 -1 0');
    expect(solution(ex1)).toBe(-1);
  });
});
