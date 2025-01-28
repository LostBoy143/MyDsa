// leetcode problem = 7 : reversing a number

var reverse = function (x) {
  let rev = 0;
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  let isNegative = x < 0;
  n = Math.abs(x);
  while (n > 0) {
    let lastDigit = n % 10;
    rev = rev * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  if (INT_MIN > rev || INT_MAX < rev) {
    return 0;
  }
  return isNegative ? -rev : rev;
};
reverse(79800);
