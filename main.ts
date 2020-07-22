

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
let x = true;
let y = true;
//while (x || y) { y == x / 7; }
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
//fruits.join