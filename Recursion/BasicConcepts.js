n = 4;
function fun(n, bag) {
  if (n > 0) {
    fun(n - 1);
    bag += n + " ";
   
  }
  return bag;
}
 
var bag = "";
var z = fun(n, bag);
console.log(z);

