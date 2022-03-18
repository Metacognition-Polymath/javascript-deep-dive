{
  // 예제 19_42

  const Person = (function () {
    function Person(name: string) {
      // 'this' implicitly has type 'any' because it does not have a type annotation.
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
