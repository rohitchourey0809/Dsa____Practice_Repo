var str = [1, 2, 3];
var left = 0;
var right = str.length - 1;

function swap(str, left, right) {
  var tmp = str[left];
  str[left] = str[right];
  str[right] = tmp;
  return;
}
function PerMutation(str, left, right) {
  if (left == str.length) {
    var bag = [];
    for (var j = 0; j < str.length; j++) {
      bag.push(str[j]);
    }
    return bag;
  }
  for (var i = left; i <= right; i++) {
    swap(str, left, right);
    PerMutation(str, left + 1, right);
    swap(str, left, right);
  }
}
var left = 0;
var ans = PerMutation(str, left, right);
console.log(ans);
// <------------Permutation In Array------------>
// var permute = function (nums) {
//   var result = [];
//   var backtrack = (i, nums) => {
//     if (i === nums.length) {
//       result.push(nums.slice());
//       return;
//     }
//     for (let j = i; j < nums.length; j++) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       backtrack(i + 1, nums);
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
//   };
//   backtrack(0, nums);
//   console.log(result);
//   return result;
// };

// //  <------------Permutation In string------------>
// permute([1, 2, 3]);
// var permutationString = (str) => {
//   if (str.length <= 2)
//     return str.length === 2 ? [str[0] + str[1], str[1] + str[0]] : [str];
//   return str
//     .split("")
//     .reduce(
//       (accumulator, letter, i) =>
//         accumulator.concat(
//           permutationString(str.slice(0, i) + str.slice(i + 1)).map(
//             (val) => letter + val
//           )
//         ),
//       []
//     );
// };
// console.log(permutationString("abcd"));

// // <---------------------PerMutation--------------------------------->
const permutations = (array) => {
  let permut = [];
  helperFunction(0, array, permut);
  return permut;
};

const helperFunction = (i, array, permut) => {
  if (i === array.length - 1) {
    permut.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swapElements(i, j, array);
      helperFunction(i + 1, array, permut);
      swapElements(i, j, array);
    }
  }
};

function swapElements(a, b, array) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

console.log(permutations([1, 2, 3]));
