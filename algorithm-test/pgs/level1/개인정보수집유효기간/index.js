const getDate = (date) => {
  const [y, m, d] = date.split('.').map((v) => +v);
  return y * 12 * 28 + m * 28 + d;
};

function solution(today, terms, privacies) {
  const answer = [];

  const todayDate = getDate(today);

  const termsMap = terms.reduce((acc, term) => {
    const [key, value] = term.split(' ');
    acc[key] = `0000.${value}.00`;
    return acc;
  }, {});

  privacies.forEach((privacy, idx) => {
    const [date, term] = privacy.split(' ');
    const expiredDate = getDate(termsMap[term]) + getDate(date) - 1;
    if (expiredDate < todayDate) {
      answer.push(idx + 1);
    }
  });

  return answer;
}

module.exports = { solution };
