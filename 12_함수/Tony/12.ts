const func1 = function add(x: number, y: number) {
  console.log(arguments);
  return x + y;
};

// console.log("add", add(1, 2)); // TS2304: Cannot find name 'add'.
console.log("func1", func1(1, 2));

const func2 = (x: number, y: number) => {
  // console.log(argument); //TS2304: Cannot find name 'argument'.
  return x + y;
};

console.log("func2", func2(1, 2));
