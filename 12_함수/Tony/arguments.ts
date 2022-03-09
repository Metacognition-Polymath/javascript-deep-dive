function sumByArguments() {
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}

function sum(...numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0);
}

// console.log(sumByArguments(1, 2, 3)); // error TS2554: Expected 0 arguments, but got 3.
console.log(sum(1, 2, 3));
