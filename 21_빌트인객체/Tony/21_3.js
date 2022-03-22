{
  // 예제 21-3

  const numObj = new Number(1.5); // [Number: 1.5]
  console.log(numObj);

  // toFixed는 Number.prototype의 프로토타입 메서드다
  console.log(numObj.toFixed()); // 반올림 하여 문자열로 반환한다 => 2

  // isInteger는 Number의 정적 메서드이다
  console.log(Number.isInteger(0.5)); // false
}
