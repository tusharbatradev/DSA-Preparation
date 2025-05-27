let array = [1, 16, 8, 98, 55, 65, 89, 88];

// Array with functions
function printingArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printingArray(array);

// Max/Min in an array
function maxMin(arr) {
  let minValue = arr[0];
  let maxValue = arr[0];

  //   for min value
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  console.log(`Mininum value in the array is ${minValue}`);
  console.log(`Mininum value in the array is ${maxValue}`);
}
maxMin(array);

// Sum of all elements in an array Homework
function sumOfArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  console.log(`Sum of the array is ${sum}`);
}
sumOfArray(array);

// Linear Search
function linearSearch(array, target) {
  let available = false;

  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      available = true;
    }
  }

  console.log(available);
}

linearSearch(array, 16);

// Reverse an array
function reverseArray(array) {
  let start = 0;
  let end = array.length - 1;

  for (let i = start; i < end; i++) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;

    start++;
    end--;
  }

  console.log(array)
}
reverseArray(array)
