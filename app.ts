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