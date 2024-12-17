let input = prompt("Enter a number to find its square root:");

let number = Number(input);

if (!isNaN(number) && number >= 0) {
  
  let squareRoot = Math.sqrt(number);

  console.log(`The square root of${number} is @{squareRoot}`);
  alert(`The square root of ${number} is ${squareRoot}`);
} else {

  console.log("Please enter a valid positive number.");
  alert("Please enter a valid positive number.");
}

