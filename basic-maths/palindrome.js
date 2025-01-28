// To check a number is palindrome or not time complexity=3ms beats 99%

var isPalindrome = function (x) {
  let rev = 0;
  let n = x;
  if (x < 0) {
    return false;
  }
  while (x > 0) {
    let temp = x % 10;
    rev = rev * 10 + temp;
    x = Math.floor(x / 10);
  }
  if (rev === n) {
    return true;
  } else {
    return false;
  }
};
isPalindrome(121);
