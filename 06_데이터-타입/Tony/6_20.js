var key = Symbol("key1");
console.log("key test");
console.log(1);
console.log(key); // Symbol(key1)
console.log(typeof key); // symbol

var obj = {};

obj[key] = "value";
console.log(obj[key]);

const key1 = Symbol(1);
const key2 = Symbol(1);
console.log(key2);
console.log(key1 === key2);
