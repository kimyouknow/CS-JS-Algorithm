const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map((e) => +e));

describe('16987-g5-계란으로바위치기 tester', () => {
  it('1', () => {
    const ex1 = parser('3\n8 5\n1 100\n3 5');
    expect(solution(ex1)).toBe(3);
  });
  it('2', () => {
    const ex1 = parser('3\n1 100\n8 5\n3 5');
    expect(solution(ex1)).toBe(2);
  });
  it('3', () => {
    const ex1 = parser('1\n123 45');
    expect(solution(ex1)).toBe(0);
  });
  it('4', () => {
    const ex1 = parser('8\n222 117\n176 92\n287 6\n284 81\n221 96\n263 96\n188 40\n225 1');
    expect(solution(ex1)).toBe(4);
  });
  it('5', () => {
    const ex1 = parser('6\n65 281\n272 145\n233 175\n229 12\n99 88\n142 159');
    expect(solution(ex1)).toBe(6);
  });
  it('6', () => {
    const ex1 = parser('8\n161 36\n248 93\n233 13\n241 122\n285 91\n260 25\n221 14\n233 42');
    expect(solution(ex1)).toBe(3);
  });
  it('7', () => {
    const ex1 = parser('3\n213 295\n153 24\n15 233');
    expect(solution(ex1)).toBe(3);
  });
  it('8', () => {
    const ex1 = parser('8\n44 11\n116 73\n121 54\n49 232\n69 136\n159 242\n109 172\n28 31');
    expect(solution(ex1)).toBe(8);
  });
  it('9', () => {
    const ex1 = parser('6\n100 1\n100 1\n100 1\n100 1\n100 1\n100 1');
    expect(solution(ex1)).toBe(0);
  });
});
