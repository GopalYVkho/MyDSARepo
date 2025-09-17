var flipAndInvertImage = function(image) {
   for(let i=0;i<image.length;i++){
        let first=0;
        let last=image.length-1;
        for(j=0;j<image[i].length;j++){
            console.log(image[i][j])
            let temp = image[i][last]
            image[i][last] = image[i][j]
            image[i][j]=temp
            last-- 
        }
        console.log(image)
   }
    
};

flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])