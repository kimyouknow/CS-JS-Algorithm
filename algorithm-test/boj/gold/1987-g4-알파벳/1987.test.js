const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('1987-g4-알파벳 tester', () => {
  it('1', () => {
    const ex1 = parser('2 4\nCAAB\nADCB');
    expect(solution(ex1)).toBe(3);
  });
  it('2', () => {
    const ex1 = parser('3 6\nHFDFFB\nAJHGDH\nDGAGEH');
    expect(solution(ex1)).toBe(6);
  });
  it('3', () => {
    const ex1 = parser('5 5\nIEFCJ\nFHFKC\nFFALF\nHFGCF\nHMCHH');
    expect(solution(ex1)).toBe(10);
  });
  it('5*5전부 다를 때', () => {
    const ex1 = parser('5 5\nABCDE\nFGHIJ\nKLMNO\nPQRST\nUVWZY');
    expect(solution(ex1)).toBe(25);
  });
  it('시작하자마자 안 됨, 모두 같은 값', () => {
    const ex1 = parser('2 2\nAA\nAA');
    expect(solution(ex1)).toBe(1);
  });
});
