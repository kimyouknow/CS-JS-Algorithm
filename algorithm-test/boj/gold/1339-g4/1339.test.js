const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('1339-g4 tester', () => {
  it('1', () => {
    const ex1 = parser('2\nAAA\nAAA');
    expect(solution(ex1)).toBe(1998);
  });
  it('2', () => {
    const ex1 = parser('2\nGCF\nACDEB');
    expect(solution(ex1)).toBe(99437);
  });
  it('3', () => {
    const ex1 = parser('10\nA\nB\nC\nD\nE\nF\nG\nH\nI\nJ');
    expect(solution(ex1)).toBe(45);
  });
  it('4', () => {
    const ex1 = parser('2\nAB\nBA');
    expect(solution(ex1)).toBe(187);
  });
});
