/*
a function always returns a value, and if it doesn't do it explicitly with return, 
then it it does so implicitly by returning undefined. 
A function can return only one value and this value could just as easily be another function.
*/

function a() {
  alert('A!'); 
  return function(){
    alert('B!'); 
  };
}

/*
In this example the function a() does its job (says A!) and returns another function that does something else (says B!). 
You can assign the return value to a variable and then use this variable as a normal function:
*
var newFunc = a(); 
newFunc();
