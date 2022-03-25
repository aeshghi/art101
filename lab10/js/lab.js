/********************************
* Author: Ali Eshghi (aeshghi@ucsc.edu)
* Created: , 2021
* License: public domain
**********************************/

//function - prompts the user for inout, sorts the input and passes to caller
function userName_sort(){
  //prompts the user to input a user name
  var userName = document.getElementById('user-name').value;
  console.log("user name (input): ",userName);

  //removes all the white spaces
  var noSpace_userName = userName.replace(/\s+/g,'');
  console.log("user name with no space: ", noSpace_userName);

  //turns all the letters to lowercase
  var lower_case = noSpace_userName.toLowerCase();
  console.log("lowercase username: ",lower_case);

  //splits the string into array of chars
  var arr_userName = lower_case.split('');
  console.log("nameArray: ",arr_userName);

  //sorts the elements of the array
  var arr_userName_sorted = arr_userName.sort();
  console.log("arraySorted: ",arr_userName_sorted);

  //joins the characters of the array into one string
  var str_userName = arr_userName_sorted.join('');
  console.log("userName sorted: ",str_userName);

  return str_userName;

}



var button = document.getElementById("my_button");

button.addEventListener('click', function(){
  var str_userName;
  console.log("your output is: ", userName_sort());
});

var output = document.getElementById("output");
var html = output.innerHTML;
html = html.replace(/here is the output/g,userName_sort());
