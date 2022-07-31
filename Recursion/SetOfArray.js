// 9
// 1 2 3 4 5 6 7 8 9
// 5

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var N = arr.length;
var sum = 0;

function SumofArray(arr, N, sum) {
  if (sum === 0) {
    return true;
  }
  if (N === 0) {
    return false;
  }
  if (arr[N - 1] > sum) {
    return SumofArray(arr, N - 1, sum);
  } else {
    return (
      SumofArray(arr, N - 1, sum) || SumofArray(arr, N - 1, sum - arr[N - 1])
    );
  }
}

var ans = SumofArray(arr, N);
console.log("Sum", ans);
