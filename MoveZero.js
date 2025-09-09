function MoveZero(x){
    let y=0;
    for(let i=0;i<x.length;i++){
        if(x[i] !== 0){
            x[y] = x[i]
            y++
        }
    }
    for(let j=y;j<x.length;j++){
        x[j]=0
    }
    console.log(x)

}
// var moveZeroes = function(nums) {
//     let x = 0;

//    for(let i = 0; i < nums.length; i++) {
//        if(nums[i] !== 0) {
//            nums[x] = nums[i];
//            x++;
//        }
//    }
//    for(let i = x; i < nums.length; i++) {
//        nums[i] = 0;
//    }
//    console.log(nums)
// };

// moveZeroes([0,1,0,3,12])
MoveZero([0,1,0,3,12])