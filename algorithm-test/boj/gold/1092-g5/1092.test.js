const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('1092-g5 tester', () => {
  it('1', () => {
    const ex1 = parser('4\n8 6 20 17 \n6\n4 5 16 19 20 15');
    expect(solution(ex1)).toBe(2);
  });
  it('2', () => {
    const ex1 = parser('3\n6 8 9\n5\n2 5 2 4 7');
    expect(solution(ex1)).toBe(2);
  });
  it('3', () => {
    const ex1 = parser('2\n19 20\n7\n14 12 16 19 16 1 5');
    expect(solution(ex1)).toBe(4);
  });
  it('4', () => {
    const ex1 = parser('4\n23 32 25 28\n10\n5 27 10 16 24 20 2 32 18 7');
    expect(solution(ex1)).toBe(3);
  });
  it('5', () => {
    const ex1 = parser('10\n11 17 5 2 20 7 5 5 20 7\n5\n18 18 15 15 17');
    expect(solution(ex1)).toBe(2);
  });
  it('6', () => {
    const ex1 = parser('4\n8 6 20 17 \n6\n4 5 16 19 24 15');
    expect(solution(ex1)).toBe(-1);
  });
  it('7', () => {
    const ex1 = parser('10\n80 600 20 170 100 101 102 103 104 105\n6\n4 5 16 19 10 15');
    expect(solution(ex1)).toBe(1);
  });
  it('8', () => {
    const ex1 = parser('3\n1 2 3\n6\n1 2 3 1 2 3');
    expect(solution(ex1)).toBe(2);
  });
  it('9', () => {
    const ex1 = parser('4\n1 2 3 4\n8\n1 1 2 2 3 3 4 4');
    expect(solution(ex1)).toBe(2);
  });
});
