class Test {
  a = 1;
  add(arr) {
    return arr.map((item) => {
      console.log(this.a, item);
    });
  }
}

const test = new Test();
test.add([3, 3]);
