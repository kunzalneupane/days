let bigInt1 = 1234567890123456789012301234567890n;
let bigInt2 = BigInt("9876543210987654321098765432109876543210");

let sum = bigInt1 + bigInt2;
let difference = bigInt1 - bigInt2;
let product = bigInt1 * bigInt2;
let quotient = bigInt1 / BigInt(100);


console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
