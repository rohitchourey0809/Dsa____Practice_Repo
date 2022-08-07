var obj1 = { a: 10, d: 20 };
var obj2 = { c: 30, d: 100 };

// var spreadobj = { ...obj1, ...obj2 };
// console.log(spreadobj);

// var Concatobj = [0].concat(obj1,obj2);
// console.log(Concatobj);

// let ob1 = { c: 10, b: 20 };
// let ob2 = { b: 30, a: 40 };

let obj = {};

//first copy the entire object of first copy
for (let key in obj1) {
  obj[key] = obj1[key];
}

// console.log(obj);

for (let key in obj2) {
  if (obj[key]) obj[key] += obj2[key];
  else obj[key] = obj2[key];
}

console.log(obj);
