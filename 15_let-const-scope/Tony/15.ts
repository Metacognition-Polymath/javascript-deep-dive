const obj1 = Object.freeze({
  tony: {
    name: "taehwan",
  },
  foo: "bar",
});

// obj1.foo = "dive";
obj1.tony.name = "tony";

interface Tony {
  name: string;
}

interface Obj2 {
  tony: Tony;
  foo: string;
}
const obj2: Readonly<Obj2> = {
  tony: {
    name: "taehwan1",
  },
  foo: "bar",
};

// obj2.foo = "bar1";
obj2.tony.name = "tony123";

console.log(obj2);
