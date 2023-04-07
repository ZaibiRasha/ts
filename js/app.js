"use strict";
function startG() {
    var messagesElement = document.getElementById("messages");
    messagesElement.innerText = "start Game";
}
document.getElementById('startGame').addEventListener('click', startG);
var testElement = document.getElementById("test");
let firstName = "Hello Dylan ";
const json = JSON.parse('{"age" : "55"}');
const number = JSON.parse('55');
let v = true;
v = "string";
console.log(typeof v, Math.round(v));
class Person {
    constructor(name, age) {
        this.name = name;
        age ? this.age = age : this.age = 0;
    }
    getNameAge() {
        return this.name + (this.age ? " age is " + this.age : "");
    }
}
class Polygon {
    toString() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
class Rectangle extends Polygon {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
    getArea() {
        return Math.pow(this.width, 2);
    }
    toString() {
        return `Square[width=${this.width}]`;
    }
}
function printPersonProperty(person, property) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
const person = new Person("Jane", 23);
console.log(person.getNameAge());
const rectangle = new Rectangle(5, 6);
console.log(rectangle.getArea());
console.log(rectangle.toString());
const square = new Square(5);
console.log(square.getArea());
console.log(square.toString());
printPersonProperty(person, "name");
//# sourceMappingURL=app.js.map