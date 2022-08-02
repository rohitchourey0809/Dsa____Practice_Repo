var arr = [1, 3, 2, 4];
var N = arr.length;
function SGTE(arr, N) {
  var ans = [];
  var stack = [];

  for (var i = 0; i < N; i++) {
    while (stack.length !== 0 && arr[i] <= stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans[i] = -1;
    } else {
      ans[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }
  return ans;
}
var result = SGTE(arr, N);
console.log(result);
