var findTheArrayConcVal = function(nums) {
    let first = 0;
    let last = nums.length-1;
    let temp=0;
    for(let i=0;i<last;i++){
        let nv = nums[i].toString()+nums[last].toString()
        let convert = parseInt(nv)
        temp = temp+convert
        console.log(temp)
        last--
    }
    console.log(nums.length,"d")
    if(nums.length%2!=0){
        console.log(temp+nums[last],"f")
    }else{
        console.log(temp,"f")
    }
};


// findTheArrayConcVal([5,14,13,8,12])
findTheArrayConcVal([7,52,2,4])
// findTheArrayConcVal([1,78,27,48,14,86,79,68,77,20,57,21,18,67,5,51,70,85,47,56,22,79,41,8,39,81,59,74,14,45,49,15,10,28])
