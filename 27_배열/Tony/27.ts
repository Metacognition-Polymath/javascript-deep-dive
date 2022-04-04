{
  const arr = ["tony", "js", "ts"];

  const [nickName, js, ts] = arr;

  console.log("nickName");

  // const result = [1, [2, [3]]].flat(); // default : 1단계 => [1, 2, [3]]
  // const result = [1, [2, [3]]].flat(2); // [1, 2, 3]
  const result = [1, [2, [3]]].flat(Infinity); // [1, 2, 3]
  console.log(result);
}
