/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear.For this exercise, write two functions, reverseArray and reverseArrayInPlace.The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.Neither may use the standard reverse method.
*/

function reverseArray(array) {
    let arr = [];
    for (let i = array.length - 1; i >= 0; i--)
        arr.push(array[i])
    return arr;
}
function reverseArrayInPlace(array) {
    let start = 0,end = array.length - 1, temp =  0;
    while (start < end) {
        temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
    return array;
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log(myArray);

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


/* SOLUTION GIVEN BY THE AUTHOR
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
*/