{
  const sampleArr = [
    {
      a: "aa",
      b: "bb",
    },
    {
      a: "aa",
      b: "bb",
    },
  ];

  // const map = new Map(sampleArr[0]); // sampleArr의 요소인 { a: string, b: string }은 이터러블이 아니기 때문에 추가 불가능
  const map = new Map();
  map
    .set({ a: "aa", b: "bb" }, { a: "aa", b: "bb" })
    .set({ a: "aa", b: "bb" }, { a: "aa", b: "cc" }); // {} !== {} 이기 때문에 중복이여도 추가가 된다

  console.log(map);
  console.log(map.get({ a: "aa", b: "bb" })); // undefined - 모든 요소가 key가 가능하지만 찾을 수 없으면 무슨 의미인가...
}

{
  const obj1 = { a: "aa", b: "bb" };
  const map1 = new Map();
  map1.set(obj1, obj1);
  console.log(map1.get(obj1)); // 이건 찾아 지네
}
