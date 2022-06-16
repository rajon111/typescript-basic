"use strict";
//bool
let x = true;
// console.log(x);
//num
let check = 100;
check = 500;
// console.log(check);
//str
let str1 = "Good Morning";
let str2 = "Good Evening";
let str3 = "Good Night";
// console.log(`${str1} ${str2} ${str3}`);
//array
let items = [4, 54, 3];
// console.log(items[0])
let items2 = [4, 54, 3, '7', 'hello'];
// console.log(items2[0])
//tuple
let tup;
tup = ['hello', 200];
// console.log(tup[0]);
let tup2;
tup2 = [
    ["A", 29],
    ['B', 200],
    ['C', 100]
];
// console.log(tup2[0][1]);
//enum
var Color;
(function (Color) {
    Color[Color["red"] = 2] = "red";
    Color[Color["green"] = 3] = "green";
    Color[Color["blue"] = 8] = "blue";
    Color[Color["yellow"] = 9] = "yellow";
})(Color || (Color = {}));
//   console.log(Color[2]);
//   console.log(Color.yellow);
//unknown
let notSure = true;
//   console.log(typeof notSure); 
//union
let a = 20;
// console.log(a);
//if-else
let x1 = 10;
let x2 = 15;
if (x1) {
    if (x2) {
        // console.log("yes");
    }
    else {
        // console.log("no");
    }
}
else {
    // console.log("no");  
}
//loop
let items1 = [3, 87, 4];
for (let i of items1) {
    // console.log(i);
}
// type User = {
//     userName:string,
//     password:any
// }
const User = {
    userName: 'Rajon',
    password: 98738237,
};
console.log(User.userName);
