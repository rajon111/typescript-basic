"use strict";
function sum(x, y) {
    return x * y;
}
//  console.log(sum(4,7));
//
function printLable(labelOBJ) {
    // console.log(labelOBJ.label, labelOBJ.size);
}
let myOBJ = { size: 10, label: 'size of obj' };
printLable(myOBJ);
function printLable1(labelOBJ) {
    // console.log(labelOBJ.label, labelOBJ.size);
}
let myOBJ1 = { size: 10, label: 'size of obj' };
printLable1(myOBJ1);
let exlopre = (x, y) => {
    return x * y;
};
console.log(exlopre(10, 12));
//class
class Greeter {
    constructor(msg) {
        this.greeting = msg;
    }
}
let obj = new Greeter('hello');
console.log(obj.greeting);
//
class Greeter1 {
    constructor() {
    }
    set Greetings(gtr) {
        this.greeting = gtr;
    }
    get Greetings() {
        return this.greeting;
    }
}
let greet = new Greeter1();
greet.Greetings = "hello hello hello";
if (greet.Greetings) {
    console.log(greet.greeting);
}
