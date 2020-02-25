------------------------------------ global and local scope -------------------------------------------------------------
/*
 variables in JavaScript are not defined in a block scope, but in a function scope. 
 This means that if a variable is defined inside a function, it's not visible outside of the function. 
 However, a variable defined inside an if or a for code block is visible outside the code block. 
 The term "global variables" describes variables you define outside of any function, as opposed to 
 "local variables" which are defined inside a function. The code inside a function has access to all global 
 variables as well as to its own local variables.
*/
var global = 1;
function f() {
  var local = 21200;
  global++;
  console.log('local ' + local);
  return global;
}

console.log(f())
/*
"local 21200"
2
*/


-------------------------------------------- global scopes and local scopes
var a = 123;
function f() { 
  //undefined
  console.log(a); 
  var a = 1;
  //output is 1
  console.log(a); 
} 
f(); 

/*
The first console.log will show "undefined". 
This is because inside the function the local scope is more 
important than the global scope. So a local variable overwrites 
any global variable with the same name. 
At the time of the first console.log() a was not yet defined 
(hence the value undefined) but it still existed in the local space.
*/

