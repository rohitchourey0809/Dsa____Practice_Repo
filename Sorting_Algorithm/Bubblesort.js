var arr = [1, 2, 6, 4, 7, 5, 0];

function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return;
}

function Bubblesort(arr) {
  var numberofSwap = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        numberofSwap++;
      }
    }
    // console.log(arr);
  }
  console.log("swap", numberofSwap);
  //   console.log(arr);

  //   if(numberofSwap == 0) {
  //     break;
  //   }
}
Bubblesort(arr);
