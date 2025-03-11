// Program to find the maximum sum subarray of a fixed size k and also return the first index of that subarray

let arr=[1,3,4,5,2,1,3,4,5,6];
let k = 4;

function slidingWindow(arr,k){
    let sum=0;
    let idx=0;
    //lets create a window
    for(let i=0;i<k;i++){
        sum+=arr[i];
    }
    let maxSum = sum;
    
    // Now slide the window
    for(let i=1;i<=arr.length-k;i++){
        
        sum=sum-arr[i-1]+arr[i+k-1];
        if(sum>maxSum){
            maxSum=sum;
            idx=i;
        }
        
    }
    return [maxSum,idx];
}
let [maxSum,idx]=slidingWindow(arr,k);
console.log(`The maximum subarray of size ${k} is :- ${maxSum}\nand the first idx of the subarray is :-  ${idx}`);