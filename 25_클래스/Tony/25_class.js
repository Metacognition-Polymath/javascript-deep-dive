{
  class Person {
    name;
    gender = "male";
    constructor(name) {
      this.name = name;
    }
    age = 30;
    get name() {
      return this.name;
    }
    get age() {
      return this.age;
    }
    #book = "js deep dive"; // private 필드
    get readingBook() {
      return this.#book;
    }
  }

  const tony = new Person("tony");
  console.log(tony.age); // 30
  tony.age = 31;
  console.log(tony.age); // 31
  // console.log(tony.#book); // Property '#book' is not accessible outside class 'Person' because it has a private identifier.
  console.log(tony.book); // undefined

  console.log(tony instanceof Person); // true
}
