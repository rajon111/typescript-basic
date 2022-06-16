//bool
let x:boolean = true;
// console.log(x);

//num
let check:number = 100
check=500;
// console.log(check);

//str

let str1:string = "Good Morning"
let str2:string = "Good Evening"
let str3:string = "Good Night"
// console.log(`${str1} ${str2} ${str3}`);

//array

let items:number[] = [4,54,3]
// console.log(items[0])


let items2:any[] = [4,54,3,'7', 'hello']
// console.log(items2[0])

//tuple

let tup: [string, number]
tup = ['hello', 200]
// console.log(tup[0]);

let tup2: [string, number][]
tup2 = [
    ["A", 29],
    ['B', 200],
    ['C', 100]
]
// console.log(tup2[0][1]);

//enum

enum Color {
   red=2,
   green,
   blue=8,
   yellow

  }
//   console.log(Color[2]);
//   console.log(Color.yellow);

  //unknown
  let notSure:unknown = true
//   console.log(typeof notSure); 

  //union

let a: string | number = 20;
// console.log(a);

//if-else
let x1 = 10
let x2 = 15

if(x1){
    if(x2){
        // console.log("yes");
        
    }else{
        // console.log("no");
        
    }
}
else{
    // console.log("no");  
}

//loop

let items1:number[] =[3,87,4]

for (let  i of items1){
    // console.log(i);
    
}

// items1.map( i => console.log(i))

//Object

interface User {
    userName:string,
    password:any
}

// type User = {
//     userName:string,
//     password:any
// }
const User:User = {
    userName:'Rajon',
    password:98738237,
}
console.log(User.userName);

