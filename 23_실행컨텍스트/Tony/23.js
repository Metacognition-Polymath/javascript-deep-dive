debugger; // 디버깅 모드로 바로 실행
function funcA() {
  function funcAB() {
    function funcABC() {
      throw new Error("error in funcABC");
      console.log("funcABC");
    }
    funcABC();
    console.log("funcAB");
  }
  funcAB();
  console.log("funcA");
}

funcA();

console.log("Tony");
