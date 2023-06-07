const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.split(' ').map((v) => +v);

describe('9019-g4-DSLR tester', () => {
  it('1234 3412', () => {
    const ex1 = parser('1234 3412');
    expect(solution(ex1)).toBe('LL');
  });
  it('1000 1', () => {
    const ex1 = parser('1000 1');
    expect(solution(ex1)).toBe('L');
  });
  it('1 16', () => {
    const ex1 = parser('1 16');
    expect(solution(ex1)).toBe('DDDD');
  });
});
