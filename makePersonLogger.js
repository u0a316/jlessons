function makePersonLogger(name) {
  let count = 0; // lexical scope blok
  
  return function () { // inner function
    count++;
    if (count === 1) {
      return `Hello, ${name}`;
    } else {
      return `Hello again, ${name}`;
    }
  };
}


const logJohn = makePersonLogger('John');

console.log(logJohn()); // Hello, John
console.log(logJohn()); // Hello again, John
console.log(logJohn()); // Hello again, John
