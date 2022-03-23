{
  const foo = function () {
    console.log(this);
  };

  // foo();

  const obj = { foo1: foo };
  const { foo1 } = obj;

  // foo1(); // 구조분해 할당으로 꺼낸 함수엔 this바인딩이 되지 않는다 ! -> 전역 객체
  // obj.foo1(); // this바인딩이 됨

  const bar = () => {
    this.something = "apple";
    console.log(this);
  };
  const obj1 = { bar1: bar };
  const { bar1 } = obj1;

  // bar1(); // 빈 객체 {}
  // obj1.bar1(); // 빈 객체 {}

  class Foo {
    constructor() {
      this.a = 1;
    }
    bar() {
      console.log(this.a);
    }
    bar1() {
      console.log(this);
    }
    // bar2: () => {}; // Error
    bar3 = () => {
      console.log(this);
    };
    static bar4() {
      console.log("bar4");
      console.log(this);
    }
  }

  // const fooInstance = new Foo();
  // fooInstance.bar1();
  // fooInstance.bar2();

  const person = {
    name: "Tony",
    getThis: () => {
      console.log(this); // 빈 객체 {}
    },
    getThis2() {
      console.log(this); // person
    },
  };

  // const { bar4 } = Foo;
  // bar4(); // undefined -> class와 script의 module은 strict mode라서 undefined
  Foo.bar4(); // class Foo가 바인딩 됨

  // person.getThis();
  // person.getThis2();
  // console.log(person);
}
