// Input: (candidates = [2, 3, 5]), (target = 8);
// Output: [
//   [2, 2, 2, 2],
//   [2, 3, 3],
//   [3, 5],
// ];

var arr = [2, 3, 5];

function combinationsum(arr, new_arr, sum, target, index) {
  if (sum > target) {
    return;
  }
  if (sum === target) {
    console.log(new_arr);
  }
  for (var i = index; i < arr.length; i++) {
    sum += arr[i];
    new_arr.push(arr[i]);
    combinationsum(arr, new_arr, sum, target, i);
    sum -= arr[i];
    new_arr.pop();
  }
}

var target = 8;
var sum = 0;
var index = 0;
var new_arr = [];
combinationsum(arr, new_arr, sum, target, index);
