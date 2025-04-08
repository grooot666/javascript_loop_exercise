// switch
// let mount = 10;
// switch (mount) {
//   case 2:
//   case 3:
//   case 4:
//     console.log("spring");
//     break;
//   case 5:
//   case 6:
//   case 7:
//     console.log("summer");

//     break;
//   case 8:
//   case 9:
//   case 10:
//     console.log("autumn");

//     break;
//   case 11:
//   case 12:
//   case 1:
//     console.log("winter");
// }

// //8
// const bat = 67;
// const ochir = 101;

// switch (true) {
//   case bat < 60:
//     console.log("F");
//     break;
//   case bat > 60 && bat <= 70:
//     console.log("D");

//     break;
//   case bat > 70 && bat <= 80:
//     console.log("C");

//     break;
//   case bat > 80 && bat <= 90:
//     console.log("B");

//     break;
//   case bat > 90 && bat <= 100:
//     console.log("A");
// }

// switch (true) {
//   case ochir < 60:
//     console.log("F");
//     break;
//   case ochir > 60 && ochir <= 70:
//     console.log("D");

//     break;
//   case ochir > 70 && ochir <= 80:
//     console.log("C");

//     break;
//   case ochir > 80 && ochir <= 90:
//     console.log("B");

//     break;
//   case ochir > 90 && ochir <= 100:
//     console.log("A");
//   default:
//     console.log("buruu dvn");
//     break;
// }
// const names = [];
// const lastName = window.prompt();
// names.push(lastName);
// const firstName = window.prompt();
// names.push(firstName);
// const middleName = window.prompt();
// names.push(middleName);
// console.log(names);

//["apple" "banana" "orange"  "kiwi" "grape"]
// 1
// const fruits = ["apple", "banana", "orange", "kiwi", "grape"];
// fruits[0] = "";
//2
// fruits.length = fruits.length - 1;
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// 3
// fruits[2] = "";
// console.log(fruits);
// 4
// fruits[2] = "melon";
// 5
// fruits.pop();
// console.log(fruits[4]);
// 6
// fruits.push("melon");
// 7
// console.log(fruits.length);
// 8
// const names = [];
// const firstName = window.prompt("first name");
// names.push(firstName);
// const lastName = window.prompt("last name");
// names.push(lastName);
// console.log(names);

// // 1
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// //2
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// //3
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// //4
// let number = 100;
// let sum = 0;
// for (let i = 1; i <= number; i++) {
//   sum = sum + i;
// }
// console.log(sum);
//5
// let n = 160;
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);
//6
// let n = 4;
// let sum = 1;
// for (let i = 1; i <= n; i++) {
//   sum = sum * i;
// }
// console.log(sum);
//7
// let n = 123456789;
// let sum = 0;
// while (n > 0) {
//   sum = sum + (n % 10);
//   n = n - (n % 10);
//   n = n / 10;
// }

// console.log(sum);
//8
// let n = 123456;
// let sum = 0;
// let x = 0;
// while (n > 0) {
//   if ((x = n % 10) % 2 == 0) {
//     sum = sum + x;
//   }
//   n = n - (n % 10);
//   n = n / 10;
// }
// console.log(sum);
//9
// let n = 123456;
// let sum = 0;
// let x = 0;
// while (n > 0) {
//   if ((x = n % 10) % 2 !== 0) {
//     console.log(x);
//     sum = sum + x;
//   }
//   n = n - (n % 10);
//   n = n / 10;
// }
// console.log(sum);
// 10
// let n = 123456;
// let sum = 0;
// let x = 0;
// while (n > 0) {
//   if ((x = n % 10) % 2 == 0) {
//     console.log(x);
//     sum = sum + x;
//   }
//   n = n - (n % 10);
//   n = n / 10;
// }
// console.log(sum);
//11
