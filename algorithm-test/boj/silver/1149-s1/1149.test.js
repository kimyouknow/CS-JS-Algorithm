const { solution } = require('./index');

const parser = (inputs) => inputs.toString().trim().split('\n');

describe('tester', () => {
  beforeEach(() => {});
  it('1', () => {
    const inputs = parser('3\n26 40 83\n49 60 57\n13 89 99');
    expect(solution(inputs)).toBe(96);
  });
  it('2', () => {
    const inputs = parser('3\n1 100 100\n100 1 100\n100 100 1');
    expect(solution(inputs)).toBe(3);
  });
  it('3', () => {
    const inputs = parser('3\n1 100 100\n100 100 100\n1 100 100');
    expect(solution(inputs)).toBe(102);
  });
  it('4', () => {
    const inputs = parser(
      '6\n30 19 5\n64 77 64\n15 19 97\n4 71 57\n90 86 84\n93 32 91'
    );
    expect(solution(inputs)).toBe(208);
  });
  it('5', () => {
    const inputs = parser(
      '8\n71 39 44\n32 83 55\n51 37 63\n89 29 100\n83 58 11\n65 13 15\n47 25 29\n60 66 19'
    );
    expect(solution(inputs)).toBe(253);
  });
});
