var x = 1;

function foo() {
  var x = 10;
  bar(); // 자바스크립트는 렉시컬 스코프 또는 정적 스코프(정의된 스코프)를 따르기 때문에 1이 출력된다.
}

function bar() {
  console.log(x);
}

foo();
bar();
