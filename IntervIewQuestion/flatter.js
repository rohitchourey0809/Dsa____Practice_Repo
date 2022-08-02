// https://grabthiscode.com/javascript/javascript-array-flat

const arr = [1, 4, [2, [3, 4], [2], [5]], [1, 2, 3]];

console.log("arr: " + arr.flat(Infinity));

var flatArray = Array.prototype.concat.apply([], arr); //flatten array of arrays

console.log("flataray", flatArray);
// <-------------------------------------------->
const arr1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log("arr4: ", arr1.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var multiDimensionArray = [["a"], ["b", "c"], ["d"]]; //array of arrays
var flatArray = Array.prototype.concat.apply([], multiDimensionArray); //flatten array of arrays
console.log("flataray", flatArray); // [ "a","b","c","d"];

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
