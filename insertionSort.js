function insertionSort(arr) {
  let sortedArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let inserted = true;
    for (let j = 0; j < sortedArr.length; j++) {
      if (arr[i] < sortedArr[j]) {
        sortedArr.splice(j, 0, arr[i]);
        inserted = false;
        break;
      }
    }
    if (inserted) {
      sortedArr.push(arr[i]);
    }
  }

  console.log(sortedArr);
}
insertionSort([8, 2, 14, 11, 22, 5]);
