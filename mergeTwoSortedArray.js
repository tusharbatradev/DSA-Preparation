function mergeSortedArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

console.log(mergeSortedArray([1, 3, 5, 7, 9], [2, 4, 6]));

function mergeWithMN(arr1, m, arr2, n) {
  let i = 0;
  let j = 0;
  let sortedArr = [];

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < m) {
    sortedArr.push(arr1[i]);
    i++;
  }

  while (j < n) {
    sortedArr.push(arr2[j]);
    j++;
  }

  return sortedArr;
}

console.log(mergeWithMN([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
