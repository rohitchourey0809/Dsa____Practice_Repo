// var obj1 = { a: 10, b: 20 };
// var obj2 = { b: 30, d: 50 };

// // var arr = [1, 2, 3];
// // console.log({ ...arr });

// // var obj = new Set({ a: 10, d: 20 });
// // console.log([...obj]);

// // var newobj = Object.assign(obj1, obj2);
// // console.log(newobj)
// let obj = { ...obj1 };
// console.log("Shallowcopy",obj);

// for (let key in obj2) {
//   if (obj[key]) {
//     obj[key] += obj2[key];   //obj[b] = 20+50
//   } else {
//     obj[key] = obj2[key];
//   }
// }

// console.log(obj);

// obj1 = { ...obj1, ...obj2 };
// console.warn(obj1);
// var obj1 = { c: 10, b: 20 };
// var obj2 = { b: 30, a: 50 };
// var obj = {};
// var key;
// for (var key1 in obj1) {
//   for (var key2 in obj2) {
//     if (key1 == key2) {
//       key = key1 && key2;
//       console.log("key", key);
//       //  obj[key] = value;
//       obj[key1] = obj1[key1] + obj2[key2];
//     }
//   }
// }
// console.log("obj", obj);
// var ans = { ...obj1, ...obj2, ...obj };
// console.log("ans", ans);
var obj1 = { a: 10, b: 20 };
var obj2 = { c: 40, b: 50 };
let ans = {};
var obj = {};
for (let key in obj1) {
  ans[key] = obj1[key];
}
console.log(ans);
for (let key in obj2) {
  ans[key] = obj2[key];
}
// for (let key in obj) {
//   ans[key] = obj[key];
// }
console.log(ans);
