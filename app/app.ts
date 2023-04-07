function startG (): void {
  let playerName: string |undefined = getInputValue('playername');
  let factor: string |undefined = getInputValue('factor');
  
  logPlayer(playerName);
  postScore(parseInt(factor?factor:"") ,playerName);
  // postScore(-5,playerName);
}

function logPlayer(name:string ='MultiMath Player' ): void  {
  console.log(`new game for player : ${name}`)
}

function getInputValue ( elemntID : string ) : string |undefined{
  const postedScores:HTMLInputElement = <HTMLInputElement>document.getElementById(elemntID);
  if (postedScores.value ==='') {
    return undefined;
  } else {
    return postedScores.value;
  }
}

function postScore (score : number = 0, playerName:string ='MultiMath Player' ): void {
  let logger : (value : string) =>void;
  var postedScores : HTMLElement | null = document.getElementById("postedScores");

  if (score < 0) {
    logger = logError;
    postedScores!.innerText = " No scores yet ";
  } else {
    logger = logMessage;  
    postedScores!.innerText = `${score} - ${playerName}`;
  }

  logger (`Score ${score}`);
}

// Arrow fct
const  logMessage = (message:string ): void => console.log(message);

function logError (err : string) : void{
  console.error(err);
}


document.getElementById('startGame')!.addEventListener('click',startG);
var testElement = document.getElementById("test");
let firstName : String = "Hello Dylan ";
let myResult : Result= {
  playerName : "Racha",
  score : 5,
  problemCount : 5,
  factor : 6
};

let player : Person= {
  name : "Racha Zaibi",
  age : 25,
  formatName:()=> "Racha"
};
/* 
 *  w3school
*/


// class definition
class Persone {
  public  readonly name: string;
  protected  age: number;

  public constructor(name: string, age?: number) {
    this.name = name;
    age?this.age= age: this.age = 0;
  }

  public getNameAge(): string {
    return this.name+(this.age? " age is "+this.age:"");
  }
} 

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

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
  public getArea(): number {
    return  Math.pow(this.width, 2);
    }

  public  toString(): string {
    return `Square[width=${this.width}]`;
  }
  // getArea gets inherited from Rectangle
}

//keyof
function printPersonProperty(person: Persone, property: keyof Persone) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}


/*
 * execution
*/
if(false){
  // Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse('{"age" : "55"}');
// Most expect json to be an object, but it can be a string or a number like this example
const number = JSON.parse('55');
// console.log(typeof number);

// testElement!.innerText = typeof json + " => age : " +json.age ;

let v: any = true;
v = "string"; // no error as it can be "any" type
console.log(typeof v, Math.round(v)); // no error as it can be "any" type

const person = new Persone("Jane",23);
console.log(person.getNameAge());

const rectangle = new Rectangle(5,6);
console.log(rectangle.getArea()); 
console.log(rectangle.toString()); 

const square = new Square(5);
console.log(square.getArea()); 
console.log(square.toString());

printPersonProperty(person, "name"); // Printing person property name it should be public 
}