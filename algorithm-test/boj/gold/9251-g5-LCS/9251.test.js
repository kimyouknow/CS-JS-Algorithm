const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('9251-g5-LCS tester', () => {
  it('기본', () => {
    const ex1 = parser('ACAYKP\nCAPCAK');
    expect(solution(ex1)).toBe(4);
  });
  it('전부 같을 때', () => {
    const ex1 = parser('AAA\nAAA');
    expect(solution(ex1)).toBe(3);
  });
  it('전부다를 때', () => {
    const ex1 = parser('AB\nCP');
    expect(solution(ex1)).toBe(0);
  });
});
