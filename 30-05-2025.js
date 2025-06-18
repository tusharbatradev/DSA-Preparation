function findPivot(arr) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] >= arr[0]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

function binarySearch(arr, start, end, key) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) return mid;
    else if (arr[mid] < key) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

function searchInRotatedArray(arr, key) {
  let pivot = findPivot(arr);

  if (key >= arr[0] && key <= arr[pivot - 1]) {
    return binarySearch(arr, 0, pivot - 1, key);
  }

  return binarySearch(arr, pivot, arr.length - 1, key);
}

console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 0));

