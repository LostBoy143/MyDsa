// Brute Force Approach

/*Complexity :- O(n1 * n2)*/

function Hcf(n1, n2) {
  let hcf;
  for (let i = 1; i <= n1; i++) {
    if (n1 % i === 0) {
      for (let j = 1; j <= n2; j++) {
        if (n2 % j === 0) {
          if (i === j) {
            hcf = i;
          }
        }
      }
    }
  }
  console.log(hcf);
}
Hcf(10, 13);

// Better Brute force Approach

/*Complexity :- O(max(n1,n2))*/

//Gcd or Hcf

function Hcf(n1, n2) {
  let num = Math.max(n1, n2);
  let hcf;
  for (let i = 1; i <= num; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      hcf = i;
    }
  }
  console.log(hcf);
}
Hcf(18, 24);

/* There is one better solution but not the optimal one:-


1. We store the minimum of  two numbers in the num;
2. Then we loop downwards from the min to 1;
3. The first number that will  divide bothe the numbers will be the Hcf
4. The Time Complexity will be slightly better  :- o(min(n1,n2)) 👍


*/
