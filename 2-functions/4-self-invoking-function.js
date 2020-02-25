(
  function(name){
    console.log('Hello ' + name + '!');
  }
)('Javascript')

/*
One good reason for using self-invoking anonymous functions is to have some work done without creating global variables. 
A drawback, of course, is that you cannot execute the same function twice (unless you put it inside a loop or another function). 
This makes the anonymous self-invoking functions best suited for one-off or initialization tasks.
*/
