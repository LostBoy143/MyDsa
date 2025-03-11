// Basic sliding window
let arr = [1, 3, 4, 5, 2, 1, 3, 4, 5, 6];
let k = 5;

function slidingWindow(arr, k) {
  // creating a window
  let window = [];
  for (let i = 0; i < k; i++) {
    window.push(arr[i]);
  }
  console.log(`starting window :- ${window}\n`);

  // sliding the window

  for (let i = 1; i <= arr.length - k; i++) {
    window.shift();
    window.push(arr[i + k - 1]);
    console.log(`slided window :- ${window} \n`);
  }
}
slidingWindow(arr, k);
