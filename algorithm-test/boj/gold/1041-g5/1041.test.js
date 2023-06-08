const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('1041-g5 tester', () => {
  it('1', () => {
    const ex1 = parser('1\n1 2 3 4 5 6');
    expect(solution(ex1)).toBe(15);
  });
  it('2', () => {
    const ex2 = parser('2\n1 2 3 4 5 6');
    expect(solution(ex2)).toBe(36);
  });
  it('3', () => {
    const ex3 = parser('3\n1 2 3 4 5 6');
    expect(solution(ex3)).toBe(69);
  });
  it('4', () => {
    const ex4 = parser('1000000\n50 50 50 50 50 50');
    expect(solution(ex4)).toBe(250000000000000);
  });
  it('5', () => {
    const ex5 = parser('10\n1 1 1 1 50 1');
    expect(solution(ex5)).toBe(500);
  });
  it('6', () => {
    const ex2 = parser('6\n3 6 26 45 10 17');
    expect(solution(ex2)).toBe(752);
  });
});
