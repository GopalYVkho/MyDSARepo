function removeDup(x){
    let index = 1;
    for(let i=1;i<x.length;i++){
        if(x[i]>x[i-1]){
            x[index]=x[i];
            index++
        }
    }
    console.log(x.slice(0,index))
}

let a = removeDup([0,0,1,1,1,2,2,3,3,4])
let b = removeDup([1,1,1,2,2,3,3,4,5555])
