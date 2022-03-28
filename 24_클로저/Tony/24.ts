{
  const makeArr = (num: number) =>
    Array(num)
      .fill("")
      .map((_, index) => () => index);

  console.log(makeArr(3));
}
