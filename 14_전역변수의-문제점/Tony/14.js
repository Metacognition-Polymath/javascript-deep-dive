const x = "global";

function foo() {
  console.log(x);
  // const x = "local"; // 걍 같은게 있으려면 사용되는 시점이 선언되는 시점보다 늦어야 함
}

foo();
console.log(x);
