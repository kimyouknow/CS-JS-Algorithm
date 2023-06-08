const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split(' ')
    .map((v) => +v);

describe('15650-s1-n과m(2) tester', () => {
  it('1', () => {
    const ex1 = parser('3 1');
    expect(solution(ex1)).toBe('1\n2\n3');
  });
  it('2', () => {
    const ex1 = parser('4 2');
    expect(solution(ex1)).toBe('1 2\n1 3\n1 4\n2 3\n2 4\n3 4');
  });
  it('3', () => {
    const ex1 = parser('4 4');
    expect(solution(ex1)).toBe('1 2 3 4');
  });
  it('4', () => {
    const ex1 = parser('4 3');
    expect(solution(ex1)).toBe('1 2 3\n1 2 4\n1 3 4\n2 3 4');
  });
});
