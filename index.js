var obj1 = { a: 10, b: 20 };
var obj2 = { b: 30, d: 80 };

let obj = {};
for (let key in obj1) {
  obj[key] = obj1[key];
}

for (let key in obj2) {
  if (obj[key]) {
    obj[key] += obj2[key];
  } else {
    obj[key] = obj2[key];
  }
}
console.log("obj", obj);
