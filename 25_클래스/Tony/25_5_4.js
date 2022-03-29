{
  class Person {
    static name = "tony";

    get myName() {
      return this.name;
    }

    static get whoAreYou() {
      return this.name;
    }

    static myNameIs() {
      return this.name;
    }
  }

  const tony = new Person();
  console.log(Person.myName); // undefined
  console.log(tony.myName); // undefined
  console.log(Person.whoAreYou); // tony

  const { whoAreYou, myNameIs } = Person;
  console.log(whoAreYou); // tony - 이건 바인딩이 되네? getter는 바인딩이 되는 구나
  console.log(myNameIs()); // Cannot read properties of undefined (reading 'name')
}
