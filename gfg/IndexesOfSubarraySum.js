/*Given an array arr[] containing only non-negative integers, your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value target. You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. You need to find the first subarray whose sum is equal to the target.

Note: If no such array is possible then, return [-1].*/
class Solution {
  subarraySum(arr, target) {
    // code here
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum = +arr[i];
      if (sum === target) {
        return [i + 1, i + 1];
      }
      for (let j = i + 1; j < arr.length; j++) {
        sum += arr[j];
        if (sum === target) {
          return [i + 1, j + 1];
        } else if (sum > target) {
          break;
        }
      }
      sum = 0;
    }
    return [-1];
  }
}
