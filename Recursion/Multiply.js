var arr = [1, 2, 3, 4, 5];
N = arr.length;

function Mutltiply(arr, N) {
  if (N === 0) {
    return 1;
  }
  muti = arr[N-1] * Mutltiply(arr, N - 1);
  return muti;
}

var ans = Mutltiply(arr, N);
console.log("Multi", ans);
