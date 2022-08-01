var arr = [1, 2, 3];

function Gsincludeemptyarray(arr, index, path) {
  if (index === arr.length) {

    //it is a condiion two printing empty array
    if (path.length >= 0) {
      console.log(path);
      return;
    }
  } else {
    // not include current element
    Gsincludeemptyarray(arr, index + 1, path);
    path.push(arr[index]);
    //incoude current element
    Gsincludeemptyarray(arr, index + 1, path);
    path.pop()
  }
//   return
}
var index = 0;
var path = [];
Gsincludeemptyarray(arr, index, path);
