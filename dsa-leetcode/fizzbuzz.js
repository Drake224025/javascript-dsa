// Iterate through the numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  // Check if the number is divisible by both 3 and 5 (FizzBuzz)
  if (i % 15 === 0) {
    console.log("FizzBuzz");

    // Check if the number is divisible by 3 (Fizz)
  } else if (i % 3 === 0) {
    console.log("Fizz");

    // Check if the number is divisible by 5 (Buzz)
  } else if (i % 5 === 0) {
    console.log("Buzz");

    // If none of the above conditions are met, print the number itself
  } else {
    console.log(i);
  }
}
