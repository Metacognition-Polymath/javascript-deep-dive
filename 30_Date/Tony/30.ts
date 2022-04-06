{
  // const result = Date();
  // const result = new Date(86400000);
  // const result = new Date("2022-04-06");
  // const result = new Date("2022/04/06 22:00").toISOString();
  // const result = Date.now(); // 밀리초
  // const result = new Date("2022/04/06 22:44").toISOString(); // 2022-04-06T13:44:00.000Z
  // const result = new Date("2022/04/06 22:44").toLocaleString(); // 4/6/2022, 10:44:00 PM
  const result = new Date("2022/04/06 22:44").toLocaleString("ko"); // 2022. 4. 6. 오후 10:44:00

  console.log(result);
}
