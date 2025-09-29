// Sorted Incrementing Order
// [1,2,4,5]
// a[i+1]>a[i]

// Sorted decrementing Order
// [12,9,6,4,3,1]
// a[i+1]<a[i]

// Sorted Non Decresing Order
// [0,0,1,1,1,2,2,3,4,4,4,]
// a[i+1]>=a[i]

// [0,1,1,2,2,3,3,3,4,4]

function removeDup(x){
    let a=0;
    for(let i=0;i<x.length;i++){
        if(x[i]>x[a]){
            a=a+1
            x[a] = x[i]
        }
    }
    console.log(x)
}


removeDup([0,1,1,2,2,3,3,3,4,4])
