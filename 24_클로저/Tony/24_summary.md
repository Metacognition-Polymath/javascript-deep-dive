# 24. 클로저

- 클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합
  - 함수가 선언된 렉시컬 환경

```js
const x = 1;

function outerFunc() {
  const x = 10;
  innerFunc();
}

function innerFunc() {
  console.log(x); // 1
}

outerFunc();
```

## 24.1 렉시컬 스코프

- 함수의 상위 스코프 : 렉시컬 환경의 외부 렉시컬 환경에 대한 참조값을 결정하는 것과 같다

## 24.2 함수 객체의 내부 슬롯 [[Environment]]

- 함수는 자신의 내부 슬롯 [[Environment]]에 자신이 정의된 환경, 즉, 상위 스코프의 참조를 저장한다.
  - 함수가 선언된 실행컨텍스트의 렉시컬 환경을 가리킨다

함수 코드 평가 순서

1. 함수 실행 컨텍스트 생성
2. 함수 렉시컬 환경 생성
   2.1. 함수 환경 레코드 생성
   2.2. this 바인딩
   2.3. 외부 렉시컬 환경에 대한 참조 결정

```js
const x = 1;
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

const innerFunc = outer();
innerFunc(); // 10
```

- outer함수의 실행 컨텍스트는 실행 컨텍스트에서 제거 되지만 outer함수의 렉시컬 환경까지 소멸하는 것은 아니다

  - outer함수의 렉시컬 환경은 inner함수의 [[Environment]] 내부 슬롯에 의해 참조되어 있고
  - inner함수는 전역변수 innerFunc에 의해 참조되고 있으므로 가비지 컬렉션의 대상이 되지 않기 때문이다.

- 모든 함수를 클로저라고 하진 않는다.

  - 상위 스코프의 식별자를 참조하는 함수를 클로저라고 한다

- 불필요한 메모리 점유 -> 모던 자바스크립트 엔진은 최적화가 잘 되어 있어서
  클로저가 참조하지 않는 식별자는 기억하지 않는다.

## 24.4 클로저의 활용

- 상태를 은닉하고
- 특정 함수에게만 상태 변경을 허용하기 위해서 사용

```js
const increase = (function () {
  let num = 0;
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

console.log(increase()); // 1
console.log(increase()); // 2
```

- for문에서 var를 쓰면 전역으로 동작하기 때문에 오동작할 가능성이 높다
  - let을 쓰면 해결 된다
