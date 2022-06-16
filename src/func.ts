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
interface ClockInterface{
    currentTime: Date;
    sayTime():string ;

}
class Clock implements ClockInterface{
    currentTime: Date = new Date();
    constructor(){

    }
    sayTime(): string {
        return `current time is ${this.currentTime}`
    }
}
let obj2 = new Clock()
console.log(obj2.currentTime);

//inheritance
/* super class*/
class P{
    x!:string;
    constructor(a:string){
        this.x = a
    }
    say(){
        console.log(`hello p`);
        
    }
}
class Q extends P {
    y!: string
    constructor(a:string, b:string){
        super(a)
        this.y = b
    }
    //method overridding
    // say(){
    //     console.log(`hello q`);
        
    // }
}
let p = new P("hello")
let q = new Q("heelo","world")
console.log(q.say())