function solution(w, h) {
  let biggerNumber = 0;
  let smallerNumber = 0;
  if (w < h) {
    biggerNumber = h;
    smallerNumber = w;
  } else {
    biggerNumber = w;
    smallerNumber = h;
  }
  let greastestCommonFactor = 1;
  for (let i = Math.floor(smallerNumber / 2); i > 1; i--) {
    if (biggerNumber % i === 0) {
      greastestCommonFactor = i;
      break;
    }
  }
  if (biggerNumber % smallerNumber === 0) {
    greastestCommonFactor = smallerNumber;
  }
  const subtractNumber = biggerNumber + smallerNumber - greastestCommonFactor;
  const answer = w * h - subtractNumber;
  console.log('answer', answer);
  return answer;
}

solution(4, 7);
