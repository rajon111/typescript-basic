function sum(x:number, y:number): number{
    return x*y;
}
//  console.log(sum(4,7));

 //
 function printLable(labelOBJ: {size:number, label:string}){
    // console.log(labelOBJ.label, labelOBJ.size);
    
 }
let myOBJ= {size: 10, label: 'size of obj'}
printLable(myOBJ);

//same thing using interface

interface labelOBJ{
    size:number, 
    label:string
}

function printLable1(labelOBJ: labelOBJ){
    // console.log(labelOBJ.label, labelOBJ.size);
    
 }
 let myOBJ1= {size: 10, label: 'size of obj'}
 printLable1(myOBJ1);

 //function
 interface Calculate{
    (x:number, y: number): number;
 }
  
 let exlopre: Calculate = (x:number, y:number): number =>{
    return x *y;
 }
 console.log(exlopre(10,12));

 //class

 class Greeter{
    greeting!:string
    constructor(msg:string){
        this.greeting = msg
    }
 }
let obj = new Greeter('hello')
console.log(obj.greeting);
//
class Greeter1{
    greeting!:string;
    constructor(){

    }
    set Greetings(gtr:string){
        this.greeting = gtr;
    }
    get Greetings(): string{
        return this.greeting
    }
}
let greet = new Greeter1()
greet.Greetings = "hello hello hello"
if(greet.Greetings){
    console.log(greet.greeting);

}

//interface in class

interface Clock


