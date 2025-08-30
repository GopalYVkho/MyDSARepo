function count(a){
    if(a == 0) return 1;

    a = Math.abs(a)
    let count_note = 0;
    while(a>0){
        a = Math.floor(a/10);
        count_note++
    }
    return count_note
}
let a = -0
let c = count(a)
console.log(c)


// Edge Case
// s=0
// s=-234
