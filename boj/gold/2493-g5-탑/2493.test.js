const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('2493-g4-탑 tester', () => {
  it('1', () => {
    const ex1 = parser('5\n6 9 5 7 4');
    expect(solution(ex1)).toBe('0 0 2 2 4');
  });
  it('2', () => {
    const ex1 = parser('5\n6 9 5 1 4');
    expect(solution(ex1)).toBe('0 0 2 3 3');
  });
  it('3', () => {
    const ex1 = parser('8\n4 10 1 2 3 5 6 9');
    expect(solution(ex1)).toBe('0 0 2 2 2 2 2 2');
  });
  it('4', () => {
    const ex1 = parser('1\n1');
    expect(solution(ex1)).toBe('0');
  });
  it('5', () => {
    const ex1 = parser('4\n1 2 3 4');
    expect(solution(ex1)).toBe('0 0 0 0');
  });
});
