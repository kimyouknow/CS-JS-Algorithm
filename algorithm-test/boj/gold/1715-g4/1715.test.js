const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => +v);

describe('1715-g4 tester', () => {
  it('1', () => {
    const ex1 = parser('3\n1\n2\n4');
    expect(solution(ex1)).toBe(10);
  });
  it('2', () => {
    const ex1 = parser('1\n1');
    expect(solution(ex1)).toBe(0);
  });
  it('3', () => {
    const ex1 = parser('6\n3\n4\n4\n5\n5\n5');
    expect(solution(ex1)).toBe(68);
  });
  it('4', () => {
    const ex1 = parser('5\n3\n4\n5\n6\n7');
    expect(solution(ex1)).toBe(57);
  });
  it('5', () => {
    const ex1 = parser('2\n3\n4');
    expect(solution(ex1)).toBe(7);
  });
  it('6', () => {
    const ex1 = parser('5\n1\n1\n2\n4\n8');
    expect(solution(ex1)).toBe(30);
  });
});
