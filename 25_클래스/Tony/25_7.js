{
  class Outer1 {
    name = "outer1";
    get name() {
      return this.name;
    }
  }
  class Outer {
    constructor() {}
    // class Inner { // 중첩 클래스는 사용할 수 없다
    //   constructor() {}
    //   innerMethod() {
    //     return 'I am inner'
    //   }
    // }

    get outer1Name() {
      const outer1 = new Outer1(); // 외부 클래스를 사용가능하지만 생성자로 dependency injection을 받는게 좋을 것이다
      return outer1.name;
    }

    get innerClass() {
      return this.Inner;
    }
  }

  console.log(new Outer().outer1Name);
}
