var arr = "aabcb";
var N = arr.length;

function MinSwapPalindrome(arr, N) {
  var count = 0;
  var mid = Math.floor(N / 2); //2
  // console.log(mid)
  for (var i = 0; i < mid; i++) {
    var left = i; //0
    var right = N - left - 1; //[5-0-0] = 5

    while (left < right) {
      if (arr[left] === arr[right]) {
        //[0==5.4.3.2.1]
        break;
      } else {
        right--;
      }
    }
    if (left == right) {
      return -1;
    } else {
      //it is not required a left value any more N-1-left
      for (var j = right; j < N - left - 1; j++) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        count++;
      }
    }
  }
  return count;
}

var ans = MinSwapPalindrome(arr, N);
console.log("ans", ans);
