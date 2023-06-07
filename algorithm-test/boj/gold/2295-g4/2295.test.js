const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => +v);

describe('2295-g4 tester', () => {
  it('1', () => {
    const ex1 = parser('5\n2\n3\n5\n10\n18');
    expect(solution(ex1)).toBe(18);
  });
  it('2', () => {
    const ex1 = parser('6\n2\n3\n10\n19\n15\n21');
    expect(solution(ex1)).toBe(21);
  });
  it('3', () => {
    const ex1 = parser('5\n2\n3\n5\n10\n30');
    expect(solution(ex1)).toBe(30);
  });
});
