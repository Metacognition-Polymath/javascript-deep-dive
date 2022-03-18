{
  // 예제 19_42

  const Person = (function () {
    function Person(name) {
      this.name = name;
    }

    Person.prototype = {
      sayHello() {
        console.log("hello world!");
      },
    };

    return Person;
  })();

  const me = new Person("tony");
  me.sayHello();
}
