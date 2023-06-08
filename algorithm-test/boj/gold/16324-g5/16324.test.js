const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('16324-g5 tester', () => {
  it('1', () => {
    const ex1 = parser('3 5 10\n10 15 20\n20 30 25\n40 22 10');
    expect(solution(ex1)).toBe(2);
  });
  it('2', () => {
    const ex1 = parser('2 20 50\n50 30\n20 40');
    expect(solution(ex1)).toBe(1);
  });
  it('3', () => {
    const ex1 = parser('2 40 50\n50 30\n20 40');
    expect(solution(ex1)).toBe(0);
  });
  it('4', () => {
    const ex1 = parser('2 20 50\n50 30\n30 40');
    expect(solution(ex1)).toBe(1);
  });
  it('5', () => {
    const ex1 = parser(
      '4 10 50\n10 100 20 90\n80 100 60 70\n70 20 30 40\n50 20 100 10'
    );
    expect(solution(ex1)).toBe(3);
  });
});
