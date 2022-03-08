console.log("str".toUpperCase()); // 원시값을 객체처럼 사용하면
// 원시 값을 감싸는 래퍼 객체로 자동 변환된다. - 숫자는 .찍으면 소수점이라 안됨
var str = "str";
console.log(str[0]);

str[0] = "A"; // 'String' 형식의 인덱스 시그니처는 읽기만 허용됩니다. => Error
