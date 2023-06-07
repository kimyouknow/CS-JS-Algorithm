const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map((v) => +v));

describe('15686-g5-치킨배달 tester', () => {
  it('1', () => {
    const ex1 = parser('5 3\n0 0 1 0 0\n0 0 2 0 1\n0 1 2 0 0\n0 0 1 0 0\n0 0 0 0 2');
    expect(solution(ex1)).toBe(5);
  });
  it('2', () => {
    const ex1 = parser('5 2\n0 2 0 1 0\n1 0 1 0 0\n0 0 0 0 0\n2 0 0 1 1\n2 2 0 1 2');
    expect(solution(ex1)).toBe(10);
  });
  it('3', () => {
    const ex1 = parser('5 1\n1 2 0 0 0\n1 2 0 0 0\n1 2 0 0 0\n1 2 0 0 0\n1 2 0 0 0');
    expect(solution(ex1)).toBe(11);
  });
  it('4', () => {
    const ex1 = parser('5 1\n1 2 0 2 1\n1 2 0 2 1\n1 2 0 2 1\n1 2 0 2 1\n1 2 0 2 1');
    expect(solution(ex1)).toBe(32);
  });
  it('n,m이 최소일 때, (n === 2, m === 1)', () => {
    const ex1 = parser('2 1\n0 2\n1 0');
    expect(solution(ex1)).toBe(2);
  });
});
