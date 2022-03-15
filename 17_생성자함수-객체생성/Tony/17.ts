{
  // Regex
  const reg = /ab+c/i;

  // 예제 17-12. 생성자함수는 암묵적으로 바인딩된 this가 인스턴스로 반환된다
  // function Circle(radius: number) {
  //   this.radius = radius;
  //   this.getDiameter = function () {
  //     return 2 * this.radius;
  //   };

  //   // return 100; // void 함수만 'new' 키워드로 호출할 수 있습니다.
  // }

  // const circle = new Circle(1);
  // console.log(circle);

  const baz = {
    x: function () {}, // constructor 존재
  };
  new baz.x(); // 걍 둘다 안됨
  const obj = {
    x() {}, // non-constructor : constructor 없음
  };
  new obj.x(); // 걍 둘다 안됨
}
