var findMaxAverage = function(nums, k) {
    let sum=0;
      //first lets create a window
      for(let i =0;i<k;i++){
          sum+=nums[i];
      }
      let maxAvg=sum/k;
  
      //lets slide the window
  
      for(let i=1;i<=nums.length-k;i++){
        sum=sum-nums[i-1]+nums[i+k-1]
        if(sum/k>maxAvg){
          maxAvg=sum/k;
        }
  
  
      }
      return Number(maxAvg.toFixed(5)); 
  };