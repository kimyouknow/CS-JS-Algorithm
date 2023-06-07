const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('1283-s1 tester', () => {
  it('1', () => {
    const ex1 = parser('5\nNew\nOpen\nSave\nSave As\nSave All');
    expect(solution(ex1)).toBe('[N]ew\n[O]pen\n[S]ave\nSave [A]s\nSa[v]e All');
  });
  it('2', () => {
    const ex1 = parser('8\nNew window\nNew file\nCopy\nUndo\nFormat\nFont\nCut\nPaste');
    expect(solution(ex1)).toBe(
      '[N]ew window\nNew [f]ile\n[C]opy\n[U]ndo\nF[o]rmat\nFon[t]\nCut\n[P]aste'
    );
  });
  it('3', () => {
    const ex1 = parser('5\nNNew\nOpen\nSave\nSave As\nSave All');
    expect(solution(ex1)).toBe('[N]New\n[O]pen\n[S]ave\nSave [A]s\nSa[v]e All');
  });
  it('4', () => {
    const ex1 = parser('2\nA\nAB B');
    expect(solution(ex1)).toBe('[A]\nAB [B]');
  });
  it('5', () => {
    const ex1 = parser('4\na b\nb c\na c\na b c');
    expect(solution(ex1)).toBe('[a] b\n[b] c\na [c]\na b c');
  });
  it('6', () => {
    const ex1 = parser('2\na b bcd\na a acd');
    expect(solution(ex1)).toBe('[a] b bcd\na a a[c]d');
  });
  it('7', () => {
    const ex1 = parser('2\na b bcd\na a acd');
    expect(solution(ex1)).toBe('[a] b bcd\na a a[c]d');
  });
});
