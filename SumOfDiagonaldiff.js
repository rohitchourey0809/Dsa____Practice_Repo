var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function Matrix(arr) {
  var bag = "";
  var bag1 = "";
  for (var i = 0; i < arr.length; i++) {
    bag += arr[i][i] + " ";
  }
  for (var i = 0; i < arr.length; i++) {
    bag1 += arr[i][arr.length-1 - i] + " ";
  }
  console.log(bag, bag1);
}
Matrix(arr);
