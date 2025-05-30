// Binary Search
function BinarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let available = false;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) {
      available = true;
      break
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(available);
}

BinarySearch([2, 6, 5, 8, 9], 11);
