const { solution } = require('./index');

describe('1644-g4 tester', () => {
  it('1', () => {
    expect(solution(20)).toBe(0);
  });
  it('2', () => {
    expect(solution(3)).toBe(1);
  });
  it('3', () => {
    expect(solution(41)).toBe(3);
  });
  it('4', () => {
    expect(solution(53)).toBe(2);
  });
  it('5', () => {
    expect(solution(1)).toBe(0);
  });
  it('6', () => {
    expect(solution(4_000_000)).toBe(1);
  });
});
