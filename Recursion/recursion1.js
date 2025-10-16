function rex(x){
    if(x ===0) return;
    console.log(x)
    let num =  x -1;
    rex(num)
}

let a=5;
rex(a)