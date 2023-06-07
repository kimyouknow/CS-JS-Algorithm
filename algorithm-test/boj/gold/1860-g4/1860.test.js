const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('1860-g4 tester', () => {
  it('1', () => {
    const ex1 = parser('10 15\n5 1 3 5 10 7 4 9 2 8');
    expect(solution(ex1)).toBe(2);
  });
  it('2', () => {
    const ex1 = parser('10 5\n5 5 5 5 5 5 5 5 5 5');
    expect(solution(ex1)).toBe(1);
  });
  it('3', () => {
    const ex1 = parser('10 500\n5 1 3 5 10 7 4 9 2 8');
    expect(solution(ex1)).toBe(0);
  });
  it('4', () => {
    const ex1 = parser('10 55\n1 2 3 4 5 6 7 8 9 10');
    expect(solution(ex1)).toBe(10);
  });
  it('5', () => {
    const ex1 = parser('10 45\n1 2 3 4 5 6 7 8 9 10');
    expect(solution(ex1)).toBe(6);
  });
  it('6', () => {
    const ex1 = parser('10 10\n1 1 1 1 1 1 1 1 1 10');
    expect(solution(ex1)).toBe(1);
  });
});
