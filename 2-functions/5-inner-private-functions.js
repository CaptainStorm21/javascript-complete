/*
The benefit of using private functions are as follows:

You keep the global namespace clean (smaller chance of naming collisions).

Privacy—you expose only the functions you decide to the "outside world", 
keeping to yourself functionality that is not meant to be consumed by the rest of the application.
*/


function a(param) {
  function b(theinput) {
    return theinput * 2;
  };
  return 'The result is ' + b(param);
};

console.log(a(10))

//literal notation
var a = function(param) {
  var b = function(theinput) {
    return theinput * 2;
  };
  return 'The result is ' + b(param);
};

console.log(a(22))
//44

/*
When you call the global function a(), it will internally call the local function b(). 
Since b() is local, it's not accessible outside a(), so we can say it's a private function.
*/
