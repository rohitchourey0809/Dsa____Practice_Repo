let fruits = ["apple", "grapes", "orange", "mango", "banana"];

function filterItems(fruits, word) {
  var bag = [];
  for (var i = 0; i < fruits.length; i++) {
    var z = fruits[i];

    for (var j = 0; j < z.length; j++) {
      if (word[0] === z[j] && word[1] === z[j + 1]) {
        bag.push(z);
      } else {
        continue;
      }
    }
    console.log("bag", bag);
  }
}
var ans = filterItems(fruits, "ap");
console.log(ans);
