const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map((v) => +v));

describe('1043-g4-거짓말 tester', () => {
  it('1단계 파생', () => {
    const ex1 = parser('10 9\n4 1 2 3 4\n2 1 5\n2 2 6\n1 7\n1 8\n2 7 8\n1 9\n1 10\n2 3 10\n1 4');
    expect(solution(ex1)).toBe(4);
  });
  it('진실을 알고 있는 사람이 없음', () => {
    const ex1 = parser('4 3\n0\n2 1 2\n1 3\n3 2 3 4');
    expect(solution(ex1)).toBe(3);
  });
  it('기본', () => {
    const ex1 = parser('4 1\n1 1\n4 1 2 3 4');
    expect(solution(ex1)).toBe(0);
  });
  it('진실을 알고 있는 사람이 없음', () => {
    const ex1 = parser('4 0\n0\n4 1 2 3 4');
    expect(solution(ex1)).toBe(1);
  });
  it('1단계 파생', () => {
    const ex1 = parser('4 5\n1 1\n1 1\n1 2\n1 3\n1 4\n2 4 1');
    expect(solution(ex1)).toBe(2);
  });
  it('진실을 알고 있는 사람은 있지만 파티 참석자중에  없음', () => {
    const ex1 = parser('8 5\n3 1 2 7\n2 3 4\n1 5\n2 5 6\n2 6 8\n1 8');
    expect(solution(ex1)).toBe(5);
  });
  it('1단계 파생되는 경우', () => {
    const ex1 = parser('3 4\n1 3\n1 1\n1 2\n2 1 2\n3 1 2 3');
    expect(solution(ex1)).toBe(0);
  });
  it('2 단계 이상 파생되는 경우', () => {
    const ex1 = parser('3 3\n1 3\n1 1\n2 1 2\n2 2 3');
    expect(solution(ex1)).toBe(0);
  });
});
