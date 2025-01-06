// todo : JS is a synchronously single threaded language.

console.log("Naman"); // printing a statement

let name = "Naman"; // initializing the variable name with the content.
console.log(name); // Aggain printing the variable name
console.log(typeof name); // printing the type of variable name

// Types of variables

//String,  number, boolean , undefined, null - Primitive data types

// number data type includes integer, float, double.

let w; // initially it has value undefined
console.log(w);
w = 9;
console.log(w);

//? type of null is an object

// Refernce Types

let course = {
  title: "HHLD",
  desc: "Projects",
  rating: 5,
};

console.log(course);
console.log(typeof course);
console.log(course.title);
console.log(course["desc"]);

// Reference Types : Objects, Arrays, Functions

/* Value Types v/s Ref Types:

copies values , latter copies reference.


Arrays and Functions are actually objects. In Arrays, we can keep any value like string, number, or boolean.
*/

function createCourse(course) {
  console.log(course + " course");
}

createCourse("numerology");
createCourse("Astrology");

// this keyword and window are the same thing.
// window is a global object.
// Hoisting is a special and easy concept which means that even before initializing the variable we are getting its value.
/*
console.log(x); // o/p : undefined
var x = 10;
console.log(x); // o/p : 10

in interview explain it via execution context, gec, memory phase and code phase like stuffs.
? Memory Phase : Variable env
? Code Phase : Thread of execution
*/

//! Let Var And Const

// ? const is fixed
//  let can be changed
// todo var value comes in global window. Same case is not with let and const. For them value is unavailable
// todo Temporal Dead Zone is for let and const. Ref Error before initialization.
// todo const and let is block scoped and var is func scoped.

//? Lexical Scope : If a variable declared is present in the local scope then it will consider that
// ? else it will search for value in global scope. If present, it will access that and use it.
//? from local declaration I can't access outside functionality.

/* // todo : Concept of lexical scope explained with an example.
function create(){ //? Reference error will be thrown
let x = 10;
}
console.log(x);
create();
*/
/* function create(){

console.log(x);         // ? x as 100 will be logged.

} 
let x = 10;
create();
*/

/* 
? Functions are first class citizens.
? Higher order functions are the ones which takes function as an arguement or returns it. 

*/

/* 
? Arrow function: let sum = (a,b) => a+b; 
? return and { } can be skipped for one line function.

todo: Function declaration types:

? function add(){
? }

todo : 2nd one

? let sum = function (){
? }

todo : 3rd one

? let sum = () => {
    } ;
*/

/* 

? Higher order function example

? let sum = (a,b) => a+b; 
? let diff = (a,b) => a-b; 
? let operate = (operation,a ,b) => operation(a,b);

*/

/* 
? Func + lexical scope is called closure. // function returning function. 
? So, here is the code for  reference: 
? Lexical Scope keeps refereces with it not values.
? In objects references are copied not value.
 */

/*
? To perform asynchronous operations, we can use callbacks.

todo : asynchronous and synchronous diff: 
todo: example: open insta , upload post, watch other posts -> step by step chlna synchronous mtlb jb 
todo: post upload hogi tb aap other posts dekh rhe hoge
? asynchronous me aap post upload bhi kr rhe ho aur parallely other posts bhi dekh rhe ho.
 */

/* 
? Promises are objects and better way to handle data, and representing the state. 
? 3 states: pending, fulfilled, rejected

todo: Async and await are better way to write than .then and catch. Just nothing else.
 */
/* 
? Callbacks are simply the functions which are used to handle the data
?  once the asynchronous operation gets done.
 todo: Problem with callbacks: Callback hell or Pyramid of doom and inversion of control
 */