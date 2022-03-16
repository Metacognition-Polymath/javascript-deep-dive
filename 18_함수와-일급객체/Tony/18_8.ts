{
  // ES6 Rest parameter
  function sum(...args: number[]) {
    return args.reduce((acc, cur) => acc + cur);
  }

  console.log(sum(1, 3));
}
