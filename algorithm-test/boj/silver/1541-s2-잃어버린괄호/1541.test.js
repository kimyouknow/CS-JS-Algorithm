const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim();

describe('1541-s2-잃어버린괄호 tester', () => {
  it('1', () => {
    const ex1 = parser('55-50+40');
    expect(solution(ex1)).toBe(-35);
  });
  it('2', () => {
    const ex2 = parser('10+20+30+40');
    expect(solution(ex2)).toBe(100);
  });
  it('3', () => {
    const ex3 = parser('00009-00009');
    expect(solution(ex3)).toBe(0);
  });
  it('4', () => {
    const ex4 = parser('55-50+40-30+10');
    expect(solution(ex4)).toBe(-75);
  });
});
