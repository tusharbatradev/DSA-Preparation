function sortedRotatedArray(nums){
    let n = nums.size;
    let count = 0;

    for(let i=0 ; i<n-1 ; i++){
        if(nums[i] > nums[i+1]){
            count++
        }
    }

    if(nums[n-1] > nums[0]){
        count++
    }

    return count <= 1
}

console.log(sortedRotatedArray([3,4,5,1,2]))