function areBracketsBalanced(arr) {
  var obj = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  var stack = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "[" || arr[i] === "{") {
      stack.push(arr[i]);
    } else {
      if (obj[arr[i]] !== stack[stack.length - 1]) {
        if (arr[i] === ")" || arr[i] === "]" || arr[i] === "}") {
          return "unbalanced";
        }
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length == 0) {
    return "balanced";
  } else {
    return "unbalanced";
  }
}

// Driver code
let arr = "([{}])";

// Function call
// console.log(areBracketsBalanced(arr));
if (areBracketsBalanced(arr)) console.log("Balanced ");
else console.log("Not Balanced ");
