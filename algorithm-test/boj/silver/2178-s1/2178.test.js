const { solution } = require('./index');

const parser = (input) => {
  const [inputs, ...arrs] = input.toString().trim().split('\n');
  return { inputs, arrs };
};

describe('tester', () => {
  beforeEach(() => {});
  it('1', () => {
    const ex1 = '4 6\n101111\n101010\n101011\n111011';
    const { inputs, arrs } = parser(ex1);
    expect(solution(inputs, arrs)).toBe(15);
  });
  it('2', () => {
    const ex2 = '4 6\n110110\n110110\n111111\n111101';
    const { inputs, arrs } = parser(ex2);
    expect(solution(inputs, arrs)).toBe(9);
  });
  it('3', () => {
    const ex3 = '2 25\n1011101110111011101110111\n1110111011101110111011101';
    const { inputs, arrs } = parser(ex3);
    expect(solution(inputs, arrs)).toBe(38);
  });
  it('4', () => {
    const ex4 =
      '7 7\n1011111\n1110001\n1000001\n1000001\n1000001\n1000001\n1111111';
    const { inputs, arrs } = parser(ex4);
    expect(solution(inputs, arrs)).toBe(13);
  });
});
