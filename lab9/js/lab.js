/********************************
* Author: Ali Eshghi (aeshghi@ucsc.edu)
          Amirarsalan Valipour (avalipou@ucsc.edu)
* Created: Nov 2, 2021
* License: public domain
**********************************/

//using getElementById() to find the output div and assign it to outputEl
var outputEl = document.getElementById("output");

//Create new element and assign it to neew1El
var new1El = document.createElement("p");

//change the attribute of new1El
new1El.innerHTML = "Something New for new1 element!";

//create a new element new2El
var new2El = document.createElement("p");

//change the attribute of new2El
new2El.innerHTML = "Something new for this element (new2) as well!";

//Appending both new elements one at a time
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
