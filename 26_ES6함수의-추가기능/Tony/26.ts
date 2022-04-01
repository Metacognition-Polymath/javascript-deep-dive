{
  // this 바인딩 방법 1
  class Prefixer1 {
    private prefix: string;
    constructor(prefix: string) {
      this.prefix = prefix;
    }
    add(arr: string[]) {
      const that = this;
      return arr.map(function (item) {
        return that.prefix + " " + item;
      });
    }
  }
  // this 바인딩 방법 2
  class Prefixer2 {
    private prefix: string;
    constructor(prefix: string) {
      this.prefix = prefix;
    }
    add(arr: string[]) {
      return arr.map(function (item) {
        return this.prefix + " " + item;
      }, this); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩 된다.
    }
  }
  // this 바인딩 방법 3
  class Prefixer3 {
    private prefix: string;
    constructor(prefix: string) {
      this.prefix = prefix;
    }
    add(arr: string[]) {
      return arr.map((item) => {
        return this.prefix + " " + item; // lexical this
      });
    }
  }
}
