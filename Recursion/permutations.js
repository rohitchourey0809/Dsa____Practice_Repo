var permut = [];
var array = [1, 2, 3];
function swapElements(a, b, array) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function helperFunction(i, array, permut) {
  if (i === array.length - 1) {
    permut.push(array.slice());
    return;
  } else {
    for (let j = i; j < array.length; j++) {
      swapElements(i, j, array);
      helperFunction(i + 1, array, permut);
      swapElements(i, j, array);
    }
  }
}

var ans = helperFunction(0, array, permut);
console.log(ans);
