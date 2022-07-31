var arr = [1, 1, 2, 2, 5, 5, 8, 8, 4];
arr.sort((a, b) => a - b);
// console.log("arr", arr);

function Unique(arr) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
    i = i + 2;
  }
}
var ans = Unique(arr);
console.log("Uniquearr:--", ans);


// STEP:1  Sort Function: O(N+logN)
// STEP:2 N/2
//TOTAL :  O(nlogn + n/2) i.e O(n+logn)
