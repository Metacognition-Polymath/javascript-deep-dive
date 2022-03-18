{
  // instanceof 연산자를 함수로 구현하기
  function isInstanceof(instance, constructor) {
    const prototype = Object.getPrototypeOf(instance);

    // 재귀 탈출 조건
    // prototype이 null이면 프로토타입 체인의 종점에 다다른 것이다.
    if (prototype === null) {
      return false;
    }

    return (
      prototype === constructor.prototype ||
      isInstanceof(prototype, constructor)
    );
  }
}
