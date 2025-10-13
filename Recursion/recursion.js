function plugPoint(){
    return plughole()    
}

function plughole(){
    return charger()
}

function charger(){
    return SwitchOn()
}
 
function SwitchOn(){
    return true
}

// console.log(plugPoint())



function basicRec(x){
    if(x === 5){
        return true
    }else{
        console.log(x)
        return basicRec(x+1)
    }
}

// console.log(basicRec(1))



// Loop vs Recursion
function multiply(arr){
    let check = 1;
    for(let i=0;i<arr.length;i++){
        check = check * arr[i]
    }
    console.log(check)
}
// multiply([1,2,3,4,5])


function multiplyRec(arr){
    console.log(arr[arr.length-1],arr.slice(0,arr.length-1))
    if(arr.length <= 0){
        return 1;
    }else{
        return arr[arr.length-1]*multiplyRec(arr.slice(0,arr.length-1))
    }
}
console.log(multiplyRec([1,2,3,4,5,6]))


// Factorial

function Factorial(x){
    if(x <= 0){
        return 1
    }else{
        return x * Factorial(x-1)
    }
}

console.log(Factorial(5))


// Range of Number
console.log("Range Of NUmber")
function RangeOfNUmber(s,e){
    if(e < s){
        return [];
    }else {
        const number = RangeOfNUmber(s,e-1);
        number.push(e);
        return number;
    }
}

console.log(RangeOfNUmber(1,9))


// Palindrom Number
console.log("Palindrom Number")

function Palindrom(x){
    let start = 0;
    
}

console.log(Palindrom(1221))

