var arr = "naman"
var N = arr.length
function CheckPalindrome(arr,N) {
   var start = 0;
   var end = N-1;
   
   while(start < end) {
    //    for(var i = start; i < end; i++) {
           if(arr[start] !== arr[end])
           {
            return false;
           }
           start++
           end--
    //    }
   }
   return true;
}

var ans = CheckPalindrome(arr,N);
console.log("ans",ans)

// Time Complexibility = O(N)  && Sc = O(N)