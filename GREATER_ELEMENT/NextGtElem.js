// var arr = [11, 21, 1, 3];
var arr = [1, 3, 2, 4];
var N = arr.length;
function NextGteElement(arr, N) {
    var ans = [];
    var stack = [];
    for (var i = N - 1; i >= 0; i--) {
      while (stack.length !== 0 && arr[i] >= stack[stack.length - 1]) {
        stack.pop();
      }

      if (stack.length === 0) {
        ans[i] = -1;
      } else {
        ans[i] = stack[stack.length - 1];
      }

      stack.push(arr[i]);
      // console.log(ans)
    }
    return ans;
}

var result = NextGteElement(arr, N);
console.log("result", result);
