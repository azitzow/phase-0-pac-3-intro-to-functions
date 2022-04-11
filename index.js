// Follow along with the examples here
console.log('Hello, world!');
console.log('Hello, world!');
console.log('Hello, world!');
console.log('Hello, world!');
console.log('Hello, world!');

function helloWorld(greeting) {
  for (let i = 0; i < 5; i++){
    console.log(greeting);
  }
};

helloWorld('Hello, World!');

function doSomething() {
  console.log('Hello, world!');
};

doSomething();

function sayHello(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHello('Ana');

function greetings(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
};

console.log(greetings('Nice to meet you', 'Ana'));