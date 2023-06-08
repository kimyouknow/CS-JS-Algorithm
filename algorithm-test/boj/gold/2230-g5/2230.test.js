const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('2230-g5 tester', () => {
  it('1', () => {
    const ex1 = parser('3 3\n1\n5\n3');
    expect(solution(ex1)).toBe(4);
  });
  it('2', () => {
    const ex1 = parser('3 2\n1\n5\n3');
    expect(solution(ex1)).toBe(2);
  });
  it('3', () => {
    const ex1 = parser('5 3\n1\n5\n10\n4\n11');
    expect(solution(ex1)).toBe(3);
  });
  it('4', () => {
    const ex1 = parser('5 7\n1\n5\n10\n4\n11');
    expect(solution(ex1)).toBe(7);
  });
  it('5', () => {
    const ex1 = parser('1 0\n7');
    expect(solution(ex1)).toBe(0);
  });
  it('6', () => {
    const ex1 = parser('5 6\n1\n2\n3\n4\n11');
    expect(solution(ex1)).toBe(7);
  });
  it('7', () => {
    const ex1 = parser('5 2\n-11\n-8\n-5\n-3\n-1');
    expect(solution(ex1)).toBe(2);
  });
});
