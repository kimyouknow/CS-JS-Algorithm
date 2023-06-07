const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('1916-g5 tester', () => {
  it('1', () => {
    const ex1 = parser('5\n8\n1 2 2\n1 3 3\n1 4 1\n1 5 10\n2 4 2\n3 4 1\n3 5 1\n4 5 3\n1 5');
    expect(solution(ex1)).toBe(4);
  });
  it('2', () => {
    const ex1 = parser(
      '5\n10\n1 2 2\n1 3 3\n1 4 1\n1 5 10\n2 4 2\n3 4 1\n3 5 1\n4 3 2\n4 1 1\n4 5 3\n1 5'
    );
    expect(solution(ex1)).toBe(4);
  });
  it('3', () => {
    const ex1 = parser('5\n8\n1 2 2\n1 3 3\n1 4 1\n1 5 0\n2 4 2\n3 4 1\n3 5 1\n4 5 3\n1 5');
    expect(solution(ex1)).toBe(0);
  });
  it('4', () => {
    const ex1 = parser('3\n3\n1 2 10\n1 3 11\n2 3 1\n1 3');
    expect(solution(ex1)).toBe(11);
  });
  it('5', () => {
    const ex1 = parser('4\n5\n1 2 10\n1 3 11\n2 3 1\n2 4 2\n3 4 1\n1 4');
    expect(solution(ex1)).toBe(12);
  });
  it('6', () => {
    const ex1 = parser('5\n8\n1 2 10\n1 5 11\n1 5 1\n2 3 1\n2 4 2\n3 4 1\n4 2 1\n4 3 1\n1 5');
    expect(solution(ex1)).toBe(1);
  });
  it('7', () => {
    const ex1 = parser('5\n3\n3 5 5\n5 2 1\n5 4 1\n5 4');
    expect(solution(ex1)).toBe(1);
  });
});
