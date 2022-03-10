// 예제 12-33
var num = 100;
var person = { name: "Lee" };

// function changeVal(primitive: typeof num, obj: typeof person) {
//   primitive += 100;
//   obj.name = "Kim";
// }

// changeVal(num, person);

// console.log(num); // 100 - 원시 값은 원본이 훼손되지 않는다.
// console.log(person); // {name: "Kim"} - 객체는 원본이 훼손된다.

function preserveVal(primitive: typeof num, obj: typeof person) {
  primitive += 100;
  return { ...obj, name: "Tony" };
}

console.log(person);
