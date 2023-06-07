const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('14888-s1 tester', () => {
  it('1', () => {
    const ex1 = parser('2\n5 6\n0 0 1 0');
    expect(solution(ex1)).toBe('30\n30');
  });
  it('2', () => {
    const ex1 = parser('3\n3 4 5\n1 0 1 0');
    expect(solution(ex1)).toBe('35\n17');
  });
  it('3', () => {
    const ex1 = parser('6\n1 2 3 4 5 6\n2 1 1 1');
    expect(solution(ex1)).toBe('54\n-24');
  });
});
