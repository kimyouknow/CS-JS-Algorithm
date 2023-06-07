const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('16637-g3-괄호추가하기 tester', () => {
  it('1', () => {
    const ex1 = parser('9\n3+8*7-9*2');
    expect(solution(ex1)).toBe(136);
  });
  it('2', () => {
    const ex2 = parser('5\n8*3+5');
    expect(solution(ex2)).toBe(64);
  });
  it('3', () => {
    const ex3 = parser('7\n8*3+5+2');
    expect(solution(ex3)).toBe(66);
  });
  it('4', () => {
    const ex4 = parser('19\n1*2+3*4*5-6*7*8*9*0');
    expect(solution(ex4)).toBe(0);
  });
  it('5', () => {
    const ex5 = parser('19\n1*2+3*4*5-6*7*8*9*9');
    expect(solution(ex5)).toBe(426384);
  });
  it('6', () => {
    const ex6 = parser('19\n1-9-1-9-1-9-1-9-1-9');
    expect(solution(ex6)).toBe(24);
  });
  it('7', () => {
    const ex7 = parser('1\n0');
    expect(solution(ex7)).toBe(0);
  });
  it('8', () => {
    const ex7 = parser('3\n3-9');
    expect(solution(ex7)).toBe(-6);
  });
});
