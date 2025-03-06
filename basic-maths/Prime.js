// Check for prime

function isPrime(n) {
  if (
    n === 1 ||
    n <= 0 ||
    (n % 2 === 0 && n !== 2)
  ) {
    return false;
  }
  for (let i = 3; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

isPrime(101)
  ? console.log("Yes")
  : console.log("No");
