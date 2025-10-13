

function mco(arr){
    let max=0;
    let inc=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            inc++;
            if(inc>max){
                max=inc
            }
        }else{
            inc=0
        }
    }
    console.log(max)
}

mco([1,1,0,0,1,1,1,1])