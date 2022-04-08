{
  const strObj = new String("Tony");
  // console.log(strObj); // { [Iterator]  0: 'T', 1: 'o', 2: 'n', 3: 'y' }
}
{
  // console.log((1).toString()); // 1
  // console.log("Hello".length); // 5
}
{
  const str = "Hello World";
  const forward = str.substring(0, str.indexOf(" ")); // "Hello"
  const backward = str.substring(str.indexOf(" ") + 1, str.length); // "World"

  // console.log(forward, backward);

  const splitted = str.split(" ");
  // console.log(splitted);
}
{
  const str = "Hello World World";
  // str.replace("World", "Tony");
}

{
  const str = "Hello World";
  const result = str.replace("World", "<strong>%&</string>");
  console.log(result);
}
