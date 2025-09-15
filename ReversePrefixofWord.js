var reversePrefix = function(word, ch) {
    let arr = word.split("")
    let left = 0;
    let right = -1;
    for(let i =0 ;i<word.length;i++){
        if(word[i]==ch){
            right = i
            break;
        }
    }
    if (right === -1) return word;

    while(left < right){
        let temp = arr[right]
        arr[right]=arr[left]
        arr[left] = temp
        left++
        right--
    }
    console.log(arr.join())
    // return arr.join("")
};

reversePrefix("abcdefd","d")
reversePrefix("xyxzxe","z")

// Lession learned
// string canot swap
// conver to array then swap then join