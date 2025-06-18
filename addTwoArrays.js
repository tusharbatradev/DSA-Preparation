function addTwoArrays(arr1, arr2) {
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry > 0) {
    let val1 = i >= 0 ? arr1[i] : 0;
    let val2 = j >= 0 ? arr2[j] : 0;

    let sum = val1 + val2 + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result.reverse();
}
console.log(addTwoArrays([1, 2, 3], [9, 9]));
