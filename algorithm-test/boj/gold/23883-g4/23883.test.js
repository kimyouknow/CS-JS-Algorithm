const { solution } = require('./index');

const parser = (input) => {
  const [inputs, arrs] = input.toString().trim().split('\n');
  return { inputs, arrs };
};

describe('tester', () => {
  it('1', () => {
    const { inputs, arrs } = parser('5 2\n3 1 2 5 4');
    expect(solution(inputs, arrs)).toBe('2 3');
  });
  it('2', () => {
    const { inputs, arrs } = parser('5 4\n3 1 2 5 4');
    expect(solution(inputs, arrs)).toBe(-1);
  });
});
