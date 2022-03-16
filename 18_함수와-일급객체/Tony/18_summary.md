# 18. 함수와 일급 객체

## 18.1 일급 객체

- 일급 객체 특징

  1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다
  2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
  3. 함수의 매개변수에 전달할 수 있다
  4. 함수의 반환값으로 사용할 수 있다

- 자바스크립트 함수는 위 조건을 모두 만족하므로 일급 객체이다.

- 번외 일급 함수
  - 참고 : https://developer.mozilla.org/ko/docs/Glossary/First-class_Function
  - 함수를 다른 변수와 동일하게 다루는 언어

## 18.2 함수 객체의 프로퍼티

### arguments 프로퍼티

- 유사배열 객체와 이터러블
  - ES6에서 도입된 이터레이션 프로토콜(34.1장)을 준수하면 순회가능한 자료구조인 이터러블이 된다.
  - 이터러블의 개념이 없었던 ES5에서 arguments 객체는 유사 배열 객체로 구분되었다.
  - 하지만 이터러블이 도입된 es6부터 arguments 객체는 유사배열 객체이면서 동시에 이터러블이다

### caller 프로퍼티

- 함수를 부르는 함수
- vs callie : 불림을 당하는 함수

### length 프로퍼티

- 매개변수의 개수

### name 프로퍼티

### `__proto__` 접근자 프로퍼티

- ts에선 Object의 스태틱 메서드를 사용
  - https://stackoverflow.com/questions/22661133/typescript-and-the-proto-attribute

### prototype 프로퍼티
