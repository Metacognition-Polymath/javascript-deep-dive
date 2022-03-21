# 20. strict mode

## 20.1 strict mode 란?

- strict mode : 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 문제을 일으킬 수 있는 코드에 대해 명시적 에러를 발생시킴
- ESLint를 사용해도 유사한 효과를 얻을 수 있음
  - ESLint는 오류 + 코딩 컨벤션을 강제할 수 있어서 더욱 효과가 좋음
- vs code에서 ESLint 사용하는 방법
  - https://poiemaweb.com/eslint
- 클래스와 모듈은 기본적으로 strict mode가 적용 됨

## 20.2 strict mode의 적용

- 'use strict'

## 20.3 전역에 strict mode를 적용하는 것은 피하자

- script 단위로 적용

## 20.4 함수 단위로 strict mode를 적용하는 것도 피하자

## 20.5 strict mode가 발생시키는 에러

- 암묵적 전역
  - x = 1;
- 변수, 함수, 매개변수의 삭제
  - delete
- 매개변수 이름의 중복

```js
function foo(x, x) {
  return x + x;
}
```

- with 문의 사용
  - with문 : 전달된 객체를 스코프 체인에 추가
  - 사용하지 않는 것이 좋다

## 20.6 strict mode 적용에 의한 변화

- 일반 함수의 this
  - undefined가 바인딩 됨
- arguments 객체
  - 매개변수에 전달된 인수를 재할당하여 변경해도 arguments객체에 반영되지 않는다
