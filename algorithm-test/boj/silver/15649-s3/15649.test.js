const { solution } = require('./index');

describe('tester', () => {
  beforeEach(() => {});
  it('1', () => {
    expect(solution(3, 1)).toBe('1\n2\n3');
  });
  it('2', () => {
    expect(solution(4, 2)).toBe(
      '1 2\n1 3\n1 4\n2 1\n2 3\n2 4\n3 1\n3 2\n3 4\n4 1\n4 2\n4 3'
    );
  });
  it('3', () => {
    expect(solution(4, 4)).toBe(
      '1 2 3 4\n1 2 4 3\n1 3 2 4\n1 3 4 2\n1 4 2 3\n1 4 3 2\n2 1 3 4\n2 1 4 3\n2 3 1 4\n2 3 4 1\n2 4 1 3\n2 4 3 1\n3 1 2 4\n3 1 4 2\n3 2 1 4\n3 2 4 1\n3 4 1 2\n3 4 2 1\n4 1 2 3\n4 1 3 2\n4 2 1 3\n4 2 3 1\n4 3 1 2\n4 3 2 1'
    );
  });
});
