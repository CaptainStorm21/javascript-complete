
// Functions allow you group together some code, 
// give this code a name, and reuse it later, 
// addressing it by name.

//Expected parameters (arguments), in this case a and b. 
//A function can accept zero or more arguments, separated by commas.
function sum(a, b) {
    var c = a + b;
  //The return statement. A function always returns a value. If it doesn't return value explicitly, 
  //it implicitly returns the value undefined.
    return c;
}

//call a function 
//"To invoke" a function is another way of saying "to call".

var result = sum(1, 2);
console.log(result)

