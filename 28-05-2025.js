function firstOccurence(array, key) {
  let ans = -1;

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === key) {
      ans = mid;
      end = mid - 1;
    } else if (array[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  console.log("First", ans);
}

firstOccurence([1, 2, 3, 3, 5], 3);

function lastOccurence(array, key) {
  let ans = -1;

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === key) {
      ans = mid;
      start = mid + 1;
    } else if (array[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  console.log("Last", ans);
}
lastOccurence([1, 2, 3, 3, 5], 3);

function peakElement(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] < array[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return array[start]; 
}

console.log(peakElement([2, 6, 8, 4, 2, 1, 0])); 
