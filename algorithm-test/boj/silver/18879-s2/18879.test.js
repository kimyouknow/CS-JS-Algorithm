const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('18879-s2 tester', () => {
  it('1', () => {
    const ex1 = parser('5\n2 4 -10 4 -9');
    expect(solution(ex1)).toBe('2 3 0 3 1');
  });
  it('2', () => {
    const ex1 = parser('6\n1000 999 1000 999 1000 999');
    expect(solution(ex1)).toBe('1 0 1 0 1 0');
  });
});
