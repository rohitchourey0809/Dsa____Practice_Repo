var str = "123"

function Subsequencestr(str, i, newstr) {
  if (i == str.length) {
   if(newstr.length >= 0)
   {
     console.log(newstr);
     return;
   }
  }
  else{
Subsequencestr(str, i + 1, newstr + str[i]+" ");
// console.log("newstbefr",newstr);
Subsequencestr(str, i + 1, newstr);
// console.log("newstraft", newstr);
  }
  
}
var newstr = [];
var i = 0;
Subsequencestr(str, i, newstr);

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
