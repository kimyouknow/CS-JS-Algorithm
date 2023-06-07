const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split(' ')
    .map((v) => +v);

describe('12886-g4 tester', () => {
  it('1', () => {
    const ex1 = parser('10 15 35');
    expect(solution(ex1)).toBe(1);
  });
  it('2', () => {
    const ex1 = parser('1 1 2');
    expect(solution(ex1)).toBe(0);
  });
  it('3', () => {
    const ex1 = parser('244 339 185');
    expect(solution(ex1)).toBe(1);
  });
  it('4', () => {
    const ex1 = parser('315 4 449');
    expect(solution(ex1)).toBe(1);
  });
  it('5', () => {
    const ex1 = parser('205 2 177');
    expect(solution(ex1)).toBe(1);
  });
  it('6', () => {
    const ex1 = parser('289 299 180');
    expect(solution(ex1)).toBe(1);
  });
  it('7', () => {
    const ex1 = parser('301 300 301');
    expect(solution(ex1)).toBe(0);
  });
  it('8', () => {
    const ex1 = parser('500 500 500');
    expect(solution(ex1)).toBe(1);
  });
  it('9', () => {
    const ex1 = parser('288 500 197');
    expect(solution(ex1)).toBe(0);
  });
});
