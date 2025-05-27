// Swap alternates
function swapAlt(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  console.log(arr);
}

swapAlt([1, 2, 3, 4, 5]);

// Unique Number
function uniqueElement(arr) {
  let uniqueNum = 0;

  for (let i = 0; i < arr.length; i++) {
    uniqueNum = uniqueNum ^ arr[i];
  }

  console.log(uniqueNum);
}
uniqueElement([2, 6, 2, 6, 8]);

// Duplicates in an array
function duplicateInArray(arr) {
  let duplicateNum = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (!duplicateNum.includes(arr[i])) {
          duplicateNum.push(arr[i]);
        }
      }
    }
  }

  console.log("Duplicate Number:", duplicateNum);
}
duplicateInArray([3, 5, 6, 8, 3, 7]);

// Intersection Point in array
function intersectionPoint(arr1, arr2) {
  let intersectionArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] < arr2[j]) break;
      if (arr1[i] === arr2[j]) {
        intersectionArr.push(arr1[i]);
        arr2.splice(j, 1);
        break;
      }
    }
  }

  console.log("Intersection point in array", intersectionArr);
}
intersectionPoint([1, 2, 2, 2, 3, 4], [2, 2, 3, 4]);

// Pair sum
function pairSum(arr, s) {
  let pairArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === s) {
        pairArr.push([arr[i], arr[j]]);
      }
    }
  }

  console.log(pairArr);
}

pairSum([1, 2, 3, 4, 5], 5);

// Triplet Sum
function TripleSum(arr, s) {
  let pairArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === s) {
          pairArr.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  console.log(pairArr);
}

TripleSum([1, 2, 3, 0, -1, -2], 2);

// Sort 01
function sortArray(arr) {
  if (arr.length <= 1) return arr;

  let pivotElement = arr[0];
  let smallerArray = [];
  let largerArray = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivotElement) {
      smallerArray.push(arr[i]);
    } else {
      largerArray.push(arr[i]);
    }
  }

  let sortedSmaller = sortArray(smallerArray);
  let sortedLarger = sortArray(largerArray);

  return [...sortedSmaller, pivotElement, ...sortedLarger];
}

console.log(sortArray([0, 1, 0, 1, 1, 0]));

// Swap Sort 01
function swapSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log("Answer of sort by swapping elements", arr);
}
swapSort([0, 1, 0, 1, 1, 0]);
