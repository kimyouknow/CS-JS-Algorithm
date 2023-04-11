const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('2110-g4 tester', () => {
  it('1', () => {
    const ex1 = parser('5 3\n1\n2\n8\n4\n9');
    expect(solution(ex1)).toBe(3);
  });
  it('2', () => {
    const ex1 = parser('8 3\n1\n2\n8\n4\n9\n11\n14\n6');
    expect(solution(ex1)).toBe(6);
  });
  it('3', () => {
    const ex1 = parser('8 8\n1\n2\n8\n4\n9\n11\n14\n6');
    expect(solution(ex1)).toBe(1);
  });
  it('4', () => {
    const ex1 = parser('8 2\n1\n2\n8\n4\n9\n11\n14\n6');
    expect(solution(ex1)).toBe(13);
  });
  it('5', () => {
    const ex1 = parser('2 2\n14\n6');
    expect(solution(ex1)).toBe(8);
  });
  it('6', () => {
    const ex1 = parser('9 3\n1\n2\n3\n4\n5\n6\n7\n8\n100');
    expect(solution(ex1)).toBe(7);
  });
  it('7', () => {
    const ex1 = parser('2 2\n10\n11');
    expect(solution(ex1)).toBe(1);
  });
});
