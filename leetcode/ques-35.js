// my approach

/*
var searchInsert = function (nums, target) {
  if (nums.length === 1) {
    if (nums[0] === target) {
      return 0;
    } else if (nums[0] > target) {
      return 0;
    } else {
      return 1;
    }
  }

  let idx = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === target) {
      return left;
    } else if (nums[right] === target) {
      return right;
    } else if (nums[left] > target) {
      return left;
    } else if (nums[right] > target) {
      idx = right;
    }
    left++;
    right--;
  }
  if (idx === 0) {
    return nums.length;
  } else {
    return idx;
  }
};
*/

// optimized approach (Binary search)

let arr = [1];
target = 0;
function binarySearch(arr, target) {
  let left=0;
  let right = arr.length-1;
  idx=0;

  while(left<=right){
    let mid = Math.floor((left+right)/2);
    if(arr[mid] ===target){
        console.log("found at : ",mid);
    }
     if(arr[mid]>target){
        right=mid-1;
     }
     else{
        left=mid+1
     }
    }
    console.log(left)
  }

binarySearch(arr, target)
