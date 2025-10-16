// print n to 1 using recursion
function rex(x){
    if(x===0) return;
    console.log(x)
    let num =  x -1;
    rex(num)
}

let a=5;
rex(a)


// print 1 to n using recursion
let n = 5;
function rexe(x){ 
    if(x>n) return;
    console.log(x)
    let nums =  x+1;
    rexe(nums)
}


rexe(1)