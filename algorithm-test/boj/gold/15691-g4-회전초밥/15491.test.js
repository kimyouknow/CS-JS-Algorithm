const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('15691-g4-회전초밥 tester', () => {
  it('1', () => {
    const ex1 = parser('8 30 4 30\n7\n9\n7\n30\n2\n7\n9\n25');
    expect(solution(ex1)).toBe(5);
  });
  it('2', () => {
    const ex1 = parser('8 50 4 7\n2\n7\n9\n25\n7\n9\n7\n30');
    expect(solution(ex1)).toBe(4);
  });
  it('n,d,k,c가 모두 최소', () => {
    const ex1 = parser('2 2 2 1\n1\n2');
    expect(solution(ex1)).toBe(2);
  });
  it('k === 1', () => {
    const ex1 = parser('8 50 1 7\n2\n7\n9\n25\n7\n9\n7\n30');
    expect(solution(ex1)).toBe(2);
  });
  it('k === n - 1', () => {
    const ex1 = parser('8 50 7 40\n2\n3\n9\n25\n4\n9\n7\n30');
    expect(solution(ex1)).toBe(8);
  });
});
