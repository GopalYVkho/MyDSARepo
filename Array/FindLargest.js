function FindLargest(arr){
   let temp = 0;
   for(let i=0;i<arr.length;i++){
	
	if(temp < arr[i]){
		temp=arr[i];

	}
	
   }
	return temp


}

let a = [5,0,7,10,8,17,1]

let b = FindLargest(a);
console.log(b)
