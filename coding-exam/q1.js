/*
Create a function that check if a year is a leap year or not. 
Part of the exercise is to research how to compute for leap year.
Specifications:
1. The program should be able to get inputs from the console.
2. The program should only take in POSITIVE integer values. Include checks for the input values.
3. The program should output using the following format:
    "<Year> is / is not a leap year"
    Ex1. 2004 is a leap year.
    Ex2. 1999 is not a leap year.
    Ex3. 1900 is not a leap year.
    Ex4. 2000 is a leap year.
Please use your browser to test the application.
*/

const xx = prompt('Check leap year');
if (xx % 4 == 0 && xx % 100 != 0 || xx % 400 == 0) {
    console.log(`${xx} is a leap year`);
} else if (xx == "") {
    console.log(`${xx} is not a leap year`);
} else {
    console.log(`${xx} is not a leap year`);
}

