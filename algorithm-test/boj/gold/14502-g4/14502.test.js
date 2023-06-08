const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('14502-g4 tester', () => {
  it('1', () => {
    const ex1 = parser(
      '7 7\n2 0 0 0 1 1 0\n0 0 1 0 1 2 0\n0 1 1 0 1 0 0\n0 1 0 0 0 0 0\n0 0 0 0 0 1 1\n0 1 0 0 0 0 0\n0 1 0 0 0 0 0'
    );
    expect(solution(ex1)).toBe(27);
  });
  it('2', () => {
    const ex1 = parser(
      '4 6\n0 0 0 0 0 0\n1 0 0 0 0 2\n1 1 1 0 0 2\n0 0 0 0 0 2'
    );
    expect(solution(ex1)).toBe(9);
  });
  it('3', () => {
    const ex1 = parser(
      '8 8\n2 0 0 0 0 0 0 2\n2 0 0 0 0 0 0 2\n2 0 0 0 0 0 0 2\n2 0 0 0 0 0 0 2\n2 0 0 0 0 0 0 2\n0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0'
    );
    expect(solution(ex1)).toBe(3);
  });
});
