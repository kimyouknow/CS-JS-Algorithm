const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split(' ')
    .map((v) => +v);

describe('14395-g5-4연산 tester', () => {
  it('1', () => {
    const ex1 = parser('7 392');
    expect(solution(ex1)).toBe('+*+');
  });
  it('2', () => {
    const ex2 = parser('7 256');
    expect(solution(ex2)).toBe('/+***');
  });
  it('3', () => {
    const ex3 = parser('4 256');
    expect(solution(ex3)).toBe('**');
  });
  it('4', () => {
    const ex4 = parser('7 7');
    expect(solution(ex4)).toBe(0);
  });
  it('5', () => {
    const ex5 = parser('7 9');
    expect(solution(ex5)).toBe('-1');
  });
  it('6', () => {
    const ex6 = parser('10 1');
    expect(solution(ex6)).toBe('/');
  });
});
