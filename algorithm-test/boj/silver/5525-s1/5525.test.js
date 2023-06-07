const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('5525-s1 tester', () => {
  it('1', () => {
    const ex1 = parser('1\n13\nOOIOIOIOIIOII');
    expect(solution(ex1)).toBe(4);
  });
  it('2', () => {
    const ex1 = parser('2\n13\nOOIOIOIOIIOII');
    expect(solution(ex1)).toBe(2);
  });
  it('3', () => {
    const ex1 = parser('3\n7\nIOIOIOI');
    expect(solution(ex1)).toBe(1);
  });
  it('4', () => {
    const ex1 = parser('1\n7\nIOIOIOI');
    expect(solution(ex1)).toBe(3);
  });
  it('5', () => {
    const ex1 = parser('1\n3\nIII');
    expect(solution(ex1)).toBe(0);
  });
  it('6', () => {
    const ex1 = parser('4\n10\nIIIIIIOOOO');
    expect(solution(ex1)).toBe(0);
  });
  it('7', () => {
    const ex1 = parser('100\n10\nIIIIIIOOOO');
    expect(solution(ex1)).toBe(0);
  });
});
