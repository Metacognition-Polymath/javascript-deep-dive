const obj = { a: 1 };
// error TS2339: Property '__proto__' does not exist on type '{ a: number; }'.
// console.log(obj.__proto__ === Object.prototype);

console.log(Object.getPrototypeOf(obj)); // 으로 사용 가능
