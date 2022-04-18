const div = document.getElementById("multi id test");
// const div = document.getElementById("multi");

console.log(div);

console.log(divInGlobal); // 전역변수가 암묵적으로 선언되고 해당 노드가 할당된다.

var divInGlobal = "remove"; // 호이스팅 되면서 뭉개버림 id로 선언된 것을 뭉개 버림, 대신 getElementById로 가져올 수 있음

console.log(divInGlobal);

const divInGlobalElement = document.getElementById("divInGlobal");

console.log(divInGlobalElement);
