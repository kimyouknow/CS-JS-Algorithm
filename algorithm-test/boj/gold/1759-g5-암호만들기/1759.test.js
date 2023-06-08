const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('1759-g5-암호만들기 tester', () => {
  it('1', () => {
    const ex1 = parser('4 6\na t c i s w');
    expect(solution(ex1)).toBe(
      'acis\nacit\naciw\nacst\nacsw\nactw\naist\naisw\naitw\nastw\ncist\ncisw\ncitw\nistw'
    );
  });
  it('모두 모음', () => {
    const ex1 = parser('4 5\na i e o u');
    expect(solution(ex1)).toBe('');
  });
  it('모두 자음', () => {
    const ex1 = parser('4 5\nb c f s k');
    expect(solution(ex1)).toBe('');
  });
});
