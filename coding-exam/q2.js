/*
The modulo operator (%) is used to get the remainder that is left when dividing two numbers.
Ex1: 10 % 2 -> 0
Ex2: 100 % 6 -> 4
Create a function that emulates the operation WITHOUT using the % operator
Specifications:
1. The function should take in two values and return the remainder
2. The % operator CANNOT be used.
*/

const a = prompt('Enter a value');
const b = prompt('Enter b value');
modulo = (a, b) => {
    const quotient = parseInt(a / b);
    const d = quotient * b;
    const remainder = a - d;
    return remainder;
}

console.log(`${a} mod ${b} = ${modulo(a, b)}`);