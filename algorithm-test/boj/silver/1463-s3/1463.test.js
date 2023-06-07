const { solution } = require('./index');

describe('tester', () => {
  beforeEach(() => {});
  it('1', () => {
    expect(solution('2')).toBe(1);
  });
  it('2', () => {
    expect(solution('10')).toBe(3);
  });
  it('3', () => {
    expect(solution('100')).toBe(7);
  });
  it('4', () => {
    expect(solution('105')).toBe(8);
  });
  it('5', () => {
    expect(solution('1')).toBe(0);
  });
  it('6', () => {
    expect(solution('6')).toBe(2);
  });
});
