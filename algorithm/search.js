const arr1 = [4, 5, 7, 2, 8, 9, 3, 6, 10];

const binarySearch = (target, sortedArr) => {
  const binaryRecursion = (start, end) => {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const midValue = sortedArr[mid];
    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      return binaryRecursion(mid + 1, end);
    } else if (midValue > target) {
      return binaryRecursion(start, mid - 1);
    }
  };
  const start = 0;
  const end = sortedArr.length - 1;
  return binaryRecursion(start, end);
};

const binarySearchWhile = (target, sortedArr) => {
  let s = 0;
  let e = sortedArr.length;
  let answer = -1;
  // s <= e로 조건문을 두면 target이 sortedArr의 가장 작은 값보다 작을 때 무한루프에 걸린다.
  while (s < e) {
    const m = Math.floor((s + e) / 2);
    if (sortedArr[m] === target) {
      answer = m;
      break;
    } else if (sortedArr[m] > target) {
      e = m;
    } else {
      s = m + 1;
    }
  }
  return answer;
};

const lower_bound = (target, sortedArr) => {
  let start = 0;
  let end = sortedArr.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (sortedArr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};
const upper_bound = (target, sortedArr) => {
  let start = 0;
  let end = sortedArr.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (sortedArr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

const nums = arr1.sort((a, b) => a - b);
console.log(binarySearchWhile(1, nums));
