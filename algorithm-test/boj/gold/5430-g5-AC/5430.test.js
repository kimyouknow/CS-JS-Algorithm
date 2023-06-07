const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('5430-g5-AC tester', () => {
  it('0', () => {
    const ex1 = parser('RRD\n6\n[1,1,2,3,5,8]');
    expect(solution(...ex1)).toBe('[1,2,3,5,8]');
  });
  it('1', () => {
    const ex1 = parser('D\n0\n[]');
    expect(solution(...ex1)).toBe('error');
  });
  it('2', () => {
    const ex1 = parser('D\n0\n[]');
    expect(solution(...ex1)).toBe('error');
  });
  it('3', () => {
    const ex1 = parser('DDRRDR\n6\n[1,1,2,3,5,8]');
    expect(solution(...ex1)).toBe('[8,5,3]');
  });
  it('4', () => {
    const ex1 = parser('RRRRDRRRDDDDDD\n6\n[1,1,2,3,5,8]');
    expect(solution(...ex1)).toBe('error');
  });
  it('5', () => {
    const ex1 = parser('RRRRDRRRDDDDD\n6\n[1,1,2,3,5,8]');
    expect(solution(...ex1)).toBe('[]');
  });
  it('6', () => {
    const ex1 = parser('RRR\n0\n[]');
    expect(solution(...ex1)).toBe('[]');
  });
  it('7', () => {
    const ex1 = parser('R\n2\n[1,2]');
    expect(solution(...ex1)).toBe('[2,1]');
  });
});
