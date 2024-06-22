/*
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.
*/
function myMIN(num1, num2) {
  if (num1 > num2) return num2;
  return num1;
}
console.log(myMIN(0,10));

console.log(myMIN(0,-10));
