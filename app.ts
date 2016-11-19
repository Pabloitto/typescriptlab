type User = {
    dataSource : number[],
    findValue : (n:number) => number[]
};


let user1 : User= {
    dataSource : [1,2,3,4,1,2,3],
    findValue :function(n:number) : number []{
        return this.dataSource.filter(i=>i === n);
    }
};

let user2 : User= {
    dataSource : [1,1,1,1,1,1,1],
    findValue :function(n:number) : number []{
        return this.dataSource.filter(i=>i === n);
    }
};

console.log(user2.findValue(1));


let x : number | string = "Hola Mundo";

console.log(x);

x = 123;

console.log(x);

let y :any = 123;

console.log(typeof y);

/*function myFn():never{
    while(true){
        break;
    }
    //return 1;
}*/

let canBeNull : number | null= 12;

canBeNull = null;

let canAlsoBeNull;

canAlsoBeNull = null;
(function(){
    if(true){
        var variable:string = "test1";
    }
    console.log(variable);
   
}());


const addNumbers = function(n1:number,n2:number) : number{
    return n1 + n2;
};

const multiplyNumbers = (n1:number,n2:number) => n1 * n2;

console.log(addNumbers(10,3));
console.log(multiplyNumbers(10,3));

const greet = (friend:string) => console.log("Hello " + friend);

greet("Juan");

const countdown = (start:number = 10 , middle = start / 2) : void => {
    while(start > 0){
        start--;
    }
    console.log("Done",start,middle);
};

//countdown(50);

const numbers = [1,2,3,99,-5];

console.log(Math.max(...numbers));

function makeArray(n:number,n2:number,...args: number[]){
    return args;
}

console.log(makeArray(1,2,...[5,5,5,5,5,5]));
console.log(makeArray(1,2,3,4,5));
const myHobbies = ["Cooking","Sports"];
const [h1,h2] = myHobbies;

console.log("My hobbies are", h1,h2);

const userData = {userName : "Juan" , age : 27};

const {
    userName,
    age
} = userData;

console.log(userName,age);

const myName = "Juan";