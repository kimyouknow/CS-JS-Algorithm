const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('16929-g4 tester', () => {
  it('1', () => {
    const ex1 = parser('3 4\nAAAA\nABCA\nAAAA');
    expect(solution(ex1)).toBe('Yes');
  });
  it('2', () => {
    const ex1 = parser('3 4\nAAAA\nABCA\nAADA');
    expect(solution(ex1)).toBe('No');
  });
  it('3', () => {
    const ex1 = parser('4 4\nYYYR\nBYBY\nBBBY\nBBBY');
    expect(solution(ex1)).toBe('Yes');
  });
  it('4', () => {
    const ex1 = parser('2 2\nAA\nAA');
    expect(solution(ex1)).toBe('Yes');
  });
});
