var obj1 = { a: 10, b: 20 };
var obj2 = { c: 30, b: 50 };

// var arr = [1, 2, 3];
// console.log({ ...arr });

// var obj = new Set({ a: 10, d: 20 });
// console.log([...obj]);

var newobj = Object.assign(obj1, obj2);
console.log(newobj);
// console.log(obj1);
