// // <---------------------PerMutation--------------------------------->

// Algorithm  => BackTracking
//Tc = O(n*!n)
// SC = O(r-l)
function swapElements(array, a, b) {
  // array.split("");
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return;
}

function helperFunction(array, left, right) {
  if (left === right) {
    var permut = [];
    console.log(array.join(""));
    permut.push(array);
    // console.log(permut);
  } else {
    for (let i = left; i <= right; i++) {
      swapElements(array, left, i);
      // console.log("Before", array);
      helperFunction(array, left + 1, right);
      // console.log("Present", array.join(""));
      swapElements(array, left, i);
      // console.log("After", array);
    }
  }
}

var array = "abc";
array = array.split("");

var left = 0;
var right = array.length - 1;
var ans = helperFunction(array, left, right);
// console.log(ans);
