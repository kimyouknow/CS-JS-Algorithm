const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('1932-s1-정수삼각형 tester', () => {
  it('1', () => {
    const ex1 = parser('5\n7\n3 8\n8 1 0\n2 7 4 4\n4 5 2 6 5');
    expect(solution(ex1)).toBe(30);
  });
  it('2', () => {
    const ex1 = parser('1\n7');
    expect(solution(ex1)).toBe(7);
  });
  it('3', () => {
    const ex1 = parser('2\n7\n1 3');
    expect(solution(ex1)).toBe(10);
  });
});
