function RemoveElement(nums,value){
    let x = 0;
    for(let i=0;i<nums.length;i++){
        if(value != nums[i]){
            nums[x]=nums[i]
            x++
        }
    }
    return nums
}

const ddd = RemoveElement([1,2,3,4,5,1,2],1)
console.log(ddd)
