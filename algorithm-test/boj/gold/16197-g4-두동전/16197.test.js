const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('16197-g4-두동전 tester', () => {
  it('1', () => {
    const ex1 = parser('1 2\noo');
    expect(solution(ex1)).toBe(1);
  });
  it('2', () => {
    const ex2 = parser('6 2\n.#\n.#\n.#\no#\no#\n##');
    expect(solution(ex2)).toBe(4);
  });
  it('3', () => {
    const ex3 = parser('6 2\n..\n..\n..\no#\no#\n##');
    expect(solution(ex3)).toBe(3);
  });
  it('4', () => {
    const ex4 = parser('5 3\n###\n.o.\n###\n.o.\n###');
    expect(solution(ex4)).toBe(-1);
  });
  it('5', () => {
    const ex5 = parser('5 3\n###\n.o.\n#.#\n.o.\n###');
    expect(solution(ex5)).toBe(3);
  });
});
