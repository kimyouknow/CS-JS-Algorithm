const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('7785-s5 tester', () => {
  it('1', () => {
    const ex1 = parser('4\nBaha enter\nAskar enter\nBaha leave\nArtem enter');
    expect(solution(ex1)).toBe('Askar\nArtem');
  });
});
