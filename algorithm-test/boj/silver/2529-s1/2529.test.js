const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('2529-s1 tester', () => {
  it('1', () => {
    const ex1 = parser('2\n< >');
    expect(solution(ex1)).toBe('897\n021');
  });
  it('2', () => {
    const ex1 = parser('9\n> < < < > > > < <');
    expect(solution(ex1)).toBe('9567843012\n1023765489');
  });
});
