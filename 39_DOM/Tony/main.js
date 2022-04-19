const div = document.getElementById("multi id test");
// const div = document.getElementById("multi");

console.log(div);

console.log(divInGlobal); // 전역변수가 암묵적으로 선언되고 해당 노드가 할당된다.

var divInGlobal = "remove"; // 호이스팅 되면서 뭉개버림 id로 선언된 것을 뭉개 버림, 대신 getElementById로 가져올 수 있음

console.log(divInGlobal);

const divInGlobalElement = document.getElementById("divInGlobal");

console.log(divInGlobalElement);

// const redDivs = document.getElementsByClassName("red");
// const redDiv = document.getElementById("red");

// const redDivsByQS = document.querySelectorAll(".red");
// const redDivByQS = document.querySelector(".red");

const colorList = document.getElementById("colorList");

colorList.addEventListener("click", (event) => {
  const matchesMain = event.target.matches(".main");
  const matchesRed = event.target.matches(".red");
  const closestMain = event.target.closest(".main");
  const closestRed = event.target.closest(".red");

  console.log("matchesMain", matchesMain);
  console.log("matchesRed", matchesRed);
  console.log("closestMain", closestMain);
  console.log("closestRed", closestRed);
});
// matches, closest 둘다 자신 포함 부모에서 검색
