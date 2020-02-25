function multiplyByTwo(a, b, c) {
  var i, ar = []; 
  for(i = 0; i < 3; i++) {
    ar[i] = arguments[i] * 2;
  } 
  return ar;
}

console.log(multiplyByTwo(1, 2, 3));
//[2, 4, 6]

