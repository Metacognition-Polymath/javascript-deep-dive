{
  // 예제 19-64. for ... in
  const person = {
    name: "Tony",
    address: "Seoul",
  };

  for (const key in person) {
    console.log(key + ": " + person[key]);
  }
}
