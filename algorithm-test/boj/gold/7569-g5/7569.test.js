const { solution } = require('./index');

const parser = (input) => {
  const [inputs, ...arrs] = input.toString().trim().split('\n');
  return { inputs, arrs };
};

describe('tester', () => {
  beforeEach(() => {});
  it('1', () => {
    const ex1 = '5 3 1\n0 -1 0 0 0\n-1 -1 0 1 1\n0 0 0 1 1';
    const { inputs, arrs } = parser(ex1);
    expect(solution(inputs, arrs)).toBe(-1);
  });
  it('2', () => {
    const ex2 =
      '5 3 2\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 1 0 0\n0 0 0 0 0';
    const { inputs, arrs } = parser(ex2);
    expect(solution(inputs, arrs)).toBe(4);
  });
  it('3', () => {
    const ex3 =
      '4 3 2\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1\n-1 -1 -1 -1\n1 1 1 -1';
    const { inputs, arrs } = parser(ex3);
    expect(solution(inputs, arrs)).toBe(0);
  });
});
