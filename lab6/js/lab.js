/********************************
* Author: Ali Eshghi (aeshghi@ucsc.edu)
* Created: Oct 20, 2021
* License: public domain
**********************************/

//Define variables
var myTransport = ["Jeep","Scooter","skate-board","bus"];

var myMainRide = {
    make: "Jeep",
    model: "Renegade",
    color: "Black",
    year: 2018,
    age: function(){
      return 2021-year;
    }};

//Output
document.writeln("The transportations I use: ", myTransport, "</br>");
document.writeln("My sweet ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
