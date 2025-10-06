function profit(params) {
    let min = params[0];
    let maxProfit = 0;
    for(let i=1;i<params.length;i++){
        // maxProfit
        if(params[i]-min>maxProfit){
            maxProfit=params[i]-min;
        }
        console.log(params[i],min);
        // min
        if(params[i]<min){
            min = params[i]
        }
    }
    console.log(maxProfit)
}

profit([7,1,5,3,10,4])

