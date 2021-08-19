// function demoFunction(someNum) {
//     return someNum;
// }

// demoFunction(1); //1
// demoFunction("stuff"); //2
// demoFunction(1, "Stuff"); //3

function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

//1 - Works
console.log(addNumbers(1,2));

//2 - Errors
// addNumbers(1,2,3);
// addNumbers(1,2,3, "Foo");

function fullName(firstName: string, lastName: string){
    return firstName + " " + lastName
}

console.log(fullName("Kate" , "Johnes"))

// function hello(greetingString){
//     return greetingString;
// }

// foo(1);

function sayHello(name: string) : string {
    return name;
}

sayHello("Kenn");
//sayHello(1) ERROR

function login(username: string, password: string) : boolean {
    if (username == "elevenfiftyuser" && password == "Letmein1234!") {
        return true
    } else {
        return false
    }
}

console.log(login("elevenfiftyuser", "Letmein1234!"))

function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
    console.log(someString);
    return numOne + numTwo
}

addNumbersWithOptional(1,2)
addNumbersWithOptional(1,2,"this is optional")

function fName(first: string, last: string, middle?: string) {
    if (middle) {
        return first + middle + last
} else {
    return first + last
}
}
console.log(fName("Katherine ", "Johnes", "Lynn "))