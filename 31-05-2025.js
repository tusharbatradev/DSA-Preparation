function squareRoot(num) {
  let start = 0;
  let end = num;
  let ans;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid === num) {
      return mid;
    } else if (mid * mid < num) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return ans;
}

console.log(squareRoot(36));
