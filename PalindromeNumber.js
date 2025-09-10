function Palindrome(x){
    if(x<0){
        return false
    }
    let s = String(x)
    let i = s.length-1;
    let j = 0;
    while(j<i){
        if(s[j] !== s[i]){
            return false
        }
        j++;
        i--
    }
    return true
}

console.log(Palindrome(1234))
console.log(Palindrome(121))


// edge case
// negative numbers
// if number start negative(-) always false

