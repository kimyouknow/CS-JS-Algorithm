const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => +v);

describe('2217-s4 tester', () => {
  it('1', () => {
    const ex1 = parser('2\n10\n15');
    expect(solution(ex1)).toBe(20);
  });
  it('2', () => {
    const ex1 = parser('3\n1\n100\n120');
    expect(solution(ex1)).toBe(200);
  });
  it('3', () => {
    const ex1 = parser('1\n1');
    expect(solution(ex1)).toBe(1);
  });
  it('4', () => {
    const ex1 = parser('5\n122\n130\n44\n10000\n20');
    expect(solution(ex1)).toBe(10000);
  });
  it('5', () => {
    const ex1 = parser('4\n3\n3\n3\n10');
    expect(solution(ex1)).toBe(12);
  });
});
