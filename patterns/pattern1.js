/*   

----------------  pattern 1

 ****
 ****
 ****
 ****

 */
// code :-

// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 4; j++) {
//     document.write("*");
//     if (j < 4) {
//       document.write(" ");
//     }
//   }
//   document.write("<br/>");
// }

/*
----------------  pattern 2
* 
* * 
* * * 
* * * * 
* * * * * 

*/

// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     document.write("* ");
//   }
//   document.write("<br/>");
// }

/*
----------------  pattern 3
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(`${j} `);
//   }
//   document.write("<br/>");
// }

/*
----------------  pattern 4
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 

*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(`${i} `);
//   }
//   document.write("<br/>");
// }

/*
----------------  pattern 5

* * * * * 
* * * * 
* * * 
* * 
* 

*/

// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j >= i; j--) {
//     document.write("* ");
//   }
//   document.write("<br/>");
// }
