const path = require('path');
const fs = require('fs');

const rawInputs = fs.readFileSync(path.resolve(__dirname, '../1644-g4/1.txt')).toString().trim();

const checkPrime = (n) => {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// // 소수구하기: 이중for문, 연속되는 소수들의 합 구하기: 재귀
// const solution = (rawInputs) => {
//   const n = Number(rawInputs);
//   const primes = [];
//   let answer = 0;

//   if (n === 1) return answer;

//   for (let i = 2; i <= n; i++) {
//     if (checkPrime(i)) primes.push(i);
//   }

//   const visited = Array(primes.length).fill(false);

//   const getCases = (idx, acc, visitedIdx) => {
//     if (acc > n) return;
//     if (acc === n) {
//       answer++;
//       return;
//     }
//     for (let i = idx; i < primes.length; i++) {
//       if (visited[i] || i - visitedIdx[visitedIdx.length - 1] > 1) continue;
//       visited[i] = true;
//       getCases(i, acc + primes[i], [...visitedIdx, i]);
//       visited[i] = false;
//     }
//   };

//   getCases(0, 0, []);

//   return answer;
// };

// // ✅ 소수구하기: 이중 for문, 연속되는 소수들의 합 구하기: 투포인터
// const solution = (rawInputs) => {
//   const n = Number(rawInputs);
//   const primes = [];
//   let answer = 0;

//   if (n === 1) return answer;

//   for (let i = 2; i <= n; i++) {
//     if (checkPrime(i)) primes.push(i);
//   }

//   let left = 0;
//   let right = 0;
//   let acc = primes[left];
//   while (left <= right && right < primes.length) {
//     if (acc < n) {
//       right++;
//       acc += primes[right];
//     } else if (acc > n) {
//       acc -= primes[left];
//       left++;
//     } else {
//       // acc === n
//       acc -= primes[left];
//       left++;
//       answer++;
//     }
//   }

//   return answer;
// };

// //  1부터 n까지 투포인터로 돌면서 소수일때만 더하기
// const solution = (rawInputs) => {
//   const n = Number(rawInputs);
//   const numbers = Array.from({ length: n }, (v, i) => i + 1);
//   let answer = 0;

//   if (n === 1) return answer;

//   let left = 1; // 2
//   let right = 1; // 2
//   let acc = numbers[left];
//   while (left <= right && right < numbers.length) {
//     if (acc < n) {
//       right++;
//       if (checkPrime(numbers[right])) {
//         acc += numbers[right];
//       }
//     } else if (acc > n) {
//       acc -= numbers[left];
//       while (left < numbers.length) {
//         left++;
//         if (checkPrime(numbers[left])) break;
//       }
//     } else {
//       // acc === n
//       acc -= numbers[left];
//       while (left < numbers.length) {
//         left++;
//         if (checkPrime(numbers[left])) break;
//       }
//       answer++;
//     }
//   }

//   return answer;
// };

// ✅ 소수구하기: 에라토스테네스의 체, 연속되는 소수들의 합 구하기: 투포인터
const solution = (rawInputs) => {
  const n = Number(rawInputs);
  const primes = [];
  let answer = 0;

  if (n === 1) return answer;

  const arr = Array(n + 1).fill(false);
  for (let i = 2; i < n + 1; i++) {
    if (arr[i]) continue;
    for (let j = 2 * i; j < n + 1; j += i) {
      if (arr[j]) continue;
      arr[j] = true;
    }
  }

  for (let i = 2; i < n + 1; i++) {
    if (!arr[i]) primes.push(i);
  }

  let left = 0;
  let right = 0;
  let acc = primes[left];
  while (left <= right && right < primes.length) {
    if (acc < n) {
      right++;
      acc += primes[right];
    } else if (acc > n) {
      acc -= primes[left];
      left++;
    } else {
      // acc === n
      acc -= primes[left];
      left++;
      answer++;
    }
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
