function pivotElement(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start < end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] >= arr[0]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return arr[start];
}

console.log(pivotElement([4, 5, 6, 7, 1, 2, 3]));
