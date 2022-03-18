{
  // 예제 19-74
  const person = {
    name: "Tony",
    address: "Seoul",
  };

  Object.entries(person).forEach(([key, value]) => console.log(key, value));
}
