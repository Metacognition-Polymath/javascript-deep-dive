{
  function multiply(x: number, y: number) {
    console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
    const iterator = arguments[Symbol.iterator]();
    console.log(iterator); // Object [Array Iterator] {}

    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }

    return x * y;
  }

  multiply(1, 2);
}
