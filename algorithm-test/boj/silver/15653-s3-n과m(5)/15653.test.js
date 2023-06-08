const { solution } = require('./index');

const parser = (rawInputs) =>
  rawInputs
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((v) => +v));

describe('15653-s3-n과m(5) tester', () => {
  it('1', () => {
    const ex1 = parser('3 1\n4 5 2');
    expect(solution(ex1)).toBe('2\n4\n5');
  });
  it('2', () => {
    const ex1 = parser('4 2\n9 8 7 1');
    expect(solution(ex1)).toBe('1 7\n1 8\n1 9\n7 1\n7 8\n7 9\n8 1\n8 7\n8 9\n9 1\n9 7\n9 8');
  });
  it('3', () => {
    const ex1 = parser('4 4\n1231 1232 1233 1234');
    expect(solution(ex1)).toBe(
      '1231 1232 1233 1234\n1231 1232 1234 1233\n1231 1233 1232 1234\n1231 1233 1234 1232\n1231 1234 1232 1233\n1231 1234 1233 1232\n1232 1231 1233 1234\n1232 1231 1234 1233\n1232 1233 1231 1234\n1232 1233 1234 1231\n1232 1234 1231 1233\n1232 1234 1233 1231\n1233 1231 1232 1234\n1233 1231 1234 1232\n1233 1232 1231 1234\n1233 1232 1234 1231\n1233 1234 1231 1232\n1233 1234 1232 1231\n1234 1231 1232 1233\n1234 1231 1233 1232\n1234 1232 1231 1233\n1234 1232 1233 1231\n1234 1233 1231 1232\n1234 1233 1232 1231'
    );
  });
});
