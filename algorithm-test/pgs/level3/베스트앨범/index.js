function solution(genres, plays) {
  const answer = [];
  const genresMap = genres.reduce((acc, cur, idx) => {
    if (acc[cur]) {
      acc[cur] = {
        accPlays: acc[cur].accPlays + plays[idx],
        plays: [...acc[cur].plays, { idx, play: plays[idx] }],
      };
    } else {
      acc[cur] = {
        accPlays: plays[idx],
        plays: [{ idx, play: plays[idx] }],
      };
    }
    return acc;
  }, {});
  // 속한 노래가 많이 재생된 장르를 먼저 수록합니다. -> accPlays순으로 정렬
  // 장르 내에서 많이 재생된 노래를 먼저 수록합니다. -> plays를 play내림차순으로 정렬
  // 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다 -> play가 같다면 idx를 기준으로 오름차순 정렬
  const res = Object.values(genresMap).sort((a, b) => b.accPlays - a.accPlays);
  for (const value of res) {
    const playsArr = value.plays;
    if (playsArr.length === 0) continue;
    if (playsArr.length === 1) {
      answer.push(playsArr[0].idx);
      continue;
    }
    const sorted = playsArr.sort((a, b) => (a.play === b.play ? a.idx - b.idx : b.play - a.play));
    answer.push(sorted[0].idx);
    answer.push(sorted[1].idx);
  }
  return answer;
}

console.log(
  solution(['classic', 'classic', 'classic', 'classic', 'pop'], [500, 500, 600, 100, 300])
);
// [2, 0, 4]
