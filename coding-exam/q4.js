/*
Create a function that gets the minimum value in an array of integers
Specifications:
1. Function must get an array of at least 1 element
2. The function would return the minimum value in the array
Ex1. const arr1 = [65, 11, 213, 78, 99]
console.log(getMin(arr1)) -> "The minimum value in the array is 11"
*/

const arr1 = [65, 11, 213, 78, 99]
function bubbleSort(array) {
    let toBeSortedArray = array;
    sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < toBeSortedArray.length; i++) {
            if (toBeSortedArray[i] < toBeSortedArray[i - 1]) {
                let temp = toBeSortedArray[i];
                toBeSortedArray[i] = toBeSortedArray[i - 1];
                toBeSortedArray[i - 1] = temp;
                sorted = false;
            }
        }
    }
    return toBeSortedArray[0];
}

console.log(`The minimum value in the array is ${bubbleSort(arr1)}`)