function insertAtPos(arr, N, len, K, pos) {
    let idx = pos-1;
    if(len<N){
        for(let i = len-1;i>=idx;i--){
            arr[i+1] = arr[i]
        }
        arr[idx]=K
        len++
        console.log(arr)
    }else{
        console.log("dummy")
    }   
}

let arr2 = [10, 20, 30, 40];
let N2 = 6;
let len2 = arr2.length;
insertAtPos(arr2, N2, len2, 15, 2); 