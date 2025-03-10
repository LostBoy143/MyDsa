//Brute force 

// reversing an array
let arr =  [1,2,3,4,5,6,7,8,9,10];
function reverse(arr){
    let reversedArr=[]
    for(let i=arr.length-1;i>=0;i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

console.log(reverse(arr)); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]


