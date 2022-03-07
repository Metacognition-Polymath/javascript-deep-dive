# 9. 타입 변환과 단축 평가

## 9.1 타입 변환이란?

## 9.2 암묵적 타입 변환

- 문자열 타입으로 변환

```js
// 예제 9-6
console.log(undefined + "");
console.log(`${undefined}`);
```

- 이런 코드를 리뷰할 때 뭐라 할까?

- 숫자 타입으로 변환

```js
console.log(1 - "1"); // 0
```

- 불리언 타입을 변환
  - false
    - false
    - ''
    - 0, -0
    - null
    - undefined
    - NaN

```js
console.log(!null); // true
```

## 9.3 명시적 타입 변환

- 문자열 타입으로 변환
  - String.prototype.toString()
- 숫자 타입으로 변환
  - parseInt
  - -
- 불리언 타입으로 변환
  - !!
  - Boolean('something');

## 9.4 단축 평가

- 논리 연산자를 사용한 단축 평가
  - && -> true인지 검사하는 if문 대체 가능
  - || -> false인지 검사하는 if문 대체 가능
- 함수 매개변수에 기본값을 설정할 때

```js
function getStringLength(str) {
  str = str || ""; // false이면 기본값으로 ""을 할당
  return str.length;
}
```

- 옵셔널 체이닝 연산자 (ECMAScript2020 에서 도입)

  - something?.anything
    - something이 undefined 또는 null 이면 undefined을 반환

- null 병합 연산자
  - a ?? b
    - a가 null 또는 undefined 이면 b를 반환하고 아니면 a를 반환
