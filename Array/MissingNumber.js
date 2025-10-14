var missingNumber = function(nums) {
    let len=nums.length;
    let sum = len*(len+1)/2

    let sumofMissingNo =0;
    for(let i=0;i<nums.length;i++){
        sumofMissingNo = sumofMissingNo+nums[i]
    }

    console.log(sum-sumofMissingNo)
};

missingNumber([3,0,1])
missingNumber([0,1])
missingNumber([9,6,4,2,3,5,7,0,1])