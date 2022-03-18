{
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! I'm ${this.name}`);
  };

  // 정적 프로퍼티
  Person.staticProp = "static prop";

  // 정적 메서드
  Person.staticMethod = function () {
    console.log("staticMethod");
  };

  const me = new Person("tony");

  Person.staticMethod(); // 'staticMethod';

  me.staticMethod(); // TypeError: me.staticMethod is not a function
}
