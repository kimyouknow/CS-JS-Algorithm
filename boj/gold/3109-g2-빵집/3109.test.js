const { solution } = require('./index');

const parser = (rawInputs) => rawInputs.toString().trim().split('\n');

describe('3109-g2-빵집 tester', () => {
  it('1', () => {
    const ex1 = parser('5 5\n.xx..\n..x..\n.....\n...x.\n...x.');
    expect(solution(ex1)).toBe(2);
  });
  it('2', () => {
    const ex1 = parser(
      '6 10\n..x.......\n.....x....\n.x....x...\n...x...xx.\n..........\n....x.....'
    );
    expect(solution(ex1)).toBe(5);
  });
  it('건물로 전부 막혀있는 경우', () => {
    const ex1 = parser('5 5\n.xx..\n..x..\n..x..\n..xx.\n...x.');
    expect(solution(ex1)).toBe(0);
  });
  it('만약 탐색했는데 갈 수 도달할 수 없으면 visited를 원상복구하기', () => {
    const ex1 = parser('5 9\n.x.....x.\n.x..x..x.\n.x..x..x.\n....x....\n.x..x..x.');
    expect(solution(ex1)).toBe(1);
  });
});
