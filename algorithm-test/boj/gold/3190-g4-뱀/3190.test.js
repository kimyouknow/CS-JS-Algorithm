const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('3190-g4-뱀 tester', () => {
  it('1', () => {
    const ex1 = parser('6\n3\n3 4\n2 5\n5 3\n3\n3 D\n15 L\n17 D');
    expect(solution(ex1)).toBe(9);
  });
  it('2', () => {
    const ex2 = parser('10\n4\n1 2\n1 3\n1 4\n1 5\n4\n8 D\n10 D\n11 D\n13 L');
    expect(solution(ex2)).toBe(21);
  });
  it('3', () => {
    const ex3 = parser('10\n5\n1 5\n1 3\n1 2\n1 6\n1 7\n4\n8 D\n10 D\n11 D\n13 L');
    expect(solution(ex3)).toBe(13);
  });
  it('최소 보드', () => {
    const ex3 = parser('2\n4\n1 1\n1 2\n2 1\n2 2\n3\n1 D\n1 D\n1 D');
    expect(solution(ex3)).toBe(3);
  });
});
