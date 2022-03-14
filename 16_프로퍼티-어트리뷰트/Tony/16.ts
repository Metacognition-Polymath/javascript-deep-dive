{
  type Person = {
    name: string;
    age?: number;
  };

  const person: Person = {
    name: "Tony",
  };

  person.age = 20;

  // console.log(Object.getOwnPropertyDescriptor(person, "name"));
  // { value: 'Tony', writable: true, enumerable: true, configurable: true }

  // console.log(Object.getOwnPropertyDescriptor(person, "gender")); // undefined

  // console.log(Object.getOwnPropertyDescriptors(person));
  /*
{
  name: {
    value: 'Tony',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 20, writable: true, enumerable: true, configurable: true }
}
*/

  // const arr = [1];

  // console.log(Object.getOwnPropertyDescriptors(arr));
  /*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  length: { value: 1, writable: true, enumerable: false, configurable: false }
}
*/

  // const arr2: ReadonlyArray<number> = [1];

  // console.log(Object.getOwnPropertyDescriptors(arr2)); // 데이터 프로퍼티가 바뀌는 것이 아닌 메서드가 지원이 안되는 것으로 막음
  /*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  length: { value: 1, writable: true, enumerable: false, configurable: false }
}
  */

  const obj1: Record<string, string> = {
    some: "thing",
  };
  const obj2: Readonly<Record<string, string>> = {
    some: "thing",
  };
  console.log(Object.getOwnPropertyDescriptors(obj1)); // obj1과 obj2의 결과가 같음
  console.log(Object.getOwnPropertyDescriptors(obj2)); // obj1과 obj2의 결과가 같음

  const obj3 = Object.freeze({
    some: "thing",
  });
  console.log(Object.getOwnPropertyDescriptors(obj3));

  /*
  // obj1
{
  some: {
    value: 'thing',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
// obj2
{
  some: {
    value: 'thing',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
// obj3
{
  some: {
    value: 'thing',
    writable: false,
    enumerable: true,
    configurable: false
  }
}
  */
}
