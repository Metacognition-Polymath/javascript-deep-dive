{
  // 예제 18-3.
  function square(number: number) {
    return number * number;
  }

  console.log(Object.getOwnPropertyDescriptors(square));

  console.log(Object.getOwnPropertyDescriptor(square, "__proto__")); // undefined
  // __proto__는 함수의 프로퍼티가 아니다
  // __proto__는 Object.prototype 객체의 접근자 프로퍼티다
}
