const saleRatios = [10, 20, 30, 40];

function solution(users, emoticons) {
  let answer = [-1, -1];
  const calc = (arr) => {
    const res = [0, 0];
    for (const [userRatio, maxPrice] of users) {
      let total = 0;
      for (const [ratio, discountPrice] of arr) {
        if (ratio >= userRatio) {
          total += discountPrice;
        }
      }
      if (maxPrice <= total) {
        res[0]++;
      } else {
        res[1] += total;
      }
    }
    if (res[0] > answer[0]) {
      answer = res;
    } else if (res[0] === answer[0]) {
      if (res[1] >= answer[1]) {
        answer = res;
      }
    }
  };

  const dfs = (idx, acc) => {
    if (idx >= emoticons.length) {
      calc(acc);
      return;
    }
    for (let i = 0; i < saleRatios.length; i++) {
      const ratio = saleRatios[i];
      let prev = acc[idx];
      acc[idx] = [ratio, prev * (1 - Number(ratio) / 100)];
      dfs(idx + 1, acc);
      acc[idx] = prev;
    }
  };

  dfs(0, [...emoticons]);

  return answer;
}
