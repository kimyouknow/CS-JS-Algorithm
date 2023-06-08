const { solution } = require('./index');

const parser = (arr) => arr.toString().trim().split('\n');

describe('tester', () => {
  it('1', () => {
    const ex1 = parser('6\n10\n20\n15\n25\n10\n20');
    expect(solution(ex1)).toBe(75);
  });
  it('2', () => {
    const ex1 = parser('2\n10\n20');
    expect(solution(ex1)).toBe(30);
  });
  it('3', () => {
    const ex1 = parser('1\n10');
    expect(solution(ex1)).toBe(10);
  });
  it('3', () => {
    const ex1 = parser('3\n1\n100\n2');
    expect(solution(ex1)).toBe(102);
  });
});
