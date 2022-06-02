console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
  if (i % 2) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i < 100; i++) {
  if (i % 3 && i % 5) {
    console.log("FizzBuzz");
  } else if (i % 3) {
    console.log("Fizz");
  } else if (i % 3) {
    console.log("Buzz");
  }
}
