function FindSmall(a){
	let smallest = a[0]
	for(let i=0;i<a.length;i++){
		if(a[i]<smallest){
			smallest = a[i]
		}
	}
	return smallest
}

let a=[1,2,3,4,5,-1,-8,-99,-987];

let b=FindSmall(a);

console.log(b)
