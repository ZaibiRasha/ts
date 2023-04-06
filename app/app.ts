function startG () {
  var messagesElement = document.getElementById("messages");
  messagesElement!.innerText = "start Game";
}
document.getElementById('startGame')!.addEventListener('click',startG);
var testElement = document.getElementById("test");
let firstName : String = "Hello Dylan ";
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse('{"age" : "55"}');
// Most expect json to be an object, but it can be a string or a number like this example
const number = JSON.parse('55');
// console.log(typeof number);

testElement!.innerText = typeof json + " => age : " +json.age ;

let v: any = true;
v = "string"; // no error as it can be "any" type
console.log(typeof v, Math.round(v)); // no error as it can be "any" type
