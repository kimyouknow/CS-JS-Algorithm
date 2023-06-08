const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('12919-g5-A와B2 tester', () => {
  it('1', () => {
    const ex1 = parser('A\nBABA');
    expect(solution(ex1)).toBe(1);
  });
  it('2', () => {
    const ex2 = parser('BAAAAABAA\nBAABAAAAAB');
    expect(solution(ex2)).toBe(1);
  });
  it('3', () => {
    const ex3 = parser('A\nABBA');
    expect(solution(ex3)).toBe(0);
  });
});
