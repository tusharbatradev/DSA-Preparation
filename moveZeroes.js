function moveZeroes(arr) {
  const n = arr.length;
  let i = 0;
  let j = 0;

  while (i < n) {
    if (arr[i] !== 0) {
      arr[j] = arr[i];
      j++;
    }
    i++;
  }

  while (j < n) {
    arr[j] = 0;
    j++;
  }

  return arr;
}

console.log(moveZeroes([1, 0, 0, 3, 12, 0]));
