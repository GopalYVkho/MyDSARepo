var fizzBuzz = function(n) {
    let temp =[]
    for(let i=1;i<n+1;i++){
        if(i%3 == 0 && i%5 == 0){
            temp.push("FizzBuzz"); 
        }
        else if(i%3 == 0){
            temp.push("Fizz"); 
        }else if(i%5 == 0){
            temp.push("Buzz"); 
        }else{
            temp.push(String(i)); 
        }
    }
    console.log(temp);
};

fizzBuzz(5)
fizzBuzz(15)
fizzBuzz(30)
