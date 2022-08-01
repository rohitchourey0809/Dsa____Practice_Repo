var str = "masaischool";
N = str.length;

function LengthOfString(str, N) {
  if (N === 0) {
    return 1;
  }
  leng = lengthOfString(str, N) + 1;
  return leng;
}
var ans = LengthOfString(str, N);
console.log("ans", ans);
