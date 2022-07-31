var str = "abc";
var left = 0;
var right = str.length - 1;

function swap(str, left, right) {
  var tmp = str[left];
  str[left] = str[right];
  str[right] = tmp;
  return;
}
function PerMutation(str, left, right) {
  if (left == right) {
    // console.log("str", str);
    return str;
  }
  for (var i = left; i <= right; i++) {
    swap(str, left, right);
    PerMutation(str, left + 1, right);
    swap(str, left, right);
  }
}

var ans = PerMutation(str, left, right);
console.log(ans);
