{
  const testStr = "abc";
  const [char1, char2, char3, char4] = testStr; // 이게 되는 구나
  // console.log(char1, char4);
}
{
  const isIterable = (v: any) =>
    v !== null && typeof v[Symbol.iterator] === "function";
  // console.log(isIterable([])); // true
  // console.log(isIterable("")); // true
  isIterable(new Map()); // true
  isIterable(new Set()); // true
  // console.log(isIterable({})); // false
}
{
  const array = [1, 2, 3];
  const iterator = array[Symbol.iterator]();
  // console.log("next" in iterator);
  // console.log(iterator);
}
{
  const obj1 = {
    a: "a1",
    b: "b2",
  };

  for (const key in obj1) {
    // console.log(key);
  }

  // for ... in 문으로 key를 추출할바엔
  // Object.keys 또는 Object.entries를 사용할 것 같다
}

{
  const fibonacci = {
    [Symbol.iterator]() {
      let [pre, cur] = [0, 1];
      const max = 10;
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { value: cur, done: cur >= max };
        },
      };
    },
  };

  for (const num of fibonacci) {
    // console.log(num); // 1, 2, 3, 5, 8
  }

  const arr = [...fibonacci];
  // console.log(arr); // [1, 2, 3, 5, 8]
}
{
  // 이터러블을 생성
  const fibonacciFunc = function (max: number) {
    let [pre, cur] = [0, 1];
    return {
      [Symbol.iterator]() {
        const max = 10;
        return {
          next() {
            [pre, cur] = [cur, pre + cur];
            return { value: cur, done: cur >= max };
          },
        };
      },
    };
  };

  console.log([...fibonacciFunc(10)]); // [ 1, 2, 3, 5, 8 ]
}
