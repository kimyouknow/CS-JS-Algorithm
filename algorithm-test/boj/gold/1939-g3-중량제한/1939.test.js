const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('1939-g3-중량제한 tester', () => {
  it('1', () => {
    const ex1 = parser('3 3\n1 2 2\n3 1 3\n2 3 2\n1 3');
    expect(solution(ex1)).toBe(3);
  });
  it('2', () => {
    const ex1 = parser('5 7\n1 2 2\n3 1 3\n2 3 2\n1 2 30\n2 3 40\n3 4 10\n4 5 100\n1 5');
    expect(solution(ex1)).toBe(10);
  });
});
