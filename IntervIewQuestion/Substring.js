let fruits = ["apple", "grapes", "orange", "mango", "banana"];

function filterItems(fruits, word) {
  // return word[0]

  for (var i = 0; i < fruits.length; i++) {
    var z = fruits[i];
    var bag = "";
    for (var j = 0; j < z.length; j++) {
      if ((word[0] || word[1]) === z[j]) {
        bag += z + "";
        // console.log("fruits", fruits[j]);
        // return fruits[j];
      } else {
        continue;
      }
    }
    return bag;
  }
}
var ans = filterItems(fruits, "ap");
console.log(ans);
