/*
A variable defined in a function is not visible outside the function, but a variable defined in a code block (an if or a for loop) 
is visible outside the block.
*/

var a = 1; 
function f()
{
  var b = 12; 
  console.log(b)
  return a;
}
console.log(f());

/*
output

12
1
*/
