// 예제 14-7 모듈 패턴
var Counter = (function () {
  var num = 0;
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
// console.log(Counter.num); // undefined
