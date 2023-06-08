const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('17140-g5.이차원배열과연산 tester', () => {
  it('1', () => {
    const ex1 = parser('1 2 2\n1 2 1\n2 1 3\n3 3 3');
    expect(solution(ex1)).toBe(0);
  });
  it('2', () => {
    const ex2 = parser('1 2 1\n1 2 1\n2 1 3\n3 3 3');
    expect(solution(ex2)).toBe(1);
  });
  it('3', () => {
    const ex3 = parser('1 2 3\n1 2 1\n2 1 3\n3 3 3');
    expect(solution(ex3)).toBe(2);
  });
  it('4', () => {
    const ex4 = parser('1 2 4\n1 2 1\n2 1 3\n3 3 3');
    expect(solution(ex4)).toBe(52);
  });
  it('5', () => {
    const ex5 = parser('1 2 5\n1 2 1\n2 1 3\n3 3 3');
    expect(solution(ex5)).toBe(-1);
  });
  it('6', () => {
    const ex5 = parser('3 3 3\n1 1 1\n1 1 1\n1 1 1');
    expect(solution(ex5)).toBe(2);
  });
});
