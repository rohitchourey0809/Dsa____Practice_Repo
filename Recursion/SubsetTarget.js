var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var N = arr.length;
function SubsetTarget(arr, N, sum) {
  if (sum === 0) {
    return true;
  }
  if (N === 0) {
    return false;
  }
  if (arr[N - 1] > sum) {
    return SubsetTarget(arr, N - 1, sum);
  } else {
    return (
      SubsetTarget(arr, N - 1, sum) ||
      SubsetTarget(arr, N - 1, sum - arr[N - 1])
    );
  }
}
var sum = 5;
var ans = SubsetTarget(arr, N, 5);

console.log(ans);

