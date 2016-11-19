/*enum Type{
    A,
    B
}

abstract class Person {
    
    private _type : Type;
    
    protected age : number;

    constructor(public name:string, age: number){
        this.age = age;
    }

    printAge(){
        console.log(this.age);
    }

    abstract calculate():number;

    set type(value:Type){
        this._type = value;
    }

    get type(){
        return this._type;
    }

}

class User extends Person{
    constructor(name:string,age:number){
        super(name,age);
    }
    calculate() : number{
        return 1;
    }

    getAge(){
        return this.age;
    }
}

const person = new User("Juan Itto",27);

console.log(person.printAge());

person.type = Type.A;

console.log(person.type);
console.log(person.getAge());*/ 
//# sourceMappingURL=classes.js.map