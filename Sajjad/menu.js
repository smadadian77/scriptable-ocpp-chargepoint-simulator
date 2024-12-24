const readline = require("readline");

// Define a function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1; // Base case: factorial of 0 is 1
  } else {
    return n * factorial(n - 1); // Recursive call
  }
}

// Set up readline for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Get user input for the number
rl.question("Enter a non-negative integer: ", (input) => {
  const number = parseInt(input, 10);

  // Validate user input
  if (isNaN(number) || number < 0) {
    console.error("Invalid input. Please enter a non-negative integer.");
  } else {
    // Calculate and display the factorial
    const result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
  }

  rl.close();
});
