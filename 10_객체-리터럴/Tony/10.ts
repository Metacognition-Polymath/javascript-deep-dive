type Obj = {
  undefined: undefined;
  name: string;
};

const obj: Obj = {
  undefined: undefined,
  name: "tony",
};

console.log(obj[`${undefined}`]);
// undefined 인 경우도 key로 받을 수 있다.
// switch문 완벽 대체 가능할 듯
