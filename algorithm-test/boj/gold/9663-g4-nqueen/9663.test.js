const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('9653-g4-nqueen tester', () => {
  it('1', () => {
    const ex1 = parser('8');
    expect(solution(ex1)).toBe(92);
  });
  it('2', () => {
    const ex1 = parser('3');
    expect(solution(ex1)).toBe(0);
  });
  it('3', () => {
    const ex1 = parser('1');
    expect(solution(ex1)).toBe(1);
  });
});
