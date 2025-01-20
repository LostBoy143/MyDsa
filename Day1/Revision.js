// const student = {
//   name: "Shubham SIngh",
//   age: 21,
//   cgpa: 7.9,
// };
// console.log(student);
// student.name = "Shubham Singh";
// console.log(student);
// console.log(student.name);

//Strings are unique
/*
let string = "abcd" + 1;
console.log(string);*/

// console.log(5 % 2);

// let num = prompt("Please enter a number : ");
// if (num % 5 === 0) {
//   console.log(
//     "Yes! The number is divisible by 5"
//   );
// } else console.log("Nope bro");

// let randomNumber = Math.floor(
//   Math.random() * 100
// );
// console.log(randomNumber);

// let i = 1;
// while (i <= 50) {
//   console.log("Jai maa saraswati");
//   ++i;
// }

// for of loop is used to return the elements of array or strings
// const str = "Shubaasoako";
// let count = 0;
// for (let i of str) {
//   count++;
// }
// console.log(count);

// for in loop returns the index of the element
// for (let i in student) {
//   console.log(i);
// }

//  //strings methods in js

// let str = "  Shubham Singh";
// const upper = str.toUpperCase();
// const lower = str.toLowerCase();
// const trimmed = str.trim(); // trims extra whitespace from front and back
// const sliced = trimmed.slice(0, 7); // slice a sub string

// let count = 0;
// for (let i of trimmed) {
//   if (i === " ") {
//     break;
//   }
//   count++;
// }
// console.log(count);
// console.log(upper, lower, trimmed, sliced);

// let str2 = " Nikita Yadav";
// let combined = str.concat(str2);
// console.log(combined);
// console.log(combined.split(""));
// console.log(str.replace(" ", ""));

// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Guava",
// ];

// console.log(fruits.join(" ~ "));
// let userName = prompt("Enter your name  : ");
// // let user = [];
// // for (let i = 0; i < userName.length; i++) {
// //   if (userName[i] !== " ") {
// //     user.push(userName[i]);
// //   }
// // }
// let user = userName
//   .split("")
//   .filter((char) => char !== " ");

// console.log(user);
// alert("@" + user.join("") + userName.length);

// const marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }
// console.log("Avg marks : " + sum / marks.length);
// console.log(marks.toString());
