

function Subsequencestr(str, index, newstr) {
  if (index == str.length) {
    if (newstr.length >= 0) {
      console.log(newstr);
      return;
    }
  } else {
    Subsequencestr(str, index + 1, newstr + str[index] + " ");
    // console.log("newstbefr",newstr);
    Subsequencestr(str, index + 1, newstr);
    // console.log("newstraft", newstr);
  }
}
var str = "abcd";
var index = 0;
var newstr = ""
Subsequencestr(str, index, newstr);

// abcd;
// abc;
// abd;
// ab;
// acd;
// ad;
// a;
// bcd;
// bc;
// bd;
// b;
// cd;
// c;
// d;
