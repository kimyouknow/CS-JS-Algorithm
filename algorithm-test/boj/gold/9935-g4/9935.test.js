const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('9935-g4 tester', () => {
  it('1', () => {
    const ex1 = parser('mirkovC4nizCC44\nC4');
    expect(solution(ex1)).toBe('mirkovniz');
  });
  it('2', () => {
    const ex1 = parser('12ab112ab2ab\n12ab');
    expect(solution(ex1)).toBe('FRULA');
  });
});
