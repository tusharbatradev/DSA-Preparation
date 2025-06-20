function addTwoArrays(arr1, arr2) {
  let carry = 0;
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let result = [];

  while (i >= 0 || j >= 0 || carry) {
    let num1 = i >= 0 ? arr1[i] : 0;
    let num2 = j >= 0 ? arr2[j] : 0;

    let sum = num1 + num2 + carry;
    result.unshift(sum % 10); 
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result;
}
console.log(addTwoArrays([9,9], [9,9]));
