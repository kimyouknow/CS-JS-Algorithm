const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('1107-리모컨 tester', () => {
  it('test: 1', () => {
    const ex1 = parser('5457\n3\n6 7 8');
    expect(solution(ex1)).toBe(6);
  });
  it('n === 100', () => {
    const ex1 = parser('100\n5\n0 1 2 3 4');
    expect(solution(ex1)).toBe(0);
  });
  it('test: 2', () => {
    const ex1 = parser('500000\n8\n0 2 3 4 6 7 8 9');
    expect(solution(ex1)).toBe(11117);
  });
  it('n === 100', () => {
    const ex1 = parser('100\n3\n1 0 5');
    expect(solution(ex1)).toBe(0);
  });
  it('m === 0', () => {
    const ex1 = parser('14124\n0');
    expect(solution(ex1)).toBe(5);
  });
  it('m === 9', () => {
    const ex1 = parser('1\n9\n1 2 3 4 5 6 7 8 9');
    expect(solution(ex1)).toBe(2);
  });
  it('test : 3', () => {
    const ex1 = parser('80000\n2\n8 9');
    expect(solution(ex1)).toBe(2228);
  });
  it('n = 103, , m = 9', () => {
    const ex1 = parser('103\n9\n1 2 3 4 5 6 7 8 9');
    expect(solution(ex1)).toBe(3);
  });
});
