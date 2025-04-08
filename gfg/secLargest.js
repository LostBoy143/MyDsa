function getSecondLargest(arr) {
  // Code Here
  if (arr.length <= 1) {
    return -1;
  }
  let max = arr[0];
  let sec = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      sec = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > sec) {
      sec = arr[i];
    }
  }
  return sec;
}
