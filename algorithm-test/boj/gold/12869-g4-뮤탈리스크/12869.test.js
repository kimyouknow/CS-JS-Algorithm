const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map((v) => +v));

describe('12869-g4-뮤탈리스크 tester', () => {
  it('1', () => {
    const ex1 = parser('3\n12 10 4');
    expect(solution(ex1)).toBe(2);
  });
  it('2', () => {
    const ex2 = parser('3\n54 18 6');
    expect(solution(ex2)).toBe(6);
  });
  it('3', () => {
    const ex3 = parser('1\n60');
    expect(solution(ex3)).toBe(7);
  });
  it('4', () => {
    const ex4 = parser('3\n1 1 1');
    expect(solution(ex4)).toBe(1);
  });
  it('5', () => {
    const ex5 = parser('2\n60 40');
    expect(solution(ex5)).toBe(9);
  });
  it('6', () => {
    const ex5 = parser('3\n8 8 8');
    expect(solution(ex5)).toBe(3);
  });
});
