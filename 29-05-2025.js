function pivotElement(arr) {
  let start = 0,
    end = arr.length - 1,
    mid;
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);
    if (arr[0] < arr[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return arr[start];
}
console.log(pivotElement([3, 4, 0, 1, 2]));
