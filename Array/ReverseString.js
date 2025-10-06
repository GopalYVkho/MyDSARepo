// 
function rev(x){
    let length = x.length;
    let halflength = Math.floor(length/2);
    for(let i=0;i<halflength;i++){
        let temp = x[i];
        x[i] = x[length-1-i];
        x[length-1-i] = temp
    }
    console.log(x)
}

rev(["h","e","l","l","o"])