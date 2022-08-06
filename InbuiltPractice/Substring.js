function replaceString(oldS, newS, fullS) {
  console.log("replaceString", fullS.split(oldS));
  
  return fullS.split(oldS).join(newS);
}
var ans = replaceString("World", "Web", "Brave New World");
console.log(ans);
