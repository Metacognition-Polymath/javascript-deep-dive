{
  const func1 = () => {
    // return new Error("err");
    // return Promise.resolve("res123");
    // throw new Error("err");
    // return Promise.reject("err");
    // throw "err";
    // return "a";
  };

  // console.log(func1().then((res) => console.log("res: ", res)));
  // console.log(func1());
}
{
  Promise.all;
}
{
  try {
    // new Promise((resolve, reject) => {
    //   throw new Error("err");
    // })
    //   .then((res) => console.log("then"))
    //   .catch((err) => console.error("err in Promise catch"));
    // const func1 = () => {
    //   // return new Error("err");
    //   // return Promise.resolve("res123");
    //   throw new Error("err");
    //   // return Promise.reject("err");
    //   // throw "err";
    //   // return "a";
    // };
    // func1();
  } catch (error) {
    console.error("err");
  }
  // throw new Error("err");
  console.log("a");
}
