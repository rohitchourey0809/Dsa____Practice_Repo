function AllSubsets(arr, index, newsub) {
  if (index == arr.length) {
    if (newsub.length > 0) {
      console.log(newsub);
      return;
    }
  } else {
    AllSubsets(arr, index + 1, newsub + arr[index]+" ");

    //BackTracking
    AllSubsets(arr, index + 1, newsub);
  }
}
var arr = [1, 2, 3];
var index = 0;
var newsub = "";
AllSubsets(arr, index, newsub);
