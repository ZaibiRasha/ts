function startG () {
  var messagesElement = document.getElementById("messages");
  messagesElement!.innerText = "start Game";
}
document.getElementById('startGame')!.addEventListener('click',startG);
var testElement = document.getElementById("test");
let firstName : String = "Hello Dylan ";

/* 
 *  w3school
*/

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse('{"age" : "55"}');
// Most expect json to be an object, but it can be a string or a number like this example
const number = JSON.parse('55');
// console.log(typeof number);

testElement!.innerText = typeof json + " => age : " +json.age ;

let v: any = true;
v = "string"; // no error as it can be "any" type
console.log(typeof v, Math.round(v)); // no error as it can be "any" type

// class definition
class Person {
  protected  readonly name: string;
  protected  age: number;

  public constructor(name: string, age?: number) {
    this.name = name;
    age?this.age= age: this.age = 0;
  }

  public getNameAge(): string {
    return this.name+(this.age? " age is "+this.age:"");
  }
}

const person = new Person("Jane",23);
console.log(person.getNameAge()); 

//Inheretance
interface Shape {
  getArea: () => number;
}

abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon implements Shape {

  constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }
  public getArea(): number {
    return this.width * this.height;
  }
}
const rectangle = new Rectangle(5,6);
console.log(rectangle.getArea()); 
console.log(rectangle.toString()); 

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
  public getArea(): number {
    return  Math.pow(this.width, 2);
    }

  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
  // getArea gets inherited from Rectangle
}
const square = new Square(5);
console.log(square.getArea()); 
console.log(square.toString());