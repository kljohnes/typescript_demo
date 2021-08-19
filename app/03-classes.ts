//1 
class Person {
    //2
    firstName: string;
    lastName: string;

    sayHello(){
        console.log("Hello", this.firstName);
    }
    sayHelloToFullName(){
        console.log("Hello", this.firstName, this.lastName)}
}

let sheriff: Person = new Person();
sheriff.firstName = "Sheriff"
sheriff.lastName = "Holler"
sheriff.sayHelloToFullName();

let kenn: Person = new Person();

kenn.firstName = "Kenn";

kenn.sayHello()

//3
let phil: Person = new Person();

//4
phil.firstName = "Phil";
phil.lastName = "Donahue";

class Game {
    constructor(name: string, maker: string){
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName:string;
    gameMaker: string;
}

let battleship: Game = new Game("Battleship", "Hasbro")

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

//EXAMPLE ONE
class Automobile extends Vehicle {
    isSelfDriving: boolean;
} 

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

//EXAMPLE TWO
class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

// class Store {
//     constructor(name: string, city: string){
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }
// let ikea: Store = new Store('Ikea', 'Fishers');

class Store {
    constructor(public name: string, public city: string){}
}
let ikea: Store = new Store('Ikea', 'Fishers');

class Employee extends Person {
    private _salary: number;
    getSalary(): string {
        return this._salary.toString();
    }
    setSalary(newSalary: number) {
        this._salary= newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult)