const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('14499-g4-주사위굴리기 tester', () => {
  it('1', () => {
    const ex1 = parser('4 2 0 0 8\n0 2\n3 4\n5 6\n7 8\n4 4 4 1 3 3 3 2');
    expect(solution(ex1)).toBe('0\n0\n3\n0\n0\n8\n6\n3');
  });
  it('2', () => {
    const ex1 = parser('3 3 1 1 9\n1 2 3\n4 0 5\n6 7 8\n1 3 2 2 4 4 1 1 3');
    expect(solution(ex1)).toBe('0\n0\n0\n3\n0\n1\n0\n6\n0');
  });
  it('3', () => {
    const ex1 = parser('2 2 0 0 16\n0 2\n3 4\n4 4 4 4 1 1 1 1 3 3 3 3 2 2 2 2');
    expect(solution(ex1)).toBe('0\n0\n0\n0');
  });
  it('4', () => {
    const ex1 = parser('3 3 0 0 16\n0 1 2\n3 4 5\n6 7 8\n4 4 1 1 3 3 2 2 4 4 1 1 3 3 2 2');
    expect(solution(ex1)).toBe('0\n0\n0\n6\n0\n8\n0\n2\n0\n8\n0\n2\n0\n8\n0\n2');
  });
});
