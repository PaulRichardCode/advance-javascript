//NEST FUNCTION SCOPING

/* let a = 10;

function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer(); */

//CLOSURE

/* function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const fn = outer();
fn();
fn();

 */
//CURRING FUNCTIONS

/* function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));
 */

//THIS
//implicit binding, Explicit binding, New binding, default binding

//function sayMyName(name) {
//console.log(`My name is ${name}`);}

/* const person = {
  name: "Richard",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

function sayMyName() {
  console.log(`My name is ${this.name}`);
} */

//

function Person(fname, lname) {
  this.firstname = fname;
  this.lastname = lname;
}

const name1 = new Person("joe", "roman");
const name2 = new Person("paul", "richards");

console.log(name1.firstname + " " + name1.lastname);
