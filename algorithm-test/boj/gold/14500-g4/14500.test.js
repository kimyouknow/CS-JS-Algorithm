const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('14500-g4 tester', () => {
  it('1', () => {
    const ex1 = parser('5 5\n1 2 3 4 5\n5 4 3 2 1\n2 3 4 5 6\n6 5 4 3 2\n1 2 1 2 1');
    expect(solution(ex1)).toBe(19);
  });
  it('2', () => {
    const ex1 = parser('4 5\n1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5');
    expect(solution(ex1)).toBe(20);
  });
  it('3', () => {
    const ex1 = parser(
      '4 10\n1 2 1 2 1 2 1 2 1 2\n2 1 2 1 2 1 2 1 2 1\n1 2 1 2 1 2 1 2 1 2\n2 1 2 1 2 1 2 1 2 1'
    );
    expect(solution(ex1)).toBe(7);
  });
});
