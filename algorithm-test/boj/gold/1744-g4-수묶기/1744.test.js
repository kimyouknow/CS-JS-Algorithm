const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => +v);

describe('1744-g4-수묶기 tester', () => {
  it('1', () => {
    const ex1 = parser('8\n-3\n-5\n-1\n0\n2\n1\n3');
    expect(solution(ex1)).toBe(22);
  });
  it('2', () => {
    const ex2 = parser('4\n-1\n2\n1\n3');
    expect(solution(ex2)).toBe(6);
  });
  it('3', () => {
    const ex3 = parser('6\n0\n1\n2\n4\n3\n5');
    expect(solution(ex3)).toBe(27);
  });
  it('4', () => {
    const ex4 = parser('1\n-1');
    expect(solution(ex4)).toBe(-1);
  });
  it('5', () => {
    const ex5 = parser('3\n-1\n0\n1');
    expect(solution(ex5)).toBe(1);
  });
  it('6', () => {
    const ex6 = parser('2\n1\n1');
    expect(solution(ex6)).toBe(2);
  });
  it('7', () => {
    const ex1 = parser('10\n-3\n-5\n-1\n-1\n1\n0\n2\n1\n3');
    expect(solution(ex1)).toBe(24);
  });
  it('8', () => {
    const ex2 = parser('7\n0\n1\n2\n2\n3\n4\n5');
    expect(solution(ex2)).toBe(29);
  });
});
