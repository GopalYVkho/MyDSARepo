function reverseInteger(x){
    var check = x<0?true:false;
    let convert = String(x);
    let i=convert.length-1
    let j =""
    for(i;i>=0;i--){
        j=j+convert[i]
    }
    return check ===true ? '-'+parseInt(j):parseInt(j)

}


console.log(reverseInteger(123))
console.log(reverseInteger(-123))
console.log(reverseInteger(100))