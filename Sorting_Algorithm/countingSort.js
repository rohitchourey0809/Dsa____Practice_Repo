// i	arr[i]	result
// 0	1	[0, 1, 0, 0]
// 1	1	[0, 2, 0, 0]
// 2	3	[0, 2, 0, 1]
// 3	2	[0, 2, 1, 1]
// 4	1	[0, 3, 1, 1]



function countingSort(arr) {
  let count = Array(5).fill(0);
  arr.forEach((e) => {
  
    ++count[e];
  });
  return count;
}
var arr = [1, 2, 3, 2, 1];
console.log(countingSort(arr));
