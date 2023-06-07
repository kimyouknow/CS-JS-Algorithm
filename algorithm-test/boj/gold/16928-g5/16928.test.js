const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('16928-g5 tester', () => {
  it('1', () => {
    const ex1 = parser(
      '3 7\n32 62\n42 68\n12 98\n95 13\n97 25\n93 37\n79 27\n75 19\n49 47\n67 17'
    );
    expect(solution(ex1)).toBe(3);
  });
  it('2', () => {
    const ex1 = parser(
      '4 9\n8 52\n6 80\n26 42\n2 72\n51 19\n39 11\n37 29\n81 3\n59 5\n79 23\n53 7\n43 33\n77 21'
    );
    expect(solution(ex1)).toBe(5);
  });
  it('3', () => {
    const ex1 = parser('1 1\n13 99\n8 7');
    expect(solution(ex1)).toBe(3);
  });
  it('4', () => {
    const ex1 = parser('1 5\n2 92\n94 3\n95 4\n96 5\n97 6\n98 7');
    expect(solution(ex1)).toBe(4);
  });
  it('5', () => {
    const ex1 = parser('0 0');
    expect(solution(ex1)).toBe(4);
  });
});
