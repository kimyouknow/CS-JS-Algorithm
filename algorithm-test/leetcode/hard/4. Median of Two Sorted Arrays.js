const quickSortInPlace = (arr) => {
  const recursive = (leftIdx, rightIdx) => {
    if (leftIdx >= rightIdx) return;
    const pivot = Math.floor((leftIdx + rightIdx) / 2);
    let low = leftIdx;
    let high = rightIdx;
    const pivotValue = arr[pivot];
    // low와 high가 교차하면 종료
    while (low <= high) {
      // low가 가리키는 원소가 기준보다 커질때까지 low++
      while (arr[low] < pivotValue) {
        low++;
      }
      // high가 가리키는 원소가 기준보다 작아질때까지 high--
      while (arr[high] > pivotValue) {
        high--;
      }
      if (low <= high) {
        const swap = arr[low];
        arr[low] = arr[high];
        arr[high] = swap;
        low++;
        high--;
      }
    }

    recursive(leftIdx, high);
    recursive(low, rightIdx);
  };

  recursive(0, arr.length - 1);
  return arr;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let answer = 0;
  const n = nums1.length;
  const m = nums2.length;
  // const merged = [...nums1, ...nums2].sort((a,b) => a - b)
  const merged = quickSortInPlace([...nums1, ...nums2]);
  const mid = n + m;
  const median = Math.floor((n + m) / 2);
  if ((n + m) % 2 == 0) {
    answer = (merged[median] + merged[median - 1]) / 2;
  } else {
    answer = merged[median];
  }
  return answer;
};

// read

// nums1, nums2 = sorted number[]
// <<time complexity should be O(logn(m + n))>>

// - 중간 값 찾기
//     - m + n : 짝수 => Math.floor((m+n) / 2), Math.floor((m+n) / 2) - 1
//     - m + n : 홀수 => Math.floor((m+n) / 2)
// - 번갈아가면서 중간 값의 인덱스만 큼 이동
//     - 시간 복잡도: O(m+n)

// sol1: 25m
// - 두 배열을 정렬하고 중간값 계산하기
//       - quicksort구현
