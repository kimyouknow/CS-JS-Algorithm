const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('2206-g3-벽 부수고 이동하기 tester', () => {
  it('기본', () => {
    const ex1 = parser('6 4\n0100\n1110\n1000\n0000\n0111\n0000');
    expect(solution(ex1)).toBe(15);
  });
  it('도착하지 못함', () => {
    const ex1 = parser('4 4\n0111\n1111\n1111\n1110');
    expect(solution(ex1)).toBe(-1);
  });
  it('최소', () => {
    const ex1 = parser('1 1\n0');
    expect(solution(ex1)).toBe(1);
  });
  it('두 가지 경로', () => {
    const ex1 = parser('6 4\n0100\n0110\n0000\n0000\n0111\n0000');
    expect(solution(ex1)).toBe(9);
  });
  it('두 가지 경로', () => {
    const ex1 = parser('6 4\n0100\n0110\n0000\n0000\n0111\n0010');
    expect(solution(ex1)).toBe(9);
  });
  it('n === 1', () => {
    const ex1 = parser('1 4\n0100');
    expect(solution(ex1)).toBe(4);
  });
  it('c === 1', () => {
    const ex1 = parser('4 1\n0\n1\n0\n0');
    expect(solution(ex1)).toBe(4);
  });
});
