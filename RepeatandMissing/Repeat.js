// 3
// 5
// 1 2 3 3 4
// 2
// 1 1
// 3
// 1 2 2
// 5 3
// 2 1
// 3 2
//Time Complexibility : O(n)  Sc:O(1)
var arr = [1, 2, 3, 3, 4];
var miss = 0;
var repeat = 0;
var N = arr.length;
function RepeatandMissing(arr, N) {
  for (var i = 0; i < N; i++) {
    // if (arr[Math.abs(arr[i]) - 1] > 0) {
    //   arr[Math.abs(arr[i]) - 1] -= arr[Math.abs(arr[i]) - 1];
    //   console.log("repeatarr",arr[Math.abs(arr[i]) - 1]);
    // } else {
      repeat = Math.abs(arr[i]);
    // }
  }
  for (var i = 0; i <=N; i++) {
    if (arr[i] === undefined) {
      miss = i;
    }
  }

  console.log("Repeat : ", repeat, "Misses : ", miss);
}
RepeatandMissing(arr, N);
