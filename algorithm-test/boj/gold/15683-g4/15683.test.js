const { solution } = require('./index');

const parser = (input) => {
  const [inputs, ...arr] = input.toString().trim().split('\n');
  return { inputs, arr };
};

describe('tester', () => {
  beforeEach(() => {});
  it('1', () => {
    const ex1 = '4 6\n0 0 0 0 0 0\n0 0 0 0 0 0\n0 0 1 0 6 0\n0 0 0 0 0 0';
    const { inputs, arr } = parser(ex1);
    expect(solution(inputs, arr)).toBe(20);
  });
  it('2', () => {
    const ex2 =
      '6 6\n0 0 0 0 0 0\n0 2 0 0 0 0\n0 0 0 0 6 0\n0 6 0 0 2 0\n0 0 0 0 0 0\n0 0 0 0 0 5';
    const { inputs, arr } = parser(ex2);
    expect(solution(inputs, arr)).toBe(15);
  });
  it('3', () => {
    const ex3 =
      '6 6\n1 0 0 0 0 0\n0 1 0 0 0 0\n0 0 1 0 0 0\n0 0 0 1 0 0\n0 0 0 0 1 0\n0 0 0 0 0 1';
    const { inputs, arr } = parser(ex3);
    expect(solution(inputs, arr)).toBe(6);
  });
  it('4', () => {
    const ex3 =
      '6 6\n1 0 0 0 0 0\n0 1 0 0 0 0\n0 0 1 5 0 0\n0 0 5 1 0 0\n0 0 0 0 1 0\n0 0 0 0 0 1';
    const { inputs, arr } = parser(ex3);
    expect(solution(inputs, arr)).toBe(2);
  });
  it('5', () => {
    const ex3 = '1 7\n0 1 2 3 4 5 6';
    const { inputs, arr } = parser(ex3);
    expect(solution(inputs, arr)).toBe(0);
  });
  it('6', () => {
    const ex3 = '3 7\n4 0 0 0 0 0 0\n0 0 0 2 0 0 0\n0 0 0 0 0 0 4';
    const { inputs, arr } = parser(ex3);
    expect(solution(inputs, arr)).toBe(0);
  });
});
