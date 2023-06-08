const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('1520-g3-내리막길 tester', () => {
  it('1', () => {
    const ex1 = parser('4 5\n50 45 37 32 30\n35 50 40 20 25\n30 30 25 17 28\n27 24 22 15 10');
    expect(solution(ex1)).toBe(3);
  });
  it('2', () => {
    const ex1 = parser('4 4\n10 9 8 4\n9 6 5 1\n8 7 4 1\n13 7 3 2');
    expect(solution(ex1)).toBe(5);
  });
});
