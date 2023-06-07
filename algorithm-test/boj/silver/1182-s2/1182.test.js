const { solution } = require('./index');

const inputParser = (inputs) => inputs.toString().trim().split('\n');

describe('tester', () => {
  beforeEach(() => {});
  it('1', () => {
    const [inputs, arr] = inputParser('5 0\n-7 -3 -2 5 8');
    expect(solution(inputs, arr)).toBe(1);
  });
  it('2', () => {
    const [inputs, arr] = inputParser('6 10\n1 2 3 4 5 6');
    expect(solution(inputs, arr)).toBe(5);
  });
});
