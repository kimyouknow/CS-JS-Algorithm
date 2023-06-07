const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('11048-s2 tester', () => {
  it('1', () => {
    const ex1 = parser('3 4\n1 2 3 4\n0 0 0 5\n9 8 7 6');
    expect(solution(ex1)).toBe(31);
  });
  it('2', () => {
    const ex1 = parser('3 3\n1 0 0\n0 1 0\n0 0 1');
    expect(solution(ex1)).toBe(3);
  });
  it('3', () => {
    const ex1 = parser('4 3\n1 2 3\n6 5 4\n7 8 9\n12 11 10');
    expect(solution(ex1)).toBe(47);
  });
  it('4', () => {
    const ex1 = parser('1 1\n1');
    expect(solution(ex1)).toBe(1);
  });
  it('5', () => {
    const ex1 = parser('1 3\n1 2 3 ');
    expect(solution(ex1)).toBe(6);
  });
  it('6', () => {
    const ex1 = parser('3 1\n1\n2\n3');
    expect(solution(ex1)).toBe(6);
  });
});
