// https://grabthiscode.com/javascript/javascript-array-flat

const arr = [1, 4, [2, [3, 4], [2], [5]], [1, 2, 3]];

console.log("arr: " + arr.flat(Infinity));

var arr1 = Array.prototype.concat.apply([], arr); //flatten array of arrays

console.log("arr1::-", arr1);
// <-------------------------------------------->
const arr2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log("arr2: ", arr2.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var multiDimensionArray = [["a"], ["b", ["c"]], ["d"], "e"]; //array of arrays
var arr3 = Array.prototype.concat.apply([], multiDimensionArray); //flatten array of arrays
console.log("arr3::-", arr3); // [ "a","b","c","d"];

function flatten(arr) {
  let out = [];

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      out.push(arr[i]);
    } else {
      out.push(...flatten(arr[i]));
    }
  }
  return out;
}
var ans = flatten(arr);
console.log(ans);
