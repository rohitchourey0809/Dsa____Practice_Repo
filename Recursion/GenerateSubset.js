function AllSubset(str, index, curr) {
  var N = str.length;
  if (index == N) {
    //
    if (curr.length >= 0) {
      console.log(curr);
      return;
    }
    // return;
  } else {
    AllSubset(str, index + 1, curr + str[index]);

    AllSubset(str, index + 1, curr);
  }
}

var str = "abcd";
var index = 0;
var curr = "";

var ans = AllSubset(str, index, curr);
// console.log("ans", ans);
