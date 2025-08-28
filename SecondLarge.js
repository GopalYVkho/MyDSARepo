function SecondLargest(a){
	let largest = -Infinity;
	let secondlargest = -Infinity;

	for(let i=0;i<a.length;i++){
		if(largest < a[i]){
			largest = a[i];
		}else if(secondlargest < a[i]){
			secondlargest = a[i]
		}
	}
	return secondlargest;
}


let a = [100,4,5,6,-3,3,44,98]


let b = SecondLargest(a);

console.log(b)
