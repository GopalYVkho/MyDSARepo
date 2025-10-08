// Without tutorial Not solved
// var moveZeroes = function(nums) {
//     let len = nums.length-1;
//     for(let i=0;i<len;i++){
//         // console.log(nums[i]===0)
//         console.log(nums[i],i)
//         if(nums[i]===0){
//             let temp = nums[i]
//             nums[i] = nums[i+1]
//             nums[i+1] = temp
//         }
//         console.log(nums)
//     }
//     console.log(nums)
// };

// moveZeroes([0,1,0,3,12])

var moveZeroes = function(nums) {
    // using Two Pointers
    let x = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != 0 ){
            nums[x]=nums[i];
            x++
        }
    }

    for(let i=x;i<nums.length;i++){
        nums[x]=0
        x++
    }
    console.log(nums)

};

moveZeroes([0,1,0,3,12])
moveZeroes([0,0,0,0,0])