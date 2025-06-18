function rotatedArray(nums, k){
    let newArr = [];
    let n = nums.length;

    for(let i=0 ; i<n ; i++){
        newArr[(i + k) % n] = nums[i]
    }

    for (let i = 0; i < n; i++) {
        nums[i] = newArr[i]; 
    }

    return nums;
}

console.log(rotatedArray([1,7,9,11], 2))
