{
  // 예제 17-12. 생성자함수는 암묵적으로 바인딩된 this가 인스턴스로 반환된다
  function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };

    return 100; // void 함수만 'new' 키워드로 호출할 수 있습니다.
  }

  const circle = new Circle(1); // 100이 아닌 circle instance가 return 된다
  console.log(circle);
}
