// sum of n no.
function findSum(n,sum=0){
    if(n===25){
        return sum;
    }
    
    sum = sum+n;
    return findSum(n-1,sum);
    
    
    }
    
    console.log(findSum(10));