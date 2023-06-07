const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split('').map((v) => +v));

describe('1992-s1-쿼드트리 tester', () => {
  it('1', () => {
    const ex1 = parser(
      '8\n11110000\n11110000\n00011100\n00011100\n11110000\n11110000\n11110011\n11110011'
    );
    expect(solution(ex1)).toBe('((110(0101))(0010)1(0001))');
  });
  it('2', () => {
    const ex1 = parser('1\n0');
    expect(solution(ex1)).toBe('0');
  });
  it('3', () => {
    const ex1 = parser(
      '8\n10000000\n00000000\n00000000\n00000000\n00000000\n00000000\n00000000\n00000000'
    );
    expect(solution(ex1)).toBe('(((1000)000)000)');
  });
});
