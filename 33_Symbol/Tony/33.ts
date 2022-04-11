{
  const aSymbol = Symbol("mySymbol");
  // console.log(aSymbol.description); // mySymbol
  // console.log(aSymbol.toString()); // Symbol(mySymbol)
}

{
  const s1 = Symbol.for("mySymbol");
  const s2 = Symbol.for("mySymbol");
  // console.log(s1 === s2); // Error : This condition will always return 'false' since the types 'typeof s1' and 'typeof s2' have no overlap.
}

{
  const s1 = Symbol.for("mySymbol");
  // console.log(Symbol.keyFor(s1)); // mySymbol - Symbol의 키를 추출

  const s2 = Symbol("foo");
  // console.log(Symbol.keyFor(s2)); // undefined - Symbol 함수만 호출하는 것은 전역 레지스트리에 등록되지 않는다
}

{
  const Direction = {
    UP: Symbol("up"),
    DOWN: Symbol("down"),
  };

  // console.log(Direction.UP === Direction.UP); // true
}

{
  const obj = {
    [Symbol.for("aSymbol")]: 1,
    abc: "abc",
  };

  for (const key in obj) {
    console.log(key); // 아무것도 출력되지 않는다
  }

  const symbolKey = Object.getOwnPropertySymbols(obj);
  const [aSymbol] = symbolKey;
  console.log(symbolKey);
  console.log(aSymbol);
  console.log(obj[aSymbol]); // Symbol키를 사용할 땐 [대괄호]로만 접근이 가능하다
}
