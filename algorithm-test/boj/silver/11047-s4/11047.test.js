const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('11047-s4 tester', () => {
  it('1', () => {
    const ex1 = parser(
      '10 4200\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000'
    );
    expect(solution(ex1)).toBe(6);
  });
  it('2', () => {
    const ex1 = parser(
      '10 4790\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000'
    );
    expect(solution(ex1)).toBe(12);
  });
  it('3', () => {
    const ex1 = parser(
      '10 1\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000'
    );
    expect(solution(ex1)).toBe(1);
  });
});
