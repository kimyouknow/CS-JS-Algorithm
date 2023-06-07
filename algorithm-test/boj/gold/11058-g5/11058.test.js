const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('11058-g5 tester', () => {
  it('1', () => {
    const ex1 = parser('3');
    expect(solution(ex1)).toBe(3);
  });
  it('2', () => {
    const ex1 = parser('7');
    expect(solution(ex1)).toBe(9);
  });
  it('3', () => {
    const ex1 = parser('11');
    expect(solution(ex1)).toBe(27);
  });
  it('4', () => {
    const ex1 = parser('10');
    expect(solution(ex1)).toBe(20);
  });
  it('5', () => {
    const ex1 = parser('8');
    expect(solution(ex1)).toBe(12);
  });
});
