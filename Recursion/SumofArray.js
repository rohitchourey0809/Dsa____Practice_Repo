var arr = [7, 1, 4, 8, 2, 3];
var N = arr.length;

function SumofArray(arr, N) {
  if (N === 0) {
    return 0;
  } else {
    return arr[N - 1] + SumofArray(arr, N - 1);
  }
}
var ans = SumofArray(arr, N);
console.log("Sum",ans);


