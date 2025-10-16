var singleNumber = function(nums) {
    let xor = 0;
    for(let i=0;i<nums.length;i++){
        xor = xor^nums[i]; 
    }
    console.log(xor);
};

singleNumber([4,1,2,1,2])