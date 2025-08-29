function arrayDeletion(arr,len,k){
    let idx=-1;
    console.log(arr)
    for(let i = 0;i<len;i++){
        if(arr[i]===k){
            idx=i;
            break
        }
    }
    if(idx===-1){
        console.log("No data Found")
    }
    for(let j=idx+1;j<len;j++){
        arr[j-1]=arr[j]
    }
    len--;
    console.log(arr.slice(0,len))
}




arr = [10, 15, 20, 30, 40];
len = 5;
K = 15;
arrayDeletion(arr,len,K)
