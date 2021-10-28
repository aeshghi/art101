/********************************
* Author: Ali Eshghi (aeshghi@ucsc.edu)
          Amirarsalan Valipour (avalipou@ucsc.edu)
* Created: Oct 27, 2021
* License: public domain
**********************************/

//function returns the square of a number passed to it
function sqr(x){
    return x * x;
}

//testing the sqr() function with different parameters
console.log("Square of 2: ",sqr(2));
console.log("Square of 5: ",sqr(5));
console.log("Square of 4: ",sqr(4));
console.log("Square of -1: ",sqr(-1));

//declaring an array of integers
array = [12,10,9,15,22,16,7];
console.log("Array: ", array);

//calling map function to try all the elements of array in the function sqr()
var result = array.map(sqr);
console.log("Square of array: ", result);


var result = array.map(function(x){
    return x ** 0.5;
});
console.log("Square root of the array: ", result);
