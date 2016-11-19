// Exercise 1 - How was your TypeScript Class?
class Car {
    
    public acceleration:number = 0;
    
    constructor(public name:string){
        
    }

    public honk():void{
        console.log("Toooooooooot!");
    };
 
    public accelerate(speed:number):void {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
abstract class BaseObject {
    private _width:number = 0;
    private _length:number = 0;

    set width(v:number){
        this._width = v;
    }

    get width(){
        return this._width
    }

    set length(v:number){
        this._length = v;
    }

    get length(){
        return this._length;
    }
};

class Rectangle extends BaseObject{
    calcSize(){
        return this.width * this.length;
    }
}

var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person{
    private _firstName : string;
    public enumerable:boolean;
    public configurable:boolean;

    set firstName(v:string){
        this._firstName = v;
    }

    get firstName(){
        return this._firstName;
    }

}
var person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);