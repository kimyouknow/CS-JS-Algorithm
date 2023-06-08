const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('2252-g3-줄세우기 tester', () => {
  it('1', () => {
    const ex1 = parser('4 2\n4 2\n3 1');
    expect(solution(ex1)).toBe('3 4 1 2');
  });
  it('2', () => {
    const ex1 = parser('3 2\n1 3\n2 3');
    expect(solution(ex1)).toBe('1 2 3');
  });
  it('3', () => {
    const ex1 = parser('7 7\n1 2\n1 5\n2 3 \n3 4\n4 6\n5 6\n6 7');
    expect(solution(ex1)).toBe('1 2 5 3 4 6 7');
  });
  it('4', () => {
    const ex1 = parser('2 1\n1 2');
    expect(solution(ex1)).toBe('1 2');
  });
});
