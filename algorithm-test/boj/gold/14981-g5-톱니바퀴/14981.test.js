const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('14981-g5-톱니바퀴 tester', () => {
  it('1', () => {
    const ex1 = parser('10101111\n01111101\n11001110\n00000010\n2\n3 -1\n1 1');
    expect(solution(ex1)).toBe(7);
  });
  it('2', () => {
    const ex1 = parser('11111111\n11111111\n11111111\n11111111\n3\n1 1\n2 1\n3 1');
    expect(solution(ex1)).toBe(15);
  });
  it('3', () => {
    const ex1 = parser('10001011\n10000011\n01011011\n00111101\n5\n1 1\n2 1\n3 1\n4 1\n1 -1');
    expect(solution(ex1)).toBe(6);
  });
  it('4', () => {
    const ex1 = parser(
      '10010011\n01010011\n11100011\n01010101\n8\n1 1\n2 1\n3 1\n4 1\n1 -1\n2 -1\n3 -1\n4 -1'
    );
    expect(solution(ex1)).toBe(5);
  });
  it('5', () => {
    const ex1 = parser(
      '10010011\n01010011\n11100011\n01010101\n8\n1 1\n2 1\n3 1\n4 1\n1 -1\n2 -1\n3 -1\n4 -1'
    );
    expect(solution(ex1)).toBe(5);
  });
});
